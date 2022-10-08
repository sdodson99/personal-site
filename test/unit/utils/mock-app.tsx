import React from 'react';
import { AnalyticsProvider } from '@/shared/analytics';
import { FirebaseAppProvider } from '@/shared/firebase';
import { MockTagProvider } from '@/shared/mocking';

type MockAppProps = React.PropsWithChildren;

export const MockApp = ({ children }: MockAppProps) => (
  <MockTagProvider>
    <FirebaseAppProvider config={{}}>
      <AnalyticsProvider>{children}</AnalyticsProvider>
    </FirebaseAppProvider>
  </MockTagProvider>
);
