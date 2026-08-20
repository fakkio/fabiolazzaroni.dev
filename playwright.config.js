import {defineConfig, devices} from "@playwright/test";

/**
 * Visual baseline harness.
 *
 * `SITE_URL` points the whole suite at the site under test. It defaults to the
 * live Gatsby site, which is what the committed baselines were captured from;
 * point it at the Astro dev/preview server to diff the port against them:
 *
 *   SITE_URL=http://localhost:4321 npm run visual
 */
const SITE_URL = process.env.SITE_URL ?? "https://fabiolazzaroni.dev";

export default defineConfig({
  testDir: "./visual",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  reporter: [["list"]],
  // One flat folder of baselines, named by page/viewport/theme, with no project
  // or platform segment: the baselines are Chromium-on-Windows artefacts and a
  // second platform would silently fork them instead of failing loudly.
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
    baseURL: SITE_URL,
    deviceScaleFactor: 1,
    screenshot: "only-on-failure",
  },
});
