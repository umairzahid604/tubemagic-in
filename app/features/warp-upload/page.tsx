import type { Metadata } from 'next';
import { Rocket, Tag, Hash, FileText, Clock, Upload, Check, ArrowRight, Zap } from 'lucide-react';

const AFFILIATE_LINK = '/get-tubemagic';

export const metadata: Metadata = {
  title: 'Warp Upload Optimizer | TubeMagic',
  description: 'Auto-generate SEO-optimized YouTube titles, tags, descriptions, and chapter timestamps. Upload faster with metadata designed to rank.',
};

const warpFeatures = [
  { icon: FileText, title: 'SEO-Optimized Titles', desc: 'Generate click-worthy titles engineered for both algorithmic ranking and human curiosity. A/B test variants to find the highest-CTR option.' },
  { icon: Hash, title: 'Smart Tag Generation', desc: 'Auto-populate the optimal tag set for maximum discovery. Tags are clustered by relevance tier ,core, secondary, and long-tail ,for complete coverage.' },
  { icon: Tag, title: 'Rich Descriptions', desc: 'Full descriptions with keyword density, natural language flow, and built-in CTAs. Includes links section formatting and hashtag optimization.' },
  { icon: Clock, title: 'Auto Chapter Timestamps', desc: 'Paste your script and TubeMagic extracts section markers to generate YouTube chapter timestamps automatically. Boost watch time with easy navigation.' },
  { icon: Upload, title: 'Batch Metadata Mode', desc: 'Managing 5, 10, or 12 channels? Generate metadata for multiple videos at once and upload them in a single workflow session.' },
  { icon: Zap, title: 'One-Click Apply', desc: 'Generated metadata can be applied directly to your YouTube Studio workflow, eliminating copy-paste friction and reducing upload time to under 2 minutes.' },
];

const metadataFields = [
  'SEO-optimized video title (3 variants)',
  'Full description (200–500 words)',
  '15–20 precision-targeted tags',
  'Auto-detected chapter timestamps',
  'Hashtag recommendations (5–10)',
  'End screen & card suggestions',
  'Pinned comment template',
];

export default function Page() {
  return (
    <>
      <section className="mesh-gradient-dark" style={{ padding: '96px 24px 80px', color: 'var(--text-on-dark)', textAlign: 'center' }}>
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="glow-tag" style={{ marginBottom: 20, color: 'rgba(255,245,235,0.9)', background: 'rgba(255,107,0,0.18)', border: '1px solid rgba(255,107,0,0.4)' }}>
            <Rocket size={14} /> Features
          </div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.04em', marginBottom: 20 }}>
            Warp Upload Optimizer
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.75)', maxWidth: '620px', margin: '0 auto 36px', lineHeight: 1.7 }}>
            Stop spending an hour writing titles, tags, and descriptions. Warp Upload auto-generates a complete, rank-ready metadata package in seconds.
          </p>
          <a href={AFFILIATE_LINK}   className="btn-primary" style={{ padding: '16px 40px', fontSize: '1.05rem', background: 'var(--accent-orange)' }}>
            Try Warp Upload Free <ArrowRight size={18} />
          </a>
          <p style={{ marginTop: 14, fontSize: '0.85rem', color: 'rgba(255,255,255,0.35)' }}>30-day money-back guarantee · No credit card required</p>
        </div>
      </section>

      <section style={{ padding: '96px 24px', background: 'var(--bg-primary)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center" style={{ marginBottom: 60 }}>
            <h2 className="section-title" style={{ marginBottom: 12 }}>Every Metadata Field. Perfectly Optimized.</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>Warp Upload handles every piece of metadata YouTube uses to rank, surface, and recommend your videos.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {warpFeatures.map((feat) => (
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
        <div className="max-w-3xl mx-auto">
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 40, textAlign: 'center' }}>What Warp Upload Generates for Every Video</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {metadataFields.map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 20px', borderRadius: 12, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <span style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(255,107,0,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Check size={12} color="var(--accent-orange)" strokeWidth={3} />
                </span>
                <span style={{ fontSize: '0.93rem' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mesh-gradient-dark" style={{ padding: '80px 24px', textAlign: 'center', color: 'var(--text-on-dark)' }}>
        <div className="max-w-2xl mx-auto">
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: 16 }}>Upload in 2 Minutes, Not 2 Hours</h2>
          <p style={{ color: 'rgba(245,245,220,0.65)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: 36 }}>Warp Upload is included in TubeMagic Pro at $47/month ,along with every other tool you need to scale.</p>
          <a href={AFFILIATE_LINK}   className="btn-primary" style={{ padding: '16px 44px', fontSize: '1.05rem', background: '#fff', color: 'var(--brand-red-dark)' }}>
            Start Free ,30-Day Guarantee <ArrowRight size={18} />
          </a>
          <p style={{ marginTop: 14, fontSize: '0.82rem', color: 'rgba(255,255,255,0.3)' }}>* Affiliate link. Not an official Google or YouTube service.</p>
        </div>
      </section>
    </>
  );
}



