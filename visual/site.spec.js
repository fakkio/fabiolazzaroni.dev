import {expect, test} from "@playwright/test";

const TARGETS = [
  {name: "index", path: "/"},
  // Any missing path serves the 404 page (shared hosting, generated .htaccess).
  {name: "404", path: "/this-page-does-not-exist/"},
];

const THEMES = /** @type {const} */ (["light", "dark"]);

const VIEWPORTS = [
  {name: "desktop", width: 1280, height: 800},
  {name: "mobile", width: 390, height: 844},
];

// The theme is picked by a blocking script that reads localStorage first and
// `prefers-color-scheme` second, so drive both and let them agree.
const COLOR_MODE_KEY = "color-mode";

// The Amstrad blink is not a CSS animation: a JS timer writes an inline colour
// on the span every 5-15s, which `animations: "disabled"` cannot touch. Pinning
// the span to the inherited link colour freezes it in its resting state -- an
// author `!important` rule outranks a plain inline style.
const FREEZE_BLINKING_AMSTRAD = `
  a[href*="Amstrad_CPC_464"] span { color: inherit !important; }
`;

for (const viewport of VIEWPORTS) {
  for (const theme of THEMES) {
    test.describe(`${viewport.name} / ${theme}`, () => {
      test.use({
        viewport: {width: viewport.width, height: viewport.height},
        colorScheme: theme,
      });

      for (const target of TARGETS) {
        test(`${target.name}`, async ({page}) => {
          await page.addInitScript(
            ([key, value]) => window.localStorage.setItem(key, value),
            [COLOR_MODE_KEY, theme]
          );

          await page.goto(target.path, {waitUntil: "networkidle"});
          await page.evaluate(() => document.fonts.ready);
          await page.addStyleTag({content: FREEZE_BLINKING_AMSTRAD});
          // The Amstrad gradient and the dark-mode toggle are react-spring
          // animations that settle shortly after mount; let them.
          await page.waitForTimeout(1000);

          await expect(page).toHaveScreenshot(
            `${target.name}-${viewport.name}-${theme}.png`,
            {
              fullPage: true,
              // An animated GIF: no frame of it is reproducible, so it is
              // painted over. Its box still takes part in the layout diff.
              mask: [page.locator('img[alt="John Travolta confuso"]')],
            }
          );
        });
      }
    });
  }
}
