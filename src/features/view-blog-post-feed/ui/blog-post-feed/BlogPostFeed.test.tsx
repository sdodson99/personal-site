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
          title: 'Post Title 1',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit. Lacus vel facilisis volutpat est velit egestas dui id ornare.',
          publishDate: new Date(2022, 7, 14),
          href: '/blog/post-title-1',
        },
        {
          title: 'Post Title 2',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit. Lacus vel facilisis volutpat est velit egestas dui id ornare.',
          publishDate: new Date(2022, 6, 1),
          href: '/blog/post-title-2',
        },
        {
          title: 'Post Title 3',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit. Lacus vel facilisis volutpat est velit egestas dui id ornare.',
          publishDate: new Date(2022, 3, 28),
          href: '/blog/post-title-3',
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
