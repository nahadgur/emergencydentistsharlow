'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, MapPin, AlertCircle, Briefcase, ShieldCheck } from 'lucide-react';
import { AREA_HUBS, getAreaHubBySlug } from '@/data/locations';
import { areaContent } from '@/data/areaContent';
import { locationProfiles } from '@/data/locationProfiles';
import { getPartnersByAreaSlug } from '@/data/partners';
import { services } from '@/data/services';
import { siteConfig, FAQS_LOCATION } from '@/data/site';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { HeroLeadForm } from '@/components/HeroLeadForm';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FAQ } from '@/components/FAQ';
import { EmergencyDisclaimer } from '@/components/EmergencyDisclaimer';
import { buildBreadcrumbSchema } from '@/lib/breadcrumbs';

function buildFallbackFaqs(name: string, postcode: string) {
  return [
    {
      question: `How quickly can I be matched in ${name}?`,
      answer: `Most ${name} enquiries are matched within 60 minutes during opening hours. Out-of-hours requests are matched first thing the next working morning. Critical presentations (avulsion, suspected spreading infection) bypass normal queueing.`,
    },
    {
      question: `Which Harlow practices typically see ${name} patients?`,
      answer: `Practices in central Harlow plus those nearest the ${postcode} postcode boundary. The matched dentist will be within a reasonable travel distance from your stated location, typically 5–10 minutes by car for most ${name} addresses.`,
    },
    {
      question: `Is the matching service really free for ${name} residents?`,
      answer: `Yes. We are paid by the dentists in our network when an introduction leads to a booked appointment. ${name} patients pay only the dentist for the treatment they receive — never us, and never any markup on the dentist's quoted fee.`,
    },
  ];
}

export default function AreaPage({ params }: { params: { area: string } }) {
  const [modal, setModal] = useState(false);
  const hub = getAreaHubBySlug(params.area);
  if (!hub) notFound();

  const ac = areaContent[hub.slug];
  const lp = locationProfiles[hub.slug];
  const partners = getPartnersByAreaSlug(hub.slug);
  const otherAreas = AREA_HUBS.filter(a => a.slug !== hub.slug);

  const faqs = ac?.faqOverride ?? buildFallbackFaqs(hub.name, hub.postcode);

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Areas',  url: '/location/' },
    { name: hub.name, url: `/location/${hub.slug}/` },
  ]);

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteConfig.url}/location/${hub.slug}/#service`,
    name: `${siteConfig.name} — ${hub.name}`,
    url: `${siteConfig.url}/location/${hub.slug}/`,
    description: `Free emergency dental matching for ${hub.name} (${hub.postcode}) residents. GDC-registered dentists across central Harlow and adjacent CM postcodes.`,
    provider: { '@id': `${siteConfig.url}/#organization` },
    isPartOf: { '@id': `${siteConfig.url}/#website` },
    areaServed: {
      '@type': 'Place',
      name: hub.name,
      containedInPlace: { '@type': 'AdministrativeArea', name: siteConfig.serviceArea },
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <LeadFormModal isOpen={modal} onClose={() => setModal(false)} defaultArea={hub.name} />
      <Header onOpenModal={() => setModal(true)} />

      <main className="flex-grow bg-cream">

        {/* Hero with above-fold form */}
        <section className="bg-ink text-white">
          <div className="container-width pt-10 pb-14 lg:pt-14 lg:pb-20">
            <Breadcrumbs dark items={[{ label: 'Areas', href: '/location/' }, { label: hub.name }]} />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mt-6">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-brand-300 px-2 py-1 bg-brand-500/15 border border-brand-300/30 rounded">
                    {hub.area}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-white/55">
                    {hub.postcode}
                  </span>
                </div>
                <h1 className="font-display text-[34px] lg:text-[48px] leading-tight text-white mb-5">
                  {ac?.heroHeading ?? `Emergency dentists in ${hub.name}`}
                </h1>
                <p className="text-[15px] lg:text-[17px] leading-relaxed text-white/80 max-w-2xl mb-6">
                  {ac?.heroParagraph ?? `Free matching with vetted GDC-registered emergency dentists for ${hub.name} (${hub.postcode}) residents. Matched within 60 minutes during opening hours, first thing the next morning otherwise.`}
                </p>
                {lp && (
                  <p className="font-display italic text-[16px] text-brand-300/85 max-w-xl leading-relaxed">
                    {lp.character}
                  </p>
                )}
              </div>
              <div className="lg:col-span-5">
                <HeroLeadForm area={hub.name} />
              </div>
            </div>
          </div>
        </section>

        <div className="container-width py-14 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
            <article className="lg:col-span-2 space-y-12">

              {/* Local profile */}
              {lp && (
                <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white border border-ink/10 rounded-lg p-5">
                    <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.18em] text-brand-600 mb-2">
                      <Briefcase size={13} /> Dominant patient type
                    </div>
                    <p className="text-[14px] text-ink/85 leading-relaxed">{lp.dominantPatientType}</p>
                  </div>
                  <div className="bg-white border border-ink/10 rounded-lg p-5">
                    <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.18em] text-brand-600 mb-2">
                      <AlertCircle size={13} /> Key clinical challenge
                    </div>
                    <p className="text-[14px] text-ink/85 leading-relaxed">{lp.keyClinicalChallenge}</p>
                  </div>
                </section>
              )}

              {/* Partner surgeries in this area — only renders for areas
                  with named network partners. Sits high on the page so the
                  credibility anchor lands before the longer prose. */}
              {partners.length > 0 && (
                <section className="bg-paper border border-ink/10 rounded-lg p-6 lg:p-7">
                  <div className="flex items-center gap-2 mb-3">
                    <ShieldCheck size={16} className="text-brand-500 flex-shrink-0" />
                    <p className="eyebrow text-brand-700 m-0">— Partner surgery in {hub.name}</p>
                  </div>
                  <div className="space-y-4">
                    {partners.map(p => (
                      <div key={p.id}>
                        <h3 className="font-display text-[20px] text-ink leading-tight mb-1">
                          {p.name}
                        </h3>
                        <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-brand-700 mb-2">
                          {p.area}{p.postcode ? ` · ${p.postcode}` : ''}
                        </p>
                        <p className="text-[14px] text-ink/75 leading-relaxed">{p.description}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 pt-4 border-t border-ink/10 text-[12px] text-ink/55 italic leading-relaxed">
                    The matched dentist for any particular enquiry depends on availability and your specific situation. The named partner is part of the {hub.name} network, not the only practice we route to.
                  </p>
                </section>
              )}

              {/* Local intro */}
              {ac && (
                <section>
                  <p className="eyebrow mb-3">— {hub.name} in detail</p>
                  <h2 className="font-display text-[28px] lg:text-[36px] leading-tight text-ink mb-5">
                    {ac.introHeading}
                  </h2>
                  <div className="space-y-4 text-[15px] lg:text-[16px] leading-relaxed text-ink/80">
                    {ac.introParagraphs.map((p, i) => <p key={i}>{p}</p>)}
                  </div>
                </section>
              )}

              {/* Why specialist matters */}
              {ac?.whySpecialistMatters && (
                <section>
                  <div className="bg-paper border-l-4 border-brand-500 rounded-r-md p-6">
                    <p className="eyebrow text-brand-600 mb-2">— Why a specialist matters here</p>
                    <p className="text-[15px] text-ink/80 leading-relaxed italic">{ac.whySpecialistMatters}</p>
                  </div>
                </section>
              )}

              {/* Patient profile */}
              {ac?.patientProfile && (
                <section>
                  <h2 className="font-display text-[26px] lg:text-[32px] leading-tight text-ink mb-5">
                    {ac.patientProfile.heading}
                  </h2>
                  <div className="bg-white border border-ink/10 rounded-lg p-6">
                    <ul className="space-y-3">
                      {ac.patientProfile.points.map((p, i) => (
                        <li key={i} className="flex items-start gap-3 text-[14.5px] text-ink/80 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0 mt-2" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              )}

              {/* Common triggers */}
              {ac?.commonTriggers && ac.commonTriggers.length > 0 && (
                <section>
                  <p className="eyebrow mb-3">— Why people in {hub.name} engage us</p>
                  <h2 className="font-display text-[26px] lg:text-[32px] leading-tight text-ink mb-5">
                    Common triggers from {hub.name} patients
                  </h2>
                  <ul className="space-y-2.5">
                    {ac.commonTriggers.map((t, i) => (
                      <li key={i} className="bg-paper border border-ink/10 rounded-md px-4 py-3 text-[14px] text-ink/80">
                        {t}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Sub-areas */}
              <section>
                <p className="eyebrow mb-3">— Coverage</p>
                <h2 className="font-display text-[26px] lg:text-[32px] leading-tight text-ink mb-2">
                  {hub.name} streets we cover
                </h2>
                <p className="text-[14.5px] text-ink/65 mb-5 leading-relaxed">
                  Sub-areas of {hub.name} that the matched dentists in our network typically see patients from:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {hub.subAreas.map(s => (
                    <div key={s.name} className="bg-white border border-ink/10 rounded-md p-4">
                      <p className="font-bold text-[14px] text-ink mb-0.5">{s.name}</p>
                      {s.postcode && <p className="text-[11px] font-mono text-brand-600 mb-1">{s.postcode}</p>}
                      {s.note && <p className="text-[12.5px] text-ink/65 leading-relaxed">{s.note}</p>}
                    </div>
                  ))}
                </div>
              </section>

              {/* Local context */}
              {ac?.localContext && (
                <section className="bg-paper border border-ink/10 rounded-lg p-6">
                  <p className="eyebrow mb-3">— {hub.name} in context</p>
                  <p className="text-[15px] text-ink/80 leading-relaxed">{ac.localContext}</p>
                </section>
              )}

              {/* Services available */}
              <section>
                <p className="eyebrow mb-3">— What we match for</p>
                <h2 className="font-display text-[26px] lg:text-[32px] leading-tight text-ink mb-3">
                  Emergency types we match for {hub.name} residents
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services.map(s => (
                    <Link key={s.slug} href={`/services/${s.slug}/`} className="card p-4 group flex gap-3 items-start">
                      <ArrowRight size={14} className="text-brand-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-[14px] text-ink group-hover:text-brand-600 transition-colors mb-1 leading-tight">{s.title}</p>
                        <p className="text-[12.5px] text-ink/60 leading-relaxed line-clamp-2">{s.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>

              {/* YMYL */}
              <EmergencyDisclaimer variant="block" />

              {/* FAQ */}
              <FAQ faqs={faqs} title={`Emergency dental matching in ${hub.name} — common questions`} />
            </article>

            {/* Sidebar */}
            <aside>
              <div className="lg:sticky lg:top-24 space-y-5">

                {lp && (
                  <div className="bg-white border border-ink/10 rounded-lg p-5">
                    <p className="eyebrow mb-3">Patients we typically match</p>
                    <ul className="space-y-2">
                      {lp.patientMix.map((m, i) => (
                        <li key={i} className="flex items-start gap-2 text-[13px] text-ink/75">
                          <span className="w-1 h-1 rounded-full bg-brand-500 flex-shrink-0 mt-2" />
                          <span className="capitalize">{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="bg-paper border border-ink/10 rounded-lg p-5">
                  <p className="eyebrow mb-3">Postcodes</p>
                  <p className="font-mono text-[15px] text-ink mb-3">{hub.postcode}</p>
                  <ul className="space-y-1.5">
                    {hub.subAreas.map(s => (
                      <li key={s.name} className="flex items-start gap-2 text-[13px] text-ink/75">
                        <MapPin size={11} className="text-brand-500 flex-shrink-0 mt-1" />
                        <span>
                          {s.postcode && <span className="font-mono text-[11.5px] text-brand-700">{s.postcode}</span>}
                          {s.postcode && ' · '}{s.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-ink text-white rounded-lg p-5">
                  <p className="font-display text-[18px] leading-tight mb-2">
                    From £27.40 NHS / £80 private
                  </p>
                  <p className="text-[12.5px] text-white/65 mb-4 leading-relaxed">
                    Standard 2026 NHS Band 1 rate or typical Harlow private emergency consultation. Matching is free.
                  </p>
                  <button onClick={() => setModal(true)} className="w-full bg-white text-ink font-bold text-[13px] py-2.5 rounded-md hover:bg-cream transition-colors">
                    Get matched
                  </button>
                </div>

                <div className="bg-white border border-ink/10 rounded-lg p-5">
                  <p className="eyebrow mb-3">Other Harlow areas</p>
                  <ul className="space-y-1.5">
                    {otherAreas.slice(0, 6).map(a => (
                      <li key={a.slug}>
                        <Link href={`/location/${a.slug}/`} className="flex items-center gap-2 text-[13px] text-ink/75 hover:text-brand-600 transition-colors">
                          <ArrowRight size={11} className="text-brand-500 flex-shrink-0" />
                          <span>{a.name}</span>
                          <span className="text-[10px] font-mono text-ink/40 ml-auto">{a.postcode}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link href="/location/" className="block text-[12px] font-bold text-brand-600 hover:text-brand-700 mt-3 pt-3 border-t border-ink/8">
                    View all areas →
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>

        <section className="bg-brand-600 text-white text-center py-14 lg:py-18">
          <div className="container-width max-w-3xl">
            <h2 className="font-display text-[28px] lg:text-[40px] leading-tight mb-3">
              Get matched for an emergency in {hub.name}
            </h2>
            <p className="text-[15px] text-white/85 max-w-xl mx-auto mb-6 leading-relaxed">
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
