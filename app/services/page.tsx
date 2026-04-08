import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/ui/nav';
import Footer from '@/components/ui/footer';

import type { Metadata } from 'next';

const SITE_URL = 'https://www.lamartinastudio.com';

export const metadata: Metadata = {
  title: 'Services & Tarifs — Formules Photographie de Mariage',
  description:
    "Découvrez les formules et tarifs de Maison La Martina pour votre reportage photo de mariage. Demi-journée, journée complète, séance engagement. Photographe haut de gamme disponible en France, Italie et Europe.",
  keywords: [
    'tarif photographe mariage',
    'prix photographe mariage France',
    'prix photographe mariage Provence',
    'formule photographe mariage',
    'prestation photographe mariage',
    'offre photographe mariage',
    'devis photographe mariage',
    'package photographe mariage',
    'photographe mariage journée complète',
    'photographe mariage demi-journée',
    'séance engagement tarif',
    'séance couple avant mariage prix',
    'combien coûte photographe mariage',
    'budget photographe mariage',
    'wedding photographer price France',
    'wedding photography packages France',
    'luxury wedding photographer rates',
    'fine art wedding photographer pricing',
    'Maison La Martina tarifs',
    'Maison La Martina formules',
    'livraison galerie mariage',
    'galerie haute résolution mariage',
    'retouche photo mariage',
  ],
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
  openGraph: {
    title: 'Services & Tarifs — Maison La Martina',
    description:
      'Formules et tarifs pour votre reportage photo de mariage haut de gamme avec Alessio Lamartina.',
    url: `${SITE_URL}/services`,
    type: 'website',
  },
};

const servicesLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.lamartinastudio.com' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.lamartinastudio.com/services' },
      ],
    },
    {
      '@type': 'Service',
      name: 'Reportage Photo de Mariage',
      provider: { '@type': 'LocalBusiness', name: 'Maison La Martina' },
      serviceType: 'Photographie de mariage',
      description: 'Reportage photo de mariage haut de gamme en France, Italie et Europe. Style naturel, émotionnel et intemporel. Livraison en galerie haute résolution sous 6 à 8 semaines.',
      areaServed: ['France', 'Italie', 'Europe'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Formules de Photographie de Mariage',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Demi-journée',
              description: 'Couverture demi-journée de votre mariage (4 heures environ). Idéale pour les cérémonies civiles ou mariages intimistes.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Journée complète',
              description: 'Couverture complète de votre mariage du matin au dîner. Présence discrète et attentive tout au long de la journée.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Séance Engagement',
              description: 'Séance photo de couple avant le mariage. Idéale pour apprendre à se connaître et créer des souvenirs inoubliables.',
            },
          },
        ],
      },
    },
  ],
};

const steps = [
  {
    num: '01',
    title: 'Premier contact',
    text: 'Nous échangeons par message ou par téléphone pour faire connaissance et vérifier que vos dates sont disponibles.',
  },
  {
    num: '02',
    title: 'Rencontre',
    text: 'Un appel vidéo ou une rencontre dans un café — pour parler de votre vision, de votre lieu, de votre histoire.',
  },
  {
    num: '03',
    title: 'Le jour J',
    text: "Je suis présent de manière discrète et attentive, du matin jusqu'au dîner ou à la soirée. Je capture tout sans perturber.",
  },
  {
    num: '04',
    title: 'Livraison',
    text: 'Sous 6 à 8 semaines, vous recevez une galerie privée en haute résolution, soigneusement retouchée.',
  },
];

const formules = [
  {
    label: 'Essentiale',
    duration: 'Demi-journée',
    desc: 'Cérémonie + cocktail. Idéal pour les mariages intimistes ou civils.',
    price: 'Sur demande',
    items: ['6 heures de couverture', 'Galerie privée en ligne', '250 photos retouchées', 'Livraison sous 6 semaines'],
    accent: false,
  },
  {
    label: 'Il Giorno',
    duration: 'Journée complète',
    desc: 'De la préparation à la soirée. La formule la plus complète pour ne rien manquer.',
    price: 'Sur demande',
    items: ['12 heures de couverture', 'Galerie privée en ligne', '500+ photos retouchées', 'Séance couple incluse', 'Livraison sous 8 semaines', 'Album livre disponible en option'],
    accent: true,
  },
  {
    label: 'Destinazione',
    duration: 'Destination wedding',
    desc: "Pour les mariages à l'étranger ou dans des lieux d'exception. Sur devis.",
    price: 'Sur devis',
    items: ['Couverture sur mesure', 'Déplacement inclus', 'Galerie privée en ligne', 'Photos retouchées', 'Séance engagement incluse', 'Album livre premium en option'],
    accent: false,
  },
];

export default function Services() {
  return (
    <>
      <Script
        id='json-ld-services'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesLd) }}
        strategy='beforeInteractive'
      />
      <Nav />

      {/* Hero */}
      <section
        style={{
          paddingTop: '160px',
          paddingBottom: '5rem',
          background: '#F8F5F2',
          textAlign: 'center',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.68rem',
            fontWeight: 500,
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: '#cc0000',
            display: 'block',
            marginBottom: '1rem',
          }}
        >
          Formules
        </span>
        <h1
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            marginBottom: '1.2rem',
          }}
        >
          Expérience & Services
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.92rem',
            color: '#3d3d3d',
            letterSpacing: '0.025em',
            maxWidth: '520px',
            margin: '0 auto',
          }}
        >
          Un accompagnement personnalisé, du premier échange jusqu'à la livraison de votre galerie.
        </p>
      </section>

      {/* Image */}
      <section style={{ position: 'relative', height: '50vh', overflow: 'hidden' }}>
        <Image
          src='https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1920&auto=format&fit=crop'
          alt='Mariage élégant'
          fill
          className='object-cover'
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(26,26,26,0.3)' }} />
      </section>

      {/* Parcours client */}
      <section style={{ background: '#F8F5F2', padding: '7rem 0' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 3rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.68rem',
                fontWeight: 500,
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: '#cc0000',
                display: 'block',
                marginBottom: '1rem',
              }}
            >
              Comment ça se passe
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
              }}
            >
              L'expérience <em>Maison La Martina</em>
            </h2>
          </div>

          <div className='grid-steps'>
            {steps.map((step) => (
              <div key={step.num} style={{ textAlign: 'center' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '3.5rem',
                    color: '#e8e4e0',
                    display: 'block',
                    marginBottom: '1rem',
                    fontStyle: 'italic',
                  }}
                >
                  {step.num}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.3rem',
                    marginBottom: '0.8rem',
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#3d3d3d', letterSpacing: '0.025em', lineHeight: 1.9 }}>
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formules */}
      <section style={{ background: '#F8F5F2', padding: '0 0 7rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 3rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.68rem',
                fontWeight: 500,
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: '#cc0000',
                display: 'block',
                marginBottom: '1rem',
              }}
            >
              Tarifs
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
                marginBottom: '1rem',
              }}
            >
              Choisissez <em>votre formule</em>
            </h2>
            <p style={{ fontSize: '0.88rem', color: '#3d3d3d', letterSpacing: '0.025em', maxWidth: '480px', margin: '0 auto' }}>
              Chaque mariage est unique. Les tarifs sont communiqués sur demande après un premier échange.
            </p>
          </div>

          <div className='grid-formules'>
            {formules.map((f) => (
              <div
                key={f.label}
                style={{
                  padding: '3rem 2.5rem',
                  border: f.accent ? 'none' : '1px solid #e8e4e0',
                  background: f.accent ? '#1A1A1A' : '#fff',
                  position: 'relative',
                }}
              >
                {f.accent && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '1.5rem',
                      right: '1.5rem',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.6rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: '#cc0000',
                      border: '1px solid #cc0000',
                      padding: '0.3rem 0.7rem',
                    }}
                  >
                    Populaire
                  </span>
                )}
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.68rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: f.accent ? '#9a9590' : '#cc0000',
                    display: 'block',
                    marginBottom: '0.6rem',
                  }}
                >
                  {f.duration}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.8rem',
                    color: f.accent ? '#F8F5F2' : '#1A1A1A',
                    marginBottom: '0.8rem',
                    fontStyle: 'italic',
                  }}
                >
                  {f.label}
                </h3>
                <p
                  style={{
                    fontSize: '0.85rem',
                    color: f.accent ? '#9a9590' : '#3d3d3d',
                    letterSpacing: '0.025em',
                    marginBottom: '2rem',
                    lineHeight: 1.8,
                  }}
                >
                  {f.desc}
                </p>
                <div
                  style={{
                    borderTop: f.accent ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e8e4e0',
                    paddingTop: '1.5rem',
                    marginBottom: '2rem',
                  }}
                >
                  {f.items.map((item) => (
                    <div
                      key={item}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.7rem',
                        marginBottom: '0.7rem',
                      }}
                    >
                      <span style={{ color: '#cc0000', fontSize: '0.8rem' }}>—</span>
                      <span
                        style={{
                          fontSize: '0.85rem',
                          color: f.accent ? '#9a9590' : '#3d3d3d',
                          letterSpacing: '0.02em',
                        }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 'auto' }}>
                  <p
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.1rem',
                      fontStyle: 'italic',
                      color: f.accent ? '#F8F5F2' : '#1A1A1A',
                      marginBottom: '1.2rem',
                    }}
                  >
                    {f.price}
                  </p>
                  <Link
                    href='/contact'
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.7rem',
                      fontWeight: 500,
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      padding: '0.85rem 2rem',
                      border: '1px solid',
                      borderColor: f.accent ? 'rgba(255,255,255,0.3)' : '#1A1A1A',
                      color: f.accent ? '#F8F5F2' : '#1A1A1A',
                      display: 'inline-block',
                      transition: 'all 0.3s',
                    }}
                    className={f.accent ? 'hover:bg-white hover:text-[#1A1A1A]' : 'hover:bg-[#1A1A1A] hover:text-[#F8F5F2]'}
                  >
                    Demander un devis
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note haut de gamme */}
      <section
        style={{
          background: '#1A1A1A',
          padding: '6rem 3rem',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
            color: '#F8F5F2',
            fontStyle: 'italic',
            lineHeight: 1.6,
            maxWidth: '650px',
            margin: '0 auto 2rem',
          }}
        >
          Je n'accepte qu'un nombre limité de mariages chaque année pour offrir à chaque couple une attention pleine et entière.
        </p>
        <Link
          href='/contact'
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.72rem',
            fontWeight: 500,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            padding: '0.95rem 2.5rem',
            border: '1px solid rgba(255,255,255,0.4)',
            color: '#F8F5F2',
            display: 'inline-block',
          }}
          className='hover:bg-white hover:text-[#1A1A1A] transition-all duration-300'
        >
          Vérifier mes disponibilités
        </Link>
      </section>

      <Footer />
    </>
  );
}
