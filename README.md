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

## Contact form (optional)

The contact form works out of the box: with no configuration it opens the
visitor's email client (`mailto:`). To receive submissions by email without a
backend, create a free key at [web3forms.com](https://web3forms.com) and add it
as a repository secret named `WEB3FORMS_KEY` — the workflow wires it in
automatically.
