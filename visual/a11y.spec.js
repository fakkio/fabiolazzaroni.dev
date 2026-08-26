import AxeBuilder from "@axe-core/playwright";
import {expect, test} from "@playwright/test";

const TARGETS = [
  {name: "index", path: "/"},
  {name: "privacy", path: "/privacy"},
  // Any missing path serves the 404 page (shared hosting, generated .htaccess).
  {name: "404", path: "/this-page-does-not-exist/"},
];

const THEMES = /** @type {const} */ (["light", "dark"]);

// The theme is picked by a blocking script that reads localStorage first and
// `prefers-color-scheme` second, so drive both and let them agree (see
// site.spec.js).
const COLOR_MODE_KEY = "color-mode";

// The site's declared conformance target (see docs/adr/0001).
const WCAG_TAGS = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"];

for (const theme of THEMES) {
  test.describe(theme, () => {
    test.use({colorScheme: theme});

    for (const target of TARGETS) {
      test(target.name, async ({page}) => {
        await page.addInitScript(
          ([key, value]) => window.localStorage.setItem(key, value),
          [COLOR_MODE_KEY, theme],
        );

        await page.goto(target.path, {waitUntil: "networkidle"});

        const results = await new AxeBuilder({page})
          .withTags(WCAG_TAGS)
          .analyze();

        expect(results.violations).toEqual([]);
      });
    }
  });
}
