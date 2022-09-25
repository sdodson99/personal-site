import { getBlogPostFeed } from '../get-blog-post-feed';

describe('getBlogPostFeed', () => {
  it('should return feed with blog posts', async () => {
    const feed = await getBlogPostFeed();

    expect(feed.posts.length).toBeGreaterThan(0);
  });
});
