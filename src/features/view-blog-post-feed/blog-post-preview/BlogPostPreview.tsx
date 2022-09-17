import Link from 'next/link';
import React from 'react';
import styles from './BlogPostPreview.module.css';
import { DateTime } from 'luxon';

export type BlogPostPreviewProps = {
  title: string;
  publishDate: Date;
  previewContent: string;
  href: string;
};

export const BlogPostPreview = ({
  title,
  publishDate,
  previewContent,
  href,
}: BlogPostPreviewProps) => {
  const publishDateTime = DateTime.fromJSDate(publishDate);
  const publishDateDisplay = publishDateTime
    .toFormat('LLL dd, yyyy')
    .toUpperCase();

  return (
    <article data-testid="BlogPostPreview">
      <h3 className={styles.title}>{title}</h3>
      <time className={styles.publishDate} dateTime={publishDate.toISOString()}>
        {publishDateDisplay}
      </time>
      <p className={styles.body}>{previewContent}</p>
      <div className={styles.readMore}>
        <Link href={href}>
          <a>Read more</a>
        </Link>
      </div>
    </article>
  );
};
