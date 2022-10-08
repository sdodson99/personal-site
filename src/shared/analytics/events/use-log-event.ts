import { useFirebaseAnalyticsContext } from '../firebase/use-firebase-analytics-context';
import { logEvent as logFirebaseAnalyticsEvent } from 'firebase/analytics';
import { useCallback } from 'react';

export const useLogEvent = () => {
  const { analytics } = useFirebaseAnalyticsContext();

  const logEvent = useCallback(
    (
      eventName: string,
      eventParameters?: {
        [key: string]: unknown;
      }
    ): void => {
      if (!analytics) {
        return;
      }

      return logFirebaseAnalyticsEvent(analytics, eventName, eventParameters);
    },
    [analytics]
  );

  return {
    logEvent,
  };
};
