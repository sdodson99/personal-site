import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BlogPostPreview, BlogPostPreviewProps } from './BlogPostPreview';
import { TestApp } from '@/test/unit/utils/test-app';
import { logEvent } from 'firebase/analytics';

describe('<BlogPostPreview />', () => {
  let props: BlogPostPreviewProps;

  beforeEach(() => {
    props = {
      id: 'post-title-1',
      title: 'Post Title 1',
      description: 'This is the preview for my first post!',
      publishDate: new Date(2022, 7, 14),
      href: '/blog/post-title-1',
    };
  });

  it('should render post title', () => {
    render(<BlogPostPreview {...props} />, { wrapper: TestApp });

    const title = screen.getByText(props.title);

    expect(title).toBeInTheDocument();
  });

  it('should render post preview content', () => {
    render(<BlogPostPreview {...props} />, { wrapper: TestApp });

    const content = screen.getByText(props.description);

    expect(content).toBeInTheDocument();
  });

  it('should render link to full blog post', () => {
    render(<BlogPostPreview {...props} />, { wrapper: TestApp });

    const readMoreLink = screen.getByText('Read more');

    expect(readMoreLink.getAttribute('href')).toBe(props.href);
  });

  it('should render formatted publish date', () => {
    render(<BlogPostPreview {...props} />, { wrapper: TestApp });

    const formattedPublishDate = screen.getByText('AUG 14, 2022');

    expect(formattedPublishDate).toBeInTheDocument();
  });

  it('should log select item analytics event when user clicks read', () => {
    render(<BlogPostPreview {...props} />, { wrapper: TestApp });

    const readMoreLink = screen.getByText('Read more');
    fireEvent.click(readMoreLink);

    expect(logEvent).toBeCalledWith('mock-firebase-analytics', 'select_item', {
      item_list_id: 'blog_post_feed',
      item_list_name: 'Blog Post Feed',
      items: [
        {
          item_id: props.id,
          item_name: props.title,
        },
      ],
    });
  });
});
