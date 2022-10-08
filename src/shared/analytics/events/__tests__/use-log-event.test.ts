import {
  logEvent as logFirebaseAnalyticsEvent,
  getAnalytics,
} from 'firebase/analytics';
import { renderHook } from '@testing-library/react';
import { useLogEvent } from '../use-log-event';
import { MockApp } from '@/test/unit/utils/mock-app';

const mockLogFirebaseAnalyticsEvent = logFirebaseAnalyticsEvent as jest.Mock;
const mockGetAnalytics = getAnalytics as jest.Mock;

describe('useLogEvent', () => {
  let eventName: string;
  let eventParameters: {
    [key: string]: unknown;
  };

  beforeEach(() => {
    eventName = 'page_view';
    eventParameters = { url: 'www.test.com' };
  });

  it('should log analytics event when analytics ready', () => {
    const { result } = renderHook(() => useLogEvent(), {
      wrapper: MockApp,
    });

    result.current.logEvent(eventName, eventParameters);

    expect(mockLogFirebaseAnalyticsEvent).toBeCalledWith(
      'mock-firebase-analytics',
      eventName,
      eventParameters
    );
  });

  it('should not log analytics event when analytics not ready', () => {
    mockGetAnalytics.mockReturnValue(null);
    const { result } = renderHook(() => useLogEvent(), {
      wrapper: MockApp,
    });

    result.current.logEvent(eventName, eventParameters);

    expect(mockLogFirebaseAnalyticsEvent).not.toBeCalled();
  });
});
