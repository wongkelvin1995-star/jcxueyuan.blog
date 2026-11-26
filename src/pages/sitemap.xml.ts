import type { APIRoute } from 'astro';
import { ALL_ARTICLES } from '../data/articles';
import { AIRPORTS } from '../data/airports';

const SITE = 'https://jcxueyuan.blog';

export const GET: APIRoute = () => {
  const staticPaths = [
    '/',
    '/courses/',
    '/beginner/',
    '/student/',
    '/buying/',
    '/traffic/',
    '/knowledge/',
    '/tutorials/desktop/',
    '/tutorials/mobile/',
    '/campus-network/',
    '/study/',
    '/troubleshooting/',
    '/airports/',
    '/tools/learning-path/',
    '/tools/student-budget/',
    '/tools/traffic-calculator/',
    '/tools/dictionary/',
    '/tools/device-check/',
    '/tools/troubleshooter/',
    '/quiz/',
    '/updates/',
    '/methodology/',
    '/about/',
    '/contact/',
    '/disclosure/',
    '/privacy/',
  ];

  // 注意：/search/ 与 /profile/ 故意不进入 sitemap（与 noindex 策略一致）
  const articlePaths = ALL_ARTICLES.map((a) => a.url);
  const brandPaths = AIRPORTS.map((b) => `/airports/${b.slug}/`);
  const allUrls = [...new Set([...staticPaths, ...articlePaths, ...brandPaths])];

  const today = '2026-11-26';
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (path) => `  <url>
    <loc>${SITE}${path}</loc>
    <lastmod>${today}</lastmod>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
