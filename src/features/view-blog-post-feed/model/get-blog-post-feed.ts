import { BlogPostFeedModel } from './blog-post-feed';
import path from 'path';
import fs from 'fs';
import glob from 'glob';
import matter from 'gray-matter';

export const getBlogPostFeed = async (): Promise<BlogPostFeedModel> => {
  const postsDirectoryPath = path.join(process.cwd(), 'content');
  const postFilePaths = glob.sync(`${postsDirectoryPath}/*.md`);

  const posts = postFilePaths.map((filePath) => {
    const slug = getSlug(filePath);

    const content = fs.readFileSync(filePath);
    const {
      data: { title, description, publishDate },
    } = matter(content);

    return {
      title,
      description,
      publishDate,
      slug,
    };
  });

  const feed: BlogPostFeedModel = {
    posts,
  };

  feed.posts.sort((a, b) => b.publishDate.localeCompare(a.publishDate));

  return {
    posts,
  };
};

const getSlug = (postFilePath: string) => {
  const splitPath = postFilePath.split('/');

  return splitPath[splitPath.length - 1].replace('.md', '');
};
