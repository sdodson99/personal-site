import { useRouter } from 'next/router';
import { isProduction } from '@/shared/configuration';
import { MockTagContext } from './use-mock-tag-context';

type MockTagProviderProps = {
  children: React.ReactNode;
};

export const MockTagProvider = ({ children }: MockTagProviderProps) => {
  const { query, isReady: isRouterReady } = useRouter();

  // Mocking not enabled in production environment.
  const mockingEnabled = !isProduction();

  const getMockTag = () => {
    if (!mockingEnabled) {
      return;
    }

    return query['mock']?.toString().toLowerCase();
  };

  const mockTag = getMockTag();
  const loading = mockingEnabled && !isRouterReady;

  return (
    <MockTagContext.Provider value={{ mockTag, loading }}>
      {children}
    </MockTagContext.Provider>
  );
};
