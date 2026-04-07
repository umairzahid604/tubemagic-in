import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TubeMagic: The Complete Guide to AI YouTube Automation (2026)",
    template: "%s | TubeMagic",
  },
  description:
    "TubeMagic is the #1 AI YouTube automation tool. Generate scripts, video ideas, thumbnails, and SEO-optimized metadata in 5 minutes. Trusted by 50,000+ creators.",
  keywords: [
    "TubeMagic",
    "YouTube automation software",
    "AI script writer for YouTube",
    "YouTube idea generator",
    "YouTube SEO tool",
    "TubeMagic review 2026",
    "best YouTube automation software",
  ],
  authors: [{ name: "TubeMagic" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tubemagic.in",
    siteName: "TubeMagic",
    title: "TubeMagic: The Complete Guide to AI YouTube Automation (2026)",
    description:
      "Generate scripts, video ideas, thumbnails, and SEO metadata in 5 minutes with AI. The complete YouTube automation toolkit.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TubeMagic: The Complete Guide to AI YouTube Automation",
    description:
      "Generate scripts, video ideas, thumbnails, and SEO metadata in 5 minutes with AI.",
  },
  icons: {
    icon: '/favicon.jpg',
    apple: '/favicon.jpg',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "TubeMagic",
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Web Application",
    url: "https://tubemagic.in",
    description:
      "AI-powered YouTube content optimization platform. Generate scripts, ideas, thumbnails, and metadata in minutes.",
    offers: {
      "@type": "Offer",
      price: "47",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "2450",
      bestRating: "5",
    },
  };

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TubeMagic",
    url: "https://tubemagic.in",
    logo: "https://tubemagic.in/logo.png",
    sameAs: [
      "https://twitter.com/tubemagic",
      "https://youtube.com/@tubemagic",
    ],
  };

  return (
    <html lang="en">
      <head>
        <meta name="msvalidate.01" content="353536C2E6F297E4C44662168C473C36" />
        <meta name="google-site-verification" content="B712WqslM5BLjgF0iqiO5Nv_M40xqJolN5EPwjKe_Ks" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Navigation />
        <main style={{ paddingTop: 72 }}>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
