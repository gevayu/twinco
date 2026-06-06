"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

/**
 * Gentle momentum smoothing for the v3 page. Lenis scrolls the real document
 * (not a transform), so it stays compatible with the sticky card stack and
 * native scroll events. A modest lerp keeps it soft, not floaty.
 */
export function SmoothScroll() {
  useEffect(() => {
    // Let Lenis own scrolling: disable the global native smooth-scroll while
    // it's active so the two don't fight (restored on leaving the page).
    const html = document.documentElement;
    const prevBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";

    const lenis = new Lenis({
      lerp: 0.12,
      smoothWheel: true,
      wheelMultiplier: 1,
      anchors: true,
    });

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      html.style.scrollBehavior = prevBehavior;
    };
  }, []);

  return null;
}
