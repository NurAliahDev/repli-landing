# Replai — marketing site

Static marketing site for Replai, a WhatsApp CRM with an AI agent. Astro 5, no
UI framework, no client-side router. 30 routes, zero external JavaScript bundles —
the only scripts are small inline islands (header drawer, reveal-on-scroll, the
login form).

Design direction, palette and type decisions are recorded in
[`LANDING-PAGE-BRIEF.md`](LANDING-PAGE-BRIEF.md).

> [!WARNING]
> **Do not point `usereplai.site` at this build yet.** The site names real
> Indonesian companies as customers and shows named people with their
> photographs. None of it is cleared. Read
> [`BRAND-CONSENT.md`](BRAND-CONSENT.md) first — it lists exactly what has to be
> signed and what to delete if it is not. Deploying to a preview URL is fine;
> that document is about the public launch.

## Requirements

- Node.js 22 (pinned in `.nvmrc` and `package.json` → `engines`)
- npm 10

## Local development

```bash
npm ci            # npm install also works; ci respects the lockfile
npm run dev       # http://localhost:4321, hot reload
npm run build     # writes dist/
npm run preview   # serves dist/ exactly as a host would
```

`npm run preview` is the one to trust before deploying — `dev` transforms on the
fly, `preview` serves the real build output from disk.

## What the build produces

`npm run build` writes a plain static tree to `dist/`:

- 30 pages → 35 HTML files
- 5 of those are redirect stubs (`/features`, `/pricing`, `/register`,
  `/sign-up`, `/signup`) generated from `redirects` in `astro.config.mjs`. They
  are `<meta http-equiv="refresh">` pages carrying `noindex` and a canonical
  link, so they work on any static host with no host-specific config.
- `dist/404.html` — a real page, not a stub. Configure your host to serve it.
- `dist/sitemap.xml`, `dist/robots.txt`

There is **no server runtime**: no adapter, no functions, no environment
variables, no database. `/login` rejects every credential in the browser and
makes no network request; the contact form hands off to `mailto:`. Nothing here
needs a secret, so there is nothing to configure in a host's env panel.

## Before a real domain

`astro.config.mjs` sets `site: 'https://usereplai.site'`. That value builds the
canonical tags and the sitemap. **If you deploy to a different hostname, change
it**, or every page will advertise a canonical URL that is not where it lives.
Preview deployments are fine to leave alone — they are `noindex` by convention on
both hosts below — but a production domain change means editing that line.

---

## Deploy: option A — Vercel

Vercel deploys a static Astro site with zero configuration and no adapter.

1. **Vercel dashboard → Add New → Project → Import Git Repository.** Connect the
   GitHub account that owns `NurAliahDev/repli-landing`. You need admin access on
   the GitHub repo so Vercel can install its GitHub App.
2. Pick the repo. Vercel detects Astro and fills in:
   - Framework Preset: **Astro**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm ci`
3. Leave Environment Variables empty. This site has none.
4. **Deploy.** First build is roughly a minute.
5. **Project → Settings → Domains** to add `usereplai.site`. Vercel prints the DNS
   records to create at your registrar (an `A` record for the apex, `CNAME` for
   `www`).

Node version comes from `engines.node` in `package.json`, so the build runs on
Node 22 without touching project settings.

Do **not** add `vercel.json` rewrites — Vercel's own Astro docs say rewriting URL
paths that way produces inconsistent behaviour with Astro. Redirects belong in
`astro.config.mjs`, which is where ours are.

### Vercel from the CLI instead

```bash
npm i -g vercel
vercel login
vercel          # preview deployment, answers get saved to .vercel/
vercel --prod   # production
```

`.vercel/` is generated per-machine and should stay out of git — add it to
`.gitignore` if you use this path.

---

## Deploy: option B — Cloudflare Pages

Pages is the older of Cloudflare's two static paths and still the shortest one
from a Git repo.

1. **Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git.**
   Authorise GitHub and pick `NurAliahDev/repli-landing`.
2. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
3. Add one environment variable, because Cloudflare's default build image can
   lag behind: `NODE_VERSION` = `22`. (`.nvmrc` in the repo says the same thing;
   the variable is the one that is unambiguous.)
4. **Save and Deploy.**
5. **Custom domains** tab → add `usereplai.site`. If the domain's DNS is already on
   Cloudflare, the records are created for you.

Pages serves `404.html` for unmatched paths automatically, and resolves
`/about/index.html` for `/about` without extra config.

---

## Deploy: option C — Cloudflare Workers (static assets)

Workers now serves static assets directly, and this is the path Cloudflare
develops most actively. Because the site is fully prebuilt, **no Worker script is
needed** — there is no `main`, just an assets directory.

This is the path the repo is set up for: `wrangler.jsonc` is committed and
`wrangler` is a devDependency, so Workers Builds uses the pinned version rather
than whatever `latest` is on the day it builds. The Worker is named
`repli-landing`; the name in that file has to match the one in the dashboard.

From your machine:

```bash
npx wrangler login
npm run build
npx wrangler deploy
```

`npx wrangler deploy --dry-run` checks the config and counts the files it would
upload without touching the account.

To build on push instead, use **Workers & Pages → Create → Workers → Connect to
Git**, point it at the GitHub repo, and set:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy` — runs on the production branch, `main`
- Preview command: `npx wrangler preview` — runs on every other branch, and only
  when Preview Builds is enabled under Branch control

Those three are the Cloudflare defaults, so there is nothing to change.

Custom domain is set per-Worker under **Settings → Domains & Routes**.

---

## Which one

| | Vercel | Cloudflare Pages | Cloudflare Workers |
| --- | --- | --- | --- |
| Config files needed | none | none | `wrangler.jsonc` (committed) |
| Setup effort | lowest | low | moderate |
| Astro support | first-class, documented | framework preset | generic static assets |
| Where Cloudflare is investing | — | maintained | actively developed |

Take **Vercel** if you want it live in five minutes with nothing added to the
repo. Take **Cloudflare Workers** if the rest of the stack is already on
Cloudflare and you expect to add redirects, headers or an API on the same domain
later. **Pages** is the middle option and needs no repo changes either.

All three build the same `dist/`, so switching later costs one afternoon of DNS,
not a rewrite.
