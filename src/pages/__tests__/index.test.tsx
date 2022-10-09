import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HomePage, { HomePageProps } from '../index.page';
import { TestApp } from '@/test/unit/utils/test-app';

describe('<HomePage />', () => {
  let props: HomePageProps;

  beforeEach(() => {
    props = {
      feed: {
        posts: [
          {
            title: 'Post Title 1',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit. Lacus vel facilisis volutpat est velit egestas dui id ornare.',
            publishDate: '2022-09-14',
            slug: 'post-title-1',
          },
          {
            title: 'Post Title 2',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit. Lacus vel facilisis volutpat est velit egestas dui id ornare.',
            publishDate: '2022-09-13',
            slug: 'post-title-2',
          },
          {
            title: 'Post Title 3',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit. Lacus vel facilisis volutpat est velit egestas dui id ornare.',
            publishDate: '2022-09-12',
            slug: 'post-title-3',
          },
        ],
      },
    };
  });

  it('should render feed for all recent blog posts', () => {
    render(<HomePage {...props} />, { wrapper: TestApp });

    const posts = screen.getAllByTestId('BlogPostPreview');

    expect(posts).toHaveLength(3);
  });
});
