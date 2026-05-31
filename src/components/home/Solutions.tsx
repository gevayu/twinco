"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { BrandImage } from "@/components/ui/BrandImage";
import { Underline } from "@/components/brand/Underline";

type Solution = {
  img: string;
  title: string;
  desc: string;
};

const solutions: Solution[] = [
  {
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=900",
    title: "Operational Excellence — our digital twin",
    desc: "Deploy a comprehensive digital replica of your high-performing operational workflows to automate multi-step execution, reduce human error, and scale team capability.",
  },
  {
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=900",
    title: "Finance & Revenue Protection, Transaction Control",
    desc: "Audit and monitor your financial data streams in real time to detect cross-platform anomalies, close process gaps, and block hidden revenue leakage.",
  },
  {
    img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=900",
    title: "Administration & Workflows Automation",
    desc: "Streamline repetitive administrative tasks, corporate knowledge management, and cross-departmental workflows to eliminate operational friction.",
  },
  {
    img: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=900",
    title: "Supply Chain & Logistics Optimization",
    desc: "Integrate predictive AI infrastructure to synchronize inventory control, vendor tracking, and resource allocation with live market demand.",
  },
  {
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=900",
    title: "AI-IT Governance & Security",
    desc: "Secure your AI ecosystem with dedicated data privacy guardrails, rigorous regulatory compliance, and non-human identity (NHI) permission management.",
  },
];

const n = solutions.length;

const arrowBtn =
  "flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all hover:border-azure hover:bg-azure hover:text-white";

function SolutionCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-advance; resets on every change, paused while the user hovers or
  // keyboard-focuses the carousel so it never advances mid-read.
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setActive((i) => (i + 1) % n), 5000);
    return () => clearTimeout(t);
  }, [active, paused]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* Crossfaded cards — all stacked, only the active one is opaque. The
          grid keeps the container sized to the tallest slide so nothing jumps. */}
      <div className="grid">
        {solutions.map((item, i) => {
          const on = i === active;
          return (
            <div
              key={item.title}
              aria-hidden={!on}
              className={`group col-start-1 row-start-1 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                on
                  ? "opacity-100 blur-0 translate-y-0"
                  : "pointer-events-none translate-y-3 opacity-0 blur-sm"
              }`}
            >
              {/* Top strip — ambient atmosphere image */}
              <div className="relative h-48 md:h-56">
                <BrandImage src={item.img} className="h-full w-full" />
              </div>
              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-bold text-white md:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/65">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation — dots on the left, arrows on the right */}
      <div className="mt-10 flex items-center justify-between">
        <div className="flex gap-2.5">
          {solutions.map((item, i) => (
            <button
              key={item.title}
              onClick={() => setActive(i)}
              aria-label={`Show ${item.title}`}
              aria-current={i === active}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === active
                  ? "w-9 bg-azure"
                  : "w-2.5 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => setActive((i) => (i - 1 + n) % n)}
            aria-label="Previous solution"
            className={arrowBtn}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => setActive((i) => (i + 1) % n)}
            aria-label="Next solution"
            className={arrowBtn}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function Solutions() {
  return (
    <section
      id="solutions"
      className="bg-night-deep bg-dots-light px-6 py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <Reveal className="lg:sticky lg:top-28">
            <p className="label-mono text-azure-300">Tailored Solutions</p>
            <h2 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Enterprise Solutions Built for{" "}
              <span className="relative inline-block">
                Scale
                <Underline className="absolute -bottom-2 left-0 h-3 w-full text-yellow" />
              </span>
            </h2>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-white/70">
              We don&apos;t push generic software. We engineer custom AI frameworks
              designed to improve specific operational inefficiencies across your
              business.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            <SolutionCarousel />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
