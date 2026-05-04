import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface Item { label: string; href?: string; }

export function Breadcrumbs({ items, dark = false }: { items: Item[]; dark?: boolean }) {
  const baseColor = dark ? 'text-white/60 hover:text-white' : 'text-ink/60 hover:text-ink';
  const sepColor = dark ? 'text-white/30' : 'text-ink/30';

  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[12px] font-mono uppercase tracking-[0.15em]">
      <Link href="/" className={baseColor}>Home</Link>
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-1.5">
          <ChevronRight size={11} className={sepColor} />
          {item.href ? (
            <Link href={item.href} className={baseColor}>{item.label}</Link>
          ) : (
            <span className={dark ? 'text-white/85' : 'text-ink/85'}>{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
