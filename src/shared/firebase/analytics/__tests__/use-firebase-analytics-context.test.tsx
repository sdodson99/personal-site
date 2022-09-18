import { renderHook } from '@testing-library/react';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { when } from 'jest-when';
import { FirebaseAppProvider } from 'shared/firebase/app';
import {
  FirebaseAnalyticsProvider,
  useFirebaseAnalyticsContext,
} from '../use-firebase-analytics-context';

jest.mock('firebase/app');
const mockInitializeApp = initializeApp as jest.Mock;

jest.mock('firebase/analytics');
const mockGetAnalytics = getAnalytics as jest.Mock;

describe('useFirebaseAnalyticsContext', () => {
  let wrapper: React.JSXElementConstructor<{ children: React.ReactElement }>;

  beforeEach(() => {
    wrapper = ({ children }) => (
      <FirebaseAppProvider config={{}}>
        <FirebaseAnalyticsProvider>{children}</FirebaseAnalyticsProvider>
      </FirebaseAppProvider>
    );
  });

  afterEach(() => {
    mockInitializeApp.mockReset();
    mockGetAnalytics.mockReset();
  });

  it('should return analytics for Firebase app', async () => {
    const app = { name: 'personal-site' };
    const expectedAnalytics = { app };
    mockInitializeApp.mockReturnValue(app);
    when(mockGetAnalytics).calledWith(app).mockReturnValue(expectedAnalytics);

    const { result } = renderHook(() => useFirebaseAnalyticsContext(), {
      wrapper,
    });

    expect(result.current.analytics).toBe(expectedAnalytics);
  });

  it('should return null analytics when Firebase app not initlaized yet', () => {
    mockInitializeApp.mockReturnValue(undefined);

    const { result } = renderHook(() => useFirebaseAnalyticsContext(), {
      wrapper,
    });

    expect(result.current.analytics).toBeNull();
  });
});
