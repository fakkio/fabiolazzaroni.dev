# Visual baseline

The instrument the Gatsby-to-Astro port is judged with: a Playwright capture of
<https://fabiolazzaroni.dev/> as it stands today, frozen into PNGs under
`baseline/`, that a later run can diff the Astro build against.

This directory also holds `a11y.spec.js`, an unrelated but same-harness suite:
an axe-core scan of every page, in both themes, against the site's declared
WCAG 2.2 AA target (`docs/adr/0001-wcag-aa-accessibility-target.md`). It shares
the `live`/`local` project split below but asserts on violations, not pixels —
it has no baseline to keep in sync.

## Run it

```bash
npm run visual           # diff the live Gatsby site against the baselines
npm run visual:local     # diff a local Astro build against the same baselines
npm run visual:baseline  # re-capture from the live site (only for an intentional delta)
npm run a11y             # axe-scan the live site
npm run a11y:local       # axe-scan a local Astro build
```

The target is a Playwright project (`--project=live` / `--project=local`) rather
than an environment variable, so the commands read the same on PowerShell and on
a POSIX shell. `local` points at Astro's default `http://localhost:4321`; set
`LOCAL_URL` to override the port. Nothing here boots the server -- that is a
`webServer` entry a later ticket can add once there is something to boot.

`npx playwright show-report` or the `test-results/` folder holds the diff images
when a run fails.

## What is captured

Eight full-page screenshots: `index` and `404`, each in `light` and `dark`, each
at a desktop (1280x800) and a mobile (390x844) viewport, named
`baseline/<page>-<viewport>-<theme>.png`. Both projects are judged against that
one set -- the snapshot path carries no project or platform segment.

The theme is not left to chance: the site's blocking script reads
`localStorage["color-mode"]` first and `prefers-color-scheme` second, so the
harness sets both and lets them agree.

The 404 page is reached by requesting a path that does not exist; shared hosting
serves the 404 document at any missing path.

## What was done about the animations

- **Waving hand** and **beating heart** are CSS animations. Playwright's
  `animations: "disabled"` rewinds them to their first frame.
- **Blinking Amstrad** is not a CSS animation: a JS timer writes an inline
  colour on the span every 5 to 15 seconds, which `animations: "disabled"`
  cannot reach. An injected `!important` rule pins the span to the inherited
  link colour, which outranks a plain inline style, so the blink still fires but
  never shows. Verified against the live site: unfrozen the computed colour
  flips between `rgb(41, 128, 185)` and `rgb(0, 204, 82)`; frozen it stays blue.
- **The 404 GIF** (John Travolta) has no reproducible frame, so it is masked --
  painted over with a solid box. Its layout box still takes part in the diff,
  its pixels do not.
- **react-spring** drives the Amstrad gradient and the dark-mode toggle; both
  settle after mount, so the capture waits a second before shooting.

## Caveats

- The baselines are Chromium-on-Windows artefacts: text antialiasing and the
  emoji font are the host's. Re-capture on another machine and everything
  differs. `maxDiffPixelRatio` is set to `0.002` in `playwright.config.js` to
  absorb antialiasing, not layout or colour drift.
- The footer prints the current year, so a baseline captured in one year and
  diffed in the next fails on the footer. Re-capture if that day comes.
- `npm run visual` hits the live site over the network.
