/// <reference types="astro/client" />

declare global {
  interface Window {
    dataLayer: {
      push: (event: { event: string; [arg: string]: unknown }) => void;
    };
  }
}

export {};
