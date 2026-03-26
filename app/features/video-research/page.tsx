import type { Metadata } from 'next';
import { Search, BarChart2, Filter, Eye, TrendingUp, Target, Check, ArrowRight } from 'lucide-react';

const AFFILIATE_LINK = '/get-tubemagic';

export const metadata: Metadata = {
  title: 'YouTube Video Research Tool | TubeMagic',
  description: 'Deep competitive intelligence for YouTube. Filter videos by views, upload date, and duration to discover what works in any niche.',
};

const researchFeatures = [
  { icon: Filter, title: 'Advanced Video Filtering', desc: 'Filter the entire YouTube database by view count, upload date, video duration, engagement rate, and niche keyword ,all in one interface.' },
  { icon: BarChart2, title: 'Performance Benchmarking', desc: 'Compare any video’s performance against its channel average to identify true outliers ,the signal that a topic has breakout demand.' },
  { icon: Eye, title: 'Competitor Channel Analysis', desc: 'Enter any competitor’s channel URL to see their most-viewed videos, top-performing formats, and content themes driving their growth.' },
  { icon: TrendingUp, title: 'Trend Velocity Tracking', desc: 'Identify topics gaining momentum before they peak. Track search trend curves and get ahead of viral waves in your niche week over week.' },
  { icon: Target, title: 'Content Gap Detection', desc: 'Find high-demand topics where search volume is strong but existing content quality is low ,the perfect opportunity to rank fast with a great video.' },
  { icon: Search, title: 'Multi-Niche Dashboard', desc: 'Monitor 10+ niches simultaneously. Perfect for agencies and multi-channel operators who need competitive intel across a diverse content portfolio.' },
];

export default function Page() {
  return (
    <>
      <section className="mesh-gradient-dark" style={{ padding: '96px 24px 80px', color: 'var(--text-on-dark)', textAlign: 'center' }}>
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="glow-tag" style={{ marginBottom: 20, color: 'rgba(255,245,235,0.9)', background: 'rgba(255,107,0,0.18)', border: '1px solid rgba(255,107,0,0.4)' }}>
            <Search size={14} /> Features
          </div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.04em', marginBottom: 20 }}>
            Video Research Tool
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.75)', maxWidth: '620px', margin: '0 auto 36px', lineHeight: 1.7 }}>
            Stop guessing what works. TubeMagic’s research tool gives you deep competitive intelligence ,filter, benchmark, and discover opportunities across any YouTube niche.
          </p>
          <a href={AFFILIATE_LINK}   className="btn-primary" style={{ padding: '16px 40px', fontSize: '1.05rem', background: 'var(--accent-orange)' }}>
            Start Researching Free <ArrowRight size={18} />
          </a>
          <p style={{ marginTop: 14, fontSize: '0.85rem', color: 'rgba(255,255,255,0.35)' }}>30-day money-back guarantee · No credit card required</p>
        </div>
      </section>

      <section style={{ padding: '96px 24px', background: 'var(--bg-primary)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center" style={{ marginBottom: 60 }}>
            <h2 className="section-title" style={{ marginBottom: 12 }}>Competitive Intelligence That Drives Results</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>The creators who win aren’t just creative ,they’re informed. TubeMagic gives you the data edge your competitors don’t have.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchFeatures.map((feat) => (
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
        <div className="max-w-4xl mx-auto">
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 12, textAlign: 'center' }}>The Research-to-Publishing Workflow</h2>
          <p style={{ color: 'rgba(245,245,220,0.6)', textAlign: 'center', marginBottom: 48, fontSize: '1.05rem' }}>From zero to a fully researched content plan in under 20 minutes.</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[['Find','Search your niche with advanced filters to surface high-view, low-competition content opportunities.'],['Analyze','Benchmark performance data. Identify what format, length, and style is driving the most views.'],['Ideate','Feed research insights directly into the Video Idea Generator to build a data-backed content calendar.'],['Execute','Hand the proven topic to the AI Script Writer and Warp Upload for a complete production pipeline.']].map(([title, desc], i) => (
              <div key={title} style={{ padding: '24px', borderRadius: 'var(--radius-lg)', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontSize: '2rem', fontWeight: 900, color: '#fff', opacity: 0.12, lineHeight: 1, marginBottom: 10 }}>0{i + 1}</div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: 6 }}>{title}</h3>
                <p style={{ color: 'rgba(245,245,220,0.6)', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mesh-gradient-dark" style={{ padding: '80px 24px', textAlign: 'center', color: 'var(--text-on-dark)' }}>
        <div className="max-w-2xl mx-auto">
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: 16 }}>Outresearch Your Competition</h2>
          <p style={{ color: 'rgba(245,245,220,0.65)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: 36 }}>The Video Research Tool is fully included in TubeMagic Pro at $47/month with no data limits.</p>
          <a href={AFFILIATE_LINK}   className="btn-primary" style={{ padding: '16px 44px', fontSize: '1.05rem', background: '#fff', color: 'var(--brand-red-dark)' }}>
            Start Free ,30-Day Guarantee <ArrowRight size={18} />
          </a>
          <p style={{ marginTop: 14, fontSize: '0.82rem', color: 'rgba(255,255,255,0.3)' }}>* Affiliate link. Not an official Google or YouTube service.</p>
        </div>
      </section>
    </>
  );
}


