# Handoff: Jet Force Grease & Pipe Solutions — Marketing Website

## Overview

A 10-page marketing website for Jet Force Grease & Pipe Solutions, a Denver-area underground services company (hydro jetting, drain cleaning, grease trap service, sewer repairs, etc.). The site is positioned around trust and transparency — the headline differentiator is **"no down payment required"** alongside licensing/insurance and 24/7 emergency response.

- **Homepage** (`index.html`) — Hero, animated trust bar, 8-service grid, "Why Jet Force" split section, "Our Promise" trust section, service areas, CTA.
- **Contact page** (`contact.html`) — Full quote-request form with success state, contact info card, trust badges.
- **8 service pages** — Hydro Jetting, Sewer Camera Inspection, Drain Cleaning, Grease Trap Cleaning, Water Flood Extraction, Leak Detection, Sewer Repairs, Underground Pipe Services. Each is 600–800 words of SEO-targeted copy + 3 image slots + sidebar quote form + related-services rail + FAQ.

---

## About the Design Files

**The HTML files in this bundle are design references, not production code.** They show the intended look, layout, behavior, content, and motion design. Your task is to recreate this design in the project's existing codebase using its established framework, component library, and conventions.

If the target project has no frontend stack yet, choose what's appropriate — a static-site generator (Astro, 11ty, Hugo) is a strong fit for this marketing site since most pages are content-heavy and SEO-driven. React-with-routing or Next.js works equally well if there's any plan for dynamic features later. **Don't ship the prototype HTML directly** — it relies on runtime JS injection of nav/footer, which isn't SEO-friendly at scale.

The shared CSS file (`site.css`) can largely be lifted as-is into the new project, or translated into the codebase's styling system (CSS modules, Tailwind, styled-components, etc.).

---

## Fidelity

**High-fidelity.** All colors, type, spacing, hover/focus states, and motion specifications are final. Recreate pixel-perfectly. Copy is final and SEO-optimized — do not paraphrase service-page body content without sign-off from the business owner.

---

## Design Tokens

### Colors

```css
/* Brown — primary brand */
--br-950: #2A1508    /* darkest, used for very dark text */
--br-900: #3D2010    /* dropdown menus, deepest sections */
--br-800: #5A2E18    /* PRIMARY: header, page hero, dark cards */
--br-700: #7A4028    /* hover on dark backgrounds */
--br-400: #B87858    /* hover-state border accent */
--br-50:  #F8EFE4    /* alternate light bg */

/* Green — secondary brand (heavily used) */
--gr-800: #1F4A1C    /* PRIMARY hero background, CTA banner */
--gr-700: #2E6329    /* USP section, top accents, icon color */
--gr-50:  #E8F4E6    /* "Our Promise" section bg, icon backgrounds */
                     /* Green border accent: #C4DFC0 */

/* Yellow — accent / CTA */
--ye-700: #AA8000    /* hover state on yellow */
--ye-500: #D4A820    /* PRIMARY CTA button background, eyebrow labels */
--ye-300: #ECD880    /* phone-number hover */
--ye-50:  #FDFAE8    /* light yellow tint */

/* Neutrals — warm */
--nt-900: #3A2E20    /* body text */
--nt-700: #604E3C    /* secondary text */
--nt-500: #806050    /* muted text */
--nt-200: #E4D8BC    /* borders */
--nt-100: #EEE4CC    /* lighter border */
--nt-50:  #F8F0E0    /* PRIMARY page background (warm beige) */
--white:  #FFFFFF
```

### Typography

Fonts (Google Fonts):
- **Barlow Condensed** (400, 500, 600, 700, 800) — display / headlines
- **Barlow** (300, 400, 500, 600, 700) — body
- **Roboto Mono** (400, 500) — phone numbers, technical labels

Scale:
```
h1   clamp(2.25rem, 5vw, 3.75rem)  weight 800  lh 1.1   ls -0.02em  uppercase (in hero)
h2   clamp(1.75rem, 3.5vw, 2.5rem) weight 700  lh 1.1
h3   clamp(1.25rem, 2.5vw, 1.625rem) weight 700
h4   1.0625rem  weight 600  (uses body font, not display)
Body 1rem  weight 400  lh 1.65
Sm   0.875rem
Xs   0.75rem
Mono 0.875rem  letter-spacing 0.02em
Eyebrow .6875rem  weight 700  letter-spacing .16em  uppercase  color --ye-500
```

### Spacing

8px grid. Container max-width 1200px with 24px horizontal padding. Sections use 88px vertical padding (56px on mobile), 56px for compact sections, 112px for emphasized.

### Radius & Shadows

```
--r: 4px              (default radius on cards, buttons, inputs)
--sh1: 0 2px 8px rgba(42,21,8,.08)    (cards at rest)
--sh2: 0 6px 20px rgba(42,21,8,.14)   (cards on hover)
```

### Header height: 72px desktop / 64px mobile (fixed)

---

## Screens / Views

### 1. Homepage (`index.html`)

#### Layout
Single column, full-bleed sections stacked vertically. Each section uses the 1200px container internally.

#### Sections (top to bottom)

**Header (fixed, all pages)**
- Fixed top, height 72px, `background: #5A2E18`
- On scroll past 30px: `background: rgba(58,30,14,.97)` + `backdrop-filter: blur(8px)` + bottom shadow
- Left: 38px-tall white logo
- Center-left: nav links — "Services ▾" (dropdown), "Why Jet Force", "Service Areas", "Contact"
  - Style: Barlow 11px 600 weight, letter-spacing .08em, uppercase, color `rgba(255,255,255,.65)`
  - Hover/active: color → `#D4A820`
- Right: phone number (Roboto Mono 13px, color `#D4A820`) + "GET A QUOTE" button (yellow bg, brown text)
- Services dropdown: opens on hover, dark brown bg (`#3D2010`) with yellow 2px top border, 230px wide, 8-item list

**Hero (homepage only)**
- `min-height: 90vh`, `background: #1F4A1C` (forest green)
- Diagonal-stripe overlay: `repeating-linear-gradient(-55deg, transparent, transparent 48px, rgba(255,255,255,.018) 48px, rgba(255,255,255,.018) 49px)`
- Container content centered vertically, padding 80px 0
- Yellow eyebrow: "DENVER'S UNDERGROUND SPECIALISTS"
- H1: "Grease Traps. *Drain Lines.* Broken Pipes." (uppercase, Barlow Condensed 800, clamp(2.5rem, 6vw, 5rem), line-height 1.08, white with the middle phrase in yellow `#D4A820`)
- Subtitle paragraph in `rgba(255,255,255,.65)`, 18px, max-width 520px
- Two CTAs: primary yellow "Get a Free Quote" + ghost-white "(555) 555-5555" with phone icon
- Trust row: 4 checkmark items in muted white

**Trust Bar** (animated)
- White background, full-bleed, 1px bottom border `#E4D8BC`
- 4-column grid, each cell 24px padding with 1px right border
- Each cell: 44×44 green-tinted icon square (`#E8F4E6` bg, `#2E6329` icon) + value text (Barlow Condensed 26px 800 in brown `#5A2E18`) + label (12px Barlow 500 in muted brown)
- **Values & animations** (triggered when section enters viewport, threshold 0.3, items stagger 150ms apart, each runs once):
  - "24/7" — Counts 0 → 24, then "/7" fades in (300ms opacity transition)
  - "$0" — Pop-in animation (scale .65 → 1.1 → 1, 650ms)
  - "100%" — Counts 0 → 100 with "%" suffix
  - "Denver" — Typewriter, 85ms per character
- Item entrance: `fadeUp` (translateY 20px + opacity 0 → 0, 500ms ease) applied via stagger

**Services Section**
- Background `#F8F0E0` (warm beige), 88px vertical padding
- Yellow eyebrow "WHAT WE DO"
- Section header row: H2 "Everything Underground, Under One Roof" (left, max 460px) + supporting paragraph (right, max 380px, muted)
- 4×2 grid of 8 service cards, 18px gap
  - Card: white bg, 1px border `#E4D8BC`, 3px transparent top border, 4px radius, 26px 22px padding, sh1 shadow
  - Card hover: top border → yellow, sh2 shadow, translateY(-3px)
  - Icon swap on hover: bg yellow `#D4A820` (was yellow-50), icon dark brown `#2A1508` (was yellow-700)
  - Card structure: icon square + service name (Barlow Condensed 17px 700) + 1-line description (14px muted) + "LEARN MORE >" link
- **Card stagger animation**: as each card enters viewport (threshold 0.06), `fadeUp 450ms` with stagger 0ms/90ms/180ms/270ms based on column position

**Services list (all 8)**:
1. Hydro Jetting — `<polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>` (zap)
2. Sewer Camera Inspection — camera Lucide icon
3. Drain Cleaning — wrench Lucide icon
4. Grease Trap Cleaning — droplets Lucide icon
5. Water Flood Extraction — waves (3 wave paths)
6. Leak Detection — magnifier (circle + line)
7. Sewer Repairs — wrench (same as drain cleaning)
8. Underground Pipe Services — layers (stacked polygons)

**Why Jet Force (USP Split)** — `id="why-us"`
- Two-column grid, 5fr/7fr
- Left: green panel `#1F4A1C`, 72px 48px padding, white H2 "Denver's Only All-in-One Underground Provider", muted paragraph
- Right: white panel, 72px 56px padding, intro paragraph + 2-column checklist of 8 services with yellow checkmarks + brown "Request a Free Estimate" button

**Our Promise** — animated entrance
- Background `#E8F4E6` (light green), 1px green borders top + bottom (`#C4DFC0`)
- Yellow eyebrow "OUR PROMISE TO YOU" + H2 + supporting paragraph
- 3-column grid of trust cards
- Each card: white bg, 1px border, 3px green `#2E6329` top accent, green-tinted icon, h4 + paragraph
- **Animation**: each card stagger-fades up as section enters viewport (110ms apart, fadeUp 500ms)

**Service Areas** — `id="areas"`
- White bg, 1px top border
- H2 + paragraph + flex-wrap of 15 area pills
- Pill: 1.5px border `#E4D8BC`, 3px radius, 7px 16px padding, hover → border `#B87858`

**CTA Banner** (all pages — injected by site.js)
- Dark green bg `#1F4A1C`, 80px vertical padding
- Yellow accent rule + white H2 + muted subtitle + right-aligned phone display (mono 24px yellow) + yellow "Get a Free Quote" button

**Footer** (all pages — injected by site.js)
- Background `#2A1508` (darkest brown), 64px top padding
- 4-column grid: brand block / Services links / More Services links / Service Areas
- Brand block: 40px logo, about paragraph, map-pin row + phone row (Roboto Mono 12px)
- Link columns: 11px uppercase title `rgba(255,255,255,.28)` + 14px links `rgba(255,255,255,.45)`, hover yellow
- Bottom row: copyright + "Licensed & Insured in Colorado" with shield icon

---

### 2. Contact Page (`contact.html`)

**Page Hero**
- Background `#5A2E18` (brown), 56px top / 52px bottom padding
- Breadcrumb: "Home > Contact"
- H1 "Request a Free Quote"
- Subtitle paragraph

**Main**
- 2-column layout, 3fr/2fr, 56px gap

**Left (form)**
- H3 "Tell Us About Your Project"
- 2-column field grid: Full Name, Company/Property, Phone, Email
- Full-width: Service Needed (select), Property Address, Describe the Issue (textarea)
- Yellow callout banner: shield icon + "No down payment required — you pay only when the job is done and you're satisfied."
- Full-width yellow Submit button
- On submit: hide form fields, show green-bg success card with checkmark, headline, callback timing message

**Right (info column)**
- Brown card with 3 info rows (phone, location, hours), each with yellow-tinted square icon + Roboto Mono main text + muted sub-text
- Beige trust card below: 3 rows with yellow-700 icons + bold heading + light muted text covering license, no-down-payment, response time

---

### 3. Service Pages (8 pages — same template)

**Page Hero** (same pattern as contact)
- Brown bg, breadcrumb, H1 "[Service Name] in Denver, CO", subtitle

**Main**
- 2-column layout, `1fr / 340px`, 56px gap

**Left article column**
- Intro: 2 paragraphs
- Image grid: 2 columns of placeholder images, 240px tall, 4px radius
- H2 "How [Service] Works" + 2-paragraph process explanation
- H2 "Signs You Need This Service" + bulleted list (6 items)
  - Bullet style: 20×20 yellow-tinted square with yellow checkmark inside, then text
- Single wide image placeholder, 300px tall
- H2 "Why Choose Jet Force" + 2-paragraph commitment
- H2 "Frequently Asked Questions" + 3 FAQ items
  - Each FAQ: 1px top/bottom border, 18px vertical padding, Barlow Condensed question (1.125rem 600 brown), Barlow answer (.9375rem darker muted)

**Right sidebar** (sticky, top: 92px)
- White card with sh1 shadow
- Brown header bar: H3 "Get a Free Quote" + small descriptive paragraph
- Body: Name, Phone, Email, Service Needed (pre-filled for this page), Message fields
- Yellow Submit button
- Outline phone-number button below
- 3-item trust list at bottom: green checkmarks + "No down payment required" / "Licensed & insured in Colorado" / "24/7 emergency response"

**Related Services**
- Beige bg, 1px top border
- Eyebrow + H2 "Related Services" + supporting paragraph
- 3-column grid showing 3 random non-current service cards (use same card component as homepage)

**CTA Banner** (shared)

**Footer** (shared)

---

## Interactions & Behavior

### Header
- Scroll: when `window.scrollY > 30`, header gains `scrolled` class (background opacity change + blur + shadow). Smooth 200ms.
- Services dropdown: opens on hover/focus-within. 180ms opacity + translateY transition.
- Mobile (`<= 768px`): nav links + actions hidden, hamburger appears. Toggle opens full-width mobile drawer below header.

### Animations on homepage (motion-design specs)

**Easing**: cubic ease-out for count-up (`1 - Math.pow(1 - p, 3)`); browser default `ease` for all CSS transitions.

**Trust bar count-up**:
```js
function countUp(el, target, suffix, onDone) {
  const dur = 1500, s = performance.now();
  (function step(now) {
    const p = Math.min((now - s) / dur, 1);
    const e = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(target * e) + (suffix || '');
    if (p < 1) requestAnimationFrame(step);
    else if (onDone) onDone();
  })(s);
}
```

**Typewriter** (Denver): 85ms per character.

**Pop-in** ($0): keyframes `0% {scale .65, opacity 0} 55% {scale 1.1} 100% {scale 1, opacity 1}`, 650ms.

**Fade-up**: `from {opacity 0, translateY 20px} to {opacity 1, translateY 0}`, 500ms ease.

**Triggers**: all via `IntersectionObserver` with `threshold: 0.3` (trust bar), `0.06` (cards), `0.15` (trust points). Each runs once (`obs.unobserve` or `obs.disconnect`).

**Initial state**: animated elements start `opacity: 0` so there's no flash before the observer fires.

**Stagger**:
- Trust bar items: 150ms apart
- Service cards: 0/90/180/270ms based on grid column (`i % 4 * 90`)
- Trust points: 110ms apart

### Service card hover
- 180ms ease transition
- Top border transparent → `#D4A820`
- Box-shadow sh1 → sh2
- `translateY(-3px)`
- Icon square: bg yellow-50 → yellow-500, icon color yellow-700 → near-black
- "Learn More" link color → yellow-700

### Forms
- All fields use `f-input` style: beige bg, 1.5px border, 4px radius, 9px 12px padding, 15px Barlow text
- Focus: border → brown-700, background → white
- Select uses custom data-URI chevron background
- Submit: prevent default, hide `[data-fields]`, show `[data-succ]` block

### Mobile responsive

```css
@media (max-width: 1100px) {
  /* Services grid: 4col → 2col */
  /* Trust bar: 4col → 2col */
  /* Footer: 4col → 2col */
  /* USP split: 2col → 1col stacked */
  /* Service page layout: 2col → 1col, sidebar becomes static */
}

@media (max-width: 768px) {
  /* Header: 72px → 64px */
  /* Nav links/actions hide, hamburger shows */
  /* All image grids → 1col */
  /* Trust points → 1col */
  /* CTA banner: row → column centered */
  /* Section padding: 88px → 56px */
}

@media (max-width: 480px) {
  /* Services grid: → 1col */
  /* Trust bar: 2col still, with horizontal border separators */
  /* Hero buttons stack */
}
```

---

## State Management

Minimal. Per-page state only:
- Header `scrolled` boolean
- Mobile nav `open` boolean
- Per-form `submitted` boolean (hide fields, show success)
- Animation observers tracked once, then disconnected

No global state, no routing state, no auth. This is a marketing site — implement with the codebase's lightest reasonable approach.

---

## SEO Requirements

Every page must include:
- Unique `<title>`: `[Page Name] in Denver, CO | Jet Force Grease & Pipe Solutions`
- Unique `<meta name="description">` (under 160 chars, includes primary keyword and "Denver")
- Open Graph tags (title, type, description)
- LocalBusiness or Service Schema.org JSON-LD (see prototype HTML for exact structure — includes name, telephone, address `addressLocality: "Denver"`, `addressRegion: "CO"`, `areaServed`)

Service page schemas use `@type: Service` with the LocalBusiness as `provider`.

Heading hierarchy is strict: one H1 per page (page hero), H2 for major sections, H3 for subsections within. Don't break this.

---

## Content / Copy

All body copy on the 8 service pages is final and SEO-targeted (each is 600–800 words, hitting the primary service keyword + "Denver" naturally). **Do not paraphrase or shorten** these without business approval — they're tuned for search ranking.

Placeholder values to replace before launch:
- Phone number `(555) 555-5555` — replace with real number (also update `tel:5555555555` href everywhere)
- Address `Denver, CO Metro Area` / "Denver, CO" — confirm with business
- Service area list (15 metro communities) — confirm coverage area

Defined in `site.js` at the top:
```js
const JF = {
  phone:     '(555) 555-5555',
  phoneHref: 'tel:5555555555',
  location:  'Denver, CO Metro Area',
  year:      new Date().getFullYear(),
};
```

---

## Assets

- `assets/logo.svg` — full-color logo (white pages)
- `assets/logo-white.svg` — white version (used in header and footer)
- Image slots (3-4 per service page) — user-drag-and-drop placeholders in the prototype. In production, replace with real `<img>` tags. Each slot has a `placeholder` attribute describing the intended image (e.g., "Hydro jetting technician connecting high-pressure hose to outdoor cleanout"). Image dimensions per slot:
  - Two-up grid images: 100% × 240px
  - Wide image (after "Signs You Need"): 100% × 300px

Recommend AI-generated or stock photos showing real underground/plumbing work — avoid generic "happy worker" stock photos. The brand voice is earthy and capable, not corporate.

---

## Icons

All icons are inline SVG using Lucide-style paths (24×24 viewBox, stroke-based, `stroke-linecap="round"`, `stroke-linejoin="round"`). Either:
- Lift the inline SVG strings as a reusable `<Icon name="phone" />` component (paths catalogued in `site.js`), or
- Install Lucide and reference by name (`lucide-react`, `lucide-vue`, etc.) — same path set.

---

## Files in this handoff

```
design_handoff_jet_force_website/
├── README.md            ← you are here
├── site.css             ← shared stylesheet, can be lifted directly
├── site.js              ← nav/footer HTML generators + animation logic (for reference)
├── index.html           ← homepage prototype
├── contact.html         ← contact page prototype
├── hydro-jetting.html   ← service page prototypes (×8)
├── sewer-camera-inspection.html
├── drain-cleaning.html
├── grease-trap-cleaning.html
├── water-flood-extraction.html
├── leak-detection.html
├── sewer-repairs.html
├── underground-pipe-services.html
├── image-slot.js        ← dev-only drag-drop placeholder, NOT for production
└── assets/
    ├── logo.svg
    └── logo-white.svg
```

---

## Implementation Checklist

- [ ] Choose framework + set up project
- [ ] Port design tokens (colors, fonts, spacing) into the codebase's styling system
- [ ] Build `<Header>` and `<Footer>` components (these are injected at runtime in the prototype — render server-side / build-time in production)
- [ ] Build `<ServiceCard>` component (used on homepage grid + related-services rail)
- [ ] Build `<QuoteForm>` component (sidebar form on service pages + contact page main form share the same structure)
- [ ] Build all 10 pages with proper SEO meta + Schema.org
- [ ] Implement scroll-triggered animations on homepage (trust bar count-up, typewriter, pop-in, fade-up staggers)
- [ ] Implement mobile hamburger nav
- [ ] Replace dummy phone/address with real values
- [ ] Replace image slots with real images
- [ ] Test responsive at 480px, 768px, 1100px breakpoints
- [ ] Wire form submissions to real backend (currently no-op + success state in prototype)
- [ ] Verify Lighthouse SEO / Accessibility / Performance scores
