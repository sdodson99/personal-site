import React from 'react';

import { FirebaseAnalyticsProvider } from './firebase/use-firebase-analytics-context';

type AnalyticsProviderProps = React.PropsWithChildren;

export const AnalyticsProvider = ({ children }: AnalyticsProviderProps) => (
  <FirebaseAnalyticsProvider>{children}</FirebaseAnalyticsProvider>
);
