import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import {
  IconTarget,
  IconHub,
  IconUnlock,
  type IconProps,
} from "@/components/ui/icons";

const MARK_PATH =
  "M84.6899 90.075C82.3579 90.075 80.0009 89.6474 77.7317 88.7545C69.6952 85.5977 64.4922 77.5988 64.4922 68.38V39.793L20.4234 83.5225H5.15285L0 62.8337L60.0164 5.37029C65.9089 0.591108 73.7573 -0.364728 80.5024 2.88009C87.7616 6.35128 92.438 14.1363 92.438 22.6885V49.5652L129.824 9.00499C135.253 3.11905 143.202 1.06903 150.561 3.67242C158.347 6.41417 163.763 13.8722 164.377 22.6634L166.045 46.8863L202.529 0H217.887L224.13 16.048L175.473 80.9946C170.42 87.7357 162.108 90.6032 154.297 88.2765C145.973 85.8115 140.193 78.2277 139.553 68.9837L137.685 41.8053L99.1079 83.6608C95.2589 87.8363 90.0308 90.0876 84.7024 90.0876";

const MARK_W = 224.13;
const MARK_H = 90.0876;
const CHAIN_COPIES = 6;

function MarkChain() {
  const totalW = MARK_W * CHAIN_COPIES;
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 -translate-y-1"
    >
      <svg
        viewBox={`0 0 ${totalW} ${MARK_H}`}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        className="block w-full opacity-[0.18]"
      >
        <defs>
          <clipPath id="edge-mark-chain-clip">
            {Array.from({ length: CHAIN_COPIES }).map((_, i) => (
              <path
                key={i}
                d={MARK_PATH}
                transform={`translate(${i * MARK_W} 0)`}
              />
            ))}
          </clipPath>
        </defs>
        <g clipPath="url(#edge-mark-chain-clip)">
          <image
            href="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2400&q=80"
            x="0"
            y="0"
            width={totalW}
            height={MARK_H}
            preserveAspectRatio="xMidYMid slice"
          />
          <rect
            x="0"
            y="0"
            width={totalW}
            height={MARK_H}
            fill="#021B79"
            opacity="0.42"
          />
        </g>
      </svg>
    </div>
  );
}

const pillars: {
  n: string;
  title: string;
  body: string;
  Icon: (p: IconProps) => React.JSX.Element;
}[] = [
  {
    n: "01",
    title: "Your problem first — not our platform",
    body: "We never push a specific platform. We start with your business logic and integrate the exact technology needed to address the inefficiency.",
    Icon: IconTarget,
  },
  {
    n: "02",
    title: "The Expert Hub model",
    body: "We don’t deploy generalists. Once we isolate your bottleneck, we hand it to a leading specialist in that domain — real-time data sync, complex automation, whatever it takes.",
    Icon: IconHub,
  },
  {
    n: "03",
    title: "Vendor-agnostic freedom",
    body: "We assemble and orchestrate the best available models and infrastructure, protecting your organization from vendor lock-in.",
    Icon: IconUnlock,
  },
];

export function Edge() {
  return (
    <Section id="edge" className="bg-white">
      <SectionHeading
        eyebrow="The Twin-Co Edge"
        title="Engineered for measurable impact"
        lead="Three pillars that make sure your AI ecosystem delivers verifiable business value from day one."
      />

      <div className="relative mt-16">
        <MarkChain />
        <div className="relative z-10 grid gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-0 lg:divide-x lg:divide-navy/10">
          {pillars.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.1} className="lg:px-9 lg:first:pl-0">
              <span className="font-display text-gradient block text-7xl font-bold leading-none tracking-tight sm:text-8xl">
                {p.n}
              </span>
              <span className="mt-5 grid h-14 w-14 place-items-center rounded-2xl bg-yellow text-navy">
                <p.Icon className="w-7" />
              </span>
              <h3 className="mt-6 text-xl font-bold leading-snug text-navy">
                {p.title}
              </h3>
              <p className="mt-3 max-w-sm leading-relaxed text-muted">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
