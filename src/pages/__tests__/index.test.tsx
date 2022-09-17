import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../index.page';

describe('<Home />', () => {
  it('should render feed for all recent blog posts', () => {
    render(<Home />);

    const posts = screen.getAllByTestId('BlogPostPreview');

    expect(posts).toHaveLength(5);
  });
});
