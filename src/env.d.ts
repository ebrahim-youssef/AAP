/// <reference types="astro/client" />

interface AapD1PreparedStatement {
  bind(...values: unknown[]): AapD1PreparedStatement;
  first<T = Record<string, unknown>>(columnName?: string): Promise<T | null>;
}

interface AapD1Database {
  prepare(query: string): AapD1PreparedStatement;
}

interface AapWorkerEnv {
  DB: AapD1Database;
}

declare module "cloudflare:workers" {
  const env: AapWorkerEnv;
  export { env };
}
