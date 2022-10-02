import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BlogPostPage from '../[slug].page';

describe('<BlogPostPage />', () => {
  it('should render blog post', () => {
    render(
      <BlogPostPage
        title={'Post Title 1'}
        publishDate={'2022-09-01'}
        content={'Hello world!'}
      />
    );

    const post = screen.getByTestId('BlogPost');

    expect(post).toBeInTheDocument();
  });
});
