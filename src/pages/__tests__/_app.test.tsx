import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { AppProps } from 'next/app';
import { Router } from 'next/router';
import Home from '../index.page';
import App from '../_app.page';
import { setMockTag } from '../../../test/unit/utils/set-mock-tag';

describe('<App />', () => {
  let props: AppProps;

  beforeEach(() => {
    props = {
      Component: Home,
      pageProps: {
        feed: { posts: [] },
      },
      router: {} as Router,
    };

    setMockTag();
  });

  it('should render page', () => {
    render(<App {...props} />);

    const page = screen.getByTestId('HomePage');

    expect(page).toBeInTheDocument();
  });
});
