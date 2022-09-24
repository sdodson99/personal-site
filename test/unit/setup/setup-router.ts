import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));
const mockUseRouter = useRouter as jest.Mock;

beforeEach(() => {
  mockUseRouter.mockReturnValue({
    isReady: true,
    query: {},
  });
});

afterEach(() => {
  mockUseRouter.mockReset();
});

export {};
