import { useRouter } from 'next/router';
import { isProduction } from '@/shared/configuration';
import constate from 'constate';

const useMockTag = () => {
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

  if (loading) {
    return { mockTag: null };
  }

  return { mockTag };
};

const [MockTagProvider, useMockTagContext] = constate(useMockTag);

export { MockTagProvider, useMockTagContext };
