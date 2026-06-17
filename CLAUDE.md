# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server
npm run build     # Type-check (tsc -b) then Vite build
npm run lint      # ESLint
npm run preview   # Preview the production build locally
```

There are no tests. `npm run build` is the correctness gate — it type-checks and bundles.

## Architecture

Single-page React 19 + TypeScript app built with Vite. It's a one-page marketing site for an international education consultancy. All sections render in a fixed order inside `App.tsx` — no dynamic routing (the `vercel.json` SPA rewrite handles deep-link refreshes).

**Section order** (top → bottom): Hero → Countries → Statistics → UniversityShowcase → Scholarships → UniversityFinder → Testimonials → Events → ConsultationCTA → Footer

### Global state (two React contexts)

- `CursorContext` (`src/context/CursorContext.tsx`) — tracks cursor state (`'default' | 'view'`). Components call `useCursor().setCursorType('view')` on hover to switch the custom cursor shape.
- `ModalContext` (`src/context/ModalContext.tsx`) — controls the consultation form modal. Any component can call `useModal().openModal()` to trigger it. `ConsultationModal` reads `isModalOpen` and renders via `AnimatePresence`.

### Animation stack

- **Framer Motion** — page-level animations, parallax (`useScroll`/`useTransform`), `AnimatePresence` for the modal.
- **GSAP + split-type** — text splitting and timeline animations inside individual components.
- **Lenis** — smooth scroll, initialized once in `App.tsx` via `useEffect` with a `requestAnimationFrame` loop. Lenis CSS classes (`lenis-smooth`, `lenis-stopped`) are set in `index.css`.
- **react-intersection-observer** — triggers entrance animations when sections scroll into view.

### Styling

Tailwind CSS v4 (configured via `@tailwindcss/vite` plugin, no `tailwind.config.js`). Design tokens are defined in `src/index.css` under `@theme`:

| Token | Value |
|---|---|
| `brand-bg` | `#F8F6F2` (warm off-white page background) |
| `brand-text` | `#111111` (near-black) |
| `brand-muted` | `#555555` |
| `brand-accent` | `#000000` |
| Font | Inter Tight (Google Fonts) |

Custom CSS utilities in `index.css`: `.clip-path-reveal` (clip-path entrance), `.animate-marquee-left` / `.animate-marquee-right` (infinite scroll marquees).

The custom cursor hides the native cursor on pointer-fine devices — this is set globally in `index.css` with `cursor: none !important` on interactive elements.

### Deployment

Deployed to Vercel. `vercel.json` rewrites all paths to `index.html` to support client-side navigation.
