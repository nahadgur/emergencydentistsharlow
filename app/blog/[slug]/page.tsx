import type { Metadata } from 'next';
import { getArticleBySlug, getAllBlogSlugs } from '@/data/blog';
import { siteConfig } from '@/data/site';
import BlogPostClient from './ClientPage';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllBlogSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  if (!article) return { title: 'Not Found' };

  const canonical = `${siteConfig.url}/blog/${article.slug}/`;
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: canonical,
      type: 'article',
      publishedTime: article.publishDate,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.metaTitle,
      description: article.metaDescription,
    },
  };
}

export default function Page({ params }: Props) {
  return <BlogPostClient params={params} />;
}
