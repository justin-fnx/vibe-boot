/// <reference types="next" />
/// <reference types="next/image-types/global" />

declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_ADSENSE_CLIENT_ID: string;
    NEXT_PUBLIC_GA_MEASUREMENT_ID: string;
  }
} 