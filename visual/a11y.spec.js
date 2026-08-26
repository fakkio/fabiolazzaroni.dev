import AxeBuilder from "@axe-core/playwright";
import {expect, test} from "@playwright/test";
import {gotoWithTheme} from "./color-mode.js";

const TARGETS = [
  {name: "index", path: "/"},
  {name: "privacy", path: "/privacy"},
  // Any missing path serves the 404 page (shared hosting, generated .htaccess).
  {name: "404", path: "/this-page-does-not-exist/"},
];

const THEMES = /** @type {const} */ (["light", "dark"]);

// The site's declared conformance target (see docs/adr/0001).
const WCAG_TAGS = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"];

for (const theme of THEMES) {
  test.describe(theme, () => {
    test.use({colorScheme: theme});

    for (const target of TARGETS) {
      test(target.name, async ({page}) => {
        await gotoWithTheme(page, target.path, theme);

        const results = await new AxeBuilder({page})
          .withTags(WCAG_TAGS)
          .analyze();

        expect(results.violations).toEqual([]);
      });
    }

    // axe only inspects the DOM at rest, so it can't catch a control that
    // looks fine statically but can't actually be driven from the keyboard
    // (SC 2.1.1) or that drops its focus affordance (SC 2.4.7). Regression
    // tests for those two, alongside the fixes that first addressed them.
    test("the theme toggle is keyboard-operable", async ({page}) => {
      await gotoWithTheme(page, "/", theme);

      const toggle = page.locator("[data-dark-toggle]");
      const before = await toggle.getAttribute("aria-pressed");

      await toggle.press("Enter");

      await expect(toggle).not.toHaveAttribute("aria-pressed", before);
      await expect
        .poll(() => page.evaluate(() => document.documentElement.dataset.theme))
        .toBe(before === "true" ? "light" : "dark");
    });

    test("a keyboard-focused link gets the same underline reveal as hover", async ({
      page,
    }) => {
      await gotoWithTheme(page, "/privacy", theme);

      const link = page.locator("a:not(.onlyIcon)").first();
      await link.focus();

      await expect
        .poll(() =>
          link.evaluate((el) => getComputedStyle(el, "::after").opacity),
        )
        .toBe("1");
    });
  });
}
