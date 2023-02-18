---
title: 'Choosing a Frontend JavaScript Framework: A Simple Guide for Success'
description: "Which frontend framework should you choose for your next project? Tough question. Let's make it simpler."
publishDate: '2023-02-17'
slug: 'choosing-a-frontend-framework-a-simple-guide-for-success'
---

Starting a new frontend JavaScript project is always exciting! One of the first steps in kicking off a frontend project is to choose a framework that will set our project down the path to success.

## Struggles of Choosing a Frontend Framework

Choosing an optimal frontend framework is tricky. Not only is there a new framework every day to choose from, but the frontend framework we choose can play a significant role in the fate and success of our project!

For example, choosing a sub-optimal framework can:

- Slow down development
- Decrease maintainability
- Create unnecessary tech debt

How can we choose a frontend framework that will set our project down the path to success?

## What Is Success?

Success can mean many things in terms of your project. What kind of success am I referring to?

For this guide, we'll view success as:

- Inspiring rapid and smooth development
- Building a maintainable solution
- Shipping our product!

If you have a vastly different idea of success, then this guide might not be for you. That's okay!

For example, if your idea of success is to "learn a new frontend framework", then your guide for choosing a frontend framework is much simpler: choose the framework that you want to learn!

However, if your idea of success is similar to what this guide is aiming for, then let's keep going.

## Mindsets for Choosing a Frontend Framework

There are various mindsets we can use to determine the frontend framework we should choose.

Let's explore these mindsets and find one that will guide us down the path to success.

> This guide assumes you already know which rendering method (CSR, SSR, SSG, etc.) your project should leverage. You should always pick a frontend framework that aligns with your desired rendering method!
>
> Check out this article for discussion on different rendering methods: [Rendering on the Web](https://web.dev/rendering-on-the-web/)

### Mindset 1: Choosing the Strongest Framework

Let's try picking the most powerful and flexible framework. By choosing the strongest framework, we'll be able to support our current requirements and scale to any requirement that **might** arise in the future.

In some cases, the strongest framework will end up being a good choice. However, it is not a viable guide for every situation. **Often, choosing the strongest framework is overkill.**

Examples of choosing an overkill framework or technology include:

- Building a static tech blog with [NextJS](https://nextjs.org/)
- Building a stand-alone, pre-launch landing page with [Vite](https://vitejs.dev/) + [React](https://reactjs.org/)
- Building a social media site prototype with [React](https://reactjs.org/) + [GraphQL](https://graphql.org/) (not really a framework, but you get the gist)

> But Sean, I need to build my static tech blog with NextJS! Once my blog gets popular, I want to add authentication, a forum section for my fans, page views...
>
> Yes, building your blog with NextJS would probably help satisfy those requirements. However, your blog has no viewers (like mine) since it doesn't exist yet. You have no idea if your blog will be successful. You don't even know if your viewers care about or need the features you plan to build.
>
> Overall, you should worry about the requirement you have now: building a static tech blog. We'll revisit this topic later when we discuss a different mindset.

Choosing an overkill framework **could put your project's growth at risk**. An overkill framework will often take extra time to adjust to your use case, which will:

- Slow down initial development
- Waste resources
- Potentially create tech debt that slows down future development

Quite frankly, **this is the opposite of how we want to start our project**.

When we begin a new project, we want to move fast! We want to ship something quick so that we can learn and potentially pivot based on our learnings. Who knows, our customers might not like our product at all! If so, we would've just wasted tons of time investing in an overkill framework.

Let's try a different approach and avoid the risks of choosing the most powerful framework.

### Mindset 2: Choosing the Simplest Framework

Choosing the most powerful framework introduces risk, so let's go the opposite direction and choose the simplest framework!

Similar to choosing the strongest framework, the mindset of choosing the simplest framework will sometimes work, but is not applicable to every situation. **In some cases, choosing the simplest framework is impractial.**

Examples of the simplest framework being impractical include:

- Building a documentation site with just [Vite](https://vitejs.dev/) + [React](https://reactjs.org/)
- Building a highly reactive social media app with vanilla JavaScript + [NodeJS](https://nodejs.org/) (again, not a framework, but same idea of choosing something too simple)

> But Sean, all these frontend frameworks are so unnecessary! You can build anything with vanilla JavaScript. Besides, we can't tolerate that whopping 40KB of framework code that gets bundled with our application!
>
> Sure, you really can build anything with vanilla JavaScript. It will likely slow you down a lot though. You'll probably end up building your own framework by accident anyways. The only difference is that your framework won't be as battle tested as a popular framework.

Surprisingly, this opposite approach has similar **risks** to choosing the most powerful framework. A simple framework will often require us to build our own primitives, which again will:

- Slow down initial development
- Waste resources
- Potentially create tech debt that slows down future development

Let's avoid choosing frameworks based on complexity and try a different mindset.

### Mindset 3: Choosing the Most Cutting Edge Framework

Let's try a completely different approach and choose the most cutting edge framework!

Again, this will sometimes turn out fine, **but choosing the most cutting edge framework is a risky approach**.

Examples of choosing the most cutting edge framework include:

- Building a tech blog with [Astro](https://astro.build/) in early 2022
- Building a social media site with [SvelteKit](https://kit.svelte.dev/) in 2021

**Disclaimer: I love both of the frameworks that I mention in this example, and nowadays they are great options for certain use cases!**

> But Sean, I need to get ahead of the game! This new framework is gonna take off, and I'll be one of those cool early adopters. Besides, this new framework has tons of amazing features that I want to try out!
>
> This approach might work if the features of the cutting edge framework are essential to what you're building. However, you might just end up wasting resources on a dead-end framework. Who knows?

Look, I get it. Using new, cutting edge frameworks is fun. I'm guilty of trying to build products with cutting edge frameworks.

However, there are **drawbacks** to building with cutting edge frameworks, such as:

- Slower development in order to learn the framework while you build your product
- A weaker ecosystem of plugins and collaborators, which will also slow down development
- Risk of the framework losing support and getting stuck on an unmaintained framework

Overall, a boring Friday afternoon at work is a better time for exploring cutting edge frameworks. Let's try a different mindset for building our site.

### Mindset 4: Choosing the Framework That Will Help Us Move Fastest

Finally, let's tackle the drawbacks of the other mindsets and align with our vision of success. Let's choose the framework that will help us move the fastest!

**This mindset will speed up development and allow us to implement our requirements quicker.** Well, duh. So how do we choose the framework that will help us move the fastest?

Let's see. Frameworks that help us move fast:

- Align with our requirements
- Have primitives that support our use cases
- Use technology that we're familiar with
- Are stable
- Have an established ecosystem

Let's look at more specific examples, such as:

- Building a static blog for your mom with a tool that has built-in markdown support (ex: [Astro](https://astro.build/), [11ty](https://www.11ty.dev/), etc.)
- Building a stand-alone, pre-launch landing page with vanilla HTML + CSS + JavaScript
- Building a documentation site with a static documentation generator (ex: [VitePress](https://vitepress.vuejs.org/), [Docusaurus](https://docusaurus.io/), etc.)
- Building a social media site with whatever SSR framework aligns with your skills (ex: [NextJS](https://nextjs.org/) as a [React](https://reactjs.org/) developer, [SvelteKit](https://kit.svelte.dev/) as a [Svelte](https://svelte.dev/) developer, etc.)

Sometimes, this involves choosing the strongest, simplest, or most cutting-edge framework. However, what's important is that we are focused on choosing the framework that will help us move fastest.

Overall, the positives of this mindset include:

- Fast development due to the framework aligning with our requirements and using familiar technology
- Less tech debt since the framework should fit our needs and not require a bunch of extra hacking
- Less risk due to working in a stable, established ecosystem
- Ability to ship faster since we're building faster

We often think we should choose the framework that will help us move fastest **later**. This is where we fall into the trap of picking the strongest framework, which is often overkill.

Instead, we should focus on choosing the framework that will help us move fastest **right now**.

We have no product, therefore we have no customers. We have no customers, therefore we do not know what the customer needs. We do not know what the customer needs, so let's quickly build out the minimum amount of features to test what the customer needs. **We shouldn't waste time and resources on overkill solutions.**

Let's focus on the requirements we have now and choose the framework that will help us quickly build the features we know we need.

# Move Fast

Overall, choosing the right frontend framework is indeed tricky. Just make sure you:

- **Avoid** choosing the most powerful framework for every scenario
- **Think twice before** choosing the simplest framework
- **Steer clear** of hopping aboard with the most cutting edge framework
- **Do consider** choosing the framework that will help you move fastest

Let's build with the framework that helps us move fastest so that we can ship faster, avoid wasting effort, and start learning about our customers sooner!
