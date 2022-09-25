export type BlogPostFeedModel = {
  posts: BlogPostPreviewModel[];
};

type BlogPostPreviewModel = {
  title: string;
  description: string;
  publishDate: string;
  slug: string;
};
