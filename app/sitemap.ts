import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';
import { VILLES } from '@/lib/villes';

// Date de la dernière mise à jour du contenu (à modifier lors d'une refonte)
const UPDATED = new Date('2026-09-29');

export default function sitemap(): MetadataRoute.Sitemap {
  // /journal est exclu tant qu'il ne contient que des articles d'exemple
  return [
    { url: SITE_URL, lastModified: UPDATED, changeFrequency: 'monthly', priority: 1 },
    ...VILLES.map((v) => ({
      url: `${SITE_URL}/photographe-mariage/${v.slug}`,
      lastModified: UPDATED,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    { url: `${SITE_URL}/portfolio`, lastModified: UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/services`, lastModified: UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/a-propos`, lastModified: UPDATED, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${SITE_URL}/contact`, lastModified: UPDATED, changeFrequency: 'yearly', priority: 0.8 },
  ];
}
