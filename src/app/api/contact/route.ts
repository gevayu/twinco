import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type Lead = {
  name: string;
  company: string;
  email: string;
  phone: string;
};

function isValidLead(body: unknown): body is Lead {
  if (!body || typeof body !== "object") return false;
  const b = body as Record<string, unknown>;
  const str = (v: unknown) => typeof v === "string" && v.trim().length > 0;
  return (
    str(b.name) &&
    str(b.company) &&
    str(b.email) &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b.email as string) &&
    str(b.phone)
  );
}

function getTransport() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    throw new Error("SMTP environment variables are not configured.");
  }
  const port = Number(SMTP_PORT ?? 587);
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: false, // STARTTLS upgrade on 587/25/2525/2587
    requireTLS: true,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
}

const esc = (s: string) =>
  s.replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" })[c]!);

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  if (!isValidLead(body)) {
    return NextResponse.json(
      { error: "Please fill in all fields with a valid email." },
      { status: 400 },
    );
  }

  const { name, company, email, phone } = body;
  const to = process.env.CONTACT_TO;
  const from = process.env.CONTACT_FROM;
  if (!to || !from) {
    return NextResponse.json(
      { error: "Contact addresses are not configured." },
      { status: 500 },
    );
  }

  try {
    const transport = getTransport();
    await transport.sendMail({
      from,
      to,
      replyTo: email,
      subject: `New assessment request — ${name} (${company})`,
      text: `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nPhone: ${phone}`,
      html: `<h2>New assessment request</h2>
<table cellpadding="6">
  <tr><td><strong>Name</strong></td><td>${esc(name)}</td></tr>
  <tr><td><strong>Company</strong></td><td>${esc(company)}</td></tr>
  <tr><td><strong>Email</strong></td><td>${esc(email)}</td></tr>
  <tr><td><strong>Phone</strong></td><td>${esc(phone)}</td></tr>
</table>`,
    });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return NextResponse.json(
      { error: "Could not send your request. Please try again later." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
