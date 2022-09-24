import { createContext, useContext } from 'react';

type MockTagContextValue = {
  mockTag?: string;
  loading: boolean;
};

export const MockTagContext = createContext<MockTagContextValue>({
  loading: false,
});

export const useMockTagContext = () => useContext(MockTagContext);
