import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Footer } from '.';

describe('<Footer />', () => {
  it('should render copyright', () => {
    render(<Footer />);

    const copyright = screen.getByText(/©/i);

    expect(copyright).toBeInTheDocument();
  });
});
