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
      <h2 className="font-display text-[26px] lg:text-[32px] text-ink leading-tight mb-6">
        {title}
      </h2>
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-cream border border-ink/10 rounded-lg overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-5 lg:px-6 py-4 text-left text-[15px] font-semibold text-ink hover:bg-ink/[0.02] transition-colors"
            >
              <span>{faq.question}</span>
              <ChevronDown
                size={18}
                className={`text-ink/40 flex-shrink-0 transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`}
              />
            </button>
            {openIndex === i && (
              <div className="px-5 lg:px-6 pb-5 pt-3 text-[14.5px] text-ink/75 leading-relaxed border-t border-ink/8">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
