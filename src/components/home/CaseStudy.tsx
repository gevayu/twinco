import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { IconArrowRight, IconCheck } from "@/components/ui/icons";

const results = [
  "Revenue leakage stopped immediately",
  "A critical vulnerability turned into a secure, frictionless flow",
  "A rapid surge in verified purchase volume per user",
];

export function CaseStudy() {
  return (
    <Section
      id="case-studies"
      className="relative overflow-hidden bg-night-deep"
    >
      {/* neon wave accent */}
      <div className="pointer-events-none absolute -right-[5%] top-[8%] w-[55%] opacity-50">
        <Image
          src="/brand/wave-dark.png"
          alt=""
          width={2000}
          height={1200}
          className="wave-on-dark h-auto w-full"
        />
      </div>

      <SectionHeading
        tone="light"
        eyebrow="Case Studies"
        title="Architecture in action"
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.35fr_0.85fr]">
        {/* story */}
        <Reveal className="rounded-[2rem] glass-dark p-8 sm:p-10">
          <span className="label-mono inline-flex rounded-full bg-yellow/15 px-3 py-1.5 text-yellow">
            Gaming · Revenue Protection
          </span>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-white/75">
            <p>
              An international gaming company faced a critical synchronization
              gap between real-time in-game systems, fast payment gateways, and
              delayed bank updates. The latency opened structural loopholes —
              users unlocked premium features without paying, driving heavy
              ongoing losses.
            </p>
            <p>
              We didn’t patch it. We engineered a custom AI workflow that mapped
              user-behavior patterns and closed the loophole in real time: an
              engine that ingests data from banks, payment gateways, and
              accounting software at once, reconciling transactions even across
              mismatched fees and currency fluctuations.
            </p>
          </div>
        </Reveal>

        {/* result */}
        <Reveal delay={0.1} className="flex flex-col justify-center rounded-[2rem] bg-gradient-to-br from-azure/25 to-navy/50 p-8 ring-1 ring-inset ring-white/10 sm:p-10">
          <span className="font-display text-2xl font-bold text-white">
            The result
          </span>
          <p className="mt-3 leading-relaxed text-white/70">
            Not a plugged hole — a fully armored, trustworthy transaction system.
          </p>
          <ul className="mt-7 space-y-4">
            {results.map((r) => (
              <li key={r} className="flex gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-yellow text-navy">
                  <IconCheck className="w-4" />
                </span>
                <span className="leading-snug text-white/90">{r}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Reveal
        delay={0.05}
        className="mt-10 flex flex-col items-start justify-between gap-7 rounded-[2rem] glass-dark p-8 sm:flex-row sm:items-center sm:p-10"
      >
        <p className="max-w-2xl text-lg leading-relaxed text-white/75">
          One example of many. Our knowledge hub goes deep on case studies
          across industries — plus strategic insights and guides for AI adoption
          at enterprise scale.
        </p>
        <ButtonLink href="#contact" variant="yellow" size="lg" className="shrink-0">
          Explore Case Studies &amp; Insights
          <IconArrowRight className="w-5 transition-transform duration-200 group-hover/btn:translate-x-1" />
        </ButtonLink>
      </Reveal>
    </Section>
  );
}
