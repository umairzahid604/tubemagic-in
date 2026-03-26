import type { MetadataRoute } from 'next';

const BASE_URL = 'https://tubemagic.in';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date('2025-11-12'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/get-tubemagic`,
      lastModified: new Date('2025-11-14'),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/pricing`,
      lastModified: new Date('2025-11-15'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/features`,
      lastModified: new Date('2025-11-18'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/features/ai-script-writer`,
      lastModified: new Date('2025-11-20'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/features/video-idea-generator`,
      lastModified: new Date('2025-11-22'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/features/thumbnail-generator`,
      lastModified: new Date('2025-11-25'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/features/video-research`,
      lastModified: new Date('2025-11-27'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/features/warp-upload`,
      lastModified: new Date('2025-11-29'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/compare`,
      lastModified: new Date('2025-12-02'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/compare/tubemagic-review`,
      lastModified: new Date('2025-12-05'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/compare/tubemagic-vs-vidiq`,
      lastModified: new Date('2025-12-08'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/compare/tubemagic-vs-tubebuddy`,
      lastModified: new Date('2025-12-10'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/academy`,
      lastModified: new Date('2025-12-12'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/academy/faceless-channels`,
      lastModified: new Date('2025-12-15'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/academy/niche-positioning`,
      lastModified: new Date('2025-12-17'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/academy/retention-scripting`,
      lastModified: new Date('2025-12-19'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/testimonials`,
      lastModified: new Date('2025-12-20'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: new Date('2025-12-22'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/affiliate`,
      lastModified: new Date('2025-12-24'),
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date('2025-12-26'),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: new Date('2025-12-28'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: new Date('2025-12-30'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
