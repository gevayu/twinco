"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { BrandVideo } from "@/components/ui/BrandVideo";
import { Underline } from "@/components/brand/Underline";
import { SectionFrame } from "@/components/home-v2/SectionFrame";

type EdgeItem = {
  title: string;
  desc: string;
  proof: string;
  video: string;
};

const items: EdgeItem[] = [
  {
    title: "A Solution for Your Problem",
    desc: "We never push a specific platform. We start with your business logic and integrate the exact technology needed.",
    proof: "Starts with your logic, not our license.",
    video: "/0_Technology_Circuitry_1280x720.mp4",
  },
  {
    title: "The Expert Hub Model",
    desc: "We don't deploy generalists. Once we isolate your bottleneck, we hand it to a leading AI specialist.",
    proof: "A specialist per bottleneck, not a generalist team.",
    video: "/0_Business_Professionals_1280x720.mp4",
  },
  {
    title: "Vendor-Agnostic Freedom",
    desc: "We assemble and orchestrate the best models and infrastructure, protecting your organization from lock-in.",
    proof: "Any model in, swapped out in days. No lock-in.",
    video: "/6762666_Meeting_Conference_1280x720.mp4",
  },
];

function EdgeRow({ item, index }: { item: EdgeItem; index: number }) {
  const flip = index % 2 === 1;
  return (
    <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-14">
      <div
        className={`group relative h-64 overflow-hidden rounded-[2rem] shadow-xl md:h-80 ${flip ? "md:order-2" : ""}`}
      >
        <BrandVideo src={item.video} className="h-full w-full" />
      </div>
      <div className={flip ? "md:order-1" : ""}>
        <h3 className="text-3xl font-bold tracking-tight text-[#021879] md:text-4xl">
          {item.title}
        </h3>
        <p className="mt-4 max-w-md text-lg leading-relaxed text-gray-600">{item.desc}</p>
        <p className="relative mt-6 inline-block text-xl font-bold text-[#021879]">
          {item.proof}
          {index === 0 ? (
            <Underline className="absolute -bottom-3 left-0 h-3 w-full text-[#FFDE8A]" />
          ) : null}
        </p>
      </div>
    </div>
  );
}

const arrowBtn =
  "flex h-12 w-12 items-center justify-center rounded-full border border-[#021879]/15 bg-white text-[#021879] shadow-sm transition-all hover:bg-[#147BFE] hover:text-white hover:shadow-lg";

function EdgeNav({
  active,
  go,
  setActive,
}: {
  active: number;
  go: (delta: number) => void;
  setActive: (i: number) => void;
}) {
  return (
    <div className="mt-12 flex items-center justify-center gap-6">
      <button onClick={() => go(-1)} aria-label="Previous edge" className={arrowBtn}>
        <ChevronLeft className="h-6 w-6" />
      </button>
      <div className="flex gap-2">
        {items.map((item, i) => (
          <button
            key={item.title}
            onClick={() => setActive(i)}
            aria-label={`Show ${item.title}`}
            aria-current={i === active}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === active ? "w-8 bg-[#147BFE]" : "w-2.5 bg-[#021879]/20 hover:bg-[#021879]/40"
            }`}
          />
        ))}
      </div>
      <button onClick={() => go(1)} aria-label="Next edge" className={arrowBtn}>
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
}

// Track is [clone of last, ...items, clone of first] so the slide always moves
// in one direction and wraps seamlessly: when it lands on a clone, we snap back
// to the matching real slide with animation off, then re-enable it.
const slides = [items[items.length - 1], ...items, items[0]];

function EdgeTrack({ pos, animate }: { pos: number; animate: boolean }) {
  const n = items.length;
  return (
    <div className="overflow-hidden">
      <div
        className={`flex ${animate ? "transition-transform duration-[2400ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none" : ""}`}
        style={{ transform: `translateX(-${pos * 100}%)` }}
      >
        {slides.map((item, i) => (
          <div key={i} aria-hidden={i !== pos} className="w-full shrink-0 px-1">
            <EdgeRow item={item} index={(i - 1 + n) % n} />
          </div>
        ))}
      </div>
    </div>
  );
}

function EdgeCarousel() {
  const n = items.length;
  const [pos, setPos] = useState(1); // 1..n are the real slides
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);
  const real = (pos - 1 + n) % n;

  const go = (delta: number) => {
    setAnimate(true);
    setPos((p) => p + delta);
  };

  // Slow auto-advance; resets on every move, paused while the user hovers or
  // keyboard-focuses the carousel so it never advances mid-read.
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => go(1), 8000);
    return () => clearTimeout(t);
  }, [pos, paused]);

  useEffect(() => {
    if (animate) return;
    const t = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(t);
  }, [animate]);

  // After landing on a clone, jump back to the matching real slide with the
  // transition off. Driven by a timer (matched to the slide duration), NOT by
  // `onTransitionEnd`: that event never fires under prefers-reduced-motion
  // (transition-none) or when the tab is backgrounded, which would let `pos`
  // run away past the last clone and slide every slide off-screen (blank).
  useEffect(() => {
    if (pos !== 0 && pos !== n + 1) return;
    const t = setTimeout(
      () => {
        setAnimate(false);
        setPos(pos === 0 ? n : 1);
      },
      animate ? 2450 : 0,
    );
    return () => clearTimeout(t);
  }, [pos, animate, n]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <EdgeTrack pos={pos} animate={animate} />
      <EdgeNav active={real} go={go} setActive={(i) => go(i + 1 - pos)} />
    </div>
  );
}

export function Edge() {
  return (
    <SectionFrame
      id="edge"
      outerStyle={{
        background: "linear-gradient(0deg, #96C4FF 0%, #F4F9FF 100%)",
      }}
      cardClassName="bg-sunrise-gradient"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-16 max-w-3xl">
          <h2 className="text-4xl font-bold tracking-tight text-[#021879] md:text-6xl">
            The <span className="text-[#B8860B]">TWINCO</span> Edge
          </h2>
          <p className="mt-5 text-2xl font-medium text-gray-700">
            Engineered for measurable impact.
          </p>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-gray-600">
            Our foundational pillars ensure your AI ecosystem delivers verifiable
            business value from day one.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <EdgeCarousel />
        </Reveal>
      </div>
    </SectionFrame>
  );
}
