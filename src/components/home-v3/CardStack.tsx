"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Deck-of-cards stack. Children are full-viewport `sticky top-0` sections, each
 * holding one `[data-stack-card]` rectangle. As the next card sticks over the
 * previous, the buried ones get a slight tilt, blur, scale-down and softened
 * shadow — so the pile reads like a hand of cards. A single constant backdrop
 * sits behind the whole region (it never changes while scrolling the stack).
 */
export function CardStack({
  children,
  backdrop = "linear-gradient(180deg, #96C4FF 0%, #F4F9FF 100%)",
}: {
  children: ReactNode;
  backdrop?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const cards = Array.from(
      root.querySelectorAll<HTMLElement>("[data-stack-card]"),
    );
    const sections = cards.map((c) => c.closest("section"));
    let raf = 0;

    // The deck-stack effect is desktop-only. On mobile the sections flow one
    // after another in normal scroll, so we leave every card untouched.
    const desktop = window.matchMedia("(min-width: 768px)");

    const clearCards = () => {
      for (const card of cards) {
        card.style.zIndex = "";
        card.style.transform = "";
        card.style.filter = "";
        card.style.boxShadow = "";
      }
    };

    const update = () => {
      raf = 0;
      if (!desktop.matches) {
        clearCards();
        return;
      }
      const tops = sections.map((s) =>
        s ? s.getBoundingClientRect().top : Infinity,
      );

      for (let i = 0; i < cards.length; i++) {
        // How many later cards have stuck to the top and now bury card i.
        let d = 0;
        for (let j = i + 1; j < cards.length; j++) {
          if (tops[j] <= 1) d++;
        }
        const card = cards[i];
        card.style.zIndex = String(i);

        if (d <= 0) {
          card.style.transform = "";
          card.style.filter = "";
          card.style.boxShadow = "";
        } else {
          const cl = Math.min(d, 4);
          const scale = 1 - cl * 0.03;
          const rot = (i % 2 ? 1 : -1) * Math.min(cl * 3, 12);
          const blur = Math.min(cl * 1.6, 6);
          card.style.transform = `scale(${scale}) rotate(${rot}deg)`;
          card.style.filter = `blur(${blur}px)`;
          card.style.boxShadow = "0 14px 36px rgba(2,27,121,0.12)";
        }
      }
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    desktop.addEventListener("change", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      desktop.removeEventListener("change", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      {/* Desktop: a constant backdrop that sticks for the whole stack; the
          negative margin keeps it out of flow so it adds no extra height. */}
      <div
        aria-hidden="true"
        className="pointer-events-none hidden md:block sticky top-0 -z-10 h-screen -mb-[100vh]"
        style={{ background: backdrop }}
      />
      {/* Mobile: there is no stack, so the backdrop simply fills the whole
          region and scrolls with the content (not fixed) — keeps the area
          around/between cards from showing through as transparent. */}
      <div
        aria-hidden="true"
        className="pointer-events-none md:hidden absolute inset-0 -z-10"
        style={{ background: backdrop }}
      />
      {children}
    </div>
  );
}
