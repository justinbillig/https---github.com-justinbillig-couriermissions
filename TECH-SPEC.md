# Courier Missions Website — Technical Specification

Version 1.0 · November 2026

This document defines implementation, accessibility, performance, SEO, and deployment requirements. Business facts, approved copy, and visual design direction are in [BUSINESS-SPEC.md](./BUSINESS-SPEC.md). If a technical detail appears to conflict with the business or design requirements, preserve the approved content and design while meeting the technical requirement.

## 1. Platform and build

- **Framework:** Astro, static output. Do not add a client-side UI framework for this site.
- **Styling:** Plain CSS, using the design tokens in `BUSINESS-SPEC.md` §4. Keep global styles in `src/styles/global.css` and tokens in `src/styles/tokens.css`.
- **Fonts:** Montserrat weights 600 and 700, and Roboto weights 400 and 500. Prefer self-hosting for performance and privacy; otherwise load from Google Fonts with `display=swap` and system-ui fallbacks.
- **Hosting:** Netlify, deployed from the Git repository.
- **Node:** 22.23.4 or newer. Netlify build environment is pinned to 22.23.4.
- **Build command:** `npm run build`.
- **Publish directory:** `dist/`.
- **Preview locally only when requested:** `npm run dev`, then open `http://localhost:4321`. Do not leave a development server running after the task.
- Keep dependencies lean. Current production dependency is Astro.

## 2. Source and content organization

Current project layout:

```text
src/
  components/       Shared site header and footer
  data/             Editable navigation, page copy, and program figures
  layouts/          Shared document shell and metadata
  pages/            Astro file-based routes
  styles/           Design tokens and global CSS
assets/
  docs/             Original impact review PDF
  logo/             Brand logo variants and favicons
  photos/           Approved field photography
public/
  files/            Publicly downloadable documents
  robots.txt
  sitemap.xml
```

- Keep page copy, facts, and changing numbers in the relevant `src/data/*.js` files rather than duplicating content in layouts.
- Keep components presentational and share global navigation/footer through `src/layouts/BaseLayout.astro`.
- Do not add unconfirmed facts, names, quotes, addresses, contact details, or giving amounts. Use clearly marked TODOs for outstanding content.
- Preserve the Astro file-based routing convention. Interior page URLs use trailing slashes.

## 3. Routes and redirects

| Page | Canonical route |
|---|---|
| Home | `/` |
| About | `/about/` |
| Our Work | `/our-work/` |
| Feeding Programs | `/our-work/feeding/` |
| Kakamega School for the Deaf | `/our-work/school-for-the-deaf/` |
| Church Building | `/our-work/church-building/` |
| Medical Clinics | `/our-work/medical-clinics/` |
| Ministry Support | `/our-work/ministry-support/` |
| Impact | `/impact/` |
| Get Involved | `/get-involved/` |
| Contact | `/contact/` |
| Not found | `/404.html` |

Required redirects:

- `/our-work/disaster-relief` and `/our-work/disaster-relief/` → `/our-work/ministry-support/` (301).
- `/harvest-of-hope` and `/harvest-of-hope/` → `/our-work/feeding/#harvest-of-hope` (301).
- `couriermissions.com`, `www.couriermissions.com`, and `www.couriermissions.org` → `https://couriermissions.org`, preserving the path. Configure domain-level redirects in Netlify.

Use forced Netlify redirects for permanent redirects so the HTTP response is a 301, including redirects that also have a static Astro route.

The primary domain is `https://couriermissions.org`. Set Astro's `site` value to this origin. Canonicals, sitemap entries, Open Graph URLs, and JSON-LD URLs must all use the primary `.org` domain.

## 4. Shared navigation and donation

- Desktop header: logo, About, Our Work dropdown, Impact, Get Involved, Contact, and a visible Donate button.
- Our Work remains a link to the overview; its submenu lists Feeding Programs, Kakamega School for the Deaf, Church Building, Medical Clinics, and Ministry Support.
- Dropdown opens on hover and by click/keyboard activation.
- Mobile navigation switches below 900px. Keep Donate visible outside the menu. The menu is a full-height navy panel with ministry links indented under Our Work.
- Header is transparent over the home hero, then becomes navy with a subtle shadow on scroll. On pages without a photo hero it starts white with the navy logo and navy links. Active navigation uses an orange underline.
- Menu toggle must expose its expanded state, support keyboard use, close on Escape, return focus to the toggle on close, and prevent background scrolling while open.
- Use the confirmed donation destination everywhere, from the shared site data:
  `https://www.zeffy.com/en-US/donation-form/donate-to-change-lives-2964`
- Donate links open in the same tab. The site must not collect or process payment details.
- Facebook destination: `https://facebook.com/couriermissions`.
- Do not show a public email address or `mailto:` link. The contact page and footer direct people to the contact form.

## 5. Contact form

- Implement the form as a static Netlify Form; no application backend.
- Fields: Name, Email, “How would you like to help?” (General question / Give / Go on a trip / Partner as a church / Pray / Other), and Message.
- Include visible labels, suitable autocomplete values, required-field validation, and a honeypot field.
- Support query-prefilling of the interest field for links from Get Involved.
- Configure Netlify Forms email notifications to send contact submissions to `heather@couriermissions.org`. This address is an internal notification destination and must not appear in rendered public pages or metadata.
- Show an accessible inline success state after successful submission. Keep errors and success states understandable without relying on color.
- Prayer-newsletter signup remains out of scope until the provider is selected.

## 6. Images and static assets

- Use the approved assets in `assets/logo/`, `assets/photos/`, and `assets/docs/`; do not introduce stock photography.
- Import build-time images into Astro pages from `assets/photos/` and use Astro's image pipeline (`Image`/`Picture`) to provide responsive AVIF/WebP with a JPEG fallback where appropriate.
- Do not upscale source images. Follow the photo placement and crop direction in `BUSINESS-SPEC.md` §6.
- Every meaningful image needs alt text that describes the known subject and place. Avoid identifying children. Decorative art has empty alt text or is hidden from assistive technology.
- Preload the page's hero image, mark it high priority, and lazy-load below-the-fold imagery.
- Serve the Impact Review from `public/files/2025-impact-review.pdf`; preserve the source PDF in `assets/docs/`.
- Include the supplied favicon variants and generate `/site.webmanifest` with theme color `#183044`.

## 7. Accessibility

Target WCAG 2.2 AA.

- Honor the contrast requirements in `BUSINESS-SPEC.md` §4.1. Never use white text on orange; primary buttons use navy text on orange.
- Include a skip-to-content link and semantic `header`, `nav`, `main`, and `footer` landmarks.
- Use one H1 per page and a logical heading hierarchy.
- Ensure all interactive targets are at least 44×44px and have a visible keyboard focus style.
- The mobile menu must meet the keyboard and focus behavior in §4.
- Respect `prefers-reduced-motion`; do not make content dependent on animation.
- Forms require visible labels and text-based validation feedback.

## 8. SEO and metadata

- Set a unique page title (`Page | Courier Missions`) and description for each route.
- Emit canonical URLs on the `.org` primary domain.
- Provide Open Graph and Twitter metadata. Use a 1200×630 social image with the approved photo and on-dark logo when that image is available.
- Maintain `public/sitemap.xml` with all canonical public routes, excluding redirects and the 404 page.
- Maintain `public/robots.txt` with the sitemap URL.
- Add JSON-LD `NGO`/`Organization` data with the organization name, primary URL, logo, and Facebook `sameAs`. Do not expose a contact email in public structured data.
- Ensure manifest and canonical metadata agree on the primary domain and brand colors.

## 9. Performance and motion

- Aim for Lighthouse scores of 95 or higher in Performance, Accessibility, Best Practices, and SEO on mobile.
- Target the home hero image at no more than 250 KB in AVIF at 1600px wide.
- Use responsive image sizes rather than serving full-resolution images to small screens.
- Keep client-side JavaScript minimal: mobile menu behavior only; an impact-number count-up is optional.
- Any count-up enhancement must leave the final value present in the HTML and respect reduced-motion preferences.
- Use 150ms ease for hover transitions; optional section entrance motion may use a 400ms ease-out. Disable motion under `prefers-reduced-motion`.
- Responsive design breakpoints: 600px (large phone), 900px (tablet/desktop navigation), and 1200px (wide layout).
- Avoid unnecessary runtime dependencies and third-party scripts.

## 10. Git branching and deployment workflow

- `main` is the production branch; commits merged to `main` deploy automatically to the production site.
- `dev` is the development integration branch; commits merged to `dev` deploy automatically to the dev site.
- Start each work item on a feature branch created from the latest `dev`, and merge completed feature branches into `dev`.
- Do not merge or push feature work to `main` unless the owner explicitly requests a production merge.
- When merging work into `dev`, report the outstanding changes on `dev` that have not reached `main`, counting commits in `dev` that are not in `main` and summarizing the associated work.

## 11. Netlify deployment and validation

- `netlify.toml` configures the build command, Node version, publish directory, and permanent redirects.
- Keep domain-level aliases/redirects and Netlify Forms notification recipients configured in the Netlify site settings; these cannot be fully configured by static site files alone.
- Before a deploy, run `npm run build` and `git diff --check`.
- Confirm the generated build includes all routes, redirects, PDF, manifest, robots file, sitemap, and the correct external Donate destination.
- Test responsive layouts at 360, 390, 600, 768, 900, 1024, 1200, 1280, and 1600px widths.
- Confirm Donate remains visible without scrolling at 390px and 1280px widths.
- Test keyboard-only navigation, mobile menu open/close/focus behavior, form validation, and reduced-motion behavior.

## 12. Outstanding technical setup

| Item | Required action |
|---|---|
| Primary-domain aliases | Configure `.org` as primary and redirect `.com` and `www` domains in Netlify. |
| Form notifications | Configure Netlify to notify `heather@couriermissions.org`; verify the address is absent from generated HTML and metadata. |
| Social sharing image | Produce an approved 1200×630 image using an approved photo and on-dark logo. |
| Production accessibility/performance | Run mobile Lighthouse and accessibility checks before launch; address measured failures. |
