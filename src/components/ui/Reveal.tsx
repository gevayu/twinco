"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type HTMLAttributes,
  type ReactNode,
} from "react";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  /** Stagger delay in seconds. */
  delay?: number;
  className?: string;
} & Omit<HTMLAttributes<HTMLElement>, "style" | "className" | "children">;

/**
 * Scroll-triggered entrance animation (fade + blur + translate-y).
 *
 * Progressive enhancement: the markup is visible by default. Only when
 * `html.js` is present (set synchronously in the layout, before paint) does
 * `.reveal` start hidden; the IntersectionObserver then adds `.is-visible`
 * to play the `reveal` keyframe from globals.css. No animation dependency.
 *
 * For staggered lists pass `delay={index * 0.1}` (cap around 2–3).
 */
export function Reveal({
  children,
  as,
  delay = 0,
  className = "",
  ...rest
}: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    // Safety net: never leave content stuck hidden if the observer doesn't
    // fire (headless renders, odd viewports). Reveal anyway after a beat.
    const fallback = window.setTimeout(() => setShown(true), 1400);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          window.clearTimeout(fallback);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(node);
    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? "is-visible" : ""} ${className}`.trim()}
      style={{ "--reveal-delay": `${delay}s` } as CSSProperties}
      {...rest}
    >
      {children}
    </Tag>
  );
}
