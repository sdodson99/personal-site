import path from 'path';
import glob from 'glob';

export const getBlogPostSlugs = async (): Promise<string[]> => {
  const postsDirectoryPath = path.join(process.cwd(), 'content');
  const postFilePaths = glob.sync(`${postsDirectoryPath}/*.md`);

  const slugs = postFilePaths.map((filePath) => getSlug(filePath));

  return slugs;
};

const getSlug = (postFilePath: string) => {
  const splitPath = postFilePath.split('/');

  return splitPath[splitPath.length - 1].replace('.md', '');
};
