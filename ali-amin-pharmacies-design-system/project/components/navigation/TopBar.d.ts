export interface TopBarProps {
  title?: string;
  onBack?: () => void;
  /** Right-end slot (visually the left in RTL), e.g. <BranchButton tone="light" />. */
  right?: React.ReactNode;
  /** Replaces the title, e.g. a <SearchField variant="sunken" />. */
  children?: React.ReactNode;
}
