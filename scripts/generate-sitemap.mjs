import { mkdir, writeFile } from 'node:fs/promises'

const baseUrl = 'https://agmatia.org'
const routes = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/about', changefreq: 'monthly', priority: '0.8' },
  { path: '/projects', changefreq: 'weekly', priority: '0.9' },
  { path: '/projects/aegis-linux', changefreq: 'monthly', priority: '0.7' },
  { path: '/contact', changefreq: 'monthly', priority: '0.8' }
]

const lastmod = new Date().toISOString().slice(0, 10)
const urls = routes
  .map(
    ({ path, changefreq, priority }) =>
      `  <url>\n    <loc>${baseUrl}${path}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`
  )
  .join('\n')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`

await mkdir('public', { recursive: true })
await writeFile('public/sitemap.xml', sitemap, 'utf8')
