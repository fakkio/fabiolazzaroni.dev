// Drives astro's background dev server directly: Playwright's `webServer`
// (which needs a command it can keep a handle on) can't manage a daemon.
// `astro dev stop` signals the running daemon to tear itself down and does
// return immediately, so that part stays a blocking spawnSync. Starting the
// daemon does NOT reliably return on its own, at least on Windows — a
// blocking spawnSync there hung forever, past astro's own "ready" log line,
// so it's started with a detached async spawn instead and readiness is
// confirmed independently via polling.
import {fileURLToPath} from "node:url";
import {dirname, join} from "node:path";
import {spawn, spawnSync} from "node:child_process";

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const ASTRO_BIN = join(ROOT, "node_modules", "astro", "bin", "astro.mjs");

const PORT = process.env.LOCAL_PORT ?? "4321";
const LOCAL_URL = `http://localhost:${PORT}`;
const READY_TIMEOUT_MS = 30_000;
const READY_POLL_MS = 500;

const astro = (...args) =>
  spawnSync(process.execPath, [ASTRO_BIN, ...args], {
    cwd: ROOT,
    stdio: "inherit",
  });

const astroDevStart = (...args) => {
  const child = spawn(process.execPath, [ASTRO_BIN, ...args], {
    cwd: ROOT,
    stdio: "ignore",
    detached: true,
  });
  child.unref();
};

const waitUntilReady = async (url, timeoutMs) => {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    try {
      await fetch(url);
      return true;
    } catch {
      await new Promise((resolve) => setTimeout(resolve, READY_POLL_MS));
    }
  }
  return false;
};

// Clear any stale daemon (e.g. a previous run that crashed mid-test) before
// starting a fresh one on the expected port.
astro("dev", "stop");

console.log(`a11y-ci: starting the dev server on port ${PORT}...`);
astroDevStart("dev", "--port", PORT);

const ready = await waitUntilReady(LOCAL_URL, READY_TIMEOUT_MS);
if (!ready) {
  console.error(`a11y-ci: dev server never became ready at ${LOCAL_URL}`);
  astro("dev", "stop");
  process.exit(1);
}

console.log("a11y-ci: running the a11y suite...");
const test = spawnSync("npm", ["run", "a11y:local"], {
  cwd: ROOT,
  stdio: "inherit",
  shell: true,
  env: {...process.env, LOCAL_URL},
});

astro("dev", "stop");

process.exit(test.status ?? 1);
