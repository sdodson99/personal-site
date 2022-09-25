import { BlogPostFeedModel } from './blog-post-feed';
import path from 'path';
import fs from 'fs';
import glob from 'glob';
import matter from 'gray-matter';

export const getBlogPostFeed = async (): Promise<BlogPostFeedModel> => {
  const postsDirectoryPath = path.join(process.cwd(), 'content');
  const postFilePaths = glob.sync(`${postsDirectoryPath}/*.md`);

  const posts = postFilePaths.map((path) => {
    const content = fs.readFileSync(path);
    const {
      data: { title, description, publishDate, slug },
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
