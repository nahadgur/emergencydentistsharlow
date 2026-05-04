'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem { question: string; answer: string; }

interface Props {
  faqs: FAQItem[];
  title?: string;
  embedSchema?: boolean;
}

export function FAQ({ faqs, title = 'Frequently asked questions', embedSchema = true }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return (
    <section>
      {embedSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      )}
      <h2
        className="font-sans font-medium text-ink leading-[1.1] tracking-tightest mb-8"
        style={{ fontSize: 'clamp(26px, 3.4vw, 40px)' }}
      >
        {title}
      </h2>
      <div className="border-t border-sand">
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-sand">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 py-5 text-left text-[15px] lg:text-[16px] font-medium text-ink hover:text-brand-600 transition-colors"
            >
              <span>{faq.question}</span>
              <ChevronDown
                size={18}
                className={`text-sand-text flex-shrink-0 transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`}
              />
            </button>
            {openIndex === i && (
              <div className="pb-5 text-[14.5px] text-sand-body leading-[1.65] max-w-prose">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
