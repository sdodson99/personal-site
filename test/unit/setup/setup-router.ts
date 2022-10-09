import { useRouter } from 'next/router';
import Link from 'next/link';
import React from 'react';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));
const mockUseRouter = useRouter as jest.Mock;

jest.mock('next/link', () => jest.fn());
const mockLink = Link as unknown as jest.Mock;

beforeEach(() => {
  mockUseRouter.mockReturnValue({
    isReady: true,
    query: {},
    events: {
      on: jest.fn(),
      off: jest.fn(),
    },
  });

  mockLink.mockImplementation(
    ({ children, ...rest }: React.PropsWithChildren) => {
      if (React.isValidElement(children)) {
        return React.cloneElement(children, rest);
      }

      return children;
    }
  );
});

afterEach(() => {
  mockUseRouter.mockReset();
  mockLink.mockReset();
});

export {};
