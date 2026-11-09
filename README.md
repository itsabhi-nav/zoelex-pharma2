# zoelex-pharma2

Zoelex Pharma website — a Next.js site for a Pune-based contract and
private-label nutraceutical manufacturer.

## Local development

```bash
npm install
npm run dev
```

## Social preview / Open Graph

The site ships a static Open Graph image at `/og.png` (1200×630) and exposes
the matching `og:image` / `twitter:image` metadata.

For correct previews when a link is shared on WhatsApp, LinkedIn, X or any
other social platform, deploy the site to a public HTTPS URL and share that
URL (not the GitHub repository link).

Set `NEXT_PUBLIC_SITE_URL` to the public production URL when the custom domain
is connected:

```bash
NEXT_PUBLIC_SITE_URL=https://zoelexpharma.com
```

On Vercel, Netlify and Cloudflare Pages the deployment URL is detected
automatically when the variable is not set.

## Build

```bash
npm run build
```
