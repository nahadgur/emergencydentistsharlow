import Link from 'next/link';
import { services } from '@/data/services';
import { AREA_HUBS } from '@/data/locations';
import { siteConfig } from '@/data/site';

export function Footer() {
  return (
    <footer className="bg-ink text-white/70 mt-auto">
      <div className="container-width py-14 grid grid-cols-1 md:grid-cols-4 gap-10 text-[13px]">
        {/* Brand */}
        <div>
          <p className="font-display text-[19px] text-white leading-tight mb-4">
            Emergency Dentists <span className="text-brand-300">Harlow</span>
          </p>
          <p className="leading-relaxed mb-4 text-white/55">
            Free matching service connecting Harlow residents with vetted GDC-registered emergency dentists across CM17, CM18, CM19, CM20, and CM21 postcodes.
          </p>
          <p className="text-[12px] leading-relaxed text-white/35 italic">
            We are not a dental practice or a clinical service. We introduce patients to qualified GDC-registered dentists. For genuine medical emergencies (uncontrolled bleeding, spreading facial swelling, breathing difficulty), call 999 or NHS 111.
          </p>
        </div>

        {/* Emergencies */}
        <div>
          <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 mb-4">Emergencies</p>
          <ul className="space-y-2.5">
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
          <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 mb-4">Harlow areas</p>
          <ul className="space-y-2.5">
            {AREA_HUBS.slice(0, 6).map(a => (
              <li key={a.slug}>
                <Link href={`/location/${a.slug}/`} className="hover:text-brand-300 transition-colors">
                  {a.name}
                </Link>
              </li>
            ))}
            <li className="pt-1">
              <Link href="/location/" className="text-brand-300 hover:text-brand-200 text-[12px] font-bold">
                View all areas →
              </Link>
            </li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 mb-4">Information</p>
          <ul className="space-y-2.5">
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

      <div className="border-t border-white/8">
        <div className="container-width py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[11px] text-white/35">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p className="max-w-md italic">
            We are a referral service. All clinical work is provided by GDC-registered dentists in our network.
          </p>
        </div>
      </div>
    </footer>
  );
}
