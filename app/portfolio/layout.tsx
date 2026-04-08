import type { Metadata } from 'next';

const SITE_URL = 'https://www.lamartinastudio.com';

export const metadata: Metadata = {
  title: 'Portfolio — Galerie de Mariages',
  description:
    'Explorez le portfolio de Maison La Martina : reportages de mariages élégants en Provence, Côte d\'Azur, Toscane, Paris, Monaco et partout en Europe. Photos de mariage émotionnelles et intemporelles.',
  keywords: [
    'portfolio photographe mariage',
    'galerie photo mariage',
    'photos mariage Provence',
    'photos mariage Côte d\'Azur',
    'photos mariage Toscane',
    'photos mariage élégantes',
    'reportage photo mariage France',
    'reportage photo mariage Italie',
    'galerie mariage haut de gamme',
    'wedding photography portfolio',
    'wedding photos France',
    'wedding photos Italy',
    'fine art wedding photos',
    'mariage château photos',
    'mariage villa photos',
    'photos couple mariage',
    'photos cérémonie mariage',
    'photos réception mariage',
    'photos détails mariage',
    'inspiration mariage photo',
    'Maison La Martina portfolio',
    'Alessio Lamartina photos',
  ],
  alternates: {
    canonical: `${SITE_URL}/portfolio`,
  },
  openGraph: {
    title: 'Portfolio — Maison La Martina',
    description:
      'Explorez le portfolio de Maison La Martina : reportages de mariages élégants en France, Italie et Europe.',
    url: `${SITE_URL}/portfolio`,
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/og-portfolio.jpg`,
        width: 1200,
        height: 630,
        alt: 'Portfolio Maison La Martina — Photographe de Mariage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio — Maison La Martina',
    description: 'Galerie de mariages élégants en France, Italie et Europe.',
    images: [`${SITE_URL}/og-portfolio.jpg`],
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: 'Portfolio — Maison La Martina',
    description: 'Galerie de reportages de mariages haut de gamme en France, Italie et Europe.',
    url: `${SITE_URL}/portfolio`,
    author: {
      '@type': 'Person',
      name: 'Alessio Lamartina',
      url: `${SITE_URL}/a-propos`,
    },
    genre: 'Photographie de mariage',
    keywords: 'mariage, photographie, France, Italie, Europe, haut de gamme, élégant',
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
