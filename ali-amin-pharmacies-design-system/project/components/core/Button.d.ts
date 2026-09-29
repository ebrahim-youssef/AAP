/**
 * @startingPoint section="Actions" subtitle="Primary, secondary, ghost and inverse buttons" viewport="700x260"
 */
export interface ButtonProps {
  /** primary = the ONE main action per screen (blue). secondary = outlined. ghost = text-only. inverse = navy, for use on blue surfaces. */
  variant?: "primary" | "secondary" | "ghost" | "inverse";
  /** md = 52px (default), sm = 40px. */
  size?: "md" | "sm";
  /** Lucide icon before the label. */
  icon?: string;
  /** Lucide icon after the label (use "arrow-left" for forward in RTL). */
  iconEnd?: string;
  block?: boolean;
  disabled?: boolean;
  /** Keeps width, shows spinner. */
  loading?: boolean;
  /** Renders an <a>; external links open in a new tab. */
  href?: string;
  type?: "button" | "submit";
  onClick?: (e: any) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}
