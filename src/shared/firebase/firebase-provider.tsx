import { ReactNode } from 'react';
import { FirebaseAppProvider } from './app';
import { FirebaseAnalyticsProvider } from './analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyAJvMQW4ljm5DCnrd9ilkIgJb77IZvxzXI',
  authDomain: 'personal-site-60896.firebaseapp.com',
  projectId: 'personal-site-60896',
  storageBucket: 'personal-site-60896.appspot.com',
  messagingSenderId: '1038050866165',
  appId: '1:1038050866165:web:d90b22e7f7ef7011b6a6bc',
  measurementId: 'G-6QL5D7KTPK',
};

type FirebaseProviderProps = {
  children: ReactNode;
};

export const FirebaseProvider = ({ children }: FirebaseProviderProps) => (
  <FirebaseAppProvider config={firebaseConfig}>
    <FirebaseAnalyticsProvider>{children}</FirebaseAnalyticsProvider>
  </FirebaseAppProvider>
);
