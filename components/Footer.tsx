import Link from 'next/link';
import { services } from '@/data/services';
import { AREA_HUBS } from '@/data/locations';
import { siteConfig } from '@/data/site';

// 2026-05-05 redesign — dark surface footer with the design's emotional
// closing pattern: a big Instrument Serif italic statement followed by
// small mono-eyebrowed link columns and a mono compliance line. No
// phone CTA (we are a matching service, not a clinical practice).
export function Footer() {
  return (
    <footer className="bg-ink text-ink-mute mt-auto">
      <div className="container-width pt-14 lg:pt-16 pb-10">
        {/* Closing emotional headline — italic serif, like the design's
            "Don't wait it out / Call us." block, retargeted to the
            matching-service voice. */}
        <p
          className="italic-accent text-ink-soft-text leading-[1.05] mb-8 lg:mb-10"
          style={{ fontSize: 'clamp(28px, 4.6vw, 44px)', letterSpacing: '-0.02em' }}
        >
          Free matching with vetted Harlow dentists.
          <br />
          <span className="text-brand-300">Tell us what hurts.</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-10 text-[13px] pb-8 lg:pb-10 border-b border-ink-line">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <span
                className="grid place-items-center text-cream font-display italic"
                aria-hidden="true"
                style={{ width: 26, height: 26, background: '#1a2826', fontSize: 18, lineHeight: 1, border: '1px solid #2a322f' }}
              >
                e
              </span>
              <span className="flex flex-col leading-[1.1]">
                <span className="text-[13px] font-semibold text-ink-soft-text tracking-[-0.01em]">
                  Emergency Dentists
                </span>
                <span className="font-mono text-[10px] text-ink-mute uppercase tracking-[0.12em]">
                  Harlow
                </span>
              </span>
            </Link>
            <p className="leading-relaxed mb-4 text-ink-mute/85">
              Free matching service connecting Harlow residents with vetted GDC-registered emergency dentists across CM17, CM18, CM19, CM20, and CM21 postcodes.
            </p>
            <p className="text-[12px] leading-relaxed italic text-ink-mute/55">
              We are not a dental practice or a clinical service. We introduce patients to qualified GDC-registered dentists. For genuine medical emergencies (uncontrolled bleeding, spreading facial swelling, breathing difficulty), call 999 or NHS 111.
            </p>
          </div>

          {/* Emergencies */}
          <div>
            <p className="font-mono uppercase tracking-[0.1em] text-[11px] text-ink-soft-text font-medium mb-3">
              Care
            </p>
            <ul className="space-y-2">
              {services.map(s => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}/`} className="hover:text-brand-300 transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <p className="font-mono uppercase tracking-[0.1em] text-[11px] text-ink-soft-text font-medium mb-3">
              Harlow areas
            </p>
            <ul className="space-y-2">
              {AREA_HUBS.slice(0, 6).map(a => (
                <li key={a.slug}>
                  <Link href={`/location/${a.slug}/`} className="hover:text-brand-300 transition-colors">
                    {a.name}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link href="/location/" className="text-brand-300 hover:text-brand-200 text-[12px] font-medium">
                  View all areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <p className="font-mono uppercase tracking-[0.1em] text-[11px] text-ink-soft-text font-medium mb-3">
              Practice
            </p>
            <ul className="space-y-2">
              {[
                { href: '/blog/',    label: 'Guides and articles' },
                { href: '/about/',   label: 'About the service' },
                { href: '/contact/', label: 'Contact us' },
                { href: '/privacy/', label: 'Privacy notice' },
                { href: '/terms/',   label: 'Terms of use' },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-brand-300 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Compliance footer — mono, all-caps, tiny, matches the design's
            "EMERGENCY DENTISTS HARLOW LTD · COMPANY ..." block. */}
        <div className="pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 font-mono text-[10px] tracking-[0.05em] text-ink-mute/60 leading-[1.7] uppercase">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.<br />
            Free matching service · GDC-registered network
          </p>
          <p className="max-w-md normal-case font-sans italic text-[11px] text-ink-mute/55 tracking-normal">
            We are a referral service. All clinical work is provided by GDC-registered dentists in our network.
          </p>
        </div>
      </div>
    </footer>
  );
}
