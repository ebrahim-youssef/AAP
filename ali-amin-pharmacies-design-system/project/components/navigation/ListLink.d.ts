export interface ListLinkProps {
  /** Lucide icon in brand blue — plain, never inside a tinted square. */
  icon?: string;
  title: string;
  description?: string;
  href?: string;
  onClick?: () => void;
}
