import type { Metadata } from 'next';
import { ArrowRight, Star, Quote } from 'lucide-react';

export const metadata: Metadata = {
  title: 'TubeMagic Reviews & Testimonials — What Creators Are Saying',
  description:
    'Real reviews from YouTubers with millions of subscribers, faceless channel operators, and agency owners. See why creators trust TubeMagic to power their content workflow.',
};

const testimonials = [
  {
    name: 'Matt Par',
    role: '12+ YouTube Channels · 1B+ Views',
    avatar: 'MP',
    featured: true,
    text: 'Running 12+ YouTube channels means I need tools that actually work at scale. TubeMagic is my go-to for idea generation and the script templates are an absolute game-changer — I\'ve invested over 6 figures into building and improving it.',
  },
  {
    name: 'Randolph',
    role: '1.2M YouTube Subscribers',
    avatar: 'R',
    featured: true,
    text: 'TubeMagic just works, and that\'s what matters at scale. I rely on it daily for video tags, community posts, and descriptions across multiple channels — it makes managing everything far less overwhelming.',
  },
  {
    name: 'AI Guy',
    role: '182K+ YouTube Subscribers',
    avatar: 'AG',
    featured: false,
    text: 'TubeMagic has been fantastic for generating scripts — I use it while producing AI-driven historical films. The keyword suggestions are eerily accurate and have genuinely pushed my videos higher in search rankings.',
  },
  {
    name: 'Barsee',
    role: '257K Followers',
    avatar: 'B',
    featured: false,
    text: 'What sets TubeMagic apart is its training data — built on insights from the most successful YouTube channels. It genuinely understands what makes content go viral, making my whole workflow at least 5x more efficient.',
  },
  {
    name: 'Pascio',
    role: '104K Followers',
    avatar: 'P',
    featured: false,
    text: 'TubeMagic is like having a YouTube toolbox on autopilot — it generates your next video idea and helps you plan out months of content in one sitting. Titles, tags, descriptions — it covers everything. Video content isn\'t slowing down, and neither is this tool.',
  },
  {
    name: 'Drew',
    role: 'YouTube Growth Specialist',
    avatar: 'D',
    featured: false,
    text: 'I\'ve tested a lot of AI tools for YouTube titles, descriptions, and tags. TubeMagic consistently outperforms what I could come up with on my own — it\'s set a new benchmark for what AI-generated metadata can look like.',
  },
  {
    name: 'Alejandro Jimenez',
    role: 'CEO, YouTubersFactory',
    avatar: 'AJ',
    featured: false,
    text: 'Massive shoutout to TubeMagic. If you\'re a creator looking to level up your content production with AI, this is the tool to add to your workflow — it delivers real results, not just hype.',
  },
  {
    name: 'Debt Busters',
    role: '22K Subscribers',
    avatar: 'DB',
    featured: false,
    text: 'TubeMagic has completely changed how we approach YouTube SEO. The strategies it offers rival premium tools like VidIQ, and our video rankings and channel visibility have improved significantly since we switched.',
  },
  {
    name: 'Priyam Raj',
    role: 'TubeMagic Founder',
    avatar: 'PR',
    featured: false,
    text: 'My vision for TubeMagic was simple: let creators focus on making great content without getting bogged down in optimization. Seeing creators grow their channels with it every day makes everything worthwhile.',
  },
];

const stats = [
  { value: '50,000+', label: 'Active Creators' },
  { value: '1B+', label: 'Views Generated' },
  { value: '4.8★', label: 'Average Rating' },
  { value: '12', label: 'Max Channels / Account' },
];

export default function TestimonialsPage() {
  const featured = testimonials.filter((t) => t.featured);
  const rest = testimonials.filter((t) => !t.featured);

  return (
    <>
      {/* Hero */}
      <section
        className="mesh-gradient-dark"
        style={{ padding: '100px 24px 72px', color: 'var(--text-on-dark)', textAlign: 'center' }}
      >
        <div className="max-w-3xl mx-auto">
          <div
            className="glow-tag"
            style={{ marginBottom: 24, color: 'rgba(255,245,235,0.9)', background: 'rgba(255,107,0,0.18)', border: '1px solid rgba(255,107,0,0.4)' }}
          >
            <Star size={13} fill="currentColor" /> Real Reviews · No Incentives
          </div>
          <h1
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.04em', marginBottom: 20 }}
          >
            Creators Who Use TubeMagic Every Day
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, maxWidth: 560, margin: '0 auto' }}>
            From solo creators to YouTube operators managing 12+ channels — here&apos;s what real users say about TubeMagic.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ background: 'var(--brand-red)', padding: '32px 24px' }}>
        <div
          className="max-w-4xl mx-auto"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 24, textAlign: 'center' }}
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: '#fff', letterSpacing: '-0.04em' }}>{s.value}</div>
              <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.65)', marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured testimonials */}
      <section style={{ padding: '80px 24px', background: 'var(--bg-primary)' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 8 }}>Featured Reviews</h2>
          <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: 48 }}>
            From creators with millions of subscribers and billions of views.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 28 }}>
            {featured.map((t) => (
              <div
                key={t.name}
                className="glass-card"
                style={{ padding: '36px', borderTop: '3px solid var(--brand-red)', position: 'relative' }}
              >
                <Quote
                  size={40}
                  color="var(--brand-red)"
                  style={{ opacity: 0.12, position: 'absolute', top: 20, right: 20 }}
                />
                <div style={{ display: 'flex', gap: 4, marginBottom: 18 }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#FACC15" color="#FACC15" />)}
                </div>
                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.75, fontStyle: 'italic', marginBottom: 24 }}>
                  &quot;{t.text}&quot;
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div
                    style={{
                      width: 48, height: 48, borderRadius: '50%',
                      background: 'var(--brand-red)', color: '#fff',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontWeight: 800, fontSize: '0.85rem', flexShrink: 0,
                    }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)' }}>{t.name}</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: 2 }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All other testimonials */}
      <section style={{ padding: '0 24px 80px', background: 'var(--bg-primary)' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 8 }}>More Creator Reviews</h2>
          <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: 48 }}>
            YouTubers across niches, audience sizes, and content strategies.
          </p>
          <div className="bento-grid">
            {rest.map((t) => (
              <div key={t.name} className="glass-card" style={{ padding: 28 }}>
                <div style={{ display: 'flex', gap: 3, marginBottom: 14 }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={15} fill="#FACC15" color="#FACC15" />)}
                </div>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.7, fontStyle: 'italic', marginBottom: 18 }}>
                  &quot;{t.text}&quot;
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div
                    style={{
                      width: 40, height: 40, borderRadius: '50%',
                      background: 'var(--brand-red-dark)', color: '#fff',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontWeight: 700, fontSize: '0.78rem', flexShrink: 0,
                    }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)' }}>{t.name}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: 2 }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{ padding: '80px 24px', background: 'var(--brand-red-dark)', color: 'var(--text-on-dark)', textAlign: 'center' }}
      >
        <div className="max-w-2xl mx-auto">
          <h2
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 16 }}
          >
            Join 50,000+ Creators Using TubeMagic
          </h2>
          <p style={{ color: 'rgba(245,245,220,0.65)', lineHeight: 1.75, marginBottom: 32 }}>
            Start for $47/month with every tool included and a 30-day money-back guarantee.
          </p>
          <a
            href="/get-tubemagic"
            className="btn-primary"
            style={{
              padding: '16px 44px', fontSize: '1.05rem', fontWeight: 800,
              background: 'var(--accent-orange)', display: 'inline-flex', alignItems: 'center', gap: 8,
            }}
          >
            Get TubeMagic Now <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </>
  );
}
