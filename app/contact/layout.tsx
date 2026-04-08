import type { Metadata } from 'next';

const SITE_URL = 'https://www.lamartinastudio.com';

export const metadata: Metadata = {
  title: 'Contact & Disponibilités — Réservez votre Mariage',
  description:
    'Contactez Alessio La Martina pour votre mariage en France, Italie ou Europe. Vérifiez les disponibilités et demandez un devis personnalisé pour votre reportage photo de mariage haut de gamme.',
  keywords: [
    'contact photographe mariage',
    'réserver photographe mariage',
    'disponibilités photographe mariage',
    'devis photographe mariage',
    'tarif photographe mariage',
    'prix photographe mariage France',
    'prix photographe mariage Provence',
    'réservation photographe mariage',
    'booking wedding photographer France',
    'contacter Alessio La Martina',
    'Maison La Martina contact',
    'demande devis mariage',
    'photographe mariage disponible',
    'photographe mariage 2024',
    'photographe mariage 2025',
    'photographe mariage 2026',
  ],
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: 'Contact — Maison La Martina',
    description:
      'Contactez Alessio La Martina pour votre mariage. Vérifiez les disponibilités et obtenez un devis personnalisé.',
    url: `${SITE_URL}/contact`,
    type: 'website',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact — Maison La Martina',
    description: 'Page de contact pour réserver Alessio La Martina pour votre mariage.',
    url: `${SITE_URL}/contact`,
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'Maison La Martina',
      email: 'hello@lamartinastudio.com',
      telephone: '+33600000000',
      url: SITE_URL,
    },
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
