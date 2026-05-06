import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import ServicesIndexClient from './ClientPage';

const title = 'Dental emergencies we cover';
const description =
  'Same-day matching across seven emergency types: severe toothache, knocked-out tooth, broken tooth, lost filling or crown, abscess and facial swelling, out-of-hours care, and wisdom tooth pain.';
const canonical = `${siteConfig.url}/services/`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { title, description, url: canonical, type: 'website' },
};

export default function Page() {
  return <ServicesIndexClient />;
}
