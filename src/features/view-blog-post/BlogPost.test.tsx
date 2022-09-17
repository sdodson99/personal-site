import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BlogPost, BlogPostProps } from './BlogPost';

describe('<BlogPost />', () => {
  let props: BlogPostProps;

  beforeEach(() => {
    props = {
      title: 'Post Title 1',
      publishDate: new Date(2022, 7, 14),
      content: 'This is the preview for my first post!',
      backHref: '/',
    };
  });

  it('should render post title', () => {
    render(<BlogPost {...props} />);

    const title = screen.getByText(props.title);

    expect(title).toBeInTheDocument();
  });

  it('should render post content', () => {
    render(<BlogPost {...props} />);

    const content = screen.getByText(props.content);

    expect(content).toBeInTheDocument();
  });

  it('should render link to return back to feed', () => {
    render(<BlogPost {...props} />);

    const backLink = screen.getByText('Back to recent posts');

    expect(backLink.getAttribute('href')).toBe(props.backHref);
  });

  it('should render formatted publish date', () => {
    render(<BlogPost {...props} />);

    const formattedPublishDate = screen.getByText('AUG 14, 2022');

    expect(formattedPublishDate).toBeInTheDocument();
  });
});
