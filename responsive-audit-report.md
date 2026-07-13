# Responsive Design Audit Report
**Date:** 2026-07-14  
**Scope:** All pages and shared components  
**Target:** Mobile-first, tested at 320px / 375px / 768px / 1024px breakpoints

---

## Severity Key
- **[HIGH]** — Layout breaks or content is inaccessible
- **[MED]** — Noticeably degraded UX but page still functions
- **[LOW]** — Cosmetic or minor accessibility issue

---

## 1. UniversityShowcase.tsx — Lines 18–25, 115

**[HIGH] Extreme page height on mobile from fixed `vh` card heights**

Each `GridItem` has a fixed viewport-height class (`h-[65vh]`, `h-[48vh]`, `h-[55vh]`, etc.) designed for the 4-column desktop layout. On mobile (`grid-cols-1`), all 4 column-divs stack, each containing 2 items. Result: 8 cards × ~500px each = ~4,000px for this section alone on a 375px phone.

Staggered margins on individual items (`mt-16`, `-mt-8`, `mt-10`, `mt-20`) were designed to create visual asymmetry in a 4-column grid. On mobile they create inconsistent vertical spacing — extra top padding where `mt-16` is, and collapsed gaps where `-mt-8` is.

**Fix:** On mobile, replace `vh`-based heights with a fixed pixel height and strip the offset margins. On `sm:grid-cols-2`, the masonry can be simplified to equal heights.

```
h-[65vh]          → h-[260px] sm:h-[50vh] md:h-[65vh]
h-[48vh] mt-16    → h-[260px] sm:h-[48vh] sm:mt-16
h-[55vh] -mt-8    → h-[260px] sm:h-[55vh] sm:-mt-8
(etc.)
```

---

## 2. Countries.tsx — Lines 172, 243

**[HIGH] 15 image cards at `h-[60vh]` each in a single column on mobile = ~9,000px of cards**

Each `CountryCard` has `h-[60vh] min-h-[380px]`. On mobile (`grid-cols-1`), 15 countries × ~500px = 7,500px of card content before anything else loads. Scrolling through all 15 is exhausting on mobile.

**[MED] Hover-revealed metrics are desktop-only**

The tuition, work rights, and post-study visa data only appear on `group-hover:max-h-40`. Touch devices never trigger hover, so mobile users see only the country name — no actual information.

**Fix:** Reduce card height on mobile. Show the metrics always (not on hover) on mobile, or show them in a visible sub-row beneath the name.

```
h-[60vh] min-h-[380px]  →  h-[240px] sm:h-[50vh] lg:h-[60vh]
```

For the hover metrics: add a `sm:hidden` visible metrics block, and keep the hover-reveal for `md:` and above.

---

## 3. Navbar.tsx — Lines 323–329, 337–339

**[HIGH] Hamburger and close buttons below minimum touch target size**

Hamburger button: `p-2` with `w-6` lines = approximately 28×28px tap area.  
Close button: `p-2` with `w-8 h-8` X icon = roughly 40×40px (marginally better).

iOS HIG recommends 44×44px minimum. Android recommends 48×48dp. Both fail for the hamburger.

**Fix:**
```
className="lg:hidden flex flex-col gap-1.5 p-2"
→
className="lg:hidden flex flex-col gap-1.5 p-3"
```
For close button: `p-2` → `p-3`.

**[LOW] Mobile sub-menu links have `py-1` touch targets (~20px)**

Links within the expanded sub-menu accordion (lines 380, 389, 406, 415) use `py-1`, giving about 20px of tappable height — well below the 44px minimum.

**Fix:** `py-1` → `py-2.5` on all mobile sub-item links.

---

## 4. Testimonials.tsx — Line 141

**[MED] Hard-coded `w-[320px]` card width clips on narrowest phones**

On a 320px-wide device (iPhone SE 1st gen), a 320px card + `pl-8` (32px) left padding means the card extends 32px off-screen with no visible hint that it scrolls. On 375px phones the 55px peek of the next card is barely visible.

**Fix:**
```
w-[320px] md:w-[400px]
→
w-[min(82vw,320px)] md:w-[400px]
```

Also: the drag-scroll only handles mouse events (`onMouseDown`, `onMouseMove`). Touch scroll works via native browser overflow-x scrolling, which works — but there's no touch `onTouchStart`/`onTouchMove` handler, so the cursor-swap and walk multiplier don't apply on touch. Not a breakage, but fyi.

---

## 5. Footer.tsx — Lines 87–99

**[MED] Newsletter form row too cramped on mobile**

The form is a single `flex` row with no mobile stack. On 320px screens: `px-5 py-3.5` Subscribe button takes ~90px minimum width, leaving the input with ~130px — barely enough for placeholder text and nearly impossible to tap accurately.

**Fix:** Stack the form below `sm`:
```jsx
<div className="flex flex-col sm:flex-row gap-0 border border-brand-text/20 hover:border-brand-text transition-colors duration-300">
  <input ... className="flex-1 ... px-5 py-3.5 ..." />
  <button ... className="sm:border-l border-t sm:border-t-0 border-brand-text/20 px-5 py-3.5 ...">
    Subscribe
  </button>
</div>
```
(The shared `border` wrapping div needs to be dropped; each child gets its own border instead when stacked.)

---

## 6. ConsultationModal.tsx — Line 101

**[MED] `p-8` padding leaves only 256px content width on 320px phones**

The modal card has `p-8` (32px on each side). On a 320px phone with `p-4` outer padding: 320 − 8 − 8 − 32 − 32 = 240px usable content width. The two-column `sm:grid-cols-2` dropdowns (lines 163, 201) correctly stack below `sm`, which helps, but the overall form feels cramped.

**Fix:** Tighten padding on mobile:
```
p-8 md:p-10  →  p-5 sm:p-8 md:p-10
```

---

## 7. Scholarships.tsx — Line 78

**[MED] Scholarship count-up stats: `grid-cols-1 md:grid-cols-3` skips the `sm` breakpoint**

From 320px to 767px the 3 stat items stack in a single column. At `sm` (640px) there's enough room for 2 columns, but the grid jumps straight from 1 to 3 at `md`. The single-column layout on tablets between 640–767px looks sparse.

**Fix:**
```
grid-cols-1 md:grid-cols-3
→
grid-cols-1 sm:grid-cols-2 md:grid-cols-3
```
(The 3-item split into 2+1 at sm is fine — the 3rd item gets a full row to itself.)

---

## 8. Multiple Components — Sub-10px Text

**[LOW] Several labels use `text-[9px]` and `text-[10px]` — below readable minimums on mobile**

Instances found:
- `UniversityShowcase.tsx:75` — `text-[9px]` country/rank label
- `Countries.tsx:194` — `text-[9px]` tag label
- `Navbar.tsx:217` — `text-[9px]` dropdown section heading
- `Scholarships.tsx:107` — `text-[9px]` country label
- `ServiceDetailPage.tsx:132` — `text-[10px]` "Overview" label
- `Footer.tsx:83, 113, 121, 130` — `text-[10px]` column headings

Minimum legible body size on mobile is 12px. These are decorative labels and eyebrows so 11px is acceptable, but 9–10px is too small on high-DPI mobile screens.

**Fix:** `text-[9px]` → `text-[11px]`, `text-[10px]` → `text-[11px]`. Keep tracking and uppercase.

---

## 9. Hero.tsx — Line 56

**[LOW] Content padding `pt-28` fine, but heading `clamp(48px, 8vw, 110px)` hits minimum at 375px**

At 375px width: `8vw = 30px`, but `clamp` minimum is 48px — so heading renders at 48px. Three-line stacked heading at 48px on a 375px screen with `px-8` (32px sides) = 311px wide. Each heading word wraps correctly but the last line "Future." at 48px takes roughly half the screen width. This is acceptable.

No change needed here.

---

## 10. Navbar.tsx — `#testimonials` dead sub-link

**[LOW] Home sub-item `href: '#testimonials'` is a hash link that only works from the home page**

If a user is on `/about` and opens the Home sub-menu, clicking "Testimonials" navigates to `/about#testimonials` which doesn't exist.

**Fix:** Change to `/#testimonials` and use `<a>` (not `<Link>`) so it forces a navigation to the home page anchor.

---

## Summary Table

| # | File | Line(s) | Severity | Issue |
|---|------|---------|----------|-------|
| 1 | `UniversityShowcase.tsx` | 18–25, 115 | HIGH | Fixed `vh` heights cause ~4,000px section on mobile |
| 2 | `Countries.tsx` | 172, 243 | HIGH | 15 cards × `h-[60vh]` = ~9,000px; hover metrics invisible on touch |
| 3 | `Navbar.tsx` | 323, 337 | HIGH | Hamburger/close touch target ~28px (need 44px) |
| 4 | `Testimonials.tsx` | 141 | MED | `w-[320px]` card clips off-screen on 320px phones |
| 5 | `Footer.tsx` | 87–99 | MED | Newsletter flex row too cramped to use on narrow screens |
| 6 | `ConsultationModal.tsx` | 101 | MED | `p-8` on mobile leaves 240px content width |
| 7 | `Scholarships.tsx` | 78 | MED | Skips `sm` breakpoint in 3-stat grid |
| 8 | Multiple | Various | LOW | Labels at `text-[9px]`/`text-[10px]` below 12px legibility minimum |
| 9 | `Navbar.tsx` | 43 | LOW | `#testimonials` sub-link breaks from non-home pages |

---

## What's Already Good

- `Statistics.tsx` — `grid-cols-1 sm:grid-cols-2 md:grid-cols-4` ✓
- `ServiceDetailPage.tsx` — Benefits grid `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` ✓
- `SeatMatrixPage.tsx` — Table wrapped in `overflow-x-auto` ✓
- `ConsultationModal.tsx` — Contact row `grid-cols-1 sm:grid-cols-2` stacks on mobile ✓
- `Hero.tsx` — CTA buttons `flex-col sm:flex-row` stacks cleanly ✓
- `Navbar.tsx` — Mobile overlay menu with `overflow-y-auto` and accordion sub-menus ✓
- Typography — `clamp()` used for all major headings ✓
- Horizontal padding — `px-8 md:px-16` consistent throughout ✓
- `Footer.tsx` — Link columns `grid-cols-2 md:grid-cols-4` ✓
