/**
 * @startingPoint section="Feedback" subtitle="WhatsApp confirmation bottom sheet" viewport="700x420"
 */
export interface SheetProps {
  open?: boolean;
  title: string;
  description?: string;
  onClose?: () => void;
  children?: React.ReactNode;
  /** Buttons, stacked full-width. */
  footer?: React.ReactNode;
}
export interface MessagePreviewProps {
  label?: string;
  /** The editable pre-filled WhatsApp message. */
  children: React.ReactNode;
}
