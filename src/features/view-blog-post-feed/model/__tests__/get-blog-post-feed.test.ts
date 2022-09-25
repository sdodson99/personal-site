import { getBlogPostFeed } from '../get-blog-post-feed';
import fs from 'fs';
import glob from 'glob';
import { when } from 'jest-when';

jest.mock('fs');
const mockReadFileSync = fs.readFileSync as jest.Mock;

jest.mock('glob');
const mockGlobSync = glob.sync as jest.Mock;

describe('getBlogPostFeed', () => {
  afterEach(() => {
    mockReadFileSync.mockReset();
    mockGlobSync.mockReset();
  });

  it('should return feed with sorted blog posts', async () => {
    const expectedPosts = [
      {
        title: 'Post 2',
        description: 'This is my second post.',
        publishDate: '2022-09-12',
        slug: 'post-2',
      },
      {
        title: 'Post 1',
        description: 'This is my first post.',
        publishDate: '2022-09-01',
        slug: 'post-1',
      },
    ];
    mockGlobSync.mockReturnValue(['/content/post-1.md', '/content/post-2.md']);
    when(mockReadFileSync)
      .calledWith('/content/post-1.md')
      .mockReturnValue(
        "---\ntitle: Post 1\ndescription: This is my first post.\npublishDate: '2022-09-01'\n---"
      );
    when(mockReadFileSync)
      .calledWith('/content/post-2.md')
      .mockReturnValue(
        "---\ntitle: Post 2\ndescription: This is my second post.\npublishDate: '2022-09-12'\n---"
      );

    const feed = await getBlogPostFeed();

    expect(feed.posts).toEqual(expectedPosts);
  });
});
