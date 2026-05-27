import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import {
  IconTarget,
  IconHub,
  IconUnlock,
  type IconProps,
} from "@/components/ui/icons";

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

      <div className="mt-16 grid gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-0 lg:divide-x lg:divide-navy/10">
        {pillars.map((p, i) => (
          <Reveal key={p.n} delay={i * 0.1} className="lg:px-9 lg:first:pl-0">
            <span className="font-display block text-6xl font-bold text-navy/10">
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
    </Section>
  );
}
