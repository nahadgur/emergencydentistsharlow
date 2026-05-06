import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import BlogIndexClient from './ClientPage';

const title = 'Dental emergency guides';
const description =
  'Practitioner-grade writing on dental emergencies, after-hours care, and what to do before you reach a clinic. Written for Harlow patients in genuine dental need.';
const canonical = `${siteConfig.url}/blog/`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { title, description, url: canonical, type: 'website' },
};

export default function Page() {
  return <BlogIndexClient />;
}
