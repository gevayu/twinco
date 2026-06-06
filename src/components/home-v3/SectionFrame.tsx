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
  cardClassName = "bg-[#F4F9FF]",
  contentClassName = "px-6 py-14 md:px-12 lg:px-16",
  dwell = true,
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
  return (
    <section
      id={id}
      className={`sticky top-0 overflow-hidden ${dwell ? "min-h-[150vh]" : "min-h-screen"}`}
    >
      <div className="flex h-screen items-center justify-center py-16">
        <div
          data-stack-card
          className={`relative w-[96%] max-w-[1760px] mx-auto lg:h-[85vh] flex flex-col justify-center overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-2xl ring-1 ring-[#147BFE]/15 origin-top will-change-transform transition-[transform,filter,box-shadow] duration-700 ease-[cubic-bezier(0.83,0,0.17,1)] ${cardClassName}`}
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
      </div>
    </section>
  );
}
