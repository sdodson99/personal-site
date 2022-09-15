import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';

describe('<Header />', () => {
  it('should render logo', () => {
    render(<Header />);

    const logo = screen.getByAltText('Sean Dodson Logo');

    expect(logo).toBeInTheDocument();
  });
});
