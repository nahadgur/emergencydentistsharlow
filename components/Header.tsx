'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface Props { onOpenModal?: () => void; }

const navLinks = [
  { href: '/services/', label: 'Emergencies' },
  { href: '/location/', label: 'Areas' },
  { href: '/blog/',     label: 'Guides' },
  { href: '/about/',    label: 'About' },
];

// 2026-05-05 redesign — TopBar pattern from the Claude Design handoff:
// small italic-serif logomark square + wordmark stack with uppercase
// "HARLOW" sub-label. Mobile menu toggle is a thin hamburger inside a
// 36px sand-bordered square.
export function Header({ onOpenModal }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-cream/95 backdrop-blur border-b border-sand-soft">
      <nav className="container-width flex items-center justify-between py-3.5" aria-label="Site navigation">
        <Link href="/" className="flex items-center gap-2.5">
          <span
            className="grid place-items-center text-cream font-display italic"
            aria-hidden="true"
            style={{ width: 26, height: 26, background: '#0f1f1c', fontSize: 18, lineHeight: 1 }}
          >
            e
          </span>
          <span className="flex flex-col leading-[1.1]">
            <span className="text-[13px] font-semibold text-ink tracking-[-0.01em]">
              Emergency Dentists
            </span>
            <span className="font-mono text-[10px] text-sand-deep uppercase tracking-[0.12em]">
              Harlow
            </span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-7 text-[14px] text-ink/75">
          {navLinks.map(l => (
            <Link key={l.href} href={l.href} className="hover:text-brand-500 transition-colors">
              {l.label}
            </Link>
          ))}
          {onOpenModal && (
            <button onClick={onOpenModal} className="btn-primary text-[13px]">
              Find a dentist
            </button>
          )}
        </div>

        <button
          className="md:hidden grid place-items-center"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          style={{ width: 36, height: 36, border: '1px solid #d9d3c5', background: 'transparent' }}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-sand-soft bg-cream">
          <div className="container-width py-4 flex flex-col gap-2">
            {navLinks.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="py-2 text-[15px] text-ink/85 hover:text-brand-500"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            {onOpenModal && (
              <button
                onClick={() => { setOpen(false); onOpenModal(); }}
                className="btn-primary text-[14px] mt-2 self-start"
              >
                Find a dentist
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
