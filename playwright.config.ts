import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "tests/e2e",
  webServer: {
    command: "npm run build && npx wrangler dev --port 8787",
    url: "http://localhost:8787",
  },
  use: {
    baseURL: "http://localhost:8787",
  },
});
