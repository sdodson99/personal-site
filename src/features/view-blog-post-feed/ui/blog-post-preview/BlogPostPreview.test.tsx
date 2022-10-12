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

  it('should render formatted publish date', () => {
    render(<BlogPostPreview {...props} />, { wrapper: TestApp });

    const formattedPublishDate = screen.getByText('AUG 14, 2022');

    expect(formattedPublishDate).toBeInTheDocument();
  });

  it('should go to blog post when user clicks post', () => {
    render(<BlogPostPreview {...props} />, { wrapper: TestApp });

    const blogPost = screen.getByTestId('BlogPostPreview');

    expect(blogPost.getAttribute('href')).toBe(props.href);
  });

  it('should log select item analytics event when user clicks post', () => {
    render(<BlogPostPreview {...props} />, { wrapper: TestApp });

    const blogPost = screen.getByTestId('BlogPostPreview');
    fireEvent.click(blogPost);

    expect(logEvent).toBeCalledWith(
      'mock-firebase-analytics',
      'select_content',
      {
        item_id: props.id,
        content_type: 'blog_post_feed_preview',
      }
    );
  });
});
