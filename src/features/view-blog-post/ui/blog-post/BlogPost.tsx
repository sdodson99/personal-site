import Link from 'next/link';
import React from 'react';
import styles from './BlogPost.module.css';
import { DateTime } from 'luxon';
import { BlogPostMarkdown } from '../blog-post-markdown/BlogPostMarkdown';

export type BlogPostProps = {
  title: string;
  publishDate: Date;
  content: string;
  backHref: string;
};

export const BlogPost = ({
  title,
  publishDate,
  content,
  backHref,
}: BlogPostProps) => {
  const publishDateTime = DateTime.fromJSDate(publishDate);
  const publishDateDisplay = publishDateTime
    .toFormat('LLL dd, yyyy')
    .toUpperCase();

  return (
    <div data-testid="BlogPost">
      <Link href={backHref}>
        <a className="link">Back to recent posts</a>
      </Link>
      <article className={styles.blogPost}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.publishDate}>
          <time dateTime={publishDate.toISOString()}>{publishDateDisplay}</time>
        </div>
        <div className={styles.body}>
          <BlogPostMarkdown>{content}</BlogPostMarkdown>
        </div>
      </article>
    </div>
  );
};
