import React from 'react';
import { LogPageViewEventBoundary } from './events/log-page-view-event-boundary';
import { FirebaseAnalyticsProvider } from './firebase/use-firebase-analytics-context';

type AnalyticsProviderProps = React.PropsWithChildren;

export const AnalyticsProvider = ({ children }: AnalyticsProviderProps) => (
  <FirebaseAnalyticsProvider>
    <LogPageViewEventBoundary>{children}</LogPageViewEventBoundary>
  </FirebaseAnalyticsProvider>
);
