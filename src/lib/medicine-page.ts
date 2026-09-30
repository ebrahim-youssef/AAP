import { env } from "cloudflare:workers";

export interface MedicineRow {
  drug_class: string | null;
  manufacturer: string | null;
  name_ar: string | null;
  name_en: string | null;
  price_egp: number;
  route: string | null;
  scientific: string | null;
}

interface MetaRow {
  value: string;
}

export async function loadMedicinePageData(slug: string | undefined): Promise<{
  asOf: string;
  row: MedicineRow | null;
}> {
  const row = slug
    ? await env.DB.prepare(
        "SELECT name_en, name_ar, scientific, manufacturer, drug_class, route, price_egp FROM medicines WHERE slug = ?1",
      ).bind(slug).first<MedicineRow>()
    : null;
  const asOfRow = row
    ? await env.DB.prepare("SELECT value FROM meta WHERE key = ?1").bind("as_of").first<MetaRow>()
    : null;

  return { asOf: asOfRow?.value ?? "2026-06", row };
}
