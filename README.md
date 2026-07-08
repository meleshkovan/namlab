# namlab.io - NAM, Not a Machines

Marketing website for **NAM - Not a Machines**, a global boutique product lab.
Single landing page with anchor navigation, full EN/UA localization, and the
Deep Petrol & Oxidized Copper design system (Fraunces + Inter, no shadows, no
gradient meshes, sentence case everywhere).

## Stack

- [Vite](https://vitejs.dev) + React 19 + TypeScript
- Tailwind CSS 4 (design tokens in `src/index.css`)
- No animation libraries - CSS transitions + Intersection Observer
- Static output (`dist/`), deployable to Vercel / Netlify / Cloudflare Pages

## Getting started

```bash
npm install
npm run dev        # local dev server
npm run build      # production build -> dist/
npm run preview    # serve the production build locally
```

## Book-a-call form -> your email (required setup)

The form POSTs to the endpoint in the `VITE_FORM_ENDPOINT` env variable.
No personal email is hardcoded in the repo. To receive submissions:

1. Register a free form at [Formspree](https://formspree.io) (50 submissions/mo)
   pointing at your email, **or** grab a free access key at
   [Web3Forms](https://web3forms.com) (unlimited).
2. Copy `.env.example` to `.env` and paste the endpoint:

   ```
   VITE_FORM_ENDPOINT=https://formspree.io/f/your_form_id
   ```

3. On Vercel/Netlify, add `VITE_FORM_ENDPOINT` in the project's environment
   variables instead of committing `.env`.

Submissions include hidden fields: `form_type` (`standard` or
`veteran_probono` for the Pro Bono for Defenders program), plus a honeypot
and a 2-second time-gate for spam protection. Without a configured endpoint
the form shows the error state with the fallback email.

## i18n

- `src/locales/en.json` + `src/locales/ua.json`, wired through
  `src/lib/i18n.tsx` (React context; localStorage is a progressive
  enhancement guarded by try/catch).
- Default locale: EN. The header switcher updates `<html lang>`.
- Never translated: NAM, Not a Machines, namlab.io, package names, course titles.
- Fraunces has no Cyrillic subset - Ukrainian display headlines fall back to
  Georgia (declared in the `--font-display` stack).

## Accessibility

- WCAG 2.1 AA targets: semantic landmarks, keyboard navigation, copper focus
  rings, focus-trapped modal, labeled form errors via `aria-describedby`.
- Header accessibility menu applies real classes on `<html>`: `a11y-font`
  (125% scale), `a11y-contrast`, `a11y-motion`.
- `prefers-reduced-motion` disables all animation.

## Deploy (Vercel)

1. Import the repo at vercel.com -> framework preset **Vite**.
2. Build command `npm run build`, output directory `dist`.
3. Add the `VITE_FORM_ENDPOINT` environment variable.

`netlify.toml` is already configured for Netlify (build + SPA redirect).

## Project structure

```
src/
  components/
    Header.tsx  AccessibilityMenu.tsx  BookCallModal.tsx  BookCallForm.tsx
    sections/   Hero, ForWhom, Services, ProBono, Philosophy, Team,
                Office, Courses, Podcast, BookCall, Footer
  lib/          i18n.tsx  booking.tsx  reveal.tsx  utils.ts
  locales/      en.json  ua.json
public/
  images/       generated placeholder art (no hotlinking)
  og-image.png  favicon.svg
```
