'use client';

import { useState } from 'react';
import {
  PenLine, Lightbulb, Rocket, Palette, Search,
  Zap, Check, Star, ArrowRight, ChevronDown,
  Shield, Users, Sparkles,
} from 'lucide-react';

const AFFILIATE_LINK = '/get-tubemagic';

/* ===== DATA ===== */

const iconMap = {
  pen: PenLine,
  bulb: Lightbulb,
  rocket: Rocket,
  palette: Palette,
  search: Search,
};

const features = [
  {
    iconKey: 'pen' as const,
    title: 'AI Script Writer',
    desc: 'Generate retention-optimized scripts with hooks, open loops, and CTAs. Powered by Claude 4.0 and GPT-4o with proprietary viral training data.',
    tag: 'Most Popular',
    wide: true,
  },
  {
    iconKey: 'bulb' as const,
    title: 'Video Idea Generator',
    desc: 'Discover high-potential topics using niche trending data and competitor analysis. Find outlier opportunities before anyone else.',
    tag: null,
    wide: false,
  },
  {
    iconKey: 'rocket' as const,
    title: 'Warp Upload Optimizer',
    desc: 'Auto-generate search-optimized titles, tags, descriptions, and timestamps. Upload faster with metadata that ranks.',
    tag: null,
    wide: false,
  },
  {
    iconKey: 'palette' as const,
    title: 'AI Thumbnail Generator',
    desc: 'Create scroll-stopping thumbnails engineered for maximum click-through rate with AI-powered visual design.',
    tag: null,
    wide: false,
  },
  {
    iconKey: 'search' as const,
    title: 'Video Research Tool',
    desc: 'Deep competitive intelligence ,filter YouTube by views, upload date, and duration. Discover what works in any niche.',
    tag: null,
    wide: true,
  },
];

const stats = [
  { value: '50,000+', label: 'Creators Worldwide' },
  { value: '5 min', label: 'Per Video (vs 5 hours)' },
  { value: '95+', label: 'Languages Supported' },
  { value: '4.8★', label: 'Average Rating' },
];

const steps = [
  {
    num: '01',
    title: 'Choose Your Niche',
    desc: 'Enter your channel link or topic. TubeMagic analyzes trends and surfaces the highest-potential content angles for your audience.',
  },
  {
    num: '02',
    title: 'Generate & Refine',
    desc: 'Pick from AI-generated scripts, titles, and thumbnails. Choose between Claude 4.0 or GPT-4o for different creative tones.',
  },
  {
    num: '03',
    title: 'Optimize & Upload',
    desc: 'Warp Upload auto-generates SEO metadata. One click and your video is live with perfect titles, tags, and descriptions.',
  },
];

const comparisons = [
  { feature: 'AI Script Writer (Retention-Trained)', tubemagic: true, vidiq: false, tubebuddy: false },
  { feature: 'Video Idea Generator', tubemagic: true, vidiq: true, tubebuddy: true },
  { feature: 'SEO Metadata Optimizer', tubemagic: true, vidiq: true, tubebuddy: true },
  { feature: 'Thumbnail AI Generator', tubemagic: true, vidiq: false, tubebuddy: false },
  { feature: 'Competitor Research Tool', tubemagic: true, vidiq: true, tubebuddy: true },
  { feature: '95+ Language Support', tubemagic: true, vidiq: false, tubebuddy: false },
  { feature: 'Trained on Viral Retention Data', tubemagic: true, vidiq: false, tubebuddy: false },
  { feature: 'All-in-One Price ($47/mo)', tubemagic: true, vidiq: false, tubebuddy: false },
];

const faqs = [
  {
    q: 'Is TubeMagic worth the cost?',
    a: 'TubeMagic replaces multiple YouTube tools at $47/month ,covering script writing, idea generation, thumbnail creation, SEO optimization, and competitor research. Most creators save 4+ hours per video, making it one of the highest-ROI investments for YouTube growth.',
  },
  {
    q: 'Does TubeMagic offer a free trial?',
    a: 'TubeMagic offers a risk-free 30-day money-back guarantee. You can explore all features, generate unlimited scripts and ideas, and if it doesn\'t transform your workflow, get a full refund ,no questions asked.',
  },
  {
    q: 'How does TubeMagic compare to ChatGPT for YouTube scripts?',
    a: 'Unlike generic ChatGPT, TubeMagic\'s script engine is trained on proprietary viral retention data from elite YouTube scriptwriters. It implements curiosity hooks, open loops, and pattern disruptions that are specifically designed to maximize viewer watch time.',
  },
  {
    q: 'Can I use TubeMagic for faceless YouTube channels?',
    a: 'Absolutely. TubeMagic is the preferred tool for faceless channel operators managing 10-12 channels simultaneously. It generates complete scripts, metadata, and thumbnails without requiring any on-camera presence ,a true business-in-a-box solution.',
  },
  {
    q: 'What AI models does TubeMagic use?',
    a: 'TubeMagic leverages multiple LLM architectures including Claude 4.0 and GPT-4o. Claude 4.0 excels at natural, human-like narrative flows while GPT-4o provides strong analytical and structural capabilities. You choose which fits your style.',
  },
];

const testimonials = [
  {
    name: 'Matt Par',
    role: '12+ YouTube Channels · 1B+ Views',
    text: 'Running 12+ YouTube channels means I need tools that actually work at scale. TubeMagic is my go-to for idea generation and the script templates are an absolute game-changer — I\'ve invested over 6 figures into building and improving it.',
    avatar: 'MP',
  },
  {
    name: 'Pascio',
    role: '104K Followers',
    text: 'TubeMagic is like having a YouTube toolbox on autopilot — it generates your next video idea and helps you plan out months of content in one sitting. Titles, tags, descriptions — it covers everything. Video content isn\'t slowing down, and neither is this tool.',
    avatar: 'P',
  },
  {
    name: 'AI Guy',
    role: '182K+ YouTube Subscribers',
    text: 'TubeMagic has been fantastic for generating scripts — I use it while producing AI-driven historical films. The keyword suggestions are eerily accurate and have genuinely pushed my videos higher in search rankings.',
    avatar: 'AG',
  },
  {
    name: 'Randolph',
    role: '1.2M YouTube Subscribers',
    text: 'TubeMagic just works, and that\'s what matters at scale. I rely on it daily for video tags, community posts, and descriptions across multiple channels — it makes managing everything far less overwhelming.',
    avatar: 'R',
  },
  {
    name: 'Drew',
    role: 'YouTube Growth Specialist',
    text: 'I\'ve tested a lot of AI tools for YouTube titles, descriptions, and tags. TubeMagic consistently outperforms what I could come up with on my own — it\'s set a new benchmark for what AI-generated metadata can look like.',
    avatar: 'D',
  },
  {
    name: 'Alejandro Jimenez',
    role: 'CEO, YouTubersFactory',
    text: 'Massive shoutout to TubeMagic. If you\'re a creator looking to level up your content production with AI, this is the tool to add to your workflow — it delivers real results, not just hype.',
    avatar: 'AJ',
  },
  {
    name: 'Priyam Raj',
    role: 'TubeMagic Founder',
    text: 'My vision for TubeMagic was simple: let creators focus on making great content without getting bogged down in optimization. Seeing creators grow their channels with it every day makes everything worthwhile.',
    avatar: 'PR',
  },
  {
    name: 'Barsee',
    role: '257K Followers',
    text: 'What sets TubeMagic apart is its training data — built on insights from the most successful YouTube channels. It genuinely understands what makes content go viral, making my whole workflow at least 5x more efficient.',
    avatar: 'B',
  },
  {
    name: 'Debt Busters',
    role: '22K Subscribers',
    text: 'TubeMagic has completely changed how we approach YouTube SEO. The strategies it offers rival premium tools like VidIQ, and our video rankings and channel visibility have improved significantly since we switched.',
    avatar: 'DB',
  },
];

const pricingFeatures = [
  'AI Script Writer (Claude 4.0 + GPT-4o)',
  'Video Idea Generator',
  'Warp Upload Metadata Optimizer',
  'AI Thumbnail Generator',
  'Video Research & Competitor Analysis',
  '95+ Language Support',
  'Unlimited Script Generations',
  'Retention-Based Training Data',
  'Multi-Channel Management',
  'Priority Support',
];

/* ===== COMPONENT ===== */

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="mesh-gradient" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
        <div className="section" style={{ paddingTop: 60, paddingBottom: 60, width: '100%' }}>
          <div className="flex flex-col items-center text-center gap-8">
            {/* Tag */}
            <div className="glow-tag animate-fade-in">
              <Zap size={14} />
              AI-Powered YouTube Automation
            </div>

            {/* Headline */}
            <h1
              className="animate-fade-in-up"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.2rem)',
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: '-0.04em',
                maxWidth: 800,
                color: 'var(--text-primary)',
              }}
            >
              Create Better YouTube Videos in{' '}
              <span className="accent-underline" style={{ color: 'var(--brand-red)' }}>
                5 Minutes
              </span>
              , Not 5 Hours
            </h1>

            {/* Subtitle */}
            <p
              className="animate-fade-in-up delay-200"
              style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
                color: 'var(--text-secondary)',
                maxWidth: 620,
                lineHeight: 1.7,
              }}
            >
              TubeMagic is the best YouTube automation software that generates scripts, ideas,
              thumbnails, and SEO-optimized metadata ,all powered by AI trained on viral retention data.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up delay-300">
              <a
                href={AFFILIATE_LINK}
                
                
                className="btn-primary animate-pulse-glow"
                style={{ padding: '16px 40px', fontSize: '1.05rem' }}
              >
                Start Creating Free
                <ArrowRight size={18} />
              </a>
              <a href="#how-it-works" className="btn-secondary" style={{ padding: '16px 40px', fontSize: '1.05rem' }}>
                See How It Works
              </a>
            </div>

            {/* Social Proof */}
            <div
              className="animate-fade-in-up delay-400"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                marginTop: 8,
                color: 'var(--text-muted)',
                fontSize: '0.9rem',
              }}
            >
              <div style={{ display: 'flex' }}>
                {['#E8B4B8', '#B4D8E7', '#C4E8B4', '#E8D4B4'].map((bg, i) => (
                  <div
                    key={i}
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: '50%',
                      background: bg,
                      border: '2px solid var(--bg-primary)',
                      marginLeft: i > 0 ? -8 : 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.65rem',
                      fontWeight: 700,
                    }}
                  >
                    {['S', 'K', 'R', 'M'][i]}
                  </div>
                ))}
              </div>
              <span>Trusted by <strong style={{ color: 'var(--brand-red)' }}>50,000+</strong> creators worldwide</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section style={{ background: 'var(--brand-red)', padding: '40px 24px' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                style={{
                  fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                  fontWeight: 900,
                  color: '#FFFFFF',
                  letterSpacing: '-0.02em',
                }}
              >
                {stat.value}
              </div>
              <div style={{ color: 'rgba(245,245,220,0.7)', fontSize: '0.9rem', fontWeight: 500 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FEATURES BENTO GRID ===== */}
      <section style={{ padding: '96px 24px', background: 'var(--bg-primary)' }} id="features">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="glow-tag" style={{ marginBottom: 16 }}>
              <Zap size={14} />
              The Complete Tube AI System
            </div>
            <h2 className="section-title" style={{ marginBottom: 12 }}>
              Everything You Need to <span className="accent-underline">Dominate</span> YouTube
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Five powerful AI tools working together to transform your content workflow from hours of manual work to minutes of automated excellence.
            </p>
          </div>

          <div className="bento-grid">
            {features.map((f) => {
              const Icon = iconMap[f.iconKey];
              return (
              <div
                key={f.title}
                className={`glass-card${f.wide ? ' bento-wide' : ''}`}
                style={{ padding: '28px', display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: 20 }}>
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 16,
                      background: 'var(--accent-orange-dim)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--brand-red)',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={26} />
                  </div>
                  {f.tag && (
                    <span
                      style={{
                        background: 'var(--accent-orange-dim)',
                        color: 'var(--brand-red)',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        padding: '4px 12px',
                        borderRadius: 999,
                        border: '1px solid rgba(255, 107, 0, 0.2)',
                      }}
                    >
                      {f.tag}
                    </span>
                  )}
                </div>
                <h3
                  style={{
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    marginBottom: 8,
                    color: 'var(--text-primary)',
                  }}
                >
                  {f.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem', margin: 0 }}>
                  {f.desc}
                </p>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section
        id="how-it-works"
        style={{
          padding: '96px 24px',
          background: 'var(--brand-red-dark)',
          color: 'var(--text-on-dark)',
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                marginBottom: 12,
              }}
            >
              How TubeMagic Works
            </h2>
            <p style={{ color: 'rgba(245,245,220,0.6)', fontSize: '1.15rem', maxWidth: 500, margin: '0 auto' }}>
              From idea to upload in three simple steps. No learning curve, no complexity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div
                key={step.num}
                style={{
                  padding: 32,
                  borderRadius: 'var(--radius-lg)',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  transition: 'all 0.3s',
                }}
              >
                <div
                  style={{
                    fontSize: '3rem',
                    fontWeight: 900,
                    color: '#FFFFFF',
                    opacity: 0.15,
                    lineHeight: 1,
                    marginBottom: 16,
                  }}
                >
                  {step.num}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 8 }}>{step.title}</h3>
                <p style={{ color: 'rgba(245,245,220,0.6)', lineHeight: 1.7, margin: 0, fontSize: '0.95rem' }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: 48 }}>
            <a
              href={AFFILIATE_LINK}
              
              
              className="btn-primary"
              style={{
                padding: '16px 40px',
                fontSize: '1.05rem',
                background: '#FFFFFF',
                color: 'var(--brand-red-dark)',
              }}
            >
              Get Started Now ,It&apos;s Free
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ===== COMPARISON TABLE ===== */}
      <section style={{ padding: '96px 24px', background: 'var(--bg-primary)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title" style={{ marginBottom: 12 }}>
              Why Creators Choose TubeMagic Over the Rest
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              See how TubeMagic compares to VidIQ and TubeBuddy ,the difference is in the AI.
            </p>
          </div>

          <div className="glass-card" style={{ overflow: 'hidden', padding: 0 }}>
            <div style={{ overflowX: 'auto' }}>
              <table className="compare-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th style={{ textAlign: 'center' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                        <Sparkles size={15} /> TubeMagic
                      </span>
                    </th>
                    <th style={{ textAlign: 'center' }}>VidIQ</th>
                    <th style={{ textAlign: 'center' }}>TubeBuddy</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((row) => (
                    <tr key={row.feature}>
                      <td style={{ fontWeight: 500 }}>{row.feature}</td>
                      <td style={{ textAlign: 'center' }}>
                        {row.tubemagic
                          ? <span style={{ display: 'inline-flex', justifyContent: 'center' }}><Check size={18} color="var(--brand-red)" strokeWidth={2.5} /></span>
                          : <span style={{ opacity: 0.3 }}>—</span>}
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        {row.vidiq
                          ? <span style={{ display: 'inline-flex', justifyContent: 'center' }}><Check size={18} color="var(--brand-red)" strokeWidth={2.5} /></span>
                          : <span style={{ opacity: 0.3 }}>—</span>}
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        {row.tubebuddy
                          ? <span style={{ display: 'inline-flex', justifyContent: 'center' }}><Check size={18} color="var(--brand-red)" strokeWidth={2.5} /></span>
                          : <span style={{ opacity: 0.3 }}>—</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center" style={{ marginTop: 32 }}>
            <a
              href="/compare"
              style={{
                color: 'var(--brand-red)',
                fontWeight: 600,
                fontSize: '1rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              See full comparison <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section style={{ padding: '96px 24px', background: 'linear-gradient(180deg, var(--bg-primary) 0%, #EDE8D0 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title" style={{ marginBottom: 12 }}>
              Trusted by Creators with Millions of Subscribers
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              From solo creators to 8-figure YouTube operators — here&apos;s what real users say about TubeMagic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="glass-card" style={{ padding: 32 }}>
                <div style={{ display: 'flex', gap: 4, marginBottom: 16 }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="#FACC15" color="#FACC15" />
                  ))}
                </div>
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                    fontSize: '0.95rem',
                    marginBottom: 20,
                    fontStyle: 'italic',
                  }}
                >
                  &quot;{t.text}&quot;
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: '50%',
                      background: 'var(--brand-red)',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '0.8rem',
                      flexShrink: 0,
                    }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>{t.name}</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.82rem' }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <a
              href="/testimonials"
              className="btn-secondary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 28px' }}
            >
              View all testimonials <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section id="pricing" style={{ padding: '96px 24px', background: 'var(--brand-red-dark)', color: 'var(--text-on-dark)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div
              className="glow-tag"
              style={{ marginBottom: 16, color: 'rgba(255,245,235,0.9)', background: 'rgba(255,107,0,0.18)', border: '1px solid rgba(255,107,0,0.4)' }}
            >
              <Shield size={14} />
              30-Day Money-Back Guarantee
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.03em', marginBottom: 12 }}>
              Simple, All-in-One Pricing
            </h2>
            <p style={{ color: 'rgba(245,245,220,0.65)', fontSize: '1.15rem', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
              One plan. Every tool. No add-ons, no hidden fees ,just everything you need to scale your YouTube channel.
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '2px solid rgba(255,107,0,0.45)',
                borderRadius: 'var(--radius-xl)',
                padding: '48px',
                maxWidth: 540,
                width: '100%',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute', top: -16, left: '50%', transform: 'translateX(-50%)',
                  background: 'var(--accent-orange)', color: '#fff', fontWeight: 700,
                  fontSize: '0.78rem', padding: '5px 20px', borderRadius: 999,
                  whiteSpace: 'nowrap', letterSpacing: '0.06em', textTransform: 'uppercase',
                }}
              >
                Most Popular
              </div>
              <div style={{ textAlign: 'center', marginBottom: 32 }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: 10 }}>TubeMagic Pro</h3>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 4 }}>
                  <span style={{ fontSize: '3.5rem', fontWeight: 900, letterSpacing: '-0.04em' }}>$47</span>
                  <span style={{ fontSize: '1.1rem', color: 'rgba(245,245,220,0.5)' }}>/month</span>
                </div>
                <p style={{ color: 'rgba(245,245,220,0.45)', fontSize: '0.85rem', marginTop: 4 }}>Billed monthly · Cancel anytime</p>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 36px 0', display: 'flex', flexDirection: 'column', gap: 13 }}>
                {pricingFeatures.map((feat) => (
                  <li key={feat} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: '0.95rem' }}>
                    <span style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(255,107,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Check size={13} color="var(--accent-orange)" strokeWidth={3} />
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>
              <a
                href={AFFILIATE_LINK}
                
                
                className="btn-primary"
                style={{ width: '100%', padding: '16px 32px', fontSize: '1.05rem', background: 'var(--accent-orange)', justifyContent: 'center' }}
              >
                Start 30-Day Free Trial
                <ArrowRight size={18} />
              </a>
              <p style={{ textAlign: 'center', marginTop: 14, fontSize: '0.82rem', color: 'rgba(245,245,220,0.4)' }}>
                No credit card required · Full refund if unsatisfied
              </p>
              <div style={{ marginTop: 24, padding: '12px 16px', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.85rem', color: 'rgba(245,245,220,0.5)' }}>
                <Users size={16} style={{ flexShrink: 0 }} />
                Earn 50% lifetime commissions via the{' '}
                <a href="/affiliate" style={{ color: 'var(--accent-orange)', fontWeight: 600 }}>Affiliate Program</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section style={{ padding: '96px 24px', background: 'var(--bg-primary)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title" style={{ marginBottom: 12 }}>
              Frequently Asked Questions
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Everything you need to know about TubeMagic and YouTube automation.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item">
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  {faq.q}
                  <ChevronDown
                    size={20}
                    style={{
                      transition: 'transform 0.25s',
                      transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)',
                      flexShrink: 0,
                    }}
                  />
                </button>
                {openFaq === i && (
                  <div className="faq-answer animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section
        className="mesh-gradient-dark"
        style={{
          padding: '96px 24px',
          textAlign: 'center',
          color: 'var(--text-on-dark)',
        }}
      >
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-8">
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 900,
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
            }}
          >
            Ready to Create YouTube Videos{' '}
            <span style={{ color: 'var(--accent-orange)' }}>10x Faster</span>?
          </h2>
          <p
            style={{
              color: 'rgba(245,245,220,0.65)',
              fontSize: '1.15rem',
              maxWidth: 520,
              lineHeight: 1.7,
            }}
          >
            Join 50,000+ creators who replaced hours of manual work with TubeMagic.
            Start for free with a 30-day money-back guarantee.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={AFFILIATE_LINK}
              
              
              className="btn-primary animate-pulse-glow"
              style={{
                padding: '18px 48px',
                fontSize: '1.1rem',
                background: '#FFFFFF',
                color: 'var(--brand-red-dark)',
              }}
            >
              Try TubeMagic Free Today
              <ArrowRight size={18} />
            </a>
          </div>
          <p style={{ color: 'rgba(245,245,220,0.4)', fontSize: '0.85rem' }}>
            No credit card required • 30-day money-back guarantee • Cancel anytime
          </p>
        </div>
      </section>
    </>
  );
}
