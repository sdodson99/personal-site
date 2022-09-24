import { ReactNode, useEffect, useState } from 'react';
import { FirebaseAppContext } from './use-firebase-app-context';
import { FirebaseApp, initializeApp, FirebaseOptions } from 'firebase/app';

export type RealFirebaseAppProviderProps = {
  children: ReactNode;
  config: FirebaseOptions;
};

export const RealFirebaseAppProvider = ({
  children,
  config,
}: RealFirebaseAppProviderProps) => {
  const [app, setApp] = useState<FirebaseApp>();

  useEffect(() => {
    if (app) {
      return;
    }

    const initializedApp = initializeApp(config);
    setApp(initializedApp);
  }, [app, config]);

  return (
    <FirebaseAppContext.Provider value={{ app }}>
      {children}
    </FirebaseAppContext.Provider>
  );
};
