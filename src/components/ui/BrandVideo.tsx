"use client";

import { useEffect, useRef } from "react";

/**
 * Brand video — same duotone/gradient treatment as BrandImage, but the fill is
 * a looping muted background video. Respects prefers-reduced-motion: the video
 * is paused on its poster frame instead of autoplaying. Render inside a sized,
 * `relative` parent (or pass a sizing className); the video fills it.
 */
/** Pause the video on its poster when the user prefers reduced motion. */
function useReducedMotionPause(ref: React.RefObject<HTMLVideoElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      if (mq.matches) {
        el.pause();
      } else {
        // Autoplay can be blocked by the browser; ignore the rejection.
        el.play().catch(() => undefined);
      }
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, [ref]);
}

export function BrandVideo({
  src,
  poster,
  className = "",
}: {
  src: string;
  poster?: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  useReducedMotionPause(ref);

  return (
    <div className={`relative overflow-hidden bg-[#021879] ${className}`}>
      <video
        ref={ref}
        className="absolute inset-0 h-full w-full object-cover grayscale-[0.3] contrast-105 transition-transform duration-[1500ms] ease-out group-hover:scale-110"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={poster}
        aria-hidden="true"
      >
        <source src={src} type="video/mp4" />
      </video>
      {/* Original navy duotone tint, restored at ~30% strength */}
      <div className="absolute inset-0 bg-[#021879] mix-blend-multiply opacity-25 transition-opacity duration-700 group-hover:opacity-15" />
      {/* Azure highlight lift, ~30% */}
      <div className="absolute inset-0 bg-[#147BFE] mix-blend-screen opacity-15 transition-opacity duration-700 group-hover:opacity-25" />
      {/* Light azure gradient sheen */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#147BFE]/50 via-transparent to-transparent" />
    </div>
  );
}
