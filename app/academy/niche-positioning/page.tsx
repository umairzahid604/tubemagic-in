import type { Metadata } from 'next';
import { Target, ArrowRight, TrendingUp, DollarSign } from 'lucide-react';

const AFFILIATE_LINK = '/get-tubemagic';

export const metadata: Metadata = {
  title: 'YouTube Niche Positioning Guide 2026 | High-CPM Niches & Strategy',
  description:
    'How to find profitable YouTube niches with high CPM rates. Includes niche validation checklist, CPM benchmarks, and positioning frameworks.',
};

const niches = [
  { name: 'Personal Finance', cpm: '$18–$38', topics: 'Investing, budgeting, FIRE, debt payoff', saturation: 'Medium' },
  { name: 'Real Estate', cpm: '$20–$40', topics: 'REITs, rental property, house hacking', saturation: 'Low' },
  { name: 'AI & Technology', cpm: '$15–$35', topics: 'AI tools, software reviews, automation', saturation: 'Low-Medium' },
  { name: 'Business & Entrepreneurship', cpm: '$14–$30', topics: 'SaaS, agencies, online business, freelancing', saturation: 'Medium' },
  { name: 'Health & Supplements', cpm: '$12–$28', topics: 'Weight loss, longevity, biohacking', saturation: 'Medium-High' },
  { name: 'Software Tutorials', cpm: '$10–$25', topics: 'SaaS walkthroughs, productivity tools', saturation: 'Low' },
  { name: 'Self Improvement', cpm: '$10–$22', topics: 'Habits, mindset, productivity', saturation: 'High' },
  { name: 'Crypto / DeFi', cpm: '$15–$45', topics: 'Bitcoin, altcoins, DeFi protocols', saturation: 'Medium' },
];

const checklist = [
  'CPM above $10 (use Google Ads Keyword Planner to check CPC)',
  'At least 3-5 outlier videos with 10x+ views vs. channel average',
  'Evergreen topics that don’t expire after 30 days',
  'Affiliate or digital product monetization pathway available',
  'First-page YouTube search results have <500k views on top 3 videos',
  'Niche has strong search intent (people actively looking for info)',
];

const tactics = [
  { title: 'Be Niche-Specific, Not Broad', desc: 'Instead of “personal finance”, target “Roth IRA for beginners in their 30s”. Narrow positioning = faster growth and better CPM.' },
  { title: 'Find the Outlier Videos', desc: 'Use TubeMagic’s Video Research Tool to find videos that dramatically outperformed their channel’s average. These outliers reveal formats the algorithm loves.' },
  { title: 'Study Monetization Paths', desc: 'Map out your ad revenue + affiliate revenue before creating content. High-CPM niches often have SaaS products, courses, or financial tools paying 30–50% affiliate commissions.' },
  { title: 'Test with 10 Videos', desc: 'Commit to 10 videos before judging. Analyze which topics got the best CTR (5%+ is your target) and highest Average View Duration (50%+ is strong).' },
];

export default function Page() {
  return (
    <>
      <section className="mesh-gradient-dark" style={{ padding: '96px 24px 80px', color: 'var(--text-on-dark)', textAlign: 'center' }}>
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="glow-tag" style={{ marginBottom: 20, color: 'rgba(255,245,235,0.9)', background: 'rgba(255,107,0,0.18)', border: '1px solid rgba(255,107,0,0.4)' }}>
            <Target size={14} /> Academy Guide
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.04em', marginBottom: 20 }}>
            YouTube Niche Positioning
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.75)', maxWidth: '620px', margin: '0 auto 36px', lineHeight: 1.7 }}>
            Picking the right niche is the most important decision you’ll make. This guide shows you how to identify profitable, sustainable niches with high RPM.
          </p>
          <a href={AFFILIATE_LINK}   className="btn-primary" style={{ padding: '16px 40px', background: 'var(--accent-orange)' }}>
            Research Niches with TubeMagic <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: 'var(--bg-primary)' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title" style={{ marginBottom: 12 }}>High-CPM Niche Benchmarks</h2>
          <p className="section-subtitle" style={{ marginBottom: 40 }}>These categories consistently generate the highest ad revenue per thousand views in 2026.</p>
          <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid rgba(204,0,0,0.12)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr 1.6fr 0.8fr', background: 'rgba(204,0,0,0.06)', fontWeight: 700, fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-primary)' }}>
              {['Niche', 'Avg CPM', 'Best Topics', 'Saturation'].map(h => <div key={h} style={{ padding: '12px 20px' }}>{h}</div>)}
            </div>
            {niches.map((n, i) => (
              <div key={n.name} style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr 1.6fr 0.8fr', borderTop: '1px solid rgba(204,0,0,0.08)', background: i % 2 === 0 ? 'rgba(204,0,0,0.02)' : 'transparent' }}>
                <div style={{ padding: '14px 20px', fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)' }}>{n.name}</div>
                <div style={{ padding: '14px 20px', fontSize: '0.9rem', fontWeight: 700, color: 'var(--brand-red)' }}>{n.cpm}</div>
                <div style={{ padding: '14px 20px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>{n.topics}</div>
                <div style={{ padding: '14px 20px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>{n.saturation}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: 'var(--brand-red-dark)', color: 'var(--text-on-dark)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 12, textAlign: 'center' }}>Niche Validation Checklist</h2>
          <p style={{ color: 'rgba(245,245,220,0.7)', textAlign: 'center', marginBottom: 36 }}>Before publishing your first video, verify all 6 criteria.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 600, margin: '0 auto' }}>
            {checklist.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'var(--accent-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1, fontSize: '0.75rem', fontWeight: 700 }}>{i + 1}</div>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.6, margin: 0, color: 'rgba(245,245,220,0.85)' }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: 'var(--bg-primary)' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title" style={{ marginBottom: 12 }}>Positioning Tactics</h2>
          <p className="section-subtitle" style={{ marginBottom: 40 }}>Once you’ve validated a niche, these tactics accelerate growth.</p>
          <div className="bento-grid">
            {tactics.map(({ title, desc }) => (
              <div key={title} className="glass-card" style={{ padding: '28px' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 10 }}>{title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: 'var(--brand-red-dark)', color: 'var(--text-on-dark)', textAlign: 'center' }}>
        <div className="max-w-3xl mx-auto">
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 16 }}>Research Any Niche in Seconds</h2>
          <p style={{ color: 'rgba(245,245,220,0.75)', lineHeight: 1.75, marginBottom: 32 }}>TubeMagic’s Video Research Tool lets you filter YouTube by niche, view count, and upload date to spot untapped opportunities instantly.</p>
          <a href={AFFILIATE_LINK}   className="btn-primary" style={{ padding: '16px 40px', background: 'var(--accent-orange)' }}>
            Try TubeMagic Free <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </>
  );
}

