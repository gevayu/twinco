"use client";

import { useState } from "react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { IconQuote } from "@/components/ui/icons";

/**
 * PLACEHOLDER testimonials — swap the `testimonials` array for real client
 * quotes when available (PRD §8). The slider UI is final.
 */
const testimonials = [
  {
    quote:
      "Twin-Co didn’t sell us a tool. They re-architected how our finance team works, and we saw measurable ROI inside the first quarter.",
    name: "Placeholder Name",
    role: "VP Operations",
    company: "Enterprise Client",
  },
  {
    quote:
      "They isolated the exact bottleneck we’d chased for two years and handed it to a specialist who closed it in weeks. Vendor-agnostic and refreshingly honest.",
    name: "Placeholder Name",
    role: "Chief Information Officer",
    company: "Global Manufacturer",
  },
  {
    quote:
      "The digital twin runs our reconciliation autonomously now. Our analysts finally spend their time on strategy instead of spreadsheets.",
    name: "Placeholder Name",
    role: "Head of Finance",
    company: "Fintech Scale-up",
  },
];

export function SocialProof() {
  const [index, setIndex] = useState(0);
  const count = testimonials.length;
  const go = (dir: number) => setIndex((i) => (i + dir + count) % count);
  const t = testimonials[index];
  const initials = t.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <Section className="bg-white">
      <SectionHeading
        eyebrow="Social Proof"
        title="Engineered success: client perspectives"
      />

      <div className="mt-12 grid items-center gap-8 lg:grid-cols-[auto_1fr]">
        <IconQuote className="hidden w-20 shrink-0 text-yellow lg:block" />
        <div>
          <blockquote className="font-display text-balance text-2xl font-medium leading-[1.3] text-navy sm:text-3xl lg:text-[2.4rem]">
            “{t.quote}”
          </blockquote>

          <div className="mt-9 flex flex-wrap items-center justify-between gap-6">
            <figcaption className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-azure/15 font-bold text-azure">
                {initials}
              </span>
              <span>
                <span className="block font-bold text-navy">{t.name}</span>
                <span className="label-mono mt-0.5 block text-muted">
                  {t.role} · {t.company}
                </span>
              </span>
            </figcaption>

            <div className="flex items-center gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    i === index ? "w-8 bg-azure" : "w-2.5 bg-navy/15 hover:bg-navy/30"
                  }`}
                />
              ))}
              <div className="ml-3 flex gap-2">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Previous"
                  className="grid h-11 w-11 place-items-center rounded-full ring-1 ring-inset ring-navy/15 text-navy transition-colors hover:bg-navy hover:text-white"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Next"
                  className="grid h-11 w-11 place-items-center rounded-full ring-1 ring-inset ring-navy/15 text-navy transition-colors hover:bg-navy hover:text-white"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
