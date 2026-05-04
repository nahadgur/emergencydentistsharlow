'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  /** Tailwind/inline tag passed through. */
  className?: string;
  /** Delay in ms before the reveal starts after intersection. */
  delay?: number;
  /** Reveal direction. Default 'up'. */
  direction?: 'up' | 'left' | 'right' | 'fade';
  /** Render as this element. Default 'div'. */
  as?: 'div' | 'section' | 'article' | 'header' | 'footer';
}

/**
 * Lightweight scroll-reveal wrapper. Uses IntersectionObserver to add
 * the `is-visible` class once the element enters the viewport, which
 * triggers the CSS animation declared in globals.css. Cheap, no
 * library, respects `prefers-reduced-motion` (the CSS animation is
 * disabled there).
 *
 * Usage:
 *   <Reveal delay={120}>...</Reveal>
 *   <Reveal direction="left" as="section">...</Reveal>
 */
export function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  as = 'div',
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Honour reduced motion: skip the observer dance and just show.
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            // Schedule the visible flip on the next tick so the start
            // styles paint before the transition target classes apply.
            const t = setTimeout(() => setVisible(true), delay);
            obs.disconnect();
            return () => clearTimeout(t);
          }
        }
      },
      // 12% of the element visible is enough to trigger.
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  const Tag = as;

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={`reveal reveal-${direction} ${visible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </Tag>
  );
}
