'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, AlertCircle } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { LeadFormModal } from '@/components/LeadFormModal';

export default function ContactPage() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <LeadFormModal isOpen={modal} onClose={() => setModal(false)} />
      <Header onOpenModal={() => setModal(true)} />

      <main className="flex-grow bg-cream">
        <section className="bg-ink text-white">
          <div className="container-width pt-10 pb-14">
            <Breadcrumbs dark items={[{ label: 'Contact' }]} />
            <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-brand-300 mt-6 mb-4">— Get in touch</p>
            <h1 className="font-display text-[34px] lg:text-[46px] leading-tight max-w-2xl mb-5">
              How to reach Emergency Dentists Harlow
            </h1>
            <p className="text-[15px] lg:text-[17px] text-white/80 max-w-2xl leading-relaxed">
              Different needs go through different channels. The fastest route for a current dental emergency is the matching form. Other questions are below.
            </p>
          </div>
        </section>

        <section className="container-width py-14 max-w-4xl">

          {/* Genuine medical emergency callout */}
          <div className="bg-urgent-50 border-l-4 border-urgent-500 rounded-md p-5 mb-10">
            <div className="flex items-start gap-3">
              <AlertCircle size={20} className="text-urgent-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-urgent-700 mb-2">Genuine medical emergency?</p>
                <p className="text-[14px] text-ink/80 leading-relaxed">
                  Spreading facial swelling, breathing difficulty, uncontrolled bleeding — call <strong>999</strong> or <strong>NHS 111</strong> directly. These are hospital problems, not dental ones. Do not wait for our matching service.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <Card
              eyebrow="Get matched"
              title="Start a free enquiry"
              body="Tell us what is wrong. We match you with up to three vetted Harlow dentists within 60 minutes during opening hours, first thing the next morning otherwise. Free, no obligation."
              cta={{ label: 'Open the matching form', onClick: () => setModal(true) }}
              accent
            />

            <Card
              eyebrow="General questions"
              title="Email us"
              body="Questions about how the matching service works, complaints about a matched dentist, or feedback. We aim to respond within two working days."
              email="hello@emergencydenstistsharlow.co.uk"
            />

            <Card
              eyebrow="UK GDPR data requests"
              title="Privacy and data"
              body="Subject access requests, data deletion requests, or any other UK GDPR matter. We respond within one calendar month, as the regulation requires."
              email="privacy@emergencydenstistsharlow.co.uk"
              footer={<>See our full <Link href="/privacy/" className="text-brand-600 underline hover:text-brand-700">privacy notice</Link> for what we collect and your rights.</>}
            />

            <Card
              eyebrow="For dentists"
              title="Join the network"
              body="GDC-registered dentists serving the Harlow CM-postcode area can apply to join the matched network. We verify GDC status, professional indemnity, and emergency-handling experience before accepting any new partner."
              email="partners@emergencydenstistsharlow.co.uk"
            />

          </div>

          <p className="text-center text-[13px] text-ink/60 mt-10 max-w-2xl mx-auto leading-relaxed">
            We are not a dental practice — we are a referral and introduction service. All clinical work is provided by GDC-registered dentists in our network. See our <Link href="/about/" className="text-brand-600 underline hover:text-brand-700">about page</Link> for how the matching service works, or <Link href="/terms/" className="text-brand-600 underline hover:text-brand-700">terms</Link> for the rules of using this site.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}

interface CardProps {
  eyebrow: string;
  title: string;
  body: string;
  email?: string;
  cta?: { label: string; onClick: () => void };
  accent?: boolean;
  footer?: React.ReactNode;
}

function Card({ eyebrow, title, body, email, cta, accent, footer }: CardProps) {
  return (
    <div className={`rounded-lg border p-6 ${accent ? 'bg-white border-ink/10' : 'bg-paper border-ink/10'}`}>
      <p className={`eyebrow mb-2 ${accent ? 'text-brand-600' : 'text-ink/55'}`}>{eyebrow}</p>
      <h2 className="font-display text-[22px] text-ink leading-tight mb-3">{title}</h2>
      <p className="text-[14px] text-ink/70 leading-relaxed mb-4">{body}</p>
      {cta && (
        <button onClick={cta.onClick} className="btn-primary text-[13px]">
          {cta.label} <ArrowRight size={13} />
        </button>
      )}
      {email && (
        <p className="font-mono text-[14px] text-ink">{email}</p>
      )}
      {footer && <p className="text-[12px] text-ink/55 mt-3 leading-relaxed">{footer}</p>}
    </div>
  );
}
