import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Privacy notice',
  description:
    'How Emergency Dentists Harlow collects, uses, and protects personal data submitted through our matching service. UK GDPR notice covering enquiry data, cookies, and your rights.',
  alternates: { canonical: '/privacy/' },
  robots: { index: true, follow: true },
};

const LAST_REVIEWED = '4 May 2026';

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-cream">
        <section className="bg-ink text-white">
          <div className="container-width pt-10 pb-14">
            <Breadcrumbs dark items={[{ label: 'Privacy' }]} />
            <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-brand-300 mt-6 mb-4">— Legal · Privacy notice</p>
            <h1 className="font-display text-[34px] lg:text-[46px] leading-tight max-w-2xl mb-5">
              Privacy notice
            </h1>
            <p className="text-[15px] text-white/80 max-w-2xl leading-relaxed mb-3">
              How {siteConfig.name} collects, uses, and protects personal data submitted through the matching service. Written to satisfy UK GDPR and PECR.
            </p>
            <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-white/40">
              Last reviewed · {LAST_REVIEWED}
            </p>
          </div>
        </section>

        <article className="container-width py-14 max-w-3xl space-y-10 text-[15.5px] leading-relaxed text-ink/80">
          <Section title="Plain-English summary">
            <p>
              We collect your name, contact details, what is wrong, and where you are in Harlow — solely to match you with up to three vetted GDC-registered dentists. We share your details only with those matched dentists. Never sold, never used for marketing without your explicit consent, deleted after 24 months. You have full UK GDPR rights including deletion and complaint to the ICO.
            </p>
          </Section>

          <Section title="1. Who we are">
            <p>
              {siteConfig.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) operates {' '}
              <strong>{siteConfig.url.replace(/https?:\/\//, '')}</strong>{' '}
              as a free matching service connecting Harlow residents with vetted GDC-registered emergency dentists. We are the data controller for personal information submitted via this site.
            </p>
            <p>
              <strong>We are not a dental practice or clinical service.</strong> Once we share your enquiry with matched dentists, those dentists act as independent data controllers for any further work you instruct them to do.
            </p>
          </Section>

          <Section title="2. What data we collect">
            <p>When you submit the matching form we collect:</p>
            <ul>
              <li><strong>Full name</strong> — for the matched dentist to address you correctly.</li>
              <li><strong>Email address</strong> — for confirmation and follow-up.</li>
              <li><strong>Phone number</strong> — so the matched dentist can call you back to arrange the appointment.</li>
              <li><strong>Type of emergency</strong> — what is wrong (severe toothache, knocked-out tooth, etc.).</li>
              <li><strong>Area within Harlow</strong> — to match you with a dentist within reasonable travel distance.</li>
              <li><strong>Optional message</strong> — any context you choose to provide.</li>
              <li><strong>Page you submitted from</strong> — to give the matched dentist context.</li>
            </ul>
            <p>
              We do <strong>not</strong> collect your medical history, dental records, NHS number, or any other clinical information through our forms. The matched dentist will collect what they need clinically, directly from you.
            </p>
            <p>
              If you accept analytics cookies, we also collect anonymised browsing data through Google Analytics 4 — see &quot;Cookies&quot; below.
            </p>
          </Section>

          <Section title="3. Why we collect it (lawful basis)">
            <p>
              We process enquiry data on the basis of <strong>your consent</strong> (UK GDPR Article 6(1)(a)) — you tick a box on the form to confirm you want to be matched with up to three vetted dentists. You can withdraw consent at any time by emailing us; withdrawal does not affect lawfulness of processing carried out before withdrawal.
            </p>
            <p>
              Once we share your enquiry with a matched dentist, that dentist&apos;s lawful basis for follow-up contact is also your consent, plus their <strong>legitimate interest</strong> in responding to a referred enquiry.
            </p>
          </Section>

          <Section title="4. Who we share it with">
            <p>
              Your enquiry is shared with up to three vetted dentists from our Harlow network. Each receives your name, email, phone, type of emergency, area, and any optional message. They are required to treat that information confidentially and use it only to respond to your enquiry.
            </p>
            <p>The form submission itself is processed using:</p>
            <ul>
              <li><strong>Google Apps Script</strong> (Google LLC) — receives the form submission and routes it to our enquiry record.</li>
              <li><strong>Google Workspace</strong> (Google LLC) — stores the enquiry record and sends notification email.</li>
            </ul>
            <p>
              Google may transfer data outside the UK; transfers are covered by the UK Addendum to the EU Standard Contractual Clauses, which provides the safeguards UK GDPR requires.
            </p>
            <p><strong>We do not sell or rent your data to third parties for marketing.</strong></p>
          </Section>

          <Section title="5. How long we keep it">
            <p>
              Enquiry records are kept for <strong>24 months</strong> from the date of submission, after which they are deleted. We keep them this long to handle re-matching requests, complaints, or follow-up questions.
            </p>
            <p>
              Anonymised analytics data is retained for 14 months in Google Analytics, then automatically deleted by Google.
            </p>
          </Section>

          <Section title="6. Cookies">
            <p>This site uses two categories of cookie:</p>
            <ul>
              <li>
                <strong>Strictly necessary</strong> — a small cookie that records your cookie-banner choice. No consent required (PECR exemption).
              </li>
              <li>
                <strong>Analytics</strong> — Google Analytics 4 (cookies starting <code>_ga</code>) records anonymised page-view data so we can see which pages help patients. Loaded only if you click &quot;Accept&quot; on the cookie banner.
              </li>
            </ul>
            <p>We do not use advertising, retargeting, or social-media tracking cookies.</p>
          </Section>

          <Section title="7. Your rights">
            <p>Under UK GDPR you have the right to:</p>
            <ul>
              <li>Ask for a copy of the personal data we hold about you (subject access request).</li>
              <li>Ask us to correct inaccurate data.</li>
              <li>Ask us to delete your data (right to erasure).</li>
              <li>Withdraw consent at any time.</li>
              <li>Object to processing or restrict it.</li>
              <li>Complain to the UK supervisory authority — the Information Commissioner&apos;s Office at{' '}
                <a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noopener noreferrer">
                  ico.org.uk/make-a-complaint
                </a>.
              </li>
            </ul>
            <p>
              Exercise any of these rights via the channels on our <Link href="/contact/">contact page</Link>. We respond within one calendar month.
            </p>
          </Section>

          <Section title="8. Sensitive nature of dental enquiries">
            <p>
              We recognise that dental emergency enquiries can touch on pain, distress, and sometimes serious health concerns. We deliberately limit what the form collects — name, contact, broad emergency type, area — so that more sensitive clinical information stays under your control and is shared only with the dentist you choose to engage.
            </p>
            <p>
              If you accidentally include sensitive medical detail in the optional message field, you can ask us to delete the enquiry record at any time using the contact details above.
            </p>
          </Section>

          <Section title="9. Security">
            <p>
              Data submitted through the form is transmitted over HTTPS. Stored enquiry records are protected by Google Workspace account access controls (two-factor authentication enforced). Access is limited to the people responsible for processing matches.
            </p>
            <p>
              No system is perfectly secure. If we ever suffer a personal data breach that is likely to affect your rights, we will notify you and the ICO within 72 hours, as UK GDPR requires.
            </p>
          </Section>

          <Section title="10. Changes to this notice">
            <p>
              We review this notice at least once per year and whenever the matching service changes materially. The &quot;Last reviewed&quot; date at the top reflects the most recent revision.
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
      <div className="space-y-4 [&_a]:text-brand-600 [&_a]:underline [&_a:hover]:text-brand-700 [&_strong]:text-ink [&_strong]:font-semibold [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_code]:font-mono [&_code]:text-[13px] [&_code]:bg-ink/[0.06] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded">
        {children}
      </div>
    </section>
  );
}
