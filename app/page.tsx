'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, AlertCircle, MapPin } from 'lucide-react';
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
import { Reveal } from '@/components/Reveal';

// 2026-05-05 — design pass to match the Claude Design handoff +
// SEO/animation pass: scroll-reveal on every section, 20 LSI keyword
// strongs woven into the body copy, 5 keyword-rich internal links.

export default function HomePage() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <LeadFormModal isOpen={modal} onClose={() => setModal(false)} />
      <Header onOpenModal={() => setModal(true)} />

      <main className="flex-grow bg-cream">

        {/* ─── Hero ────────────────────────────────────────────── */}
        <section className="bg-cream relative">
          <div className="container-width pt-10 pb-14 lg:pt-16 lg:pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

              <Reveal className="lg:col-span-7">
                <div className="status-pill mb-6">
                  {heroContent.eyebrow}
                </div>

                <h1
                  className="font-sans font-medium text-ink mb-5 leading-[1.02] tracking-tightest"
                  style={{ fontSize: 'clamp(34px, 5.4vw, 60px)' }}
                  dangerouslySetInnerHTML={{ __html: heroContent.titleHtml }}
                />

                <p
                  className="text-[15px] lg:text-[17px] leading-[1.55] text-sand-body max-w-xl mb-8"
                  dangerouslySetInnerHTML={{ __html: heroContent.subtitleHtml }}
                />

                {/* Wait-time-style stat strip — repurposed for matching
                    service: typical-match-time, today's open slots in
                    the network, postcode coverage. No clinical claims. */}
                <div className="grid grid-cols-3 border border-sand-soft bg-paper mb-8 max-w-xl">
                  {[
                    { k: 'Avg match', v: '60m' },
                    { k: 'Today',     v: 'Open' },
                    { k: 'Coverage',  v: 'CM17–21' },
                  ].map((s, i) => (
                    <div
                      key={s.k}
                      className={`px-3 py-3 text-center ${i === 0 ? '' : 'border-l border-sand-soft'}`}
                    >
                      <div className="font-mono uppercase text-[9px] tracking-[0.12em] text-sand-text mb-1">
                        {s.k}
                      </div>
                      <div className="text-[18px] font-medium text-ink tracking-[-0.02em]">
                        {s.v}
                      </div>
                    </div>
                  ))}
                </div>

                {/* NHS 111 / 999 callout */}
                <div className="border-l-4 border-coral-500 bg-coral-50/80 p-4 max-w-2xl">
                  <div className="flex items-start gap-3">
                    <AlertCircle size={18} className="text-coral-600 flex-shrink-0 mt-0.5" />
                    <div className="text-[13px] text-ink/85 leading-[1.55]">
                      <strong className="text-coral-700">Genuine medical emergency?</strong>{' '}
                      Spreading facial swelling, breathing difficulty, or uncontrolled bleeding —
                      call <strong className="text-coral-700">999</strong> or{' '}
                      <strong className="text-coral-700">NHS 111</strong> (free, 24/7).
                      Hospital, not a dentist.
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal direction="right" delay={120} className="lg:col-span-5">
                <HeroLeadForm />
              </Reveal>
            </div>
          </div>
        </section>

        {/* ─── 01 — Triage ─────────────────────────────────────── */}
        <Reveal as="section" className="bg-ink text-ink-soft-text py-16 lg:py-20">
          <div className="container-width">
            <p className="eyebrow-num-on-dark mb-3">01 — Triage</p>
            <h2
              className="font-sans font-medium leading-[1.1] tracking-tightest mb-10 max-w-2xl"
              style={{ fontSize: 'clamp(28px, 3.6vw, 44px)' }}
            >
              {problemFraming.heading}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <div className="space-y-4 text-[15px] lg:text-[16px] leading-[1.65] text-ink-mute/95 max-w-prose lsi-prose-on-dark">
                {problemFraming.paragraphsHtml.map((p, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* ─── 02 — Care types ────────────────────────────────── */}
        <Reveal as="section" className="bg-cream py-16 lg:py-20">
          <div className="container-width">
            <p className="eyebrow-num mb-3">02 — Care types</p>
            <h2
              className="font-sans font-medium leading-[1.1] tracking-tightest mb-3 max-w-2xl text-ink"
              style={{ fontSize: 'clamp(28px, 3.6vw, 44px)' }}
            >
              What we match for
            </h2>
            <p className="text-[15px] text-sand-body max-w-2xl leading-[1.55] mb-10">
              The seven most common dental emergencies, each with its own urgency triage and detail page.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-sand max-w-5xl">
              {services.map((s, i) => (
                <Reveal key={s.slug} delay={Math.min(i * 60, 360)}>
                  <Link
                    href={`/services/${s.slug}/`}
                    className="group bg-cream p-5 lg:p-6 flex flex-col gap-3 hover:bg-paper transition-colors min-h-[170px] h-full"
                  >
                    <span className="font-mono text-[10px] tracking-[0.1em] text-sand-text">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={`font-mono uppercase text-[10px] tracking-[0.18em] ${
                        s.urgencyTier === 'critical' ? 'text-coral-600'
                        : s.urgencyTier === 'urgent'   ? 'text-brand-600'
                        : 'text-sand-text'
                      }`}
                    >
                      {s.urgencyTier === 'critical' ? '★ Critical priority'
                        : s.urgencyTier === 'urgent' ? 'Same-day'
                        : 'Same-week'}
                    </span>
                    <h3 className="font-sans font-medium text-[19px] text-ink leading-[1.15] tracking-[-0.02em] group-hover:text-brand-600 transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-[13.5px] text-sand-body leading-[1.5] line-clamp-3 flex-grow">
                      {s.description}
                    </p>
                    <span className="text-[12px] font-medium text-brand-600 inline-flex items-center gap-1.5 mt-auto">
                      Read more <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ─── 03 — How it works ──────────────────────────────── */}
        <Reveal as="section" className="bg-paper py-16 lg:py-20 border-y border-sand-soft">
          <div className="container-width">
            <p className="eyebrow-num mb-3">03 — How it works</p>
            <h2
              className="font-sans font-medium leading-[1.1] tracking-tightest mb-10 lg:mb-12 max-w-2xl text-ink"
              style={{ fontSize: 'clamp(28px, 3.6vw, 44px)' }}
            >
              {howItWorks.heading}
            </h2>

            <div className="flex flex-col">
              {howItWorks.steps.map((step, i) => (
                <Reveal
                  key={step.step}
                  delay={i * 90}
                  className={`grid grid-cols-[64px_1fr] lg:grid-cols-[80px_1fr] gap-5 lg:gap-7 py-6 lg:py-8 border-t border-sand ${i === howItWorks.steps.length - 1 ? 'border-b' : ''}`}
                >
                  <div className="font-display italic text-brand-500 leading-none"
                       style={{ fontSize: 'clamp(40px, 5vw, 56px)' }}>
                    {String(parseInt(step.step, 10)).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="font-sans font-medium text-[19px] lg:text-[22px] text-ink leading-[1.2] tracking-[-0.02em] mb-2">
                      {step.title}
                    </h3>
                    <p
                      className="text-[14.5px] lg:text-[15px] text-sand-body leading-[1.55] max-w-prose lsi-prose"
                      dangerouslySetInnerHTML={{ __html: step.descHtml ?? step.desc }}
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ─── 04 — Why us ────────────────────────────────────── */}
        <Reveal as="section" className="bg-cream py-16 lg:py-20">
          <div className="container-width">
            <p className="eyebrow-num mb-3">04 — Why us</p>
            <h2
              className="font-sans font-medium leading-[1.1] tracking-tightest mb-10 max-w-2xl text-ink"
              style={{ fontSize: 'clamp(28px, 3.6vw, 44px)' }}
            >
              {whyMatchingService.heading}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-sand max-w-4xl">
              {whyMatchingService.points.map((p, i) => (
                <Reveal key={i} delay={i * 75}>
                  <div className="bg-cream p-6 lg:p-7 flex flex-col gap-3 h-full">
                    <span className="font-mono text-[10px] tracking-[0.1em] text-sand-text">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-sans font-medium text-[17px] lg:text-[19px] text-ink leading-[1.2] tracking-[-0.02em]">
                      {p.title}
                    </h3>
                    <p
                      className="text-[14px] text-sand-body leading-[1.55] lsi-prose"
                      dangerouslySetInnerHTML={{ __html: p.descHtml ?? p.desc }}
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ─── 05 — Network ───────────────────────────────────── */}
        <Reveal as="section" className="bg-paper py-16 lg:py-20 border-t border-sand-soft">
          <div className="container-width">
            <p className="eyebrow-num mb-3">05 — Network anchors</p>
            <h2
              className="font-sans font-medium leading-[1.1] tracking-tightest mb-3 max-w-2xl text-ink"
              style={{ fontSize: 'clamp(28px, 3.6vw, 44px)' }}
            >
              Partner surgeries we work with in Harlow
            </h2>
            <p className="text-[15px] text-sand-body leading-[1.55] mb-10 max-w-2xl">
              Named partner sites we route to alongside the wider matched-dentist network. Our matching service draws from a verified pool of GDC-registered Harlow practices — these are the recognisable names within it.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-sand max-w-5xl">
              {PARTNERS.map((p, i) => (
                <Reveal key={p.id} delay={i * 80}>
                  <div className="bg-paper p-6 lg:p-7 flex flex-col gap-3 h-full">
                    <span className="font-mono uppercase text-[10px] tracking-[0.18em] text-brand-600">
                      {p.area}{p.postcode ? ` · ${p.postcode}` : ''}
                    </span>
                    <h3 className="font-sans font-medium text-[19px] lg:text-[20px] text-ink leading-[1.2] tracking-[-0.02em]">
                      {p.name}
                    </h3>
                    <p className="text-[14px] text-sand-body leading-[1.55] flex-grow">
                      {p.description}
                    </p>
                    <Link
                      href={`/location/${p.areaSlug}/`}
                      className="text-[12px] font-medium text-brand-600 inline-flex items-center gap-1.5 hover:text-brand-700 mt-auto group/link"
                    >
                      See {p.area} coverage <ArrowRight size={11} className="transition-transform group-hover/link:translate-x-0.5" />
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>

            <p className="mt-6 text-[13px] text-sand-text max-w-2xl leading-[1.55] italic">
              The matched dentist for any particular enquiry depends on availability, your specific situation, and travel distance from your stated location. The named partners above are part of the network, not the only practices we route to.
            </p>
          </div>
        </Reveal>

        {/* ─── 06 — Coverage ─────────────────────────────────── */}
        <Reveal as="section" className="bg-cream py-16 lg:py-20">
          <div className="container-width">
            <p className="eyebrow-num mb-3">06 — Coverage</p>
            <h2
              className="font-sans font-medium leading-[1.1] tracking-tightest mb-3 max-w-2xl text-ink"
              style={{ fontSize: 'clamp(28px, 3.6vw, 44px)' }}
            >
              Harlow neighbourhoods we cover
            </h2>
            <p className="text-[15px] text-sand-body leading-[1.55] mb-8 max-w-2xl">
              All Harlow neighbourhoods plus the surrounding CM-postcode towns most often served by Harlow dentists.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-sand max-w-5xl">
              {AREA_HUBS.map((a, i) => (
                <Reveal key={a.slug} delay={Math.min(i * 30, 240)}>
                  <Link
                    href={`/location/${a.slug}/`}
                    className="group bg-cream px-4 py-3.5 flex items-center gap-3 hover:bg-paper transition-colors h-full"
                  >
                    <span className="font-mono uppercase text-[10px] tracking-[0.1em] text-sand-text whitespace-nowrap min-w-[64px]">
                      {a.postcode}
                    </span>
                    <span className="flex items-center gap-2 text-[14px] font-medium text-ink group-hover:text-brand-600 transition-colors">
                      <MapPin size={13} className="text-brand-500 flex-shrink-0" />
                      {a.name}
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>

            <Link href="/location/" className="inline-flex items-center gap-1.5 mt-7 text-[13px] font-medium text-brand-600 hover:text-brand-700 border-b border-ink pb-1 group">
              View all areas <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>

        {/* ─── 07 — Common questions ─────────────────────────── */}
        <Reveal as="section" className="bg-paper py-16 lg:py-20 border-y border-sand-soft">
          <div className="container-width max-w-4xl">
            <p className="eyebrow-num mb-3">07 — Common questions</p>
            <FAQ faqs={FAQS_HOME} title={faqSectionTitle} />
          </div>
        </Reveal>

        {/* ─── Bottom CTA ────────────────────────────────────── */}
        <Reveal as="section" className="bg-ink text-ink-soft-text py-16 lg:py-24">
          <div className="container-width max-w-3xl text-center">
            <p className="italic-accent text-brand-300 mb-3" style={{ fontSize: 'clamp(20px, 2vw, 24px)' }}>
              Don&apos;t wait it out.
            </p>
            <h2
              className="font-sans font-medium leading-[1.05] tracking-tightest mb-5"
              style={{ fontSize: 'clamp(28px, 4.4vw, 48px)' }}
            >
              {ctaSection.heading}
            </h2>
            <p className="text-[15px] lg:text-[17px] text-ink-mute leading-[1.6] mb-9 max-w-2xl mx-auto">
              {ctaSection.subheading}
            </p>
            <button onClick={() => setModal(true)} className="btn-on-dark text-[15px] px-7 py-4 group">
              Match me with a dentist <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </button>
            <p className="mt-7 font-mono uppercase text-[10px] tracking-[0.12em] text-ink-mute/80 max-w-xl mx-auto">
              {siteConfig.serviceArea} · GDC-registered network · Free to patients
            </p>
          </div>
        </Reveal>
      </main>

      <Footer />
    </>
  );
}
