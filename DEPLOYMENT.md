# Cloudflare Pages deployment

Cloudflare Pages can build and deploy this repository directly from GitHub.
The Pages settings are:

- Root directory: repository root (leave blank)
- Build command: `npm run build`
- Build output directory: `.vitepress/dist`

The project name and output directory are also declared in `wrangler.toml`.
If the existing Pages project has a different name, change `name` there to
match it.

In Cloudflare, connect this GitHub repository to a Pages project and set the
production branch to `main`. Cloudflare will then build and deploy on each push;
no GitHub Actions workflow, API token, or account ID secret is needed.
