import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "tests/e2e",
  webServer: {
    command: "npm run build && npm run db:local && npx wrangler dev --port 8787",
    timeout: 180_000,
    url: "http://localhost:8787",
    reuseExistingServer: false,
  },
  use: {
    baseURL: "http://localhost:8787",
  },
});
