import React from 'react';
import { AnalyticsProvider } from '@/shared/analytics';
import { FirebaseAppProvider } from '@/shared/firebase';
import { MockTagProvider } from '@/shared/mocking';

type TestAppProps = React.PropsWithChildren;

export const TestApp = ({ children }: TestAppProps) => (
  <MockTagProvider>
    <FirebaseAppProvider config={{}}>
      <AnalyticsProvider>{children}</AnalyticsProvider>
    </FirebaseAppProvider>
  </MockTagProvider>
);
