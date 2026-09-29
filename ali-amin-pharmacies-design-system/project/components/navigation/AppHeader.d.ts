/**
 * @startingPoint section="Navigation" subtitle="Blue brand header with search and shelf edge" viewport="700x260"
 */
export interface AppHeaderProps {
  branch?: string;
  onBranch?: () => void;
  /** Optional heading (desktop hero). Mobile home usually omits it. */
  title?: string;
  lede?: string;
  /** Usually a <SearchField variant="onBrand" />. */
  children?: React.ReactNode;
}
