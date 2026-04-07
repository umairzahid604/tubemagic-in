import type { Metadata } from 'next';
import { BookOpen, ArrowRight, Zap, Target, PenLine, TrendingUp, Play, Users } from 'lucide-react';

const AFFILIATE_LINK = '/get-tubemagic';

export const metadata: Metadata = {
  title: 'YouTube Automation Academy: Free Guides & Resources for Creators',
  description:
    'Free guides on YouTube automation, faceless channels, niche selection, retention scripting, and AI content strategy. Powered by TubeMagic.',
};

const pillars = [
  {
    icon: Target,
    title: 'Niche Positioning',
    desc: 'Find high-CPM niches with low competition. Finance, AI, and self-improvement generate $18–$40 RPM ,most creators never discover them.',
    href: '/academy/niche-positioning',
  },
  {
    icon: Play,
    title: 'Faceless Channels',
    desc: 'Build and scale faceless YouTube channels without showing your face. The complete business-in-a-box framework.',
    href: '/academy/faceless-channels',
  },
  {
    icon: PenLine,
    title: 'Retention Scripting',
    desc: 'Write scripts engineered from the first frame for maximum Average View Duration. Hooks, open loops, and CTA psychology.',
    href: '/academy/retention-scripting',
  },
  {
    icon: TrendingUp,
    title: 'SEO & Research',
    desc: 'Use AI-driven competitive research to identify keyword gaps and publish videos before trends peak.',
    href: '/features/video-research',
  },
  {
    icon: Zap,
    title: 'Automated Production',
    desc: 'The full AI workflow: idea → script → thumbnail → metadata → publish. Go from zero to uploaded in under 15 minutes.',
    href: '/features',
  },
  {
    icon: Users,
    title: 'Scaling to Multiple Channels',
    desc: 'How to manage 5–12 channels simultaneously with batch processing, content calendars, and smart delegation.',
    href: '/academy/faceless-channels',
  },
];

export default function Page() {
  return (
    <>
      <section className="mesh-gradient-dark" style={{ padding: '96px 24px 80px', color: 'var(--text-on-dark)', textAlign: 'center' }}>
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="glow-tag" style={{ marginBottom: 20, color: 'rgba(255,245,235,0.9)', background: 'rgba(255,107,0,0.18)', border: '1px solid rgba(255,107,0,0.4)' }}>
            <BookOpen size={14} /> Free Training
          </div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.04em', marginBottom: 20 }}>
            YouTube Automation Academy
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.75)', maxWidth: '640px', margin: '0 auto 36px', lineHeight: 1.7 }}>
            Free, practical guides to building a profitable YouTube automation business ,from niche selection to AI-produced content at scale.
          </p>
          <a href={AFFILIATE_LINK}   className="btn-primary" style={{ padding: '16px 40px', fontSize: '1.05rem', background: 'var(--accent-orange)' }}>
            Start with TubeMagic <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: 'var(--bg-primary)' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 12 }}>Academy Pillars</h2>
          <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: 48 }}>Six core modules covering every aspect of YouTube automation mastery.</p>
          <div className="bento-grid">
            {pillars.map(({ icon: Icon, title, desc, href }) => (
              <a key={title} href={href} className="glass-card" style={{ padding: '28px', display: 'block', textDecoration: 'none', transition: 'box-shadow 0.2s' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                  <div style={{ padding: 10, borderRadius: 10, background: 'rgba(204,0,0,0.08)', flexShrink: 0 }}>
                    <Icon size={22} color="var(--brand-red)" />
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>{title}</h3>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: '0 0 16px' }}>{desc}</p>
                <span style={{ fontSize: '0.85rem', color: 'var(--brand-red)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>Read guide <ArrowRight size={14} /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: 'var(--brand-red-dark)', color: 'var(--text-on-dark)', textAlign: 'center' }}>
        <div className="max-w-3xl mx-auto">
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 16 }}>Put the Theory into Practice</h2>
          <p style={{ color: 'rgba(245,245,220,0.75)', lineHeight: 1.75, marginBottom: 32 }}>All of these strategies are built into TubeMagic. Research, script, design, and upload ,the full workflow in one tool.</p>
          <a href={AFFILIATE_LINK}   className="btn-primary" style={{ padding: '16px 40px', background: 'var(--accent-orange)' }}>
            Try TubeMagic Free <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </>
  );
}

