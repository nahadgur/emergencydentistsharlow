import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import ContactPageClient from './ClientPage';

const title = 'Contact';
const description =
  'How to reach Emergency Dentists Harlow. Same-day matching with vetted, GDC-registered emergency dentists across CM17, CM18, CM19, CM20, and CM21.';
const canonical = `${siteConfig.url}/contact/`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { title, description, url: canonical, type: 'website' },
};

export default function Page() {
  return <ContactPageClient />;
}
