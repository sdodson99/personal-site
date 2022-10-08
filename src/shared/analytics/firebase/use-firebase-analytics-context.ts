import { getAnalytics } from 'firebase/analytics';
import { useFirebaseAppContext } from '@/shared/firebase';
import constate from 'constate';
import { useCallback, useMemo } from 'react';

const useFirebaseAnalytics = () => {
  const { app } = useFirebaseAppContext();

  const getFirebaseAnalytics = useCallback(() => {
    if (!app) {
      return null;
    }

    return getAnalytics(app);
  }, [app]);

  const analytics = useMemo(
    () => getFirebaseAnalytics(),
    [getFirebaseAnalytics]
  );

  return { analytics };
};

const [FirebaseAnalyticsProvider, useFirebaseAnalyticsContext] =
  constate(useFirebaseAnalytics);

export { FirebaseAnalyticsProvider, useFirebaseAnalyticsContext };
