// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare global {
  interface Window {
    dataLayer: {
      push: (event: { event: string; [arg: string]: unknown }) => void;
    };
  }
}

export {};
