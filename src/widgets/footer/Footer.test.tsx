import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Footer } from '.';

describe('<Footer />', () => {
  it('should render logo', () => {
    render(<Footer />);

    const logo = screen.getByTestId('FooterLogo');

    expect(logo).toBeInTheDocument();
  });

  describe('social icons', () => {
    beforeEach(() => {
      render(<Footer />);
    });

    it('should render YouTube icon', () => {
      expect(
        screen.getByTitle('Subscribe to my YouTube channel')
      ).toBeInTheDocument();
    });

    it('should render Twitter icon', () => {
      expect(screen.getByTitle('Follow me on Twitter')).toBeInTheDocument();
    });

    it('should render GitHub icon', () => {
      expect(
        screen.getByTitle('Explore my GitHub contributions')
      ).toBeInTheDocument();
    });

    it('should render LinkedIn icon', () => {
      expect(
        screen.getByTitle('Connect with me on LinkedIn')
      ).toBeInTheDocument();
    });
  });

  it('should render copyright', () => {
    render(<Footer />);

    const copyright = screen.getByText(/©/i);

    expect(copyright).toBeInTheDocument();
  });
});
