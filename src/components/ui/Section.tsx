import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { TwincoMark } from "@/components/brand/TwincoMark";

function cx(...p: Array<string | undefined | false>) {
  return p.filter(Boolean).join(" ");
}

/** Section wrapper: vertical rhythm + centered max-width container. */
export function Section({
  children,
  id,
  className,
  containerClassName,
}: {
  children: ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <section id={id} className={cx("scroll-mt-24 py-24 sm:py-32", className)}>
      <div
        className={cx(
          "mx-auto w-full max-w-7xl px-6 lg:px-10",
          containerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}

/** Mono eyebrow label with the brandmark. */
export function Eyebrow({
  children,
  tone = "dark",
  className,
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <span
      className={cx(
        "label-mono inline-flex items-center gap-2.5",
        tone === "light" ? "text-yellow" : "text-azure",
        className,
      )}
    >
      <TwincoMark className="w-4" />
      {children}
    </span>
  );
}

/** Section heading block (eyebrow + display title + optional lead). */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "dark",
  className,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  align?: "center" | "left";
  tone?: "dark" | "light";
  className?: string;
}) {
  const titleColor = tone === "light" ? "text-white" : "text-navy";
  const leadColor = tone === "light" ? "text-white/70" : "text-muted";
  return (
    <Reveal
      className={cx(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
      <h2
        className={cx(
          "font-display max-w-3xl text-balance text-4xl font-bold sm:text-5xl lg:text-[3.4rem]",
          titleColor,
        )}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={cx(
            "max-w-2xl text-lg leading-relaxed",
            leadColor,
            align === "center" && "mx-auto",
          )}
        >
          {lead}
        </p>
      ) : null}
    </Reveal>
  );
}
