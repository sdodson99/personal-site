import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HomePage from '../index.page';

describe('<HomePage />', () => {
  it('should render feed for all recent blog posts', () => {
    render(<HomePage />);

    const posts = screen.getAllByTestId('BlogPostPreview');

    expect(posts).toHaveLength(5);
  });
});
