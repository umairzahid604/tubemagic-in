'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {items.map((item, i) => (
        <div
          key={i}
          className="faq-item"
          style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid rgba(204,0,0,0.12)', background: 'white' }}
        >
          <button
            className="faq-question"
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '20px 24px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
              gap: 12,
            }}
          >
            <span style={{ fontWeight: 600, fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.4 }}>{item.q}</span>
            <ChevronDown
              size={20}
              color="var(--brand-red)"
              style={{ transition: 'transform 0.25s', transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)', flexShrink: 0 }}
            />
          </button>
          {open === i && (
            <div className="faq-answer" style={{ padding: '0 24px 20px' }}>
              <p style={{ fontSize: '0.93rem', color: 'var(--text-secondary)', lineHeight: 1.75, margin: 0 }}>{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
