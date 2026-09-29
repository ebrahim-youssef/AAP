export interface StatusTagProps {
  /** check = yellow "needs confirming" (the ONLY use of yellow in UI). confirmed = green, ONLY from a live trusted source. unavailable = red. info = grey. */
  status?: "check" | "confirmed" | "unavailable" | "info";
  /** Override label; defaults to the standard Arabic wording. */
  children?: React.ReactNode;
}
