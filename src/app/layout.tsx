import type { Metadata } from "next";
import { Afacad, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

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
      <body className="min-h-full flex flex-col bg-white text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
