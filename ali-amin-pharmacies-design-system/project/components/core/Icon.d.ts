export interface IconProps {
  /** Lucide icon name (kebab-case), e.g. "search", "map-pin", "message-circle", "clock", "chevron-left". */
  name: string;
  /** Pixel size. 20 default (lists, tabs), 14–16 inside tags/rails, 18 for chevrons. */
  size?: number;
  /** Any CSS color; defaults to currentColor. */
  color?: string;
  /** Accessible label. Omit for decorative icons (hidden from screen readers). */
  label?: string;
  style?: React.CSSProperties;
  className?: string;
}
