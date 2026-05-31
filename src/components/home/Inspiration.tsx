"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { BrandVideo } from "@/components/ui/BrandVideo";
import { Underline } from "@/components/brand/Underline";
import { IconArrowRight } from "@/components/ui/icons";

type Scenario = {
  id: string;
  label: string;
  title: string;
  challenge: string;
  solution: string;
  impact: string;
  video: string;
};

const scenarios: Scenario[] = [
  {
    id: "finance",
    label: "Finance",
    title: "The Financial Analyst Twin",
    challenge:
      "Financial analysts waste hours manually aggregating and cross-referencing data across isolated systems and databases every month.",
    solution:
      "Autonomously replicates your specific data collection method and reconciliation logic to generate comprehensive reports without human intervention.",
    impact:
      "Eliminates manual cross-referencing errors and frees up critical hours for high-level strategic analysis.",
    video: "/0_Business_Meeting_1280x720.mp4",
  },
  {
    id: "support",
    label: "Support",
    title: "The Customer Service Twin",
    challenge:
      "Representatives burn valuable time repeating identical scripts and workflows for routine inquiries.",
    solution:
      "Operates as a \"shadow agent\" that learns your exact service protocols and actual actions, autonomously resolving up to 80% of standard tickets using your brand's voice.",
    impact:
      "Redirects human empathy and judgment to where it matters most, handling complex, high-value customer interactions.",
    video: "/1114854_Woman_Job_1280x720.mp4",
  },
  {
    id: "security",
    label: "Security",
    title: "The CISO Copilot",
    challenge:
      "Security leaders are drowning in endless regulatory updates (ISO, NIST, DORA) and complex compliance logs, instead of focusing on security strategy.",
    solution:
      "Automatically processes regulatory documents, conducts instant gap analysis against your systems, and generates simple, actionable work plans.",
    impact:
      "Transforms compliance from a manual burden into a continuous, automated safeguard, saving dozens of management hours monthly.",
    video: "/0_Person_Man_1280x720.mp4",
  },
  {
    id: "operations",
    label: "Operations",
    title: "The Operations Twin",
    challenge: "Inventory, logistics, and ERP signals never quite line up in real time.",
    solution: "The Twin watches all three and flags the mismatch the moment it appears.",
    impact: "Stockouts and overstock surface early, while there's still time to act.",
    video: "/0_Business_Meeting_Team_1280x672.mp4",
  },
  {
    id: "revenue",
    label: "Revenue",
    title: "The Revenue Twin",
    challenge: "Pipeline data rots between CRM updates, so the forecast is a guess.",
    solution: "The Twin keeps records clean and rebuilds the forecast as deals move.",
    impact: "Leadership trusts the number, because it reflects today, not last week.",
    video: "/0_Woman_Business_Woman_1280x720.mp4",
  },
  {
    id: "legal",
    label: "Legal",
    title: "The Contracts Copilot",
    challenge: "Every contract waits in a queue for a lawyer to read it line by line.",
    solution: "The copilot redlines against your playbook and surfaces the risky clauses.",
    impact: "Standard deals move in minutes; lawyers keep the genuinely tricky ones.",
    video: "/0_Woman_Person_1280x720.mp4",
  },
];

function ScenarioTab({
  s,
  selected,
  onSelect,
  tabRef,
}: {
  s: Scenario;
  selected: boolean;
  onSelect: () => void;
  tabRef: (el: HTMLButtonElement | null) => void;
}) {
  return (
    <button
      ref={tabRef}
      role="tab"
      id={`tab-${s.id}`}
      aria-selected={selected}
      aria-controls={`panel-${s.id}`}
      tabIndex={selected ? 0 : -1}
      onClick={onSelect}
      className={`shrink-0 rounded-2xl px-5 py-4 text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[#147BFE] ${
        selected
          ? "bg-[#147BFE] text-white shadow-md"
          : "border border-[#E7F3FF] bg-white text-graphite hover:border-[#147BFE]/40 hover:text-[#021879]"
      }`}
    >
      <span
        className={`label-mono block ${selected ? "text-white/80" : "text-[#0f63d6]"}`}
      >
        {s.label}
      </span>
      <span className="mt-1 block whitespace-nowrap font-semibold lg:whitespace-normal">
        {s.title}
      </span>
    </button>
  );
}

const KEY_STEP: Record<string, number> = {
  ArrowDown: 1,
  ArrowRight: 1,
  ArrowUp: -1,
  ArrowLeft: -1,
};

function ScenarioRail({
  active,
  setActive,
}: {
  active: number;
  setActive: (i: number) => void;
}) {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const n = scenarios.length;
  const move = (i: number) => {
    setActive(i);
    refs.current[i]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key in KEY_STEP) move((active + KEY_STEP[e.key] + n) % n);
    else if (e.key === "Home") move(0);
    else if (e.key === "End") move(n - 1);
    else return;
    e.preventDefault();
  };

  return (
    <div
      role="tablist"
      aria-label="Twin scenarios by function"
      aria-orientation="vertical"
      onKeyDown={onKeyDown}
      className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0"
    >
      {scenarios.map((s, i) => (
        <ScenarioTab
          key={s.id}
          s={s}
          selected={i === active}
          onSelect={() => setActive(i)}
          tabRef={(el) => {
            refs.current[i] = el;
          }}
        />
      ))}
    </div>
  );
}

function Step({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="label-mono text-[#0f63d6]">{label}</dt>
      <dd className="mt-1.5 text-lg leading-relaxed text-gray-600">{value}</dd>
    </div>
  );
}

function ScenarioPanel({ s }: { s: Scenario }) {
  return (
    <div
      key={s.id}
      role="tabpanel"
      id={`panel-${s.id}`}
      aria-labelledby={`tab-${s.id}`}
      className="rise grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,0.85fr)_1fr]"
    >
      <div className="group relative h-60 overflow-hidden rounded-[2rem] sm:h-72 lg:h-auto lg:min-h-[440px]">
        <BrandVideo src={s.video} className="h-full w-full" />
      </div>
      <div className="relative flex flex-col">
        {/* Mirrored, near-transparent echo of the left video as a backdrop */}
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-4 -z-10 overflow-hidden rounded-[2rem] opacity-[0.18] [transform:scaleX(-1)] [mask-image:linear-gradient(to_right,black,transparent_95%)]"
        >
          <BrandVideo src={s.video} className="h-full w-full" />
        </div>
        <h3 className="relative inline-block self-start text-3xl font-bold tracking-tight text-[#021879] md:text-4xl">
          {s.title}
          <Underline className="absolute -bottom-3 left-0 h-3 w-full text-[#FFDE8A]" />
        </h3>
        <dl className="mt-9 space-y-6">
          <Step label="The Challenge" value={s.challenge} />
          <Step label="The Twin-based solution" value={s.solution} />
        </dl>
        <div className="mt-auto border-t border-[#E7F3FF] pt-7">
          <span className="label-mono text-[#0f63d6]">The Impact</span>
          <p className="mt-2 text-xl font-bold text-[#021879] md:text-2xl">
            {s.impact}
          </p>
        </div>
      </div>
    </div>
  );
}

function useAutoAdvance(active: number, setActive: (fn: (a: number) => number) => void) {
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(
      () => setActive((a) => (a + 1) % scenarios.length),
      10000,
    );
    return () => clearTimeout(t);
  }, [active, paused, setActive]);
  return {
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
    onFocusCapture: () => setPaused(true),
    onBlurCapture: () => setPaused(false),
  };
}

export function Inspiration() {
  const [active, setActive] = useState(0);
  const pauseHandlers = useAutoAdvance(active, setActive);

  return (
    <section
      id="inspiration"
      className="relative overflow-hidden bg-white px-6 py-24 md:px-12 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-70" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal className="mb-12 max-w-3xl">
          <h2 className="text-5xl font-bold tracking-tight text-[#021879] md:text-6xl">
            Get Inspired
          </h2>
          <p className="mt-5 text-xl leading-relaxed text-gray-600 md:text-2xl">
            Pick a function. See the Twin that runs it.
          </p>
        </Reveal>

        <Reveal
          delay={0.1}
          className="grid grid-cols-1 gap-6 lg:grid-cols-[260px_1fr] lg:gap-12"
          {...pauseHandlers}
        >
          <ScenarioRail active={active} setActive={setActive} />
          <ScenarioPanel s={scenarios[active]} />
        </Reveal>

        <Reveal className="mt-14">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-[#0f63d6] px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#021879]"
          >
            Explore more scenarios
            <IconArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
