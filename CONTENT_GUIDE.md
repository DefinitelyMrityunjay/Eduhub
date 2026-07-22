# Content Guide — Where to Change Things

This site is a coded website (not a drag-and-drop builder), but almost everything you'll
ever want to update — text, phone numbers, universities, prices, testimonials — lives in
plain files you (or a developer) can edit directly. This guide points to exactly where.

**How to make a change, in short:**
1. Open the file mentioned below.
2. Edit the text between quotes (`'like this'` or `"like this"`) — don't touch anything
   outside the quotes unless you know what it does.
3. Save the file.
4. Run `npm run dev` to preview the change locally at `http://localhost:5173` before publishing.
5. When happy, commit and push to GitHub (`git add`, `git commit`, `git push`) — Vercel
   automatically rebuilds and publishes the live site within a minute or two of a push
   to the `main` branch.

If you're not comfortable editing code yourself, hand this file to any developer and they'll
know exactly where to go — no need to search the whole project.

---

## Quick Reference

| I want to change...                          | Go to |
|-----------------------------------------------|-------|
| Phone number / call-to-action links           | [Contact details](#contact-details) |
| Logo                                          | [Logo](#logo) |
| Site colors, fonts                            | [Colors & fonts](#colors--fonts) |
| Navigation menu (top bar)                     | [Navigation menu](#navigation-menu) |
| Homepage section order / what's shown         | [Homepage layout](#homepage-layout) |
| Countries we send students to                 | [Study destinations](#study-destinations) |
| Partner universities (logos row + grid)       | [Partner universities](#partner-universities) |
| Services (Career Counselling, Visa, etc.)     | [Services](#services) |
| Medical / MBBS programs                       | [Medical admissions](#medical-admissions) |
| MBBS seat matrix table                        | [Seat matrix](#seat-matrix) |
| Training & Placement page                     | [Training & Placement](#training--placement) |
| Language courses (IELTS, German, etc.)        | [School of Languages](#school-of-languages) |
| Student testimonials                          | [Testimonials](#testimonials) |
| "By the Numbers" stats (1000+ students, etc.) | [Statistics](#statistics) |
| Footer links, email, social media              | [Footer](#footer) |
| About Us page story/team                      | [About Us page](#about-us-page) |
| Consultation booking form / where bookings go | [Booking form](#booking-form) |
| Hero banner text/image on homepage            | [Homepage hero](#homepage-hero) |

---

## Contact Details

**File:** search for `+91` across `src/` — it currently appears in:
- `src/components/Hero.tsx`
- `src/components/Footer.tsx`
- `src/components/ConsultationCTA.tsx`
- `src/pages/CountryPage.tsx`

Each phone number appears twice near each other: once as a clickable link
(`href="tel:+917973303699"`) and once as the visible text (`+91 79733 03699`). **Change both**
— the `tel:` link has no spaces/symbols, the visible text can be formatted however you like.

The support email (`hello@tcaeduhub.com`) lives in `src/components/Footer.tsx`.

---

## Logo

**File:** `public/logo.png` — replace this file (keep the same filename) to swap the logo
image everywhere on the site.

Logo *size* is controlled separately in `src/components/Navbar.tsx` (the `<img>` tag's
`className`, e.g. `h-16 md:h-20`) and `src/components/Footer.tsx` (two logo instances — one
small, one large/faded in the background).

---

## Colors & Fonts

**File:** `src/index.css`, inside the `@theme { ... }` block near the top.

```css
--color-brand-bg: #F8F6F2;      /* page background */
--color-brand-text: #111111;    /* main text color */
--color-brand-muted: #555555;   /* secondary/gray text */
--color-brand-accent: #000000;  /* buttons, highlights */
--color-brand-hover: #222222;   /* hover state */
```

Change a hex code here and it updates across the *entire* site — every page uses these
same five values. The font (Inter Tight) is loaded at the very top of the same file.

---

## Navigation Menu

**File:** `src/components/Navbar.tsx`, the `menuItems` array near the top of the component.

Each top-level tab (Home, About Us, Services, Study Abroad, Medical, School of Language,
Training & Placement) is one object with a `name`, `href` (link target), and `subItems`
(the dropdown links). To add a new dropdown link, copy an existing line inside `subItems`
and change the `label` and `href`. To add a whole new top-level menu tab, copy one entire
`{ name: ..., href: ..., ... }` block.

---

## Homepage Layout

**File:** `src/App.tsx`

The homepage is just a list of sections in order:

```
Hero → Countries → Statistics → Services → UniversityShowcase → Testimonials → ConsultationCTA → Footer
```

To remove a section from the homepage, delete its `<ComponentName />` line (and its
matching `import` line at the top). To reorder sections, cut and paste the lines. Deleting
a line here does **not** delete the component's file or its content — it just hides it from
the homepage.

---

## Study Destinations

There are **two** places country info lives — update both when a country's details change:

1. **Homepage cards** — `src/components/Countries.tsx`, the `countries` array. Controls
   the flag, tuition range, work rights, post-study visa, and photo shown on the homepage
   grid.
2. **Full country page** (`/study/canada`, `/study/uk`, etc.) — `src/data/countriesData.ts`.
   Much more detailed: hero image, overview text, top universities, visa requirements,
   scholarships, cost of living, and more, per country.

To **add a brand-new country**, add an entry to both files using the same `slug` (e.g.
`'spain'`), then add a matching `<Route path="/study/:slug" ...>` — this already exists and
handles any slug automatically, so you don't need to touch `main.tsx`. You should also add
the country to the "Study Abroad" dropdown in `src/components/Navbar.tsx` and the
"Destinations" list in `src/components/Footer.tsx`.

Photos are hosted on Unsplash (free stock photo site) via direct image URLs — if a photo
ever shows blank/broken, it means Unsplash removed that photo ID; swap in a new
`https://images.unsplash.com/photo-...` URL from unsplash.com.

---

## Partner Universities

**File:** `src/components/UniversityShowcase.tsx` (this is the "World-Class Institutions"
section on the homepage — the image grid plus the scrolling name marquee).

- `universities` array (8 entries) — the featured grid with photos. Each has `name`,
  `country`, `rank` (a small label, e.g. "Top Partner"), and `image`.
- `marqueeNames` array — the full scrolling list of partner university names (no photos
  needed, just plain text).
- The stat line ("25+ university partners across 6 countries") is plain text just below
  the section heading in the same file — update the numbers here if the partner count
  changes.

---

## Services

**File:** `src/data/servicesData.ts` — one object per service (Career Counselling,
University Selection, Visa Documentation, etc.), each with a `slug` (used in the URL,
e.g. `/services/career-counselling`), tagline, intro paragraph, benefits, step-by-step
process, and a "why choose us" list. Adding a new object to this array automatically
creates a new page at `/services/<slug>` — no other file changes needed, though you should
still add it to the Services dropdown in `src/components/Navbar.tsx` and
`src/components/Footer.tsx` so people can find it.

---

## Medical Admissions

**File:** `src/data/medicalData.ts` — MBBS/BDS/BHMS/BAMS programs, both in India and
abroad (Uzbekistan, Georgia, Russia, USA, Kazakhstan, Germany). Same pattern as Services:
each entry has a `slug` that becomes its own page at `/medical/<slug>`.

---

## Seat Matrix

**File:** `src/data/seatMatrixData.ts` — the table of NEET/MBBS seat counts and fees shown
at `/seat-matrix`.

---

## Training & Placement

**File:** `src/data/trainingPlacementData.ts` — the whole `/training-placement` page:
overview, technical training domains (AI/ML, Data Science, Full Stack, etc.), placement
preparation steps, program benefits, and the 7-step journey. All plain text/arrays, no
special formatting needed.

---

## School of Languages

**File:** `src/pages/LanguagesPage.tsx` — IELTS/PTE/TOEFL test prep and language courses
(German, French, Japanese, English, Punjabi). Content is inline in this page file rather
than a separate data file.

---

## Testimonials

**File:** `src/components/Testimonials.tsx`, the `testimonials` array. Each entry is just
`name`, `role`, and `quote` — add, remove, or edit entries freely, the horizontal scroll
row handles any number of cards automatically.

---

## Statistics

**File:** `src/components/Statistics.tsx`, the `stats` array (the "1000+ Students Assisted",
"100+ University Partners" row on the homepage). Each entry has a `target` number (what it
counts up to), a `suffix` (`+`, `%`, etc.), a `label`, and a short `description`.

---

## Footer

**File:** `src/components/Footer.tsx`
- `destinations`, `services`, `company` arrays — the three link columns.
- Email/phone — near the top of the file, next to the logo.
- Social media names (Instagram, LinkedIn, YouTube, Facebook) are currently **plain text,
  not links** — if you want them clickable, a developer will need to add real profile
  URLs.
- The newsletter signup box is currently front-end only (it doesn't send anywhere yet) —
  if you want it to actually collect emails, it needs to be wired up the same way the
  booking form is (see below).

---

## About Us Page

**Files:**
- `src/pages/AboutUs.tsx` — page shell.
- `src/components/Storytelling.tsx` — the actual story/mission/team content shown on
  the About page.

---

## Booking Form

**File:** `src/components/ConsultationModal.tsx` — this is the "Book Consultation" popup
used across the whole site.

- Form fields (Name, Email, Phone, Target Country, Education Level, Message) are near the
  top of the file in `formData` / the `<input>`/`<select>` elements.
- **Where bookings go:** submissions are sent via [Web3Forms](https://web3forms.com) to
  whatever email address is registered on your Web3Forms account. The access key is the
  constant `WEB3FORMS_ACCESS_KEY` near the top of the file.
  - To change which inbox receives bookings, log into your Web3Forms dashboard
    (web3forms.com) and update the destination email there — you don't need to touch the
    code.
  - If you ever need to move to a brand-new Web3Forms account, generate a new access key
    on their site and paste it in place of the existing value in this file.
  - The `Target Country` and `Education Level` dropdown options live in the same file
    (`destinations` and `levels` arrays) — add or remove options there.

---

## Homepage Hero

**File:** `src/components/Hero.tsx` — the big banner text and background image at the very
top of the homepage. The background photo is a direct Unsplash URL near the top of the
file; the headline/subheading text is further down in the JSX.

---

## A Few Things to Know

- **No admin panel / CMS.** All content lives in the source code shown above — there's no
  separate login where you edit text through a web form.
- **Deploying:** the site is hosted on Vercel and connected to the GitHub repository at
  `github.com/DefinitelyMrityunjay/Eduhub`. Any push to the `main` branch auto-deploys —
  there's no manual "publish" button to click elsewhere.
- **Before publishing, run `npm run build`** — it type-checks the whole project and will
  loudly fail if something's broken (e.g. a missing quote or comma), which is much safer
  than finding out after it's already live.
- **Images** are mostly hosted on Unsplash rather than stored in this project. If you want
  to use your own real photos of campuses/universities instead of stock photos, replace
  the Unsplash URL with a path to an image you've added under `public/` (e.g.
  `/my-photo.jpg`).
