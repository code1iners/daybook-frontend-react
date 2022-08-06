/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SERVER_URL: string;
  readonly VITE_SERVER_URL_V1: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
