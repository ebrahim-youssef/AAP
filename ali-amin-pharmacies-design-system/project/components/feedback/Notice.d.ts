export interface NoticeProps {
  /** note = grey operational context; warning = data needs confirming; danger = medical escalation (see a doctor). Never auto-dismisses. */
  tone?: "note" | "warning" | "danger";
  /** Rounded standalone box instead of a full-width strip. */
  boxed?: boolean;
  children: React.ReactNode;
}
