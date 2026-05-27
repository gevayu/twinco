# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project

Twinco1 is the **marketing website for Twinco** — an enterprise AI-adoption consultancy ("Architects of Enterprise AI Adoption"; tagline _"Where AI agents work as one"_). It's currently a **single-page site** (`/`) composed of nine sections.

The visual design is derived from the **Twinco Figma Brandbook** (fileKey `AnJITItWTxO1m8RmkrTatE`). Brand specifics live in the brand tokens (see Brand below) — match them when adding UI.

## Commands

```bash
npm run dev      # start dev server (Turbopack) at http://localhost:3000
npm run build    # production build — run this to catch type + lint errors before shipping
npm run lint     # ESLint
npm run start    # serve the production build (requires npm run build first)
```

No test suite exists in this project. `npm run build` is the de-facto check: it type-checks and lints the whole app.

## Stack

- **Next.js 16.2.6** with the App Router and **Turbopack**. This version has breaking changes from older training data — read the relevant guide in `node_modules/next/dist/docs/` before using any Next.js API (see AGENTS.md).
- **React 19**, **TypeScript** (strict mode), **Tailwind CSS v4**, **ESLint 9** (`eslint-config-next`).
- Path alias **`@/*` → `./src/*`** (configured in `tsconfig.json`).

## Tailwind v4 + Brand

There is **no `tailwind.config.*` file** — that is intentional, not missing. Tailwind v4 is configured entirely in `src/app/globals.css`:

- `@import "tailwindcss";` pulls in the framework.
- Design tokens go in the `@theme {}` block, not a JS config. PostCSS wiring is in `postcss.config.mjs` via `@tailwindcss/postcss`.

**Brand tokens** (in `@theme`, usable as `bg-*`/`text-*`/`ring-*` etc.):

- `azure` `#147BFE` (primary), `azure-300`/`azure-600`, `navy` `#021B79` (headings), `night` `#05081A` (dark sections — blends the dark wave), `yellow` `#FFDE8A` (accent), `sky` `#F4F9FF` (light section bg).
- Neutrals: `ink`, `graphite`, `muted` `#6A7489`.
- Fonts: **Afacad** (`--font-sans`, display + body) paired with **JetBrains Mono** (`--font-mono`) for technical labels — both via `next/font/google` in `layout.tsx`. Use the `.label-mono` class for eyebrows/metrics and `.font-display` for tight-tracking large headings.

**Design language (Hybrid Contrast):** sections alternate light (`white`/`bg-sky`) and dark (`.bg-night-deep`). Helpers in globals.css: `.bg-night-deep` (dark radial gradient), `.bg-dots`/`.bg-dots-light` (dotted-grid texture), `.glass-light`/`.glass-dark`, `.text-gradient`. Large radii (`rounded-[2rem]`). Layouts are deliberately asymmetric (bento, timeline, divided columns, interactive tabs) — avoid generic equal-card grids; add an intentional break per section (e.g. the hand-drawn `Underline`).

**The 3D growth-wave** is the signature motif. Assets live in `public/brand/`: `wave-dark.png` (neon-on-black) and `wave-light.png` (background keyed to transparent). On **dark** surfaces use `wave-dark` with `.wave-on-dark` (screen blend — black drops out, neon glows). The light wave is pre-keyed so it needs no blend. These are the real Figma renders (do not replace with CSS approximations).

## Architecture

App Router under `src/app/`: `layout.tsx` (Afacad font, metadata, `Header`/`Footer`, the `html.js` script — see Reveal gotcha), `page.tsx` (composes the nine home sections), `icon.svg` (favicon, the Twinco mark).

Components under `src/components/`:

- `brand/` — `TwincoLogo` (full wordmark, reconstructed from Figma as one SVG, `fill=currentColor` so it recolors via `text-*`), `TwincoMark` (the standalone "ᴧᴧ" glyph), `Underline` (hand-drawn marker accent).
- `ui/` — `Button`/`ButtonLink` (sizes use `min-h` + wrap, so long labels are safe), `Reveal` (scroll animation), `Section`/`SectionHeading`/`Eyebrow` (layout + heading primitives), `icons.tsx` (inline SVG icon set — no icon dependency).
- `layout/` — `Header` (sticky, client; mobile menu), `Footer`.
- `home/` — the nine sections in page order: `Hero`, `Opening`, `Methodology`, `Solutions`, `Edge`, `Inspiration`, `CaseStudy`, `SocialProof`, `FinalCta`. Keep `page.tsx` thin: it only composes these.

**Convention:** route files stay thin and compose section components; sections live in `src/components/home/`, shared pieces in `src/components/ui/`. Remote image domains must be allow-listed in `next.config.ts` `images.remotePatterns` before `next/image` can load them (none used yet — visuals are CSS gradients + inline SVG).

## Known TODOs (placeholders, intentional)

- **`SocialProof` testimonials are placeholders** — replace the `testimonials` array with real client quotes.
- **`FinalCta` form has no backend** — `handleSubmit` only sets a client success state; wire it to a route handler / CRM.

## Gotchas

- **Two entrance systems, on purpose.** Above-the-fold content (the Hero) uses the pure-CSS `.rise` class (stagger via inline `--d`) — it must paint reliably without depending on JS/observers. Below-the-fold sections use `Reveal` (IntersectionObserver, with a 1.4s safety fallback so content never stays stuck hidden). `Reveal` renders content **visible by default**; `src/app/layout.tsx` adds `html.js` in a synchronous pre-paint `<script>` (with `suppressHydrationWarning` on `<html>`), and globals.css only hides `.reveal` under `.js`. Don't gate hero content behind `Reveal`, and don't set `.reveal` to `opacity:0` unconditionally.
- **Turbopack rejects IIFEs as JSX children.** TypeScript passes, but Turbopack throws a parse error (`Expected '</', got 'jsx text'`). Never write `{(() => { ... })()}` inside JSX — compute derived values before `return` and use plain `&&` / ternary conditionals in the markup.
