import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  output: "static",
  adapter: cloudflare(),
  // TODO: replace the placeholder with the production site URL.
  site: "https://aap.ovic391.workers.dev",
  trailingSlash: "never",
  build: {
    format: "file",
  },
  i18n: {
    defaultLocale: "ar",
    locales: ["ar", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
