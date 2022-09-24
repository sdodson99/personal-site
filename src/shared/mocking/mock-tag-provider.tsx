import { useRouter } from 'next/router';
import { isProduction } from 'shared/configuration';
import { MockTagContext } from './use-mock-tag-context';

type MockTagProviderProps = {
  children: React.ReactNode;
};

export const MockTagProvider = ({ children }: MockTagProviderProps) => {
  const { query, isReady } = useRouter();

  // Do not allow mocking in production environment.
  const mockingEnabled = !isProduction();
  const mockTagLoading = !isReady;

  const getMockTag = () => {
    if (!mockingEnabled) {
      return null;
    }

    return query['mock']?.toString().toLowerCase() ?? null;
  };

  if (mockingEnabled && mockTagLoading) {
    return null;
  }

  return (
    <MockTagContext.Provider value={getMockTag()}>
      {children}
    </MockTagContext.Provider>
  );
};
