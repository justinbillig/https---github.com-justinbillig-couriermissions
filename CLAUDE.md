# Courier Missions website

This repo is the full couriermissions.com website. SPEC.md is the source of truth for design, content and structure. Read it before making changes, and follow it.

- Stack: Astro (static), plain CSS using the tokens in SPEC.md §4, deployed to Netlify.
- Assets live in assets/ (logos, photos, the 2025 Impact Review PDF). reference-temporary-homepage.html is the approved look for the home hero.
- Never invent facts, numbers, names, quotes or donation amounts. Use only what is in SPEC.md and assets/docs. Anything unknown stays a clearly marked placeholder (search the code for TODO).
- Accessibility: no white text on orange; primary buttons are navy text on orange (SPEC.md §4.1).
- Keep editable copy and numbers in src/data/ so the owner can change them without touching layout.
- The site owner is not a developer. After each step, explain what changed in plain language and how to preview it (npm run dev, then open http://localhost:4321).
