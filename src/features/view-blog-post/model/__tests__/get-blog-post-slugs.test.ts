import glob from 'glob';
import { getBlogPostSlugs } from '../get-blog-post-slugs';

jest.mock('glob');
const mockGlobSync = glob.sync as jest.Mock;

describe('getBlogPostSlugs', () => {
  it('should return slugs for each blog post', async () => {
    mockGlobSync.mockReturnValue([
      '/project/content/post-1.md',
      '/project/content/post-2.md',
    ]);

    const slugs = await getBlogPostSlugs();

    expect(slugs).toEqual(['post-1', 'post-2']);
  });
});
