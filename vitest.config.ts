import { getViteConfig } from "astro/config";
import type { ViteUserConfig } from "vitest/config";

const vitestOptions = {
  test: {
    include: ["tests/unit/**/*.test.ts"],
  },
} satisfies ViteUserConfig;

const createAstroConfig = getViteConfig(vitestOptions, {
  configFile: false,
  output: "static",
  root: ".",
});

const resolvedConfig = await createAstroConfig({ mode: "test", command: "serve" });
resolvedConfig.environments = undefined;

export default resolvedConfig;
