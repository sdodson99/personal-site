import path from 'path';
import { isProduction } from 'shared/configuration';

export const createBlogPostsDirectory = (mock?: string) => {
  const contentDirectoryPath = path.join(process.cwd(), 'content');

  if (mock && !isProduction()) {
    return path.join(contentDirectoryPath, 'mock', mock);
  }

  return path.join(contentDirectoryPath, 'live');
};
