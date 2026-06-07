"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { BrandVideo } from "@/components/ui/BrandVideo";

type FieldDef = {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  autoComplete: string;
  half?: boolean;
};

const fieldDefs: FieldDef[] = [
  { name: "name", label: "Full Name", type: "text", placeholder: "Jane Doe", autoComplete: "name", half: true },
  { name: "company", label: "Company", type: "text", placeholder: "Acme Corp", autoComplete: "organization", half: true },
  { name: "email", label: "Email", type: "email", placeholder: "jane@acmecorp.com", autoComplete: "email", half: true },
  { name: "phone", label: "Phone", type: "tel", placeholder: "+1 555 0100", autoComplete: "tel", half: true },
];

type Values = Record<string, string>;

function validate(values: Values): Record<string, string> {
  const errors: Record<string, string> = {};
  if (!values.name?.trim()) errors.name = "Please enter your name.";
  if (!values.company?.trim()) errors.company = "Please enter your company.";
  if (!values.email?.trim()) errors.email = "Please enter your email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
    errors.email = "That email doesn't look right.";
  if (!values.phone?.trim()) errors.phone = "Please enter a phone number.";
  else if (values.phone.replace(/[^\d]/g, "").length < 7)
    errors.phone = "That phone number looks too short.";
  return errors;
}

function Field({
  def,
  value,
  error,
  onChange,
}: {
  def: FieldDef;
  value: string;
  error?: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className={def.half ? "" : "sm:col-span-2"}>
      <label htmlFor={def.name} className="mb-1.5 ml-1 block text-sm font-bold text-[#021879]">
        {def.label}
      </label>
      <input
        id={def.name}
        name={def.name}
        type={def.type}
        required
        autoComplete={def.autoComplete}
        value={value}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${def.name}-err` : undefined}
        onChange={(e) => onChange(e.target.value)}
        placeholder={def.placeholder}
        className={`w-full rounded-xl border bg-[#F4F9FF] px-5 py-3 font-medium text-gray-900 transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#147BFE] ${
          error ? "border-red-400" : "border-[#E7F3FF]"
        }`}
      />
      {error ? (
        <p id={`${def.name}-err`} className="mt-1 ml-1 text-sm font-medium text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function SuccessState() {
  return (
    <div role="status" className="flex flex-col items-start justify-center">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#147BFE]/10">
        <svg viewBox="0 0 24 24" fill="none" stroke="#147BFE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
          <path d="m5 12 4.5 4.5L19 7" />
        </svg>
      </div>
      <h2 className="mb-3 text-3xl font-bold tracking-tight text-[#021879] md:text-4xl">
        Request received
      </h2>
      <p className="text-lg font-medium text-gray-600">
        Thanks. We&apos;ll reach out within one business day to set up your
        Solution Mapping Session.
      </p>
    </div>
  );
}

function CtaForm() {
  const [values, setValues] = useState<Values>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length === 0) setSent(true);
  };

  return (
    <div className="relative z-10 flex w-full flex-col justify-center bg-white p-8 md:w-1/2 md:p-12">
      {sent ? (
        <SuccessState />
      ) : (
        <>
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-[#021879] md:text-4xl">
            Engineer Your Success
          </h2>
          <p className="mb-7 text-lg font-medium text-gray-600">
            Let&apos;s set the target for your first quick win.
          </p>
          <form noValidate onSubmit={onSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {fieldDefs.map((def) => (
              <Field
                key={def.name}
                def={def}
                value={values[def.name] ?? ""}
                error={errors[def.name]}
                onChange={(v) =>
                  setValues((prev) => ({ ...prev, [def.name]: v }))
                }
              />
            ))}
            <button
              type="submit"
              className="mt-2 rounded-xl bg-[#0f63d6] py-4 text-lg font-bold text-white shadow-md transition-colors duration-300 hover:bg-[#021879] hover:shadow-xl sm:col-span-2"
            >
              Request an Assessment
            </button>
          </form>
        </>
      )}
    </div>
  );
}

function CtaAside() {
  return (
    <div className="group relative hidden min-h-[400px] w-full md:block md:w-1/2">
      <BrandVideo
        src="/0_Woman_Business_Woman_1280x720.mp4"
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}

export function FinalCta() {
  return (
    <section
      id="contact"
      className="relative flex min-h-screen items-center justify-center px-6 py-12 md:px-12 mesh-bg-dark"
    >
      <Reveal className="mx-auto flex w-full max-w-7xl flex-col items-stretch overflow-hidden rounded-[3rem] border border-[#E7F3FF] bg-white shadow-2xl md:flex-row">
        <CtaForm />
        <CtaAside />
      </Reveal>
    </section>
  );
}
