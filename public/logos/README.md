# Client logos

Drop the SVG file for each client here, using these exact filenames:

- `lastminute.svg`
- `eni.svg`
- `tim.svg`
- `gruppo-cap.svg`
- `unipol.svg`
- `eolo.svg`

Then in `src/pages/about/index.astro` flip `const useSvg = false` to `true`
inside the client-cell map to render `<img src="/logos/{slug}.svg">`
instead of the wordmark placeholder.

Notes:
- Prefer single-color SVGs sized to fit a ~200×80 box.
- If the SVG has a viewBox with fixed pixel dimensions, that's fine —
  the .client-logo class caps max-height at 3.5rem and lets width auto.
- PNG is also OK (change the extension in the src). SVG is preferred
  for crispness at any zoom.
