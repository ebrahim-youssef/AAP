import generatedSlugs from "../../data/medicine-slugs.json";

export async function readMedicineSlugs(): Promise<string[]> {
  const parsed: unknown = generatedSlugs;
  if (
    !Array.isArray(parsed) ||
    parsed.some((slug) => typeof slug !== "string")
  ) {
    throw new Error("data/medicine-slugs.json must contain a string array");
  }
  return parsed as string[];
}
