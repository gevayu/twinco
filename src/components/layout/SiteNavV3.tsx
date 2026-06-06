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

/**
 * v3-only header. Identical to SiteNav but with a lighter scrolled backdrop
 * (65% navy) and a gentler 10px blur instead of the default xl.
 */
export function SiteNavV3() {
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
          ? "py-4 bg-[#021879]/65 backdrop-blur-[10px] shadow-lg border-b border-white/10"
          : "py-8 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
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
          className="group flex items-center gap-3 px-6 py-2.5 bg-[#0f63d6] text-white rounded-full font-bold hover:bg-[#FFDE8A] hover:text-[#021879] transition-all duration-300 shadow-md"
        >
          <span>Book a session</span>
          <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
        </a>
      </div>
    </nav>
  );
}
