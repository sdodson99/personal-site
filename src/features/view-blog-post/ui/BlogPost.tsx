import Link from 'next/link';
import React from 'react';
import styles from './BlogPost.module.css';
import { DateTime } from 'luxon';
import md from 'markdown-it';

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
        <a>Back to recent posts</a>
      </Link>
      <article className={styles.blogPost}>
        <h1 className={styles.title}>{title}</h1>
        <time
          className={styles.publishDate}
          dateTime={publishDate.toISOString()}
        >
          {publishDateDisplay}
        </time>
        <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
      </article>
    </div>
  );
};
