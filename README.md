# Portfolio — Omar Benzeroual

A modern, minimalist portfolio built with **Next.js 15**, **Chakra UI v3** and
**TypeScript**. Sober, content-first design with full light/dark support.

## Stack

- Next.js 15 (App Router) — exported as a fully static site
- Chakra UI v3 + custom sober design system
- next-themes for light/dark mode
- TypeScript

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
```

All content lives in [`src/data/portfolio.ts`](src/data/portfolio.ts) (projects
and experience) and [`src/data/site.ts`](src/data/site.ts) (identity, socials,
tech stack). Editing those is all you need to update the site.

## Deployment — GitHub Pages

The site is deployed automatically to **GitHub Pages** via GitHub Actions
([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) on every push
to `main`. No external platform required.

One-time setup:

1. In the repository, go to **Settings → Pages → Build and deployment** and set
   **Source** to **GitHub Actions**.
2. Push to `main`. The workflow builds a static export and publishes it to
   `https://<user>.github.io/<repo>/`.

The base path is injected automatically at build time, so the site works whether
it's served from a subpath (project site) or a custom domain.

## Contact form

The contact form posts to [Web3Forms](https://web3forms.com) (no backend
required) and delivers submissions by email. The access key is public by design
and restricted to the site's domain. To override it (e.g. for a fork or staging
environment), set `NEXT_PUBLIC_WEB3FORMS_KEY` — locally in `.env.local` or as a
repository secret `WEB3FORMS_KEY` wired through the deploy workflow. If no key is
available, the form falls back to opening the visitor's email client (`mailto:`).
