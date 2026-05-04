import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';

// Location hub metadata. Title under 60 chars, description under 160.
export const metadata: Metadata = {
  title: 'Emergency Dentists by Area — Harlow CM17–CM21',
  description:
    'Free matching with vetted emergency dentists across every Harlow neighbourhood — Old Harlow, Church Langley, Staple Tye, and the CM17–CM21 postcodes.',
  alternates: { canonical: `${siteConfig.url}/location/` },
  openGraph: {
    title: 'Emergency Dentists by Area — Harlow CM17–CM21',
    description:
      'Free matching with vetted emergency dentists across every Harlow neighbourhood — Old Harlow, Church Langley, Staple Tye, and the CM17–CM21 postcodes.',
    url: `${siteConfig.url}/location/`,
    type: 'website',
  },
};

export default function LocationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
