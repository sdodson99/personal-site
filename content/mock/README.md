# Mocking Blog Posts

To mock blog posts, set the `BLOG_CONTENT_MOCK` environment variable to a mock subdirectory when running or building the application.

Running locally with mock:

```
BLOG_CONTENT_MOCK=default pnpm dev
```

Building for stage environment with mock:

```
BLOG_CONTENT_MOCK=e2e pnpm build
```
