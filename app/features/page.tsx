import type { Metadata } from 'next';
import Link from 'next/link';
import { PenLine, Lightbulb, Rocket, Palette, Search, ArrowRight, Zap } from 'lucide-react';

const AFFILIATE_LINK = '/get-tubemagic';

export const metadata: Metadata = {
  title: 'TubeMagic Features Guide: The Complete AI YouTube Toolkit',
  description:
    'Explore all TubeMagic features: AI Script Writer, Video Idea Generator, Warp Upload, Thumbnail Generator, and Video Research ,the complete YouTube automation toolkit.',
};

const features = [
  {
    icon: PenLine,
    title: 'AI Script Writer',
    desc: 'Generate full retention-optimized YouTube scripts with hooks, open loops, and CTAs. Trained on proprietary viral data using Claude 4.0 and GPT-4o. Cut script time from 5 hours to 5 minutes.',
    href: '/features/ai-script-writer',
    tag: 'Most Popular',
    highlight: true,
  },
  {
    icon: Lightbulb,
    title: 'Video Idea Generator',
    desc: "Discover high-potential outlier topics before your competitors using niche trend analysis and competitor benchmarking. Never run out of winning content ideas.",
    href: '/features/video-idea-generator',
    tag: null,
    highlight: false,
  },
  {
    icon: Rocket,
    title: 'Warp Upload Optimizer',
    desc: 'Auto-generate titles, tags, descriptions, and chapter timestamps for every upload. Complete rank-ready metadata in under 2 minutes per video.',
    href: '/features/warp-upload',
    tag: null,
    highlight: false,
  },
  {
    icon: Palette,
    title: 'AI Thumbnail Generator',
    desc: 'Create scroll-stopping thumbnails engineered for maximum CTR. Multiple style variants, brand-consistent output, and AI-generated visuals ,no Photoshop required.',
    href: '/features/thumbnail-generator',
    tag: null,
    highlight: false,
  },
  {
    icon: Search,
    title: 'Video Research Tool',
    desc: 'Filter the YouTube database by views, upload date, and duration. Deep competitor analysis and content gap detection across any niche.',
    href: '/features/video-research',
    tag: null,
    highlight: false,
  },
];

const workflow = [
  { step: '01', title: 'Research', tools: 'Video Research Tool + Idea Generator', desc: 'Identify the highest-potential topic in your niche with data-driven confidence.' },
  { step: '02', title: 'Create', tools: 'AI Script Writer', desc: 'Generate a full retention-optimized script in minutes, not hours.' },
  { step: '03', title: 'Visualize', tools: 'Thumbnail Generator', desc: 'Build click-earning thumbnails without design skills or stock photos.' },
  { step: '04', title: 'Upload', tools: 'Warp Upload Optimizer', desc: 'Apply complete SEO metadata and go live ,faster than ever before.' },
];

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="mesh-gradient-dark" style={{ padding: '96px 24px 80px', color: 'var(--text-on-dark)', textAlign: 'center' }}>
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="glow-tag" style={{ marginBottom: 20, color: 'rgba(255,245,235,0.9)', background: 'rgba(255,107,0,0.18)', border: '1px solid rgba(255,107,0,0.4)' }}>
            <Zap size={14} /> The Complete Tube AI System
          </div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.04em', marginBottom: 20 }}>
            Five Tools. One Platform. Total YouTube Automation.
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.75)', maxWidth: '640px', margin: '0 auto 36px', lineHeight: 1.7 }}>
            TubeMagic replaces five separate tools with one integrated system ,from idea discovery to final upload. Every function is AI-powered and trained on viral retention data.
          </p>
          <a href={AFFILIATE_LINK}   className="btn-primary" style={{ padding: '16px 40px', fontSize: '1.05rem', background: 'var(--accent-orange)' }}>
            Try All Features Free <ArrowRight size={18} />
          </a>
          <p style={{ marginTop: 14, fontSize: '0.85rem', color: 'rgba(255,255,255,0.35)' }}>$47/month · 30-day money-back guarantee</p>
        </div>
      </section>

      {/* Features Grid */}
      <section style={{ padding: '96px 24px', background: 'var(--bg-primary)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center" style={{ marginBottom: 60 }}>
            <h2 className="section-title" style={{ marginBottom: 12 }}>Everything Included at One Price</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Every tool below is included in TubeMagic Pro at $47/month. No add-ons, no tiers, no limits.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat) => (
              <Link
                key={feat.title}
                href={feat.href}
                style={{ textDecoration: 'none' }}
              >
                <div
                  className="glass-card"
                  style={{
                    padding: '32px',
                    height: '100%',
                    border: feat.highlight ? '2px solid rgba(204,0,0,0.25)' : undefined,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 0,
                    cursor: 'pointer',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16, gap: 12 }}>
                    <div style={{ width: 52, height: 52, borderRadius: 14, background: 'var(--accent-orange-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-red)', flexShrink: 0 }}>
                      <feat.icon size={24} />
                    </div>
                    {feat.tag && (
                      <span style={{ background: 'var(--accent-orange-dim)', color: 'var(--brand-red)', fontSize: '0.72rem', fontWeight: 700, padding: '4px 10px', borderRadius: 999, border: '1px solid rgba(255,107,0,0.2)', whiteSpace: 'nowrap' }}>
                        {feat.tag}
                      </span>
                    )}
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 10, color: 'var(--text-primary)' }}>{feat.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.92rem', margin: 0, flexGrow: 1 }}>{feat.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--brand-red)', fontWeight: 600, fontSize: '0.88rem', marginTop: 20 }}>
                    Learn more <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section style={{ padding: '80px 24px', background: 'var(--brand-red-dark)', color: 'var(--text-on-dark)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center" style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 12 }}>
              The Complete YouTube Production Workflow
            </h2>
            <p style={{ color: 'rgba(245,245,220,0.6)', fontSize: '1.05rem', maxWidth: 500, margin: '0 auto' }}>
              Each tool is designed to hand off seamlessly to the next ,creating a fully automated production pipeline.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {workflow.map((w) => (
              <div key={w.step} style={{ padding: '24px', borderRadius: 'var(--radius-lg)', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#fff', opacity: 0.1, lineHeight: 1, marginBottom: 12 }}>{w.step}</div>
                <div style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 4 }}>{w.title}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--accent-orange)', fontWeight: 600, marginBottom: 10 }}>{w.tools}</div>
                <p style={{ color: 'rgba(245,245,220,0.6)', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mesh-gradient-dark" style={{ padding: '80px 24px', textAlign: 'center', color: 'var(--text-on-dark)' }}>
        <div className="max-w-2xl mx-auto">
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: 16 }}>
            Replace 5 Tools With One Platform
          </h2>
          <p style={{ color: 'rgba(245,245,220,0.65)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: 36 }}>
            Script writing, idea generation, thumbnail creation, SEO metadata, and competitor research ,all at $47/month.
          </p>
          <a href={AFFILIATE_LINK}   className="btn-primary" style={{ padding: '16px 44px', fontSize: '1.05rem', background: '#fff', color: 'var(--brand-red-dark)' }}>
            Start Free ,30-Day Guarantee <ArrowRight size={18} />
          </a>
          <p style={{ marginTop: 14, fontSize: '0.82rem', color: 'rgba(255,255,255,0.3)' }}>* Affiliate link. Not an official Google or YouTube service.</p>
        </div>
      </section>
    </>
  );
}
