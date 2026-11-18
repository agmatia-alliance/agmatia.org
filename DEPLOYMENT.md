# Cloudflare Pages deployment

The site is built with VitePress. Its Pages configuration is in `wrangler.toml`:

- Build command: `npm run build`
- Build output directory: `.vitepress/dist`
- Cloudflare Pages project name: `agmatia-alliance`

To deploy from GitHub Actions, create the `agmatia-alliance` Pages project in
Cloudflare and add these repository secrets under **Settings → Secrets and
variables → Actions**:

- `CLOUDFLARE_API_TOKEN` — a token with permission to deploy Cloudflare Pages
- `CLOUDFLARE_ACCOUNT_ID` — the Cloudflare account ID containing the project

Pushes to `main` deploy to production. Running the workflow manually on another
branch deploys a Pages preview for that branch. If you choose a different Pages
project name, change `name` in `wrangler.toml` to match it.
