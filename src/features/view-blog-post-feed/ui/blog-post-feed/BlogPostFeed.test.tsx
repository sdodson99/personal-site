import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BlogPostFeed, BlogPostFeedProps } from './BlogPostFeed';

describe('<BlogPostFeed />', () => {
  let props: BlogPostFeedProps;

  beforeEach(() => {
    props = {
      posts: [
        {
          id: '1',
          title: 'Post Title 1',
          publishDate: new Date(2022, 7, 14),
          previewContent:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit. Lacus vel facilisis volutpat est velit egestas dui id ornare.',
          slug: 'post-title-1',
        },
        {
          id: '2',
          title: 'Post Title 2',
          publishDate: new Date(2022, 6, 1),
          previewContent:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit. Lacus vel facilisis volutpat est velit egestas dui id ornare.',
          slug: 'post-title-2',
        },
        {
          id: '3',
          title: 'Post Title 3',
          publishDate: new Date(2022, 3, 28),
          previewContent:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit. Lacus vel facilisis volutpat est velit egestas dui id ornare.',
          slug: 'post-title-3',
        },
      ],
    };
  });

  it('should render blog posts', () => {
    render(<BlogPostFeed {...props} />);

    const posts = screen.getAllByTestId('BlogPostPreview');

    expect(posts).toHaveLength(3);
  });

  it('should render link to full post for post slug', () => {
    render(<BlogPostFeed {...props} />);

    const readMoreLink = screen.getAllByText('Read more')[0];

    expect(readMoreLink.getAttribute('href')).toBe('/blog/post-title-1');
  });

  it('should render fallback content when no posts have been published', () => {
    delete props.posts;
    render(<BlogPostFeed {...props} />);

    const fallbackContent = screen.getByText(
      /Aww, no posts have been published yet./i
    );

    expect(fallbackContent).toBeInTheDocument();
  });
});
