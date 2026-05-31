import { Reveal } from "@/components/ui/Reveal";
import { BrandImage } from "@/components/ui/BrandImage";
import { TwincoLogo } from "@/components/brand/TwincoLogo";

const sectionLinks = [
  { label: "Methodology", href: "#methodology" },
  { label: "The Edge", href: "#edge" },
  { label: "Use Cases", href: "#inspiration" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Client Perspectives", href: "#perspectives" },
];

const contactLinks = [
  { label: "Book a session", href: "#contact" },
  { label: "Request an assessment", href: "#contact" },
  { label: "Contact", href: "#contact" },
  { label: "hello@twinco.ai", href: "mailto:hello@twinco.ai" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Accessibility", href: "#" },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="label-mono mb-5 text-[#FFDE8A]">{title}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-white/80 transition-colors hover:text-[#FFDE8A]"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterBottomBar() {
  return (
    <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-7 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
      <p>© 2026 Twinco. All rights reserved.</p>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 md:justify-center">
        {legalLinks.map((link, i) => (
          <span key={link.label} className="flex items-center gap-3">
            {i > 0 ? <span className="text-white/25">|</span> : null}
            <a href={link.href} className="transition-colors hover:text-[#FFDE8A]">
              {link.label}
            </a>
          </span>
        ))}
      </div>

      <a
        href="http://bold-move.co.il/"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors hover:text-[#FFDE8A] md:text-right"
      >
        Designed with Bold-Move
      </a>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative flex min-h-[480px] flex-col justify-center overflow-hidden bg-[#010a33] px-6 py-20 text-white md:px-12">
      <BrandImage
        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920"
        sizes="100vw"
        className="absolute inset-0 z-0 opacity-20 mix-blend-screen"
      />
      <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-[#147BFE] opacity-20 mix-blend-screen blur-[150px]" />

      <Reveal className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Left: logo + slogan */}
          <div className="max-w-sm">
            <TwincoLogo className="mb-6 h-12 text-[#FFDE8A] md:h-14" />
            <p className="text-xl font-medium leading-relaxed text-white/80">
              Where AI agents work as one.
            </p>
            <p className="mt-3 leading-relaxed text-white/55">
              Architects of enterprise AI adoption. We find the workflow that
              costs you, fix it, and lead the adoption that makes it stick.
            </p>
          </div>

          {/* Center: in-page section anchors */}
          <div className="md:justify-self-center">
            <FooterColumn title="Explore" links={sectionLinks} />
          </div>

          {/* Right: contact */}
          <div className="md:justify-self-end">
            <FooterColumn title="Get in touch" links={contactLinks} />
          </div>
        </div>

        <FooterBottomBar />
      </Reveal>
    </footer>
  );
}
