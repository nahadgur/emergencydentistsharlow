// lib/breadcrumbs.ts
// Helper for building schema.org BreadcrumbList JSON-LD.
import { siteConfig } from '@/data/site';

export interface BreadcrumbItem {
  name: string;
  url: string; // path only e.g. "/services/" — base URL prepended automatically
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}
