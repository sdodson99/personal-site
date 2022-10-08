import { ReactNode } from 'react';
import { FirebaseAppContext } from './use-firebase-app-context';

type MockFirebaseAppProviderProps = {
  children: ReactNode;
};

export const MockFirebaseAppProvider = ({
  children,
}: MockFirebaseAppProviderProps) => (
  <FirebaseAppContext.Provider value={{ app: undefined }}>
    {children}
  </FirebaseAppContext.Provider>
);
