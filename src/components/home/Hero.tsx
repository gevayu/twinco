import Image from "next/image";
import type { CSSProperties } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { TwincoMark } from "@/components/brand/TwincoMark";
import { Underline } from "@/components/brand/Underline";
import { IconArrowRight } from "@/components/ui/icons";

const sectors = [
  "Finance",
  "Gaming",
  "Supply Chain",
  "Customer Service",
  "Security & Compliance",
  "Operations",
  "Logistics",
];

/** stagger helper for the pure-CSS entrance */
const d = (s: number) => ({ ["--d"]: `${s}s` }) as CSSProperties;

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-white bg-dots"
    >
      {/* ambient brand glows */}
      <div className="pointer-events-none absolute -left-40 top-24 -z-10 h-[34rem] w-[34rem] rounded-full bg-azure/12 blur-[120px]" />
      <div className="pointer-events-none absolute right-10 top-0 -z-10 h-[26rem] w-[26rem] rounded-full bg-yellow/20 blur-[120px]" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-20 pt-32 sm:pt-40 lg:grid-cols-[1.02fr_0.98fr] lg:gap-8 lg:px-10 lg:pb-28 lg:pt-44">
        {/* LEFT — content on light */}
        <div className="min-w-0 max-w-xl">
          <span
            className="rise label-mono inline-flex items-center gap-2.5 text-azure"
            style={d(0)}
          >
            <TwincoMark className="w-5" />
            Enterprise AI Adoption
          </span>

          <h1
            className="rise font-display mt-7 text-[2.6rem] font-bold text-navy sm:text-6xl xl:text-[4.7rem]"
            style={d(0.08)}
          >
            Architects of
            <br />
            Enterprise AI{" "}
            <span className="relative whitespace-nowrap text-azure">
              Adoption
              <Underline className="absolute -bottom-3 left-0 h-4 w-full text-yellow" />
            </span>
          </h1>

          <p
            className="rise mt-10 text-lg leading-relaxed text-graphite sm:text-xl"
            style={d(0.16)}
          >
            We pinpoint your core operational inefficiencies, design the
            solution, and lead the organizational adoption that makes it stick.
          </p>

          <div
            className="rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={d(0.24)}
          >
            <ButtonLink
              href="#contact"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Schedule a Solution Mapping Session
              <IconArrowRight className="w-5 shrink-0 transition-transform duration-200 group-hover/btn:translate-x-1" />
            </ButtonLink>
            <ButtonLink
              href="#methodology"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              See how we work
            </ButtonLink>
          </div>

          <dl
            className="rise mt-14 flex flex-wrap gap-x-10 gap-y-6"
            style={d(0.32)}
          >
            {[
              { k: "95% of AI rollouts fail", v: "we engineer the exception" },
              { k: "Day-one", v: "measurable ROI focus" },
              { k: "Vendor-agnostic", v: "zero lock-in by design" },
            ].map((stat) => (
              <div key={stat.k} className="border-l-2 border-azure/30 pl-4">
                <dt className="text-xl font-bold text-navy">{stat.k}</dt>
                <dd className="label-mono mt-1 text-muted">{stat.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* RIGHT — dark panel with the neon growth wave (screen-blended, clean) */}
        <div
          className="rise relative h-[320px] min-w-0 overflow-hidden rounded-[2.5rem] bg-night-deep bg-dots-light shadow-[0_40px_90px_-40px_rgba(2,27,121,0.6)] sm:h-[420px] lg:h-[560px] lg:-mr-[8vw] lg:rounded-[3rem]"
          style={d(0.2)}
        >
          <div className="absolute inset-0 animate-float">
            <Image
              src="/brand/wave-dark.png"
              alt="Twinco growth model visualized as a 3D wave"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="wave-on-dark scale-110 object-cover"
            />
          </div>

          {/* live chip */}
          <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full glass-dark px-3.5 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow" />
            </span>
            <span className="label-mono text-white">Digital Twin · Live</span>
          </div>

          {/* corner caption */}
          <p className="absolute bottom-6 left-6 max-w-[60%] text-lg font-medium leading-snug text-white/85">
            Your operation, modeled — and set on an upward curve.
          </p>
        </div>
      </div>

      {/* sector marquee */}
      <div className="relative border-y border-navy/5 bg-white/70 py-4 backdrop-blur-sm">
        <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <div className="flex shrink-0 animate-marquee items-center gap-3 pr-3">
            {[...sectors, ...sectors].map((s, i) => (
              <span
                key={i}
                className="label-mono flex items-center gap-3 whitespace-nowrap text-muted"
              >
                {s}
                <span className="text-azure">/</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
