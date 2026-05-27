import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "light" | "yellow";
type Size = "md" | "lg";

const base =
  "group/btn inline-flex items-center justify-center gap-2 rounded-full text-center font-medium leading-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-azure focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  // azure, with a soft glow that intensifies on hover
  primary:
    "bg-azure text-white shadow-[0_10px_30px_-10px_rgba(20,123,254,0.75)] hover:bg-azure-600 hover:shadow-[0_14px_38px_-8px_rgba(20,123,254,0.85)] hover:-translate-y-0.5",
  // outlined, for light surfaces
  secondary:
    "bg-transparent text-navy ring-1 ring-inset ring-navy/20 hover:ring-navy/40 hover:bg-navy/[0.03] hover:-translate-y-0.5",
  // glassy white, for dark surfaces
  light:
    "glass-dark text-white hover:bg-white/15 hover:-translate-y-0.5",
  // accent
  yellow:
    "bg-yellow text-navy shadow-[0_10px_30px_-12px_rgba(255,222,138,0.9)] hover:brightness-[0.97] hover:-translate-y-0.5",
};

const sizes: Record<Size, string> = {
  md: "min-h-11 px-5 py-2.5 text-[15px]",
  lg: "min-h-[58px] px-8 py-3.5 text-[17px]",
};

function cx(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

export function ButtonLink({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  ...rest
}: CommonProps & ComponentProps<typeof Link>) {
  return (
    <Link
      href={href}
      className={cx(base, variants[variant], sizes[size], className)}
      {...rest}
    >
      {children}
    </Link>
  );
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...rest
}: CommonProps & ComponentProps<"button">) {
  return (
    <button
      className={cx(base, variants[variant], sizes[size], className)}
      {...rest}
    >
      {children}
    </button>
  );
}
