import { renderHook } from '@testing-library/react';
import { FirebaseAppProvider } from '../firebase-app-provider';
import { useFirebaseAppContext } from '../use-firebase-app-context';
import { FirebaseOptions, initializeApp } from 'firebase/app';
import { when } from 'jest-when';
import { MockTagProvider } from 'shared/mocking';
import { setMockTag } from '../../../../../test/unit/utils/set-mock-tag';

const mockInitializeApp = initializeApp as jest.Mock;

describe('useFirebaseAppContext', () => {
  let wrapper: React.JSXElementConstructor<{ children: React.ReactElement }>;
  let config: FirebaseOptions;

  beforeEach(() => {
    config = { key: '123' } as FirebaseOptions;
    wrapper = ({ children }) => (
      <MockTagProvider>
        <FirebaseAppProvider config={config}>{children}</FirebaseAppProvider>
      </MockTagProvider>
    );
  });

  describe('in non-mock environment', () => {
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

  describe('in mock environment', () => {
    beforeEach(() => {
      setMockTag();
    });

    it('should return undefined Firebase app', () => {
      const { result } = renderHook(() => useFirebaseAppContext(), {
        wrapper,
      });

      expect(result.current.app).toBeUndefined();
    });
  });
});
