import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';

// Services hub metadata. The page itself is a client component, so the
// per-page meta lives at the segment-layout level. Title under 60 chars,
// description under 160 chars per spec.
export const metadata: Metadata = {
  title: 'Dental Emergencies Covered — Match in Harlow',
  description:
    'Seven dental emergency types we match for in Harlow — toothache, abscess, knocked-out tooth, broken tooth, lost crown, trauma, wisdom-tooth pain. Free.',
  alternates: { canonical: `${siteConfig.url}/services/` },
  openGraph: {
    title: 'Dental Emergencies Covered — Match in Harlow',
    description:
      'Seven dental emergency types we match for in Harlow — toothache, abscess, knocked-out tooth, broken tooth, lost crown, trauma, wisdom-tooth pain. Free.',
    url: `${siteConfig.url}/services/`,
    type: 'website',
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
