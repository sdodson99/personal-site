import { createContext, useContext } from 'react';
import { FirebaseApp } from 'firebase/app';

type FirebaseAppContextValue = {
  app: FirebaseApp | undefined;
};

export const FirebaseAppContext = createContext<FirebaseAppContextValue>({
  app: undefined,
});

export const useFirebaseAppContext = () => useContext(FirebaseAppContext);
