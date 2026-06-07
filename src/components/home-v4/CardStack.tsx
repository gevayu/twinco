import { type ReactNode } from "react";

/**
 * v4 has no deck-of-cards stack: sections are full-bleed and flow one after
 * another in normal (smooth) scroll, each painting its own background. This is
 * a thin passthrough kept so the page composition mirrors the other variants.
 * The `backdrop` prop is accepted but unused (sections own their backgrounds).
 */
export function CardStack({
  children,
}: {
  children: ReactNode;
  backdrop?: string;
}) {
  return <div className="relative">{children}</div>;
}
