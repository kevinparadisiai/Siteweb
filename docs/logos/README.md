# Client logos

Drop each client's SVG (or PNG) here with these exact filenames:

- `lastminute.svg`
- `eni.svg`
- `tim.svg`
- `gruppo-cap.svg`
- `unipol.svg` ✅ (already in)
- `eolo.svg`

Then in `src/pages/about/index.astro` flip `hasLogo: false` to `hasLogo: true`
on the corresponding client row. That switches the tile from the brand-color
wordmark placeholder to `<img src="/logos/{slug}.svg">`.

## Adding logos from your machine

Two ways:

**GitHub web UI** — open `public/logos/` in the browser, click *Add file →
Upload files*, drop the SVGs, commit. This adds them as real repo files
(not as `github.com/user-attachments/...` links inside a README, which the
build proxy can't reach).

**From a terminal** — `cp your-logos/*.svg public/logos/`, then commit and
push.

## Sizing notes

- Prefer single-color SVGs sized to fit a ~200×80 box. If the SVG has a
  fixed pixel `viewBox`, that's fine — the `.client-logo` class caps the
  rendered height at 3.5rem and lets width auto.
- PNG works too (change the extension in `hasLogo`'s companion). SVG is
  preferred for crispness at any zoom.
