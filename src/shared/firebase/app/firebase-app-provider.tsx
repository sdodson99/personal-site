import { ReactNode, useEffect, useState } from 'react';
import { FirebaseAppContext } from './use-firebase-app-context';
import { FirebaseApp, initializeApp, FirebaseOptions } from 'firebase/app';

type FirebaseAppProviderProps = {
  children: ReactNode;
  config: FirebaseOptions;
};

export const FirebaseAppProvider = ({
  children,
  config,
}: FirebaseAppProviderProps) => {
  const [app, setApp] = useState<FirebaseApp>();

  useEffect(() => {
    const initializedApp = initializeApp(config);
    setApp(initializedApp);
  }, []);

  return (
    <FirebaseAppContext.Provider value={{ app }}>
      {children}
    </FirebaseAppContext.Provider>
  );
};
