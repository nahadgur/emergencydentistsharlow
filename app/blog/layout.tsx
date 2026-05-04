import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';

// Blog hub metadata. Title under 60 chars, description under 160.
export const metadata: Metadata = {
  title: 'Dental Emergency Guides — Harlow Patients',
  description:
    'Practical guides on dental emergencies — what to do for a knocked-out tooth, abscess, broken tooth, wisdom-tooth pain. Written for Harlow patients.',
  alternates: { canonical: `${siteConfig.url}/blog/` },
  openGraph: {
    title: 'Dental Emergency Guides — Harlow Patients',
    description:
      'Practical guides on dental emergencies — what to do for a knocked-out tooth, abscess, broken tooth, wisdom-tooth pain. Written for Harlow patients.',
    url: `${siteConfig.url}/blog/`,
    type: 'website',
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
