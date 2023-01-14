/// <reference types="astro/client" />

declare global {
  interface Window {
    dataLayer: {
      push: (event: string, data: Record<string, unknown>) => void;
    };
  }
}

export {};
