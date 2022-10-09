import Link from 'next/link';
import React from 'react';
import styles from './BlogPostPreview.module.css';
import { DateTime } from 'luxon';
import { useLogEvent } from '@/shared/analytics';

export type BlogPostPreviewProps = {
  id: string;
  title: string;
  description: string;
  publishDate: Date;
  href: string;
};

export const BlogPostPreview = ({
  id,
  title,
  description,
  publishDate,
  href,
}: BlogPostPreviewProps) => {
  const { logEvent } = useLogEvent();

  const onClickRead = () => {
    logEvent('select_item', {
      item_list_id: 'blog_post_feed',
      item_list_name: 'Blog Post Feed',
      items: [
        {
          item_id: id,
          item_name: title,
        },
      ],
    });
  };

  const publishDateTime = DateTime.fromJSDate(publishDate);
  const publishDateDisplay = publishDateTime
    .toFormat('LLL dd, yyyy')
    .toUpperCase();

  return (
    <article>
      <Link href={href}>
        <a
          className={styles.container}
          data-testid="BlogPostPreview"
          onClick={() => onClickRead?.()}
        >
          <h3 className={styles.title}>{title}</h3>
          <time
            className={styles.publishDate}
            dateTime={publishDate.toISOString()}
          >
            {publishDateDisplay}
          </time>
          <p className={styles.body}>{description}</p>
          <div className={styles.readMore}>Read more</div>
        </a>
      </Link>
    </article>
  );
};
