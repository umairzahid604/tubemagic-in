import type { Metadata } from 'next';
import { DollarSign, Users, ArrowRight, Repeat, Shield, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'TubeMagic Affiliate Program Guide: Earn 50% Lifetime Commissions',
  description:
    'Earn 50% lifetime recurring commissions promoting TubeMagic, the AI YouTube automation tool. Join the affiliate program and get paid every month.',
};

const benefits = [
  { icon: DollarSign, title: '50% Lifetime Commission', desc: 'Earn 50% of the $47/month subscription on every referral, every month, for as long as they remain a customer.' },
  { icon: Repeat, title: 'Recurring Revenue', desc: 'Not a one-time payout ,passive income that compounds as your referral base grows.' },
  { icon: Users, title: 'High-Convert Audience', desc: 'Content creators, faceless channel operators, and YouTube educators are an evergreen, motivated audience.' },
  { icon: Shield, title: 'Trusted Platform', desc: 'TubeMagic is backed by Matt Par (4M+ YouTube subscribers). Promoting a reputable brand makes conversion straightforward.' },
];

const steps = [
  { number: '01', title: 'Join the Program', desc: 'Apply through the TubeMagic affiliate portal. Approval is typically fast for content creators and SEO affiliates.' },
  { number: '02', title: 'Get Your Unique Link', desc: 'You’ll receive a personalized affiliate tracking link. Place it in your YouTube descriptions, blog posts, email newsletters, or social media.' },
  { number: '03', title: 'Earn 50% Monthly', desc: 'Every customer who signs up through your link pays you 50% of $47 = $23.50/month, recurring, for the lifetime of their subscription.' },
];

export default function Page() {
  return (
    <>
      <section className="mesh-gradient-dark" style={{ padding: '96px 24px 80px', color: 'var(--text-on-dark)', textAlign: 'center' }}>
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="glow-tag" style={{ marginBottom: 20, color: 'rgba(255,245,235,0.9)', background: 'rgba(255,107,0,0.18)', border: '1px solid rgba(255,107,0,0.4)' }}>
            <DollarSign size={14} /> Affiliate Program
          </div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.04em', marginBottom: 20 }}>
            Earn 50% Lifetime Recurring
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.75)', maxWidth: '600px', margin: '0 auto 36px', lineHeight: 1.7 }}>
            Refer YouTube creators to TubeMagic and earn $23.50/month for every customer ,every month they stay subscribed. No caps, no expiry.
          </p>
          <a href="https://tubemagic.com/affiliates"  rel="noreferrer" className="btn-primary" style={{ padding: '16px 40px', fontSize: '1.05rem', background: 'var(--accent-orange)' }}>
            Join the Affiliate Program <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: 'var(--bg-primary)' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 12 }}>Why Promote TubeMagic?</h2>
          <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: 48 }}>One of the most generous affiliate programs in the creator tool space.</p>
          <div className="bento-grid">
            {benefits.map(({ icon: Icon, title, desc }) => (
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

      <section style={{ padding: '80px 24px', background: 'var(--brand-red-dark)', color: 'var(--text-on-dark)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 12, textAlign: 'center' }}>How It Works</h2>
          <p style={{ color: 'rgba(245,245,220,0.7)', textAlign: 'center', marginBottom: 40 }}>Three steps to start earning recurring commissions.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {steps.map((s) => (
              <div key={s.number} style={{ display: 'flex', gap: 24, alignItems: 'flex-start', padding: '24px 28px', borderRadius: 'var(--radius-lg)', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--accent-orange)', opacity: 0.7, lineHeight: 1, flexShrink: 0, minWidth: 36 }}>{s.number}</div>
                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: 8 }}>{s.title}</h3>
                  <p style={{ fontSize: '0.92rem', color: 'rgba(245,245,220,0.7)', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <a href="https://tubemagic.com/affiliates"  rel="noreferrer" className="btn-primary" style={{ padding: '16px 40px', background: 'var(--accent-orange)' }}>
              Apply to Affiliate Program <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section style={{ padding: '60px 24px', background: 'var(--bg-primary)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="glass-card" style={{ padding: '28px 32px' }}>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.75, margin: 0 }}>
              <strong>Affiliate Disclosure:</strong> tubemagic.in is an independent affiliate review site. The links on this page are affiliate links ,if you sign up through our link, we earn a commission at no additional cost to you. We only promote products we genuinely recommend based on hands-on testing and research.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

