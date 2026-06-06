"use client";

import { useEffect, useRef } from "react";

/**
 * A soft azure "bulb" that trails the cursor at 5% opacity. Fixed, behind
 * nothing it can block (pointer-events-none), updated via rAF on the element's
 * transform so it never triggers React re-renders.
 */
export function MouseBulb() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const half = 300; // half of the 600px bulb

    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate3d(${e.clientX - half}px, ${
          e.clientY - half
        }px, 0)`;
      });
    };

    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-0 h-[600px] w-[600px] rounded-full opacity-5 blur-3xl will-change-transform"
      style={{
        transform: "translate3d(-1000px, -1000px, 0)",
        background:
          "radial-gradient(circle, #147BFE 0%, #147BFE 35%, transparent 70%)",
      }}
    />
  );
}
