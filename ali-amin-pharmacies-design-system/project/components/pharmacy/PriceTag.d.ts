/**
 * @startingPoint section="Pharmacy" subtitle="Shelf-tag price with timestamp rail" viewport="700x240"
 */
export interface PriceTagProps {
  /** Number or formatted string. Omit → "مفيش سعر حديث". */
  price?: number | string;
  currency?: string;
  label?: string;
  /** REQUIRED in practice — a price without a timestamp must not be published. e.g. "اليوم 10:40 ص". */
  updatedAt?: string;
  branch?: string;
  status?: "check" | "confirmed" | "unavailable";
  statusLabel?: string;
  /** lg = 38px price (product page, social), md = 28px. */
  size?: "lg" | "md";
}
