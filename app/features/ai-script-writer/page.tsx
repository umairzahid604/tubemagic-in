import type { Metadata } from 'next';
import { PenLine, Zap, Clock, Brain, Eye, MessageSquare, TrendingUp, Check, ArrowRight } from 'lucide-react';

const AFFILIATE_LINK = '/get-tubemagic';

export const metadata: Metadata = {
  title: 'AI Script Writer for YouTube: Complete Feature Guide',
  description:
    'Generate retention-optimized YouTube scripts in minutes. TubeMagic AI Script Writer is trained on viral data ,hooks, open loops, CTAs built-in.',
};

const scriptFeatures = [
  {
    icon: Brain,
    title: 'Retention-Trained AI',
    desc: 'Unlike generic ChatGPT scripts, TubeMagic is trained on proprietary viral retention data from elite YouTube creators. Every line is engineered to keep viewers watching.',
  },
  {
    icon: Eye,
    title: 'Hook Engineering',
    desc: 'The first 15 seconds decide if viewers stay. TubeMagic auto-generates pattern-interrupting hooks calibrated to your niche and audience psychology.',
  },
  {
    icon: MessageSquare,
    title: 'Open Loop Structure',
    desc: 'Scripts implement psychological open loops that build curiosity and naturally carry viewers to the end ,boosting Average View Duration and search rankings.',
  },
  {
    icon: Zap,
    title: 'Claude 4.0 & GPT-4o',
    desc: 'Choose your AI model. Claude 4.0 delivers natural, human-like narratives. GPT-4o provides structured, analytical depth. Switch between them freely.',
  },
  {
    icon: TrendingUp,
    title: 'CTA Optimization',
    desc: 'Every script includes strategically placed calls-to-action ,subscribe prompts, like reminders, and end-screen hooks that grow your channel over time.',
  },
  {
    icon: Clock,
    title: '5-Minute Workflow',
    desc: 'What used to take 4.5–7.5 hours of research and writing is condensed into a 5-minute automated process. More videos, less burnout.',
  },
];

const scriptIncludes = [
  'Attention-grabbing hook (first 15 seconds)',
  'Curiosity-building intro with open loop',
  'Structured talking points with transitions',
  'Pattern disruptions to fight drop-off',
  'Mid-video re-engagement sequences',
  'Natural call-to-action placement',
  'Outro with subscribe + next video hook',
];

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="mesh-gradient-dark" style={{ padding: '96px 24px 80px', color: 'var(--text-on-dark)', textAlign: 'center' }}>
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="glow-tag" style={{ marginBottom: 20, color: 'rgba(255,245,235,0.9)', background: 'rgba(255,107,0,0.18)', border: '1px solid rgba(255,107,0,0.4)' }}>
            <PenLine size={14} /> Features
          </div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.04em', marginBottom: 20 }}>
            AI Script Writer for YouTube
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.75)', maxWidth: '620px', margin: '0 auto 36px', lineHeight: 1.7 }}>
            Stop spending 5+ hours writing scripts from scratch. TubeMagic generates full retention-optimized YouTube scripts in minutes ,trained on what actually makes viewers stay.
          </p>
          <a href={AFFILIATE_LINK}   className="btn-primary" style={{ padding: '16px 40px', fontSize: '1.05rem', background: 'var(--accent-orange)' }}>
            Try Script Writer Free <ArrowRight size={18} />
          </a>
          <p style={{ marginTop: 14, fontSize: '0.85rem', color: 'rgba(255,255,255,0.35)' }}>30-day money-back guarantee · No credit card required</p>
        </div>
      </section>

      {/* Stats strip */}
      <section style={{ background: 'var(--brand-red)', padding: '32px 24px' }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[['5 min', 'Avg. script time'], ['4.5+ hrs', 'Saved per video'], ['95+', 'Languages'], ['4.8★', 'Creator rating']].map(([val, label]) => (
            <div key={label}>
              <div style={{ fontSize: '1.9rem', fontWeight: 900, color: '#fff' }}>{val}</div>
              <div style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.65)', fontWeight: 500 }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Core features grid */}
      <section style={{ padding: '96px 24px', background: 'var(--bg-primary)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center" style={{ marginBottom: 60 }}>
            <h2 className="section-title" style={{ marginBottom: 12 }}>Why TubeMagic Scripts Outperform Everything Else</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Generic AI writes content. TubeMagic writes scripts engineered to maximize viewer retention and channel growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scriptFeatures.map((feat) => (
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

      {/* What's in every script */}
      <section style={{ padding: '80px 24px', background: 'var(--brand-red-dark)', color: 'var(--text-on-dark)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center" style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 12 }}>What Every Script Includes</h2>
            <p style={{ color: 'rgba(245,245,220,0.6)', fontSize: '1.1rem', maxWidth: 480, margin: '0 auto' }}>Every output follows a proven retention framework used by channels with millions of subscribers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {scriptIncludes.map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 20px', borderRadius: 12, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <span style={{ width: 24, height: 24, borderRadius: '50%', background: 'rgba(255,107,0,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Check size={13} color="var(--accent-orange)" strokeWidth={3} />
                </span>
                <span style={{ fontSize: '0.95rem' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: '96px 24px', background: 'var(--bg-primary)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center" style={{ marginBottom: 56 }}>
            <h2 className="section-title" style={{ marginBottom: 12 }}>How the Script Writer Works</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>Three steps from topic to finished, ready-to-record script.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[['01','Enter Your Topic','Type your video idea or paste your channel URL. TubeMagic analyzes your niche, competitor data, and current trends to frame the perfect angle.'],['02','Choose AI Model','Select Claude 4.0 for natural storytelling or GPT-4o for structured depth. Adjust tone, length, and format to match your style.'],['03','Edit & Record','Receive a full script with hooks, talking points, and CTAs. Make quick edits, then record ,your most polished video yet.']].map(([num, title, desc]) => (
              <div key={num} className="glass-card" style={{ padding: '32px' }}>
                <div style={{ fontSize: '2.8rem', fontWeight: 900, color: 'var(--brand-red)', opacity: 0.15, lineHeight: 1, marginBottom: 16 }}>{num}</div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: 8, color: 'var(--text-primary)' }}>{title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0, fontSize: '0.92rem' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mesh-gradient-dark" style={{ padding: '80px 24px', textAlign: 'center', color: 'var(--text-on-dark)' }}>
        <div className="max-w-2xl mx-auto">
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: 16 }}>
            Write Your First AI Script in 5 Minutes
          </h2>
          <p style={{ color: 'rgba(245,245,220,0.65)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: 36, maxWidth: 460, margin: '0 auto 36px' }}>
            Join 50,000+ creators using TubeMagic to produce consistent, high-retention content at scale.
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
