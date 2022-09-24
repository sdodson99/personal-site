import React from 'react';
import { BlogPostPreview } from '../blog-post-preview';
import styles from './BlogPostFeed.module.css';

type BlogPostPreview = {
  id: string;
  title: string;
  publishDate: Date;
  previewContent: string;
  slug: string;
};

export type BlogPostFeedProps = {
  posts?: BlogPostPreview[];
};

export const BlogPostFeed = ({ posts = [] }: BlogPostFeedProps) => {
  const postPreviews = posts.map(
    ({ id, title, publishDate, previewContent, slug }) => (
      <div key={id} className={styles.postItem}>
        <BlogPostPreview
          title={title}
          publishDate={publishDate}
          previewContent={previewContent}
          href={`/blog/${slug}`}
        />
      </div>
    )
  );

  const hasPosts = postPreviews.length > 0;

  return (
    <section data-testid="BlogPostFeed">
      <h2 className={styles.heading}>Recently Published</h2>

      {hasPosts ? (
        <div className={styles.posts}>{postPreviews}</div>
      ) : (
        <div className={styles.noPosts}>
          Aww, no posts have been published yet. Please check again later!
        </div>
      )}
    </section>
  );
};
