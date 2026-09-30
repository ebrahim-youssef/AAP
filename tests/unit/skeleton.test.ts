import { beforeAll, describe, expect, it } from "vitest";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), "../..");
const distRoot = join(projectRoot, "dist", "client");
let homeHtml = "";
let builtStyles = "";

beforeAll(async () => {
  homeHtml = readFileSync(join(distRoot, "index.html"), "utf8");
  builtStyles = readdirSync(distRoot, { recursive: true, encoding: "utf8" })
    .filter((entry): entry is string => entry.endsWith(".css"))
    .map((entry) => readFileSync(join(distRoot, entry), "utf8"))
    .join("\n");
});

describe("AAP Astro skeleton", () => {
  it("renders the Arabic RTL document shell", () => {
    expect(homeHtml).toMatch(/<html[^>]*\blang=["']ar["'][^>]*\bdir=["']rtl["']/);
    expect(homeHtml).toMatch(/<link[^>]+rel=["']stylesheet["']/);
  });

  it("requests the Almarai font", () => {
    expect(homeHtml).toContain("https://fonts.googleapis.com");
    expect(`${homeHtml}\n${builtStyles}`).toContain(
      "https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap",
    );
  });

  it("renders the brand header and footer", () => {
    expect(homeHtml).toMatch(/<header[\s\S]*<svg[\s\S]*<\/svg>[\s\S]*صيدليات علي أمين[\s\S]*<\/header>/);
    expect(homeHtml).toContain("© 2026 صيدليات علي أمين");
  });

  it("publishes a valid logo SVG asset", () => {
    const logoPath = join(distRoot, "logo-icon.svg");

    expect(existsSync(logoPath)).toBe(true);
    const logo = readFileSync(logoPath, "utf8");
    expect(logo).toMatch(/<svg\b/);
    expect(logo).toMatch(/\bviewBox=["'][^"']+["']/);
  });
});
