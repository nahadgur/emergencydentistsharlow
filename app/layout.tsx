import type { Metadata, Viewport } from 'next';
import { Inter_Tight, Instrument_Serif, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/data/site';
import { ConsentBanner } from '@/components/ConsentBanner';

// 2026-05-05 redesign — Inter Tight (UI), Instrument Serif (italic accents
// only; sparingly), JetBrains Mono (eyebrows + code-style labels). Pulled
// from the Claude Design handoff for the dental homepage prototype.
const sans = Inter_Tight({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
});

const display = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

// Homepage meta — under 60 chars title, under 160 chars description.
// The `template` covers all child pages that don't define their own
// metadata (location/[area], services/[serviceSlug], blog/[slug]).
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Emergency Dentist Harlow — Same-Day Match · Free',
    template: `%s | ${siteConfig.name}`,
  },
  description:
    'Free same-day matching with vetted, GDC-registered emergency dentists in Harlow. Toothache, abscess, knocked-out tooth, broken tooth — matched within an hour.',
  alternates: { canonical: siteConfig.url },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: 'Emergency Dentist Harlow — Same-Day Match · Free',
    description:
      'Free same-day matching with vetted, GDC-registered emergency dentists in Harlow. Toothache, abscess, knocked-out tooth, broken tooth — matched within an hour.',
    locale: 'en_GB',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Emergency Dental Harlow — same-day matching' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emergency Dentist Harlow — Same-Day Match · Free',
    description:
      'Free same-day matching with vetted, GDC-registered emergency dentists in Harlow.',
    images: ['/og-image.png'],
  },
};

export const viewport: Viewport = {
  themeColor: '#A84838',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Schema graph — WebSite, Organization, and the matching Service all
  // reference each other via @id so Google reads the site as one entity.
  //
  // 2026-05-05: schema cleanup. We're a referral / matching service, NOT
  // a dental practice. Claiming `Dentist` schema for the brand itself
  // would misrepresent — Google's medical-vertical guidelines treat that
  // as a YMYL trust violation. The right shape is:
  //   * Organization — the matching service (us)
  //   * Service — the matching offering, with serviceType "Emergency
  //     dental matching and referral", areaServed Harlow, free-to-patient
  //     offer
  //   * WebSite — already in place
  // Named partner clinics get their own LocalBusiness/Dentist nodes
  // emitted only on the relevant location page where they're listed,
  // not on the global layout.
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    name: siteConfig.name,
    alternateName: siteConfig.tagline,
    url: siteConfig.url,
    publisher: { '@id': `${siteConfig.url}/#organization` },
    inLanguage: 'en-GB',
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/android-chrome-512x512.png`,
    description: siteConfig.description,
    sameAs: [siteConfig.url],
    areaServed: {
      '@type': 'AdministrativeArea',
      name: siteConfig.serviceArea,
      containedInPlace: { '@type': 'Country', name: 'United Kingdom' },
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: 'English',
      areaServed: 'GB',
    },
  };

  // The actual offering. Service rather than LocalBusiness/Dentist
  // because the brand is a matching service; the dentists in the
  // network are the LocalBusinesses, not us.
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteConfig.url}/#service`,
    name: 'Emergency dental matching service for Harlow',
    serviceType: 'Emergency dental matching and referral',
    description:
      'Free service connecting Harlow patients with vetted, GDC-registered emergency dentists. Same-day toothache, knocked-out tooth, dental abscess, broken or chipped tooth, lost crown or filling, dental trauma, and wisdom-tooth pain triage covered.',
    provider: { '@id': `${siteConfig.url}/#organization` },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Harlow, Essex' },
      { '@type': 'PostalAddress', addressRegion: 'Essex', postalCode: 'CM17', addressCountry: 'GB' },
      { '@type': 'PostalAddress', addressRegion: 'Essex', postalCode: 'CM18', addressCountry: 'GB' },
      { '@type': 'PostalAddress', addressRegion: 'Essex', postalCode: 'CM19', addressCountry: 'GB' },
      { '@type': 'PostalAddress', addressRegion: 'Essex', postalCode: 'CM20', addressCountry: 'GB' },
      { '@type': 'PostalAddress', addressRegion: 'Essex', postalCode: 'CM21', addressCountry: 'GB' },
    ],
    audience: {
      '@type': 'PeopleAudience',
      audienceType: 'Patients with urgent dental needs in Harlow and surrounding CM postcodes',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
      description: 'Free to patients. We are a referral service.',
    },
    isPartOf: { '@id': `${siteConfig.url}/#website` },
  };

  return (
    <html lang="en-GB" className={`${sans.variable} ${display.variable} ${mono.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      </head>
      <body className="min-h-screen flex flex-col">
        {/* GA4 only loads after the visitor accepts the cookie banner
            (UK PECR requires prior consent). gaId is empty in siteConfig
            until the live tracking ID is configured — the banner shows
            either way for choice persistence. */}
        <ConsentBanner gaId={siteConfig.gaId} />
        {children}
      </body>
    </html>
  );
}
