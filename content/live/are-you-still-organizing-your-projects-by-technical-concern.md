---
title: 'Are you still organizing your projects by technical concern?'
description: 'All my services would go in a messy "services" folder of unrelated behavior. All my React components would go in a massive "components" folder. I switched to vertical slice architecture and I''m never looking back!'
publishDate: '2023-01-12'
---

The day has arrived. We're starting a new software project! 🎉

After hours of project configuration, we make our first move towards development:

```bash
mkdir src
```

Nice start!

Next, we create a few more folders related to ~~our domain~~ the technology we're using. **We've decided to organize our project by technical concern**:

```bash
└── src
    ├── components
    ├── hooks
    └── services
```

Hmm...

After a hard week of work, we've completed our first feature:

```bash
└── src
    ├── components
    │   ├── app
    │   ├── post
    │   └── post-page
    ├── hooks
    │   └── use-post
    └── services
        └── get-post-by-id-query
```

**For a small project, organizing by technical conern has turned out fine!** It might not be ideal, but our project is small enough that it's not much of a problem.

A few months pass, and we've added quite a few features to our application:

```bash
└── src
    ├── components
    │   ├── app
    │   ├── container
    │   ├── create-post-form
    │   ├── create-post-page
    │   ├── current-user-provider
    │   ├── feed
    │   ├── feed-page
    │   ├── login-form
    │   ├── login-page
    │   ├── post
    │   └── post-page
    ├── hooks
    │   ├── use-create-post
    │   ├── use-current-user-context
    │   ├── use-feed
    │   ├── use-login
    │   └── use-post
    └── services
        ├── create-post-command
        ├── get-feed-query
        ├── get-post-by-id-query
        └── login-command
```

Uh-oh! 😅

## What's Wrong with Organizing by Technical Concern?

Let's continue with our example application.

We've brought a new developer, John, onto our team!

John is trying to understand our application's domain and what our application does. However, by observing our folder structure, John is **struggling to understand our application's purpose**. This is **due to our folders representing technical concerns, not domain concepts**:

```bash
└── src
    ├── components
    ├── hooks
    └── services
```

A week passes, and John is now trying to understand how authentication works in our application. However, he is **having trouble understanding all the pieces that make up our application's authentication**. This is **due to how spread out authentication concepts are** in our application:

```bash
└── src
    ├── components
    │   ├── ...
    │   ├── current-user-provider
    │   ├── ...
    │   ├── login-form
    │   ├── login-page
    │   └── ...
    ├── hooks
    │   ├── ...
    │   ├── use-current-user-context
    │   ├── ...
    │   ├── use-login
    │   └── ...
    └── services
        ├── ...
        ├── login-command
        └── ...
```

Another week passes, and John is finally ready to fix a bug related to logging in. However, he is **having trouble finding all the pieces related to login that need to change**. Again, this is **due to how spread out login concepts are** in our application:

```bash
└── src
    ├── components
    │   ├── ...
    │   ├── login-form
    │   ├── login-page
    │   └── ...
    ├── hooks
    │   ├── ...
    │   ├── use-login
    │   └── ...
    └── services
        ├── ...
        ├── login-command
        └── ...
```

As we've discovered with John's experience, **organizing by technical concern makes it difficult to**:

- **Understand the application's purpose**: Looking at the folder structure, it's hard to determine what the application does. All we know is that it has components, hooks, services, etc.
- **Recognize relationships and dependencies**: With domain concepts spread across our folders by technical concern, we cannot easily see which concepts are related.
- **Make changes**: Do we change all the components, hooks, or services in our application at once? Sometimes, but we typically make changes related to a domain concept. However, since our application is organized by technical concern, it's unclear what needs to change together.

We need a better solution. 🤔

<img 
  src="/blog/organizing-by-technical-concern/cohesion.png" 
  alt="A metaphor of organizing by technical concern versus vertical slice architecutre." 
  style="display: flex; margin: 2rem auto; max-width: 100%;"/>

## Hello, Cohesion!

Continuing with our example application, John finally fixes the bug related to logging in. As part of his pull request, he decides to re-organize the login behavior:

```bash
└── src
    ├── features
    │   └── login
    │       ├── login-page
    │       ├── login-form
    │       ├── use-login
    │       └── login-command
    ├── components
    ├── hooks
    └── services
```

What the heck! **Components, hooks, and services all grouped together** in the same folder? This is terrible!

Or is it?

**Relating back to the issues with grouping by technical concern, this approach seems to solve... all of them**:

- **Understand the application's purpose**: The login folder describes that our application allows users to log in.
- **Recognize relationships and dependencies**: The login folder helps us identify all the pieces of our application related to logging in.
- **Make changes**: Again, we typically make changes related to a domain concept. The login folder allows us to easily discover and make changes related to logging in.

So what is this magic? This approach is based on **Vertical Slice Architecure (VSA)**, also know as feature-sliced architecutre, and focuses on one concept:

**Cohesion.**

Cohesion is all about **grouping related concepts together**. Related concepts likely reference each other and **are likely to change together**.

In terms of VSA, this means **organizing our application by domain concepts**. This requires us to **think of our application as modules that represent pieces of our domain**.

How can we apply this approach to the rest of our application?

> **Disclaimer:** I did not discover VSA! However, I have done tons of research on VSA and have applied it to my own applications.
>
> Many resources on VSA are theoretical and do not demonstrate how to apply VSA. **The following sections intend to be a practical guide.**
>
> If you'd like to see another practical guide on applying VSA, check out this example on my YouTube channel where I convert a .NET application: [.NET Vertical Slice Architecture Series](https://www.youtube.com/playlist?list=PLA8ZIAm2I03hFYKicAV9UBPeeJrDpT6r4)

## Going All In on Vertical Slice Architecture: An Example

Our team has decided that we really like John's VSA approach applied to the login behavior! **We've decided to apply this architecture to the rest of our application**.

> Is this going to be **one of those rants where someone forces you to use a specific folder structure?**
>
> **Nope!** The main goal is that you're accomplishing cohesion. You can apply this concept to whatever folder structure your heart desires. The following simply represents a practical example.

### Features

Following up on the existing login feature folder, we'll **break down our technical concern folders into more feature folders that represent our domain**:

```bash
└── src
    ├── features
    │   ├── view-post
    │   │   ├── post-page
    │   │   ├── post
    │   │   ├── use-post
    │   |   └── get-post-by-id-query
    │   ├── create-post
    │   │   ├── create-post-page
    │   │   ├── create-post-form
    │   │   ├── use-create-post
    │   |   └── create-post-command
    │   ├── view-feed
    │   │   ├── feed-page
    │   │   ├── feed
    │   │   ├── use-feed
    │   |   └── get-feed-query
    │   ├── current-user
    │   │   ├── current-user-provider
    │   |   └── use-current-user-context
    │   └── login
    │       ├── login-page
    │       ├── login-form
    │       ├── use-login
    │       └── login-command
    └── components
        ├── app
        └── container
```

> Your **feature folder names can also line up with use cases** that your application supports. For example, our application allows users to view a post, create a post, view their feed, and login. We can clearly see that from the feature folder names!

Hooray! It's already much **easier to understand our application's purpose, recognize relationships, and identify what would need to change** per domain concept.

### Pages

Unfortunately, it is **difficult to understand how the feature modules relate to each other**. For example, the feed-page in the view-feed feature might reference the post component in the view-post feature. This relationship is not clear from our folder structure.

Given this unclear relationship, we've decided to propose a guideline: **feature modules should not reference other feature modules**. This guideline helps avoid **"feature spaghetti"** where all the features might end up referencing each other.

<img 
  src="/blog/organizing-by-technical-concern/features.png" 
  alt="An example of feature spaghetti caused by dependencies between feature slices." 
  style="display: flex; margin: 2rem auto; max-width: 100%;"/>

> Feel free to **enforce whatever guidelines your team agrees on!** This is just a practical example of how to achieve cohesiveness via VSA.

This is helpful, but how can our feed page reference the post component now? We'll need to add a layer _above_ our feature modules: **pages**!

<img 
  src="/blog/organizing-by-technical-concern/pages.png" 
  alt="Diagram of adding a pages layer to our vertical slice architecture." 
  style="display: flex; margin: 2rem auto; max-width: 100%;"/>

The pages layer:

- Contains the **full pages that map to routes**
- Is **above the features layer** and can **aggregate multiple features together** in order to form the full page experience
- Is a helpful **entry point** to debugging and understanding the application

Let's extract the pages from our feature modules:

```bash
└── src
    ├── pages
    |   ├── app
    │   ├── post-page
    │   ├── create-post-page
    │   ├── feed-page
    │   └── login-page
    ├── features
    │   ├── view-post
    │   │   ├── post
    │   │   ├── use-post
    │   |   └── get-post-by-id-query
    │   ├── create-post
    │   │   ├── create-post-form
    │   │   ├── use-create-post
    │   |   └── create-post-command
    │   ├── view-feed
    │   │   ├── feed
    │   │   ├── use-feed
    │   |   └── get-feed-query
    │   ├── current-user
    │   │   ├── current-user-provider
    │   |   └── use-current-user-context
    │   └── login
    │       ├── login-form
    │       ├── use-login
    │       └── login-command
    └── components
        └── container
```

> The pages layer is also a **logical place to move our app component**, which was previously stranded in the components folder.

Now, our feed page can reference the post component without us having to introduce a dependency between the view-feed and view-post features!

### Entities

So... remember how we decided that **feature modules shouldn't depend on other feature modules**?

Despite extracting the pages layer, **we're still experiencing this issue**! For example, all of our features will need to reference the current-user feature in order to get information about the logged in user.

<img 
  src="/blog/organizing-by-technical-concern/entities.png" 
  alt="Diagram of adding an entities layer to our vertical slice architecture." 
  style="display: flex; margin: 2rem auto; max-width: 100%;"/>

This time, we'll need a layer _below_ our features layer: **entities**!

The entities layer:

- Contains **"nouns"** that represent our **domain**
- Is **below the features layer** and can be referenced by any feature module

There are a few entities that we need to extract:

- **Current user**: So that features can get information about the logged in user
- **Post**: It turns out our view-feed feature module needs to reference the post component

Let's extract entities from our feature modules:

```bash
└── src
    ├── pages
    |   ├── app
    │   ├── post-page
    │   ├── create-post-page
    │   ├── feed-page
    │   └── login-page
    ├── features
    │   ├── view-post
    │   │   ├── use-post
    │   |   └── get-post-by-id-query
    │   ├── create-post
    │   │   ├── create-post-form
    │   │   ├── use-create-post
    │   |   └── create-post-command
    │   ├── view-feed
    │   │   ├── feed
    │   │   ├── use-feed
    │   |   └── get-feed-query
    │   └── login
    │       ├── login-form
    │       ├── use-login
    │       └── login-command
    ├── entities
    │   ├── post
    │   │   └── post
    │   └── current-user
    │       ├── current-user-provider
    │       └── use-current-user-context
    └── components
        └── container
```

Now, all of our features can reference the current user for our application without introducing any feature-to-feature dependencies!

### Shared

What about concepts that aren't related to our domain and could be used in any application?

We can move these items to the most _bottom_ layer: **shared**!

<img 
  src="/blog/organizing-by-technical-concern/shared.png" 
  alt="Diagram of adding a shared layer to our vertical slice architecture." 
  style="display: flex; margin: 2rem auto; max-width: 100%;"/>

The shared layer:

- Contains **non-domain related** concepts
- Is **below all layers** and can be referenced by anything

Let's move our poor, lonely container component to the shared layer:

```bash
└── src
    ├── pages
    |   ├── app
    │   ├── post-page
    │   ├── create-post-page
    │   ├── feed-page
    │   └── login-page
    ├── features
    │   ├── view-post
    │   │   ├── use-post
    │   |   └── get-post-by-id-query
    │   ├── create-post
    │   │   ├── create-post-form
    │   │   ├── use-create-post
    │   |   └── create-post-command
    │   ├── view-feed
    │   │   ├── feed
    │   │   ├── use-feed
    │   |   └── get-feed-query
    │   └── login
    │       ├── login-form
    │       ├── use-login
    │       └── login-command
    ├── entities
    │   ├── post
    │   │   └── post
    │   └── current-user
    │       ├── current-user-provider
    │       └── use-current-user-context
    └── shared
        └── container
```

Now, we've completely removed all of the folders that represent technical concerns!

## Finally, Cohesion

Let's look at the final, **cohesive application based on VSA**!

```bash
└── src
    ├── pages
    |   ├── app
    │   ├── post-page
    │   ├── create-post-page
    │   ├── feed-page
    │   └── login-page
    ├── features
    │   ├── view-post
    │   │   ├── use-post
    │   |   └── get-post-by-id-query
    │   ├── create-post
    │   │   ├── create-post-form
    │   │   ├── use-create-post
    │   |   └── create-post-command
    │   ├── view-feed
    │   │   ├── feed
    │   │   ├── use-feed
    │   |   └── get-feed-query
    │   └── login
    │       ├── login-form
    │       ├── use-login
    │       └── login-command
    ├── entities
    │   ├── post
    │   │   └── post
    │   └── current-user
    │       ├── current-user-provider
    │       └── use-current-user-context
    └── shared
        └── container
```

Actually, let's **collapse the folders a bit and analyze** our final solution:

```bash
└── src
    ├── pages
    |   ├── app
    │   ├── post-page
    │   ├── create-post-page
    │   ├── feed-page
    │   └── login-page
    ├── features
    │   ├── view-post
    │   ├── create-post
    │   ├── view-feed
    │   └── login
    ├── entities
    │   ├── post
    │   └── current-user
    └── shared
        └── container
```

Again, let's **relate this back to our experience with organizing by technical concern**. Just by looking at the folder structure of our **VSA application**, we can:

- **Understand the application's purpose**: We can see the use cases our application supports, the entities related to our domain, and even see pages that a user can visit.
- **Recognize relationships and dependencies**: Since related domain concepts are grouped together, we can see which concepts are related.
- **Make changes**: Since related domain concepts are grouped together, we can see which pieces will need to change together per domain concept.

Overall, **consider applying VSA** to:

- A new application!
- New features of an existing applicaton
- Old features of an existing application by slowly refactoring

Let's **enhance development** by aiming for **cohesiveness**!

> Want to learn more about VSA? Check out these resources!
>
> - Jimmy Bogard: [🚀 Vertical Slice Architecture (Jimmy Bogard)](https://youtu.be/T6nglsEDaqA)
> - CodeOpinion: [Organize Code by Feature | Vertical Slices](https://youtu.be/PRns0rqPonA)
> - Feature-Sliced Design: [Documentation](https://feature-sliced.design/)
> - My YouTube Playlist: [.NET Vertical Slice Architecture Series](https://www.youtube.com/playlist?list=PLA8ZIAm2I03hFYKicAV9UBPeeJrDpT6r4)
