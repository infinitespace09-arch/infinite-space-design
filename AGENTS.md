# Project conventions

- Store named projects and their complete photo arrays in `src/lib/projects.ts`; gallery and homepage reuse this catalogue to avoid duplicated cards and lost photographs.
- Model Retail as an optional sector within Commercial, so retail filtering preserves the primary residential/commercial classification.
- Keep business copy, service groups, workflow and per-page metadata in `src/lib/site-content.ts` so related pages stay consistent.
- The enquiry form validates locally and prepares an explicitly labelled WhatsApp handoff; never report delivery from a browser handoff because no submission integration is configured.
- Keep the legacy testimonials URL as a permanent redirect to the process page to preserve existing public links.
- Keep the hero slideshow client-timed with decoded next-image loading and reduced-motion fallback; failed image loads must not replace visible content.
- Derive map embeds and directions from the shared workshop address, never guessed coordinates, so contact details remain consistent.- Netlify deploys use `netlify.toml` with Nitro's `netlify` preset (publish `dist`); keep vite.config.ts/wrangler unchanged because Lovable builds pin Cloudflare and ignore NITRO_PRESET.
