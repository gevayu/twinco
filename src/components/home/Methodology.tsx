import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import {
  IconSearch,
  IconBlueprint,
  IconCpu,
  IconFlag,
  IconArrowRight,
  type IconProps,
} from "@/components/ui/icons";

const steps: {
  n: string;
  title: string;
  body: string;
  Icon: (p: IconProps) => React.JSX.Element;
}[] = [
  {
    n: "01",
    title: "Pinpoint the most urgent challenge",
    body: "We audit your existing workflows to isolate the exact, high-impact inefficiencies where AI can deliver immediate value.",
    Icon: IconSearch,
  },
  {
    n: "02",
    title: "Architect the blueprint",
    body: "We build a strategic, vendor-agnostic blueprint tailored to your organization’s unique process-driven data and operational structure.",
    Icon: IconBlueprint,
  },
  {
    n: "03",
    title: "Design the ecosystem",
    body: "We engineer custom AI workflows and identify or develop the precise technical tools and capabilities required to drive the desired outcomes.",
    Icon: IconCpu,
  },
  {
    n: "04",
    title: "Lead the adoption",
    body: "We guide your teams through the transition with comprehensive support, ensuring seamless human-AI collaboration and measurable ROI.",
    Icon: IconFlag,
  },
];

export function Methodology() {
  return (
    <Section id="methodology" className="bg-sky">
      <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
        {/* sticky heading */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow>Our Methodology</Eyebrow>
          <h2 className="font-display mt-5 text-4xl font-bold leading-[1.05] text-navy sm:text-5xl">
            More than AI tools — we engineer the process.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
            Four moves take you from a fuzzy ambition to human-AI collaboration
            that holds up in production.
          </p>
          <ButtonLink href="#contact" variant="primary" className="mt-8">
            Start with step one
            <IconArrowRight className="w-5 transition-transform duration-200 group-hover/btn:translate-x-1" />
          </ButtonLink>
        </div>

        {/* timeline */}
        <ol className="relative">
          <span
            aria-hidden="true"
            className="absolute bottom-6 left-[27px] top-6 w-px bg-gradient-to-b from-azure via-azure/40 to-transparent"
          />
          {steps.map((step, i) => (
            <Reveal as="li" key={step.n} delay={i * 0.08} className="relative">
              <div className="group flex gap-6 pb-12 last:pb-0">
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-azure shadow-[0_8px_24px_-10px_rgba(2,27,121,0.35)] ring-1 ring-inset ring-navy/5 transition-colors duration-300 group-hover:bg-azure group-hover:text-white">
                  <step.Icon className="w-6" />
                </div>
                <div className="pt-1">
                  <div className="flex items-baseline gap-3">
                    <span className="label-mono text-azure">{step.n}</span>
                    <h3 className="text-xl font-bold text-navy">{step.title}</h3>
                  </div>
                  <p className="mt-2 max-w-lg leading-relaxed text-muted">
                    {step.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
