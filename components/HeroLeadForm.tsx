'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { services } from '@/data/services';

interface Props { area?: string; service?: string; }

// Lead destination — Google Apps Script web app for the Harlow site.
// Each row appended to the linked sheet; redeploy the script as a NEW
// version on every edit (Manage Deployments -> pencil -> New version).
const GAS_URL = 'https://script.google.com/macros/s/AKfycbzSzDG6yve8u5hrjLqOMQkm-D3a1t7YGvs5g0siH3eTmdyyTvn5J0Ov6NVuS2AojluNeA/exec';

export function HeroLeadForm({ area, service }: Props) {
  const [submitting, setSubmitting] = useState(false);
  const [done,       setDone]       = useState(false);
  const [error,      setError]      = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  function fieldIdForError(msg: string): string | null {
    const m = msg.toLowerCase();
    if (m.includes('name')) return 'hlf-name';
    if (m.includes('email')) return 'hlf-email';
    if (m.includes('phone')) return 'hlf-phone';
    if (m.includes('service') || m.includes('emergency')) return 'hlf-svc';
    if (m.includes('area') || m.includes('where')) return 'hlf-area';
    if (m.includes('message') || m.includes('notes')) return 'hlf-msg';
    return null;
  }

  function pulseField(el: HTMLElement | null) {
    if (!el) return;
    el.classList.remove('field-pulse');
    void el.offsetWidth;
    el.classList.add('field-pulse');
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setTimeout(() => el.focus({ preventScroll: true }), 200);
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();

    const form = formRef.current!;
    setError('');

    if (!form.checkValidity()) {
      const firstInvalid = form.querySelector(':invalid') as HTMLElement | null;
      pulseField(firstInvalid);
      const labelText =
        firstInvalid && (firstInvalid as HTMLInputElement).labels?.[0]?.textContent?.replace(/\*$/, '').trim();
      setError(labelText ? `Please complete: ${labelText}` : 'Please fill in the highlighted field.');
      return;
    }

    setSubmitting(true);

    const payload = {
      name:    (form.querySelector('#hlf-name')    as HTMLInputElement).value.trim(),
      email:   (form.querySelector('#hlf-email')   as HTMLInputElement).value.trim(),
      phone:   (form.querySelector('#hlf-phone')   as HTMLInputElement).value.trim(),
      service: (form.querySelector('#hlf-svc')     as HTMLSelectElement).value,
      area:    (form.querySelector('#hlf-area')    as HTMLInputElement)?.value?.trim() ?? area ?? '',
      message: (form.querySelector('#hlf-msg')     as HTMLTextAreaElement).value.trim(),
      page:    typeof window !== 'undefined' ? window.location.pathname : '',
      source:  'hero-form',
    };

    try {
      if (GAS_URL) {
        const res = await fetch(GAS_URL, {
          method: 'POST',
          body: new URLSearchParams(payload as Record<string, string>),
        });
        const json = await res.json().catch(() => ({ ok: false, error: 'Bad response' }));
        if (!json.ok) throw new Error(json.error || `HTTP ${res.status}`);
      } else {
        // eslint-disable-next-line no-console
        console.warn('GAS_URL not configured — payload:', payload);
      }
      setDone(true);
    } catch (err) {
      console.error('Lead submission failed:', err);
      const msg = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      setError(msg);
      const fieldId = fieldIdForError(msg);
      if (fieldId) pulseField(form.querySelector(`#${fieldId}`) as HTMLElement | null);
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div className="bg-cream border border-ink/10 rounded-xl p-6 text-center">
        <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center mx-auto mb-3">
          <CheckCircle size={18} className="text-brand-600" />
        </div>
        <p className="font-display text-[20px] text-ink mb-1">Request received</p>
        <p className="text-[13px] text-ink/65 leading-relaxed">
          We will match you with a vetted Harlow emergency dentist within the hour during opening hours, first thing tomorrow morning otherwise.
        </p>
      </div>
    );
  }

  const fieldClass =
    'w-full px-3.5 py-2.5 text-base font-sans bg-cream border border-ink/15 rounded-md text-ink placeholder-ink/40 focus:outline-none focus:border-brand-500 focus:bg-white transition-colors';
  const labelClass = 'block text-[10px] font-mono uppercase tracking-[0.15em] text-ink/55 mb-1.5';

  return (
    <div className="bg-white border border-ink/10 rounded-xl p-5 lg:p-6 shadow-[0_8px_32px_-12px_rgba(15,23,42,0.18)]">
      <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-600 mb-2">
        Free matching · GDC-verified
      </p>
      <p className="font-display text-[22px] text-ink leading-tight mb-1">
        {area ? `Get matched in ${area}` : 'Get matched in Harlow'}
      </p>
      <p className="text-[12px] text-ink/60 mb-5 leading-relaxed">
        Matched within 60 minutes during opening hours. First thing the next morning otherwise.
      </p>

      <form ref={formRef} onSubmit={submit} className="flex flex-col gap-3">
        <div>
          <label htmlFor="hlf-name" className={labelClass}>Your name *</label>
          <input id="hlf-name" type="text" required className={fieldClass} placeholder="e.g. Sarah Johnson" autoComplete="name" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="hlf-phone" className={labelClass}>Phone *</label>
            <input id="hlf-phone" type="tel" required className={fieldClass} placeholder="07700 900000" autoComplete="tel" inputMode="tel" />
          </div>
          <div>
            <label htmlFor="hlf-email" className={labelClass}>Email *</label>
            <input id="hlf-email" type="email" required className={fieldClass} placeholder="you@example.com" autoComplete="email" />
          </div>
        </div>

        <div>
          <label htmlFor="hlf-svc" className={labelClass}>What's the emergency? *</label>
          <select id="hlf-svc" required className={`${fieldClass} appearance-none cursor-pointer`} defaultValue={service ?? ''}>
            <option value="" disabled>Select the closest match...</option>
            {services.map(s => (
              <option key={s.slug} value={s.shortLabel}>{s.shortLabel}</option>
            ))}
            <option value="Other / not sure">Other / not sure</option>
          </select>
        </div>

        {!area && (
          <div>
            <label htmlFor="hlf-area" className={labelClass}>Where in Harlow? *</label>
            <input id="hlf-area" type="text" required className={fieldClass} placeholder="e.g. Old Harlow, Church Langley" />
          </div>
        )}

        <div>
          <label htmlFor="hlf-msg" className={labelClass}>
            Anything else? <span className="text-ink/40 normal-case tracking-normal">(optional)</span>
          </label>
          <textarea id="hlf-msg" rows={2} className={`${fieldClass} resize-none`} placeholder="e.g. tooth knocked out 30 mins ago, stored in milk" />
        </div>

        <label htmlFor="hlf-consent" className="flex items-start gap-2 text-[11px] text-ink/65 leading-relaxed cursor-pointer mt-1">
          <input id="hlf-consent" type="checkbox" required className="mt-0.5 accent-brand-600" />
          <span>
            I consent to my details being shared with up to three vetted Harlow dentists in our network. See our{' '}
            <Link href="/privacy/" className="underline hover:text-ink">privacy notice</Link>.
          </span>
        </label>

        {error && (
          <p className="text-[12px] text-urgent-600">{error}</p>
        )}

        <button type="submit" disabled={submitting} className="btn-primary w-full justify-center mt-1">
          {submitting ? 'Sending…' : 'Match me with a dentist'}
        </button>

        <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-ink/40 text-center">
          Free · GDC verified · No spam
        </p>
      </form>
    </div>
  );
}
