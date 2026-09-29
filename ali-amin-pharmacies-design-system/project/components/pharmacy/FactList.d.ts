export interface FactListProps {
  /** Label/value pairs; set ltr for drug names, doses, phone numbers. */
  items: { label: string; value: React.ReactNode; ltr?: boolean }[];
}
