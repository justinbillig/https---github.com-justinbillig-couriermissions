# Feature Spec: Giving Tuesday 2026 Landing Page

Nov 9, 2026 · @Justin Billig

## Summary

**Status:** Draft · **Version:** 0.5 · **Ships before:** November 17, 2026 (first email send, two weeks before Giving Tuesday)

Build a single landing page at `/giving-tuesday/2026` that explains Courier Missions' Giving Tuesday goal and sends visitors to Courier Missions' listing on Thrivent's giving platform. Gifts made there on Tuesday, December 1, 2026 can receive a boost from Thrivent; gifts made through Zeffy cannot. The page is the destination for a 3-touchpoint email campaign (out of scope here). Also add a short Giving Tuesday section to the giving area of the site that hides itself after December 1, 2026.

## Goal, audience and success

**Goal:** $50,000 given to Courier Missions through Thrivent's giving platform on December 1, 2026. If Thrivent's boost comes through at the full $1 for $1, that becomes $100,000. The boost is not guaranteed, so the page states the $50,000 goal and never promises $100,000.

**What the money is for:** three 2027 goals.

1. Expand the Harvest of Hope farm.
2. Fully fund the feeding program at the Kakamega School for the Deaf.
3. Fully fund our planned medical clinics.

**Audience:** people who get the Giving Tuesday emails. They are mostly existing donors and church members, and many will open the link on a phone (design spec §1).

**Site priority served:** #1, make giving easy (design spec §1).

**Success measure:** total given through Thrivent on December 1. Courier Missions learns this from Thrivent's payment on December 9 and the boost on or before December 16. Clicks from the page to Thrivent are a secondary measure, if the site has analytics (open question).

## Thrivent program facts

The page copy may only use facts in this table. They come from [Thrivent's Giving Tuesday page](https://www.thrivent.com/offers/giving-tuesday), checked November 9, 2026. That page is not yet public; Thrivent plans to release it in mid-November. **Recheck every row when it goes public**, and update the copy if anything changed.

| Fact | What Thrivent says | Can it go on our page? |
| --- | --- | --- |
| Date | Tuesday, December 1, 2026 | Yes |
| Window | 12 midnight to 11:59 p.m. in the donor's own time zone | Yes |
| Where to give | Online, through Thrivent's giving platform, to an enrolled organization. Courier Missions is enrolled in Thrivent Choice. | Yes |
| Boost | Up to $1 for every $1, from a shared pool across all participating organizations. If total giving exceeds the pool, each boost shrinks proportionally. A full match is not guaranteed. | Yes, without the pool amount |
| Pool size | $3 million | **No.** Decision: don't name it. |
| Who can give | Anyone. You don't need to be a Thrivent client or member. | Yes |
| Payment | Credit or debit card, Apple Pay, Google Pay. No ACH on Giving Tuesday. | Yes |
| Not eligible for the boost | Checks, donor-advised funds, qualified charitable distributions, or any method other than Thrivent's online platform | Yes |
| Minimum gift | $1 | Optional |
| Fees | Thrivent covers online processing fees, so all of the gift goes to the organization | Yes |
| Receipt | Email and tax receipt come from Thrivent Charitable | Yes |
| Bank statement | The charge shows as "Thrivent Charitable" | Yes |
| Donor info | Thrivent shares the donor's name, contact info, date and amount with the organization | Yes |
| Tax advice | Donors should ask their tax advisor | Yes, if tax deductibility is mentioned |
| Payout | Gifts on December 9, 2026; boost on or before December 16, 2026 | No (internal only) |

## Scope

**In scope**

- The landing page at `/giving-tuesday/2026`.
- A Giving Tuesday section in the site's giving area (see "Giving area section"), hidden by JavaScript after December 1, 2026.
- Every give button on the landing page links to Thrivent's Giving Tuesday page, where donors can choose Courier Missions, not Zeffy.

**Out of scope**

- The 3-touchpoint email campaign and any other promotion (Facebook, bulletins).
- Thanking or following up with donors.
- A progress bar or live total. Totals aren't known until after December 1.
- Before, during and after states for the landing page. The page shows the same content the whole time.
- Adding the page to the header navigation.
- Changing the global header and footer Donate buttons. They keep linking to Zeffy.

## Landing page: URL, structure and copy

**URL:** `/giving-tuesday/2026`. The year in the path leaves room for later campaigns (`/giving-tuesday/2027`). `/giving-tuesday` alone is not used yet.

**Page title:** Giving Tuesday 2026 | Courier Missions

**Meta description:** Give through Thrivent on December 1, 2026, and your gift to Courier Missions can go up to twice as far. Help us reach $50,000 for 2027.

**Give button target (every give button on the page):** https://www.thrivent.com/offers/giving-tuesday?utm_source=vanity&utm_campaign=2026_Giving_Tuesday&utm_medium=Donor&utm_content=give. This is Thrivent's general Giving Tuesday page, not a Courier Missions-specific listing; donors select Courier Missions there.

The page has six sections, top to bottom. The boost is the reason to give on December 1, so it shows up in the header, its own benefit row, and the closing band, while the three 2027 goals stay the reason to give at all. Draft copy is below; facts come from the project files and the Thrivent table above.

1. **Page header** (design spec 7.3, photo version)
   - Eyebrow: Giving Tuesday · December 1, 2026
   - H1: Give on December 1, and your gift can go up to twice as far.
   - Lead: Help us reach our $50,000 goal in one day. Give through Thrivent on December 1, and Thrivent can add up to $1 for every $1 you give. A $50 gift could bring up to $50 more for the farm, the Deaf school and our clinics.
   - Primary button: Give through Thrivent
   - Under the button (small): Gifts count from midnight to 11:59 p.m. your time on December 1.
2. **Why give through Thrivent on December 1** (three-up benefit row, right under the header)
   - Benefit 1, *Your gift can go up to twice as far.* Thrivent can add up to $1 for every $1 you give.
   - Benefit 2, *Your whole gift goes to the work.* Thrivent covers the processing fees.
   - Benefit 3, *Anyone can give.* You don't need to be a Thrivent member.
   - Line under the row: On December 1, a gift through Thrivent can receive up to $1 for every $1 you give. That's why we're asking you to give that day.
3. **Where your gift goes** (three program cards, design spec 7.6)
   - Intro: Your gift can help grow the farm, keep meals going at the Deaf school and fund next year's medical clinics.
   - Card 1, Harvest of Hope farm. On 2 leased acres, Harvest of Hope grows corn, beans and vegetables. The farm pays daily wages to 50 local day laborers. The goal is 10 acres. Your gift can help it grow. Photo: `courier-missions-farm-harvest-of-hope-sign.jpg`.
   - Card 2, Kakamega School for the Deaf. Every school day, 100 students at Kakamega School for the Deaf sit down to two meals. Your gift can help fully fund those meals in 2027. Photo: `kakamega-school-for-the-deaf-students-eating-in-meal-hall.jpg` (follow design spec 6.4).
   - Card 3, Medical clinics. Four times a year, clinics in Kakamega offer consultations, medicines, screenings and health education. In 2025, one clinic served more than 1,000 people. Your gift can help fully fund the clinics planned for 2027. Photo: `courier-missions-medical-blood-pressure-check.jpg`.
4. **How to give on December 1** (numbered steps)
   1. On December 1, tap Give through Thrivent. On the Thrivent Giving Tuesday page, choose Courier Missions.
   2. Give by card, Apple Pay or Google Pay, any time from midnight to 11:59 p.m. in your time zone.
   3. Thrivent will email your receipt. If your gift gets a boost, up to $1 for every $1 you give will be added after Giving Tuesday. You don't need to do anything else.
5. **Good to know** (short questions and answers)
   - *Do I need to be a Thrivent member?* No. Anyone can give.
   - *How much can Thrivent add?* Thrivent can add up to $1 for every $1 you give, from a pool shared by all participating organizations. If total giving is more than the pool, the boost is smaller for everyone. Thrivent sets each boost after Giving Tuesday.
   - *Can I give by check, bank transfer, donor-advised fund or qualified charitable distribution?* Only online gifts made through Thrivent on December 1 can get a boost of up to $1 for every $1 you give. Checks, bank transfers, donor-advised funds and qualified charitable distributions aren't eligible.
   - *Are there fees?* Thrivent covers the processing fees, so all of your gift goes to Courier Missions.
   - *Who sends my receipt?* Thrivent Charitable will email your receipt. Your statement will show "Thrivent Charitable." For tax questions, ask your tax advisor.
   - *Will Courier Missions know I gave?* Yes. Thrivent shares your name, contact info and gift amount with us, so we can thank you.
6. **Closing band** (design spec 7.10, with the button pointed at Thrivent)
   - H2: Your gift delivers hope.
   - Line: Mark December 1 on your calendar. Give through Thrivent that day, and your gift can go up to twice as far.
   - Primary button: Give through Thrivent

## Giving area section

The design spec has no Donate page; its Donate buttons go straight to Zeffy, and giving is covered in Get Involved › Give (design spec 8.10). So this section goes at the top of **Get Involved › Give**, above the existing Give content (confirmed).

**Copy**

- Eyebrow: Giving Tuesday · December 1
- H3: Give through Thrivent on December 1, and your gift can go up to twice as far.
- Text: You can help us reach $50,000 for 2027: a larger Harvest of Hope farm, meals at the Deaf school and our medical clinics. On December 1, Thrivent can add up to $1 for every $1 you give through its giving platform.
- Text link (design spec 7.1): See how to give on Giving Tuesday → (links to `/giving-tuesday/2026`)

**Hide rule**

- The section is in the page HTML and visible by default.
- A small script hides it once the visitor's local date is December 2, 2026 or later. Using the visitor's local time matches Thrivent's window, which ends at 11:59 p.m. in the donor's time zone.
- When hidden, the section takes no space, and the rest of the Give section looks as it does today.
- After the campaign, remove the section and script in a normal update. The script is a safety net, not the cleanup.

```javascript
// Hide the Giving Tuesday 2026 section from December 2, 2026 (visitor's local time).
const cutoff = new Date(2026, 11, 2); // months are 0-based: 11 = December
if (new Date() >= cutoff) {
  document.getElementById('giving-tuesday-2026')?.setAttribute('hidden', '');
}
```

## Design notes

The page uses existing tokens and components only. Nothing new is added to the design system.

| Page part | Component (design spec) | Notes |
| --- | --- | --- |
| Page header | 7.3 photo header | Photo: `courier-missions-farm-workers-tending-crops.jpg` (L), with navy overlay where text sits. Primary button inside the header. |
| Give buttons | 7.1 Primary | Orange fill, navy text, pill. Label "Give through Thrivent". One per view. |
| Where your gift goes | 7.6 program cards | 3 columns desktop, 2 tablet, 1 mobile. 4:3 photos. No "Learn more" link needed, but cards may link to their program pages. |
| How to give | Numbered list | Montserrat numerals in `--cm-orange-ink` on light background. |
| Good to know | Plain Q&A, or `<details>` disclosure if the site already uses one | Questions in Montserrat 600, answers in Roboto body. |
| Closing band | 7.10 Donate CTA band | Same layout, but the button links to Thrivent and the secondary "Other ways to give" link is dropped. |
| Giving area section | Cream panel (`--cm-cream`), `--radius-md` | Eyebrow in `--cm-orange-ink`. Text link per 7.1. |

**Benefit row (new section 2):** three items side by side on navy, stacked on mobile, using the impact-stat layout (7.7) with a short headline in place of a number. Headlines in Montserrat 700, orange on navy; one supporting line each in white. Optional line icons (Lucide): trending-up, hand-heart, users.

**Thrivent's name and logo:** use the name "Thrivent" in text. Don't use Thrivent's logo unless it comes from Thrivent's organization resources (thrivent.com/resources) with their usage terms.

## Acceptance criteria

**Landing page**

- [ ] `/giving-tuesday/2026` loads, including with email tracking parameters on the URL (for example `?utm_source=email`).
- [ ] Every give button on the page links to Thrivent's Giving Tuesday page, where donors can choose Courier Missions. No button on the page body links to Zeffy.
- [ ] The site header and footer still show the normal Donate button, linking to Zeffy.
- [ ] The page is not in the header navigation.
- [ ] The copy never states the $3 million pool and never promises $100,000 or a guaranteed match. "Up to $1 for every $1" appears wherever the boost is described.
- [ ] The boost appears as a benefit in four places: the header lead, the benefit row, the closing band and the giving area section. Every mention says "up to" ("up to $1 for every $1" or "up to twice as far").
- [ ] Every fact on the page matches the Thrivent facts table, rechecked after Thrivent's page goes public.
- [ ] Every program fact matches the project files (2 acres, 50 workers, 10-acre goal, 100 Deaf school students, quarterly clinics, 1,000+ at a 2025 clinic).
- [ ] Photos showing children follow design spec 6.4: no names, no identifying captions.
- [ ] Layout works at 375px wide with no horizontal scroll; the first give button is visible without scrolling on a phone.
- [ ] All buttons and links are at least 48px tall with a visible focus ring; button text is navy on orange (no white on orange).
- [ ] Page title and meta description are set as written.

**Giving area section**

- [ ] The section appears at the top of Get Involved › Give before December 2, 2026.
- [ ] With the device clock set to December 2, 2026 or later, the section is hidden and leaves no gap.
- [ ] With the clock set to 11:59 p.m. on December 1, 2026, the section still shows.
- [ ] The text link goes to `/giving-tuesday/2026`.

**Before merging to main**

- [ ] The business spec has a "Completed feature specs" section, and this spec is listed there with its merge date, version and the business-spec sections it changed. This is the last change on the branch before the merge.

## Open questions

| Question | Why it matters | Blocks build? |
| --- | --- | --- |
| Courier Missions does not have a dedicated Thrivent listing; use the general campaign page and have donors select Courier Missions. | Confirmed target: https://www.thrivent.com/offers/giving-tuesday?utm_source=vanity&utm_campaign=2026_Giving_Tuesday&utm_medium=Donor&utm_content=give | No |
| First email send date | November 17, 2026 (two weeks before Giving Tuesday) | No |
| Can the page go live before Thrivent's page is public in mid-November? | Yes; recheck all Thrivent facts when their page goes public. | No |
| Should a visitor who arrives after December 1 see anything different? | Gifts made after December 1 get no boost, but the page will still say they can | No |
| Is there a link for people who can't give on December 1 (for example, Zeffy in small text)? | Out of the main CTA, but it could keep a late visitor from leaving | No |
| Does the site have analytics to count clicks to Thrivent? | Secondary success measure | No |
| Are there approved Thrivent logo files? | Only needed if we show the logo | No |

## Changes to the design spec

When this ships, update the design spec (v1.3) in four places.

1. **§3 Pages:** add "Giving Tuesday 2026" (`/giving-tuesday/2026`), not in navigation, as a campaign page.
2. **§3 Donate rule:** add an exception. "All Donate buttons link to Zeffy, except buttons on a campaign page that names another giving platform."
3. **§8.10 Get Involved:** note the time-limited Giving Tuesday section at the top of Give, and remove the note once the section is gone.
4. **New section, "Completed feature specs":** this is the first feature spec, so the business spec doesn't have this section yet. Add it as the last numbered section of the business spec, before the open items, with this instruction and a table:
   - Instruction to include in the section: "Every feature spec is listed here once it's done. Update this table in the same branch as the feature, right before that branch is merged into main. A feature spec is not complete until it's listed here."
   - Table columns: Feature spec (linked to the spec file) · Completed (date merged) · Version · What changed in this business spec (section numbers).
   - First row: Giving Tuesday 2026 Landing Page. Add it only right before this feature's branch is merged into main. Until then, the table stays empty and this spec is not listed as completed.

No new photos are needed. No change to TECH-SPEC.md beyond the small inline script, unless the build has a rule against inline scripts.
