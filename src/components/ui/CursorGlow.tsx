"use client";

import { useEffect, useRef } from "react";

/**
 * Soft "bulb" that lags slowly behind the cursor. Decorative only:
 * pointer-events-none, very low opacity, heavily blurred, and disabled for
 * users who prefer reduced motion or have no fine pointer (touch).
 */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let raf = 0;
    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let x = tx;
    let y = ty;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const tick = () => {
      // Very low lerp factor = slow, heavily trailing follow.
      x += (tx - x) * 0.02;
      y += (ty - y) * 0.02;
      el.style.transform = `translate3d(${x - 300}px, ${y - 300}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[60] h-[600px] w-[600px] rounded-full opacity-20 blur-[120px] mix-blend-multiply"
      style={{
        background:
          "radial-gradient(circle, #021B79 0%, #05081A 45%, transparent 70%)",
        willChange: "transform",
      }}
    />
  );
}
