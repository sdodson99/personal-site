import { useRouter } from 'next/router';
import { useMockTagContext, MockTagProvider } from '..';
import { renderHook } from '@testing-library/react';

const mockUseRouter = useRouter as jest.Mock;

describe('useMockTagContext', () => {
  let mockTag: string;

  beforeEach(() => {
    mockTag = 'base-mock';

    mockUseRouter.mockReturnValue({
      isReady: true,
      query: {
        mock: mockTag,
      },
    });
  });

  afterEach(() => {
    mockUseRouter.mockReset();
  });

  it('should return mock tag when ready in non-production environment', () => {
    const { result } = renderHook(() => useMockTagContext(), {
      wrapper: MockTagProvider,
    });

    expect(result.current).toBe(mockTag);
  });

  it('should return lowercase mock tag', () => {
    const upperMockTag = 'BASE-MOCK';
    mockUseRouter.mockReturnValue({
      isReady: true,
      query: {
        mock: upperMockTag,
      },
    });

    const { result } = renderHook(() => useMockTagContext(), {
      wrapper: MockTagProvider,
    });

    expect(result.current).toBe(mockTag);
  });

  it('should not render when mock tag loading in non-production environment', () => {
    mockUseRouter.mockReturnValue({
      isReady: false,
      query: {
        mock: mockTag,
      },
    });

    const { result } = renderHook(() => useMockTagContext(), {
      wrapper: MockTagProvider,
    });

    expect(result.current).toBeNull();
  });

  it('should not return mock tag in production environment', () => {
    process.env.NEXT_PUBLIC_ENVIRONMENT = 'production';

    const { result } = renderHook(() => useMockTagContext(), {
      wrapper: MockTagProvider,
    });

    expect(result.current).toBeNull();
  });
});
