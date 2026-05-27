import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { TwincoMark } from "@/components/brand/TwincoMark";
import {
  IconShieldDollar,
  IconWorkflow,
  IconSupply,
  IconLockShield,
  type IconProps,
} from "@/components/ui/icons";

const supporting: {
  n: string;
  title: string;
  body: string;
  Icon: (p: IconProps) => React.JSX.Element;
  span?: string;
}[] = [
  {
    n: "02",
    title: "Finance & Revenue Protection",
    body: "Monitor your financial data streams in real time to detect cross-platform anomalies, close process gaps, and block hidden revenue leakage.",
    Icon: IconShieldDollar,
  },
  {
    n: "03",
    title: "Administration & Workflow Automation",
    body: "Streamline repetitive admin, corporate knowledge management, and cross-departmental workflows to eliminate operational friction.",
    Icon: IconWorkflow,
  },
  {
    n: "04",
    title: "Supply Chain & Logistics",
    body: "Integrate predictive AI to synchronize inventory control, vendor tracking, and resource allocation with live market demand.",
    Icon: IconSupply,
  },
  {
    n: "05",
    title: "AI-IT Governance & Security",
    body: "Secure your AI ecosystem with data-privacy guardrails, regulatory compliance, and non-human identity (NHI) permission management.",
    Icon: IconLockShield,
    span: "lg:col-span-2",
  },
];

export function Solutions() {
  return (
    <Section id="solutions" className="relative overflow-hidden bg-night-deep">
      <SectionHeading
        tone="light"
        eyebrow="Tailored Solutions"
        title="Enterprise solutions, built for scale"
        lead="We don’t push generic software. We engineer custom AI frameworks aimed at the specific inefficiencies inside your business."
      />

      <div className="mt-14 grid gap-5 lg:grid-cols-3 lg:auto-rows-fr">
        {/* flagship */}
        <Reveal className="lg:col-span-2 lg:row-span-2">
          <article className="relative flex h-full min-h-[360px] flex-col justify-between overflow-hidden rounded-[2rem] bg-gradient-to-br from-azure/25 via-navy/40 to-night ring-1 ring-inset ring-white/10 lg:min-h-[440px]">
            <Image
              src="/brand/wave-dark.png"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="wave-on-dark scale-110 object-cover opacity-80"
            />
            <div className="relative p-8 sm:p-10">
              <span className="label-mono inline-flex items-center gap-2 text-yellow">
                <TwincoMark className="w-4" /> 01 · Our Digital Twin
              </span>
            </div>
            <div className="relative p-8 sm:p-10">
              <h3 className="font-display text-3xl font-bold text-white sm:text-4xl">
                Operational Excellence
              </h3>
              <p className="mt-4 max-w-lg text-lg leading-relaxed text-white/80">
                Deploy a comprehensive digital replica of your high-performing
                workflows — to automate multi-step execution, cut human error,
                and scale team capability.
              </p>
            </div>
          </article>
        </Reveal>

        {/* supporting */}
        {supporting.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.07} className={s.span}>
            <article className="group flex h-full flex-col rounded-[2rem] glass-dark p-7 transition-colors duration-300 hover:bg-white/[0.1]">
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-azure/15 text-azure transition-colors group-hover:bg-azure group-hover:text-white">
                  <s.Icon className="w-6" />
                </span>
                <span className="label-mono text-white/30">{s.n}</span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-white/60">
                {s.body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
