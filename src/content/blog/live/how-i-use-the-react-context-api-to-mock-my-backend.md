---
title: 'How I use the React Context API to mock my backend'
description: 'I used to spin up a bunch of backend services and emulators to develop my frontend. Now, I use the React Context API to develop my frontend in isolation!'
tags:
- web-development
- react
publishDate: '2022-10-22'
slug: 'how-i-use-the-react-context-api-to-mock-my-backend'
---

When developing your React application, do you **have to run your entire backend environment** locally?

In the past, I **had to run all the microservices, emulators, databases, etc.** that my frontend depended on when **developing just my frontend**.

This was fine to an extent, but I experienced **various drawbacks and limitations** (and not just from my MacBook being old and slow):

- Overhead of running entire backend environment locally (obviously!)
- Parts of backend were still in development, so parts of frontend could not be developed yet
- Hassle setting up backend environment for local development on another machine
- Difficulty testing edge cases based on backend data. For example, how will my frontend behave with large amounts of data?
- Inability to run E2E or functional tests without running entire backend

I needed a way to **develop my frontend React application in isolation** from my backend!

## The Concept

<img 
    src="/blog/how-i-use-the-react-context-api-to-mock-my-backend/concept.png" 
    alt="Diagram of supporting mocked mode via React Context API" 
    style="display: flex; margin: 2rem auto; max-width: 100%;"/>

Ultimately, we want our React application to support **two different modes**:

1. **Default Mode**: Interact with **backend** environment
2. **Mocked Mode**: Interact with **mocks** instead of backend environment

Supporting the **mocked mode** will allow us to develop or test our frontend in **isolation**.

To support these two different modes, we can **leverage the React Context API as a dependency injection mechanism**.

> This approach **uses the React Context API**, but you could also just use a **custom React hook** in some circumstances. However, using the context API approach opens the opportunity for:
>
> - Using separate React hooks per mode **without breaking [the rule of conditionally rendering hooks](https://reactjs.org/docs/hooks-rules.html)**
> - Code splitting mocked mode to help **cut down the bundle size** in production
>
> We'll explore these other topics another time.

## Example

Let's introduce our example React application. Currently, we use the **Fetch API** to fetch data from the backend:

```jsx
const CatFact = () => {
  const [catFact, setCatFact] = useState();

  useEffect(() => {
    // Using Fetch API
    fetch('/cat-fact')
      .then((response) => response.json())
      .then(({ fact }) => setCatFact(fact));
  }, []);

  return <div>{catFact}</div>;
};
```

By directly using fetch, our React application is **dependent** interacting with **our backend**. We will **not be able** to run this React application in **isolation** from our backend.

> We'll use the Fetch API in this example, but this approach **also works for other external interactions** (ex: a module that makes backend requests, such as the Firebase SDK). **If you really just need to mock fetch, consider using [Mock Service Worker](https://mswjs.io/)**. We'll discuss this more in a bit.

### Injecting Fetch via a React Context

<img 
    src="/blog/how-i-use-the-react-context-api-to-mock-my-backend/real-fetch.png" 
    alt="Diagram of injecting the real fetch instance via a React Context" 
    style="display: flex; margin: 2rem auto; max-width: 100%;"/>

To loosen this dependency on our backend, we **need to abstract fetch** from our React application.

By abstracting fetch, we'll be able to pass (aka inject) a **real fetch** instance _or_ a **mock fetch** instance throughout our application. Injecting a **mock fetch** instance will allow us to develop our application in **isolation from the backend**.

That said, let's start by **creating a React Context** so that we can **inject fetch** throughout our application:

```jsx
const FetcherContext = React.createContext();
```

Next, we'll **create a provider component** for our React Context. This provider is responsible for injecting the **real fetch** instance:

```jsx
const RealFetcherProvider = ({ children }) => {
  const value = { fetch: fetch };

  return (
    <FetcherContext.Provider value={value}>{children}</FetcherContext.Provider>
  );
};
```

Next, let's **wrap our application with the context provider** so that we can resolve fetch throughout our application:

```jsx
const App = () => {
  return (
    <RealFetcherProvider>
      <CatFact />
    </RealFetcherProvider>
  );
};
```

Finally, we're ready to **use the fetch injected by the context provider** in our component:

```jsx
const CatFact = () => {
  const [catFact, setCatFact] = useState();

  // Resolving fetch from context
  const { fetch } = useContext(FetcherContext);

  useEffect(() => {
    // Using fetch from context
    fetch('/cat-fact')
      .then((response) => response.json())
      .then(({ fact }) => setCatFact(fact));
  }, []);

  return <div>{catFact}</div>;
};
```

Good start! Our **fetch instance is now configurable** via our React Context. This gives us flexibility to configure fetch **from the top of our application**.

### Injecting a Mocked Fetch

<img 
    src="/blog/how-i-use-the-react-context-api-to-mock-my-backend/mock-fetch.png" 
    alt="Diagram of injecting the mock fetch instance via a React Context" 
    style="display: flex; margin: 2rem auto; max-width: 100%;"/>

We now have the **infrastructure to inject a mock fetch**, which will allow us to develop our app in **isolation**.

However, we need a mock fetch instance. Let's **create a simple mock fetch instance** that will satisfy our application's needs.
Currently, our application simply makes a **GET /cat-fact** request, so that's **all we need to support for now**.

```js
// Need to align with the real fetch method interface!
const mockFetch = async (url, { method = 'GET' } = {}) => {
  if (url === '/cat-fact') {
    if (method === 'GET') {
      return {
        json: async () => ({ fact: 'Some cats can swim.' }),
      };
    }
  }

  throw new Error('Request not supported by mocks');
};
```

Our mock fetch interface matches the real fetch interface. That said, we can **leverage polymorphism** and **use our context** to inject the mock fetch.

We'll **create another provider component** for our React Context. This provider will inject the **mock fetch** instance:

```jsx
const MockFetcherProvider = ({ children }) => {
  const value = { fetch: mockFetch };

  return (
    <FetcherContext.Provider value={value}>{children}</FetcherContext.Provider>
  );
};
```

Lastly, let's hard-code our app to **use the mock fetcher** for testing:

```jsx
const App = () => {
  return (
    // Now using the mock fetch instead of the real fetch.
    // (renders mock cat fact "Some cats can swim.")
    <MockFetcherProvider>
      <CatFact />
    </MockFetcherProvider>
  );
};
```

Now our application uses the **mock fetch instance** to get data. We're **no longer hitting our backend API**, which means we can **develop our application in isolation** from the backend!

### Determining Which Fetch to Inject

We can't just **constantly hard-code** our app between using the **mock fetch** and **real fetch**! We need a way to **tell our app** when to use **mocks**, and when to use **our backend**.

There are probably a few different ways to do this, but the **easiest solution I've used is by setting a URL query parameter**.

<img 
    src="/blog/how-i-use-the-react-context-api-to-mock-my-backend/mock-query-param.png" 
    alt="Diagram of determining the fetch instance to inject via a query param" 
    style="display: flex; margin: 2rem auto; max-width: 100%;"/>

We'll use a query parameter named **mock**:

- When **mock=true**, we'll use the **mock fetch** instance
- Otherwise, we'll use the **real fetch** instance

> In some applications, you might have **multiple different mock modes** (ex: a default mock mode, mock modes for edge cases, etc.). To switch between different mock modes, you could **pass the "name" of the mock mode via the mock query parameter**. We can demo this another time.

Let's create another component that will **render the appropriate provider** based on a query parameter:

```jsx
const FetcherProvider = ({ children }) => {
  const mockUrlParam = new URLSearchParams(window.location.search).get('mock');

  const isMockMode = mockUrlParam === 'true';

  if (isMockMode) {
    return <MockFetcherProvider>{children}</MockFetcherProvider>;
  }

  return <RealFetcherProvider>{children}</RealFetcherProvider>;
};
```

> It might make sense to **disable mock mode in production** environments. Feel free to add a check for that here.

Finally, let's update our app to **use this parent provider**:

```jsx
const App = () => {
  return (
    // Now using the parent provider that determines the fetch to inject
    <FetcherProvider>
      <CatFact />
    </FetcherProvider>
  );
};
```

Assuming our app renders on **https://seandodson.com/**, we can:

- Use our mock data by hitting **https://seandodson.com?mock=true**
- Use our backend by just hitting **https://seandodson.com/**

Success! Now, we can switch between using our **backend** or using our **mock data** via a **simple query parameter**.

## Why Not Use Mock Service Worker or Similar Tools?

**[Mock Service Worker](https://mswjs.io/)** and similar tools are **fantastic for mocking fetch**. Consider using MSW if you just need to mock fetch! However, keep this approach in mind:

- If you want to **mock a non-fetch dependency**
- If you'd **prefer to not use a third-party mocking package** like MSW
- For other **dependency injection** concerns in your React applications

## Conclusion

By leveraging **the React Context API**, we're able to **inject a mock fetch instance** throughout our application at runtime.

There are still many ways we could enhance this experience, such as by:

- Demonstrating how to support multiple mock modes
- Using code splitting to split mock behavior from the main bundle
- Disabling mock mode in production
- Using mock modes in integration or E2E tests to prevent excessive module or network mocking

Regardless, we can now develop and test our application in **isolation from our backend**!

_Want to see the code from this article? [Check out the live code sandbox here](https://codesandbox.io/s/react-context-api-to-enhance-development-uvkg9m)._
