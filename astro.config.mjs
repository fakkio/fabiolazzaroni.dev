// @ts-check
import {defineConfig} from "astro/config";

// https://astro.build/config
export default defineConfig({
  scopedStyleStrategy: "where",
  build: {
    // Site is tiny (3 pages) and the shared stylesheet is the only render-blocking
    // request in the critical path — inline it always to remove that chain.
    inlineStylesheets: "always",
  },
});
