import {defineConfig, devices} from "@playwright/test";

/**
 * Visual baseline harness.
 *
 * Two projects over one set of baselines: `live` shoots the Gatsby site the
 * baselines were captured from, `local` shoots the Astro build being ported.
 * Selecting the target with `--project` rather than an environment variable
 * keeps the commands identical on PowerShell and on a POSIX shell.
 *
 *   npm run visual          # live
 *   npm run visual:local    # local
 *
 * `LOCAL_URL` overrides the local port when it is not Astro's default.
 *
 * Deliberately no `webServer` entry: both `astro dev` and `astro preview` in
 * this Astro version always daemonize and return immediately (their own
 * `stop`/`status` subcommands manage the singleton background process), which
 * doesn't fit Playwright's model of a command it keeps a handle on and kills
 * itself. `scripts/a11y-ci.mjs` drives the daemon directly instead — see
 * `npm run a11y:ci`.
 */
const LIVE_URL = "https://fabiolazzaroni.dev";
const LOCAL_URL = process.env.LOCAL_URL ?? "http://localhost:4321";

export default defineConfig({
  testDir: "./visual",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  reporter: [["list"]],
  // One flat folder of baselines, named by page/viewport/theme, with no project
  // or platform segment: both projects are judged against the same PNGs, and a
  // second platform should fail loudly rather than silently fork the set.
  snapshotPathTemplate: "{testDir}/baseline/{arg}{ext}",
  expect: {
    toHaveScreenshot: {
      // The destination is pixel-perfect, so this is deliberately tight: it
      // absorbs text antialiasing, not layout or colour drift.
      maxDiffPixelRatio: 0.002,
      animations: "disabled",
      caret: "hide",
      scale: "css",
    },
  },
  use: {
    ...devices["Desktop Chrome"],
    deviceScaleFactor: 1,
    screenshot: "only-on-failure",
  },
  projects: [
    {name: "live", use: {baseURL: LIVE_URL}},
    {name: "local", use: {baseURL: LOCAL_URL}},
  ],
});
