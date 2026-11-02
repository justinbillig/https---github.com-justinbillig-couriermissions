# Courier Missions website

The site is built with Astro and configured to generate a static site for Netlify.
Business content and design direction are in [BUSINESS-SPEC.md](./BUSINESS-SPEC.md).
Implementation requirements are in [TECH-SPEC.md](./TECH-SPEC.md).

## Run locally

1. Install Node.js 22.23.4 or newer, then run `npm install` in this folder.
2. To preview locally, run `npm run dev`.
3. Open [http://localhost:4321](http://localhost:4321) in a browser. The site owner normally reviews by deploying to the dev site instead.

Build the static site with `npm run build`; Astro writes the result to `dist/`.
The included `netlify.toml` configures Netlify to publish that folder.

## Before launch

Replace the remaining clearly marked TODOs with confirmed nonprofit wording,
field photos, and an approved story. The Facebook
page is facebook.com/couriermissions. Contact visitors through the site form;
configure Netlify Forms notifications to send submissions to
heather@couriermissions.org. Copy and impact figures are kept in `src/data/` for
easy edits.
