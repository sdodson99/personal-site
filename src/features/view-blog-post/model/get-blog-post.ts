import { BlogPost } from './blog-post';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

export const getBlogPost = async (slug: string): Promise<BlogPost> => {
  const postsDirectoryPath = path.join(process.cwd(), 'content');
  const postFilePath = `${postsDirectoryPath}/${slug}.md`;

  const postFileContent = fs.readFileSync(postFilePath);
  const {
    data: { title, publishDate },
    content,
  } = matter(postFileContent);

  const post: BlogPost = {
    title,
    publishDate,
    content,
  };

  return post;
};
