import { BlogPostFeedModel } from './blog-post-feed';

export const getBlogPostFeed = async (): Promise<BlogPostFeedModel> => {
  return {
    posts: [
      {
        title: 'Post 1',
        description: 'This is my first post!',
        publishDate: '2022-09-14',
        slug: 'post-1',
      },
      {
        title: 'Post 2',
        description: 'This is my second post!',
        publishDate: '2022-08-14',
        slug: 'post-2',
      },
      {
        title: 'Post 3',
        description: 'This is my third post!',
        publishDate: '2022-07-14',
        slug: 'post-3',
      },
    ],
  };
};
