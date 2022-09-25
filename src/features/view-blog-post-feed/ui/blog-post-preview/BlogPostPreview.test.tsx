import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BlogPostPreview, BlogPostPreviewProps } from './BlogPostPreview';

describe('<BlogPostPreview />', () => {
  let props: BlogPostPreviewProps;

  beforeEach(() => {
    props = {
      title: 'Post Title 1',
      description: 'This is the preview for my first post!',
      publishDate: new Date(2022, 7, 14),
      href: '/blog/post-title-1',
    };
  });

  it('should render post title', () => {
    render(<BlogPostPreview {...props} />);

    const title = screen.getByText(props.title);

    expect(title).toBeInTheDocument();
  });

  it('should render post preview content', () => {
    render(<BlogPostPreview {...props} />);

    const content = screen.getByText(props.description);

    expect(content).toBeInTheDocument();
  });

  it('should render link to full blog post', () => {
    render(<BlogPostPreview {...props} />);

    const readMoreLink = screen.getByText('Read more');

    expect(readMoreLink.getAttribute('href')).toBe(props.href);
  });

  it('should render formatted publish date', () => {
    render(<BlogPostPreview {...props} />);

    const formattedPublishDate = screen.getByText('AUG 14, 2022');

    expect(formattedPublishDate).toBeInTheDocument();
  });
});
