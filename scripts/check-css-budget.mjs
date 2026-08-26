// build.inlineStylesheets is "always" in astro.config.mjs, a deliberate
// trade-off given this site is 3 static pages: every page repeats the full
// bundled CSS instead of sharing one cached external file. That trade-off
// stops paying off once the CSS (or the page count) grows enough that the
// repeated inline copies cost more than a single cacheable request would.
// This script has no way to know the real crossover point, so it just warns
// when the inlined CSS crosses a size budget — a nudge to revisit
// astro.config.mjs (e.g. switch back to "auto"), not a hard rule.
import {readdirSync, readFileSync, statSync} from "node:fs";
import {join} from "node:path";
import {fileURLToPath} from "node:url";

const ROOT = join(fileURLToPath(import.meta.url), "..", "..");
const DIST = join(ROOT, "dist");
const BUDGET_BYTES = 20 * 1024;

const htmlFiles = [];
const walk = (dir) => {
  for (const entry of readdirSync(dir, {withFileTypes: true})) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) walk(path);
    else if (entry.name.endsWith(".html")) htmlFiles.push(path);
  }
};

if (!statSync(DIST, {throwIfNoEntry: false})) {
  console.error(
    `check-css-budget: no dist/ found at ${DIST} — run the build first`,
  );
  process.exit(1);
}
walk(DIST);

let largest = 0;
for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  for (const match of html.matchAll(/<style>([\s\S]*?)<\/style>/g)) {
    const size = Buffer.byteLength(match[1], "utf8");
    if (size > largest) largest = size;
  }
}

const kib = (bytes) => (bytes / 1024).toFixed(1);

if (largest > BUDGET_BYTES) {
  console.warn(
    `check-css-budget: inlined CSS is ${kib(largest)} KiB, over the ${kib(BUDGET_BYTES)} KiB budget.\n` +
      `  build.inlineStylesheets is "always" in astro.config.mjs — every page now repeats this much CSS.\n` +
      `  Worth reconsidering: switch back to "auto" (Astro's own 4 KiB threshold) if the site has grown enough pages that a shared cached file would win.`,
  );
} else {
  console.log(
    `check-css-budget: inlined CSS is ${kib(largest)} KiB (budget: ${kib(BUDGET_BYTES)} KiB) — OK`,
  );
}
