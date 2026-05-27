import Link from "next/link";
import { TwincoLogo } from "@/components/brand/TwincoLogo";

const columns = [
  {
    title: "Explore",
    links: [
      { label: "Methodology", href: "#methodology" },
      { label: "Solutions", href: "#solutions" },
      { label: "The Edge", href: "#edge" },
      { label: "Use Cases", href: "#inspiration" },
      { label: "Case Studies", href: "#case-studies" },
    ],
  },
  {
    title: "Get Started",
    links: [
      { label: "Schedule a Session", href: "#contact" },
      { label: "Request an Assessment", href: "#contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-night-deep text-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr]">
          <div className="max-w-sm">
            <TwincoLogo className="h-6 text-white" />
            <p className="mt-5 leading-relaxed text-white/60">
              Architects of enterprise AI adoption. We pinpoint operational
              inefficiencies, design the solution, and lead the adoption that
              makes it stick.
            </p>
            <p className="label-mono mt-6 text-azure">
              Where AI agents work as one
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="label-mono text-yellow">{col.title}</h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Twin-Co. All rights reserved.</p>
          <p className="label-mono">Enterprise AI · Vendor-agnostic · Built for scale</p>
        </div>
      </div>
    </footer>
  );
}
