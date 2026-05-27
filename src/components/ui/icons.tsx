/**
 * Lightweight inline icon set (24×24, stroke = currentColor). Kept in
 * the repo to avoid an icon dependency; style with text-* + size utils.
 */
import type { SVGProps } from "react";

function Svg(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    />
  );
}

export type IconProps = SVGProps<SVGSVGElement>;

/* Methodology */
export const IconSearch = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
  </Svg>
);
export const IconBlueprint = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3 5h18v14H3z" />
    <path d="M3 9h6v10M15 5v6h6M9 13h2M15 15h2" />
  </Svg>
);
export const IconCpu = (p: IconProps) => (
  <Svg {...p}>
    <rect x="6" y="6" width="12" height="12" rx="2" />
    <path d="M9 9h6v6H9zM9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
  </Svg>
);
export const IconFlag = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 21V4M4 4h11l-2 4 2 4H4" />
  </Svg>
);

/* Solutions */
export const IconTwin = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3" y="3" width="12" height="12" rx="2" />
    <rect x="9" y="9" width="12" height="12" rx="2" />
  </Svg>
);
export const IconShieldDollar = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6z" />
    <path d="M13.5 9.5a2 2 0 0 0-3 1.2c0 2.3 3.5 1.3 3.5 3.4a2 2 0 0 1-3.2 1.1M12 8v1M12 16v1" />
  </Svg>
);
export const IconWorkflow = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3" y="3" width="6" height="6" rx="1" />
    <rect x="15" y="15" width="6" height="6" rx="1" />
    <path d="M9 6h5a3 3 0 0 1 3 3v6" />
  </Svg>
);
export const IconSupply = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3 7l9-4 9 4-9 4-9-4Z" />
    <path d="M3 7v10l9 4 9-4V7M12 11v10" />
  </Svg>
);
export const IconLockShield = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6z" />
    <rect x="9" y="10" width="6" height="5" rx="1" />
    <path d="M10.5 10V9a1.5 1.5 0 0 1 3 0v1" />
  </Svg>
);

/* Edge pillars */
export const IconTarget = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="12" cy="12" r="0.5" fill="currentColor" />
  </Svg>
);
export const IconHub = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="3" />
    <circle cx="5" cy="5" r="2" />
    <circle cx="19" cy="5" r="2" />
    <circle cx="5" cy="19" r="2" />
    <circle cx="19" cy="19" r="2" />
    <path d="m9.8 9.8-3-3M14.2 9.8l3-3M9.8 14.2l-3 3M14.2 14.2l3 3" />
  </Svg>
);
export const IconUnlock = (p: IconProps) => (
  <Svg {...p}>
    <rect x="4" y="10" width="16" height="10" rx="2" />
    <path d="M8 10V7a4 4 0 0 1 7.5-2" />
    <path d="M12 14v3" />
  </Svg>
);

/* Inspiration twins */
export const IconChart = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 4v16h16" />
    <path d="M7 14l3-4 3 3 4-6" />
  </Svg>
);
export const IconHeadset = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
    <rect x="3" y="13" width="4" height="6" rx="1.5" />
    <rect x="17" y="13" width="4" height="6" rx="1.5" />
    <path d="M20 19a4 4 0 0 1-4 3h-2" />
  </Svg>
);
export const IconShieldCheck = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6z" />
    <path d="m9 12 2 2 4-4" />
  </Svg>
);

/* Utility */
export const IconArrowRight = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Svg>
);
export const IconCheck = (p: IconProps) => (
  <Svg {...p}>
    <path d="m5 12 4.5 4.5L19 7" />
  </Svg>
);
export const IconQuote = (p: IconProps) => (
  <Svg {...p} strokeWidth={0} fill="currentColor">
    <path d="M9 6c-3 0-5 2.4-5 5.5V18h6v-6H7.5C7.5 9.6 8 8.6 10 8zM20 6c-3 0-5 2.4-5 5.5V18h6v-6h-2.5c0-2.4.5-3.4 2.5-4z" />
  </Svg>
);
