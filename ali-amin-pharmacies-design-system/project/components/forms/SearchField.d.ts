export interface SearchFieldProps {
  value?: string;
  defaultValue?: string;
  /** A real example, not "Search…". Default: «اسم الدواء أو المادة الفعالة». */
  placeholder?: string;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  onClear?: () => void;
  /** onBrand = white field inside the blue header; sunken = grey field on white pages. Focus always shows a 1.5px blue ring. */
  variant?: "onBrand" | "sunken";
  /** Shows an inline navy submit button (desktop hero). */
  submitLabel?: string;
  autoFocus?: boolean;
  /** Accessible label. */
  label?: string;
  style?: React.CSSProperties;
}
