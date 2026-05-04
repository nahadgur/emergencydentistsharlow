'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { AREA_HUBS } from '@/data/locations';
import { locationProfiles } from '@/data/locationProfiles';
import { siteConfig, FAQS_LOCATION } from '@/data/site';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { HeroLeadForm } from '@/components/HeroLeadForm';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FAQ } from '@/components/FAQ';
import { buildBreadcrumbSchema } from '@/lib/breadcrumbs';

const REGIONS = [
  { key: 'Central Harlow', label: 'Central Harlow' },
  { key: 'East Harlow',    label: 'East Harlow (CM17)' },
  { key: 'West Harlow',    label: 'West Harlow (CM18 / CM19)' },
  { key: 'North Harlow',   label: 'North Harlow' },
  { key: 'Adjacent',       label: 'Adjacent CM-postcode towns' },
] as const;

export default function LocationsIndexPage() {
  const [modal, setModal] = useState(false);

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Areas', url: '/location/' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <LeadFormModal isOpen={modal} onClose={() => setModal(false)} />
      <Header onOpenModal={() => setModal(true)} />

      <main className="flex-grow bg-cream">

        <section className="bg-ink text-white">
          <div className="container-width pt-10 pb-14 lg:pt-14 lg:pb-20">
            <Breadcrumbs dark items={[{ label: 'Areas' }]} />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mt-6">
              <div className="lg:col-span-7">
                <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-brand-300 mb-4">
                  Coverage by neighbourhood
                </p>
                <h1 className="font-display text-[34px] lg:text-[48px] leading-tight text-white mb-5">
                  Harlow areas we cover
                </h1>
                <p className="text-[15px] lg:text-[17px] leading-relaxed text-white/80 max-w-xl">
                  Hand-written guides for each Harlow neighbourhood plus the surrounding CM-postcode towns. Each guide profiles the dominant patient mix, the local clinical challenges, and the practices we typically match from.
                </p>
              </div>
              <div className="lg:col-span-5">
                <HeroLeadForm />
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 lg:py-20">
          <div className="container-width space-y-12">
            {REGIONS.map(region => {
              const areas = AREA_HUBS.filter(a => a.area === region.key);
              if (areas.length === 0) return null;
              return (
                <div key={region.key}>
                  <p className="eyebrow mb-2">— {region.label}</p>
                  <h2 className="font-display text-[26px] text-ink leading-tight mb-6">
                    {region.label}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {areas.map(a => {
                      const profile = locationProfiles[a.slug];
                      return (
                        <Link key={a.slug} href={`/location/${a.slug}/`} className="card p-5 group">
                          <div className="flex items-start justify-between mb-3 gap-3">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <MapPin size={14} className="text-brand-500" />
                                <span className="font-bold text-[15px] text-ink group-hover:text-brand-600 transition-colors">{a.name}</span>
                              </div>
                              <p className="text-[11px] font-mono text-ink/45">{a.postcode}</p>
                            </div>
                          </div>
                          {profile && (
                            <p className="text-[13px] text-ink/65 leading-relaxed line-clamp-3 mb-3">
                              {profile.dominantPatientType}
                            </p>
                          )}
                          <span className="text-[12px] font-bold text-brand-600 inline-flex items-center gap-1">
                            Read guide <ArrowRight size={11} />
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="bg-paper py-14 lg:py-20">
          <div className="container-width max-w-4xl">
            <p className="eyebrow mb-3">— Common questions</p>
            <FAQ faqs={FAQS_LOCATION} title="Common questions about Harlow area coverage" />
          </div>
        </section>

        <section className="bg-brand-600 text-center text-white py-14 lg:py-18">
          <div className="container-width max-w-3xl">
            <h2 className="font-display text-[28px] lg:text-[40px] leading-tight mb-3">
              Find a Harlow emergency dentist
            </h2>
            <p className="text-[15px] text-white/85 max-w-xl mx-auto mb-6 leading-relaxed">
              Tell us where you are and what is happening. Free, no obligation.
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
