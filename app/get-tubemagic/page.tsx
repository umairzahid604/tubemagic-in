import type { Metadata } from 'next';
import { ArrowRight, Check, Shield, Star, Zap, Brain, Lightbulb, Palette, Upload, Search, Globe } from 'lucide-react';

const AFFILIATE_LINK = 'https://tubemagic.com/ds#aff=UmairZahid0001';

export const metadata: Metadata = {
  title: 'How to Get Started with TubeMagic: AI YouTube Automation Guide',
  description:
    'Start your TubeMagic subscription today. AI Script Writer, Video Idea Generator, Thumbnail Generator, Warp Upload, and Video Research ,all included at $47/month with a 30-day money-back guarantee.',
};

const features = [
  { icon: Brain, title: 'AI Script Writer', desc: 'Retention-trained scripts with hooks, open loops, and CTAs ,powered by Claude 4.0 + GPT-4o.' },
  { icon: Lightbulb, title: 'Video Idea Generator', desc: 'Outlier-detection AI finds proven topic formats before the competition does.' },
  { icon: Palette, title: 'Thumbnail Generator', desc: 'AI-designed, CTR-optimized thumbnails. No Canva, no designer needed.' },
  { icon: Upload, title: 'Warp Upload Optimizer', desc: 'Auto-generate titles, descriptions, tags, and timestamps for every upload in seconds.' },
  { icon: Search, title: 'Video Research Tool', desc: 'Benchmark channels, find keyword gaps, and publish before trends peak.' },
  { icon: Globe, title: '95+ Languages', desc: 'Full content generation in over 95 languages ,built for global creators.' },
];

const included = [
  'All 5 tools in one subscription',
  'Unlimited content generation',
  'Multi-channel management (10–12 channels)',
  'Proprietary viral retention training data',
  '30-day money-back guarantee',
  'Cancel anytime ,no long-term contract',
];

const faqs = [
  { q: 'Is there a free trial?', a: 'No free trial, but every plan comes with a 30-day money-back guarantee. Try everything risk-free.' },
  { q: 'What AI models does it use?', a: 'Claude 4.0 (Anthropic) and GPT-4o (OpenAI). You choose which model to use per task.' },
  { q: 'Can I manage multiple channels?', a: 'Yes. TubeMagic supports 10–12 channels from one dashboard ,ideal for agencies and faceless channel operators.' },
  { q: 'Who owns TubeMagic?', a: 'Matt Par ,a YouTuber with 4M+ subscribers who runs multiple faceless channels himself.' },
];

export default function GetTubeMagicPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="mesh-gradient-dark"
        style={{ padding: '100px 24px 80px', color: 'var(--text-on-dark)', textAlign: 'center' }}
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div
            className="glow-tag"
            style={{ marginBottom: 24, color: 'rgba(255,245,235,0.9)', background: 'rgba(255,107,0,0.18)', border: '1px solid rgba(255,107,0,0.4)' }}
          >
            <Zap size={13} /> $47/month · All tools included
          </div>
          <h1
            style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.04em', marginBottom: 20 }}
          >
            The Complete AI Suite for<br />YouTube Creators
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.7)', maxWidth: 580, lineHeight: 1.75, marginBottom: 36 }}>
            TubeMagic automates your full content workflow ,from idea to published video.
            One flat price, every tool, unlimited use.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a
              href={AFFILIATE_LINK}
              target="_blank"
              rel="nofollow noreferrer"
              className="btn-primary"
              style={{ padding: '16px 40px', fontSize: '1.05rem', fontWeight: 800, background: 'var(--accent-orange)', display: 'inline-flex', alignItems: 'center', gap: 8 }}
            >
              Get TubeMagic Now <ArrowRight size={18} />
            </a>
            <a
              href="/compare/tubemagic-review"
              className="btn-secondary"
              style={{ padding: '16px 32px', fontSize: '1rem' }}
            >
              Read Full Review
            </a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 20 }}>
            <Shield size={14} color="rgba(255,255,255,0.35)" />
            <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.35)' }}>30-day money-back guarantee · Cancel anytime</span>
          </div>
        </div>
      </section>

      {/* YouTube video */}
      <section style={{ padding: '64px 24px', background: 'var(--bg-primary)' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 12 }}>See TubeMagic in Action</h2>
          <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: 32 }}>
            Watch how TubeMagic handles the full YouTube content workflow from idea to upload.
          </p>
          <div
            style={{
              position: 'relative',
              paddingBottom: '56.25%',
              height: 0,
              overflow: 'hidden',
              borderRadius: 'var(--radius-xl)',
              boxShadow: '0 24px 64px rgba(0,0,0,0.18)',
            }}
          >
            <iframe
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
              src="https://www.youtube.com/embed/DHKIKEI595s?si=vtnlbyEmzg3bKkYl"
              title="TubeMagic Review ,AI YouTube Automation Walkthrough"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section style={{ padding: '80px 24px', background: 'var(--bg-primary)' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 12 }}>Everything in One Plan</h2>
          <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: 48 }}>
            Five AI tools that replace a full production toolkit at a fraction of the cost.
          </p>
          <div className="bento-grid">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="glass-card" style={{ padding: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                  <div style={{ padding: 10, borderRadius: 10, background: 'rgba(204,0,0,0.08)', flexShrink: 0 }}>
                    <Icon size={22} color="var(--brand-red)" />
                  </div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>{title}</h3>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing card */}
      <section style={{ padding: '80px 24px', background: 'var(--brand-red-dark)', color: 'var(--text-on-dark)' }}>
        <div className="max-w-2xl mx-auto">
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 800, letterSpacing: '-0.03em', textAlign: 'center', marginBottom: 40 }}>
            One Plan. No Tiers. No Limits.
          </h2>
          <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', border: '2px solid rgba(255,107,0,0.4)' }}>
            {/* Card top */}
            <div style={{ padding: '32px', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ display: 'inline-block', padding: '4px 14px', background: 'var(--accent-orange)', borderRadius: 20, fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 16 }}>Most Popular</div>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', gap: 4 }}>
                <span style={{ fontSize: '1.2rem', fontWeight: 700, marginTop: 10 }}>$</span>
                <span style={{ fontSize: '4.5rem', fontWeight: 900, lineHeight: 1 }}>47</span>
                <span style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.5)', marginTop: 'auto', marginBottom: 10 }}>/month</span>
              </div>
              <div style={{ display: 'flex', gap: 4, justifyContent: 'center', marginTop: 10 }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#FACC15" color="#FACC15" />)}
                <span style={{ marginLeft: 6, fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>4.8/5</span>
              </div>
            </div>
            {/* Checklist */}
            <div style={{ padding: '28px 32px' }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: 14 }}>
                {included.map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(255,107,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Check size={13} color="var(--accent-orange)" strokeWidth={2.5} />
                    </div>
                    <span style={{ fontSize: '0.93rem', color: 'rgba(245,245,220,0.85)' }}>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={AFFILIATE_LINK}
                target="_blank"
                rel="nofollow noreferrer"
                className="btn-primary"
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8, padding: '16px', width: '100%', fontSize: '1.05rem', fontWeight: 800, background: 'var(--accent-orange)' }}
              >
                Get TubeMagic ,$47/month <ArrowRight size={18} />
              </a>
              <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'rgba(255,255,255,0.25)', marginTop: 14 }}>
                * Affiliate link. We earn a commission at no extra cost to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '80px 24px', background: 'var(--bg-primary)' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 40 }}>Quick Answers</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {faqs.map(({ q, a }) => (
              <div key={q} className="glass-card" style={{ padding: '22px 28px' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 8 }}>{q}</h3>
                <p style={{ fontSize: '0.91rem', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>{a}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <a href="/faq" style={{ fontSize: '0.9rem', color: 'var(--brand-red)', fontWeight: 600, textDecoration: 'none' }}>
              See all FAQs →
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: '80px 24px', background: 'var(--brand-red-dark)', color: 'var(--text-on-dark)', textAlign: 'center' }}>
        <div className="max-w-3xl mx-auto">
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 16 }}>
            Start Growing Your Channel Today
          </h2>
          <p style={{ color: 'rgba(245,245,220,0.7)', lineHeight: 1.75, marginBottom: 32, maxWidth: 520, margin: '0 auto 32px' }}>
            Join thousands of creators using TubeMagic to produce better content, faster ,with AI that actually understands YouTube.
          </p>
          <a
            href={AFFILIATE_LINK}
            target="_blank"
            rel="nofollow noreferrer"
            className="btn-primary"
            style={{ padding: '16px 48px', fontSize: '1.1rem', fontWeight: 800, background: 'var(--accent-orange)', display: 'inline-flex', alignItems: 'center', gap: 8 }}
          >
            Get TubeMagic Now <ArrowRight size={20} />
          </a>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 16 }}>
            <Shield size={14} color="rgba(255,255,255,0.3)" />
            <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.3)' }}>30-day money-back guarantee · No risk</span>
          </div>
        </div>
      </section>
    </>
  );
}
