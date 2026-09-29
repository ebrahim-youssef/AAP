export interface WordmarkProps {
  /** brand = navy on white/paper; inverse = white on blue or navy. */
  tone?: "brand" | "inverse";
  /** sm 18px / md 22px / lg 34px for «علي أمين». */
  size?: "sm" | "md" | "lg";
  /** Adds the supporting English line. */
  english?: boolean;
  href?: string;
}
