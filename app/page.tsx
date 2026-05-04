'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, ShieldCheck, MapPin, Heart, AlertCircle } from 'lucide-react';
import { services } from '@/data/services';
import { AREA_HUBS } from '@/data/locations';
import { siteConfig, FAQS_HOME } from '@/data/site';
import { heroContent, problemFraming, howItWorks, whyMatchingService, faqSectionTitle, ctaSection } from '@/data/homepage';
import { PARTNERS } from '@/data/partners';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { HeroLeadForm } from '@/components/HeroLeadForm';
import { FAQ } from '@/components/FAQ';
import { EmergencyDisclaimer } from '@/components/EmergencyDisclaimer';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck size={18} />,
  Clock:       <Clock size={18} />,
  MapPin:      <MapPin size={18} />,
  Heart:       <Heart size={18} />,
};

export default function HomePage() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <LeadFormModal isOpen={modal} onClose={() => setModal(false)} />
      <Header onOpenModal={() => setModal(true)} />

      <main className="flex-grow bg-cream">

        {/* ─── Hero with above-fold form ─────────────────────────── */}
        <section className="bg-ink text-white relative overflow-hidden">
          <div className="container-width pt-12 pb-16 lg:pt-20 lg:pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

              {/* Left: hero copy */}
              <div className="lg:col-span-7">
                <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-brand-300 mb-5 flex items-center gap-3">
                  <span className="w-8 h-px bg-brand-300/60" />
                  {heroContent.eyebrow}
                </p>
                <h1 className="font-display text-[36px] sm:text-[46px] lg:text-[58px] leading-[1.05] tracking-tight text-white mb-6">
                  {heroContent.title}
                </h1>
                <p className="text-[15px] lg:text-[17px] leading-relaxed text-white/80 max-w-2xl mb-8">
                  {heroContent.subtitle}
                </p>

                {/* Trust strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                  {[
                    { icon: <Clock size={16} />, text: '60-min match' },
                    { icon: <ShieldCheck size={16} />, text: 'GDC-verified' },
                    { icon: <MapPin size={16} />, text: 'CM postcodes' },
                    { icon: <Heart size={16} />, text: 'Free to patients' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-[12px] text-white/75">
                      <span className="text-brand-300">{item.icon}</span>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>

                {/* NHS 111 / 999 callout — YMYL */}
                <div className="bg-urgent-50/95 border-l-4 border-urgent-500 rounded-md p-4 max-w-2xl">
                  <div className="flex items-start gap-3">
                    <AlertCircle size={18} className="text-urgent-600 flex-shrink-0 mt-0.5" />
                    <div className="text-[13px] text-ink/85 leading-relaxed">
                      <strong className="text-urgent-700">Genuine medical emergency?</strong>{' '}
                      Spreading facial swelling, breathing difficulty, or uncontrolled bleeding —
                      call <strong className="text-urgent-700">999</strong> or{' '}
                      <strong className="text-urgent-700">NHS 111</strong> (free, 24/7).
                      Hospital, not a dentist.
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: lead form (above fold) */}
              <div className="lg:col-span-5">
                <HeroLeadForm />
              </div>
            </div>
          </div>
        </section>

        {/* ─── Three categories of emergency ─────────────────────── */}
        <section className="bg-cream py-16 lg:py-24">
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-10">
              <div className="lg:col-span-5">
                <p className="eyebrow mb-3">— Triage</p>
                <h2 className="font-display text-[32px] lg:text-[44px] leading-tight text-ink">
                  {problemFraming.heading}
                </h2>
              </div>
              <div className="lg:col-span-7 space-y-4 text-[15px] lg:text-[16px] leading-relaxed text-ink/75 self-end">
                {problemFraming.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Service catalogue ─────────────────────────────────── */}
        <section className="bg-paper py-16 lg:py-24">
          <div className="container-width">
            <div className="mb-10 lg:mb-12">
              <p className="eyebrow mb-3">— Seven emergency types</p>
              <h2 className="font-display text-[30px] lg:text-[42px] leading-tight text-ink mb-3">
                What we match for
              </h2>
              <p className="text-[15px] text-ink/65 max-w-2xl leading-relaxed">
                The seven most common dental emergencies, each with its own urgency triage and detail page.
              </p>
            </div>

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
                  <h3 className="font-display text-[20px] text-ink mb-2 group-hover:text-brand-600 transition-colors leading-tight">
                    {s.title}
                  </h3>
                  <p className="text-[13.5px] text-ink/70 leading-relaxed mb-4 line-clamp-3">
                    {s.description}
                  </p>
                  <span className="text-[12px] font-bold text-brand-600 inline-flex items-center gap-1">
                    Read more <ArrowRight size={12} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─── How matching works ────────────────────────────────── */}
        <section className="bg-ink text-white py-16 lg:py-24">
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
              <div className="lg:col-span-7">
                <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-brand-300 mb-3">— How it works</p>
                <h2 className="font-display text-[32px] lg:text-[44px] leading-tight">
                  {howItWorks.heading}
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {howItWorks.steps.map((step) => (
                <div key={step.step} className="border-t-2 border-brand-300 pt-5">
                  <div className="font-display text-[48px] lg:text-[60px] leading-none text-brand-300 mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-display text-[22px] text-white mb-3 leading-tight">{step.title}</h3>
                  <p className="text-[14px] leading-relaxed text-white/70">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Why use a matching service ────────────────────────── */}
        <section className="bg-cream py-16 lg:py-24">
          <div className="container-width">
            <div className="mb-10 lg:mb-12 max-w-2xl">
              <p className="eyebrow mb-3">— Why us</p>
              <h2 className="font-display text-[30px] lg:text-[42px] leading-tight text-ink">
                {whyMatchingService.heading}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
              {whyMatchingService.points.map((p, i) => (
                <div key={i} className="bg-white border border-ink/10 rounded-lg p-6">
                  <h3 className="font-display text-[19px] text-ink mb-2 leading-tight">{p.title}</h3>
                  <p className="text-[14px] text-ink/70 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Partner surgeries ─────────────────────────────────── */}
        <section className="bg-paper py-16 lg:py-24">
          <div className="container-width">
            <div className="mb-8 max-w-2xl">
              <p className="eyebrow mb-3">— Network anchors</p>
              <h2 className="font-display text-[30px] lg:text-[42px] leading-tight text-ink mb-3">
                Partner surgeries we work with in Harlow
              </h2>
              <p className="text-[15px] text-ink/65 leading-relaxed">
                Named partner sites we route to alongside the wider matched-dentist network. Our matching service draws from a verified pool of GDC-registered Harlow practices — these are the recognisable names within it.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
              {PARTNERS.map(p => (
                <div
                  key={p.id}
                  className="bg-white border border-ink/10 rounded-lg p-6 lg:p-7 flex flex-col"
                >
                  <div className="flex items-start gap-2 mb-3">
                    <ShieldCheck size={18} className="text-brand-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-display text-[20px] text-ink leading-tight">{p.name}</h3>
                      <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-brand-700 mt-1">
                        {p.area}{p.postcode ? ` · ${p.postcode}` : ''}
                      </p>
                    </div>
                  </div>
                  <p className="text-[14px] text-ink/75 leading-relaxed mb-4 flex-grow">
                    {p.description}
                  </p>
                  <Link
                    href={`/location/${p.areaSlug}/`}
                    className="text-[12px] font-bold text-brand-600 inline-flex items-center gap-1 hover:text-brand-700"
                  >
                    See {p.area} coverage <ArrowRight size={11} />
                  </Link>
                </div>
              ))}
            </div>

            <p className="mt-6 text-[13px] text-ink/55 max-w-2xl leading-relaxed italic">
              The matched dentist for any particular enquiry depends on availability, your specific situation, and travel distance from your stated location. The named partners above are part of the network, not the only practices we route to.
            </p>
          </div>
        </section>

        {/* ─── Areas band ────────────────────────────────────────── */}
        <section className="bg-paper py-16 lg:py-24">
          <div className="container-width">
            <div className="mb-10">
              <p className="eyebrow mb-3">— Coverage</p>
              <h2 className="font-display text-[30px] lg:text-[42px] leading-tight text-ink mb-3">
                Harlow neighbourhoods we cover
              </h2>
              <p className="text-[15px] text-ink/65 max-w-2xl leading-relaxed">
                All Harlow neighbourhoods plus the surrounding CM-postcode towns most often served by Harlow dentists.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {AREA_HUBS.map(a => (
                <Link key={a.slug} href={`/location/${a.slug}/`} className="card p-4 group">
                  <div className="flex items-center gap-2 mb-1.5">
                    <MapPin size={14} className="text-brand-500 flex-shrink-0" />
                    <span className="font-bold text-[14px] text-ink group-hover:text-brand-600 transition-colors">{a.name}</span>
                  </div>
                  <p className="text-[11px] font-mono text-ink/50">{a.postcode}</p>
                </Link>
              ))}
            </div>
            <Link href="/location/" className="inline-flex items-center gap-1 mt-6 text-[13px] font-bold text-brand-600 hover:text-brand-700">
              View all areas <ArrowRight size={12} />
            </Link>
          </div>
        </section>

        {/* ─── FAQ ───────────────────────────────────────────────── */}
        <section className="bg-cream py-16 lg:py-24">
          <div className="container-width max-w-4xl">
            <p className="eyebrow mb-3">— Common questions</p>
            <FAQ faqs={FAQS_HOME} title={faqSectionTitle} />
          </div>
        </section>

        {/* ─── Bottom CTA ────────────────────────────────────────── */}
        <section className="bg-brand-600 py-16 lg:py-24 text-center text-white">
          <div className="container-width max-w-3xl">
            <h2 className="font-display text-[30px] lg:text-[44px] leading-tight mb-4">
              {ctaSection.heading}
            </h2>
            <p className="text-[15px] lg:text-[17px] text-white/85 leading-relaxed mb-8 max-w-2xl mx-auto">
              {ctaSection.subheading}
            </p>
            <button onClick={() => setModal(true)} className="btn-on-dark text-[15px] px-7 py-3.5">
              Match me with a dentist <ArrowRight size={14} />
            </button>
            <p className="mt-6 text-[12px] text-white/60 max-w-xl mx-auto">
              {siteConfig.serviceArea} · GDC-registered network · Free to patients
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
