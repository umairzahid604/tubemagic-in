import type { Metadata } from 'next';
import { Lightbulb, TrendingUp, Target, Search, BarChart2, Globe, Check, ArrowRight } from 'lucide-react';

const AFFILIATE_LINK = '/get-tubemagic';

export const metadata: Metadata = {
  title: 'YouTube Video Idea Generator: Complete Feature Guide',
  description:
    'Discover high-potential, trending YouTube video ideas before your competitors. TubeMagic\'s AI idea generator analyzes your niche and surfaces winning outlier topics.',
};

const ideaFeatures = [
  {
    icon: TrendingUp,
    title: 'Outlier Topic Detection',
    desc: 'Find videos that are dramatically outperforming the channel average ,the "outliers" that signal an underserved topic with massive organic demand.',
  },
  {
    icon: Target,
    title: 'Niche-Specific Research',
    desc: 'Enter your channel URL and TubeMagic analyzes your existing content, audience, and niche competitors to surface ideas perfectly aligned with your brand.',
  },
  {
    icon: Search,
    title: 'Search vs. Recommendation Balance',
    desc: 'Understand which ideas will perform via search (evergreen) vs. YouTube recommendations (viral). Balance both for steady growth and breakout moments.',
  },
  {
    icon: BarChart2,
    title: 'Competitor Intelligence',
    desc: "Analyze what's working for competing channels. Spot content gaps and high-RPM angles they're missing ,then create the definitive video on that topic.",
  },
  {
    icon: Globe,
    title: '95+ Language Support',
    desc: 'Generate ideas in Spanish, Hindi, Japanese, Arabic, and 90+ other languages. Expand globally or dominate your local market with AI-powered research.',
  },
  {
    icon: Lightbulb,
    title: 'High-CPM Niche Targeting',
    desc: 'Filter ideas by estimated RPM potential. Target finance, AI, and business niches where advertisers pay 3–10x more ,every view earning more revenue.',
  },
];

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="mesh-gradient-dark" style={{ padding: '96px 24px 80px', color: 'var(--text-on-dark)', textAlign: 'center' }}>
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="glow-tag" style={{ marginBottom: 20, color: 'rgba(255,245,235,0.9)', background: 'rgba(255,107,0,0.18)', border: '1px solid rgba(255,107,0,0.4)' }}>
            <Lightbulb size={14} /> Features
          </div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.04em', marginBottom: 20 }}>
            YouTube Video Idea Generator
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.75)', maxWidth: '620px', margin: '0 auto 36px', lineHeight: 1.7 }}>
            Never run out of content ideas again. TubeMagic surfaces high-potential, niche-specific video topics before your competitors discover them.
          </p>
          <a href={AFFILIATE_LINK}   className="btn-primary" style={{ padding: '16px 40px', fontSize: '1.05rem', background: 'var(--accent-orange)' }}>
            Generate Ideas Free <ArrowRight size={18} />
          </a>
          <p style={{ marginTop: 14, fontSize: '0.85rem', color: 'rgba(255,255,255,0.35)' }}>30-day money-back guarantee · No credit card required</p>
        </div>
      </section>

      {/* Core Features */}
      <section style={{ padding: '96px 24px', background: 'var(--bg-primary)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center" style={{ marginBottom: 60 }}>
            <h2 className="section-title" style={{ marginBottom: 12 }}>Find Ideas That Actually Get Views</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Most creators guess their next topic. TubeMagic analyzes data to tell you exactly what your audience wants to watch.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ideaFeatures.map((feat) => (
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

      {/* How it works */}
      <section style={{ padding: '80px 24px', background: 'var(--brand-red-dark)', color: 'var(--text-on-dark)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center" style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 12 }}>From No Ideas to 20 Winning Topics in Minutes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[['01','Connect Your Channel','Enter your YouTube channel URL or describe your niche. TubeMagic maps your content history and audience preferences instantly.'],['02','Analyze the Landscape','The AI scans competitors, trend data, and search volume across your niche ,identifying gaps and outlier opportunities.'],['03','Get Prioritized Ideas','Receive a ranked list of video ideas with estimated demand, competition level, and recommended format (search vs. viral).']].map(([num, title, desc]) => (
              <div key={num} style={{ padding: '28px', borderRadius: 'var(--radius-lg)', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontSize: '2.8rem', fontWeight: 900, color: '#fff', opacity: 0.15, lineHeight: 1, marginBottom: 14 }}>{num}</div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 8 }}>{title}</h3>
                <p style={{ color: 'rgba(245,245,220,0.6)', lineHeight: 1.7, margin: 0, fontSize: '0.91rem' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Profitable niches */}
      <section style={{ padding: '80px 24px', background: 'var(--bg-primary)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center" style={{ marginBottom: 40 }}>
            <h2 className="section-title" style={{ marginBottom: 12 }}>High-CPM Niches TubeMagic Specializes In</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>The idea generator is optimized for niches where creators earn the most per 1,000 views.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[['Finance & Business', '$18–40 RPM'], ['AI & Technology', '$15–35 RPM'], ['Health & Wellness', '$12–25 RPM'], ['Make Money Online', '$10–30 RPM'], ['Personal Development', '$8–20 RPM'], ['Software Reviews', '$14–28 RPM'], ['Real Estate', '$15–32 RPM'], ['Education', '$10–22 RPM']].map(([niche, rpm]) => (
              <div key={niche} className="glass-card" style={{ padding: '20px 16px', textAlign: 'center' }}>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: 4, color: 'var(--text-primary)' }}>{niche}</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--brand-red)', fontWeight: 600 }}>{rpm}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mesh-gradient-dark" style={{ padding: '80px 24px', textAlign: 'center', color: 'var(--text-on-dark)' }}>
        <div className="max-w-2xl mx-auto">
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: 16 }}>Never Guess a Topic Again</h2>
          <p style={{ color: 'rgba(245,245,220,0.65)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: 36 }}>Join 50,000+ creators using TubeMagic’s idea generator to consistently publish winning content.</p>
          <a href={AFFILIATE_LINK}   className="btn-primary" style={{ padding: '16px 44px', fontSize: '1.05rem', background: '#fff', color: 'var(--brand-red-dark)' }}>
            Start Free ,30-Day Guarantee <ArrowRight size={18} />
          </a>
          <p style={{ marginTop: 14, fontSize: '0.82rem', color: 'rgba(255,255,255,0.3)' }}>* Affiliate link. Not an official Google or YouTube service.</p>
        </div>
      </section>
    </>
  );
}
