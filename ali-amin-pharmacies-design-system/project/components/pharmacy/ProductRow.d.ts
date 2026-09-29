/**
 * @startingPoint section="Pharmacy" subtitle="Search result row with price and timestamp" viewport="700x320"
 */
export interface ProductRowProps {
  /** Arabic trade name + strength, e.g. «كونكور 5 مجم». */
  name: string;
  /** LTR line: active ingredient · strength · pack, e.g. "Bisoprolol 5 mg · 30 tabs". */
  latin?: string;
  price?: number | string;
  currency?: string;
  updatedAt?: string;
  status?: "check" | "confirmed" | "unavailable" | "info";
  statusLabel?: string;
  onClick?: () => void;
}
