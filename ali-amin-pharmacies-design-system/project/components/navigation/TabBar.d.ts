export interface TabBarProps {
  /** One of the item ids; default set: home, search, pharmacist, branches. */
  active?: string;
  onChange?: (id: string) => void;
  /** Keep to 4 destinations. */
  items?: { id: string; icon: string; label: string }[];
  style?: React.CSSProperties;
}
