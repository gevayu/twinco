"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { TwincoLogo } from "@/components/brand/TwincoLogo";
import { ButtonLink } from "@/components/ui/Button";

const navItems = [
  { label: "Methodology", href: "#methodology" },
  { label: "Solutions", href: "#solutions" },
  { label: "The Edge", href: "#edge" },
  { label: "Use Cases", href: "#inspiration" },
  { label: "Case Studies", href: "#case-studies" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 lg:px-10 ${
          scrolled
            ? "my-3 h-14 rounded-full glass-light shadow-[0_10px_40px_-20px_rgba(2,27,121,0.35)] lg:h-16"
            : "h-20 lg:h-24"
        }`}
      >
        <Link href="#top" aria-label="Twinco home" className="shrink-0">
          <TwincoLogo className="h-5 text-navy lg:h-[22px]" />
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-graphite/80 transition-colors hover:text-azure"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="#contact" variant="primary">
            Schedule a Session
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-xl text-navy lg:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open ? (
        <div className="mx-4 mt-2 rounded-3xl glass-light p-4 shadow-[0_20px_50px_-20px_rgba(2,27,121,0.4)] lg:hidden">
          <nav className="flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-navy/5 px-2 py-3 text-base font-medium text-graphite last:border-0"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <ButtonLink
            href="#contact"
            variant="primary"
            className="mt-3 w-full"
            onClick={() => setOpen(false)}
          >
            Schedule a Session
          </ButtonLink>
        </div>
      ) : null}
    </header>
  );
}
