import { createContext, useContext } from 'react';

export const MockTagContext = createContext<string | null>(null);

export const useMockTagContext = () => useContext(MockTagContext);
