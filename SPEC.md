# Courier Missions Website — Design & Build Spec

Version 1.0 · October 2026
Source material: Courier Missions Brand Guidelines, Final Mission Statement, 2025 Impact Review, and the temporary homepage currently live at couriermissions.com (`reference-temporary-homepage.html`).

This document is written to be handed to Claude Code (or any developer) to build the full site. Everything needed is in this folder. Where something is not known yet it is marked **TODO** and listed in section 12.

---

## 1. Overview

**Organization:** Courier Missions, a Christian nonprofit that serves communities and churches in need with practical help and spiritual hope. Current focus: Kakamega County, Kenya. Preparatory work is underway for U.S. outreach (student care and humanitarian response).

**Tagline:** Delivering Hope, Serving with Purpose.

**What the site must do, in priority order**
1. Make giving easy. A Donate action is visible on every page, on every screen size.
2. Show the work honestly: real photos, real numbers, real places.
3. Explain who Courier Missions is and why people can trust them.
4. Give people a way to get involved beyond money: pray, go on a trip, partner as a church, follow along on Facebook.

**Audience:** individual donors (often church members, many on phones), partner churches and pastors, prospective trip volunteers.

**Tone:** warm, hopeful, plainspoken, faith-forward without jargon. Short sentences. Talk about people, not "beneficiaries." Avoid pity imagery and savior language; the people in Kenya are partners, and local leaders are named as leaders.

---

## 2. Technical approach

- **Framework:** Astro (static output). Simple pages, components, no client JS framework required. Plain HTML/CSS is an acceptable fallback if the owner prefers zero build step.
- **Styling:** one global CSS file built on the design tokens in section 4 (CSS custom properties). No Tailwind needed; if used, map its theme to these tokens.
- **Hosting:** Netlify (the domain is registered at WordPress.com and DNS already points to Netlify). Deploy from a Git repo so updates are a push. Include a `netlify.toml`.
- **Fonts:** Montserrat (600, 700) and Roboto (400, 500) from Google Fonts, `display=swap`, with system-ui fallbacks. Self-hosting via `@fontsource` is preferred for performance and privacy.
- **Images:** Astro `<Image>` / `<Picture>` for responsive AVIF/WebP with JPEG fallback. Every content image has meaningful alt text.
- **Forms:** Netlify Forms for the contact form (no backend).
- **Donations:** external processor (TODO, see section 12). The site links out; it never collects payment details itself.
- **JS budget:** minimal. Only the mobile menu toggle and optional count-up on impact numbers (respect reduced motion).
- **Content editing:** keep copy in Markdown/MDX or a single `src/data/*.ts` file per page so a non-developer can change text and numbers without touching layout.

Suggested structure:
```
src/
  layouts/BaseLayout.astro        # <head>, header, footer, skip link
  components/                     # see section 7
  pages/ index, about, our-work, impact, get-involved, contact, 404
  data/ site.ts (links, email, nav) · impact.ts (numbers) · programs.ts
  styles/tokens.css · global.css
public/ favicons, og image
src/assets/ logo/*, photos/*
```

---

## 3. Sitemap & navigation

| Page | Path | Purpose |
|---|---|---|
| Home | `/` | Hero, what we do, impact snapshot, story, donate CTA |
| About | `/about` | Mission, vision, philosophy (Empower, Respond, Transform), beliefs, leadership |
| Our Work | `/our-work` | Programs in Kenya and U.S., one section each |
| Impact | `/impact` | 2025 Impact Review in web form, yearly updates over time |
| Get Involved | `/get-involved` | Give, pray, go, partner as a church |
| Contact | `/contact` | Form, email, Facebook |
| Donate | external link | Opens processor (same tab) |
| 404 | `/404` | Friendly not-found with links home and to Donate |

**Header nav (desktop):** logo left · About · Our Work · Impact · Get Involved · Contact · [Donate] button right.
**Header nav (mobile, < 900px):** logo left · [Donate] small button · menu button. Menu opens a full-height navy panel with large links. Donate stays visible outside the menu.

**Footer:** on-dark logo, one-line mission, nav links repeated, Facebook link, email, "Courier Missions is a 501(c)(3) nonprofit. Gifts are tax-deductible as allowed by law." (TODO confirm status and EIN), © year.

---

## 4. Design tokens

### 4.1 Color (from Brand Guidelines §4)

| Token | Hex | Role |
|---|---|---|
| `--cm-orange` | `#E98600` | Primary brand. Buttons, accents, icons, highlights. **Fill color, not text color on light backgrounds.** |
| `--cm-navy` | `#183044` | Primary dark. Headings and body text on light, dark section backgrounds, header on scroll, footer. |
| `--cm-white` | `#FFFFFF` | Page background, text on navy. |
| `--cm-orange-soft` | `#E08F47` | Secondary. Hover tints, illustration, decorative shapes. |
| `--cm-sky` | `#A3C8E1` | Secondary. Light section backgrounds, quote panels, links/eyebrows on navy. |
| `--cm-steel` | `#5F9BB6` | Secondary. Decorative only (fails text contrast on white). |

Derived tokens (not in the brand guide, added for usability and accessibility):

| Token | Value | Role |
|---|---|---|
| `--cm-cream` | `#FFF6EA` | Warm alternate section background (matches the faded globe motif in the Facebook covers). |
| `--cm-orange-dark` | `#C97300` | Button hover/pressed. |
| `--cm-orange-ink` | `#A85F00` | Orange **text** on white/cream (4.9:1). Eyebrows, inline emphasis. |
| `--cm-steel-ink` | `#3E7590` | Link color on white if a blue link is wanted (5.1:1). |
| `--cm-navy-80` | `rgba(24,48,68,.8)` | Secondary text on light. |
| `--cm-line` | `rgba(24,48,68,.12)` | Borders, dividers. |

**Accessibility rules (WCAG AA), measured:**
- White on orange = 2.7:1 → **fails**. Never put white text on orange.
- **Navy on orange = 5.1:1 → passes.** Primary buttons use navy text on orange.
- Orange on white = 2.7:1 → fails for text. Use `--cm-orange-ink` for orange text on light backgrounds; brand orange is fine for large display numerals ≥ 32px bold only as decoration alongside a text label.
- Orange on navy = 5.1:1 → passes. Orange text and accents work well on navy.
- Sky on navy = 7.7:1 → passes. Good for eyebrows/links in dark sections.
- Navy on white 13.6:1, navy on cream 12.7:1 → body text.

### 4.2 Typography (Brand Guidelines §5)

- **Primary — Montserrat:** logo, headlines, buttons, nav, eyebrows, numbers.
- **Secondary — Roboto:** body copy, captions, forms, long-form text.

Fluid type scale (rem; base 16px):

| Token | Size | Font / weight | Line height | Use |
|---|---|---|---|---|
| `--fs-display` | `clamp(2.5rem, 5.2vw, 4.25rem)` | Montserrat 700, `letter-spacing:-.02em` | 1.05 | Home hero headline |
| `--fs-h1` | `clamp(2.125rem, 4vw, 3.25rem)` | Montserrat 700, `-.015em` | 1.1 | Page titles |
| `--fs-h2` | `clamp(1.75rem, 3vw, 2.5rem)` | Montserrat 700, `-.01em` | 1.15 | Section titles |
| `--fs-h3` | `1.375rem` | Montserrat 600 | 1.3 | Card titles |
| `--fs-eyebrow` | `.8125rem` | Montserrat 700, uppercase, `letter-spacing:.14em` | 1.4 | Labels above headings |
| `--fs-lead` | `clamp(1.125rem, 1.6vw, 1.3125rem)` | Roboto 400 | 1.6 | Intro paragraphs |
| `--fs-body` | `1.0625rem` | Roboto 400 | 1.65 | Body |
| `--fs-small` | `.875rem` | Roboto 400 | 1.5 | Captions, footer, legal |
| `--fs-stat` | `clamp(2.75rem, 5vw, 4rem)` | Montserrat 700, tabular-nums | 1 | Impact numbers |

Body measure: max 68ch. Headlines max ~16ch on hero, ~22ch elsewhere. Headings are sentence case (the temporary site's "Delivering hope, serving with purpose." style), never all caps except eyebrows.

### 4.3 Spacing, radius, shadow, layout

```
--space-1: .25rem  --space-2: .5rem  --space-3: .75rem  --space-4: 1rem
--space-5: 1.5rem  --space-6: 2rem   --space-7: 3rem    --space-8: 4rem
--space-9: 6rem    --space-10: 8rem
--section-pad: clamp(4rem, 9vw, 8rem)      /* vertical padding per section */
--gutter: clamp(1rem, 5vw, 4.5rem)        /* side padding; 16px minimum on phones */
--container: 1200px   --container-narrow: 760px

--radius-sm: 8px   --radius-md: 14px   --radius-lg: 22px   --radius-pill: 999px
--shadow-card: 0 1px 2px rgba(24,48,68,.06), 0 12px 32px -12px rgba(24,48,68,.18)
--shadow-cta:  0 8px 24px -10px rgba(233,134,0,.8)
```

Breakpoints: `600px` (large phone), `900px` (tablet → desktop nav switch), `1200px` (wide).

Motion: 150ms ease for hover; 400ms ease-out for fade/slide-in of sections (optional). Everything disabled under `prefers-reduced-motion: reduce`.

---

## 5. Logo usage (Brand Guidelines §2)

Files in `assets/logo/` (transparent PNGs prepared from the brand originals):

| File | Use |
|---|---|
| `logo-horizontal.png` | Full logo (globe + wordmark + tagline), navy outline. Header on white, light sections. |
| `logo-horizontal-on-dark.png` | Same, with white outline and tagline. Over photos, navy header/footer. |
| `logo-icon.png` / `-on-dark` | Globe with "CM." Favicon source, small spaces, social avatar. |
| `logo-badge.png` / `-on-dark` | Circular badge with "Courier Missions" arched around the globe. Footer seal, About page, merch-style moments. |
| `favicon-32.png`, `favicon-180.png` (apple-touch), `favicon-512.png` | Favicons / web manifest. |

Rules:
- Clear space on all sides ≥ the height of the "C" in the wordmark.
- Header logo width: 220px desktop, 168px mobile. Never smaller than 140px wide for the horizontal logo; use the icon below that.
- Do not flip, stretch, recolor outside the provided variants, add gradients/effects, place on busy photo areas without a darkening overlay, or wrap text around it.
- A soft `drop-shadow(0 2px 10px rgba(24,48,68,.45))` is allowed when the on-dark logo sits directly on a photo (as on the temporary site).
- Prefer SVG if the designer can supply vector files (TODO). PNGs are 2x for retina.

---

## 6. Imagery & graphic motifs

**Photography** is the heart of the site. Use real photos from the field: people serving together, students, pastors, church builds, meals, the clinic. Prefer warm natural light, faces, and shared activity over posed handouts.

All photos live in `src/assets/photos/` (copy from `assets/photos/`). Photos named `courier-missions-*.jpg` were taken from the Courier Missions Facebook page at the largest size Facebook serves. Use Astro `<Image>`/`<Picture>` so each is resized and converted; never upscale.

**Size classes** (by original pixel width; the long edge matters for portrait shots):
- **L — Large** (≥ 1,500px wide): full-bleed heroes, page headers, wide feature rows.
- **M — Medium** (1,000–1,500px, or portrait): program cards, half-width feature rows, story blocks.
- **S — Small** (< 1,000px, or a thin strip): thumbnails, grids, inline ≤ 480px only. Never as a hero or page header.

**6.1 Photo library**

| File | Subject | Size | Orientation | Use it for | Alt text |
|---|---|---|---|---|---|
| `hero-volunteer-with-students.jpg` | Volunteer smiling with students in school uniforms | L | landscape | Home hero (current live site) | A Courier Missions volunteer with students in Kakamega, Kenya |
| `feeding-program-serving-line.jpg` | Volunteers serving a meal to students and an elder | L 1963×1192 | landscape | Home "Our work" Feeding card; Our Work › Feeding row | Volunteers serving a meal to students and an elder in Kenya |
| `courier-missions-feeding-serving-line.jpg` | Same photo as above | L | landscape | Duplicate: keep only one copy | — |
| `courier-missions-feeding-volunteers-serving-lunch.jpg` | Volunteers ladling lunch from buckets to children | L 2016×1512 | landscape | Get Involved › Go; Feeding gallery | Volunteers serving lunch to children from large buckets |
| `courier-missions-feeding-food-delivery-to-school.jpg` | Food sacks and supplies delivered to students, Courier Missions banner, "Deaf" school sign | L 2048×1536 | landscape | Our Work › Feeding (lead image); Impact page | Sacks of food delivered to students at the Kakamega School for the Deaf |
| `courier-missions-feeding-team-dishing-up-meals.jpg` | Team plating meals in a kitchen | M 1080×2340 | tall portrait | Feeding gallery; vertical story block (crop to 4:5) | Volunteers plating meals in a school kitchen |
| `courier-missions-feeding-community-meal.jpg` | Crowded shared meal under a tin roof | S 540×1170 | portrait | Gallery thumbnail only | A community meal under a shelter |
| `courier-missions-church-1-foundation-framing.jpg` | Block foundation with timber framing | L 2000×1500 | landscape | Church build sequence, step 1 | Foundation and timber framing for a new church |
| `courier-missions-church-2-walls-going-up.jpg` | Worker on a ladder building walls | L 2000×1500 | landscape | Church build sequence, step 2 | A builder on a ladder raising the walls of a church |
| `courier-missions-church-3-roof-trusses.jpg` | Wooden roof trusses on block walls | L 2000×1500 | landscape | Church build sequence, step 3 | Roof trusses going up on a new church |
| `courier-missions-church-4-finished-church.jpg` | Completed church, green trim, access ramp | L 2000×1500 | landscape | Church build sequence, step 4; Our Work › Church Building lead; Home Church card | A completed church building with green trim and an access ramp |
| `courier-missions-church-5-ribbon-cutting.jpg` | Ribbon-cutting with orange and teal balloons | M 1079×1442 | portrait | Church dedication moment; Impact page | A ribbon-cutting celebrating a new church |
| `courier-missions-church-6-full-for-worship.jpg` | Packed church interior, cross window | S 1079×493 | thin panorama | Narrow banner strip or thumbnail only | A full church gathered for worship |
| `courier-missions-medical-camp-banner-2026.jpg` | "Courier Missions Shikoti Medical Camp 2026" banner over tents | M 1280×960 | landscape | Our Work › Medical Clinic header card; Impact | The Courier Missions Shikoti Medical Camp 2026 banner |
| `courier-missions-medical-blood-pressure-check.jpg` | Volunteer in hi-vis taking a blood pressure reading | L 1600×1200 | landscape | Our Work › Medical Clinic lead image; Home Medical card | A volunteer checking a woman's blood pressure at the medical camp |
| `courier-missions-medical-patient-consult.jpg` | Patient consult at a table of medicines | M 1200×1600 | portrait | Medical gallery; story block | A patient consultation at the medical camp |
| `courier-missions-medical-mother-and-baby.jpg` | Smiling mother holding her baby | M 1200×1600 | portrait | Story/quote block portrait; Give section | A mother and her baby at the medical camp |
| `courier-missions-medical-pharmacy-table.jpg` | Table of medicines and supplies inside a church | L 3013×1392 | wide | Medical section wide band | Medicines and supplies laid out for the clinic |
| `courier-missions-farm-harvest-of-hope-sign.jpg` | "Harvest of Hope — Planting Seeds of Faith, Food & Future" sign in maize | L 1536×1536 | square | Our Work › Harvest of Hope lead image; Home Farm card | The Harvest of Hope farm sign standing in a maize field in Kakamega |
| `courier-missions-farm-workers-tending-crops.jpg` | Workers tending rows of young maize | L 2000×1500 | landscape | Farm section feature row; page header for the farm | Farm workers tending young maize at the Harvest of Hope farm |
| `courier-missions-farm-tractor-plowing.jpg` | Tractor beside the Harvest of Hope sign | L 1599×899 | landscape | Farm section; "how the farm works" row | A tractor preparing the land at the Harvest of Hope farm |
| `courier-missions-farm-picking-greens.jpg` | Woman harvesting leafy greens | M 1200×1200 | square | Farm gallery; card | A woman harvesting greens at the Harvest of Hope farm |
| `courier-missions-farm-farmers-with-harvest.jpg` | Farmers holding freshly picked crops | S 899×899 | square | Farm gallery thumbnail; small card | Farmers holding their harvest |

**6.2 Placement plan**
- **Home › Our work cards (4):** Feeding = `feeding-program-serving-line`, Church Building = `church-4-finished-church`, Medical Clinic = `medical-blood-pressure-check`, Harvest of Hope Farm = `farm-harvest-of-hope-sign`. Use a 4-up grid on desktop (2×2 on tablet, 1 column on mobile).
- **Our Work rows:** each program uses its lead image (as listed in 6.1) at 3:2, plus an optional 3-photo gallery strip of its other photos.
- **Church build sequence:** a 4-step horizontal strip (stack on mobile): foundation → walls → roof → finished, captioned "Foundation", "Walls", "Roof", "Complete". This is the clearest "your gift builds this" story on the site.
- **Impact page:** food delivery, ribbon-cutting, medical camp banner.
- **Story/quote block:** `medical-mother-and-baby` (circle-cropped, per 7.8).

**6.3 Captions.** Captions may state only what is known: "Kakamega School for the Deaf" (food delivery), "Shikoti Medical Camp, 2026", "Harvest of Hope farm, Kakamega". Don't add dates or place names to the other photos unless the team confirms them.

**6.4 People in photos.** Most photos show children. Don't name children, add identifying captions, or use a child's photo for a story it isn't from. Choose dignified moments (serving together, smiling, working), never distress.

Still needed (TODO): School for the Deaf students (beyond the delivery photo), pastoral training, mattress/blanket distribution, Bible distribution, the farm well (the Facebook post about it is a video; grab a still), team group shot, leadership headshots, a U.S. outreach image, and full-resolution originals of the community meal and full-church photos.

**Photo treatments**
- Full-bleed hero: photo with navy gradient overlays where text sits (see 7.2). Text never sits on unshaded photo.
- Content photos: `--radius-lg` corners, `object-fit: cover`, fixed aspect ratios (3:2 landscape, 4:5 portrait, 1:1 cards).
- Captions (optional): `--fs-small`, `--cm-navy-80`, place and year, e.g. "Kakamega School for the Deaf, 2025."

**Graphic motifs** (from the Facebook cover designs):
- Faded globe watermark: the globe from the logo at ~10–15% opacity in orange-soft on cream sections, partially cropped off an edge.
- Solid orange circle partly off-canvas, paired with a thin navy circle outline (2px) offset from it. Use at most once per page, in a corner, decorative (`aria-hidden`).
- Rounded "ribbon" shape in pale orange in a top corner.
- Keep motifs behind content, never behind body text.

**Icons:** simple 2px-stroke line icons (e.g. Lucide) in navy or orange, 24–32px. Suggested: utensils (feeding), church, stethoscope (clinic), book-open (Bibles/training), heart-handshake (relief), bed (mattresses), users (discipleship), sprout (Harvest of Hope farm).

---

## 7. Components

### 7.1 Buttons
| Variant | Style | Use |
|---|---|---|
| Primary | `--cm-orange` fill, **navy text**, Montserrat 700, 1.0625rem, padding `1rem 2.25rem`, pill radius, `--shadow-cta`. Hover `--cm-orange-dark`. | Donate, main CTA. One per view. |
| Secondary on light | Transparent, 2px navy border, navy text. Hover navy fill + white text. | "Learn more," secondary actions. |
| Secondary on dark | Transparent, 2px `rgba(255,255,255,.7)` border, white text. Hover `rgba(255,255,255,.12)` fill. | Facebook, secondary actions over photos/navy. |
| Text link | Navy (light bg) or sky (dark bg), underline offset 3px, Montserrat 600, trailing → arrow. | "Read the 2025 Impact Review →" |

All: min height 48px, visible focus ring `3px solid` navy (on light) or white (on dark), `outline-offset:4px`. Facebook button includes the "f" icon.

### 7.2 Hero (home)
Matches the live temporary homepage, which the owner approved.
- Full viewport height (`min-height: 100svh`, minimum 640px), navy background.
- **≥ 900px:** photo occupies the right ~64% (`left:36%`), with overlays: left fade from solid navy to transparent over the first 30%, light navy at top 20% for the header, navy fade at the bottom 12%. Text column on the left on navy.
- **< 900px:** photo on top at 62svh (`object-position` tuned so faces show), fading to navy; text below on navy.
- Content: eyebrow "Kakamega County, Kenya" (sky), display headline "Delivering hope, serving with purpose." (white), lead paragraph (white 88%), primary Donate + secondary-on-dark "See our work" (or Facebook).
- Header sits transparent over the hero with the on-dark logo.

### 7.3 Page header (interior pages)
Navy band or shorter photo hero (40–50vh) with overlay, eyebrow + H1 + one-sentence lead. Breadcrumb not needed.

### 7.4 Site header
Height 80px desktop / 64px mobile. Transparent over heroes, then on scroll (after 40px) becomes solid navy with a subtle shadow. On pages without a photo hero it is white with the navy logo and navy links, orange Donate. Sticky. Active nav item: 2px orange underline.

### 7.5 Pillar cards (Empower · Respond · Transform)
Three columns (stack on mobile). Each: large Montserrat number "01/02/03" in orange-soft, title (H3), 2–3 sentence description from the Mission Statement, icon. White card on cream background, `--radius-md`, `--shadow-card`.

### 7.6 Program card / program section
Card: 4:3 photo, eyebrow (location), H3, 1–2 sentences, text link. Grid of 3 (desktop), 2 (tablet), 1 (mobile).
Full section (Our Work page): alternating photo-left/text-right rows, each with eyebrow, H2, paragraph, "what your gift does" bullet list, and a Donate button that can deep-link to a fund (TODO if the processor supports designations).

### 7.7 Impact stat
Number (`--fs-stat`, orange on navy or navy on cream) + label (Roboto 500, 1rem) + optional one-line context. Displayed in a 4-up row on navy. Optional count-up on first view (disabled for reduced motion; final number must be in the HTML for no-JS and screen readers).

### 7.8 Story / quote block
Sky or cream background, large opening quote mark in orange, quote in Montserrat 600 `--fs-h3`, attribution in Roboto `--fs-small`. Optional portrait photo, circle-cropped with a 4px navy ring (echoes the globe).

### 7.9 Scripture block
Centered, narrow container, italic Roboto at `--fs-lead`, reference in Montserrat 700 eyebrow style. Used sparingly (e.g. Galatians 6:9 on Impact page).

### 7.10 Donate CTA band
Full-width navy section with faded globe motif. H2 "Your gift delivers hope.", one sentence, primary Donate button, secondary "Other ways to give" text link (sky). Appears near the bottom of every page except Contact.

### 7.11 Contact form
Fields: Name, Email, "How would you like to help?" (select: General question / Give / Go on a trip / Partner as a church / Pray / Other), Message. Labels above inputs, 48px min height, 1px `--cm-line` border, `--radius-sm`, focus border navy 2px. Netlify Forms with honeypot. Success message inline.

### 7.12 Footer
Navy background, white/sky text. Columns: on-dark badge or horizontal logo + one-line mission; Explore links; Connect (Facebook, email); Give (Donate button). Bottom row: nonprofit statement, ©, "Delivering Hope, Serving with Purpose."

---

## 8. Page content

Copy below is drawn from the Mission Statement, Brand Guidelines and 2025 Impact Review. It may be edited for length, but facts and numbers must not change.

### 8.1 Home `/`
1. **Hero** (7.2). Lead: "We partner with local churches in Kakamega County, Kenya to feed families, build places of worship, and bring lasting hope."
2. **What we do** — eyebrow "Our mission", H2 "Practical help and spiritual hope.", Mission Statement paragraph 1. Then three pillar cards (Empower, Respond, Transform).
3. **Our work** — H2 "Our work in action." Four photo cards: Feeding Program (`feeding-program-serving-line`), Church Building (`courier-missions-church-4-finished-church`), Medical Clinic (`courier-missions-medical-blood-pressure-check`), and Harvest of Hope Farm (`courier-missions-farm-harvest-of-hope-sign`). No location eyebrow on the cards. Use a 4-up grid on desktop, 2×2 on tablet, and 1 column on mobile. Link to `/our-work`.
4. **2025 at a glance** — impact stats row on navy: **2 meals daily** (students at the Kakamega School for the Deaf) · **1,000+** (people served at our medical clinic) · **~70** (people who accepted Jesus at our crusade) · **85** (mattresses and blankets for students). Link "Read the 2025 Impact Review →".
5. **Story / quote** block (TODO: a real quote from a pastor, teacher or volunteer).
6. **Donate CTA band** (7.10).

### 8.2 About `/about`
- Page header: H1 "About Courier Missions".
- **Who we are:** Brand Guidelines §1.1 (About) text.
- **Mission:** "Courier Missions exists to serve communities and churches in need around the world by providing practical help and spiritual hope. We partner with local leaders to bring lasting transformation through humanitarian aid, volunteer service, education, and discipleship. Our mission is to deliver hope, meet real needs, and empower communities to grow stronger and more resilient for the future."
- **Vision:** "To strengthen churches, empower leaders, and respond to crises through sustainable, Christ-centered ministry, locally and globally." (2025 Impact Review)
- **Our philosophy:** Empower, Respond, Transform (full text from Mission Statement, pillar cards).
- **What we do:** Community Support and Empowerment · Crisis Response and Relief · Spiritual and Holistic Development (from Mission Statement).
- **Leadership / team:** TODO names, roles, headshots, short bios.
- **Statement of faith:** TODO (optional; link or short summary).
- Donate CTA band.

### 8.3 Our Work `/our-work`
Intro: "We serve holistically, combining humanitarian aid with discipleship and sustainable development." Then one section per program (7.6):

**Kenya — Kakamega County**
1. **Feeding Program** — two meals daily for students at the Kakamega School for the Deaf. Photo provided.
2. **Church Building** — one church completed in 2025, with more construction and renovation projects underway.
3. **Medical Clinic** — a multi-day clinic that served over 1,000 people.
4. **Pastoral Training & Discipleship** — equipping pastors and strengthening local churches; Bibles distributed to pastors and families.
5. **Outreach & Evangelism** — sharing the Gospel in schools and communities, reaching hundreds of children; an evangelistic crusade where nearly 70 people accepted Jesus.
6. **Student Care** — 85 mattresses and blankets provided to students at the School for the Deaf.

**United States**
7. **Community Care** — supporting community care initiatives; student care and humanitarian response programs in preparation.

Each section ends with a primary Donate button. Optional "Our focus areas" note: food insecurity, sanitation, economic hardship (Brand Guidelines §1.1).

### 8.4 Impact `/impact`
Web version of the 2025 Impact Review:
- Header: eyebrow "2025 Impact Review", H1 "A year of growth, faith and impact."
- Executive summary (paraphrase or full text).
- Stats row (same as home, plus "1 church completed").
- International impact (Kenya) list, U.S. impact list, Spiritual impact list.
- Closing gratitude paragraph.
- Scripture block: Galatians 6:9.
- Link to download the PDF (provided as `assets/docs/2025-impact-review.pdf`; serve from `public/files/`).
- Structure the data in `src/data/impact.ts` by year so 2026 can be added without layout changes.

### 8.5 Get Involved `/get-involved`
Four cards/sections:
- **Give** — one-time or monthly giving; primary Donate. TODO: what specific amounts provide (e.g. "$X feeds a student for a month") once the team confirms figures. Do not invent amounts.
- **Pray** — invitation to pray; optional email signup for prayer updates (TODO provider).
- **Go** — mission trips to Kenya; contact form preselected to "Go on a trip". TODO trip dates.
- **Partner as a church** — invite churches to partner; contact form preselected to "Partner as a church".
Plus "Follow along" with the Facebook button.

### 8.6 Contact `/contact`
H1 "Get in touch", short line, contact form (7.11), email, Facebook. TODO mailing address if they want one listed.

### 8.7 404
"This page has gone on a mission." · links Home and Donate.

---

## 9. Accessibility (target WCAG 2.2 AA)
- Contrast rules in 4.1 are mandatory.
- Skip-to-content link; semantic landmarks (`header`, `nav`, `main`, `footer`); one H1 per page; logical heading order.
- Mobile menu: button with `aria-expanded`, focus trapped while open, Esc closes, focus returns to button.
- All interactive targets ≥ 44×44px.
- Alt text describes people and place, e.g. "A Courier Missions volunteer with students in Kakamega, Kenya." Decorative motifs `alt=""` / `aria-hidden="true"`.
- Respect `prefers-reduced-motion`.
- Forms: visible labels, errors in text (not color alone), `autocomplete` attributes.

## 10. Performance & SEO
- Lighthouse ≥ 95 on all four categories (mobile).
- Hero image preloaded, `fetchpriority="high"`, ≤ 250KB AVIF at 1600w; other images lazy-loaded.
- Per-page `<title>` ("Page | Courier Missions") and meta description; canonical URLs; Open Graph + Twitter card image (1200×630: hero photo with on-dark logo, TODO generate); `sitemap.xml`; `robots.txt`.
- JSON-LD `NGO` / `Organization` schema with name, url, logo, sameAs (Facebook), email.
- Favicons + `site.webmanifest` (theme color `#183044`).

## 11. Acceptance checklist
- [ ] Donate button visible without scrolling on every page at 390px and 1280px widths.
- [ ] All pages built per section 8 with the provided copy; no invented facts or numbers.
- [ ] No white text on orange anywhere; contrast spot-checked.
- [ ] Header transparent-over-hero and solid-on-scroll behaviors work; mobile menu accessible.
- [ ] Looks correct at 360, 390, 768, 1024, 1280, 1600px.
- [ ] Contact form submits to Netlify and shows success.
- [ ] Lighthouse mobile ≥ 95 across the board.
- [ ] Deployed to Netlify; couriermissions.com and www both serve the site over HTTPS.

## 12. Open items (TODO before or during build)
| Item | Notes |
|---|---|
| Donation link / processor | Same link as the live temporary site. Check whether it supports designated funds (feeding, church building) and monthly giving. |
| Facebook page URL | Same as live site. |
| Contact email | `info@couriermissions.com` is a placeholder until confirmed. |
| 501(c)(3) status & EIN | For footer and giving language. |
| Leadership names, roles, photos, bios | About page. |
| More field photos | See section 6 list. |
| A real story/quote | Home and Impact pages. |
| Giving amounts ("$X provides …") | Only if the team confirms figures. |
| Trip dates / how to apply | Get Involved page. |
| Vector (SVG) logo files | Ask the brand designer; PNGs work meanwhile. |
| Email newsletter provider (optional) | Prayer/updates signup. |
