import type { Metadata } from 'next';
import { Check, X, ArrowRight, Scale } from 'lucide-react';

const AFFILIATE_LINK = '/get-tubemagic';

export const metadata: Metadata = {
  title: 'TubeMagic vs VidIQ: In-Depth Comparison Guide (2026)',
  description:
    'TubeMagic vs VidIQ: full feature comparison, pricing breakdown, and honest verdict. See why creators making the switch to AI-first content automation.',
};

const rows = [
  { feature: 'AI Script Writer', tm: 'Retention-trained, Claude 4.0 + GPT-4o', vi: 'Not available' },
  { feature: 'Video Idea Generator', tm: 'Outlier detection + niche analysis', vi: 'Keyword research based' },
  { feature: 'Thumbnail Generator', tm: 'AI-generated visuals, CTR-focused', vi: 'Not available' },
  { feature: 'SEO Metadata', tm: 'Full titles, tags, descriptions, timestamps', vi: 'Tag & title suggestions' },
  { feature: 'Competitor Research', tm: 'Channel-level benchmarking & gaps', vi: 'Historical channel analytics' },
  { feature: 'Language Support', tm: '95+ languages', vi: 'English + limited languages' },
  { feature: 'Retention Training', tm: 'Proprietary viral data', vi: 'None' },
  { feature: 'Pricing', tm: '$47/month (all-in-one)', vi: '$7.50–$79/month (limited tiers)' },
];

const tmPros = [
  'End-to-end AI workflow from idea to upload',
  'Only tool with retention-trained script AI',
  'Thumbnail generator eliminates design bottleneck',
  'Flat pricing ,unlimited use at one price',
  '95+ language support for global creators',
  '30-day money-back guarantee',
];

const viPros = [
  'Strong historical search data and trends',
  'Deep YouTube analytics integration',
  'Free tier available with basic features',
  'Well-established with large user community',
];

export default function Page() {
  return (
    <>
      <section className="mesh-gradient-dark" style={{ padding: '96px 24px 80px', color: 'var(--text-on-dark)', textAlign: 'center' }}>
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="glow-tag" style={{ marginBottom: 20, color: 'rgba(255,245,235,0.9)', background: 'rgba(255,107,0,0.18)', border: '1px solid rgba(255,107,0,0.4)' }}>
            <Scale size={14} /> Comparison
          </div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.04em', marginBottom: 20 }}>
            TubeMagic vs VidIQ
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.75)', maxWidth: '620px', margin: '0 auto 36px', lineHeight: 1.7 }}>
            Both tools claim to grow your YouTube channel ,but they take fundamentally different approaches. Here’s the honest breakdown for 2026.
          </p>
          <a href={AFFILIATE_LINK}   className="btn-primary" style={{ padding: '16px 40px', fontSize: '1.05rem', background: 'var(--accent-orange)' }}>
            Try TubeMagic Free <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Core difference */}
      <section style={{ padding: '80px 24px', background: 'var(--bg-primary)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card" style={{ padding: '32px', border: '2px solid rgba(204,0,0,0.2)' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--brand-red)', marginBottom: 16 }}>TubeMagic</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 20, fontSize: '0.95rem' }}>
                An AI-first, end-to-end automation platform. TubeMagic handles the full creator workflow ,idea discovery, script writing, thumbnail creation, and SEO metadata ,with AI trained specifically on viral retention data.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {tmPros.map((p) => (
                  <li key={p} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <Check size={16} color="var(--brand-red)" strokeWidth={2.5} style={{ marginTop: 2, flexShrink: 0 }} />
                    <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card" style={{ padding: '32px' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: 16 }}>VidIQ</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 20, fontSize: '0.95rem' }}>
                A mature YouTube analytics and SEO tool. VidIQ is strongest for researching historical trends and optimizing existing metadata, but lacks AI content creation capabilities.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {viPros.map((p) => (
                  <li key={p} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <Check size={16} color="var(--text-muted)" strokeWidth={2.5} style={{ marginTop: 2, flexShrink: 0 }} />
                    <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section style={{ padding: '80px 24px', background: 'var(--brand-red-dark)', color: 'var(--text-on-dark)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 40, textAlign: 'center' }}>Feature-by-Feature Breakdown</h2>
          <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
            {rows.map((row, i) => (
              <div key={row.feature} style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr 1.2fr', gap: 0, borderBottom: i < rows.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none', background: i % 2 === 0 ? 'rgba(255,255,255,0.03)' : 'transparent' }}>
                <div style={{ padding: '16px 20px', fontWeight: 600, fontSize: '0.9rem' }}>{row.feature}</div>
                <div style={{ padding: '16px 20px', fontSize: '0.88rem', color: 'rgba(255,200,100,0.9)', borderLeft: '1px solid rgba(255,255,255,0.07)' }}>{row.tm}</div>
                <div style={{ padding: '16px 20px', fontSize: '0.88rem', color: 'rgba(245,245,220,0.5)', borderLeft: '1px solid rgba(255,255,255,0.07)' }}>{row.vi}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verdict */}
      <section style={{ padding: '80px 24px', background: 'var(--bg-primary)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="glass-card" style={{ padding: '40px', border: '2px solid rgba(204,0,0,0.15)' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: 16 }}>The Verdict</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 16, fontSize: '1rem' }}>
              <strong>VidIQ is a data tool. TubeMagic is a production platform.</strong> If you only need analytics and keyword research, VidIQ does the job. But if you want to automate your entire content workflow ,from idea to published video ,TubeMagic has no real competition.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 24, fontSize: '1rem' }}>
              The AI Script Writer alone ,trained on viral retention data with Claude 4.0 and GPT-4o ,is a capability VidIQ simply doesn’t offer. For creators focused on scaling output and maximizing watch time, TubeMagic is the clear winner.
            </p>
            <a href={AFFILIATE_LINK}   className="btn-primary" style={{ padding: '14px 36px' }}>
              Try TubeMagic Free ,30-Day Guarantee <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}


