"use client";

import { usePathname } from "next/navigation";
import { SiteNav } from "@/components/layout/SiteNav";
import { SiteNavV3 } from "@/components/layout/SiteNavV3";

/**
 * Renders the v3-specific header on /v3 routes, and the shared header
 * everywhere else. Keeps the v3 header isolated from the main site + v2.
 */
export function SiteNavSwitch() {
  const pathname = usePathname();
  if (pathname?.startsWith("/v3")) return <SiteNavV3 />;
  return <SiteNav />;
}
