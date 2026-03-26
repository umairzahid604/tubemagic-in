import type { Metadata } from 'next';
import Link from 'next/link';
import { Scale, Star, Trophy, ArrowRight, TrendingUp } from 'lucide-react';

const AFFILIATE_LINK = '/get-tubemagic';

export const metadata: Metadata = {
  title: 'TubeMagic vs Competitors | Compare YouTube AI Tools',
  description:
    'Compare TubeMagic vs VidIQ, TubeMagic vs TubeBuddy, and read the full 2026 TubeMagic review. See why creators are switching to the AI-first platform.',
};

const comparePages = [
  {
    href: '/compare/tubemagic-vs-vidiq',
    title: 'TubeMagic vs VidIQ',
    desc: 'VidIQ has strong historical data, but lacks TubeMagic\'s AI script engine and retention training. See a full feature-by-feature breakdown.',
    verdict: 'TubeMagic wins on AI scripting & automation',
    icon: Scale,
  },
  {
    href: '/compare/tubemagic-vs-tubebuddy',
    title: 'TubeMagic vs TubeBuddy',
    desc: "TubeBuddy excels at browser-based workflow tools, but it's built for manual optimization. TubeMagic automates the entire workflow end-to-end.",
    verdict: 'TubeMagic wins on automation depth & AI',
    icon: Trophy,
  },
  {
    href: '/compare/tubemagic-review',
    title: 'TubeMagic Review 2026',
    desc: 'An honest, in-depth review of TubeMagic. Pricing, features, pros, cons, and who it\'s actually best for ,with real user feedback.',
    verdict: 'Editor Rating: 4.8/5 ,Highly Recommended',
    icon: Star,
  },
];

const summaryTable = [
  { feature: 'AI Script Writer (Retention-Trained)', tubemagic: true, vidiq: false, tubebuddy: false },
  { feature: 'Video Idea Generator', tubemagic: true, vidiq: true, tubebuddy: true },
  { feature: 'Thumbnail AI Generator', tubemagic: true, vidiq: false, tubebuddy: false },
  { feature: 'Competitor Research', tubemagic: true, vidiq: true, tubebuddy: true },
  { feature: 'SEO Metadata Optimizer', tubemagic: true, vidiq: true, tubebuddy: true },
  { feature: '95+ Language Support', tubemagic: true, vidiq: false, tubebuddy: false },
  { feature: 'Trained on Viral Retention Data', tubemagic: true, vidiq: false, tubebuddy: false },
  { feature: 'Flat All-in-One Price', tubemagic: true, vidiq: false, tubebuddy: false },
];

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="mesh-gradient-dark" style={{ padding: '96px 24px 80px', color: 'var(--text-on-dark)', textAlign: 'center' }}>
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="glow-tag" style={{ marginBottom: 20, color: 'rgba(255,245,235,0.9)', background: 'rgba(255,107,0,0.18)', border: '1px solid rgba(255,107,0,0.4)' }}>
            <Scale size={14} /> Comparisons & Reviews
          </div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.04em', marginBottom: 20 }}>
            TubeMagic vs the Competition
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.75)', maxWidth: '640px', margin: '0 auto 36px', lineHeight: 1.7 }}>
            How does TubeMagic stack up against VidIQ and TubeBuddy? Read honest, data-driven comparisons to make the right choice for your YouTube workflow.
          </p>
          <a href={AFFILIATE_LINK}   className="btn-primary" style={{ padding: '16px 40px', fontSize: '1.05rem', background: 'var(--accent-orange)' }}>
            Try TubeMagic Free <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Compare cards */}
      <section style={{ padding: '96px 24px', background: 'var(--bg-primary)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center" style={{ marginBottom: 56 }}>
            <h2 className="section-title" style={{ marginBottom: 12 }}>Deep-Dive Comparisons</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>Each comparison covers features, pricing, use cases, and a final verdict based on real creator feedback.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {comparePages.map((page) => (
              <Link key={page.href} href={page.href} style={{ textDecoration: 'none' }}>
                <div className="glass-card" style={{ padding: '32px', height: '100%', display: 'flex', flexDirection: 'column', cursor: 'pointer' }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: 'var(--accent-orange-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-red)', marginBottom: 16 }}>
                    <page.icon size={24} />
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 10, color: 'var(--text-primary)' }}>{page.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.92rem', margin: '0 0 16px', flexGrow: 1 }}>{page.desc}</p>
                  <div style={{ fontSize: '0.82rem', color: 'var(--brand-red)', fontWeight: 600, padding: '8px 12px', background: 'var(--accent-orange-dim)', borderRadius: 8, marginBottom: 16 }}>
                    {page.verdict}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--brand-red)', fontWeight: 600, fontSize: '0.88rem' }}>
                    Read comparison <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick summary table */}
      <section style={{ padding: '80px 24px', background: 'var(--brand-red-dark)', color: 'var(--text-on-dark)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center" style={{ marginBottom: 40 }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 12 }}>Feature Summary at a Glance</h2>
          </div>
          <div className="glass-card" style={{ overflow: 'hidden', padding: 0, background: 'rgba(255,255,255,0.06)' }}>
            <div style={{ overflowX: 'auto' }}>
              <table className="compare-table" style={{ color: 'var(--text-on-dark)' }}>
                <thead>
                  <tr>
                    <th style={{ background: 'rgba(255,255,255,0.04)' }}>Feature</th>
                    <th style={{ textAlign: 'center', background: 'rgba(255,255,255,0.04)' }}>TubeMagic</th>
                    <th style={{ textAlign: 'center', background: 'rgba(255,255,255,0.04)' }}>VidIQ</th>
                    <th style={{ textAlign: 'center', background: 'rgba(255,255,255,0.04)' }}>TubeBuddy</th>
                  </tr>
                </thead>
                <tbody>
                  {summaryTable.map((row) => (
                    <tr key={row.feature} style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                      <td style={{ fontWeight: 500 }}>{row.feature}</td>
                      <td style={{ textAlign: 'center', color: row.tubemagic ? 'var(--accent-orange)' : 'rgba(255,255,255,0.25)', fontWeight: 700 }}>{row.tubemagic ? '✓' : '—'}</td>
                      <td style={{ textAlign: 'center', color: row.vidiq ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.25)', fontWeight: 600 }}>{row.vidiq ? '✓' : '—'}</td>
                      <td style={{ textAlign: 'center', color: row.tubebuddy ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.25)', fontWeight: 600 }}>{row.tubebuddy ? '✓' : '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mesh-gradient-dark" style={{ padding: '80px 24px', textAlign: 'center', color: 'var(--text-on-dark)' }}>
        <div className="max-w-2xl mx-auto">
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: 16 }}>Ready to Make the Switch?</h2>
          <p style={{ color: 'rgba(245,245,220,0.65)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: 36 }}>Try TubeMagic risk-free for 30 days. If it doesn't outperform your current tools, get a full refund.</p>
          <a href={AFFILIATE_LINK}   className="btn-primary" style={{ padding: '16px 44px', fontSize: '1.05rem', background: '#fff', color: 'var(--brand-red-dark)' }}>
            Start Free ,30-Day Guarantee <ArrowRight size={18} />
          </a>
          <p style={{ marginTop: 14, fontSize: '0.82rem', color: 'rgba(255,255,255,0.3)' }}>* Affiliate link. Not an official Google or YouTube service.</p>
        </div>
      </section>
    </>
  );
}
