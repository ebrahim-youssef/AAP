export interface BranchButtonProps {
  branch?: string;
  /** onBrand = outline white on blue header; light = on white bars. */
  tone?: "onBrand" | "light";
  onClick?: () => void;
}
