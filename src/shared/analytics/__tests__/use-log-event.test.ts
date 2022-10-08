import { useFirebaseAnalyticsContext } from '../../firebase';
import { logEvent as logFirebaseAnalyticsEvent } from 'firebase/analytics';
import { renderHook } from '@testing-library/react';
import { useLogEvent } from '../use-log-event';

jest.mock('firebase/analytics');
const mockLogFirebaseAnalyticsEvent = logFirebaseAnalyticsEvent as jest.Mock;

jest.mock('../../firebase');
const mockUseFirebaseAnalyticsContext =
  useFirebaseAnalyticsContext as jest.Mock;

describe('useLogEvent', () => {
  let mockAnalytics: string;

  let eventName: string;
  let eventParameters: {
    [key: string]: unknown;
  };

  beforeEach(() => {
    mockAnalytics = 'mock-analytics';

    eventName = 'page_view';
    eventParameters = { url: 'www.test.com' };
  });

  afterEach(() => {
    mockLogFirebaseAnalyticsEvent.mockReset();
    mockUseFirebaseAnalyticsContext.mockReset();
  });

  it('should log analytics event when analytics ready', () => {
    mockUseFirebaseAnalyticsContext.mockReturnValue({
      analytics: mockAnalytics,
    });
    const { result } = renderHook(() => useLogEvent());

    result.current.logEvent(eventName, eventParameters);

    expect(mockLogFirebaseAnalyticsEvent).toBeCalledWith(
      mockAnalytics,
      eventName,
      eventParameters
    );
  });

  it('should not log analytics event when analytics not ready', () => {
    mockUseFirebaseAnalyticsContext.mockReturnValue({
      analytics: null,
    });
    const { result } = renderHook(() => useLogEvent());

    result.current.logEvent(eventName, eventParameters);

    expect(mockLogFirebaseAnalyticsEvent).not.toBeCalled();
  });
});
