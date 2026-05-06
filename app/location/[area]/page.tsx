import type { Metadata } from 'next';
import { getAreaContent, areaContent } from '@/data/areaContent';
import { siteConfig } from '@/data/site';
import AreaClient from './ClientPage';

interface Props {
  params: { area: string };
}

export function generateStaticParams() {
  return Object.keys(areaContent).map(slug => ({ area: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const area = getAreaContent(params.area);
  if (!area) return { title: 'Not Found' };

  const canonical = `${siteConfig.url}/location/${params.area}/`;
  return {
    title: area.metaTitle,
    description: area.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: area.metaTitle,
      description: area.metaDescription,
      url: canonical,
      type: 'website',
    },
  };
}

export default function Page({ params }: Props) {
  return <AreaClient params={params} />;
}
