import { getCollection } from 'astro:content';

export function getAllBlogPosts() {
  const blogPostsDirectoryPrefix = getBlogPostsDirectoryPrefix();

  return getCollection('blog', ({ id }) =>
    id.startsWith(blogPostsDirectoryPrefix)
  );
}

function getBlogPostsDirectoryPrefix() {
  const mock = import.meta.env.BLOG_CONTENT_MOCK;

  if (mock) {
    return `mock/${mock}/`;
  }

  return 'live/';
}
