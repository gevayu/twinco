"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Section";
import { IconCheck } from "@/components/ui/icons";

const fields = [
  { name: "fullName", label: "Full Name", type: "text", autoComplete: "name" },
  { name: "company", label: "Company", type: "text", autoComplete: "organization" },
  { name: "email", label: "Email", type: "email", autoComplete: "email" },
] as const;

export function FinalCta() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire to a real endpoint / CRM (Next.js route handler or form
    // provider). For now we confirm capture on the client only.
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden bg-night-deep py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute -left-[8%] bottom-0 w-[60%] opacity-50">
        <Image
          src="/brand/wave-dark.png"
          alt=""
          width={2000}
          height={1200}
          className="wave-on-dark h-auto w-full"
        />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1fr_0.85fr] lg:px-10">
        <div>
          <Eyebrow tone="light">Get Started</Eyebrow>
          <h2 className="font-display mt-5 text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-[3.4rem]">
            Ready to engineer your AI success?
          </h2>
          <p className="mt-6 max-w-md text-xl leading-relaxed text-white/75">
            Let’s set the target for your first quick win.
          </p>
        </div>

        <div className="rounded-[2rem] bg-white p-7 shadow-[0_40px_90px_-40px_rgba(0,0,0,0.6)] sm:p-9">
          {submitted ? (
            <div className="flex flex-col items-center gap-4 py-12 text-center">
              <span className="grid h-16 w-16 place-items-center rounded-full bg-azure/10 text-azure">
                <IconCheck className="w-9" />
              </span>
              <h3 className="font-display text-2xl font-bold text-navy">
                Thank you
              </h3>
              <p className="max-w-xs leading-relaxed text-muted">
                Your assessment request is in. We’ll be in touch shortly to set
                your first target.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {fields.map((f) => (
                <div key={f.name} className="flex flex-col gap-2">
                  <label htmlFor={f.name} className="label-mono text-navy">
                    {f.label}
                  </label>
                  <input
                    id={f.name}
                    name={f.name}
                    type={f.type}
                    autoComplete={f.autoComplete}
                    required
                    placeholder={f.label}
                    className="rounded-xl bg-sky px-4 py-3.5 text-[15px] text-ink outline-none ring-1 ring-inset ring-navy/10 transition-shadow placeholder:text-muted/50 focus:ring-2 focus:ring-azure"
                  />
                </div>
              ))}
              <Button type="submit" variant="primary" size="lg" className="mt-2 w-full">
                Request an Assessment
              </Button>
              <p className="text-center text-sm text-muted">
                We’ll only use your details to prepare your assessment.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
