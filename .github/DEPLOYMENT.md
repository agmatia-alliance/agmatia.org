# Deployment: Cloudflare static assets

This repository builds with VitePress and is configured for Cloudflare Workers
Static Assets. `wrangler.toml` sets the Worker name and serves the generated
files from `.vitepress/dist`.

In Cloudflare, connect this GitHub repository as a Worker and configure:

- Root directory: repository root (leave blank; do not set it to `docs`)
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`

Cloudflare will then build and deploy on pushes to the configured production
branch. No GitHub Actions workflow, API token, or account ID secret is needed.
