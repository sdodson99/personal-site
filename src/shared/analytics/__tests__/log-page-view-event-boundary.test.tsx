import { logEvent as logFirebaseAnalyticsEvent } from 'firebase/analytics';
import { render } from '@testing-library/react';
import { NextRouter, useRouter } from 'next/router';
import { LogPageViewEventBoundary } from '../log-page-view-event-boundary';
import { FirebaseProvider } from '@/shared/firebase';

const mockUseRouter = useRouter as jest.Mock;
const mockLogFirebaseAnalyticsEvent = logFirebaseAnalyticsEvent as jest.Mock;

describe('LogPageViewEventBoundary', () => {
  let mockRouter: NextRouter;

  beforeEach(() => {
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

  it('should log page view event with page parameters on page change', () => {
    render(<LogPageViewEventBoundary />, {
      wrapper: FirebaseProvider,
    });

    // Simulate page change on handler w/ analytics loaded.
    (mockRouter.events.on as jest.Mock).mock.calls[1][1]();

    expect(mockLogFirebaseAnalyticsEvent).toBeCalledWith(
      'mock-firebase-analytics',
      'page_view',
      {
        page_title: document.title,
        page_location: window.location.href,
      }
    );
  });

  it('should cleanup page view event logging when un-mounted', () => {
    const { unmount } = render(<LogPageViewEventBoundary />, {
      wrapper: FirebaseProvider,
    });

    unmount();

    expect(mockRouter.events.off).toBeCalledWith(
      'routeChangeComplete',
      expect.any(Function)
    );
  });
});
