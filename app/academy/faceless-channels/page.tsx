import type { Metadata } from 'next';
import { Play, Check, ArrowRight, DollarSign, Layers, Cpu } from 'lucide-react';

const AFFILIATE_LINK = '/get-tubemagic';

export const metadata: Metadata = {
  title: 'How to Start a Faceless YouTube Channel in 2026 | Full Guide',
  description:
    'Complete guide to starting a faceless YouTube channel using AI automation. Niche selection, content strategy, tools, and scaling to 10+ channels.',
};

const steps = [
  { number: '01', title: 'Pick a High-CPM Niche', desc: 'Finance, AI, software, self-improvement, and real estate consistently generate $15–$40 CPM. Avoid saturated entertainment niches with $1–3 CPM. Use TubeMagic’s Video Research Tool to validate demand before committing.' },
  { number: '02', title: 'Set Up Your Channel Foundation', desc: 'Create a brand with a non-revealing name, logo, and professional channel art. Use keywords in your channel name and description. Your “About” section is indexed by YouTube’s search algorithm.' },
  { number: '03', title: 'Build an AI Content Pipeline', desc: 'Use TubeMagic to generate ideas, write retention-optimized scripts, create thumbnails, and auto-fill metadata. A single creator can produce 3–5 videos per week with this workflow.' },
  { number: '04', title: 'Publish Your First 20 Videos', desc: 'The first 20 videos are your A/B test. Vary thumbnails, hooks, and topics. Analyze click-through rate (target 5–7%) and average view duration (target 50%+). Double down on what works.' },
  { number: '05', title: 'Monetize Before 1,000 Subscribers', desc: 'Join the YouTube Partner Program at 1,000 subs + 4,000 hours, but layer in affiliate links from day one. TubeMagic’s high-CPM niches unlock stronger AdSense revenue once monetized.' },
  { number: '06', title: 'Scale to Multiple Channels', desc: 'Once one channel is profitable, replicate the system. TubeMagic supports managing 10–12 channels from one dashboard with batch processing and saved personas.' },
];

const niches = [
  { name: 'Personal Finance', cpm: '$18–$38', competition: 'Medium', verdict: 'Strong' },
  { name: 'AI & Technology', cpm: '$15–$35', competition: 'Low–Medium', verdict: 'Strong' },
  { name: 'Real Estate Investing', cpm: '$20–$40', competition: 'Low', verdict: 'Very Strong' },
  { name: 'Business & Entrepreneurship', cpm: '$14–$30', competition: 'Medium', verdict: 'Strong' },
  { name: 'Self Improvement', cpm: '$12–$25', competition: 'High', verdict: 'Good' },
  { name: 'Health & Fitness', cpm: '$10–$22', competition: 'High', verdict: 'Good' },
  { name: 'Gaming', cpm: '$2–$6', competition: 'Very High', verdict: 'Avoid' },
  { name: 'Entertainment/Memes', cpm: '$1–$3', competition: 'Very High', verdict: 'Avoid' },
];

export default function Page() {
  return (
    <>
      <section className="mesh-gradient-dark" style={{ padding: '96px 24px 80px', color: 'var(--text-on-dark)', textAlign: 'center' }}>
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="glow-tag" style={{ marginBottom: 20, color: 'rgba(255,245,235,0.9)', background: 'rgba(255,107,0,0.18)', border: '1px solid rgba(255,107,0,0.4)' }}>
            <Play size={14} /> Academy Guide
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.04em', marginBottom: 20 }}>
            Faceless YouTube Channels
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.75)', maxWidth: '640px', margin: '0 auto 36px', lineHeight: 1.7 }}>
            Build a profitable YouTube channel without ever showing your face. Here’s the complete step-by-step framework, optimized for AI production.
          </p>
          <a href={AFFILIATE_LINK}   className="btn-primary" style={{ padding: '16px 40px', fontSize: '1.05rem', background: 'var(--accent-orange)' }}>
            Start Building with TubeMagic <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: 'var(--bg-primary)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title" style={{ marginBottom: 12 }}>The 6-Step Framework</h2>
          <p className="section-subtitle" style={{ marginBottom: 48 }}>Follow these steps in order. Skipping steps leads to the most common failures.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {steps.map((s) => (
              <div key={s.number} className="glass-card" style={{ padding: '28px 32px', display: 'flex', gap: 24, alignItems: 'flex-start' }}>
                <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--brand-red)', opacity: 0.25, lineHeight: 1, flexShrink: 0, minWidth: 40 }}>{s.number}</div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 8 }}>{s.title}</h3>
                  <p style={{ fontSize: '0.93rem', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: 'var(--brand-red-dark)', color: 'var(--text-on-dark)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 12, textAlign: 'center' }}>Niche CPM Comparison</h2>
          <p style={{ color: 'rgba(245,245,220,0.7)', textAlign: 'center', marginBottom: 36 }}>Revenue per thousand views by category ,pick your niche intentionally.</p>
          <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', background: 'rgba(255,255,255,0.05)', fontWeight: 700, fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {['Niche', 'Avg CPM', 'Competition', 'Verdict'].map(h => <div key={h} style={{ padding: '12px 20px' }}>{h}</div>)}
            </div>
            {niches.map((n, i) => (
              <div key={n.name} style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', borderTop: '1px solid rgba(255,255,255,0.07)', background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                <div style={{ padding: '14px 20px', fontWeight: 600, fontSize: '0.9rem' }}>{n.name}</div>
                <div style={{ padding: '14px 20px', fontSize: '0.9rem', color: 'rgba(255,200,100,0.9)' }}>{n.cpm}</div>
                <div style={{ padding: '14px 20px', fontSize: '0.9rem', color: 'rgba(245,245,220,0.65)' }}>{n.competition}</div>
                <div style={{ padding: '14px 20px', fontSize: '0.88rem', fontWeight: 600, color: n.verdict.includes('Avoid') ? 'rgba(255,100,100,0.8)' : 'rgba(100,255,150,0.8)' }}>{n.verdict}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: 'var(--bg-primary)', textAlign: 'center' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title" style={{ marginBottom: 16 }}>Let TubeMagic Run the Workflow</h2>
          <p className="section-subtitle" style={{ marginBottom: 32 }}>Ideas, scripts, thumbnails, and metadata ,all AI-generated. You provide the niche direction, TubeMagic does the production.</p>
          <a href={AFFILIATE_LINK}   className="btn-primary" style={{ padding: '16px 40px' }}>
            Try TubeMagic Free ,30-Day Guarantee <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </>
  );
}


