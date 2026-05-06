'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { services } from '@/data/services';
import { feeBands } from '@/data/pricing';
import { siteConfig, FAQS_SERVICES } from '@/data/site';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FAQ } from '@/components/FAQ';
import { EmergencyDisclaimer } from '@/components/EmergencyDisclaimer';
import { buildBreadcrumbSchema } from '@/lib/breadcrumbs';

export default function ServicesIndexPage() {
  const [modal, setModal] = useState(false);

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Services', url: '/services/' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <LeadFormModal isOpen={modal} onClose={() => setModal(false)} />
      <Header onOpenModal={() => setModal(true)} />

      <main className="flex-grow bg-cream">

        {/* Hero — single-column. Lead form removed from this page;
            the bottom CTA opens the global LeadFormModal instead. */}
        <section className="bg-ink text-white">
          <div className="container-width pt-10 pb-14 lg:pt-14 lg:pb-20">
            <Breadcrumbs dark items={[{ label: 'Emergencies' }]} />
            <div className="mt-6 max-w-3xl">
              <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-brand-300 mb-4">
                Emergency dental services in Harlow
              </p>
              <h1 className="font-sans font-medium text-[34px] lg:text-[52px] leading-[1.05] tracking-tightest text-white mb-5">
                Seven emergency types we match for
              </h1>
              <p className="text-[15px] lg:text-[17px] leading-[1.6] text-white/80 max-w-2xl">
                Each emergency type has its own urgency triage. Critical presentations match within the hour. Routine same-day matters within the working day. Lost fillings within the working week.
              </p>
            </div>
          </div>
        </section>

        {/* Service catalogue */}
        <section className="py-16 lg:py-20">
          <div className="container-width">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
              {services.map(s => (
                <Link key={s.slug} href={`/services/${s.slug}/`} className="card p-5 lg:p-6 group">
                  <div className="flex items-baseline justify-between mb-3">
                    <span
                      className={`text-[10px] font-mono uppercase tracking-[0.18em] ${
                        s.urgencyTier === 'critical' ? 'text-urgent-600'
                        : s.urgencyTier === 'urgent' ? 'text-brand-600'
                        : 'text-ink/55'
                      }`}
                    >
                      {s.urgencyTier === 'critical' ? '★ Critical priority'
                        : s.urgencyTier === 'urgent' ? 'Same-day'
                        : 'Same-week'}
                    </span>
                  </div>
                  <h2 className="font-display text-[22px] text-ink mb-2 group-hover:text-brand-600 transition-colors leading-tight">
                    {s.title}
                  </h2>
                  <p className="text-[13.5px] text-ink/70 leading-relaxed mb-4">
                    {s.description}
                  </p>
                  <span className="text-[12px] font-bold text-brand-600 inline-flex items-center gap-1">
                    Read full guide <ArrowRight size={12} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Fee bands at a glance */}
        <section className="bg-paper py-16 lg:py-20">
          <div className="container-width">
            <div className="mb-8">
              <p className="eyebrow mb-3">— What you actually pay</p>
              <h2 className="font-display text-[30px] lg:text-[40px] leading-tight text-ink mb-3">
                Typical fees in Harlow
              </h2>
              <p className="text-[15px] text-ink/65 max-w-2xl leading-relaxed">
                NHS Band rates are the published 2026 NHS England fees. Private ranges are typical Harlow market quotes from dentists in our matching network. The matched dentist provides a written quote before any treatment.
              </p>
            </div>

            {/* Desktop table */}
            <div className="hidden md:block bg-white border border-ink/10 rounded-lg overflow-hidden">
              <table className="w-full text-[14px]">
                <thead>
                  <tr className="bg-ink text-white text-left">
                    <th className="px-5 py-3.5 font-mono text-[11px] uppercase tracking-[0.15em] font-normal text-white/70">Service</th>
                    <th className="px-5 py-3.5 font-mono text-[11px] uppercase tracking-[0.15em] font-normal text-white/70">NHS</th>
                    <th className="px-5 py-3.5 font-mono text-[11px] uppercase tracking-[0.15em] font-normal text-white/70">Private</th>
                    <th className="px-5 py-3.5 font-mono text-[11px] uppercase tracking-[0.15em] font-normal text-white/70">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {feeBands.map((b, i) => (
                    <tr key={b.slug} className={i < feeBands.length - 1 ? 'border-b border-ink/8' : ''}>
                      <td className="px-5 py-4 font-bold text-ink">{b.service}</td>
                      <td className="px-5 py-4 text-ink/75">
                        <span className="font-mono text-[12px] text-ink/55">{b.nhsBand}</span>
                        <br/>{b.nhsCost}
                      </td>
                      <td className="px-5 py-4 font-mono text-brand-700">{b.privateRange}</td>
                      <td className="px-5 py-4 text-[13px] text-ink/65 max-w-md">{b.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile stack */}
            <div className="md:hidden space-y-3">
              {feeBands.map(b => (
                <div key={b.slug} className="bg-white border border-ink/10 rounded-lg p-4">
                  <p className="font-bold text-ink mb-2">{b.service}</p>
                  <div className="grid grid-cols-2 gap-3 mb-2 text-[13px]">
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-ink/45 mb-0.5">NHS</p>
                      <p className="text-ink/85">{b.nhsCost}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-ink/45 mb-0.5">Private</p>
                      <p className="font-mono text-brand-700">{b.privateRange}</p>
                    </div>
                  </div>
                  <p className="text-[12px] text-ink/60 leading-relaxed">{b.notes}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* YMYL block */}
        <section className="py-12 lg:py-16">
          <div className="container-width max-w-4xl">
            <EmergencyDisclaimer variant="block" />
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-20 bg-cream">
          <div className="container-width max-w-4xl">
            <p className="eyebrow mb-3">— Common questions</p>
            <FAQ faqs={FAQS_SERVICES} title="Common questions about emergency dental services in Harlow" />
          </div>
        </section>

        {/* CTA */}
        <section className="bg-brand-600 text-center text-white py-16 lg:py-20">
          <div className="container-width max-w-3xl">
            <h2 className="font-display text-[30px] lg:text-[42px] leading-tight mb-4">
              Get matched with a Harlow emergency dentist
            </h2>
            <p className="text-[15px] lg:text-[17px] text-white/85 max-w-xl mx-auto mb-8 leading-relaxed">
              Tell us what is wrong. Free, no obligation, GDC-verified network.
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
