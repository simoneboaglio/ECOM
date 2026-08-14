# Landing Page — Simone Boaglio / Full System Audit

A single static page: `index.html`, `styles.css`, `script.js`. No build step, no dependencies — open `index.html` directly or deploy it anywhere (GitHub Pages, Netlify, Shopify custom page, etc.).

## Before you publish, swap in:

1. **Your photo** — two placeholder blocks (hero + story section) are marked `Add your photo here`. Replace the `.photo-placeholder` divs with `<img>` tags.
2. **Real testimonials** — the "Client results" section has 3 placeholder cards on purpose. No fake reviews were added. Send me (or paste in) real client quotes/screenshots/results and I'll drop them in.
3. **Contact info** — the apply form currently emails `simone.boaglio@gmail.com` and the footer links to it. Update `script.js` (search `simone.boaglio@gmail.com`) and `index.html`'s footer if you want a different inbox.
4. **Instagram link** — the footer has a placeholder `Instagram →` link (`data-placeholder="instagram"`) with `href="#"`. Point it at your real profile.
5. **Pricing** — currently $499 (audit) / $150 (follow-up call), matching your offer doc. Update in `index.html` if pricing changes.

## Notes

- The apply form has no backend — submitting it opens the visitor's email client with their answers pre-filled, addressed to you. If you'd rather collect leads into a form tool (Typeform, Google Form, Calendly, ManyChat), swap the `<form id="applyForm">` submit handler in `script.js` for that integration.
- Dark theme, single accent color (emerald green), system fonts only — loads fast, no external requests.
