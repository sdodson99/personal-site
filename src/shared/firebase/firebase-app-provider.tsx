import {
  RealFirebaseAppProvider,
  RealFirebaseAppProviderProps,
} from './real-firebase-app-provider';
import { useMockTagContext } from '@/shared/mocking';
import { MockFirebaseAppProvider } from './mock-firebase-app-provider';

export const FirebaseAppProvider = ({
  children,
  config,
}: RealFirebaseAppProviderProps) => {
  const { mockTag } = useMockTagContext();

  if (mockTag) {
    return <MockFirebaseAppProvider>{children}</MockFirebaseAppProvider>;
  }

  return (
    <RealFirebaseAppProvider config={config}>
      {children}
    </RealFirebaseAppProvider>
  );
};