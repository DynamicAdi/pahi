export {};

declare global {
  interface Window {
    grecaptcha: {
      execute: (key: string, options: { action: string }) => Promise<string>;
      ready: (cb: () => void) => void;
    };
    dataLayer: any[];
  }
}
