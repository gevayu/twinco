import { type CSSProperties } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

function PreludeTop() {
  return (
    <div className="mt-0 max-w-4xl md:mt-[7.5vh]">
      <div
        className="rise mb-8 inline-flex items-center rounded-full border border-white/15 bg-[#021879]/70 px-4 py-2 backdrop-blur-sm"
        style={{ "--d": "0s" } as CSSProperties}
      >
        <span className="font-sans text-[18px] font-medium tracking-wide text-white">
          Architects of Enterprise AI Adoption
        </span>
      </div>
      <h1
        className="rise text-[2.6rem] font-normal leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl"
        style={{ "--d": "0.1s" } as CSSProperties}
      >
        Where 95% of businesses fail,
        <br />
        <span className="font-bold tracking-normal text-[#FFDE8A] text-[4rem] md:text-[5.4rem] lg:text-[7.2rem]">
          WE SUCCEED.
        </span>
      </h1>
    </div>
  );
}

function PreludeBottom() {
  return (
    <div className="max-w-2xl self-start translate-x-0 text-left md:self-end md:translate-x-[15%]">
      <div className="relative mb-10 max-w-lg">
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-x-3 -inset-y-1.5 scale-100 bg-[radial-gradient(ellipse_at_center,rgba(5,8,26,0.3)_0%,rgba(5,8,26,0.2)_60%,transparent_92%)] blur-[19px]"
        />
        <p
          className="rise relative text-xl font-medium leading-relaxed text-[#E7F3FF] opacity-90 md:text-2xl [text-shadow:0_1px_2px_rgba(0,0,0,0.6)]"
          style={{ "--d": "0.2s" } as CSSProperties}
        >
          We pinpoint the workflow that&apos;s quietly costing you. Then we
          design the AI that fixes it, and lead the adoption that makes it stick.
        </p>
      </div>
      <a
        href="#contact"
        className="rise group relative inline-flex items-center justify-center gap-3 rounded-full border border-[#021879]/15 bg-[#FFDE8A] px-8 py-5 text-lg font-bold text-[#021879] transition-all duration-300 hover:scale-105"
        style={{ "--d": "0.3s" } as CSSProperties}
      >
        Book a session
        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  );
}

function ScrollHint() {
  return (
    <a
      href="#opening"
      aria-label="Scroll to content"
      className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/70 transition-colors hover:text-white"
    >
      <span className="font-mono text-[0.7rem] uppercase tracking-[0.25em]">
        Scroll
      </span>
      <span className="flex h-9 w-5 items-start justify-center rounded-full border border-white/40 pt-1.5">
        <span className="h-1.5 w-1.5 animate-scroll-hint rounded-full bg-[#FFDE8A]" />
      </span>
    </a>
  );
}

/**
 * Full-viewport hero: dark `bg-night-deep` backdrop with the brand growth-wave
 * laid over it full width, and the hero copy split above and below the wave.
 */
export function Prelude() {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden md:h-screen md:min-h-[720px]"
      style={{
        background: [
          "radial-gradient(140% 100% at 88% -18%, rgba(20,123,254,0.7), transparent 60%)",
          "radial-gradient(110% 90% at -10% 118%, rgba(2,27,121,1), transparent 62%)",
          "linear-gradient(160deg, #06102b 0%, #04061a 48%, #010208 100%)",
        ].join(", "),
      }}
    >
      {/* Depth scrim over the dark backdrop (sits below the wave) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#05081A]/40 via-[#05081A]/20 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#05081A]/30 to-transparent" />

      {/* Brand growth-wave. Tablet/desktop: centered behind the split copy.
          Mobile uses a dedicated in-flow band instead (see below). */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 hidden -translate-y-1/2 md:block">
        <Image
          src="/brand/wave-hero.png"
          alt=""
          width={1920}
          height={1080}
          priority
          sizes="100vw"
          className="h-auto w-full drop-shadow-[0_30px_70px_rgba(0,0,0,0.45)]"
        />
      </div>

      {/* Copy: split around the wave on tablet/desktop; on mobile stacked
          directly under the header, with the wave as a clean floor below. */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col px-6 pt-24 pb-32 md:justify-between md:px-12 md:py-32">
        <PreludeTop />
        {/* Mobile: the growth-wave gets its own dedicated band below the heading */}
        <div className="pointer-events-none -mx-6 my-8 md:hidden">
          <Image
            src="/brand/wave-hero.png"
            alt=""
            width={1920}
            height={1080}
            sizes="100vw"
            className="h-auto w-full"
          />
        </div>
        <PreludeBottom />
      </div>

      <ScrollHint />
    </section>
  );
}
