import type { Metadata } from 'next';

const SITE_URL = 'https://www.maisonlamartina.fr';

export const metadata: Metadata = {
  title: 'Portfolio — photos et films de mariage en Provence',
  description:
    'Explorez le portfolio de Maison La Martina : reportages de mariages élégants en Provence, Côte d\'Azur, Toscane, Paris, Monaco et partout en Europe. Photos de mariage émotionnelles et intemporelles.',
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
        url: `${SITE_URL}/portfolio/amore/DSC01920.jpg`,
        alt: 'Portfolio Maison La Martina — Photographe de Mariage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio — Maison La Martina',
    description: 'Galerie de mariages élégants en France, Italie et Europe.',
    images: [`${SITE_URL}/portfolio/amore/DSC01920.jpg`],
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
      name: 'Alessio La Martina',
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
