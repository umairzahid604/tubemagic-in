import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for tubemagic.in. Understand the rules governing your use of this independent affiliate review website.',
};

const LAST_UPDATED = 'January 1, 2026';

export default function Page() {
  return (
    <section style={{ padding: '80px 24px', background: 'var(--bg-primary)' }}>
      <div className="max-w-3xl mx-auto">
        <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 900, letterSpacing: '-0.03em', color: 'var(--text-primary)', marginBottom: 8 }}>Terms of Service</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: 48 }}>Last updated: {LAST_UPDATED}</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 36, color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.95rem' }}>
          <section>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 12 }}>1. Agreement to Terms</h2>
            <p>By accessing or using tubemagic.in (the “Site”), you agree to be bound by these Terms of Service. If you disagree with any part of these terms, please do not use this Site. These terms apply solely to tubemagic.in and not to TubeMagic (tubemagic.com), which is a separate, independently operated product.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 12 }}>2. Nature of the Site</h2>
            <p>tubemagic.in is an independent affiliate review and information website. Content on this site (including reviews, comparisons, and guides) represents the opinions and research of the site’s authors and does not constitute the official position of TubeMagic or any other company referenced. We are not official spokespeople for any product reviewed on this site.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 12 }}>3. Affiliate Links & Earnings Disclosure</h2>
            <p>This site contains affiliate links. When you click these links and make a purchase, we may earn a commission from the merchant at no additional cost to you. Commissions do not affect our editorial recommendations. We comply with FTC guidelines regarding affiliate disclosure.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 12 }}>4. Accuracy of Information</h2>
            <p>We make reasonable efforts to ensure pricing, feature, and comparison information on this site is accurate and up to date. However, software products change frequently. Always verify current pricing and features directly with the official TubeMagic website before making a purchasing decision. We are not liable for discrepancies between information on this site and the current state of any product.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 12 }}>5. Intellectual Property</h2>
            <p>All original content on tubemagic.in (text, layout, graphics) is the property of the site owner and protected by applicable copyright law. You may not reproduce, distribute, or create derivative works from this content without written permission. Third-party trademarks referenced on this site (including “TubeMagic”, “VidIQ”, “TubeBuddy”, “YouTube”) remain the property of their respective owners.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 12 }}>6. Limitation of Liability</h2>
            <p>tubemagic.in is provided “as is” without warranties of any kind. We are not liable for any decisions made based on content published on this site, including purchasing decisions, earnings expectations, or business outcomes. Earning results from YouTube automation tools vary and are not guaranteed.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 12 }}>7. Changes to Terms</h2>
            <p>We reserve the right to update these Terms of Service at any time. Continued use of the Site after changes are posted constitutes acceptance of the updated terms. Check this page periodically for updates.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 12 }}>8. Contact</h2>
            <p>Questions about these Terms: <a href="mailto:contact@tubemagic.in" style={{ color: 'var(--brand-red)', fontWeight: 600 }}>contact@tubemagic.in</a></p>
          </section>
        </div>
      </div>
    </section>
  );
}


