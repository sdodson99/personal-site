import { BlogPost } from './blog-post';
import fs from 'fs';
import matter from 'gray-matter';

export const getBlogPost = async (
  postsDirectoryPath: string,
  slug: string
): Promise<BlogPost> => {
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
