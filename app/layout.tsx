import type { Metadata } from 'next';
import './globals.css';
import { SITE_URL, SITE_NAME, EMAIL, PHONE_INTL, INSTAGRAM, OG_IMAGE } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: 'Photographe mariage Marseille, Aix & Provence | Maison La Martina',
    template: '%s | Maison La Martina',
  },

  description:
    "Alessio La Martina, photographe et vidéaste de mariage en Provence : Marseille, Aix-en-Provence, Martigues, Côte Bleue. Reportages photo et films de mariage naturels et élégants. Formules dès 1 400 €.",

  authors: [{ name: 'Alessio La Martina', url: SITE_URL }],
  creator: 'Alessio La Martina',
  publisher: SITE_NAME,

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'Maison La Martina — Photographe & vidéaste de mariage en Provence',
    description:
      'Reportages photo et films de mariage naturels et élégants à Marseille, Aix-en-Provence, Martigues et partout en Provence.',
    images: [OG_IMAGE],
  },

  twitter: {
    card: 'summary_large_image',
    images: [OG_IMAGE.url],
  },

  category: 'photography',
  manifest: '/manifest.webmanifest',
};

// Données structurées : uniquement des informations réelles et vérifiables
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: 'fr-FR',
      publisher: { '@id': `${SITE_URL}/#business` },
    },
    {
      '@type': ['LocalBusiness', 'ProfessionalService'],
      '@id': `${SITE_URL}/#business`,
      name: SITE_NAME,
      alternateName: 'Alessio La Martina Photographe',
      description:
        'Photographe et vidéaste de mariage basé à Martigues : reportages photo et films de mariage à Marseille, Aix-en-Provence, Martigues et dans toute la Provence, ainsi qu\'en France, en Italie et en Europe.',
      url: SITE_URL,
      logo: `${SITE_URL}/icon.svg`,
      image: [OG_IMAGE.url, `${SITE_URL}/portfolio/amore/DSC01920.jpg`],
      email: EMAIL,
      telephone: PHONE_INTL,
      priceRange: '1400 € – 1800 €',
      currenciesAccepted: 'EUR',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Martigues',
        postalCode: '13500',
        addressRegion: 'Provence-Alpes-Côte d\'Azur',
        addressCountry: 'FR',
      },
      areaServed: [
        { '@type': 'City', name: 'Martigues' },
        { '@type': 'City', name: 'Marseille' },
        { '@type': 'City', name: 'Aix-en-Provence' },
        { '@type': 'AdministrativeArea', name: 'Bouches-du-Rhône' },
        { '@type': 'AdministrativeArea', name: 'Provence-Alpes-Côte d\'Azur' },
        { '@type': 'Country', name: 'France' },
        { '@type': 'Country', name: 'Italie' },
      ],
      knowsLanguage: ['fr', 'it', 'en'],
      founder: { '@id': `${SITE_URL}/#person` },
      sameAs: [INSTAGRAM],
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Alessio La Martina',
      jobTitle: 'Photographe et vidéaste de mariage',
      url: `${SITE_URL}/a-propos`,
      image: `${SITE_URL}/alessio.jpg`,
      worksFor: { '@id': `${SITE_URL}/#business` },
      sameAs: [INSTAGRAM],
      knowsLanguage: ['fr', 'it', 'en'],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='fr'>
      <body>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
