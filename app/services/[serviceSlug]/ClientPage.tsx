'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, CheckCircle, AlertTriangle, Clock } from 'lucide-react';
import { services, getServiceBySlug } from '@/data/services';
import { getServiceContent } from '@/data/serviceContent';
import { siteConfig, FAQS_SERVICES } from '@/data/site';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { HeroLeadForm } from '@/components/HeroLeadForm';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FAQ } from '@/components/FAQ';
import { EmergencyDisclaimer } from '@/components/EmergencyDisclaimer';
import { buildBreadcrumbSchema } from '@/lib/breadcrumbs';

// Editorial pairing — for each service, the adjacent emergency type that
// commonly co-presents or follows. Hand-curated.
const PAIRS_WITH: Record<string, { slug: string; reason: string }> = {
  'severe-toothache': {
    slug: 'dental-abscess',
    reason: 'Severe unrelieved toothache that progresses with facial swelling or systemic symptoms is often an evolving abscess. The matched dentist screens for this and treats appropriately if found.',
  },
  'knocked-out-tooth': {
    slug: 'broken-or-chipped-tooth',
    reason: 'Avulsion injuries rarely happen in isolation — adjacent teeth are often fractured or loosened by the same impact. The dentist examines all teeth in the trauma zone, not just the one obviously missing.',
  },
  'broken-or-chipped-tooth': {
    slug: 'severe-toothache',
    reason: 'A break that exposes the inner pulp is acutely painful and follows the same treatment pathway as severe toothache from any other cause — pulp exposure, pain control, root canal or extraction.',
  },
  'lost-filling-or-crown': {
    slug: 'severe-toothache',
    reason: 'A lost filling that has been ignored for a few weeks often progresses to severe toothache as decay reaches the pulp. Earlier intervention prevents this trajectory.',
  },
  'dental-abscess': {
    slug: 'severe-toothache',
    reason: 'Most abscess presentations start as severe toothache that has progressed. The treatment pathway converges — drain the abscess, treat the underlying tooth.',
  },
  'out-of-hours': {
    slug: 'severe-toothache',
    reason: 'The most common out-of-hours emergency presentation is severe toothache that has flared overnight or at the weekend. Same triage logic — manage acutely, definitive treatment at follow-up.',
  },
  'wisdom-tooth-pain': {
    slug: 'dental-abscess',
    reason: 'Pericoronitis can progress to a localised abscess if the gum-flap infection is not treated. Recurrent severe pericoronitis with systemic symptoms is treated as the same urgency tier as a localised abscess.',
  },
};

const COMMON_MISTAKES: Record<string, { headline: string; mistakes: { what: string; why: string }[] }> = {
  'severe-toothache': {
    headline: 'Three things people do that make severe toothache worse',
    mistakes: [
      { what: 'Putting aspirin on the gum',
        why: 'An old myth. Aspirin is acidic and burns soft tissue — it does nothing for the underlying tooth and produces a chemical ulcer that takes a week to heal. Take aspirin orally if you tolerate it; never apply it directly.' },
      { what: 'Taking only paracetamol or only ibuprofen',
        why: 'Combining the two at standard adult doses is materially more effective than either alone — they work on different pain pathways. Most patients reach for one packet, find it does nothing, and assume painkillers do not work. Try the combination first.' },
      { what: 'Hoping the pain settles overnight',
        why: 'Severe toothache that "settles by itself" usually means the nerve has died, not that the problem has resolved. The infection or decay continues silently and surfaces three weeks later as an abscess. See a dentist whether the pain has settled or not.' },
    ],
  },
  'knocked-out-tooth': {
    headline: 'Three things to avoid in the first hour after a knocked-out tooth',
    mistakes: [
      { what: 'Rinsing the tooth in water',
        why: 'Water is hypotonic relative to the cells on the root surface — it draws water into the cells and damages them. This destroys the very thing that makes re-attachment possible. Rinse briefly in milk or saliva instead.' },
      { what: 'Holding the tooth by the root',
        why: 'Pick the tooth up by the white crown only. The root cells are extremely fragile and any contact damages them. If you have already touched the root, all is not lost — preserve correctly from now on and get to a dentist immediately.' },
      { what: 'Trying to re-implant a baby tooth',
        why: 'Adult permanent teeth re-implant; baby teeth do not. Re-inserting a baby tooth risks damaging the developing adult tooth bud underneath. Bring the tooth so the dentist can check it is whole, but leave the socket alone.' },
    ],
  },
  'broken-or-chipped-tooth': {
    headline: 'Three mistakes that turn a manageable break into a bigger problem',
    mistakes: [
      { what: 'Throwing away the broken fragment',
        why: 'For larger front-tooth fractures, modern adhesive dentistry can sometimes re-attach the original piece for an almost invisible repair. Store the fragment in milk and bring it to the appointment.' },
      { what: 'Eating on the broken side',
        why: 'A tooth with a deep fracture line will propagate the crack if loaded. What is a manageable break on Monday becomes an unrestorable tooth by Thursday. Use the other side until you are seen.' },
      { what: 'Assuming no pain means no urgency',
        why: 'A break that has exposed the dentine but not the pulp may not hurt initially — but bacteria are now inside the tooth structure and will reach the pulp within days. Asymptomatic breaks still need timely repair.' },
    ],
  },
  'lost-filling-or-crown': {
    headline: 'Three mistakes with lost fillings and crowns',
    mistakes: [
      { what: 'Throwing away a lost crown',
        why: 'A lost crown that you have kept can usually be re-cemented for a fraction of the cost of a new crown. Clean it gently and store it somewhere safe — bring it to the appointment.' },
      { what: 'Ignoring it because there is no pain',
        why: 'Painless lost fillings still leave the underlying tooth vulnerable to decay, fracture, and food packing. A simple replacement at week one becomes a more complex restoration by month three.' },
      { what: 'Using superglue or household adhesive to re-attach',
        why: 'Superglue is toxic to dental pulp and produces a damaged surface that proper dental cement cannot bond to afterwards. Pharmacy temporary cement (Recapit or similar) is the only safe DIY option.' },
    ],
  },
  'dental-abscess': {
    headline: 'Three mistakes that escalate a dental abscess',
    mistakes: [
      { what: 'Trying to drain the abscess yourself',
        why: 'Bursting a gum boil with a needle or pin introduces external bacteria and can spread the infection. Let the dentist drain it under sterile conditions — usually painless and immediately relieving.' },
      { what: 'Asking the GP for antibiotics and stopping there',
        why: 'Antibiotics manage the acute infection but do not cure the abscess — the source (dead nerve, infected socket) is still present and the abscess returns once the course finishes. Only the dentist can treat the source.' },
      { what: 'Waiting to see if facial swelling settles on its own',
        why: 'Mild facial swelling can progress to spreading infection within hours, especially in young or otherwise-healthy patients (the inflammatory response is brisker). Same-day attention is the safe default.' },
    ],
  },
  'out-of-hours': {
    headline: 'Three mistakes around out-of-hours dental care',
    mistakes: [
      { what: 'Going to A&E for routine dental pain',
        why: 'A&E is not equipped for dental treatment — the duty doctor cannot drill, fill, or extract. They can prescribe pain relief and antibiotics but the underlying dental problem still needs a dentist. Use NHS 111 for genuine OOH dental access.' },
      { what: 'Assuming all OOH dentists are NHS 111',
        why: 'NHS 111 has its own out-of-hours rota, but it covers a wide area and may not match your urgency. Private OOH dental appointments exist in Harlow at a higher fee — sometimes worth the cost when timing matters.' },
      { what: 'Waiting until Monday with severe pain',
        why: 'Most "I can wait until Monday" presentations end up much worse by Monday. Severe pain at 8pm on Saturday almost always benefits from out-of-hours intervention rather than 36 more hours of suffering.' },
    ],
  },
  'wisdom-tooth-pain': {
    headline: 'Three mistakes with wisdom-tooth pain',
    mistakes: [
      { what: 'Assuming extraction is automatic',
        why: 'NICE guidance is clear that wisdom-tooth removal is justified only by specific clinical criteria — recurrent infection, decay that cannot be restored, cysts. A first episode of pericoronitis usually settles without extraction. Be cautious of dentists who default to extraction for any pain.' },
      { what: 'Ignoring increasing trismus (jaw stiffness)',
        why: 'Difficulty fully opening the jaw is an early warning sign of spreading infection in the soft tissues around the wisdom tooth. Increasing trismus needs same-day attention and may indicate the case has progressed beyond what primary care can manage.' },
      { what: 'Self-treating with antibiotics from a previous prescription',
        why: 'Sub-therapeutic or wrong-spectrum antibiotic use breeds resistant bacteria — making future infections harder to treat. Always start a fresh prescription based on current assessment, not a leftover course from a previous illness.' },
    ],
  },
};

export default function ServicePage({ params }: { params: { serviceSlug: string } }) {
  const [modal, setModal] = useState(false);
  const service = getServiceBySlug(params.serviceSlug);
  if (!service) notFound();

  const content = getServiceContent(service.slug);
  const pair = PAIRS_WITH[service.slug];
  const pairedService = pair ? services.find(s => s.slug === pair.slug) : undefined;
  const mistakes = COMMON_MISTAKES[service.slug];
  const otherServices = services.filter(s => s.slug !== service.slug);

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Services',     url: '/services/' },
    { name: service.title,  url: `/services/${service.slug}/` },
  ]);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteConfig.url}/services/${service.slug}/#service`,
    name: `${service.title} — Harlow emergency dental matching`,
    url: `${siteConfig.url}/services/${service.slug}/`,
    description: service.description,
    provider: { '@id': `${siteConfig.url}/#organization` },
    isPartOf: { '@id': `${siteConfig.url}/#website` },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: siteConfig.serviceArea,
      containedInPlace: { '@type': 'Country', name: 'United Kingdom' },
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <LeadFormModal isOpen={modal} onClose={() => setModal(false)} defaultService={service.shortLabel} />
      <Header onOpenModal={() => setModal(true)} />

      <main className="flex-grow bg-cream">

        {/* Hero with above-fold form */}
        <section className="bg-ink text-white">
          <div className="container-width pt-10 pb-14 lg:pt-14 lg:pb-20">
            <Breadcrumbs dark items={[{ label: 'Emergencies', href: '/services/' }, { label: service.title }]} />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mt-6">
              <div className="lg:col-span-7">
                <p className={`text-[10px] font-mono uppercase tracking-[0.22em] mb-4 inline-flex items-center gap-2 ${
                  service.urgencyTier === 'critical' ? 'text-urgent-500'
                  : service.urgencyTier === 'urgent' ? 'text-brand-300'
                  : 'text-white/60'
                }`}>
                  {service.urgencyTier === 'critical' && <AlertTriangle size={12} />}
                  {service.urgencyTier === 'critical' ? 'Critical priority — match within the hour'
                    : service.urgencyTier === 'urgent' ? 'Same-day match'
                    : 'Same-week match'}
                </p>
                <h1 className="font-display text-[34px] lg:text-[48px] leading-tight text-white mb-5">
                  {service.title}
                </h1>
                <p className="text-[15px] lg:text-[17px] leading-relaxed text-white/80 max-w-2xl mb-6">
                  {service.description}
                </p>
                {service.urgencyTier === 'critical' && (
                  <div className="flex items-start gap-2 text-[13px] text-urgent-300 bg-urgent-500/10 border border-urgent-500/30 rounded-md p-3 max-w-xl">
                    <AlertTriangle size={14} className="flex-shrink-0 mt-0.5" />
                    <span>This category bypasses normal queueing. Submit the form and we confirm a Harlow practice within 15 minutes during opening hours.</span>
                  </div>
                )}
              </div>
              <div className="lg:col-span-5">
                <HeroLeadForm service={service.shortLabel} />
              </div>
            </div>
          </div>
        </section>

        <div className="container-width py-14 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
            <article className="lg:col-span-2 space-y-12">

              {/* Intro */}
              <section>
                <p className="eyebrow mb-3">— What this is</p>
                <h2 className="font-display text-[28px] lg:text-[36px] leading-tight text-ink mb-5">
                  {service.title}: what you need to know
                </h2>
                <div className="space-y-4 text-[15px] lg:text-[16px] leading-relaxed text-ink/80">
                  {content.intro.map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </section>

              {/* Benefits */}
              <section>
                <p className="eyebrow mb-3">— Why specialist matching matters</p>
                <h2 className="font-display text-[26px] lg:text-[32px] leading-tight text-ink mb-5">
                  What good emergency care looks like for {service.title.toLowerCase()}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {content.benefits.map((b, i) => (
                    <div key={i} className="bg-white border border-ink/10 rounded-lg p-5">
                      <div className="flex items-start gap-3 mb-2">
                        <CheckCircle size={16} className="text-brand-600 flex-shrink-0 mt-0.5" />
                        <h3 className="font-bold text-[15px] text-ink leading-tight">{b.title}</h3>
                      </div>
                      <p className="text-[13.5px] text-ink/70 leading-relaxed pl-7">{b.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Common mistakes */}
              {mistakes && (
                <section>
                  <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle size={16} className="text-urgent-600" />
                    <p className="eyebrow text-urgent-600 m-0">— Common mistakes</p>
                  </div>
                  <h2 className="font-display text-[26px] lg:text-[32px] leading-tight text-ink mb-5">
                    {mistakes.headline}
                  </h2>
                  <div className="space-y-4">
                    {mistakes.mistakes.map((m, i) => (
                      <div key={i} className="bg-paper border-l-4 border-urgent-500 rounded-r-md p-5">
                        <p className="font-display text-[18px] text-ink mb-2 leading-tight">
                          {i + 1}. {m.what}
                        </p>
                        <p className="text-[14px] text-ink/70 leading-relaxed">{m.why}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Pairs well with */}
              {pairedService && pair && (
                <section>
                  <div className="bg-brand-50 border-l-4 border-brand-500 rounded-r-md p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <ArrowRight size={14} className="text-brand-600" />
                      <p className="eyebrow text-brand-600 m-0">— Often connected to</p>
                    </div>
                    <h3 className="font-display text-[22px] text-ink mb-3 leading-tight">
                      {pairedService.title}
                    </h3>
                    <p className="text-[14.5px] text-ink/75 leading-relaxed mb-4">{pair.reason}</p>
                    <Link href={`/services/${pairedService.slug}/`} className="text-[13px] font-bold text-brand-600 inline-flex items-center gap-1 hover:text-brand-700">
                      Read about {pairedService.title.toLowerCase()} <ArrowRight size={12} />
                    </Link>
                  </div>
                </section>
              )}

              {/* When matching is right */}
              <section>
                <p className="eyebrow mb-3">— When this fits</p>
                <h2 className="font-display text-[26px] lg:text-[32px] leading-tight text-ink mb-3">
                  Is matching for {service.title.toLowerCase()} right for you?
                </h2>
                <p className="text-[15px] text-ink/70 mb-5 leading-relaxed">{content.candidateIntro}</p>
                <div className="bg-white border border-ink/10 rounded-lg p-6">
                  <ul className="space-y-3">
                    {content.candidates.map((c, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle size={14} className="text-brand-600 flex-shrink-0 mt-1" />
                        <span className="text-[14.5px] text-ink/80 leading-relaxed">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Process */}
              <section>
                <p className="eyebrow mb-3">— The matching process</p>
                <h2 className="font-display text-[26px] lg:text-[32px] leading-tight text-ink mb-5">
                  How {service.title.toLowerCase()} matching works
                </h2>
                <div className="space-y-3">
                  {content.process.map((step, i) => (
                    <div key={i} className="flex gap-4 items-start bg-white border border-ink/10 rounded-lg p-5">
                      <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center font-bold text-[13px]">
                        {i + 1}
                      </div>
                      <div>
                        <p className="font-bold text-[15px] text-ink mb-1">{step.title}</p>
                        <p className="text-[13.5px] text-ink/70 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* YMYL block */}
              <EmergencyDisclaimer variant="block" />

              {/* FAQ */}
              <section>
                <FAQ faqs={[...service.faqs, ...FAQS_SERVICES]} title={`${service.title} — common questions`} />
              </section>
            </article>

            {/* Sidebar */}
            <aside>
              <div className="lg:sticky lg:top-24 space-y-5">
                <div className="bg-white border border-ink/10 rounded-lg p-5">
                  <p className="eyebrow mb-2">Get matched</p>
                  <h3 className="font-display text-[20px] text-ink leading-tight mb-2">
                    Free Harlow matching
                  </h3>
                  <p className="text-[13px] text-ink/65 mb-4 leading-relaxed">
                    GDC-verified. Most introductions within 60 minutes during opening hours.
                  </p>
                  <button onClick={() => setModal(true)} className="btn-primary w-full justify-center">
                    Find a dentist <ArrowRight size={14} />
                  </button>
                  <ul className="mt-4 pt-4 border-t border-ink/8 space-y-2 text-[13px] text-ink/70">
                    <li className="flex items-center gap-2"><Clock size={13} className="text-brand-600" /> Hour-window matching</li>
                    <li className="flex items-center gap-2"><CheckCircle size={13} className="text-brand-600" /> GDC registered</li>
                    <li className="flex items-center gap-2"><CheckCircle size={13} className="text-brand-600" /> Free to patients</li>
                  </ul>
                </div>

                <div className="bg-paper border border-ink/10 rounded-lg p-5">
                  <p className="eyebrow mb-3">Other emergencies</p>
                  <ul className="space-y-2">
                    {otherServices.map(s => (
                      <li key={s.slug}>
                        <Link href={`/services/${s.slug}/`} className="flex items-start gap-2 text-[13.5px] text-ink/75 hover:text-brand-600 transition-colors">
                          <ArrowRight size={11} className="text-brand-500 flex-shrink-0 mt-1" />
                          <span>{s.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>

        <section className="bg-brand-600 text-white py-14 lg:py-18 text-center">
          <div className="container-width max-w-3xl">
            <h2 className="font-display text-[28px] lg:text-[40px] leading-tight mb-3">
              Get matched for {service.title.toLowerCase()}
            </h2>
            <p className="text-[15px] text-white/85 max-w-xl mx-auto mb-6 leading-relaxed">
              Tell us what is happening — we triage every enquiry within the hour.
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
