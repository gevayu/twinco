"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { TwincoLogo } from "@/components/brand/TwincoLogo";

const navLinks = [
  { label: "Methodology", href: "#methodology" },
  { label: "The Edge", href: "#edge" },
  { label: "Use Cases", href: "#inspiration" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Client Perspectives", href: "#perspectives" },
];

export function SiteNav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "py-4 bg-[#021879]/80 backdrop-blur-xl shadow-lg border-b border-white/10"
          : "py-5 bg-transparent md:py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center gap-3">
        <a href="#top" aria-label="Twinco home" className="shrink-0">
          <TwincoLogo className="h-6 text-[#FFDE8A] md:h-7" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-white/80 transition-colors hover:text-[#FFDE8A]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="group flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-[#0f63d6] px-4 py-2 text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-[#FFDE8A] hover:text-[#021879] md:gap-3 md:px-6 md:py-2.5 md:text-base"
        >
          <span>Book a session</span>
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
        </a>
      </div>
    </nav>
  );
}
