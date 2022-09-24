import { useRouter } from 'next/router';

const mockUseRouter = useRouter as jest.Mock;

export const setMockTag = (mockTag = 'base') => {
  mockUseRouter.mockReturnValue({
    isReady: true,
    query: {
      mock: mockTag,
    },
  });
};
