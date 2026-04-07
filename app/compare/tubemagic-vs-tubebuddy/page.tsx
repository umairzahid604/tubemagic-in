import type { Metadata } from 'next';
import { Check, ArrowRight, Scale } from 'lucide-react';

const AFFILIATE_LINK = '/get-tubemagic';

export const metadata: Metadata = {
  title: 'TubeMagic vs TubeBuddy: Complete Comparison Guide (2026)',
  description:
    'TubeMagic vs TubeBuddy: full comparison of features, pricing, and use cases. Which tool is better for YouTube growth in 2026?',
};

const rows = [
  { feature: 'AI Script Writer', tm: 'Full retention-trained scripts', tb: 'Not available' },
  { feature: 'Video Idea Generator', tm: 'Outlier & trend-based AI', tb: 'Keyword research tool' },
  { feature: 'Thumbnail Generator', tm: 'AI-generated, CTR-optimized', tb: 'Template-based (manual)' },
  { feature: 'SEO Metadata', tm: 'Fully automated generation', tb: 'SEO suggestions & scoring' },
  { feature: 'Bulk Processing', tm: 'Multi-channel batch mode', tb: 'Limited bulk tools' },
  { feature: 'Language Support', tm: '95+ languages', tb: 'Primarily English' },
  { feature: 'Platform Model', tm: 'Web app (standalone)', tb: 'Browser extension + dashboard' },
  { feature: 'Pricing', tm: '$47/month (all-in-one)', tb: '$9–$49.99+/month' },
];

const tmPros = [
  'Full AI content creation (scripts, thumbnails, metadata)',
  'Platform-independent ,works across any browser/device',
  'Scales to 10–12 channels simultaneously',
  'Trained on viral retention data, not just SEO signals',
  'No browser extension dependency or permissions required',
];

const tbPros = [
  'Deep integration with YouTube Studio as a browser extension',
  'A/B testing for thumbnails and titles',
  'Large community and extensive tutorials',
  'Powerful for one-channel manual optimization',
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
            TubeMagic vs TubeBuddy
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.75)', maxWidth: '620px', margin: '0 auto 36px', lineHeight: 1.7 }}>
            TubeBuddy built its reputation on browser-based workflow tools. TubeMagic built its on AI generative automation. Here’s how they compare in 2026.
          </p>
          <a href={AFFILIATE_LINK}   className="btn-primary" style={{ padding: '16px 40px', fontSize: '1.05rem', background: 'var(--accent-orange)' }}>
            Try TubeMagic Free <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: 'var(--bg-primary)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card" style={{ padding: '32px', border: '2px solid rgba(204,0,0,0.2)' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--brand-red)', marginBottom: 16 }}>TubeMagic</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 20, fontSize: '0.95rem' }}>A fully automated AI platform covering the complete YouTube production cycle. Ideal for faceless channel operators, agencies, and any creator who prioritizes scale and speed.</p>
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
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: 16 }}>TubeBuddy</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 20, fontSize: '0.95rem' }}>A powerful browser extension and workflow optimization tool. TubeBuddy is best for creators who want to manually refine their YouTube Studio process rather than automate it.</p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {tbPros.map((p) => (
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

      <section style={{ padding: '80px 24px', background: 'var(--brand-red-dark)', color: 'var(--text-on-dark)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 40, textAlign: 'center' }}>Feature-by-Feature Breakdown</h2>
          <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
            {rows.map((row, i) => (
              <div key={row.feature} style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr 1.2fr', gap: 0, borderBottom: i < rows.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none', background: i % 2 === 0 ? 'rgba(255,255,255,0.03)' : 'transparent' }}>
                <div style={{ padding: '16px 20px', fontWeight: 600, fontSize: '0.9rem' }}>{row.feature}</div>
                <div style={{ padding: '16px 20px', fontSize: '0.88rem', color: 'rgba(255,200,100,0.9)', borderLeft: '1px solid rgba(255,255,255,0.07)' }}>{row.tm}</div>
                <div style={{ padding: '16px 20px', fontSize: '0.88rem', color: 'rgba(245,245,220,0.5)', borderLeft: '1px solid rgba(255,255,255,0.07)' }}>{row.tb}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: 'var(--bg-primary)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="glass-card" style={{ padding: '40px', border: '2px solid rgba(204,0,0,0.15)' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: 16 }}>The Verdict</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 16, fontSize: '1rem' }}>
              <strong>TubeBuddy is a refinement tool. TubeMagic is a creation engine.</strong> If you’re an established solo creator who wants to fine-tune your YouTube Studio workflow manually, TubeBuddy serves that well. But if you want AI to do the heavy lifting ,researching, writing, designing, and optimizing ,TubeMagic is the only choice.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 24, fontSize: '1rem' }}>
              For faceless channel operators or anyone managing multiple channels, TubeMagic’s batch processing and end-to-end automation makes TubeBuddy feel like a previous generation of tooling.
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


