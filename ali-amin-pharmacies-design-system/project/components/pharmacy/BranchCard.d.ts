export interface BranchCardProps {
  name: string;
  address?: string;
  /** Confirmed hours only. */
  hours?: string;
  phone?: string;
  /** false → hides address/hours/phone and shows «بيانات تتوثّق». Never invent branch data. */
  verified?: boolean;
  onCall?: () => void;
  onDirections?: () => void;
  onWhatsApp?: () => void;
}
