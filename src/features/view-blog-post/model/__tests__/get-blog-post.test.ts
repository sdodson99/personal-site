import { getBlogPost } from '../get-blog-post';
import fs from 'fs';
import { when } from 'jest-when';

jest.mock('fs');
const mockReadFileSync = fs.readFileSync as jest.Mock;

describe('getBlogPost', () => {
  afterEach(() => {
    mockReadFileSync.mockReset();
  });

  it('should return blog post', async () => {
    when(mockReadFileSync)
      .calledWith(expect.stringContaining('/content/post-1.md'))
      .mockReturnValue(
        "---\ntitle: Post 1\npublishDate: '2022-09-01'\n---Hello world!"
      );

    const post = await getBlogPost('/content', 'post-1');

    expect(post).toEqual({
      title: 'Post 1',
      publishDate: '2022-09-01',
      content: 'Hello world!',
    });
  });
});
