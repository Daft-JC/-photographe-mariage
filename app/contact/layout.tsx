import type { Metadata } from 'next';

const SITE_URL = 'https://www.maisonlamartina.fr';

export const metadata: Metadata = {
  title: 'Contact et disponibilités — photographe mariage Provence',
  description:
    'Contactez Alessio La Martina pour votre mariage en France, Italie ou Europe. Vérifiez les disponibilités et demandez un devis personnalisé pour votre reportage photo de mariage haut de gamme.',
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: 'Contact — Maison La Martina',
    description:
      'Contactez Alessio La Martina pour votre mariage. Vérifiez les disponibilités et obtenez un devis personnalisé.',
    url: `${SITE_URL}/contact`,
    type: 'website',
    images: [{ url: 'https://www.maisonlamartina.fr/portfolio/il-giorno/DSC01327.jpg' }],
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
      email: 'contact@maisonlamartina.fr',
      telephone: '+33652433221',
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
