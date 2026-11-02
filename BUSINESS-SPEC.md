# Courier Missions Website — Business & Design Spec

Version 1.4 · November 2026
Source material: Courier Missions Brand Guidelines, Final Mission Statement, 2025 Impact Review, the October 2026 grant application (organization overview, programs, leadership, Harvest of Hope), the November 2, 2026 director conversation (`assets/docs/Initial Business Conversation.pdf`; use the transcript where generated notes conflict), the Courier Missions Facebook page, and the temporary homepage currently live at couriermissions.com (`reference-temporary-homepage.html`).

**Do not publish** anything from the grant application that isn't in this spec: no phone numbers, bank details, personal email addresses, the funder's name, grant amounts, or the organizational budget.

This document defines the business content and design direction for the site. Open content decisions are marked **TODO** and listed in section 9. Implementation requirements are in [TECH-SPEC.md](./TECH-SPEC.md).

---

## 1. Overview

**Organization:** Courier Missions, a U.S.-based 501(c)(3) Christian nonprofit (incorporated in Indiana, founded 2025) that serves communities and churches in need with practical help and spiritual hope. It works in the **United States, Kenya, and Sierra Leone**, with its main focus in Kakamega County, Kenya. It is volunteer-led: three Co-Directors and 12 volunteers, with no paid U.S. staff.

**Tagline:** Delivering Hope, Serving with Purpose.

**What the site must do, in priority order**
1. Make giving easy. A Donate action is visible on every page, on every screen size.
2. Show the work honestly: real photos, real numbers, real places.
3. Explain who Courier Missions is and why people can trust them.
4. Give people a way to get involved beyond money: pray, go on a trip, partner as a church, follow along on Facebook.

**Audience:** individual donors (often church members, many on phones), partner churches and pastors, prospective trip volunteers.

**Tone:** warm, hopeful, plainspoken, faith-forward without jargon. Short sentences. Talk about people, not "beneficiaries." Avoid pity imagery and savior language; the people in Kenya are partners, and local leaders are named as leaders.

---

## 2. Implementation handoff

Framework, routing, hosting, data organization, form integration, accessibility implementation, SEO, and deployment requirements are in [TECH-SPEC.md](./TECH-SPEC.md).

## 3. Website pages and navigation

| Page | Purpose |
|---|---|---|
| Home | Hero, mission, ministry areas, impact snapshot, Harvest of Hope, story, Donate CTA |
| About | Mission, vision, philosophy (Empower, Respond, Transform), leadership, stewardship |
| Our Work | Overview of five ministry areas, plus "More ways we serve" (8.3) |
| Feeding Programs | Kenya and Sierra Leone feeding, including the Harvest of Hope farm (8.4) |
| Kakamega School for the Deaf | Everything we do with the Deaf school (8.5) |
| Church Building | How we build churches, then the list of church projects (8.6) |
| Medical Clinics | Quarterly outreach clinics in Kakamega, with highlights, services, and photos (8.8) |
| Ministry Support | Disaster response, student essentials, Bible and pastoral support, and scholarships (8.7) |
| Impact | 2025 Impact Review in web form, yearly updates over time (8.9) |
| Get Involved | Give, pray, go, partner as a church |
| Contact | Contact form and Facebook |
| Not found | A friendly message with links home and to Donate |

**Header navigation:** logo, About, Our Work with links to Feeding Programs, Kakamega School for the Deaf, Church Building, Medical Clinics, and Ministry Support, Impact, Get Involved, Contact, and a prominent Donate button. On mobile, keep Donate visible outside the menu and nest the ministry links under Our Work.

All Donate buttons link to the confirmed Zeffy donation form: https://www.zeffy.com/en-US/donation-form/donate-to-change-lives-2964.

**Footer:** on-dark logo, one-line mission, repeated navigation, Facebook link to https://facebook.com/couriermissions, contact form link, "Courier Missions is a 501(c)(3) nonprofit organization. Gifts are tax-deductible as allowed by law.", copyright year, and tagline. Do not include the EIN in the footer.

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

**Color contrast rules, measured:**
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

Use real field photos: people serving together, students, pastors, church builds, meals, and the clinic. Photos named `courier-missions-*.jpg` and the photos in 6.1a were taken from the Courier Missions Facebook page at the largest size Facebook serves. Never upscale images.

**Size classes** (by original pixel width; the long edge matters for portrait shots):
- **L — Large** (≥ 1,500px wide): full-bleed heroes, page headers, wide feature rows.
- **M — Medium** (1,000–1,500px, or portrait): program cards, half-width feature rows, story blocks.
- **S — Small** (< 1,000px, or a thin strip): thumbnails, grids, inline ≤ 480px only. Never as a hero or page header.

**6.1 Photo library**

| File | Subject | Size | Orientation | Use it for | Alt text |
|---|---|---|---|---|---|
| `hero-volunteer-with-students.jpg` | Volunteer smiling with students in school uniforms | L | landscape | Home hero (current live site) | A Courier Missions volunteer with students in Kakamega, Kenya |
| `feeding-program-serving-line.jpg` | Volunteers serving a meal to students and an elder | L 1963×1192 | landscape | Feeding Programs card (Home, Our Work); Feeding page | Volunteers serving a meal to students and an elder in Kenya |
| `courier-missions-feeding-serving-line.jpg` | Same photo as above | L | landscape | Duplicate: keep only one copy | — |
| `courier-missions-feeding-volunteers-serving-lunch.jpg` | Volunteers ladling lunch from buckets to children | L 2016×1512 | landscape | Feeding page; Get Involved › Go | Volunteers serving lunch to children from large buckets |
| `courier-missions-feeding-food-delivery-to-school.jpg` | Food sacks and supplies delivered to students, Courier Missions banner, "Deaf" school sign | L 2048×1536 | landscape | School for the Deaf card and page header; Impact page | Sacks of food delivered to students at the Kakamega School for the Deaf |
| `courier-missions-feeding-team-dishing-up-meals.jpg` | Team plating meals in a kitchen | M 1080×2340 | tall portrait | School for the Deaf page; vertical story block (crop to 4:5) | Volunteers plating meals in a school kitchen |
| `courier-missions-feeding-community-meal.jpg` | Crowded shared meal under a tin roof | S 540×1170 | portrait | Gallery thumbnail only | A community meal under a shelter |
| `courier-missions-church-1-foundation-framing.jpg` | Block foundation with timber framing | L 2000×1500 | landscape | Church build sequence, step 1 | Foundation and timber framing for a new church |
| `courier-missions-church-2-walls-going-up.jpg` | Worker on a ladder building walls | L 2000×1500 | landscape | Church build sequence, step 2 | A builder on a ladder raising the walls of a church |
| `courier-missions-church-3-roof-trusses.jpg` | Wooden roof trusses on block walls | L 2000×1500 | landscape | Church build sequence, step 3 | Roof trusses going up on a new church |
| `courier-missions-church-4-finished-church.jpg` | Completed church, green trim, access ramp | L 2000×1500 | landscape | Church build sequence, step 4; Church Building card and page header | A completed church building with green trim and an access ramp |
| `courier-missions-church-5-ribbon-cutting.jpg` | Ribbon-cutting with orange and teal balloons | M 1079×1442 | portrait | Church dedication moment; Impact page | A ribbon-cutting celebrating a new church |
| `courier-missions-church-6-full-for-worship.jpg` | Packed church interior, cross window | S 1079×493 | thin panorama | Narrow banner strip or thumbnail only | A full church gathered for worship |
| `courier-missions-medical-camp-banner-2026.jpg` | "Courier Missions Shikoti Medical Camp 2026" banner over tents | M 1280×960 | landscape | Impact page | The Courier Missions Shikoti Medical Camp 2026 banner |
| `courier-missions-medical-blood-pressure-check.jpg` | Volunteer in hi-vis taking a blood pressure reading | L 1600×1200 | landscape | Medical Clinics card on Our Work and clinic page hero | A volunteer checking a community member's blood pressure at a medical clinic |
| `courier-missions-medical-patient-consult.jpg` | Patient consult at a table of medicines | M 1200×1600 | portrait | Medical gallery; story block | A patient consultation at the medical camp |
| `courier-missions-medical-mother-and-baby.jpg` | Smiling mother holding her baby | M 1200×1600 | portrait | Story/quote block portrait; Give section | A mother and her baby at the medical camp |
| `courier-missions-medical-pharmacy-table.jpg` | Table of medicines and supplies inside a church | L 3013×1392 | wide | Spare; optional for Impact | Medicines and supplies laid out for the clinic |
| `courier-missions-farm-harvest-of-hope-sign.jpg` | "Harvest of Hope — Planting Seeds of Faith, Food & Future" sign in maize | L 1536×1536 | square | Harvest of Hope section lead (Feeding page); Home farm feature | The Harvest of Hope farm sign standing in a maize field in Kakamega |
| `courier-missions-farm-workers-tending-crops.jpg` | Workers tending rows of young maize | L 2000×1500 | landscape | Harvest of Hope section | Farm workers tending young maize at the Harvest of Hope farm |
| `courier-missions-farm-tractor-plowing.jpg` | Tractor beside the Harvest of Hope sign | L 1599×899 | landscape | Harvest of Hope section, "how it works" | A tractor preparing the land at the Harvest of Hope farm |
| `courier-missions-farm-picking-greens.jpg` | Woman harvesting leafy greens | M 1200×1200 | square | Farm gallery; card | A woman harvesting greens at the Harvest of Hope farm |
| `courier-missions-farm-farmers-with-harvest.jpg` | Farmers holding freshly picked crops | S 899×899 | square | Farm gallery thumbnail; small card | Farmers holding their harvest |

**6.1a Photos added November 2, 2026 (approved)**

**Approved for website use** on behalf of Courier Missions on November 2, 2026, including the photos showing children (🧒) and the School for the Deaf (⚠️). The flags remain as reminders: follow 6.4 for those photos (no names, no identifying captions, dignified framing).

| File | Subject (visual only) | Size | Orientation | Use it for | Alt text | Flags |
|---|---|---|---|---|---|---|
| `kakamega-school-for-the-deaf-students-eating-in-meal-hall.jpg` | Students in blue uniforms eating at long tables | L 2048×1536 | landscape | School for the Deaf page header; "Daily meals" | Students sharing a meal at long tables in a school dining hall | 🧒 ⚠️ |
| `kakamega-school-for-the-deaf-students-at-long-tables.jpg` | Wide view of a dining hall with students at long tables | L 2016×1134 | landscape | School for the Deaf gallery | A school dining hall with students seated at long tables | 🧒 ⚠️ |
| `deaf-school-mattress-delivery.jpg` | Adult holding a small child behind a red patterned mattress; school building behind | M 1392×3013 | tall portrait | School for the Deaf "Beds and blankets" (crop 4:5) | A new mattress delivered to the Kakamega School for the Deaf | 🧒 ⚠️ |
| `bible-campaign-men-holding-bibles.jpg` | Four men indoors, each holding a Bible | L 1600×1200 | landscape | Pastors and Bibles card (Our Work) and section (Ministry Support) | Men holding new Bibles from the Courier Missions Bible campaign | — |
| `bible-campaign-man-holding-bible-by-banner.jpg` | Man holding a Bible beside a Courier Missions banner | M 1200×1600 | portrait | Pastors and Bibles (portrait option) | A man holding a Bible beside a Courier Missions banner | — |
| `bible-campaign-crowd-holding-bibles.jpg` | Street crowd, several people holding up books | L 1600×1200 | landscape | Pastors and Bibles gallery; Impact page | A crowd holding up Bibles | 🧒 |
| `team-group-with-luggage.jpg` | Eleven people in Courier Missions T-shirts behind rows of suitcases, between Courier Missions banners | S 1079×370 | wide strip | Get Involved › Go (wide strip only) | A Courier Missions mission team with their luggage | — |
| `church-dedication-group-at-plaque.jpg` | Group of adults in front of a wall plaque and U.S. flag | M 1079×810 | landscape | Church Building "Complete" step or a project card | A group gathered at a church dedication plaque | — |
| `imarira-church-roof-trusses.jpg` | Brick walls with wooden roof trusses; stacked bricks | L 1600×1204 | landscape | Church project card: Imarira Church | Roof trusses going up on Imarira Church | — |
| `imarira-church-worker-on-roof.jpg` | Worker in a hi-vis vest on a roof truss | L 1600×1204 | landscape | Church build sequence "Roof" step or Imarira card | A builder working on the roof of Imarira Church | — |
| `church-in-the-slums-exterior.jpg` | Blue church building; sign reads "The Mwamba Church, Believers Revival Mission" | L 1600×1200 | landscape | Church project card: completed church | The completed Mwamba Church | — |
| `church-in-the-slums-congregation-outside.jpg` | Adults and children outside in front of a "Mwamba Church" banner | L 1600×1200 | landscape | Church project card or gallery | A congregation gathered outside their church | 🧒 |
| `flood-relief-supply-table.jpg` | Courier Missions-branded table under a canopy, stacked with water and supplies | L 2048×1536 | landscape | Ministry Support page header and Our Work card; Disaster Relief section | A Courier Missions table stacked with donated water and supplies for flood victims | — |
| `flood-relief-volunteers-group.jpg` | Six adults beside tables and bins of supplies | L 2048×1536 | landscape | Disaster Relief section | Courier Missions volunteers with donated flood relief supplies | — |
| `flood-relief-volunteer-sorting-supplies.jpg` | Woman arranging cleaning supplies beside a Courier Missions banner | L 2048×1152 | landscape | Disaster Relief section (second image) | A volunteer organizing donated cleaning supplies | — |
| `kibera-outreach-meal-serving.jpg` | Women serving food from large pots to a queue of children | S 718×1599 | tall portrait | Feeding Programs "Community meals" (card only) | Volunteers serving a meal at a community outreach in Nairobi | 🧒 |
| `kibera-outreach-food-line.jpg` | Long queue of children and adults holding plates | S 718×1599 | tall portrait | Feeding Programs gallery (thumbnail) | People lining up for a community meal in Nairobi | 🧒 |

**6.1b Church project photos (added November 2, 2026)**

Downloaded from Courier Missions' own Facebook posts that name a specific church: every photo in each post, at the largest size Facebook serves, JPEG. Files are named `<church>-<post subject>-<post year>-<post month>-<nn>.jpg`, numbered in the post's own order. The month is the post date, not necessarily when the photo was taken. Approved for website use under the site owner's statement of November 2, 2026 that Courier Missions has approval for its photos. Some photos show children (🧒): follow 6.4.

| Church (as spelled in the post) | Files | Facebook post | Post date | What the post says | Notes |
|---|---|---|---|---|---|
| Wetai Church | `wetai-church-completion-2026-07-01` … `-28` (28 photos, 1280–2048px wide) | [post](https://www.facebook.com/couriermissions/posts/pfbid02aqbzdWUDjdbRo51Y3dxCvKYBCxK2UvGPjUkseMhAJDoHa4VEhV4Hv63HZam8Lgj8l) | Jul 5, 2026 | "…just completed the fourth church building project in Kakamega, Kenya! Complete with new flushing restroom facilities! … Today we celebrate the completion of the Wetai Church!" | Before-and-after set: 01–03 show the earlier structures; the rest show construction and the finished building. **The existing `courier-missions-church-1` to `-4` files are from this post, so they show Wetai Church.** 🧒 in a few. |
| Wetai Church | `wetai-church-phase-three-2026-05-01` … `-05` (5) | [post](https://www.facebook.com/couriermissions/posts/pfbid031jUJ8DTfYiZxQo2YJQf21xVtfoEupeJqwqJLzP5PzBP7XKR4igNQu5QyzczeChUGl) | May 13, 2026 | "…continued progress of the Wetai Church project… all of our church construction projects are completed in 3 phases, and we are now officially entering Phase 3…" | Building under construction; one shows stacked bricks. |
| Imarira Church | `imarira-church-phase-one-2026-07-01` … `-10` (10; 01, 03, 04, 05 are under 900px on the short side) | [post](https://www.facebook.com/couriermissions/posts/pfbid029kNxkxdKD6ueP5zcbXYQwZJ6aMfJLSzKcTwsk9mqQbT41TfdjiQiGUavurYcsCLSl) | Jul 25, 2026 | "Phase One of Imarira Church is officially underway! The foundation has been laid, and the block walls began going up… (In the background you can see the current church building that will be torn down…)" | 01–04 show people marking out the site; 08–10 show block walls going up. |
| Imarira Church | `imarira-church-roofing-2026-08-01` … `-10` (10) | [post](https://www.facebook.com/couriermissions/posts/pfbid02XTTpYkc6DnX2hWcAXPysqn3rFnVSKKWH7kycssuSihaoHgxQPSmwmGWbykQaYtdsl) | Aug 5, 2026 | "The roof is going on! Roofing at Imarira Church began on Monday…" | Roof trusses on block walls; stacked blocks. Same post as the existing `imarira-church-roof-trusses` and `imarira-church-worker-on-roof` (not re-downloaded). |
| Emarira Church | `emarira-church-new-project-2026-07-01` … `-06` (6) | [post](https://www.facebook.com/couriermissions/posts/pfbid02Ruwya6fb72GvkJrHVHW8REuVV559wERuhdvh4HzTL14YMbQoB7WH3CscuKSteKf7l) | Jul 18, 2026 | "…we completed our third church in early June! … Courier Missions is taking on a new project: Emarira Church in Emarira Village, Kakamega County … established after a crusade held at Emusala Market in 2019 … more than 80 people call Emarira Church their church home…" | The congregation's existing mud-walled building and members. 🧒 in some. **Spelling:** a week later the posts say "Imarira Church" (Phase One); confirm whether Emarira and Imarira are the same church. |
| Mayungu Church | `mayungu-church-dedication-2026-10-01` … `-11` (11) | [post](https://www.facebook.com/couriermissions/posts/pfbid02nuy9zTE1D4ZhtvvsQMPpGpjyfPkJf412k9pJrapdoAiWjiDq7Wnp9bScPDDE6Xpml) | Oct 4, 2026 | "…dedicating the newly completed Mayungu Church… We concluded the service by serving a meal in which over 600 were served. 130 were children!" | Service inside, congregation, crowd outdoors, meal serving. 🧒 in several. |
| Mayungo Church | `mayungo-church-near-completion-2026-04-01`, `-02` (2) | [post](https://www.facebook.com/couriermissions/posts/pfbid02CrFNEkg8EWomewUT12W8JG1jXRcUNHWAbaoPFUXaJJc1UG6nqv7DvHfFJz1NrkoGl) | Apr 28, 2026 | "…their pastor announced that their church would be remodeled and completed… the Mayungo Church is almost complete…" | Building exteriors. **Spelling:** "Mayungo" here, "Mayungu" at the dedication; confirm whether they're the same church. |
| Church in the Slums | `church-in-the-slums-completion-2026-04-01` … `-07` (7) | [post](https://www.facebook.com/couriermissions/posts/pfbid0N6FcWfpA771YKQ5PRQSuwbCZePb3UKvNVPqynh9N93oTmSGEsxecFox3ThK7jh5Hl) | Apr 10, 2026 | "…complete the Church in the Slums, but also to bring electricity to it … the people in the community have started calling it The City on the Hill." | Includes the earlier metal structure, worship, and the new electrical box. 🧒 in some. Same post as the existing `church-in-the-slums-exterior` and `-congregation-outside` (not re-downloaded); the sign there reads "The Mwamba Church". |
| The Believers Revival Mission | `believers-revival-mission-church-2025-09-01` … `-04` (4, 1280px) | [post](https://www.facebook.com/couriermissions/posts/pfbid02vckK3Zr1AehhduDGuEf582UQwXdQKRNMYABPjy52AABbDsKR5p31TukqzvfEyexql) | Sep 24, 2025 | "…come alongside The Believers Revival Mission church and help complete their church building … the very first funds… went straight into progress—raising the roof, strengthening the walls…" | Unfinished building, interior roof structure. |
| Eshiongo Church | `eshiongo-church-bible-delivery-01.jpg` (2048×1536) | [photo post](https://www.facebook.com/photo.php?fbid=122170724660731451) | Jul 30, 2026 | "…delivered 30 Bibles to Eshiongo Church in the interior of Kakamega, Kenya. (The church building is the structure in the background)" | A large group with a Courier Missions banner in front of a tarp-covered structure. 🧒. Bible delivery, not a building project: use it on Pastors and Bibles. |

**Not downloaded:** posts that don't name the church (the Oct 6, 2025 dedication, the "church project we adopted" post, the Feb 12, 2026 visit to a small church in the slums, and general posts about churches in Kakamega); the Sep 18, 2025 post announcing Pastor Corey's visit to The Believers Revival Mission (its photos can't be tied to that church); posts that are video only (Imarira congregation song, Wetai children's message, Mayungo project video); a ministry van photo and a blurry window shot. "Harvest City Church" is a U.S. church where a volunteer spoke, not a project.

**6.2 Placement plan**
- **Our Work ministry area cards (5):** Feeding Programs = `feeding-program-serving-line`, Kakamega School for the Deaf = `feeding-food-delivery-to-school`, Church Building = `church-4-finished-church`, Medical Clinics = `medical-blood-pressure-check`, Ministry Support = `flood-relief-supply-table`. Use equal-size cards in a 3-column desktop grid, 2 columns on tablet, and 1 column on mobile.
- **Home program highlights:** include a Medical Clinic highlight with the blood-pressure-check photo and a direct link to the Medical Clinics page.
- **Ministry area pages:** page header uses the area's lead image; sections use the other photos for that area. Feeding page: serving line, volunteers serving lunch, and all farm photos in the Harvest of Hope section. Deaf school page: food delivery, team dishing up meals; students eating in the meal hall (header), students at long tables, and the mattress delivery (Beds and blankets). Church page: build sequence (Wetai Church; see 6.3), ribbon-cutting, full church, the dedication plaque group, and one project card per church in 6.1b. Each card uses one lead photo and opens a small gallery of that church's other photos (max 8 shown; pick the clearest). Suggested leads: Wetai = `courier-missions-church-4-finished-church`; Imarira = `imarira-church-roof-trusses`; Emarira = `emarira-church-new-project-2026-07-01` (the existing building, as the "before"); Mayungu = a dedication photo of the congregation; Church in the Slums = `church-in-the-slums-exterior`; The Believers Revival Mission = `believers-revival-mission-church-2025-09-01`. Ministry Support page: flood relief photos in Disaster Relief and Bible campaign photos in Pastors and Bibles. Feeding page: a small "Community meals" row with the two Kibera outreach photos. Get Involved › Go: the team-with-luggage strip. Medical Clinics page: blood-pressure check, patient consultation, mother and baby, pharmacy table.
- **Church build sequence:** a 4-step horizontal strip (stack on mobile): foundation → walls → roof → finished, captioned "Foundation", "Walls", "Roof", "Complete". This is the clearest "your gift builds this" story on the site.
- **Impact page:** food delivery, ribbon-cutting, medical camp banner.
- **Story/quote block:** `medical-mother-and-baby` (circle-cropped, per 7.8).

**6.3 Captions.** Captions may state only what is known: "Kakamega School for the Deaf" (food delivery), "Shikoti Medical Camp, 2026", "Harvest of Hope farm, Kakamega". For church photos, the church name and stage from the post are known (e.g. "Wetai Church, completed 2026", "Imarira Church, roofing"); use the post's spelling until the team confirms otherwise. The existing build-sequence photos (`courier-missions-church-1` to `-4`) are from the Wetai Church completion post, so the strip may be captioned "Wetai Church". Don't add other dates or place names unless the team confirms them.

**6.4 People in photos.** Most photos show children. Don't name children, add identifying captions, or use a child's photo for a story it isn't from. Choose dignified moments (serving together, smiling, working), never distress.

Approved photos (6.1a) now cover: School for the Deaf students, mattress distribution, Bible distribution, a team group shot, U.S. outreach (flood relief), church construction and completed churches, and community meals.

Still needed (TODO): Sierra Leone feeding (photos exist on Facebook but need the Sierra Leone partner's permission), pastoral training, the farm well (the Facebook post is a video; grab a still), LHS Closet, scholarships, leadership headshots, and full-resolution originals of the community meal and full-church photos.

**Photo treatments**
- Full-bleed hero: photo with navy gradient overlays where text sits (see 7.2). Text never sits on unshaded photo.
- Content photos: `--radius-lg` corners, `object-fit: cover`, fixed aspect ratios (3:2 landscape, 4:5 portrait, 1:1 cards).
- Captions (optional): `--fs-small`, `--cm-navy-80`, place and year, e.g. "Kakamega School for the Deaf, 2025."

**Graphic motifs** (from the Facebook cover designs):
- Faded globe watermark: the globe from the logo at ~10–15% opacity in orange-soft on cream sections, partially cropped off an edge.
- Solid orange circle partly off-canvas, paired with a thin navy circle outline (2px) offset from it. Use at most once per page, in a corner, as a decorative element.
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
- **Desktop:** photo occupies the right ~64%, with overlays: left fade from solid navy to transparent over the first 30%, light navy at top 20% for the header, navy fade at the bottom 12%. Text column on the left on navy.
- **Mobile:** photo on top at roughly 62% of the viewport height, cropped to keep faces visible and fading to navy; text below on navy.
- Content: eyebrow "Kakamega County, Kenya" (sky), display headline "Delivering hope, serving with purpose." (white), lead paragraph (white 88%), primary Donate + secondary-on-dark "See our work" (or Facebook).
- Header sits transparent over the hero with the on-dark logo.

### 7.3 Page header (interior pages)
Navy band or shorter photo hero (40–50vh) with overlay, eyebrow + H1 + one-sentence lead. Breadcrumb not needed.

### 7.4 Site header
Height 80px desktop / 64px mobile. Transparent over heroes, then becomes solid navy with a subtle shadow as the visitor scrolls. On pages without a photo hero it is white with the navy logo and navy links, orange Donate. Sticky. Active nav item: 2px orange underline.

### 7.5 Pillar cards (Empower · Respond · Transform)
Three columns (stack on mobile). Each: large Montserrat number "01/02/03" in orange-soft, title (H3), 2–3 sentence description from the Mission Statement, icon. White card on cream background, `--radius-md`, `--shadow-card`.

### 7.6 Program card / program section
Card: 4:3 photo, eyebrow (location), H3, 1–2 sentences, text link. Grid of 3 (desktop), 2 (tablet), 1 (mobile).
Full section (Our Work page): alternating photo-left/text-right rows, each with eyebrow, H2, paragraph, "what your gift does" bullet list, and a Donate button that can deep-link to a fund (TODO if the processor supports designations).

### 7.7 Impact stat
Number (`--fs-stat`, orange on navy or navy on cream) + label (Roboto 500, 1rem) + optional one-line context. Displayed in a 4-up row on navy.

### 7.8 Story / quote block
Sky or cream background, large opening quote mark in orange, quote in Montserrat 600 `--fs-h3`, attribution in Roboto `--fs-small`. Optional portrait photo, circle-cropped with a 4px navy ring (echoes the globe).

### 7.9 Scripture block
Centered, narrow container, italic Roboto at `--fs-lead`, reference in Montserrat 700 eyebrow style. Used sparingly (e.g. Galatians 6:9 on Impact page).

### 7.10 Donate CTA band
Full-width navy section with faded globe motif. H2 "Your gift delivers hope.", one sentence, primary Donate button, secondary "Other ways to give" text link (sky). Appears near the bottom of every page except Contact.

### 7.11 Contact form
Fields: Name, Email, "How would you like to help?" (select: General question / Give / Go on a trip / Partner as a church / Pray / Other), Message. Labels above inputs, 48px min height, 1px `--cm-line` border, `--radius-sm`, focus border navy 2px. Show an inline success message after submission.

### 7.12 Footer
Navy background, white/sky text. Columns: on-dark badge or horizontal logo + one-line mission; Explore links; Connect (Facebook, contact form); Give (Donate button). Bottom row: nonprofit statement, ©, "Delivering Hope, Serving with Purpose."

---

## 8. Page content

Copy below is drawn from the Mission Statement, Brand Guidelines, 2025 Impact Review, the October 2026 grant application, the Nov 2, 2026 director conversation, and Courier Missions' own Facebook posts. Where the later director conversation updates an earlier goal or giving metric, use the newer value; preserve year-specific results and distinguish estimates from measured outcomes. Figures change as programs grow; label current figures "as of 2026" where the page might be read later.

**Key facts (single source for numbers):**
| Fact | Value | Source |
|---|---|---|
| Students in school feeding programs | 375: 100 at Kakamega School for the Deaf, 275 at Shiongo Primary School | Grant application |
| Feeding program goal | 2 more schools, about 500 more children: about 875 students at 4 schools | Grant application |
| Harvest of Hope farm | 2 leased acres; goal is to expand to 10 total acres | Grant application; director conversation, Nov 2, 2026 |
| Farm day laborers employed | 50, prioritizing people facing unemployment and hardship; daily wages and breakfast | Grant application; director conversation, Nov 2, 2026 |
| Farm operations | Two harvests per year; irrigation may allow a third when weather permits | Director conversation, Nov 2, 2026 |
| Farm produce | Supports school feeding, local pastors in need, and community members facing food insecurity; surplus sales fund future seed and plowing | Director conversation, Nov 2, 2026 |
| Farm first season | Profitable; corn and beans grown | Grant application |
| Farm well | Hand-dug, 14 ft, brick-lined, diesel irrigation pump | Facebook post |
| Medical clinics | Quarterly in Kakamega; directors cited about 1,000–1,500 people served, a five-person local medical team, and about $1,200 per clinic. Separately, a 2025 multi-day clinic served 1,000+ people. Confirm the range applies per clinic before publishing it that way. | Director conversation, Nov 2, 2026; 2025 Impact Review |
| Church projects | Directors reported five completed churches and one current project, Shiango, as of Nov 2, 2026; confirm names and spellings below | Director conversation, Nov 2, 2026 |
| Countries | United States, Kenya, Sierra Leone | Grant application |
| Volunteers | 12, plus 3 Co-Directors; no paid U.S. staff | Grant application |
| Standardized meal giving figures | $10 a month supports one student with one meal a day; $50 a month supports five students with one meal a day each | Director conversation, Nov 2, 2026 |
| School security | $150 a month supports daily security guard coverage at the Kakamega School for the Deaf | Director conversation, Nov 2, 2026 |
| Bible cost | $12 per Bible | Director conversation, Nov 2, 2026 |
| Church facility cost | About $15,000 for a church and restroom facility | Director conversation, Nov 2, 2026 |

Use the agreed giving figures as approximate program-cost examples.

### 8.1 Home
1. **Hero** (7.2). Lead: "We partner with local leaders in Kenya, Sierra Leone and the U.S. to feed children, build churches, and bring help and hope when it's needed most."
2. **What we do** — eyebrow "Our mission", H2 "Practical help and spiritual hope.", mission statement (8.2). Then three pillar cards (Empower, Respond, Transform).
3. **Our work** — the five ministry area cards (8.3, photos per 6.2): Feeding Programs · Kakamega School for the Deaf · Church Building · Medical Clinics · Ministry Support. Link "See all our work →" to Our Work.
4. **Right now** — stats row on navy: **375** students fed at school · **50** farm workers employed · **4** medical clinics a year · **3** countries served.
5. **Harvest of Hope feature** — split row: farm sign photo; H2 "Food, jobs and a future, from the same field."; 2–3 sentences on the cycle (8.4); link to the Harvest of Hope section on Feeding Programs.
6. **Story / quote** block (TODO: a real quote from a pastor, teacher, farm worker or volunteer).
7. **Donate CTA band** (7.10).

### 8.2 About
- Page header: H1 "About Courier Missions".
- **Who we are:** "Courier Missions is a U.S.-based 501(c)(3) Christian nonprofit serving vulnerable communities through humanitarian aid, education, sustainable development and community partnership. We serve in the United States, Kenya and Sierra Leone, with a focus on poverty, food insecurity, limited access to education, and essential resources."
- **Mission** (current version, which adds "employment"): "Courier Missions exists to serve communities and churches in need around the world by providing practical help and spiritual hope. We partner with local leaders to bring lasting transformation through humanitarian aid, volunteer service, education, employment, and discipleship. Our mission is to deliver hope, meet real needs, and empower communities to grow stronger and more resilient for the future."
- **Vision:** "To strengthen churches, empower leaders, and respond to crises through sustainable, Christ-centered ministry, locally and globally." (2025 Impact Review)
- **Our philosophy:** Empower, Respond, Transform (pillar cards). Use the grant application's longer versions, which name concrete work: Empower = scholarships, farming, jobs, infrastructure; Respond = disaster relief, food assistance, medical outreach; Transform = partnering with local churches, schools and leaders for long-term self-sufficiency.
- **Leadership** (cards, 7.8 portrait style, headshots TODO):
  - **Heather Billig**, Co-Director
  - **Corey Potts**, Co-Director
  - **Sam Fox**, Co-Director. An experienced farmer who advises Harvest of Hope.
  - **Mark Abungana**, Project Manager, Kenya. Leads Courier Mission CBO, our registered community-based partner in Kakamega, and oversees daily operations there.
  - Short line: "Courier Missions is led by three volunteer Co-Directors who serve as its Board of Directors, supported by 12 volunteers."
- **How we steward your gift** (new section, important for donor trust; a 4-item list with icons):
  1. Weekly video calls with our Kenya Project Manager to review progress and spending.
  2. Regular video updates from the field showing the work as it happens.
  3. Receipts required for every purchase and every worker's wage.
  4. Our Co-Directors visit Kenya every year to see the work firsthand.
- Donate CTA band.

### 8.3 Our Work
- **Header:** H1 "Our work". Lead: "We work alongside trusted local leaders who know their communities best. Our goal isn't only to meet urgent needs, but to build lasting, locally led solutions."
- **Five ministry areas:** large cards of equal prominence (photos per 6.2), each with a 1–2 sentence summary and a link to its page:
  1. **Feeding Programs:** school meals in Kenya and food for children and families in Sierra Leone, supplied in part by our own farm.
  2. **Kakamega School for the Deaf:** a long-term partnership caring for 100 deaf students, from daily meals to beds and blankets.
  3. **Church Building:** building churches with local congregations as centers for worship, fellowship and community help.
  4. **Medical Clinics:** quarterly outreach clinics in Kakamega offering consultations, medicines, screenings and health education. A 2025 multi-day clinic served more than 1,000 people. Use the approved blood-pressure-check photo.
  5. **Ministry Support:** disaster relief, student essentials, scholarships, and Bible and pastoral support.
- **More ways we serve:** a smaller row of 3 compact cards (icon, title, 1–2 sentences) linking to the matching section of Ministry Support:
  - **Scholarships:** educational help, including nursing school, for students facing financial hardship.
  - **Pastors and Bibles:** pastoral training, discipleship, and Bibles for pastors and families.
  - **LHS Closet (Lawrenceburg, Indiana):** hygiene products, personal care items, snacks and essentials for students in need, so they can come to school with dignity and ready to learn.
- Donate CTA band.

Every ministry area page uses the same layout: page header (photo, eyebrow, H1, lead) → "Why it matters" → "What we do" → specifics → numbers (if any) → photo gallery → area-specific donate CTA ("Give to [area]", designated if the processor allows) → links to the other four areas.

### 8.4 Feeding Programs
- **Header:** eyebrow "Feeding Programs · Kenya & Sierra Leone". H1 "No child should have to learn hungry." Lead: "We provide school meals in Kakamega, Kenya, support food programs in Sierra Leone, and grow food on our own farm to keep it going."
- **Why it matters:** Many schools in Kakamega don't offer meals, so children come to school hungry and struggle to learn. Where our programs run, enrollment has grown because families know their children will eat.
- **Kenya: school meals.** 375 students in two schools: 275 at Shiongo Primary School and 100 at the Kakamega School for the Deaf (link to 8.5). Standardized giving line: "$10 a month supports one student with one meal a day."
- **Harvest of Hope farm** (the largest section on the page): eyebrow "Harvest of Hope", H2 "Planting seeds of faith, food and future." (the farm's sign line).
  - Lead: "Instead of only buying food, we grow it. Our farm feeds students, employs people who need work, and earns income to keep going."
  - **How it works:** a 4-step cycle diagram (a circle, the one place numbered steps make sense here): 1 **Grow** corn, beans and vegetables on leased farmland → 2 **Feed** our school programs and families in need through local churches → 3 **Employ** 50 local day laborers, prioritizing people facing unemployment and hardship → 4 **Reinvest** by selling part of each harvest at local markets to pay for seed, labor, land and the next planting.
  - **So far:** 2 acres · 50 workers · a profitable first harvest · a hand-dug well.
  - **The well:** "When the rains didn't come, we dug a well." A 14 ft, hand-dug, brick-lined well with a diesel pump keeps crops watered through dry seasons.
  - **Who runs it:** Project Manager Mark Abungana and a local agricultural specialist trained in farming, advised by Co-Director Sam Fox, an experienced U.S. farmer.
  - **Where it's going (a goal):** expand from 2 to 10 acres, with additional irrigation, to lower food costs and support year-round lunch programs at at least two more schools (about 500 more children, about 875 in all), employ more people, and move toward self-sufficiency.
  - The farm produces two harvests a year; with favorable weather and the wells, diesel pump, and irrigation, a third harvest may be possible.
  - Pay local day laborers daily and provide breakfast. Use harvests for the two school feeding programs, local pastors in need, and community members experiencing food insecurity; sell surplus at market and reinvest proceeds in plowing and seed.
- **Sierra Leone.** Through local partners, we help provide nutritious meals to children and families facing poverty and food insecurity. (TODO: partner/location, numbers, photo.)
- **Community meals:** a small row using the Kibera outreach photos. Per the Courier Missions post of Aug 21, 2026, Courier Missions took part in an outreach in Katwekera, Kibera (Nairobi), where 8 volunteers helped feed more than 600 people.
- **Gallery:** serving line, volunteers serving lunch, farm photos.
- **CTA:** "Help feed a child." Donate.

### 8.5 Kakamega School for the Deaf
- **Header:** photo = food delivery to the school. Eyebrow "Kakamega, Kenya". H1 "Kakamega School for the Deaf." Lead: "A school we've stood alongside since our first year, caring for 100 students' daily needs."
- **Why it matters:** TODO one or two sentences from the team on the school and its students (don't invent).
- **What we do** (list with icons):
  - **Daily meals:** a feeding program for the school's 100 students; in 2025 we began providing two meals a day.
  - **School security:** Daily security guard coverage helps protect students and food when teachers are away; the agreed approximate cost is $150 a month. Do not describe this as 24/7 coverage.
  - **Monthly food deliveries,** including fresh vegetables from the Harvest of Hope farm and special meals with meat.
  - **Beds and blankets:** 85 mattresses and blankets provided in 2025.
  - Confirm with the team whether there is additional school support beyond meals, food deliveries, mattresses/blankets, and security.
- **Gallery:** food delivery, team dishing up meals, students at long tables and the mattress delivery.
- **CTA:** "Support the students." Donate.

### 8.6 Church Building
- **Header:** photo = finished church. Eyebrow "Church Building". H1 "Building churches that serve whole communities." Lead: "We partner with local congregations to build churches that become centers for worship, fellowship, outreach and practical help."
- **Why it matters:** many congregations meet in temporary or unfinished buildings. A finished church gives a community a lasting place to gather, serve and care for its neighbors.
- **How we build** (the main section; 4-step build sequence strip from 6.2, each step with a 1-sentence caption):
  1. **Foundation:** local leaders and builders lay the foundation and framing.
  2. **Walls:** walls go up, built by local workers.
  3. **Roof:** trusses and roofing make the building usable in every season.
  4. **Complete:** finishing work, then the congregation dedicates the building.
  Then a short paragraph on the partnership: the congregation and local leaders lead the project, Courier Missions provides funding and support, and progress is documented with photos, video updates and receipts.
- **Church projects:** a list of projects, not separate pages. Each project includes its name, community/location, status (Planned / Under construction / Completed), year, 1–3 sentences, and optional photos. Display projects as cards with a status badge; completed projects first. Use the directors' Nov 2, 2026 update of five completed churches and Shiango as the current project; confirm names, locations, and photo matches before publishing. The 2025 Impact Review's "1 church completed" remains a year-specific 2025 figure. Draft project entries from Courier Missions' own Facebook posts (photos in 6.1b):
  - The directors reported five completed church projects as of Nov 2, 2026: Believers Revival Mission, Imarira (spelled aloud in the meeting), Wetai (called "Waytie" in the meeting), Mayungu (called "Mayongu" in the meeting), and Moamba (also rendered as "Mwamba" on a sign). Treat this as the latest status update, but resolve naming and project-to-photo matches before publishing the project list.
  - **Wetai Church:** Completed, July 2026. The fourth church building project in Kakamega, with new flushing restroom facilities; built in three phases.
  - **Mayungu Church:** Completed and dedicated October 4, 2026; a meal for over 600 people (130 children) followed. (An April 2026 post calls a church "Mayungo Church", remodeled and almost complete; confirm whether it's the same one.)
  - **Church in the Slums:** Completed, April 2026, with electricity, inside lights and security lights; the community calls it "The City on the Hill". Its sign reads "The Mwamba Church"; the directors referred to this project as Moamba Church. Confirm the official name before publishing.
  - **Imarira Church:** The directors described it as completed by Nov 2, 2026. Earlier posts document Phase One (foundation and block walls) in July and roofing in August. Confirm the final name and whether this matches the "Emarira Church" posts.
  - **Emarira Church:** Announced July 2026 as a new project in Emarira Village, Kakamega County. Do not count it as a separate project until the team confirms whether it is the same church referred to as Imarira.
  - **The Believers Revival Mission:** Included in the directors' list of five completed projects. A September 2025 post documents help completing the roof and walls. Whether the October 6, 2025 dedication was this church is unconfirmed.
  - **Shiango Church:** The directors identified this as the only current new church project on Nov 2, 2026. The congregation had a temporary structure of sticks and tarps; Courier Missions announced plans to build a permanent church and began the corner foundation during an October visit.
  - A July 2026 post says Courier Missions "completed our third church in early June" 2026; which church that is isn't stated.
- **Construction model and cost:** About $15,000 for a church and restroom facility. A typical facility includes a water tank, two or three lockable stalls with a sink, toilet, and shower head in each, handwashing stations, and electricity. Work is divided into three phases: foundation and walls to lintel level; roofing and floor screeding; then windows, doors, plastering and painting. Hire local contractors at daily wages to create local jobs and support families and the local economy.
- **Possible school project:** A land donor associated with the Imara/Imarira church asked Courier Missions to explore building a school on the property. Planning is preliminary; confirm the project, name/location, and what details can be shared before publishing.
- **Gallery:** ribbon-cutting, full church, the dedication plaque group. Project galleries come from 6.1b.
- **CTA:** "Help build a church." Donate.

### 8.7 Ministry Support
- **Header:** photo = `flood-relief-supply-table`. Eyebrow "Practical care". H1 "Ministry Support." Lead: "We respond to urgent needs and support people, churches, students, and families through practical care in the U.S. and around the world."
- **Disaster Relief:** When floods and other disasters hit, work with local organizations and volunteers to collect and distribute essential supplies and help families through emergencies and recovery. Example (per the Courier Missions post of Aug 19, 2026): donated supplies filled over 25 totes for residents affected by flooding in Connersville and Metamora, Indiana. Photos: flood relief (6.1a).
- **LHS Closet (Lawrenceburg, Indiana):** hygiene products, personal care items, snacks and essentials for students in need, so they can come to school with dignity and ready to learn.
- **Pastors and Bibles:** pastoral training, discipleship, and Bibles for pastors and families. Photo: `bible-campaign-men-holding-bibles`; also `eshiongo-church-bible-delivery-01` (30 Bibles delivered to Eshiongo Church, July 2026).
  - The directors cited an approximate cost of $12 per Bible; present it as an approximate price, not a designated-gift promise.
- **Scholarships:** educational help, including nursing school, for students facing financial hardship.
- **How to help right now:** a simple, editable "Current needs" block that the team can turn on during a disaster, with what's needed and where to drop it off; hidden when empty.
- **CTA:** "Your gift delivers hope." Donate.

### 8.8 Medical Clinics
- **Header:** photo = blood-pressure check. Eyebrow "Kakamega, Kenya". H1 "Medical clinics in Kakamega." Lead: quarterly outreach clinics offer consultations, medicines, screenings and health education; a 2025 multi-day clinic served more than 1,000 people.
- **Highlights:** "Quarterly" outreach clinics in Kakamega; "1,000+" people served at a multi-day clinic in 2025.
- **What clinics provide:** wound care, vision and dental checks, consultations, medicines, screenings, and health education.
- The directors reported that a clinic costs about $1,200, serves approximately 1,000–1,500 people, and works with a five-person local medical team. Confirm whether the 1,000–1,500 range applies to each quarterly clinic before publishing it as a per-clinic claim.
- **Gallery:** blood-pressure check, patient consultation, mother and baby, pharmacy table.
- **CTA:** "Support medical clinics." Donate.

### 8.9 Impact
Web version of the 2025 Impact Review:
- Header: eyebrow "2025 Impact Review", H1 "A year of growth, faith and impact."
- Executive summary (paraphrase or full text).
- Stats row (same as home, plus "1 church completed").
- International impact (Kenya) list, U.S. impact list, Spiritual impact list.
- Closing gratitude paragraph.
- Scripture block: Galatians 6:9.
- Link to download the provided 2025 Impact Review PDF.
- Organize the impact review by year so future annual reviews can be added without redesigning the page.

### 8.10 Get Involved
Four cards/sections:
- **Give** — one-time or monthly giving; primary Donate. Confirmed examples from the directors' Nov 2, 2026 discussion: $10/month supports one student with one meal a day; $50/month supports five students with one meal a day each; $150/month supports daily school security; about $1,200 funds a medical clinic; about $15,000 funds a church and restroom facility; $12 buys a Bible. Present these as approximate program costs.
- Include a contact-form invitation for donors interested in stock or legacy gifts through donor-advised funds.
- **Pray** — invitation to pray; optional email signup for prayer updates (TODO provider).
- **Go** — the annual mission trip to Kenya; contact form preselected to "Go on a trip". Photo: `team-group-with-luggage` (wide strip). TODO trip dates.
- **Partner as a church** — invite churches to partner; contact form preselected to "Partner as a church".
Plus "Follow along" with the Facebook button.

### 8.11 Contact
H1 "Get in touch", short line, contact form (7.11), Facebook. Do not publish a contact email or direct email link; route inquiries through the form. No mailing address on the site.

### 8.12 Not found
"This page has gone on a mission." · links Home and Donate.

---

## 9. Open business and content items (TODO)
| Item | Notes |
|---|---|
| School name spelling | Using "Shiongo Primary School" (grant spelling). Double-check before launch. |
| Leadership headshots and short bios | About page (names and roles are in 8.2). |
| Kenya partner name | Grant uses "Courier Mission CBO". Confirm exact registered name. |
| Photo caption facts | Which church the dedication-plaque photo shows; who took the Kibera photos; names for the team photo (if wanted). |
| Facebook source links | Record the post URLs and dates for the photos in 6.1a. |
| More field photos | See section 6 "Still needed": Sierra Leone (needs partner permission), pastoral training, farm well, LHS Closet, scholarships, leadership headshots. |
| Church project list | Confirm the draft entries in 8.6: names, communities, status and year. |
| Church names, spellings, and project mapping | Reconcile Imarira/Emarira/Imara, Waytie/Wetai, Mayongu/Mayungu, and Moamba/Moambo/Mwamba; confirm which photos and previous social posts correspond to each. Identify which project was "our third church" completed in June 2026 and which church was dedicated Oct 6, 2025. |
| Proposed school project | Confirm whether the school requested on land associated with the Imara/Imarira church is proceeding, and what name, location, status, and details may be published. |
| Deaf school details | A short description of the school and any other support to list (8.5). |
| A real story/quote | Home and Impact pages. |
| Additional giving amounts | Confirm any giving examples beyond those agreed in the Nov 2, 2026 director conversation. |
| Trip dates / how to apply | Get Involved page. |
| Vector (SVG) logo files | Ask the brand designer; PNGs work meanwhile. |
| Email newsletter provider (optional) | Prayer and updates signup. |
