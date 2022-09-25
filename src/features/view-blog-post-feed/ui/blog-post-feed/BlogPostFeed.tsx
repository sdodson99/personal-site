import React from 'react';
import { BlogPostPreview, BlogPostPreviewProps } from '../blog-post-preview';
import styles from './BlogPostFeed.module.css';

export type BlogPostFeedProps = {
  posts?: BlogPostPreviewProps[];
};

export const BlogPostFeed = ({ posts = [] }: BlogPostFeedProps) => {
  const postPreviews = posts.map(
    ({ title, description, publishDate, href }) => (
      <div key={title} className={styles.postItem}>
        <BlogPostPreview
          title={title}
          description={description}
          publishDate={publishDate}
          href={href}
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
