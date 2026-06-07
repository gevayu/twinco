import Image from "next/image";
import { type CSSProperties, type ReactNode } from "react";

/**
 * v4 section shell — full-bleed, no card. Each section fills the viewport and
 * scrolls past the next one in normal flow (no sticky deck-stack). It paints
 * its own background (so nothing shows through as transparent) and keeps the
 * signature growth-wave watermarked across its vertical center.
 *
 * Background resolution, in order: `outerStyle` (inline, e.g. a gradient) →
 * `outerClassName` → `cardClassName` (the light brand fill by default).
 * `contentClassName` tunes the inner padding/layout wrapper.
 *
 * Note: `dwell` is accepted for API compatibility with the other variants but
 * has no effect here — there is no sticky dwell in the flat-scroll layout.
 */
export function SectionFrame({
  id,
  outerClassName = "",
  outerStyle,
  cardClassName = "bg-[#F4F9FF]",
  contentClassName = "px-6 py-14 md:px-12 lg:px-16",
  children,
}: {
  id?: string;
  outerClassName?: string;
  outerStyle?: CSSProperties;
  cardClassName?: string;
  contentClassName?: string;
  dwell?: boolean;
  children: ReactNode;
}) {
  // When an inline background is given, let it own the surface; otherwise fall
  // back to the outer class, then the card fill.
  const bgClass = outerStyle ? outerClassName : outerClassName || cardClassName;

  return (
    <section
      id={id}
      style={outerStyle}
      className={`relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-[38px] ${bgClass}`}
    >
      {/* Signature growth-wave, watermarked across the vertical center */}
      <Image
        src="/brand/wave-hero.png"
        alt=""
        width={2000}
        height={1066}
        sizes="90vw"
        className="pointer-events-none select-none absolute inset-x-0 top-1/2 -translate-y-1/2 w-full h-auto opacity-15"
      />
      <div
        className={`relative z-10 w-full max-w-[1760px] mx-auto ${contentClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
