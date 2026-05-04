'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, Clock, AlertCircle } from 'lucide-react';
import { getArticleBySlug, blogArticles, ContentBlock } from '@/data/blog';
import { siteConfig } from '@/data/site';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { HeroLeadForm } from '@/components/HeroLeadForm';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { EmergencyDisclaimer } from '@/components/EmergencyDisclaimer';
import { buildBreadcrumbSchema } from '@/lib/breadcrumbs';

function renderBlock(block: ContentBlock, i: number) {
  switch (block.type) {
    case 'h2':
      return (
        <h2 key={i} className="font-display text-[26px] lg:text-[32px] text-ink leading-tight mt-10 mb-4">
          {block.text}
        </h2>
      );
    case 'h3':
      return (
        <h3 key={i} className="font-display text-[20px] lg:text-[24px] text-ink leading-tight mt-8 mb-3">
          {block.text}
        </h3>
      );
    case 'p':
      return (
        <p key={i} className="text-[15.5px] text-ink/80 leading-relaxed mb-4">
          {block.text}
        </p>
      );
    case 'list':
      return (
        <ul key={i} className="list-disc pl-6 space-y-2 mb-5 text-[15px] text-ink/80 leading-relaxed">
          {block.items?.map((item, j) => <li key={j}>{item}</li>)}
        </ul>
      );
    case 'note':
      return (
        <div key={i} className="bg-urgent-50 border-l-4 border-urgent-500 rounded-md p-4 my-6">
          <div className="flex items-start gap-3">
            <AlertCircle size={16} className="text-urgent-600 flex-shrink-0 mt-0.5" />
            <p className="text-[14px] text-ink/85 leading-relaxed">{block.text}</p>
          </div>
        </div>
      );
    default:
      return null;
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const [modal, setModal] = useState(false);
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const others = blogArticles.filter(a => a.slug !== article.slug).slice(0, 3);

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Guides',     url: '/blog/' },
    { name: article.title, url: `/blog/${article.slug}/` },
  ]);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${siteConfig.url}/blog/${article.slug}/#article`,
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.publishDate,
    author: { '@type': 'Organization', '@id': `${siteConfig.url}/#organization` },
    publisher: { '@id': `${siteConfig.url}/#organization` },
    mainEntityOfPage: `${siteConfig.url}/blog/${article.slug}/`,
    inLanguage: 'en-GB',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <LeadFormModal isOpen={modal} onClose={() => setModal(false)} />
      <Header onOpenModal={() => setModal(true)} />

      <main className="flex-grow bg-cream">

        <section className="bg-ink text-white">
          <div className="container-width pt-10 pb-12">
            <Breadcrumbs dark items={[{ label: 'Guides', href: '/blog/' }, { label: article.title }]} />
            <div className="max-w-3xl mt-6">
              <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.18em] text-brand-300 mb-4">
                <span>{article.category}</span>
                <span className="w-1 h-1 rounded-full bg-white/30" />
                <span className="flex items-center gap-1"><Clock size={11} /> {article.publishDate}</span>
              </div>
              <h1 className="font-display text-[32px] lg:text-[44px] leading-tight text-white mb-4">
                {article.title}
              </h1>
              <p className="text-[15px] lg:text-[17px] text-white/75 leading-relaxed">
                {article.excerpt}
              </p>
            </div>
          </div>
        </section>

        <div className="container-width py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
            <article className="lg:col-span-2">
              {article.content.map(renderBlock)}

              <div className="mt-12">
                <EmergencyDisclaimer variant="block" />
              </div>
            </article>

            <aside>
              <div className="lg:sticky lg:top-24 space-y-5">
                <div className="hidden lg:block">
                  <HeroLeadForm />
                </div>

                <div className="bg-white border border-ink/10 rounded-lg p-5">
                  <p className="eyebrow mb-3">Other guides</p>
                  <ul className="space-y-3">
                    {others.map(o => (
                      <li key={o.slug}>
                        <Link href={`/blog/${o.slug}/`} className="block group">
                          <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-brand-600 mb-1">{o.category}</p>
                          <p className="text-[14px] font-bold text-ink leading-tight group-hover:text-brand-600 transition-colors">{o.title}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link href="/blog/" className="inline-flex items-center gap-1 mt-4 pt-3 border-t border-ink/8 text-[12px] font-bold text-brand-600 hover:text-brand-700">
                    All guides <ArrowRight size={11} />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>

        <section className="bg-brand-600 text-white text-center py-14">
          <div className="container-width max-w-3xl">
            <h2 className="font-display text-[26px] lg:text-[36px] leading-tight mb-3">
              Need a Harlow emergency dentist now?
            </h2>
            <p className="text-[15px] text-white/85 max-w-xl mx-auto mb-6 leading-relaxed">
              Free matching, GDC-verified network, most introductions within the hour.
            </p>
            <button onClick={() => setModal(true)} className="btn-on-dark text-[15px] px-7 py-3.5">
              Open the matching form <ArrowRight size={14} />
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
