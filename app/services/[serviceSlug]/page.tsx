import type { Metadata } from 'next';
import { getServiceBySlug, getAllServiceSlugs } from '@/data/services';
import { siteConfig } from '@/data/site';
import ServiceClient from './ClientPage';

interface Props {
  params: { serviceSlug: string };
}

export function generateStaticParams() {
  return getAllServiceSlugs().map(slug => ({ serviceSlug: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getServiceBySlug(params.serviceSlug);
  if (!service) return { title: 'Not Found' };

  const canonical = `${siteConfig.url}/services/${service.slug}/`;
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: canonical,
      type: 'website',
    },
  };
}

export default function Page({ params }: Props) {
  return <ServiceClient params={params} />;
}
