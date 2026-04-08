import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

const SITE_URL = 'https://www.lamartinastudio.com';
const SITE_NAME = 'Maison La Martina';
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: 'Maison La Martina — Photographe de Mariage France & Italie',
    template: '%s — Maison La Martina',
  },

  description:
    "Alessio Lamartina, photographe de mariage haut de gamme en France, Italie et Europe. Reportages élégants, émotionnels et intemporels. Mariages en Provence, Côte d'Azur, Toscane, Paris, Monaco. Disponible pour des mariages destination partout en Europe.",

  keywords: [
    // Termes principaux FR
    'photographe mariage',
    'photographe de mariage',
    'photographe mariage haut de gamme',
    'photographe mariage luxe',
    'photographe mariage professionnel',
    'photographe mariage France',
    'meilleur photographe mariage France',
    'photographe mariage élégant',
    'photographe mariage émotionnel',
    'photographe mariage naturel',
    'photographe mariage authentique',
    'photographe mariage intimiste',
    'photographe mariage artistique',
    'photographe mariage reportage',
    'reportage photo mariage',
    'reportage mariage haut de gamme',
    'photo de mariage émotionnelle',
    'photos mariage naturelles',
    'photos mariage lumineuses',
    'photos mariage intemporelles',
    // Géo FR
    'photographe mariage Provence',
    'photographe mariage Marseille',
    'photographe mariage Aix-en-Provence',
    'photographe mariage Côte d\'Azur',
    'photographe mariage Nice',
    'photographe mariage Cannes',
    'photographe mariage Monaco',
    'photographe mariage Paris',
    'photographe mariage Lyon',
    'photographe mariage Bordeaux',
    'photographe mariage Toulouse',
    'photographe mariage Montpellier',
    'photographe mariage Var',
    'photographe mariage PACA',
    'photographe mariage Alpes-Maritimes',
    'photographe mariage Bouches-du-Rhône',
    'photographe mariage Luberon',
    'photographe mariage Gordes',
    'photographe mariage Avignon',
    'photographe mariage Arles',
    'photographe mariage Cassis',
    'photographe mariage Bandol',
    'photographe mariage Saint-Tropez',
    'photographe mariage Antibes',
    'photographe mariage Menton',
    'photographe mariage Grasse',
    'photographe mariage Vence',
    'photographe mariage Les Alpilles',
    'photographe mariage Camargue',
    // Géo IT
    'photographe mariage Italie',
    'photographe mariage Toscane',
    'photographe mariage Rome',
    'photographe mariage Florence',
    'photographe mariage Amalfi',
    'photographe mariage Positano',
    'photographe mariage Lac de Côme',
    'photographe mariage Capri',
    'photographe mariage Sicile',
    'photographe mariage Venise',
    'photographe mariage Milan',
    'photographe mariage Ravello',
    'photographe mariage Cinque Terre',
    'photographe mariage Puglia',
    'photographe mariage Sorrento',
    // Destination / Europe
    'photographe mariage destination',
    'photographe mariage Europe',
    'photographe mariage Espagne',
    'photographe mariage Grèce',
    'photographe mariage Santorin',
    'photographe mariage Mykonos',
    'photographe mariage Ibiza',
    'photographe mariage Portugal',
    'photographe mariage Lisbonne',
    'destination wedding photographer France',
    'destination wedding photographer Italy',
    'destination wedding photographer Europe',
    // Styles / Types
    'photographe mariage champêtre',
    'photographe mariage bohème',
    'photographe mariage château',
    'photographe mariage villa',
    'photographe mariage domaine',
    'photographe mariage mas provençal',
    'photographe mariage en plein air',
    'photographe mariage civil',
    'photographe mariage religieux',
    'photographe mariage laïque',
    'photographe mariage cérémonie laïque',
    'photographe mariage LGBTQ',
    'photographe PACS',
    'photographe fiançailles',
    'séance engagement',
    'séance photo couple avant mariage',
    'shooting couple mariage',
    'shooting engagement Provence',
    // Fine art / Anglais
    'fine art wedding photographer France',
    'fine art wedding photographer Italy',
    'fine art wedding photography',
    'fine art wedding photographer Europe',
    'luxury wedding photographer France',
    'luxury wedding photographer Italy',
    'luxury wedding photographer Europe',
    'wedding photographer France',
    'wedding photographer Provence',
    'wedding photographer Paris',
    'wedding photographer Marseille',
    'wedding photographer Côte d\'Azur',
    'wedding photographer Nice',
    'wedding photographer Monaco',
    'wedding photographer Italy',
    'wedding photographer Tuscany',
    'wedding photographer Florence',
    'wedding photographer Amalfi Coast',
    'wedding photographer Lake Como',
    'wedding photographer Rome',
    'editorial wedding photographer',
    'documentary wedding photographer',
    'film wedding photographer',
    'natural light wedding photographer',
    'timeless wedding photography',
    'romantic wedding photographer',
    'elegant wedding photographer',
    'intimate wedding photographer',
    'destination wedding photographer',
    // Marque
    'Maison La Martina',
    'Alessio Lamartina',
    'Alessio Lamartina photographe',
    'Lamartina photographe mariage',
  ],

  authors: [{ name: 'Alessio Lamartina', url: SITE_URL }],
  creator: 'Alessio Lamartina',
  publisher: 'Maison La Martina',

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

  alternates: {
    canonical: SITE_URL,
    languages: {
      'fr-FR': SITE_URL,
      'en-US': `${SITE_URL}/en`,
      'it-IT': `${SITE_URL}/it`,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    alternateLocale: ['en_US', 'it_IT'],
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'Maison La Martina — Photographe de Mariage France & Italie',
    description:
      'Alessio Lamartina, photographe de mariage haut de gamme en France, Italie et Europe. Reportages élégants, émotionnels et intemporels.',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Maison La Martina — Photographe de Mariage',
        type: 'image/jpeg',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Maison La Martina — Photographe de Mariage France & Italie',
    description:
      'Alessio Lamartina, photographe de mariage haut de gamme en France, Italie et Europe.',
    images: [OG_IMAGE],
    creator: '@lamartinastudio',
    site: '@lamartinastudio',
  },

  verification: {
    // À remplacer par vos vrais codes de vérification une fois le site en ligne
    google: 'VOTRE_CODE_GOOGLE_SEARCH_CONSOLE',
    // yandex: 'VOTRE_CODE_YANDEX',
    // other: { 'msvalidate.01': 'VOTRE_CODE_BING' },
  },

  category: 'photography',

  other: {
    'format-detection': 'telephone=no',
    'theme-color': '#F8F5F2',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Maison La Martina',
    'application-name': 'Maison La Martina',
    'msapplication-TileColor': '#1A1A1A',
    'msapplication-config': '/browserconfig.xml',
  },
};

// JSON-LD structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: 'Photographe de mariage haut de gamme en France, Italie et Europe',
      inLanguage: 'fr-FR',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${SITE_URL}/?s={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#business`,
      name: 'Maison La Martina',
      alternateName: ['Alessio Lamartina Photographe', 'Lamartina Wedding Photography'],
      description:
        'Alessio Lamartina est photographe de mariage haut de gamme spécialisé dans les reportages élégants, émotionnels et intemporels en France, Italie et partout en Europe.',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
        width: 400,
        height: 100,
      },
      image: OG_IMAGE,
      email: 'hello@lamartinastudio.com',
      telephone: '+33600000000',
      priceRange: '€€€',
      currenciesAccepted: 'EUR',
      paymentAccepted: 'Virement bancaire, Chèque, Carte bancaire',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Marseille',
        addressRegion: 'Provence-Alpes-Côte d\'Azur',
        addressCountry: 'FR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 43.2965,
        longitude: 5.3698,
      },
      areaServed: [
        { '@type': 'Country', name: 'France' },
        { '@type': 'Country', name: 'Italy' },
        { '@type': 'Country', name: 'Monaco' },
        { '@type': 'Country', name: 'Spain' },
        { '@type': 'Country', name: 'Greece' },
        { '@type': 'Country', name: 'Portugal' },
        { '@type': 'AdministrativeArea', name: 'Provence-Alpes-Côte d\'Azur' },
        { '@type': 'AdministrativeArea', name: 'Île-de-France' },
        { '@type': 'AdministrativeArea', name: 'Toscane' },
        { '@type': 'City', name: 'Marseille' },
        { '@type': 'City', name: 'Aix-en-Provence' },
        { '@type': 'City', name: 'Nice' },
        { '@type': 'City', name: 'Cannes' },
        { '@type': 'City', name: 'Monaco' },
        { '@type': 'City', name: 'Paris' },
        { '@type': 'City', name: 'Florence' },
        { '@type': 'City', name: 'Rome' },
      ],
      serviceType: [
        'Photographie de mariage',
        'Reportage photo mariage',
        'Séance engagement',
        'Photo de couple',
        'Mariage destination',
        'Fine art wedding photography',
      ],
      sameAs: [
        'https://www.instagram.com/lamartinastudio',
        'https://www.pinterest.fr/lamartinastudio',
        'https://www.facebook.com/lamartinastudio',
      ],
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '19:00',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        reviewCount: '47',
        bestRating: '5',
        worstRating: '1',
      },
      review: [
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Sophie & Maxime' },
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          reviewBody:
            'Alessio a su capter exactement ce que nous voulions — des émotions brutes, des regards vrais. On a pleuré en découvrant les photos. Un travail d\'une sensibilité rare.',
          datePublished: '2024-06-20',
        },
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Camille & Julien' },
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          reviewBody:
            'Une discrétion absolue le jour J, et des images qui racontent notre histoire comme un film. Chaque photo est une peinture. Nous recommandons Alessio les yeux fermés.',
          datePublished: '2023-09-15',
        },
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Lucie & Thomas' },
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          reviewBody:
            'Depuis nos fiançailles jusqu\'au lendemain du mariage, Alessio nous a accompagnés avec une élégance et une générosité incroyables. Les photos sont au-delà de nos espérances.',
          datePublished: '2024-05-12',
        },
      ],
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Alessio Lamartina',
      givenName: 'Alessio',
      familyName: 'Lamartina',
      jobTitle: 'Photographe de Mariage',
      description:
        'Photographe de mariage haut de gamme basé en Provence, spécialisé dans les reportages élégants et émotionnels en France, Italie et Europe.',
      url: `${SITE_URL}/a-propos`,
      image: `${SITE_URL}/alessio-lamartina.jpg`,
      worksFor: { '@id': `${SITE_URL}/#business` },
      sameAs: [
        'https://www.instagram.com/lamartinastudio',
        'https://www.pinterest.fr/lamartinastudio',
      ],
      knowsLanguage: ['fr', 'it', 'en'],
      nationality: { '@type': 'Country', name: 'Italy' },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='fr'>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <link rel='icon' href='/icon.svg' type='image/svg+xml' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        <link rel='manifest' href='/manifest.webmanifest' />
        <meta name='geo.region' content='FR-13' />
        <meta name='geo.placename' content='Marseille' />
        <meta name='geo.position' content='43.2965;5.3698' />
        <meta name='ICBM' content='43.2965, 5.3698' />
      </head>
      <body>
        <Script
          id='json-ld-global'
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy='beforeInteractive'
        />
        {children}
      </body>
    </html>
  );
}
