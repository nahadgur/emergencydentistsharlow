import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Terms of use',
  description:
    'Terms of use for Emergency Dentists Harlow — a free matching service connecting Harlow residents with vetted GDC-registered dentists. The rules of using this site and the limits of our liability.',
  alternates: { canonical: '/terms/' },
  robots: { index: true, follow: true },
};

const LAST_REVIEWED = '4 May 2026';

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-cream">
        <section className="bg-ink text-white">
          <div className="container-width pt-10 pb-14">
            <Breadcrumbs dark items={[{ label: 'Terms' }]} />
            <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-brand-300 mt-6 mb-4">— Legal · Terms of use</p>
            <h1 className="font-display text-[34px] lg:text-[46px] leading-tight max-w-2xl mb-5">Terms of use</h1>
            <p className="text-[15px] text-white/80 max-w-2xl leading-relaxed mb-3">
              The rules that apply when you use this site or submit an enquiry through the matching service. Plain English wherever possible.
            </p>
            <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-white/40">
              Last reviewed · {LAST_REVIEWED}
            </p>
          </div>
        </section>

        <article className="container-width py-14 max-w-3xl space-y-10 text-[15.5px] leading-relaxed text-ink/80">
          <Section title="1. About these terms">
            <p>
              These terms govern your use of {siteConfig.url.replace(/https?:\/\//, '')} and the matching service operated by {siteConfig.name}. By using the site or submitting an enquiry, you agree to these terms. If you don&apos;t agree, please don&apos;t use the service.
            </p>
            <p>
              We may update these terms from time to time. The &quot;Last reviewed&quot; date at the top reflects the most recent change.
            </p>
          </Section>

          <Section title="2. What we are">
            <p>
              {siteConfig.name} is a referral and introduction service. We connect you with vetted, independent GDC-registered dentists serving the Harlow area.
            </p>
            <p>
              <strong>We are not a dental practice or clinical service.</strong> We do not examine teeth, prescribe treatment, hold patient records, or provide any clinical advice. We make introductions; the clinical work is done by the dentist you engage.
            </p>
          </Section>

          <Section title="3. The matching service is free to patients">
            <p>
              You pay nothing for matching. We are paid by the dentists in our network when an introduction leads to a booked appointment. You only pay the dentist for the treatment they provide, on the terms agreed directly with them.
            </p>
          </Section>

          <Section title="4. No clinical or medical advice">
            <p>
              Nothing on this site — including service descriptions, blog articles, area guides, or first-aid suggestions — constitutes clinical or medical advice. Content is general information only. Dental and medical care is highly individual; only a qualified dentist or medical practitioner who has examined you can advise on your specific situation.
            </p>
            <p>
              First-aid suggestions (such as preserving a knocked-out tooth in milk) reflect current general guidance but do not replace professional clinical assessment. Always seek qualified dental or medical care for any actual situation.
            </p>
          </Section>

          <Section title="5. Genuine medical emergencies are not for this service">
            <p>
              Spreading facial swelling, breathing difficulty, uncontrolled bleeding, severe systemic illness with a dental cause — these are <strong>medical emergencies</strong> requiring hospital care. Call <strong>999</strong> or <strong>NHS 111</strong> directly. The matching service is for dental presentations within an outpatient dentist\'s scope of work.
            </p>
          </Section>

          <Section title="6. Your responsibilities">
            <p>When you use the service, you confirm that:</p>
            <ul>
              <li>You are at least 18 years old (or have parental consent if making an enquiry on behalf of a child).</li>
              <li>The information you provide in the enquiry form is accurate and complete to the best of your knowledge.</li>
              <li>You consent to your details being shared with up to three matched dentists (you tick a box on the form to confirm this).</li>
              <li>You will not use the site to submit malicious, abusive, or fraudulent enquiries.</li>
            </ul>
          </Section>

          <Section title="7. Our role ends at introduction">
            <p>
              Once we have introduced you to a matched dentist, the relationship is between you and that dentist. The dentist is responsible for:
            </p>
            <ul>
              <li>Their own quote and fee, and the terms of engagement.</li>
              <li>The clinical advice and treatment they provide.</li>
              <li>Their GDC registration, professional indemnity, and any complaints handling.</li>
              <li>Patient records and follow-up care.</li>
            </ul>
            <p>
              We are not responsible for the clinical work of matched dentists. Complaints about a matched dentist should go through the dentist\'s own complaints process or the relevant professional body (GDC). Please also tell us — we use the feedback to maintain network standards.
            </p>
          </Section>

          <Section title="8. Limitation of liability">
            <p>
              To the extent permitted by law, our liability is limited to the introduction itself. We are not liable for:
            </p>
            <ul>
              <li>The accuracy, suitability, or quality of care provided by matched dentists.</li>
              <li>Disputes between you and a matched dentist.</li>
              <li>Loss arising from reliance on general information published on this site.</li>
              <li>Indirect or consequential losses.</li>
            </ul>
            <p>
              Nothing in these terms excludes or limits liability for fraud, fraudulent misrepresentation, death or personal injury caused by negligence, or any other liability that cannot be excluded under English law.
            </p>
          </Section>

          <Section title="9. Intellectual property">
            <p>
              The text, design, code, and other content on this site are owned by {siteConfig.name} or licensed for our use. You may view and share pages for personal, non-commercial use, but not republish or commercially redistribute without permission.
            </p>
          </Section>

          <Section title="10. Privacy and cookies">
            <p>
              How we handle personal data is set out in our <Link href="/privacy/">privacy notice</Link>. The cookie banner lets you accept or reject the analytics cookie before any non-essential cookies load.
            </p>
          </Section>

          <Section title="11. Governing law">
            <p>
              These terms are governed by the laws of England and Wales. Disputes will be dealt with by the courts of England and Wales.
            </p>
          </Section>

          <Section title="12. Contact">
            <p>
              Questions about these terms — see the channels on our <Link href="/contact/">contact page</Link>.
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
      <div className="space-y-4 [&_a]:text-brand-600 [&_a]:underline [&_a:hover]:text-brand-700 [&_strong]:text-ink [&_strong]:font-semibold [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2">
        {children}
      </div>
    </section>
  );
}
