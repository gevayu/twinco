"use client";

import { useState } from "react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import {
  IconChart,
  IconHeadset,
  IconShieldCheck,
  IconArrowRight,
  type IconProps,
} from "@/components/ui/icons";

type Twin = {
  key: string;
  name: string;
  role: string;
  Icon: (p: IconProps) => React.JSX.Element;
  challenge: string;
  solution: string;
  impact: string;
};

const twins: Twin[] = [
  {
    key: "analyst",
    name: "The Financial Analyst Twin",
    role: "Finance",
    Icon: IconChart,
    challenge:
      "Analysts lose hours every month manually aggregating and cross-referencing data across isolated systems and databases.",
    solution:
      "Autonomously replicates your specific data-collection method and reconciliation logic to generate comprehensive reports without human intervention.",
    impact:
      "Eliminates manual cross-referencing errors and frees critical hours for high-level strategic analysis.",
  },
  {
    key: "service",
    name: "The Customer Service Twin",
    role: "Support",
    Icon: IconHeadset,
    challenge:
      "Representatives burn valuable time repeating identical scripts and workflows for routine inquiries.",
    solution:
      "Operates as a “shadow agent” that learns your exact protocols and actions, autonomously resolving up to 80% of standard tickets in your brand’s voice.",
    impact:
      "Redirects human empathy and judgment to the complex, high-value interactions that actually need it.",
  },
  {
    key: "ciso",
    name: "The CISO Copilot",
    role: "Security",
    Icon: IconShieldCheck,
    challenge:
      "Security leaders drown in endless regulatory updates (ISO, NIST, DORA) and compliance logs instead of focusing on strategy.",
    solution:
      "Automatically processes regulatory documents, runs instant gap analysis against your systems, and generates actionable work plans.",
    impact:
      "Turns compliance from a manual burden into a continuous, automated safeguard — saving dozens of management hours monthly.",
  },
];

export function Inspiration() {
  const [active, setActive] = useState(0);
  const twin = twins[active];

  return (
    <Section id="inspiration" className="bg-sky">
      <SectionHeading
        eyebrow="Get Inspired"
        title="Real-world use cases, mapped to outcomes"
        lead="A few operational scenarios that show how Twin-Co transforms core functions across sectors. Get inspired by what we can build for you."
      />

      <div className="mt-14 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        {/* selector */}
        <div className="flex flex-col gap-3">
          {twins.map((t, i) => {
            const on = i === active;
            return (
              <button
                key={t.key}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={on}
                className={`group flex items-center gap-4 rounded-2xl p-5 text-left transition-all duration-200 ${
                  on
                    ? "bg-navy text-white shadow-[0_20px_50px_-25px_rgba(2,27,121,0.6)]"
                    : "bg-white text-navy ring-1 ring-inset ring-navy/5 hover:ring-navy/15"
                }`}
              >
                <span
                  className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl transition-colors ${
                    on ? "bg-yellow text-navy" : "bg-azure/10 text-azure"
                  }`}
                >
                  <t.Icon className="w-6" />
                </span>
                <span className="min-w-0">
                  <span className="label-mono block text-azure/70 group-aria-pressed:text-yellow">
                    {t.role}
                  </span>
                  <span className="block font-bold leading-snug">{t.name}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* detail */}
        <Reveal key={twin.key} className="rounded-[2rem] bg-white p-8 ring-1 ring-inset ring-navy/5 sm:p-10">
          <div className="flex items-center gap-4">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-azure/10 text-azure">
              <twin.Icon className="w-7" />
            </span>
            <h3 className="font-display text-2xl font-bold text-navy sm:text-3xl">
              {twin.name}
            </h3>
          </div>

          <dl className="mt-8 flex flex-col gap-6">
            <div>
              <dt className="label-mono text-muted">The Challenge</dt>
              <dd className="mt-1.5 text-lg leading-relaxed text-graphite">
                {twin.challenge}
              </dd>
            </div>
            <div>
              <dt className="label-mono text-azure">The Twin-based Solution</dt>
              <dd className="mt-1.5 text-lg leading-relaxed text-graphite">
                {twin.solution}
              </dd>
            </div>
          </dl>

          <div className="mt-8 rounded-2xl bg-night-deep p-6">
            <dt className="label-mono text-yellow">The Impact</dt>
            <dd className="mt-2 text-lg font-medium leading-relaxed text-white">
              {twin.impact}
            </dd>
          </div>
        </Reveal>
      </div>

      <div className="mt-12 flex justify-center">
        <ButtonLink href="#contact" variant="primary" size="lg">
          Explore More Scenarios
          <IconArrowRight className="w-5 transition-transform duration-200 group-hover/btn:translate-x-1" />
        </ButtonLink>
      </div>
    </Section>
  );
}
