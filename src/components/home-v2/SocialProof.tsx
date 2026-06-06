"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionFrame } from "@/components/home-v2/SectionFrame";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Twin-Co didn't just sell us a tool; they completely re-architected our transaction flows. We saw a return on investment within the first 45 days.",
    name: "Maya Adler",
    role: "VP of Operations, global gaming enterprise",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
  },
  {
    quote:
      "The 'Customer Service Twin' handled 75% of our Tier 1 tickets in week two. It mirrors our brand voice and freed up our agents.",
    name: "Daniel Stern",
    role: "Customer Success Director, FinTech company",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200",
  },
  {
    quote:
      "As a security lead, I was buried in compliance. The custom copilot acts as a tireless auditor. It changed how we manage regulatory risk.",
    name: "Lena Brandt",
    role: "Head of Security, healthcare network",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
  },
];

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div className="rise bg-sky-gradient border border-[#E7F3FF] rounded-[2rem] p-10 md:p-16 shadow-sm">
      <p className="text-2xl md:text-4xl text-[#021879] font-medium leading-snug mb-10">
        &quot;{item.quote}&quot;
      </p>
      <div className="flex items-center gap-4">
        <Image
          src={item.avatar}
          alt=""
          width={128}
          height={128}
          className="h-32 w-32 shrink-0 rounded-full border-4 border-white object-cover shadow-md"
        />
        <div>
          <h3 className="font-bold text-lg text-[#021879]">{item.name}</h3>
          <p className="text-[#021879]/80 font-medium text-sm">{item.role}</p>
        </div>
      </div>
    </div>
  );
}

const arrowBtn =
  "w-12 h-12 bg-white border border-[#E7F3FF] rounded-full flex items-center justify-center text-[#021879] hover:bg-[#147BFE] hover:text-white transition-all shadow-md hover:shadow-lg";

function useTestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const go = (delta: number) =>
    setCurrent((p) => (p + delta + testimonials.length) % testimonials.length);

  // Auto-advance every 12s; resets on every change and pauses on hover/focus so
  // it never swaps a quote out from under the reader.
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(
      () => setCurrent((p) => (p + 1) % testimonials.length),
      12000,
    );
    return () => clearTimeout(t);
  }, [current, paused]);

  const pauseHandlers = {
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
    onFocusCapture: () => setPaused(true),
    onBlurCapture: () => setPaused(false),
  };
  return { current, setCurrent, go, pauseHandlers };
}

export function SocialProof() {
  const { current, setCurrent, go, pauseHandlers } = useTestimonialCarousel();

  return (
    <SectionFrame
      id="perspectives"
      outerStyle={{
        background: "linear-gradient(0deg, #FFF7E1 0%, #F4F9FF 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <Reveal
          as="h2"
          className="text-4xl md:text-5xl font-bold text-center text-[#021879] mb-16 tracking-tight"
        >
          Engineered Success: Client Perspectives
        </Reveal>

        <Reveal delay={0.1} className="relative max-w-4xl mx-auto" {...pauseHandlers}>
          <div className="px-4">
            <TestimonialCard key={current} item={testimonials[current]} />
          </div>

          <div className="flex justify-center items-center gap-6 mt-16">
            <button onClick={() => go(-1)} aria-label="Previous testimonial" className={arrowBtn}>
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((t, idx) => (
                <button
                  key={t.name}
                  onClick={() => setCurrent(idx)}
                  aria-label={`Show testimonial ${idx + 1}`}
                  aria-current={current === idx}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    current === idx ? "bg-[#147BFE] w-8" : "bg-[#E7F3FF] w-2.5 hover:bg-[#147BFE]/40"
                  }`}
                />
              ))}
            </div>
            <button onClick={() => go(1)} aria-label="Next testimonial" className={arrowBtn}>
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </Reveal>
      </div>
    </SectionFrame>
  );
}
