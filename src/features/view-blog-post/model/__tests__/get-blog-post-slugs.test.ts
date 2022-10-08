import glob from 'glob';
import { when } from 'jest-when';
import { getBlogPostSlugs } from '../get-blog-post-slugs';

jest.mock('glob');
const mockGlobSync = glob.sync as jest.Mock;

describe('getBlogPostSlugs', () => {
  it('should return slugs for each blog post', async () => {
    when(mockGlobSync)
      .calledWith('/project/content/*.md')
      .mockReturnValue([
        '/project/content/post-1.md',
        '/project/content/post-2.md',
      ]);

    const slugs = await getBlogPostSlugs('/project/content');

    expect(slugs).toEqual(['post-1', 'post-2']);
  });
});
