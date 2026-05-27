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

const MARK_PATH =
  "M84.6899 90.075C82.3579 90.075 80.0009 89.6474 77.7317 88.7545C69.6952 85.5977 64.4922 77.5988 64.4922 68.38V39.793L20.4234 83.5225H5.15285L0 62.8337L60.0164 5.37029C65.9089 0.591108 73.7573 -0.364728 80.5024 2.88009C87.7616 6.35128 92.438 14.1363 92.438 22.6885V49.5652L129.824 9.00499C135.253 3.11905 143.202 1.06903 150.561 3.67242C158.347 6.41417 163.763 13.8722 164.377 22.6634L166.045 46.8863L202.529 0H217.887L224.13 16.048L175.473 80.9946C170.42 87.7357 162.108 90.6032 154.297 88.2765C145.973 85.8115 140.193 78.2277 139.553 68.9837L137.685 41.8053L99.1079 83.6608C95.2589 87.8363 90.0308 90.0876 84.7024 90.0876";

function MarkPhotoBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-1/2 -z-0 -translate-y-1/2 opacity-[0.18]"
    >
      <svg
        viewBox="0 0 224.13 90.0876"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        className="block h-auto w-full"
      >
        <defs>
          <clipPath id="methodology-mark-clip">
            <path d={MARK_PATH} />
          </clipPath>
        </defs>
        <g clipPath="url(#methodology-mark-clip)">
          <image
            href="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2200&q=80"
            x="0"
            y="0"
            width="224.13"
            height="90.0876"
            preserveAspectRatio="xMidYMid slice"
          />
          <rect
            x="0"
            y="0"
            width="224.13"
            height="90.0876"
            fill="#021B79"
            opacity="0.42"
          />
        </g>
      </svg>
    </div>
  );
}

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
    <Section id="methodology" className="relative overflow-hidden bg-sky">
      <MarkPhotoBackground />

      <div className="relative z-10 grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
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
