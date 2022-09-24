import { renderHook } from '@testing-library/react';
import { FirebaseAppProvider } from '../firebase-app-provider';
import { useFirebaseAppContext } from '../use-firebase-app-context';
import { FirebaseOptions, initializeApp } from 'firebase/app';
import { when } from 'jest-when';

jest.mock('firebase/app');
const mockInitializeApp = initializeApp as jest.Mock;

describe('useFirebaseAppContext', () => {
  let wrapper: React.JSXElementConstructor<{ children: React.ReactElement }>;
  let config: FirebaseOptions;

  beforeEach(() => {
    config = { key: '123' } as FirebaseOptions;
    wrapper = ({ children }) => (
      <FirebaseAppProvider config={config}>{children}</FirebaseAppProvider>
    );
  });

  afterEach(() => {
    mockInitializeApp.mockReset();
  });

  it('should return initialized app', async () => {
    const expectedApp = { name: 'personal-site' };
    when(mockInitializeApp).calledWith(config).mockReturnValue(expectedApp);

    const { result } = renderHook(() => useFirebaseAppContext(), {
      wrapper,
    });

    expect(result.current.app).toBe(expectedApp);
  });

  it('should only initialize app once', async () => {
    mockInitializeApp.mockReturnValue({});

    renderHook(() => useFirebaseAppContext(), {
      wrapper,
    });

    expect(mockInitializeApp).toBeCalledTimes(1);
  });
});
