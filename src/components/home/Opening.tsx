import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Underline } from "@/components/brand/Underline";

export function Opening() {
  return (
    <Section className="relative overflow-hidden bg-white bg-dots">
      <div className="pointer-events-none absolute -right-32 top-1/2 -z-0 h-96 w-96 -translate-y-1/2 rounded-full bg-azure/10 blur-[120px]" />

      <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        {/* The stat as the hero visual */}
        <Reveal className="relative">
          <Eyebrow>The 95% Problem</Eyebrow>
          <div className="mt-6 flex items-start">
            <span className="font-display text-gradient text-[7.5rem] font-bold leading-[0.8] sm:text-[10rem]">
              95
            </span>
            <span className="font-display mt-3 text-5xl font-bold text-azure">
              %
            </span>
          </div>
          <p className="mt-4 max-w-xs text-lg leading-snug text-muted">
            of enterprise AI implementations fail. Twinco is built for the
            exception.
          </p>
        </Reveal>

        {/* The counter-stance */}
        <div>
          <Reveal>
            <h2 className="font-display text-3xl font-bold leading-[1.08] text-navy sm:text-4xl lg:text-[2.9rem]">
              We don&apos;t install software. We architect an{" "}
              <span className="relative whitespace-nowrap">
                organizational evolution
                <Underline className="absolute -bottom-2 left-0 h-3 w-full text-yellow" />
              </span>
              .
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-8 text-lg leading-relaxed text-graphite">
              Most companies treat AI as an installation. But tools are just
              infrastructure. By focusing on your core processes and most urgent
              needs, we bridge the gap between technical deployment and real
              business value.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="mt-7 border-l-2 border-azure pl-6 text-xl font-medium leading-relaxed text-navy">
              We don&apos;t force implementation. We drive full adoption by the
              people who power your business.
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
