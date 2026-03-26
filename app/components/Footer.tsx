import Link from 'next/link';

const AFFILIATE_LINK = '/get-tubemagic';

const footerLinks = {
  Product: [
    { label: 'AI Script Writer', href: '/features/ai-script-writer' },
    { label: 'Video Idea Generator', href: '/features/video-idea-generator' },
    { label: 'Warp Upload', href: '/features/warp-upload' },
    { label: 'Thumbnail Generator', href: '/features/thumbnail-generator' },
    { label: 'Video Research', href: '/features/video-research' },
  ],
  Learn: [
    { label: 'Automation Academy', href: '/academy' },
    { label: 'Faceless Channels Guide', href: '/academy/faceless-channels' },
    { label: 'Retention Scripting', href: '/academy/retention-scripting' },
    { label: 'Niche Positioning', href: '/academy/niche-positioning' },
  ],
  Compare: [
    { label: 'TubeMagic vs VidIQ', href: '/compare/tubemagic-vs-vidiq' },
    { label: 'TubeMagic vs TubeBuddy', href: '/compare/tubemagic-vs-tubebuddy' },
    { label: 'TubeMagic Review 2026', href: '/compare/tubemagic-review' },
  ],
  Company: [
    { label: 'Pricing', href: '/pricing' },
    { label: 'Affiliate Program', href: '/affiliate' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: 'var(--accent-green)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--brand-teal-dark)',
                  fontWeight: 900,
                  fontSize: '0.95rem',
                }}
              >
                T
              </div>
              <span style={{ fontWeight: 800, fontSize: '1.1rem' }}>TubeMagic</span>
            </div>
            <p
              style={{
                color: 'rgba(245,245,220,0.6)',
                fontSize: '0.9rem',
                lineHeight: 1.7,
                marginBottom: 20,
              }}
            >
              AI-powered YouTube content optimization. Create better videos in 5 minutes, not 5 hours.
            </p>
            <a
              href={AFFILIATE_LINK}
              
              
              className="btn-primary"
              style={{ padding: '10px 20px', fontSize: '0.85rem' }}
            >
              Get Started Free →
            </a>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4
                style={{
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: 16,
                  color: 'rgba(245,245,220,0.9)',
                }}
              >
                {category}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }} className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} style={{ fontSize: '0.9rem' }}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div
          style={{
            borderTop: '1px solid rgba(245,245,220,0.1)',
            paddingTop: 24,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <p style={{ color: 'rgba(245,245,220,0.4)', fontSize: '0.85rem', margin: 0 }}>
            © {new Date().getFullYear()} TubeMagic. All rights reserved. TubeMagic is a product of Tube AI System.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" style={{ fontSize: '0.85rem', color: 'rgba(245,245,220,0.4)' }}>
              Privacy Policy
            </Link>
            <Link href="/terms" style={{ fontSize: '0.85rem', color: 'rgba(245,245,220,0.4)' }}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
