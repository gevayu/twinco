import type { Metadata, Viewport } from "next";
import { Afacad, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/layout/SiteNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { CursorGlow } from "@/components/ui/CursorGlow";

const afacad = Afacad({
  variable: "--font-afacad",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono-jb",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Twinco — Architects of Enterprise AI Adoption",
  description:
    "Twinco pinpoints your core operational inefficiencies, designs the solution, and leads seamless organizational adoption. Vendor-agnostic enterprise AI, engineered for measurable impact.",
  openGraph: {
    title: "Twinco — Architects of Enterprise AI Adoption",
    description:
      "We architect organizational evolution, not software installations. Where AI agents work as one.",
    siteName: "Twinco",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${afacad.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        {/* Mark JS as available before paint so scroll-reveal can hide
            content only when it will actually animate (no-JS stays visible). */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body className="min-h-full bg-white text-ink">
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[#021879] focus:px-5 focus:py-3 focus:font-bold focus:text-white focus:shadow-lg"
        >
          Skip to content
        </a>
        <CursorGlow />
        <SiteNav />
        <main id="top">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
