import { createBlogPostsDirectory } from '../blog-posts-directory-factory';

describe('createBlogPostsDirectory', () => {
  it('should return live directory when no mock provided', () => {
    const directory = createBlogPostsDirectory();

    expect(directory).toContain('content/live');
  });

  it('should always return live directory when in production', () => {
    process.env.NEXT_PUBLIC_ENVIRONMENT = 'production';

    const directory = createBlogPostsDirectory('default');

    expect(directory).toContain('content/live');

    process.env.NEXT_PUBLIC_ENVIRONMENT = undefined;
  });

  it('should return mock directory when mock provided', () => {
    const directory = createBlogPostsDirectory('default');

    expect(directory).toContain('content/mock/default');
  });
});
