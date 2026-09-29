export interface ShelfEdgeProps {
  /** default = navy segments + one yellow; inverse = translucent white (on navy). */
  tone?: "default" | "inverse";
  /** Pixel height: 4 in app UI, 8–12 on social/slides. */
  height?: number;
}
