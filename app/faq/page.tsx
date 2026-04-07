import type { Metadata } from 'next';
import FaqAccordion from '../components/FaqAccordion';
import { ArrowRight, HelpCircle } from 'lucide-react';

const AFFILIATE_LINK = '/get-tubemagic';

export const metadata: Metadata = {
  title: 'TubeMagic FAQ: Complete Resource for Common Questions (2026)',
  description:
    'Everything you need to know about TubeMagic: pricing, features, AI models used, refund policy, and how it compares to VidIQ and TubeBuddy.',
};

const faqs = [
  {
    q: 'What is TubeMagic?',
    a: 'TubeMagic is an AI-powered YouTube automation platform that helps creators produce content faster. It includes five tools: AI Script Writer, Video Idea Generator, AI Thumbnail Generator, Warp Upload SEO Optimizer, and Video Research Tool. It was originally Morise.ai, acquired by YouTube creator Matt Par in March 2024.',
  },
  {
    q: 'How much does TubeMagic cost?',
    a: 'TubeMagic is $47/month for unlimited access to all five tools. There are no tier restrictions or feature gates ,one plan includes everything.',
  },
  {
    q: 'Is there a free trial?',
    a: 'TubeMagic does not offer a traditional free trial, but every subscription comes with a 30-day money-back guarantee. You can use the full platform and request a complete refund within 30 days if you’re not satisfied.',
  },
  {
    q: 'What AI models power TubeMagic?',
    a: 'TubeMagic runs on Claude 4.0 (by Anthropic) and GPT-4o (by OpenAI). You can select which model to use for each task. The AI Script Writer is additionally fine-tuned with proprietary viral YouTube retention data, which is what differentiates it from plain API wrappers.',
  },
  {
    q: 'How does the AI Script Writer actually work?',
    a: 'You input your video topic and niche. TubeMagic generates a full script including a retention hook (first 30 seconds), open loop structure, main content body, and a CTA close. The output is trained on actual high-performing YouTube scripts to optimize for Average View Duration rather than just readability.',
  },
  {
    q: 'Can TubeMagic manage multiple YouTube channels?',
    a: 'Yes. TubeMagic is designed for multi-channel management and supports 10–12 channels from a single account. This makes it particularly useful for YouTube agencies and faceless channel operators running parallel content operations.',
  },
  {
    q: 'What languages does TubeMagic support?',
    a: 'TubeMagic supports content generation in 95+ languages, including Spanish, Portuguese, French, German, Hindi, Arabic, Japanese, Korean, and many more. This makes it one of the few YouTube AI tools properly suited for non-English creators.',
  },
  {
    q: 'How does TubeMagic compare to VidIQ and TubeBuddy?',
    a: 'VidIQ and TubeBuddy are primarily SEO and analytics tools ,they help optimize existing content. TubeMagic is a content creation platform. It generates scripts, thumbnails, and metadata from scratch using AI. The key distinction is whether you need research/analytics (use VidIQ) or automated production (use TubeMagic). Many creators use both.',
  },
  {
    q: 'Does TubeMagic work for faceless YouTube channels?',
    a: 'TubeMagic is built for faceless channels. The script writer produces narration-ready scripts, the thumbnail generator creates branded visuals without any face required, and the Warp Upload tool sets up all metadata for each video automatically. Most TubeMagic users run faceless channels.',
  },
  {
    q: 'What does the Warp Upload tool do exactly?',
    a: 'Warp Upload auto-generates all the metadata fields you need before uploading: video title, description (with timestamps and keyword structure), tags, categories, and chapter markers. It can process multiple videos in batch, saving hours of manual work.',
  },
  {
    q: 'What is TubeMagic’s refund policy?',
    a: 'TubeMagic offers a 30-day money-back guarantee. Contact their support team within 30 days of your initial purchase for a full refund, no questions asked.',
  },
  {
    q: 'Who owns TubeMagic?',
    a: 'TubeMagic was acquired by Matt Par in March 2024. Matt Par is a well-known YouTube creator with 4M+ subscribers who runs multiple successful faceless channels himself. This creator-first ownership background is reflected in the platform’s product decisions.',
  },
];

export default function Page() {
  return (
    <>
      <section className="mesh-gradient-dark" style={{ padding: '96px 24px 80px', color: 'var(--text-on-dark)', textAlign: 'center' }}>
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="glow-tag" style={{ marginBottom: 20, color: 'rgba(255,245,235,0.9)', background: 'rgba(255,107,0,0.18)', border: '1px solid rgba(255,107,0,0.4)' }}>
            <HelpCircle size={14} /> FAQ
          </div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.04em', marginBottom: 20 }}>
            Frequently Asked Questions
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.75)', maxWidth: '580px', margin: '0 auto', lineHeight: 1.7 }}>
            Everything you need to know about TubeMagic ,pricing, features, comparisons, and how AI YouTube automation actually works.
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: 'var(--bg-primary)' }}>
        <div className="max-w-3xl mx-auto">
          <FaqAccordion items={faqs} />
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <p style={{ color: 'var(--text-muted)', marginBottom: 16, fontSize: '0.95rem' }}>Still have questions? Check out the full review.</p>
            <a href="/compare/tubemagic-review" className="btn-secondary" style={{ marginRight: 12 }}>Read TubeMagic Review</a>
            <a href={AFFILIATE_LINK}   className="btn-primary">
              Try TubeMagic Free <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}


