# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server
npm run build     # Type-check (tsc -b) then Vite build
npm run lint      # ESLint
npm run preview   # Preview the production build locally
```

No tests exist. `npm run build` is the correctness gate — it type-checks and bundles.

## Architecture

Single-page React 19 + TypeScript app built with Vite. Marketing site for an international education consultancy. Two routes are defined in `src/main.tsx` via React Router and handled server-side by the `vercel.json` SPA rewrite:

- `/` → `App.tsx` (main landing page)
- `/about` → `src/pages/AboutUs.tsx`

**Landing page section order** (top → bottom): Hero → Countries → Statistics → UniversityShowcase → Scholarships → UniversityFinder → Testimonials → Events → ConsultationCTA → Footer

### Global state (two React contexts)

- `CursorContext` (`src/context/CursorContext.tsx`) — tracks `cursorType: 'default' | 'view'`. Components call `useCursor().setCursorType('view')` on hover to switch the custom cursor shape.
- `ModalContext` (`src/context/ModalContext.tsx`) — controls the consultation form modal. Any component can call `useModal().openModal()`. `ConsultationModal` reads `isModalOpen` and renders via `AnimatePresence`. Only `App.tsx` wraps with `ModalProvider`; `AboutUs.tsx` does not include the modal.

### Page shell pattern

Both `App.tsx` and `AboutUs.tsx` independently initialize Lenis smooth scroll in a `useEffect` (the setup is duplicated — not shared). Each page wraps its tree in `<CursorProvider>` and renders `<CustomCursor />` and `<Navbar />` itself.

### Animation stack

- **Framer Motion** — page-level animations, parallax (`useScroll`/`useTransform`), `AnimatePresence` for the modal.
- **GSAP + split-type** — text splitting and timeline animations inside individual components.
- **Lenis** — smooth scroll initialized per-page with `duration: 1.2` and an exponential easing curve, driven by a `requestAnimationFrame` loop.
- **react-intersection-observer** — triggers entrance animations when sections scroll into view.

### Styling

Tailwind CSS v4 (configured via `@tailwindcss/vite` plugin — no `tailwind.config.js`). Design tokens are in `src/index.css` under `@theme`:

| Token | Value |
|---|---|
| `brand-bg` | `#F8F6F2` (warm off-white) |
| `brand-text` | `#111111` (near-black) |
| `brand-muted` | `#555555` |
| `brand-accent` | `#000000` |
| `brand-hover` | `#222222` |
| Font | Inter Tight (Google Fonts) |

Custom CSS utilities in `index.css`: `.clip-path-reveal` / `.clip-path-reveal.visible` (clip-path entrance), `.animate-marquee-left` / `.animate-marquee-right` (infinite scroll marquees, 40s duration).

The custom cursor hides the native cursor on pointer-fine devices — set globally in `index.css` with `cursor: none !important`.

### Deployment

Deployed to Vercel. `vercel.json` rewrites all paths to `index.html` to support client-side routing.
