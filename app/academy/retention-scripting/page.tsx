import type { Metadata } from 'next';
import { PenLine, ArrowRight, Zap, Eye, MessageSquare, TrendingUp } from 'lucide-react';

const AFFILIATE_LINK = '/get-tubemagic';

export const metadata: Metadata = {
  title: 'YouTube Retention Scripting Guide 2026 | Hooks, Open Loops & CTAs',
  description:
    'Learn how to write YouTube scripts that hold viewer attention for longer, increase Average View Duration, and trigger algorithm recommendations.',
};

const hookTypes = [
  { title: 'Question Hook', example: '"What would you do with an extra $3,000 a month ,and what if AI could help you get there?"', why: 'Triggers curiosity and personal relevance immediately.' },
  { title: 'Bold Claim Hook', example: '"Most YouTubers waste 90% of their time on the wrong parts of the production process. Here’s proof."', why: 'Creates cognitive dissonance that demands resolution.' },
  { title: 'Story Hook', example: '"Six months ago I had zero subscribers. Last week I passed 50,000. This is exactly what changed."', why: 'Emotional investment and promise of journey.' },
  { title: 'Contrarian Hook', example: '"Every YouTube guru tells you to post daily. Here’s why they’re all wrong ,and what actually moves the needle."', why: 'Challenges assumed knowledge, creates urgency to watch.' },
];

const scriptParts = [
  { icon: Zap, label: 'Hook (0–30 sec)', desc: 'Your first 30 seconds determine whether the video gets watched. Open with the core tension or biggest payoff. Never start with "welcome back", "good morning", or channel name.' },
  { icon: Eye, label: 'Open Loop (30–90 sec)', desc: 'Set up a promise or mystery the viewer needs to see resolved. “Before I reveal the single biggest mistake, let me show you something…”. Open loops create watch-time gravity.' },
  { icon: TrendingUp, label: 'Value Delivery (Meat)', desc: 'Deliver the promised value in clear, scannable chunks. Use pattern interrupts every 2–3 minutes: B-roll cuts, callouts, visual aids, or tonal shifts to prevent drop-off.' },
  { icon: MessageSquare, label: 'CTA Close', desc: 'End with a clear, natural call to action. Link next video with a bridge (“Now that you know this, the next piece is…”). Prompt comments with a specific question tied to the video’s theme.' },
];

const mistakes = [
  'Weak hook ,opening with channel intro instead of the core tension',
  'No open loops ,giving away all value up front kills retention after the 2-minute mark',
  'Filler phrases: "make sure to like and subscribe" before earning it',
  'Monologue pacing ,no cuts, B-roll, or visual pattern interrupts',
  'Vague CTAs: "let me know in the comments" with no specific prompt',
  'Ignoring the end screen bump ,not bridging to the next video',
];

export default function Page() {
  return (
    <>
      <section className="mesh-gradient-dark" style={{ padding: '96px 24px 80px', color: 'var(--text-on-dark)', textAlign: 'center' }}>
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="glow-tag" style={{ marginBottom: 20, color: 'rgba(255,245,235,0.9)', background: 'rgba(255,107,0,0.18)', border: '1px solid rgba(255,107,0,0.4)' }}>
            <PenLine size={14} /> Academy Guide
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.04em', marginBottom: 20 }}>
            Retention Scripting
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.75)', maxWidth: '620px', margin: '0 auto 36px', lineHeight: 1.7 }}>
            Average View Duration is the metric that determines YouTube distribution. Here’s how to write scripts that hold viewers from the first frame to the final CTA.
          </p>
          <a href={AFFILIATE_LINK}   className="btn-primary" style={{ padding: '16px 40px', background: 'var(--accent-orange)' }}>
            Write Retention Scripts with AI <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: 'var(--bg-primary)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title" style={{ marginBottom: 12 }}>The Four-Part Script Structure</h2>
          <p className="section-subtitle" style={{ marginBottom: 40 }}>Every high-retention video follows this pattern, whether the creator knows it or not.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {scriptParts.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="glass-card" style={{ padding: '24px 28px', display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                <div style={{ padding: 10, borderRadius: 10, background: 'rgba(204,0,0,0.08)', flexShrink: 0 }}>
                  <Icon size={22} color="var(--brand-red)" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 8 }}>{label}</h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: 'var(--brand-red-dark)', color: 'var(--text-on-dark)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 12, textAlign: 'center' }}>Hook Examples by Type</h2>
          <p style={{ color: 'rgba(245,245,220,0.7)', textAlign: 'center', marginBottom: 36 }}>Use these as templates and customize for your niche.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {hookTypes.map(({ title, example, why }) => (
              <div key={title} style={{ padding: '24px 28px', borderRadius: 'var(--radius-lg)', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--accent-orange)', marginBottom: 8 }}>{title}</div>
                <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.65, marginBottom: 10, fontStyle: 'italic' }}>{example}</p>
                <p style={{ fontSize: '0.88rem', color: 'rgba(245,245,220,0.55)', margin: 0 }}>{why}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: 'var(--bg-primary)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title" style={{ marginBottom: 20 }}>6 Retention Mistakes to Avoid</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {mistakes.map((m, i) => (
              <div key={i} className="glass-card" style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(239,68,68,0.1)', border: '1.5px solid rgba(239,68,68,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '0.8rem', fontWeight: 700, color: '#dc2626' }}>{i + 1}</div>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', margin: 0 }}>{m}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: 'var(--brand-red-dark)', color: 'var(--text-on-dark)', textAlign: 'center' }}>
        <div className="max-w-3xl mx-auto">
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 16 }}>TubeMagic Writes Retention Scripts for You</h2>
          <p style={{ color: 'rgba(245,245,220,0.75)', lineHeight: 1.75, marginBottom: 32 }}>The AI Script Writer is trained on viral YouTube retention data. Every output includes hook variations, open loops, and a structured CTA ,no manual framework required.</p>
          <a href={AFFILIATE_LINK}   className="btn-primary" style={{ padding: '16px 40px', background: 'var(--accent-orange)' }}>
            Try TubeMagic Free <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </>
  );
}

