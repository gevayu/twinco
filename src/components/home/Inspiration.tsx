"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
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
  accent: string;
  role: string;
  image: string;
  Icon: (p: IconProps) => React.JSX.Element;
  challenge: string;
  solution: string;
  impact: string;
};

const twins: Twin[] = [
  {
    key: "analyst",
    name: "The Financial Analyst",
    accent: "Analyst",
    role: "Finance",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
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
    name: "The Customer Service",
    accent: "Twin",
    role: "Support",
    image:
      "https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&w=1200&q=80",
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
    name: "The CISO",
    accent: "Copilot",
    role: "Security",
    image:
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1200&q=80",
    Icon: IconShieldCheck,
    challenge:
      "Security leaders drown in endless regulatory updates (ISO, NIST, DORA) and compliance logs instead of focusing on strategy.",
    solution:
      "Automatically processes regulatory documents, runs instant gap analysis against your systems, and generates actionable work plans.",
    impact:
      "Turns compliance from a manual burden into a continuous, automated safeguard — saving dozens of management hours monthly.",
  },
];

const ROTATE_MS = 5000;
const PAUSE_AFTER_CLICK_MS = 12000;

export function Inspiration() {
  const [active, setActive] = useState(0);
  const pausedUntil = useRef(0);
  const twin = twins[active];

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      if (Date.now() < pausedUntil.current) return;
      setActive((a) => (a + 1) % twins.length);
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, []);

  const select = (i: number) => {
    pausedUntil.current = Date.now() + PAUSE_AFTER_CLICK_MS;
    setActive(i);
  };

  return (
    <Section id="inspiration" className="bg-sky">
      <SectionHeading
        eyebrow="Get Inspired"
        title="Real-world use cases, mapped to outcomes"
        lead="A few operational scenarios that show how Twin-Co transforms core functions across sectors. Get inspired by what we can build for you."
      />

      {/* photo row */}
      <div className="mt-14 grid gap-5 sm:grid-cols-3">
        {twins.map((t, i) => {
          const on = i === active;
          return (
            <Reveal key={t.key} delay={i * 0.07}>
              <button
                type="button"
                onClick={() => select(i)}
                aria-pressed={on}
                className={`group relative block w-full overflow-hidden rounded-[2rem] text-left transition-all duration-[700ms] ease-out ${
                  on
                    ? "scale-[1.03] ring-4 ring-yellow shadow-[0_35px_80px_-25px_rgba(255,222,138,0.55),0_25px_60px_-30px_rgba(2,27,121,0.6)]"
                    : "scale-100 opacity-60 saturate-50 ring-1 ring-inset ring-navy/10 hover:opacity-90 hover:saturate-100 hover:ring-navy/30"
                }`}
              >
                <div className="relative aspect-[8/7] w-full sm:aspect-[15/14]">
                  <Image
                    src={t.image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className={`object-cover transition-transform duration-[1200ms] ease-out ${
                      on ? "scale-105" : "group-hover:scale-105"
                    }`}
                  />
                  {/* tint — dissolves between active/inactive */}
                  <div
                    className={`absolute inset-0 transition-colors duration-[700ms] ease-out ${
                      on
                        ? "bg-navy/25"
                        : "bg-navy/60 group-hover:bg-navy/45"
                    }`}
                  />
                  {/* bottom fade for legibility */}
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-night via-night/70 to-transparent" />

                  {/* top: role chip */}
                  <div className="absolute inset-x-0 top-0 flex items-center justify-between p-6">
                    <span className="label-mono inline-flex items-center gap-2 text-white/90">
                      <span
                        className={`grid h-9 w-9 place-items-center rounded-lg transition-colors duration-[700ms] ${
                          on ? "bg-yellow text-navy" : "bg-white/15 text-white"
                        }`}
                      >
                        <t.Icon className="w-5" />
                      </span>
                      {t.role}
                    </span>
                    <span
                      className={`label-mono transition-colors duration-[700ms] ${
                        on ? "text-yellow" : "text-white/40"
                      }`}
                    >
                      0{i + 1}
                    </span>
                  </div>

                  {/* bottom: name with yellow accent */}
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                    <h3 className="font-display text-2xl font-bold leading-tight text-white sm:text-[1.65rem]">
                      {t.name}
                      <span
                        className={`block font-display text-5xl leading-none tracking-tight transition-colors duration-[700ms] sm:text-6xl ${
                          on ? "text-yellow" : "text-white/85"
                        }`}
                      >
                        {t.accent}
                      </span>
                    </h3>
                  </div>
                </div>
              </button>
            </Reveal>
          );
        })}
      </div>

      {/* expansion */}
      <Reveal
        key={twin.key}
        className="mt-6 rounded-[2rem] bg-white p-8 ring-1 ring-inset ring-navy/5 sm:p-10"
      >
        <div className="flex items-center gap-4">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-azure/10 text-azure">
            <twin.Icon className="w-7" />
          </span>
          <div>
            <span className="label-mono block text-muted">{twin.role}</span>
            <h3 className="font-display text-2xl font-bold text-navy sm:text-3xl">
              {twin.name} {twin.accent}
            </h3>
          </div>
        </div>

        <dl className="mt-8 grid gap-6 lg:grid-cols-2">
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

      <div className="mt-12 flex justify-center">
        <ButtonLink href="#contact" variant="primary" size="lg">
          Explore More Scenarios
          <IconArrowRight className="w-5 transition-transform duration-200 group-hover/btn:translate-x-1" />
        </ButtonLink>
      </div>
    </Section>
  );
}
