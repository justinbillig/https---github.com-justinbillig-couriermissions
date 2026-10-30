# Courier Missions website — build kit

Everything Claude Code needs to build the full couriermissions.com site.

```
SPEC.md                              The design & build spec (start here)
reference-temporary-homepage.html    The page live now; the new home hero should match its look
assets/logo/                         Transparent logos for light and dark backgrounds, favicons
assets/photos/                       Field photos from Kenya
assets/docs/2025-impact-review.pdf   Source for the Impact page
```

## How to use it with Claude Code

1. Unzip this folder somewhere on your computer, for example `Documents/courier-missions-site`.
2. Open Claude Code in that folder.
3. Paste this as your first message:

> Read SPEC.md and README.md, look at reference-temporary-homepage.html and the files in assets/. Then build the Courier Missions website exactly as the spec describes: an Astro static site in this folder, ready to deploy to Netlify. Start with the layout, header, footer and Home page, show me, then build the other pages. Don't invent facts, numbers, names or donation amounts; leave anything marked TODO as a clearly marked placeholder.

4. Before launch, fill in the items in SPEC.md section 12 (donation link, Facebook link, email, and so on). You can just tell Claude Code: "The donation link is …, the Facebook link is …".
5. Deploy: push the folder to a GitHub repo and connect it in Netlify (Add new site → Import from Git) on the same Netlify site that serves couriermissions.com now, so the domain keeps working.
