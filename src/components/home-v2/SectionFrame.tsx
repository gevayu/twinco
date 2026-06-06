import Image from "next/image";
import { type CSSProperties, type ReactNode } from "react";

/**
 * The uniform v2 section shell: a 96%-wide rounded card (min 80vh) with the
 * signature growth-wave watermarked across its vertical center, a thin azure
 * ring + shadow, sitting on the section's own background.
 *
 * - `outerClassName` styles the area *behind* the card (the section bg).
 * - `cardClassName` styles the card surface (defaults to the light brand fill;
 *   pass a dark value for dark sections so their content keeps its colors).
 * - `contentClassName` tunes the inner padding/layout wrapper.
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
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`flex justify-center py-20 md:py-28 ${outerClassName}`}
      style={outerStyle}
    >
      <div
        className={`relative w-[96%] max-w-[1760px] mx-auto lg:min-h-[80vh] flex flex-col justify-center overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-2xl ring-1 ring-[#147BFE]/15 ${cardClassName}`}
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
        <div className={`relative z-10 w-full ${contentClassName}`}>
          {children}
        </div>
      </div>
    </section>
  );
}
