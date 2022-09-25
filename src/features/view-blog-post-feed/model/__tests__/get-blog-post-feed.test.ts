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
    mockGlobSync.mockReturnValue(['/post-1', '/post-2']);
    when(mockReadFileSync)
      .calledWith('/post-1', 'utf-8')
      .mockReturnValue(
        "---\ntitle: Post 1\ndescription: This is my first post.\npublishDate: '2022-09-01'\nslug: post-1\n---"
      );
    when(mockReadFileSync)
      .calledWith('/post-2', 'utf-8')
      .mockReturnValue(
        "---\ntitle: Post 2\ndescription: This is my second post.\npublishDate: '2022-09-12'\nslug: post-2\n---"
      );

    const feed = await getBlogPostFeed();

    expect(feed.posts).toEqual(expectedPosts);
  });
});
