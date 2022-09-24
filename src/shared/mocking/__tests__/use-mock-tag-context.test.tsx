import { useRouter } from 'next/router';
import { useMockTagContext, MockTagProvider } from '..';
import { renderHook } from '@testing-library/react';

const mockUseRouter = useRouter as jest.Mock;

describe('useMockTagContext', () => {
  let mockTag: string;

  beforeEach(() => {
    mockTag = 'base-mock';
  });

  afterEach(() => {
    mockUseRouter.mockReset();
    process.env.NEXT_PUBLIC_ENVIRONMENT = undefined;
  });

  describe('in non-production', () => {
    describe('mockTag', () => {
      it('should return mock tag when ready', () => {
        mockUseRouter.mockReturnValue({
          isReady: true,
          query: {
            mock: mockTag,
          },
        });

        const { result } = renderHook(() => useMockTagContext(), {
          wrapper: MockTagProvider,
        });

        expect(result.current.mockTag).toBe(mockTag);
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

        expect(result.current.mockTag).toBe(mockTag);
      });

      it('should return undefined mock tag when no mock available', () => {
        mockUseRouter.mockReturnValue({
          isReady: true,
          query: {},
        });

        const { result } = renderHook(() => useMockTagContext(), {
          wrapper: MockTagProvider,
        });

        expect(result.current.mockTag).toBeUndefined();
      });
    });

    describe('loading', () => {
      it('should return true when router not ready', () => {
        mockUseRouter.mockReturnValue({
          isReady: false,
          query: {},
        });

        const { result } = renderHook(() => useMockTagContext(), {
          wrapper: MockTagProvider,
        });

        expect(result.current.loading).toBeTruthy();
      });

      it('should return false when router ready', () => {
        mockUseRouter.mockReturnValue({
          isReady: true,
          query: {},
        });

        const { result } = renderHook(() => useMockTagContext(), {
          wrapper: MockTagProvider,
        });

        expect(result.current.loading).toBeFalsy();
      });
    });
  });

  describe('in production', () => {
    beforeEach(() => {
      process.env.NEXT_PUBLIC_ENVIRONMENT = 'production';
    });

    describe('mockTag', () => {
      it('should return undefined even when query string has mock', () => {
        mockUseRouter.mockReturnValue({
          isReady: true,
          query: {
            mock: mockTag,
          },
        });

        const { result } = renderHook(() => useMockTagContext(), {
          wrapper: MockTagProvider,
        });

        expect(result.current.mockTag).toBeUndefined();
      });
    });

    describe('loading', () => {
      it('should return false even when router is not ready', () => {
        mockUseRouter.mockReturnValue({
          isReady: false,
        });

        const { result } = renderHook(() => useMockTagContext(), {
          wrapper: MockTagProvider,
        });

        expect(result.current.loading).toBeFalsy();
      });
    });
  });
});
