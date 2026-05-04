import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'About the matching service',
  description:
    'Emergency Dentists Harlow is a free matching service connecting Harlow residents with vetted GDC-registered emergency dentists. We are not a clinical service — we introduce patients to qualified professionals.',
  alternates: { canonical: '/about/' },
  robots: { index: true, follow: true },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-cream">
        <section className="bg-ink text-white">
          <div className="container-width pt-10 pb-14">
            <Breadcrumbs dark items={[{ label: 'About' }]} />
            <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-brand-300 mt-6 mb-4">— About the service</p>
            <h1 className="font-display text-[34px] lg:text-[48px] leading-tight max-w-2xl mb-5">
              How we match Harlow patients with emergency dentists
            </h1>
            <p className="text-[15px] lg:text-[17px] text-white/80 max-w-2xl leading-relaxed">
              {siteConfig.name} is a free matching service. We read your enquiry, connect you with up to three vetted GDC-registered Harlow dentists who handle the kind of emergency you have, and step back. Patients pay nothing for matching — only the dentist for the treatment.
            </p>
          </div>
        </section>

        <article className="container-width py-14 max-w-3xl space-y-10 text-[15.5px] leading-relaxed text-ink/80">
          <Section title="What we are — and aren't">
            <p>
              We are a referral and introduction service. We are <strong>not</strong> a dental practice, a clinical service, or a regulated healthcare provider. We do not see patients ourselves, examine teeth, or provide any clinical advice.
            </p>
            <p>
              What we do: we read your enquiry, identify which dentists in our network are best placed to help, and introduce you. Once an introduction is made, the relationship is between you and the dentist — including their fee, their professional accountability, and their clinical decisions.
            </p>
          </Section>

          <Section title="How matching works">
            <ol>
              <li><strong>You submit the form.</strong> Name, contact details, where you are in Harlow, what is wrong, and any context. Two minutes.</li>
              <li><strong>We triage.</strong> A real person reads every enquiry. Critical presentations (avulsion, suspected spreading infection) bypass any normal queueing. Routine same-day presentations match within the hour during opening hours.</li>
              <li><strong>We make introductions.</strong> Up to three vetted dentists with the right experience and current availability. They contact you to arrange the appointment.</li>
              <li><strong>You choose.</strong> Compare quotes if you want, or just engage the first one available — your call. No obligation.</li>
            </ol>
          </Section>

          <Section title="How we vet dentists in our network">
            <p>Every dentist in our network is checked for:</p>
            <ul>
              <li><strong>Current GDC registration.</strong> Verified annually against the General Dental Council\'s public register.</li>
              <li><strong>Professional indemnity insurance.</strong> Active cover at a level appropriate to the work.</li>
              <li><strong>Emergency-handling experience.</strong> Practical evidence of handling urgent dental presentations — avulsion, abscess, trauma — not just routine restorative work.</li>
              <li><strong>Clean complaints history.</strong> No active or unresolved professional complaints; we ask about and verify any past matters.</li>
            </ul>
          </Section>

          <Section title="Partner surgeries we work with">
            <p>
              The matching network includes named partner surgeries across the borough alongside the wider matched-dentist pool. Two recognisable network anchors are:
            </p>
            <ul>
              <li>
                <strong>Nuffield Health Hospital Harlow</strong> (Old Harlow, CM17) — private hospital site on Rectory Lane. Routed for emergency presentations needing imaging or specialist input alongside dental treatment, and for patients who specifically prefer a hospital-environment private appointment.
              </li>
              <li>
                <strong>Church Langley Dental Practice</strong> (Church Langley, CM17) — modern family-focused practice serving the village and the wider east-Harlow catchment. Routed for paediatric and family emergency presentations, and for residents who prefer the local Church Langley access point over central Harlow.
              </li>
            </ul>
            <p>
              The matched dentist for any particular enquiry depends on availability, your specific situation, and travel distance from your stated location. Named partners are part of the network, not the only practices we route to.
            </p>
          </Section>

          <Section title="What it costs you">
            <p>
              <strong>Nothing for the matching service.</strong> We are paid by the dentists in our network when an introduction leads to a booked appointment. You pay only the dentist for the treatment they provide, at their quoted fee. We add no markup, charge no commission, and never share your data outside the matched practices.
            </p>
            <p>
              The dentist will quote the cost of the consultation and any treatment before you commit. NHS Band 1 emergency consultation is £27.40 in 2026; private emergency consultations typically run £80–£150. Treatment is costed separately and depends on what is needed.
            </p>
          </Section>

          <Section title="What we do not handle">
            <p>
              For genuine medical emergencies — uncontrolled bleeding, facial swelling spreading to your eye, throat, or neck, breathing difficulty, or feeling severely unwell — call <strong>999</strong> or <strong>NHS 111</strong>. These are hospital problems requiring IV antibiotics and sometimes surgical intervention, not outpatient dental care. We will tell you immediately if your symptoms suggest hospital care rather than dental care.
            </p>
            <p>
              We also do not handle routine dental care that is not an emergency — six-month check-ups, cosmetic dentistry, orthodontics, hygienist work. The matching service is for urgent and emergency need.
            </p>
          </Section>

          <Section title="How we handle your data">
            <p>
              We collect only what we need to make the introduction — see our <Link href="/privacy/">privacy notice</Link> for the full UK GDPR detail. The headline: name, contact, location, type of emergency, optional message. Never sold, never shared outside the matched dentists you authorise.
            </p>
          </Section>

          <Section title="Get in touch">
            <p>
              Questions about how the service works, feedback about a matched dentist, or to discuss joining the network as a Harlow practitioner — our <Link href="/contact/">contact page</Link> lists the relevant channels.
            </p>
          </Section>
        </article>
      </main>
      <Footer />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-[22px] lg:text-[28px] text-ink leading-tight mb-4">{title}</h2>
      <div className="space-y-4 [&_a]:text-brand-600 [&_a]:underline [&_a:hover]:text-brand-700 [&_strong]:text-ink [&_strong]:font-semibold [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2">
        {children}
      </div>
    </section>
  );
}
