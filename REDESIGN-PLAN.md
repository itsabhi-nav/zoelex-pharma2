# Zoelex Pharma — Local Redesign Plan

> **Status:** planning → implementation in progress
> **Constraint:** local only. Do **not** commit or push. The user will review on `localhost`.
> **Goal:** a cinematic, premium, slightly futuristic site for a nutraceutical contract manufacturer. Professional first, “crazy” second. No AI-slop tells.

---

## 0. How to run / verify

```bash
cd /Users/Abhinav/Downloads/personal--/zoelex
npm run dev        # http://localhost:3000
npm run lint
npm run build
```

No git commands that push. Keep all changes local.

---

## 1. What exists today (pre-flight)

- **Framework:** Next.js 16.4.3 (App Router), React 19, Tailwind CSS v4, Framer Motion 14, Lenis, lucide-react.
- **Pages:** `/`, `/about`, `/about/founder`, `/technologies`, `/manufacturing`, `/global`, `/contact`, `/privacy-policy`, `/terms-of-use`, `not-found`.
- **Design today:** warm bone/plum editorial, Bodoni Moda + Inter Tight, thin rules, sticky image swaps, parallax. Tasteful, but safe; sections repeat the same “label + big serif + list” rhythm.
- **Content:** all real copy lives in `lib/site.ts` (formats, categories, capabilities, quality steps, process, values, why, buyers, FAQs, founder, legal). **Keep this content factual. Do not invent metrics, clients, testimonials, logos or a founder photo.**
- **Images:** mixed quality. Some are great (`gummies-macro`, `softgels-marble`, `turmeric`, `orange-macro`, `gummies-spill`). Some are weak/mismatched (`lab-interior` is a Rohto factory, `lab-equipment` is a blue-backdrop stock photo, `droplets` is a leaf). New Pexels images have been added (see § 6).
- **Existing motion:** `Reveal`, `MaskReveal`, `MaskLines`, `SplitWords`, `WordReveal`, `ParallaxImage`, Lenis, scroll progress line, sticky capability image, process progress line. Reuse these patterns.

---

## 2. Direction

### Concept: **“The Dose, Reimagined” — a formulation atelier**

The site should feel like a high-end lab / fashion house hybrid: near-black surfaces, warm bone type, copper light, macro product photography, thin technical rails, huge serif headlines, and horizontal “swipe” panels. It must still read as a credible GMP/FSSAI/GLP manufacturer, not a crypto landing page.

### Palette

| Token | Value | Use |
|---|---|---|
| `--color-ink` | `#0B0A08` | primary dark surface |
| `--color-ink-2` | `#12100C` | raised dark |
| `--color-ink-3` | `#191510` | dark card / panel |
| `--color-plum` | `#17130F` | legacy alias → dark surface |
| `--color-plum-2` | `#1E1913` | legacy alias |
| `--color-bone` | `#F4EEE2` | light surface / dark-section text |
| `--color-bone-2` | `#E8DECE` | light alternate surface |
| `--color-bone-3` | `#D7C9B4` | image placeholders |
| `--color-ember` | `#E2703A` | primary accent / CTA / key words |
| `--color-ember-2` | `#F08A54` | hover / glow |
| `--color-coral` | `#C9552E` | errors / deep accent |
| `--color-sage` | `#A9BFA0` | quality / certification accent |
| `--color-signal` | `#D8F26A` | rare “live” micro-accent (dot, tick) |
| `--color-mute` | `#8B8175` | muted text |

**Rules**
- Ember is the only primary action colour. Sage/signal are micro-accents, never large fills.
- No purple/blue gradients. No rainbow gradients. One warm radial glow is allowed in the hero.
- Light and dark sections alternate. Every page starts dark.

### Type

- **Display:** `Bodoni Moda` (already loaded) — huge, tight, editorial. No single italic word inside a roman heading; use colour or full-line emphasis instead.
- **Body/UI:** `Inter Tight` (already loaded).
- **Technical labels:** `IBM Plex Mono` (new, `next/font/google`) — 10–12px, uppercase, tracking `0.12em`. Used for indices, spec labels, metadata. This is the “lab” material, so mono is deliberate, not decoration.
- Body 16px minimum. Headlines one weight, one colour per block.

### Shape & surfaces

- Sharp image/card corners (`2px`). Pill buttons are the one rounded element.
- Thin 1px rules; no drop-shadow card stacks. No card-inside-card.
- Images are big and treated: warm saturation, slight contrast. Dark sections use `img-duo` (duotone) or a gradient scrim.
- Container capped at `96rem`, centred. Gutters grow on large screens.
- `overflow-x: clip` on `html` and `body`; never `100vw` widths.

### Motion

- Keep Lenis smooth scroll. Respect `prefers-reduced-motion`.
- Transform/opacity only. Never animate width/height/top/left. No `transition: all`.
- **Hero:** mask-line headline reveal, image clip reveal, pointer spotlight, specimen carousel auto-advance, subtle pointer tilt.
- **Marquee:** infinite format strip (CSS transform animation, paused on hover, disabled for reduced motion).
- **Formats:** horizontal snap-scroll rail with arrow controls and a progress bar. This is the “swipe” moment.
- **Quality / process:** scroll-linked progress lines and active-step highlighting.
- **Capabilities / categories:** hover/focus swaps a sticky image; mobile falls back to a clean list.
- **Page transition:** existing fade/slide is fine; add a thin ember sweep if cheap.
- All motion must have a static/reduced fallback and content visible without JS.

### Anti-slop checklist (hard)

- [ ] No purple→blue gradient, no generic glassmorphism cards, no bento grid of rounded boxes.
- [ ] No emoji icons, no fake logos/testimonials/metrics, no fake founder portrait.
- [ ] No tracked-caps “eyebrow” on every section. Use mono index labels sparingly (`01 / FORMATS`).
- [ ] No middle-dot meta strings in prose. Use real sentences or a spec rail.
- [ ] No `transition: all`; no width/height/top/left animation.
- [ ] No card inside a card; no two photo-led sections in a row.
- [ ] Hero headline, one sentence and primary action visible at 1280×800.
- [ ] Every interactive element has an instant `:focus-visible` ring.
- [ ] One primary button style, one container width, one column gap.
- [ ] All images have meaningful alt text and an “illustrative only” note where needed.

---

## 3. Page-by-page plan

### Global shell

**`app/layout.tsx`**
- Add `IBM_Plex_Mono` font variable.
- `themeColor` → `#0B0A08`, `colorScheme` → `dark light`? Use `dark` for browser chrome; site is mixed.
- Keep metadata/JSON-LD. Update OG image to new palette.
- Body class: `bg-ink text-bone`? No — default body should be bone for light sections. Use `bg-bone text-ink`, and dark sections opt in with `.surface-dark`. Header is always dark-glass after scroll.
- Keep skip link, SmoothScroll, MotionProvider, Header, Footer, WhatsApp FAB, grain.

**`app/globals.css`**
- Replace `@theme inline` tokens with the new palette.
- Add `.surface-dark` that sets background/color and overrides `--line`, `--line-strong`, `--line-light`.
- Add `.mono-label`, `.btn` (pill), `.btn-ember`, `.btn-outline`, `.btn-outline-light`, `.btn-bone`, `.link-arrow`.
- Add `.marquee`, `.marquee-track`, `@keyframes marquee`.
- Add `.text-stroke` (outlined display type), `.signal-dot`, `.hairline`, `.img-frame` variants, `.img-warm`, `.img-duo`, `.img-mono`.
- Update form fields for both light/dark surfaces.
- Keep `.grain` (subtle), `.shell`, `.shell-narrow`, `.display`, `.display-tight`, `.rule`.
- Ensure `html, body { overflow-x: clip; }`.
- Reduced-motion block: kill marquee and smooth scroll; keep content visible.
- Scrollbar: dark track/thumb.
- Selection: ember.

**`components/layout/header.tsx`**
- Fixed, transparent at top (bone text, since all heroes are dark).
- On scroll: `bg-ink/75 backdrop-blur-xl border-b border-[var(--line-light)]`.
- Logo: bone; ember dot.
- Desktop nav: 12px body face, active underline; CTA pill.
- Add a small mono `PUNE · INDIA` label next to the nav (desktop only).
- Mobile: full-screen dark overlay, huge serif links, background image at low opacity, contact details. Add body scroll lock (already).
- Scroll progress line stays ember.

**`components/layout/footer.tsx`**
- Dark. Big CTA block: “A manufacturing partner for your next product.” + email/phone + buttons.
- Add a format marquee strip.
- Grid: logo + address, Explore, More, Contact, hours, WhatsApp.
- Huge outlined `ZOELEX` wordmark at the bottom (decorative, `aria-hidden`).
- Legal row + disclaimer + “Photography via Pexels; illustrative only.”
- Back to top.

**`components/sections/page-hero.tsx`** (subpage hero)
- Dark, full-bleed. Optional background image with gradient scrim.
- Kicker as mono label, huge display title, lede, meta rail.
- Image: either a right-side portrait/landscape panel or a full-bleed strip below the copy. Support `image` + `imageClassName` + optional `imagePosition`.
- Add a thin “spec rail” under the hero with meta items.
- Keep `children` slot for CTAs.

**`components/sections/section-head.tsx`**
- Support `index` (mono), `label`, `title`, `copy`, `dark`, `align`.
- Use a thin rule + index instead of an eyebrow. Keep it flexible.

**`components/sections/page-nav.tsx`**
- Dark or bone-2 depending on context; big serif links, arrow circle, hover fill.
- Add index numbers.

**`components/ui/accordion.tsx`**
- Keep accessible button/aria-expanded. Update styling for light/dark, mono index, plus/minus rotation.
- Add `surface` prop? Simpler: CSS handles `.surface-dark` colors; keep `light` prop but restyle.

**`components/contact-form.tsx`**
- Keep all logic (mailto, validation, deep links, copy email).
- Restyle: bone panel, mono labels, bottom-border fields, ember focus, coral errors, pill submit.
- Add a small “24–48 h response” note and a WhatsApp fallback.
- Ensure `aria-invalid`, error text, focus states.

**`components/sections/legal-page.tsx`**
- Dark hero strip (label + title + updated date + intro).
- Light content with sticky TOC, larger reading measure, ember links.
- CTA card at the end.

**`app/not-found.tsx`**
- Dark full-screen. Huge outlined `404`, display headline, copy, two actions, quick links.
- Add a marquee “LOST / FOUND” or format strip at the bottom.

---

### Home (`app/page.tsx`)

1. **Hero** (`components/sections/home-hero.tsx` — rewrite)
   - Dark, full viewport (min 92svh).
   - Left: mono location label, huge “A manufacturing partner for your next product.”, one sentence, primary + secondary CTA, scroll cue.
   - Right: **FormatSpecimen** — auto-cycling image card (4 formats), big index, format name, short line, tick controls, corner crosshairs, subtle pointer tilt. This is the signature.
   - Bottom: spec rail with 4 real facts: Four formats · GMP/FSSAI/GLP · 24–48h response · Pune, India.
   - Pointer spotlight (desktop, fine pointer only).
2. **Marquee strip** — `GUMMIES ✳ THIN FILMS ✳ SOFTGELS ✳ LIPOSOMAL` on ember or ink.
3. **Manifesto** (bone)
   - `WordReveal` statement: “A manufacturing partner for brands that care how the product feels, tastes and travels.”
   - 3-image collage with parallax: gummies macro, lab pipette, amber bottle.
   - Small copy + “About Zoelex” link.
4. **Formats** (dark) — `FormatRail`
   - Sticky/left heading + arrow controls + progress bar.
   - Horizontal snap rail of 4 panels. Each: image (4/5), index, name, short, 3 bullets, CTA.
5. **Capabilities** (bone) — rewrite `CapabilityList`
   - Interactive list of 6 services + sticky image that swaps.
   - Mono indices, ember active line, image caption with current service.
6. **Quality** (dark)
   - Sticky left: label, headline “Checked at every stage. Documented at every step.”, copy, certs.
   - Right: 5 quality steps with scroll progress line.
   - Bottom: huge outlined `GMP / FSSAI / GLP` strip.
   - Use `cleanroom.jpg` or `lab-pipette.jpg` as a scrim background.
7. **Process** (bone) — rewrite `ProcessTimeline`
   - Sticky left: active step index + title + image that crossfades.
   - Right: 6-step timeline with progress line.
8. **Categories** (bone-2) — `CategoryIndex`
   - Desktop: 10-row index, hover/focus shows a large sticky image + ideas + formats.
   - Mobile: rows expand/stack; keep it scannable.
9. **Export** (dark, full-bleed `cargo-aerial.jpg`)
   - Big “Made here. Shipped anywhere.” + copy + CTA.
   - Add a destination/spec rail; no invented market claims.
10. Footer (global).

### About (`app/about/page.tsx`)

1. Dark `PageHero`: “A manufacturing partner for brands that care.” + image collage (lab team / turmeric). Meta rail.
2. **Who we are** (bone): big statement + copy + amber bottle / gummies image. CTA.
3. **Purpose** (dark): Vision quote large; Mission as numbered list. Add a thin vertical rule.
4. **Values** (bone): 5 large rows with index, title, copy; hover fills a line; active row ember.
5. **Why Zoelex** (dark): 7 items in a 2/3-column grid with big numbers. No fake logos.
6. **Founder** (bone): initials card over `lab-pipette` image, large quote, link.
7. **How we work** (bone-2): 4 steps, large numbers.
8. **Careers** (dark): big headline, email CTA, roles list.
9. `PageNav`.

### Technologies (`app/technologies/page.tsx`)

1. Dark `PageHero`: “Four formats. One partner.” + `gummies-macro` / `softgels-gold`.
2. Sticky format nav (dark glass) with anchors + “Start an enquiry”.
3. **Format sections** — alternating dark/bone full-bleed editorial blocks:
   - Huge index `01–04`, image (portrait), name, short, summary, bullets, category tags, CTA.
   - Use `ParallaxImage` and reveal.
   - Alternate image side.
4. **Category index** — reuse `CategoryIndex` (bone-2).
5. **Custom formulation CTA** (dark) — “Have a different idea?” + button.
6. `PageNav`.

### Manufacturing (`app/manufacturing/page.tsx`)

1. Dark `PageHero`: “From formulation to finished pack.” + `production-line` / `cleanroom`.
2. **Services** (bone): 6 capabilities as large numbered rows/cards with hover image? Use a 2-col list with mono indices, title, copy, and a small image on hover (desktop). Keep it editorial, not a generic icon grid.
3. **Infrastructure** (dark): big image + 3 items; add a spec panel (“Four formats · controlled zones · in-house QC”).
4. **Quality** (bone or dark): certs + 5 steps + link. Use the same quality scrolly pattern as home but lighter.
5. `PageNav`.

### Global (`app/global/page.tsx`)

1. Dark `PageHero`: “Made in India. Delivered worldwide.” + `cargo-aerial` / `cargo-sunset`.
2. **Intro** (bone): split with a map/route visual. Use `cargo-sunset` or a custom dotted route SVG. Copy: destination requirements reviewed per enquiry. CTA.
3. **Buyers** (dark): 8 profiles as a large two-column index with arrows; no fake logos.
4. **Steps** (bone): 4 market steps with big numbers.
5. **CTA** (dark): “Tell us the destination.”
6. `PageNav`.

### Contact (`app/contact/page.tsx`)

1. Dark `PageHero`: “Start a product enquiry.” + `liquid-drop` / `product-dropper`. Meta rail (response time, phone, email, hours).
2. **Form + contact card** (bone): 8/4 grid. Form restyled; dark contact card with phone/WhatsApp/email/address/hours/maps.
3. **FAQ** (bone-2): sticky heading + accordion.
4. Footer.

### Founder (`app/about/founder/page.tsx`)

1. Dark `PageHero`: “Meet Vidhatri Singh.” + `lab-pipette` / `softgels-gold` (no fake portrait). Meta rail.
2. **Story** (bone): initials card over abstract image + intro + quote + facts.
3. **Focus** (dark): 3 focus areas as large rows.
4. **Statement** (dark, full-bleed): big quote + signature block.
5. `PageNav`.

### Legal (`/privacy-policy`, `/terms-of-use`)

- Dark hero strip, light reading layout, sticky TOC, updated date, contact CTA. Keep content.

### 404

- Dark full-screen, huge outlined `404`, display headline, two actions, quick links.

---

## 4. Components to add / change

### New

- `components/ui/marquee.tsx` — infinite CSS marquee, `items`, `speed`, `separator`, `className`; duplicate content `aria-hidden`; pause on hover; reduced-motion fallback.
- `components/ui/cursor-glow.tsx` — pointer-follow radial glow for the hero; fine-pointer + reduced-motion guard.
- `components/ui/tilt.tsx` — optional pointer tilt wrapper (rotateX/rotateY) for the hero specimen.
- `components/sections/format-specimen.tsx` — auto-cycling hero carousel.
- `components/sections/format-rail.tsx` — horizontal snap-scroll formats with arrow controls + progress.
- `components/sections/category-index.tsx` — interactive 10-category index with sticky preview.
- `components/sections/quality-scrolly.tsx` — reusable quality section (home + manufacturing) with progress line and cert strip.
- `components/sections/spec-rail.tsx` — small reusable metadata rail (label/value) for heroes.

### Rewrite / restyle

- `app/globals.css`
- `app/layout.tsx`
- `app/page.tsx`
- `app/about/page.tsx`
- `app/about/founder/page.tsx`
- `app/technologies/page.tsx`
- `app/manufacturing/page.tsx`
- `app/global/page.tsx`
- `app/contact/page.tsx`
- `app/not-found.tsx`
- `app/opengraph-image.tsx`
- `components/layout/header.tsx`
- `components/layout/footer.tsx`
- `components/sections/home-hero.tsx`
- `components/sections/page-hero.tsx`
- `components/sections/section-head.tsx`
- `components/sections/page-nav.tsx`
- `components/sections/capability-list.tsx`
- `components/sections/process-timeline.tsx`
- `components/sections/legal-page.tsx`
- `components/contact-form.tsx`
- `components/ui/accordion.tsx`
- `components/ui/parallax-image.tsx` (add `tone`, `priority`, `sizes` already exist)
- `components/ui/reveal.tsx` (keep, maybe add `clip` variant)
- `lib/site.ts` (add `photoCredits`; optional category image map; keep all copy)

### Keep / reuse

- `components/smooth-scroll.tsx`
- `components/providers/motion-provider.tsx`
- `components/ui/word-reveal.tsx`
- `components/ui/whatsapp-fab.tsx` (restyle to match)
- `lib/use-prefers-reduced-motion.ts`
- `lib/utils.ts`
- `app/template.tsx` (maybe add ember sweep)

---

## 5. Image plan

### New Pexels assets (already downloaded to `public/images/`)

| File | Subject | Use |
|---|---|---|
| `product-amber.jpg` | amber supplement bottle on orange | packaging / formats / about |
| `product-dropper.jpg` | amber dropper bottle | liposomal / contact |
| `gummies-color.jpg` | colourful gummies, portrait | gummies / categories |
| `softgels-gold.jpg` | golden softgels on grey | softgels |
| `softgels-dark.jpg` | capsules on dark | softgels / texture |
| `film-membrane.jpg` | translucent green film | oral thin films |
| `film-strip-blue.jpg` | blue thin strip on paper | OTF detail (optional) |
| `lab-pipette.jpg` | gloved hand pipetting, dark | quality / founder / R&D |
| `lab-team.jpg` | two scientists at a microscope | about / manufacturing |
| `lab-bench.jpg` | clean lab interior | infrastructure |
| `cleanroom.jpg` | cleanroom production line | quality / manufacturing |
| `production-line.jpg` | glowing filling machine | manufacturing hero |
| `ashwagandha-dark.jpg` | ashwagandha roots on dark | Ayurvedic / categories |
| `liquid-splash.jpg` | dark amber liquid splash | liposomal / hero accent |
| `liquid-drop.jpg` | water drop macro | contact / liposomal |
| `cargo-aerial.jpg` | container ship aerial | export hero |
| `cargo-sunset.jpg` | container ship at sunset | export |
| `texture-dark.jpg` | dark amber texture | section background |
| `factory-exterior.jpg` | industrial plant at dusk | export/manufacturing scale (optional) |
| `mint-leaf.jpg` | mint leaves, dark | OTF / freshness (optional) |

### Existing assets to keep

`gummies-macro.jpg` (hero / dark texture), `gummies-spill.jpg`, `gummies-jar.jpg`, `softgels-marble.jpg`, `softgels-2.jpg`, `turmeric.jpg`, `orange-macro.jpg`, `containers.jpg`, `effervescent.jpg`, `droplets.jpg`, `lab-scientists.jpg`, `lab-equipment.jpg` (use sparingly).

### Do not use

- `lab-interior.jpg` (Rohto factory, wrong context) — replace with `lab-bench.jpg` / `cleanroom.jpg`.
- `world-map.jpg` (cork board map) — do not use; build a route visual in CSS/SVG if needed.
- `film-strip.jpg` (dental floss) — do not use; use `film-membrane.jpg`.
- Any fake founder portrait. Use initials + abstract lab image.

### Credits

Add a discreet footer line: “Selected photography via Pexels; illustrative only.” Existing legal copy already says imagery is illustrative.

---

## 6. Implementation order

1. **Tokens + global CSS** (`globals.css`, `layout.tsx` fonts/theme). Verify build.
2. **Shell** (`header`, `footer`, `whatsapp-fab`, `page-hero`, `section-head`, `page-nav`, `accordion`, `legal-page`). Verify build.
3. **Reusable sections** (`marquee`, `spec-rail`, `format-specimen`, `format-rail`, `category-index`, `quality-scrolly`, `capability-list`, `process-timeline`).
4. **Home page** — hero first, then sections.
5. **About + Founder**.
6. **Technologies + Manufacturing**.
7. **Global + Contact**.
8. **404 + OG image + legal pages**.
9. **QA pass**: `npm run lint`, `npm run build`, manual check at 1280×800, mobile widths, reduced motion, keyboard focus, no horizontal overflow.

---

## 7. QA checklist

### Layout
- [ ] No horizontal overflow at 320 / 375 / 768 / 1024 / 1280 / 1920.
- [ ] Container capped and centred; gutters grow at 1920.
- [ ] Hero headline + one sentence + primary CTA visible at 1280×800.
- [ ] Every image has a sized parent (`fill` + `relative` + aspect/height).
- [ ] No `100vw` widths. `overflow-x: clip` on html/body.

### Type & colour
- [ ] All colours/fonts come from tokens.
- [ ] Body ≥ 16px. Labels mono and small.
- [ ] One primary button style.
- [ ] Dark-section text has sufficient contrast (bone/65+).
- [ ] No single italic word inside a roman heading.
- [ ] No tracked-caps eyebrow on every section.

### Motion
- [ ] No `transition: all`.
- [ ] Only transform/opacity animated.
- [ ] `prefers-reduced-motion: reduce` disables marquee, parallax, carousel auto-advance, tilt, cursor glow.
- [ ] Content visible with JS off (server-rendered text/images).
- [ ] No scroll-jacking; horizontal rail is native scroll.

### Interaction
- [ ] Every link/button has `:focus-visible` (instant, 1.5px ember, offset).
- [ ] Mobile menu traps scroll, closes on link, Escape works (add if missing).
- [ ] Accordion `aria-expanded` correct.
- [ ] Form validation/errors/aria-invalid still work; mailto still works.
- [ ] External links `rel="noopener noreferrer"`.

### Content
- [ ] No invented metrics, logos, testimonials or founder photo.
- [ ] All copy from `lib/site.ts` remains accurate.
- [ ] Imagery labelled illustrative.
- [ ] Alt text meaningful.
- [ ] Legal pages unchanged in substance.

### Performance
- [ ] Hero image `priority`; below-fold images lazy.
- [ ] `sizes` set on every `Image`.
- [ ] No huge unused images imported.
- [ ] Build passes.

---

## 8. Handoff notes

- **Do not push.** The user will review locally first.
- If continuing in a new agent session: read this file, then `app/globals.css`, `lib/site.ts`, and the page you are working on. Keep the tokens and the anti-slop checklist.
- The content model is in `lib/site.ts`; avoid duplicating copy in pages.
- Prefer editing existing components over adding new dependencies. The project already has Framer Motion, Lenis and lucide-react.
- If a section starts to look like a generic SaaS landing page (three rounded cards, centred heading, gradient blobs), stop and make it editorial: big type, a real image, a thin rule, an index.
- The “crazy” should come from **scale, imagery, motion and composition**, not from more colours, more cards or more words.

---

## 9. Progress log

- [x] Pre-flight audit of all pages/components.
- [x] Design direction + palette + type system decided.
- [x] Pexels image set downloaded.
- [x] Plan written.
- [x] Tokens + global CSS.
- [x] Shell components (header, footer, page hero, section head, page nav).
- [x] Reusable sections (format specimen, format rail, category index, quality scrolly, process timeline, capability list).
- [x] Home.
- [x] About + Founder.
- [x] Technologies + Manufacturing.
- [x] Global + Contact.
- [x] 404 + OG + legal.
- [x] QA pass 1: desktop + mobile screenshots at real scroll positions.
- [x] Fixed `WordReveal` never triggering (observed clipped child; now parent-driven variants).
- [x] Fixed format rail initial snap offset (scroll padding).
- [x] Fixed header CTA showing on mobile (`.btn` display overriding `hidden`).
- [x] Re-cropped manufacturing/export/contact hero imagery and swapped in warmer shipping/contact art.
- [x] Added no-JS fallback so server-rendered content stays visible.
- [x] Hero fits one viewport at 1440×900 (type scale + specimen size tuned).
- [x] Final QA: focus states, reduced motion, contact form validation, production build.
- [x] Verified no horizontal overflow at 390/768/1440, no console errors, no-JS content visible.
- [x] Verified contact deep links, form validation, rail arrows, accordion, mobile menu + Escape.
- [x] Final `npm run lint` + `npm run build` pass.
- [x] Polish pass 2: removed remaining decorative section indices, "Live specimen", crosshairs, signal dot and "Scroll to the atelier".
- [x] Rebuilt the marquee as a seamless large-serif ticker; verified duplicated group widths are identical.
- [x] Replaced `gummies-macro.jpg` on the homepage with cleanroom imagery; removed it from the header menu and category preview.
- [x] Added pinned horizontal format showcase on desktop; native snap rail on mobile and reduced motion.
- [x] Redesigned the certification strip as a three-column band; removed the duplicate band on the manufacturing page.
- [x] Centered the footer `ZOELEX` wordmark and cleared the mobile footer FAB overlap.
- [x] Swept all pages for leftover numbered eyebrows; verified 1440 / 1024 / 768 / 390, no overflow, no console errors.
- [x] Re-ran `npx tsc --noEmit`, `npm run lint` and `npm run build`.
- [x] Refined the homepage ticker: slimmer serif scale, tighter rhythm, and replaced the heavy `✳` star with a subtle dot separator.


