// app/not-found.tsx
//
// Proper 404 — does NOT redirect to /, that creates the soft-404 problem
// (every dead URL looks like a duplicate of the homepage to Google).
import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Page not found',
  description: 'The page you were looking for could not be found.',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-cream flex items-center justify-center py-24 lg:py-32 px-5">
        <div className="max-w-2xl text-center">
          <p className="font-display italic text-[120px] lg:text-[180px] leading-none text-brand-600 mb-2">
            404
          </p>
          <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-ink/55 mb-6">
            Page not found
          </p>
          <h1 className="font-display text-[28px] lg:text-[42px] leading-tight text-ink mb-5">
            We couldn&apos;t find that page
          </h1>
          <p className="text-[15px] text-ink/65 max-w-xl mx-auto mb-10 leading-relaxed">
            The page you were looking for doesn&apos;t exist or has been moved. Browse the matching service or read a guide below.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/" className="btn-primary text-[14px]">Go to homepage →</Link>
            <Link href="/services/" className="btn-secondary text-[14px]">Browse emergencies</Link>
            <Link href="/location/" className="btn-secondary text-[14px]">Browse Harlow areas</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
