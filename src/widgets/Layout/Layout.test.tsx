import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Layout } from '.';

describe('<Layout />', () => {
  it('should render children', () => {
    render(<Layout>Hello world!</Layout>);

    const children = screen.getByText('Hello world!');

    expect(children).toBeInTheDocument();
  });
});
