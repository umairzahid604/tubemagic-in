import type { Metadata } from 'next';
import { Check, Shield, ArrowRight, Zap, Star } from 'lucide-react';

const AFFILIATE_LINK = '/get-tubemagic';

export const metadata: Metadata = {
  title: 'TubeMagic Pricing 2026 | $47/Month All-In-One YouTube AI',
  description:
    'TubeMagic costs $47/month and includes the AI Script Writer, Video Idea Generator, Thumbnail Generator, Warp Upload Optimizer, and Video Research Tool. 30-day money-back guarantee.',
};

const features = [
  'AI Script Writer (Claude 4.0 + GPT-4o)',
  'Video Idea Generator with outlier detection',
  'AI Thumbnail Generator',
  'Warp Upload SEO Optimizer',
  'Video Research Tool',
  '95+ language support',
  'Multi-channel management (10–12 channels)',
  'Unlimited content generation',
  'Proprietary viral retention training data',
  '30-day money-back guarantee',
];

const faqs = [
  { q: 'Is there a free trial?', a: 'TubeMagic offers a 30-day money-back guarantee, so you can try the full platform risk-free and request a full refund if it’s not right for you.' },
  { q: 'Is the $47/month price for everything?', a: 'Yes. The single $47/month plan includes all five tools ,AI Script Writer, Video Idea Generator, Thumbnail Generator, Warp Upload, and Video Research ,with no feature gating.' },
  { q: 'Can I cancel anytime?', a: 'Yes. TubeMagic is a monthly subscription with no long-term contract. You can cancel anytime from your account dashboard.' },
  { q: 'Does TubeMagic support multiple channels?', a: 'Yes. TubeMagic is designed to manage 10–12 channels from a single dashboard, making it ideal for faceless channel operators and YouTube agencies.' },
];

export default function Page() {
  return (
    <>
      <section className="mesh-gradient-dark" style={{ padding: '96px 24px 80px', color: 'var(--text-on-dark)', textAlign: 'center' }}>
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="glow-tag" style={{ marginBottom: 20, color: 'rgba(255,245,235,0.9)', background: 'rgba(255,107,0,0.18)', border: '1px solid rgba(255,107,0,0.4)' }}>
            <Zap size={14} /> Pricing
          </div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.04em', marginBottom: 20 }}>
            One Plan. Everything Included.
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.75)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
            No tiers, no feature gating. $47/month gives you the full TubeMagic AI suite ,all five tools, unlimited use.
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: 'var(--bg-primary)' }}>
        <div className="max-w-2xl mx-auto">
          {/* Plan card */}
          <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', border: '2px solid rgba(204,0,0,0.3)', boxShadow: '0 8px 40px rgba(204,0,0,0.12)' }}>
            {/* Card header */}
            <div style={{ background: 'var(--brand-red-dark)', padding: '32px', textAlign: 'center', color: 'var(--text-on-dark)', position: 'relative' }}>
              <div style={{ display: 'inline-block', padding: '4px 14px', background: 'var(--accent-orange)', borderRadius: 20, fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 16 }}>Most Popular</div>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: 12 }}>TubeMagic Pro</h2>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', gap: 4, marginBottom: 8 }}>
                <span style={{ fontSize: '1.2rem', fontWeight: 700, marginTop: 10 }}>$</span>
                <span style={{ fontSize: '4rem', fontWeight: 900, lineHeight: 1 }}>47</span>
                <span style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)', marginTop: 'auto', marginBottom: 8 }}>/month</span>
              </div>
              <div style={{ display: 'flex', gap: 4, justifyContent: 'center', marginBottom: 8 }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#FACC15" color="#FACC15" />)}
              </div>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem' }}>Rated 4.8/5 by YouTube creators</p>
            </div>
            {/* Features list */}
            <div style={{ background: 'white', padding: '32px' }}>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
                {features.map((f) => (
                  <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(204,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Check size={13} color="var(--brand-red)" strokeWidth={2.5} />
                    </div>
                    <span style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{f}</span>
                  </li>
                ))}
              </ul>
              <a href={AFFILIATE_LINK}   className="btn-primary" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8, padding: '16px', marginTop: 28, width: '100%', fontSize: '1.05rem' }}>
                Get TubeMagic ,$47/month <ArrowRight size={18} />
              </a>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 16 }}>
                <Shield size={15} color="var(--text-muted)" />
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0 }}>30-day money-back guarantee. Cancel anytime.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value comparison */}
      <section style={{ padding: '80px 24px', background: 'var(--brand-red-dark)', color: 'var(--text-on-dark)', textAlign: 'center' }}>
        <div className="max-w-4xl mx-auto">
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 16 }}>What You’d Pay for the Same Tools Separately</h2>
          <p style={{ color: 'rgba(245,245,220,0.7)', marginBottom: 36 }}>TubeMagic consolidates tools that would cost $150+/month across separate subscriptions.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16 }}>
            {[['AI Script Tool', '$30/mo'], ['Idea Generator', '$25/mo'], ['Thumbnail Tool', '$20/mo'], ['SEO Tool', '$25/mo'], ['Research Tool', '$20/mo']].map(([tool, price]) => (
              <div key={tool} style={{ padding: '20px', borderRadius: 'var(--radius-lg)', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <p style={{ fontSize: '0.88rem', color: 'rgba(245,245,220,0.6)', margin: '0 0 6px' }}>{tool}</p>
                <p style={{ fontSize: '1.3rem', fontWeight: 700, color: 'rgba(245,245,220,0.4)', textDecoration: 'line-through', margin: 0 }}>{price}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 24, padding: '16px 32px', borderRadius: 12, background: 'rgba(255,107,0,0.2)', border: '1px solid rgba(255,107,0,0.4)', display: 'inline-block' }}>
            <span style={{ fontSize: '1.1rem', fontWeight: 700 }}>All 5 tools with TubeMagic: </span>
            <span style={{ fontSize: '1.3rem', fontWeight: 900, color: 'var(--accent-orange)' }}>$47/month</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '80px 24px', background: 'var(--bg-primary)' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 40 }}>Pricing FAQ</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {faqs.map(({ q, a }) => (
              <div key={q} className="glass-card" style={{ padding: '24px 28px' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 10 }}>{q}</h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>{a}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 36 }}>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: 8 }}>* This page contains affiliate links. Full disclosure in <a href="/privacy" style={{ color: 'var(--brand-red)' }}>Privacy Policy</a>.</p>
          </div>
        </div>
      </section>
    </>
  );
}


