import { useFirebaseAnalyticsContext } from '../../firebase';
import { logEvent as logFirebaseAnalyticsEvent } from 'firebase/analytics';
import { render } from '@testing-library/react';
import { NextRouter, useRouter } from 'next/router';
import { LogPageViewEventBoundary } from '../log-page-view-event-boundary';

jest.mock('firebase/analytics');
const mockLogFirebaseAnalyticsEvent = logFirebaseAnalyticsEvent as jest.Mock;

jest.mock('../../firebase');
const mockUseFirebaseAnalyticsContext =
  useFirebaseAnalyticsContext as jest.Mock;

jest.mock('next/router');
const mockUseRouter = useRouter as jest.Mock;

describe('LogPageViewEventBoundary', () => {
  let mockAnalytics: string;
  let mockRouter: NextRouter;

  beforeEach(() => {
    mockAnalytics = 'mock-analytics';
    mockUseFirebaseAnalyticsContext.mockReturnValue({
      analytics: mockAnalytics,
    });

    mockRouter = {
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
    } as unknown as NextRouter;
    mockUseRouter.mockReturnValue(mockRouter);

    document.title = 'My Website';

    global.window = Object.create(window);
    Object.defineProperty(window, 'location', {
      writable: true,
      value: { href: 'www.mywebsite.com' },
    });
  });

  afterEach(() => {
    mockLogFirebaseAnalyticsEvent.mockReset();
    mockUseFirebaseAnalyticsContext.mockReset();
  });

  it('should log page view event with page parameters on page change', () => {
    render(<LogPageViewEventBoundary />);

    // Simulate page change.
    (mockRouter.events.on as jest.Mock).mock.calls[0][1]();

    expect(mockLogFirebaseAnalyticsEvent).toBeCalledWith(
      mockAnalytics,
      'page_view',
      {
        page_title: document.title,
        page_location: window.location.href,
      }
    );
  });

  it('should cleanup page view event logging when un-mounted', () => {
    const { unmount } = render(<LogPageViewEventBoundary />);

    unmount();

    expect(mockRouter.events.off).toBeCalledWith(
      'routeChangeComplete',
      expect.any(Function)
    );
  });
});
