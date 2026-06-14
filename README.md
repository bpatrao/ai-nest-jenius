# ai-nest-jenius

**AI Nest — Vibe for Good.** Website for **JEnius**, the Júnior Iniciativa de
Logística (Junior Enterprise of Logistics) at the University of Coimbra.

The site presents JEnius's services, projects, organisational structure,
recruitment, FAQs and the JENews™ newsletter, in Portuguese (pt-PT).

## Tech stack

- [TanStack Start](https://tanstack.com/start) (TanStack Router + React 19) with SSR
- [Vite 8](https://vite.dev/) via [`@lovable.dev/vite-tanstack-config`](https://www.npmjs.com/package/@lovable.dev/vite-tanstack-config)
- [Tailwind CSS 4](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) (Radix primitives)
- [Bun](https://bun.sh/) as the package manager / runner
- TypeScript

All page content (services, departments, projects, FAQs) is static data defined
in `src/lib/` and `src/routes/`, so the whole site can be prerendered to static
HTML — see [Static build for Cloudflare Pages](#static-build-for-cloudflare-pages).

## Prerequisites

- [Bun](https://bun.sh/) `>= 1.3`

## Getting started

```bash
bun install
bun run dev
```

The dev server runs on Vite's default port (printed in the terminal).

## Scripts

| Script                   | What it does                                                        |
| ------------------------ | ------------------------------------------------------------------- |
| `bun run dev`            | Start the development server with HMR                               |
| `bun run build`          | Default build (SSR; Lovable auto-targets Cloudflare when deployed)  |
| `bun run build:dev`      | Build in development mode                                           |
| `bun run build:static`   | **Static build** — prerenders every route to `dist/client/`        |
| `bun run preview:static` | Serve the static `dist/client/` output locally                     |
| `bun run preview`        | Preview the default build                                          |
| `bun run lint`           | Run ESLint                                                          |
| `bun run format`         | Format with Prettier                                                |

## Project structure

```
src/
  routes/        File-based routes (TanStack Router). Dynamic: servico.$slug, estrutura.$slug
  components/    Shared components + components/ui (shadcn/ui)
  lib/           Static content & helpers (services.ts, departments.ts, …)
  assets/        Image metadata (*.asset.json) + bundled images
  router.tsx     Router factory
  server.ts      SSR entry (error-handling wrapper)
public/
  __l5e/         Local copies of image assets (served at /__l5e/assets-v1/…)
  social-preview.png   Open Graph / Twitter card image
scripts/
  finalize-static.mjs  Post-build step for the static deploy (writes 404.html)
```

## Assets

Images are referenced through `*.asset.json` files in `src/assets/`, whose `url`
field points at `/__l5e/assets-v1/<id>/<file>`. Local copies of every one of
those images live under `public/__l5e/…`, and the Open Graph image lives at
`public/social-preview.png`, so **the site serves all its own assets** with no
dependency on an external CDN. This is what makes a fully static deploy possible.

To refresh an asset, replace the file at the matching path under `public/__l5e/`.

## Static build for Cloudflare Pages

`bun run build:static` produces a fully static site — every route (including the
dynamic `servico/$slug` and `estrutura/$slug` pages) is prerendered to HTML, and
a client-side fallback shell is emitted for unknown paths.

```bash
bun run build:static
# Output: dist/client/  (deploy this directory)

# Preview it locally exactly as a static host would serve it:
bun run preview:static
```

### How it works

- A `STATIC_BUILD=true` env var (set by the `build:static` script) switches
  `vite.config.ts` into static mode: it enables TanStack Start prerendering
  (`crawlLinks` + explicit dynamic-route slugs) and disables Nitro so the output
  is plain static files rather than a server bundle.
- `scripts/finalize-static.mjs` copies the prerendered fallback shell to
  `dist/client/404.html`, which Cloudflare Pages serves for any unmatched path
  (the SPA then renders the correct page or a 404).

### Deploy

**Option A — Git integration (recommended).** In the Cloudflare dashboard,
create a Pages project from this repo with:

- **Build command:** `bun run build:static`
- **Build output directory:** `dist/client`

**Option B — Direct upload with Wrangler.**

```bash
bun run build:static
npx wrangler pages deploy dist/client
```

> The default `bun run build` (SSR/Nitro) is left untouched — only
> `build:static` produces the static `dist/client/` output.
