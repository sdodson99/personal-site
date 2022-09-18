import { getAnalytics } from 'firebase/analytics';
import { useFirebaseAppContext } from '../app';
import constate from 'constate';

const useFirebaseAnalytics = () => {
  const { app } = useFirebaseAppContext();

  const getFirebaseAnalytics = () => {
    if (!app) {
      return null;
    }

    return getAnalytics(app);
  };

  const analytics = getFirebaseAnalytics();

  return { analytics };
};

const [FirebaseAnalyticsProvider, useFirebaseAnalyticsContext] =
  constate(useFirebaseAnalytics);

export { FirebaseAnalyticsProvider, useFirebaseAnalyticsContext };
