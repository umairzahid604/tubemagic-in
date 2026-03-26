import type { Metadata } from 'next';
import { Mail, ExternalLink, ArrowRight, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact | TubeMagic.in',
  description:
    'Contact the tubemagic.in team, or get direct support from TubeMagic for product questions, billing, and technical help.',
};

export default function Page() {
  return (
    <>
      <section className="mesh-gradient-dark" style={{ padding: '96px 24px 80px', color: 'var(--text-on-dark)', textAlign: 'center' }}>
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <div className="glow-tag" style={{ marginBottom: 20, color: 'rgba(255,245,235,0.9)', background: 'rgba(255,107,0,0.18)', border: '1px solid rgba(255,107,0,0.4)' }}>
            <MessageSquare size={14} /> Contact
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.04em', marginBottom: 20 }}>Get in Touch</h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.72)', maxWidth: '500px', lineHeight: 1.75 }}>Whether you have a question about the site or need TubeMagic product support, we’ll point you in the right direction.</p>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: 'var(--bg-primary)' }}>
        <div className="max-w-3xl mx-auto">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            <div className="glass-card" style={{ padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <div style={{ padding: 10, borderRadius: 10, background: 'rgba(204,0,0,0.08)' }}><MessageSquare size={22} color="var(--brand-red)" /></div>
                <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>Site Feedback</h2>
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 20 }}>For questions about tubemagic.in content, affiliate disclosures, or site corrections, reach out via email.</p>
              <a href="mailto:contact@tubemagic.in" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.92rem', color: 'var(--brand-red)', fontWeight: 600, textDecoration: 'none' }}>
                <Mail size={15} /> contact@tubemagic.in
              </a>
            </div>
            <div className="glass-card" style={{ padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <div style={{ padding: 10, borderRadius: 10, background: 'rgba(204,0,0,0.08)' }}><ExternalLink size={22} color="var(--brand-red)" /></div>
                <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>TubeMagic Product Support</h2>
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 20 }}>For billing questions, technical issues, or product help, contact TubeMagic’s official support team directly.</p>
              <a href="https://tubemagic.com/support"  rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.92rem', color: 'var(--brand-red)', fontWeight: 600, textDecoration: 'none' }}>
                TubeMagic Support <ArrowRight size={14} />
              </a>
            </div>
          </div>
          <div className="glass-card" style={{ padding: '24px 28px', marginTop: 24 }}>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.75, margin: 0 }}>
              <strong>Disclaimer:</strong> tubemagic.in is an independent affiliate review website and is not affiliated with, endorsed by, or in any way officially connected with TubeMagic (tubemagic.com) or its parent company. For official product support, please contact TubeMagic directly.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}


