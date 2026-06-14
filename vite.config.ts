// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

import { services } from "./src/lib/services";
import { departments } from "./src/lib/departments";

// Static build (Cloudflare Pages) is opt-in via `STATIC_BUILD=true` so the
// default Lovable dev/deploy flow is untouched. The `build:static` script sets it.
const STATIC_BUILD = process.env.STATIC_BUILD === "true";

// Dynamic routes aren't all reachable by crawling a single index page, so list
// their slugs explicitly for the prerenderer (crawlLinks handles the rest).
const dynamicPages = [
  ...services.map((s) => ({ path: `/servico/${s.slug}` })),
  ...departments.map((d) => ({ path: `/estrutura/${d.slug}` })),
];

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    ...(STATIC_BUILD
      ? {
          // Crawl from "/" to discover every linked page, plus the explicit
          // dynamic routes above. autoSubfolderIndex emits `route/index.html`
          // so static hosts serve clean URLs.
          prerender: {
            enabled: true,
            crawlLinks: true,
            autoSubfolderIndex: true,
            failOnError: true,
          },
          pages: dynamicPages,
          // Emit a client-side fallback shell so any non-prerendered path still
          // boots the app on a static host instead of hard 404-ing.
          spa: { enabled: true },
        }
      : {}),
  },
  // Disable nitro for the static build: TanStack Start prerenders every route to
  // static HTML against its own default output layout (a nitro preset would
  // relocate the server bundle and break the prerender preview server). The
  // result is a plain static `dist/` deployable to Cloudflare Pages.
  ...(STATIC_BUILD ? { nitro: false } : {}),
});
