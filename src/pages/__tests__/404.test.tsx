import NotFoundPage from '../404.page';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('<NotFoundPage />', () => {
  it('should render not found text', () => {
    render(<NotFoundPage />);

    const notFoundText = screen.getByText('Oops! This page does not exist.');

    expect(notFoundText).toBeInTheDocument();
  });

  it('should render link to return back to home page', () => {
    render(<NotFoundPage />);

    const backLink = screen.getByText('Back to home page');

    expect(backLink.getAttribute('href')).toBe('/');
  });
});
