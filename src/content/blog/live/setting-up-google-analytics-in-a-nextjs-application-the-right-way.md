---
title: 'Setting Up Google Analytics in a NextJS Application the Right Way'
description: "Because how can you improve your product if you don't know how customers use your application?"
tags:
  - web-development
  - react
  - analytics
publishDate: '2023-09-17'
slug: 'setting-up-google-analytics-in-a-nextjs-application-the-right-way'
---

Traditionally, Google Analytics was a great, free alternative for adding analytics to your website. However, Google
Analytics 4 has received lots of negative feedback from the community. Why? **Because it's a massive pain to setup
and use**.

Regardless, I've continued using Google Analytics a lot. I like free things. And best of all, **I've found workarounds
for the pains I've had with Google Analytics**.

That said, I'm excited to share my process for using Google Analytics in my applications! Let's begin
with the most important part: **setting up Google Analytics**. We'll dig into other Google Analytics topics another
time.

> The first version of your product will probably suck. In fact, the first ten versions will probably suck. However, if
> you don't have a way to understand how customers are using your product, your product will probably always suck.
>
> You can't always ask the customer what they want. In most cases, they don't know what they want. Or, you won't
> even have a way to contact them.
>
> The best customer feedback is discovered through analytics. What did the customer do? How did they use your product? Analytics don't
> lie (most of the time).

## Creating Google Analytics Properties

First, we need to create a Google Analytics property (duh).

No, actually we will create two properties! I prefer creating two separate properties for production and development.
This allows us to test our analytics setup in development without polluting our production analytics.

Let's create a Google Analytics property:

1. Go to Google Analytics: https://analytics.google.com/analytics/web/

2. Go to the Google Analytics admin panel:

<img 
    src="/blog/setting-up-google-analytics-in-a-nextjs-application-the-right-way/ga-go-to-admin.png" 
    alt="Screenshot of the Google Analytics admin panel button" 
    style="display: flex; margin: 2rem auto; max-width: 100%;"/>

3. Click the create property button in the admin panel:

<img 
    src="/blog/setting-up-google-analytics-in-a-nextjs-application-the-right-way/ga-create-property.png" 
    alt="Screenshot of the Google Analytics create property button" 
    style="display: flex; margin: 2rem auto; max-width: 100%;"/>

4. Complete the create property flow up until the "Data collection" step:

<img 
    src="/blog/setting-up-google-analytics-in-a-nextjs-application-the-right-way/ga-complete-property-details.png" 
    alt="Screenshot of the Google Analytics create property flow" 
    style="display: flex; margin: 2rem auto; max-width: 100%;"/>

> I typically use the following naming convention for my two analytics properties:
>
> - **Production**: "application-name"
> - **Development**: "application-name-dev"

5. Create a new web stream for your web application:

<img 
    src="/blog/setting-up-google-analytics-in-a-nextjs-application-the-right-way/ga-create-web-stream.png" 
    alt="Screenshot of the Google Analytics create stream button" 
    style="display: flex; margin: 2rem auto; max-width: 100%;"/>

6. Enter the details for your web stream. Feel free to configure the enhanced measurement to fit with your application's needs:

<img 
    src="/blog/setting-up-google-analytics-in-a-nextjs-application-the-right-way/ga-complete-web-stream-details.png" 
    alt="Screenshot of the Google Analytics create stream form" 
    style="display: flex; margin: 2rem auto; max-width: 100%;"/>

7. Take note of the Measurement ID. We will need this later!

<img 
    src="/blog/setting-up-google-analytics-in-a-nextjs-application-the-right-way/ga-web-stream-measurement-id.png" 
    alt="Screenshot of the Google Analytics stream measurement ID" 
    style="display: flex; margin: 2rem auto; max-width: 100%;"/>

Now, repeat the steps above to create another property for non-production analytics.

<img 
    src="/blog/setting-up-google-analytics-in-a-nextjs-application-the-right-way/ga-property-names.png" 
    alt="Screenshot of how I name my production and development Google Analytics properties" 
    style="display: flex; margin: 2rem auto; max-width: 100%;"/>

By now, you should have a production and development Google Analytics property for your application.

## Creating a Google Tag Manager Container

Sike! We're not actually connecting an application to Google Analytics. Instead, **we're connecting an application
to Google Tag Manager (GTM), and GTM will talk to Google Analytics** for us.

I've found various benefits of using this approach:

- We can leverage advanced GTM features to simplify our analytics tracking
- We can manage Google Analytics or other Google tag configurations through GTM rather than having to mess with
  script configurations in our code
- We only have to load the GTM script in our application. If we need to leverage other Google tags, we can
  seamlessly add those through GTM without pushing code changes or loading more scripts

Let's create a GTM container for our application:

1. Go to GTM: https://tagmanager.google.com/#/home

2. Click the create account button:

<img 
    src="/blog/setting-up-google-analytics-in-a-nextjs-application-the-right-way/gtm-create-account.png" 
    alt="Screenshot of the create account button in GTM" 
    style="display: flex; margin: 2rem auto; max-width: 100%;"/>

3. Complete the create account form, choosing "Web" as your platform:

<img 
    src="/blog/setting-up-google-analytics-in-a-nextjs-application-the-right-way/gtm-create-account-form.png" 
    alt="Screenshot of the create account form in GTM" 
    style="display: flex; margin: 2rem auto; max-width: 100%;"/>

Awesome! Now we have a GTM container to connect to Google Analytics.

## Connecting Google Tag Manager to Google Analytics

Next, we need to connect our GTM container to Google Analytics. GTM will allow us to easily integrate our production _and_ development
Google Analytics properties.

Let's add our Google Analytics properties to our GTM container:

1. Go to the variables tab:

<img 
    src="/blog/setting-up-google-analytics-in-a-nextjs-application-the-right-way/gtm-variables.png" 
    alt="Screenshot of the variables tab in GTM" 
    style="display: flex; margin: 2rem auto; max-width: 100%;"/>

2. Click the new variable button:

<img 
    src="/blog/setting-up-google-analytics-in-a-nextjs-application-the-right-way/gtm-new-variable.png" 
    alt="Screenshot of the new variable button in GTM" 
    style="display: flex; margin: 2rem auto; max-width: 100%;"/>

3. Configure the new variable with the following:

- **Name**: "Analytics Measurement ID", _or anything you prefer_
- **Variable Type**: "Lookup Table"
- **Input Variable**: "{{Page Hostname}}"

When the page hostname is our production domain, we want GTM to use our production Google Analytics property. Otherwise, we want GTM to use
our development Google Analytics property.

To accomplish this, add the following lookup table configuration:

- **Input 1**: _Your production domain_
- **Output 1**: _Your production Google Analytics property measurement ID_
- **Default Value**: _Your development Google Analytics property measurement ID_

<img 
    src="/blog/setting-up-google-analytics-in-a-nextjs-application-the-right-way/gtm-analytics-variable.png" 
    alt="Screenshot of the example analytics configuration variable in GTM" 
    style="display: flex; margin: 2rem auto; max-width: 100%;"/>

4. Go to the tags tab:

<img 
    src="/blog/setting-up-google-analytics-in-a-nextjs-application-the-right-way/gtm-tags.png" 
    alt="Screenshot of the tags tab in GTM" 
    style="display: flex; margin: 2rem auto; max-width: 100%;"/>

5. Click the new tag button:

<img 
    src="/blog/setting-up-google-analytics-in-a-nextjs-application-the-right-way/gtm-new-tag.png" 
    alt="Screenshot of the new tag button in GTM" 
    style="display: flex; margin: 2rem auto; max-width: 100%;"/>

6. Configure the new tag with the following:

- **Name**: "Analytics Setup", _or anything you prefer_
- **Tag Type**: "Google Tag"
- **Tag ID**: "{{Analytics Measurement ID}}"

This tag tells GTM to connect to the Google Analytics property represented by our
Analytics Measurement ID variable.

<img 
    src="/blog/setting-up-google-analytics-in-a-nextjs-application-the-right-way/gtm-analytics-tag.png" 
    alt="Screenshot of the example analytics configuration tag in GTM" 
    style="display: flex; margin: 2rem auto; max-width: 100%;"/>

7. Publish the GTM configuration changes:

<img 
    src="/blog/setting-up-google-analytics-in-a-nextjs-application-the-right-way/gtm-publish.png" 
    alt="Screenshot of the GTM publish changes button" 
    style="display: flex; margin: 2rem auto; max-width: 100%;"/>

Finally, our GTM and Google Analytics configurations are complete!

## Connecting a NextJS Application to Google Tag Manager

Lastly, we just need to setup GTM in our NextJS application.

> Remember, we aren't connecting directly to Google Analytics. Instead, we are connecting to GTM, which we've configured to setup Google Analytics and
> fire events for us.

If you're following along, you should already have a NextJS application ready at this point. Follow the NextJS documentation if you need to create a
new application: https://nextjs.org/docs/getting-started/installation

Let's connect our NextJS application to our GTM container:

1. Paste the code snippet below into your application in order to load GTM:

```tsx
import Script from 'next/script';
...
<html lang="en">
  <head>
    ...
    <Script id="gtm" strategy="afterInteractive">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-<YOUR_GTM_ID>');`}
    </Script>
    ...
  </head>
  <body>
    ...
    <noscript
      dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-<YOUR_GTM_ID>" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
      }}
    />
    ...
  </body>
</html>
```

> The location of this code will differ depending on which NextJS router you are using:
>
> - **App Router**: app/layout.tsx
> - **Pages Router**: \_document.tsx

2. Replace `GTM-<YOUR_GTM_ID>` in the GTM code snippet with your GTM container ID:

<img 
    src="/blog/setting-up-google-analytics-in-a-nextjs-application-the-right-way/gtm-container-id.png" 
    alt="Screenshot of the GTM container ID" 
    style="display: flex; margin: 2rem auto; max-width: 100%;"/>

That's it! We've connected our NextJS application to our configured GTM container.

## Testing

We need to test our integration and make sure everything is working as expected. For testing, we will run our application locally
and make sure our non-production Google Analytics property is receiving events.

Let's test our NextJS application against Google Analytics:

1. Run your NextJS application locally:

```
npm run dev
```

2. Open your NextJS application in a Chrome browser.

3. Download and run the Google Analytics Debugger
   Chrome extension: https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna

4. Open the debugger view in your non-production Google Analytics property:

<img 
    src="/blog/setting-up-google-analytics-in-a-nextjs-application-the-right-way/ga-debugger.png" 
    alt="Screenshot of the Google Analytics debugger" 
    style="display: flex; margin: 2rem auto; max-width: 100%;"/>

5. Refresh the page in your NextJS application and wait for page view events to start funneling into your Google Analytics property!

Success! We've integrated our NextJS application with Google Analytics and tested the integration locally.

## Next Steps

From here, you're ready to deploy your application to production! You can use the same testing steps above in production and confirm events
are firing to your production Google Analytics property.

While setting up analytics is a critical step, **there is much more to the world of analytics**, such as:

- Logging custom events (although the automatic page view events can provide valuable insights!)
- Logging custom dimensions with events, such as the ID of the logged in user
- Effectively reading and interpreting data from within Google Analytics (yes, this is not easy in Google Analytics 4)

Stay tuned for future blog posts on Google Analytics topics!
