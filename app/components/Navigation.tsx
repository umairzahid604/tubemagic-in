'use client';

import { useState } from 'react';
import Link from 'next/link';

const AFFILIATE_LINK = '/get-tubemagic';

const navItems = [
  { label: 'Features', href: '/features' },
  { label: 'Academy', href: '/academy' },
  { label: 'Compare', href: '/compare' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'FAQ', href: '/faq' },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="nav-blur fixed top-0 left-0 right-0 z-50">
      {/* Disclaimer Banner */}
      <div
        style={{
          background: 'rgba(255, 193, 7, 0.15)',
          borderBottom: '1px solid rgba(255, 193, 7, 0.3)',
          textAlign: 'center',
          padding: '6px 16px',
          fontSize: '0.875rem',
          color: 'var(--text-muted, #aaa)',
        }}
      >
        This is an independent fan site.{' '}
        <a
          href="/get-tubemagic"
          style={{ color: 'var(--brand-teal)', fontWeight: 600, textDecoration: 'underline' }}
        >
          Visit the official site →
        </a>
      </div>
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 no-underline">
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: 'var(--brand-teal)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-green)',
              fontWeight: 900,
              fontSize: '1.1rem',
            }}
          >
            T
          </div>
          <span
            style={{
              fontWeight: 800,
              fontSize: '1.2rem',
              color: 'var(--brand-teal)',
              letterSpacing: '-0.02em',
            }}
          >
            TubeMagic
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={AFFILIATE_LINK}
            
            
            className="btn-primary"
            style={{ padding: '10px 24px', fontSize: '0.9rem' }}
          >
            Try TubeMagic Free
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          <span
            style={{
              width: 24,
              height: 2,
              background: 'var(--brand-teal)',
              borderRadius: 2,
              transition: 'all 0.3s',
              transform: mobileOpen ? 'rotate(45deg) translateY(7px)' : 'none',
            }}
          />
          <span
            style={{
              width: 24,
              height: 2,
              background: 'var(--brand-teal)',
              borderRadius: 2,
              transition: 'all 0.3s',
              opacity: mobileOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              width: 24,
              height: 2,
              background: 'var(--brand-teal)',
              borderRadius: 2,
              transition: 'all 0.3s',
              transform: mobileOpen ? 'rotate(-45deg) translateY(-7px)' : 'none',
            }}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden animate-fade-in"
          style={{
            padding: '16px 24px 24px',
            borderTop: '1px solid rgba(0,75,82,0.08)',
          }}
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link"
                style={{ fontSize: '1.05rem' }}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={AFFILIATE_LINK}
              
              
              className="btn-primary"
              style={{ textAlign: 'center', marginTop: 8 }}
            >
              Try TubeMagic Free
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
