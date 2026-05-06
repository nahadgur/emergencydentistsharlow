import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import LocationsIndexClient from './ClientPage';

const title = 'Areas we cover in Harlow';
const description =
  'Same-day emergency dental matching across Old Harlow, Church Langley, Newhall, Sumners, Staple Tye, The Stow, Mark Hall, Netteswell, Sawbridgeworth, and Roydon.';
const canonical = `${siteConfig.url}/location/`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { title, description, url: canonical, type: 'website' },
};

export default function Page() {
  return <LocationsIndexClient />;
}
