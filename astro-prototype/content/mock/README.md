# Mocking Blog Posts

To mock blog posts, set the `BLOG_CONTENT_MOCK` environment variable to a mock subdirectory when running or building the application.

Running locally with mock:

```
BLOG_CONTENT_MOCK=default npm run dev
```

Building for stage environment with mock:

```
BLOG_CONTENT_MOCK=e2e npm run build:stage
```

_NOTE: Some environments set a default mock in the corresponding `.env` file. However, you can override the `.env` file mock via the command line._
