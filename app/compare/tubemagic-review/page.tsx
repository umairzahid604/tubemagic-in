import type { Metadata } from 'next';
import { Check, X, Star, ArrowRight, Shield } from 'lucide-react';

const AFFILIATE_LINK = '/get-tubemagic';

export const metadata: Metadata = {
  title: 'TubeMagic Review 2026 | Is It Worth $47/Month?',
  description:
    'Honest TubeMagic review 2026. Features, pricing, pros, cons, and real user results. Is TubeMagic worth the cost for YouTube creators?',
};

const pros = [
  'Only YouTube tool with retention-trained AI scripts',
  'Replaces 5+ separate subscriptions at one price',
  'Claude 4.0 + GPT-4o ,choose your AI model',
  '95+ language support for global audiences',
  'Reduces video production time from 5 hours to 5 minutes',
  '30-day money-back guarantee ,zero risk',
  'Active updates: acquired by Matt Par in March 2024',
  '10–12 channel multi-management for agencies',
];

const cons = [
  'Monthly subscription (no lifetime deal)',
  'Requires internet access ,no offline mode',
  'AI output still benefits from human review before publishing',
];

const ratings = [
  { label: 'Script Quality', score: 5 },
  { label: 'Ease of Use', score: 5 },
  { label: 'Value for Money', score: 4.5 },
  { label: 'Feature Depth', score: 4.5 },
  { label: 'Support', score: 4 },
];

export default function Page() {
  return (
    <>
      <section className="mesh-gradient-dark" style={{ padding: '96px 24px 80px', color: 'var(--text-on-dark)', textAlign: 'center' }}>
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="glow-tag" style={{ marginBottom: 20, color: 'rgba(255,245,235,0.9)', background: 'rgba(255,107,0,0.18)', border: '1px solid rgba(255,107,0,0.4)' }}>
            <Star size={14} /> Review
          </div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.04em', marginBottom: 20 }}>
            TubeMagic Review 2026
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.75)', maxWidth: '620px', margin: '0 auto 16px', lineHeight: 1.7 }}>
            Is TubeMagic worth $47/month? After testing every feature, here’s our honest assessment.
          </p>
          <div style={{ display: 'flex', gap: 4, marginBottom: 24 }}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={22} fill={i < 5 ? '#FACC15' : 'none'} color="#FACC15" />
            ))}
            <span style={{ marginLeft: 8, fontSize: '1rem', color: 'rgba(255,255,255,0.6)' }}>4.8 / 5</span>
          </div>
          <a href={AFFILIATE_LINK}   className="btn-primary" style={{ padding: '16px 40px', fontSize: '1.05rem', background: 'var(--accent-orange)' }}>
            Try TubeMagic Free <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* What is TubeMagic */}
      <section style={{ padding: '80px 24px', background: 'var(--bg-primary)' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title" style={{ marginBottom: 16 }}>What Is TubeMagic?</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: 16, fontSize: '1rem' }}>
            TubeMagic (originally Morise.ai, acquired by YouTuber Matt Par in March 2024) is an AI-powered YouTube automation platform. It’s designed to replace the manual, time-consuming parts of the YouTube creator workflow ,script writing, idea research, thumbnail creation, and SEO metadata optimization.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: 16, fontSize: '1rem' }}>
            The platform runs on a combination of Claude 4.0 and GPT-4o, with the script writer uniquely trained on proprietary viral retention data collected from successful YouTube channels. This is the key differentiator: TubeMagic isn’t just wrapping generic AI ,it’s specialized for YouTube performance metrics.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, fontSize: '1rem' }}>
            At $47/month it includes five core tools: AI Script Writer, Video Idea Generator, Warp Upload Optimizer, AI Thumbnail Generator, and Video Research Tool. It supports 95+ languages and is designed to scale across 10–12 channels for agencies and faceless channel operators.
          </p>
        </div>
      </section>

      {/* Ratings */}
      <section style={{ padding: '60px 24px', background: 'var(--brand-red-dark)', color: 'var(--text-on-dark)' }}>
        <div className="max-w-3xl mx-auto">
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 32, textAlign: 'center' }}>Category Ratings</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {ratings.map((r) => (
              <div key={r.label} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 160, fontSize: '0.92rem', fontWeight: 600, flexShrink: 0 }}>{r.label}</div>
                <div style={{ flexGrow: 1, height: 8, background: 'rgba(255,255,255,0.1)', borderRadius: 4, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${(r.score / 5) * 100}%`, background: 'var(--accent-orange)', borderRadius: 4 }} />
                </div>
                <div style={{ width: 40, textAlign: 'right', fontWeight: 700, fontSize: '0.92rem' }}>{r.score}/5</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pros & Cons */}
      <section style={{ padding: '80px 24px', background: 'var(--bg-primary)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card" style={{ padding: '32px', border: '2px solid rgba(34,197,94,0.2)' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: 20 }}>Pros</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {pros.map((p) => (
                  <li key={p} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <Check size={16} color="#16a34a" strokeWidth={2.5} style={{ marginTop: 2, flexShrink: 0 }} />
                    <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card" style={{ padding: '32px', border: '2px solid rgba(239,68,68,0.15)' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: 20 }}>Cons</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {cons.map((c) => (
                  <li key={c} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <X size={16} color="#dc2626" strokeWidth={2.5} style={{ marginTop: 2, flexShrink: 0 }} />
                    <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final verdict */}
      <section style={{ padding: '80px 24px', background: 'var(--brand-red-dark)', color: 'var(--text-on-dark)' }}>
        <div className="max-w-3xl mx-auto">
          <div style={{ padding: '40px', borderRadius: 'var(--radius-xl)', background: 'rgba(255,255,255,0.06)', border: '2px solid rgba(255,107,0,0.3)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <Shield size={28} color="var(--accent-orange)" />
              <h2 style={{ fontSize: '1.6rem', fontWeight: 800, margin: 0 }}>Final Verdict: Highly Recommended</h2>
            </div>
            <p style={{ color: 'rgba(245,245,220,0.8)', lineHeight: 1.85, marginBottom: 16, fontSize: '1rem' }}>
              TubeMagic is one of the most compelling tools in the YouTube creator ecosystem because it solves a real problem at a reasonable price. The retention-trained script AI genuinely produces better output than using ChatGPT directly, and the bundled workflow tools justify the subscription on their own.
            </p>
            <p style={{ color: 'rgba(245,245,220,0.8)', lineHeight: 1.85, marginBottom: 28, fontSize: '1rem' }}>
              <strong>Best for:</strong> Faceless channel operators, YouTube agencies, and any creator who wants to consistently publish high-quality content without burning out. The 30-day money-back guarantee makes it risk-free to test.
            </p>
            <a href={AFFILIATE_LINK}   className="btn-primary" style={{ padding: '14px 36px', background: 'var(--accent-orange)' }}>
              Try TubeMagic Free ,30-Day Guarantee <ArrowRight size={18} />
            </a>
            <p style={{ marginTop: 14, fontSize: '0.82rem', color: 'rgba(255,255,255,0.3)' }}>* Affiliate link. Not an official Google or YouTube service.</p>
          </div>
        </div>
      </section>
    </>
  );
}


