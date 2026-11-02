# Courier Missions website

This repo is the full Courier Missions website. BUSINESS-SPEC.md is the source of truth for business content and design. TECH-SPEC.md is the source of truth for implementation. Read both before making changes, and follow them.

- Stack: Astro (static), plain CSS using the tokens in BUSINESS-SPEC.md §4, deployed to Netlify.
- Assets live in assets/ (logos, photos, the 2025 Impact Review PDF). reference-temporary-homepage.html is the approved look for the home hero.
- Never invent facts, numbers, names, quotes or donation amounts. Use only what is in BUSINESS-SPEC.md and assets/docs. Anything unknown stays a clearly marked placeholder (search the code for TODO).
- Accessibility: no white text on orange; primary buttons are navy text on orange (BUSINESS-SPEC.md §4.1).
- Keep editable copy and numbers in src/data/ so the owner can change them without touching layout.
- The site owner is a developer. Keep responses concise and focus on executing the requested work; do not explain routine changes. Do not start the Astro dev server unless explicitly asked; the owner deploys to the dev site to review.
