# GitHub Pages deployment

The site is built with VitePress and deployed by `.github/workflows/deploy.yml`.
The workflow builds the site and publishes `.vitepress/dist` to GitHub Pages.

In the repository settings, open **Pages** and set the build and deployment
source to **GitHub Actions**. No Cloudflare API token or account ID is needed.

Pushes to `main` and manually triggered runs deploy the site.
