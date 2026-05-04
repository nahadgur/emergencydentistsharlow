// app/sitemap.ts
//
// IMPORTANT: lastModified uses static dates not new Date() — every Google
// fetch with new Date() looks "fresh" and forces re-crawl, burning crawl
// budget on pages that haven't changed.

import type { MetadataRoute } from 'next';
import { services } from '@/data/services';
import { AREA_HUBS } from '@/data/locations';
import { siteConfig } from '@/data/site';
import { blogArticles } from '@/data/blog';

const SITE_LAUNCH = '2026-05-04';
const LAST_CONTENT_UPDATE = '2026-05-04';

export const revalidate = 3600;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`,         lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/services/`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/location/`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog/`,     lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${base}/about/`,    lastModified: SITE_LAUNCH,         changeFrequency: 'yearly',  priority: 0.5 },
    { url: `${base}/contact/`,  lastModified: SITE_LAUNCH,         changeFrequency: 'yearly',  priority: 0.5 },
    { url: `${base}/privacy/`,  lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${base}/terms/`,    lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'yearly',  priority: 0.3 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map(s => ({
    url: `${base}/services/${s.slug}/`,
    lastModified: LAST_CONTENT_UPDATE,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const areaPages: MetadataRoute.Sitemap = AREA_HUBS.map(a => ({
    url: `${base}/location/${a.slug}/`,
    lastModified: LAST_CONTENT_UPDATE,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = blogArticles.map(article => ({
    url: `${base}/blog/${article.slug}/`,
    lastModified: article.publishDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...areaPages, ...blogPages];
}
