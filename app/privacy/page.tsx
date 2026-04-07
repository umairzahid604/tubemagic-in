import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for tubemagic.in. Learn how we handle data, cookies, and affiliate disclosures.',
};

const LAST_UPDATED = 'January 1, 2026';

export default function Page() {
  return (
    <section style={{ padding: '80px 24px', background: 'var(--bg-primary)' }}>
      <div className="max-w-3xl mx-auto">
        <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 900, letterSpacing: '-0.03em', color: 'var(--text-primary)', marginBottom: 8 }}>Privacy Policy</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: 48 }}>Last updated: {LAST_UPDATED}</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 36, color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.95rem' }}>
          <section>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 12 }}>1. About This Site</h2>
            <p>tubemagic.in (“we”, “our”, “the site”) is an independent affiliate review and content website. We are not affiliated with, endorsed by, or officially connected with TubeMagic (tubemagic.com) or its parent company. This Privacy Policy covers data practices for tubemagic.in only.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 12 }}>2. Information We Collect</h2>
            <p style={{ marginBottom: 12 }}>We collect minimal data:</p>
            <ul style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <li><strong>Analytics data:</strong> We use standard web analytics (e.g. Google Analytics) to track aggregate pageviews, traffic sources, and device types. This data is anonymized and not linked to individual identities.</li>
              <li><strong>Affiliate click data:</strong> When you click an affiliate link, the destination site (TubeMagic) may set tracking cookies to attribute your visit to our referral. We do not control this data collection ,please refer to TubeMagic’s own Privacy Policy.</li>
              <li><strong>Contact forms:</strong> If you contact us via email, we retain that correspondence to respond to your inquiry. We do not sell or share email data.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 12 }}>3. Cookies</h2>
            <p>This site may use cookies for analytics purposes and to support affiliate tracking. You can control cookie settings through your browser preferences. Disabling cookies may affect analytics tracking but will not impact your ability to browse the site.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 12 }}>4. Affiliate Disclosure</h2>
            <p>tubemagic.in participates in affiliate programs. This means we may earn a commission when you click links to third-party products and make a purchase, at no additional cost to you. Our editorial opinions are not influenced by affiliate relationships. We only recommend products we have researched or tested.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 12 }}>5. Third-Party Links</h2>
            <p>This site links to external websites including TubeMagic (tubemagic.com). We are not responsible for the privacy practices of those sites. We encourage you to review the privacy policies of any third-party sites you visit.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 12 }}>6. Data Retention & Your Rights</h2>
            <p>We retain analytics data in aggregated, anonymized form. For any personal data submitted via contact forms, you may request deletion by emailing contact@tubemagic.in. Residents of the EU/EEA have additional rights under GDPR, including the right to access, correct, or delete your personal data.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 12 }}>7. Contact</h2>
            <p>For privacy-related questions, email: <a href="mailto:contact@tubemagic.in" style={{ color: 'var(--brand-red)', fontWeight: 600 }}>contact@tubemagic.in</a></p>
          </section>
        </div>
      </div>
    </section>
  );
}


