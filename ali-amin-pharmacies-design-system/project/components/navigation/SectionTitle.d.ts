export interface SectionTitleProps {
  children: React.ReactNode;
  /** Optional end link, e.g. «الكل». */
  action?: string;
  onAction?: () => void;
}
