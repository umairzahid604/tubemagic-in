import type { Metadata } from 'next';
import { Palette, MousePointerClick, Layers, Wand2, Image, TrendingUp, Check, ArrowRight } from 'lucide-react';

const AFFILIATE_LINK = '/get-tubemagic';

export const metadata: Metadata = {
  title: 'AI Thumbnail Generator for YouTube | TubeMagic',
  description: "Create scroll-stopping YouTube thumbnails with AI. TubeMagic's thumbnail generator is engineered for maximum click-through rate.",
};

const thumbFeatures = [
  { icon: MousePointerClick, title: 'CTR-Engineered Design', desc: 'Thumbnails are designed around a single principle: getting the click. Color psychology, contrast ratios, and focal point placement are all optimized for scroll-stopping impact.' },
  { icon: Wand2, title: 'AI Visual Generation', desc: 'Describe your video concept and the AI generates custom imagery ,no stock photos, no Photoshop required. Every thumbnail is unique to your brand.' },
  { icon: Layers, title: 'Text Overlay Optimization', desc: 'Auto-suggests power words, font sizing, and text positioning that complement the image rather than compete with it. Readable at thumbnail size on any device.' },
  { icon: TrendingUp, title: 'Competitor Benchmark Analysis', desc: 'Analyzes top-performing thumbnails in your niche. Identifies patterns ,expressions, color schemes, composition ,that consistently drive high CTR for videos like yours.' },
  { icon: Image, title: 'Multiple Style Variants', desc: 'Generate 3–5 distinct thumbnail concepts per video. A/B test different approaches ,curiosity gaps, bold text, emotion shots ,to optimize over time.' },
  { icon: Palette, title: 'Brand Consistency', desc: 'Apply your channel colors, fonts, and style guide across all thumbnail generations. Build a recognizable visual identity that viewers associate with quality.' },
];

export default function Page() {
  return (
    <>
      <section className="mesh-gradient-dark" style={{ padding: '96px 24px 80px', color: 'var(--text-on-dark)', textAlign: 'center' }}>
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="glow-tag" style={{ marginBottom: 20, color: 'rgba(255,245,235,0.9)', background: 'rgba(255,107,0,0.18)', border: '1px solid rgba(255,107,0,0.4)' }}>
            <Palette size={14} /> Features
          </div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.04em', marginBottom: 20 }}>
            AI Thumbnail Generator
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.75)', maxWidth: '620px', margin: '0 auto 36px', lineHeight: 1.7 }}>
            Your thumbnail is the first thing a viewer sees. TubeMagic generates AI-powered, CTR-optimized thumbnails designed to stop the scroll and earn the click.
          </p>
          <a href={AFFILIATE_LINK}   className="btn-primary" style={{ padding: '16px 40px', fontSize: '1.05rem', background: 'var(--accent-orange)' }}>
            Create Thumbnails Free <ArrowRight size={18} />
          </a>
          <p style={{ marginTop: 14, fontSize: '0.85rem', color: 'rgba(255,255,255,0.35)' }}>30-day money-back guarantee · No credit card required</p>
        </div>
      </section>

      <section style={{ padding: '96px 24px', background: 'var(--bg-primary)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center" style={{ marginBottom: 60 }}>
            <h2 className="section-title" style={{ marginBottom: 12 }}>Thumbnails Engineered for Clicks</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>A 1% improvement in CTR can double your channel growth. TubeMagic ensures every thumbnail is optimized to earn that click.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {thumbFeatures.map((feat) => (
              <div key={feat.title} className="glass-card" style={{ padding: '28px' }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--accent-orange-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-red)', marginBottom: 16 }}>
                  <feat.icon size={22} />
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 8, color: 'var(--text-primary)' }}>{feat.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.93rem', margin: 0 }}>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: 'var(--brand-red-dark)', color: 'var(--text-on-dark)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 20 }}>The CTR Effect: Why Thumbnails Matter More Than You Think</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[['2%→4%', 'CTR improvement from optimized thumbnails can double impressions-to-views conversion rate.'], ['40%', 'Of viewers decide to watch based on the thumbnail alone, before reading the title.'], ['10x', 'Channels that A/B test thumbnails grow their click-through rate 10x faster.']].map(([stat, desc]) => (
              <div key={stat} style={{ padding: '24px', borderRadius: 'var(--radius-lg)', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--accent-orange)', marginBottom: 8 }}>{stat}</div>
                <p style={{ color: 'rgba(245,245,220,0.65)', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mesh-gradient-dark" style={{ padding: '80px 24px', textAlign: 'center', color: 'var(--text-on-dark)' }}>
        <div className="max-w-2xl mx-auto">
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: 16 }}>Build Thumbnails That Get Clicked</h2>
          <p style={{ color: 'rgba(245,245,220,0.65)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: 36 }}>Included in TubeMagic Pro with every other tool you need to scale your channel at $47/month.</p>
          <a href={AFFILIATE_LINK}   className="btn-primary" style={{ padding: '16px 44px', fontSize: '1.05rem', background: '#fff', color: 'var(--brand-red-dark)' }}>
            Start Free ,30-Day Guarantee <ArrowRight size={18} />
          </a>
          <p style={{ marginTop: 14, fontSize: '0.82rem', color: 'rgba(255,255,255,0.3)' }}>* Affiliate link. Not an official Google or YouTube service.</p>
        </div>
      </section>
    </>
  );
}


