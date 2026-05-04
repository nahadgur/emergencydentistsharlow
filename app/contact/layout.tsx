import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';

// Contact page metadata. Title under 60 chars, description under 160.
export const metadata: Metadata = {
  title: 'Contact — Emergency Dentists Harlow Matching',
  description:
    'Tell us what is hurting and we will match you with a vetted, GDC-registered emergency dentist in Harlow within the hour. Free, no obligation.',
  alternates: { canonical: `${siteConfig.url}/contact/` },
  openGraph: {
    title: 'Contact — Emergency Dentists Harlow Matching',
    description:
      'Tell us what is hurting and we will match you with a vetted, GDC-registered emergency dentist in Harlow within the hour. Free, no obligation.',
    url: `${siteConfig.url}/contact/`,
    type: 'website',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
