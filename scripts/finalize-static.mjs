// Post-processing for the static (Cloudflare Pages) build.
//
// TanStack Start prerenders every known route to static HTML under dist/client
// and emits a client-only fallback shell at dist/client/_shell.html. Cloudflare
// Pages serves a top-level 404.html for any path that doesn't match a file, so
// we copy the shell there: unknown URLs boot the SPA (with a real 404 status)
// and the app's own not-found page renders.
import { copyFile, access } from "node:fs/promises";
import { join } from "node:path";

const clientDir = join(process.cwd(), "dist", "client");
const shell = join(clientDir, "_shell.html");
const notFound = join(clientDir, "404.html");

try {
  await access(shell);
  await copyFile(shell, notFound);
  console.log("[finalize-static] Wrote dist/client/404.html (SPA fallback).");
} catch {
  console.warn(
    "[finalize-static] No _shell.html found — skipping 404.html fallback. " +
      "Run `bun run build:static` first.",
  );
}
