import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/ui/nav';
import Footer from '@/components/ui/footer';

import type { Metadata } from 'next';

const SITE_URL = 'https://www.lamartinastudio.com';

export const metadata: Metadata = {
  title: 'Journal — Reportages & Histoires de Mariages',
  description:
    'Le journal de Maison La Martina : reportages complets, histoires de couples et inspirations mariage. Mariages en Toscane, Provence, Côte d\'Azur, Paris et toute l\'Europe par Alessio Lamartina.',
  keywords: [
    'blog photographe mariage',
    'journal photographe mariage',
    'reportage mariage blog',
    'histoire mariage Toscane',
    'mariage Provence reportage',
    'inspiration mariage photo',
    'blog mariage haut de gamme',
    'témoignage mariage photographe',
    'mariage France blog',
    'mariage Italie blog',
    'mariage destination reportage',
    'wedding blog France',
    'wedding stories France',
    'real weddings Provence',
    'real weddings Tuscany',
    'inspiration mariage champêtre',
    'inspiration mariage château',
    'inspiration mariage villa',
    'shooting mariage extérieur',
    'photos mariage plein air',
    'Maison La Martina journal',
    'Alessio Lamartina blog',
  ],
  alternates: {
    canonical: `${SITE_URL}/journal`,
  },
  openGraph: {
    title: 'Journal — Reportages & Histoires de Mariages',
    description:
      'Reportages complets, histoires de couples et inspirations mariage par Alessio Lamartina.',
    url: `${SITE_URL}/journal`,
    type: 'website',
  },
};

const articles = [
  {
    slug: 'mariage-toscane',
    title: "Un mariage en Toscane sous la lumière de l'été",
    category: 'Il Giorno',
    date: '12 mars 2025',
    excerpt: "Au cœur des collines toscanes, Maria et Luca ont échangé leurs vœux dans la chaleur d'un coucher de soleil doré. Un reportage empreint de douceur et d'émotion.",
    src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=900&auto=format&fit=crop',
    featured: true,
  },
  {
    slug: 'details-qui-comptent',
    title: 'Les détails qui font toute la différence',
    category: 'Dettagli',
    date: '28 janvier 2025',
    excerpt: "Un bouquet, des alliances posées sur le bois d'un vieux banc, un regard furtif — c'est souvent dans les détails que se loge l'essentiel.",
    src: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=700&auto=format&fit=crop',
    featured: false,
  },
  {
    slug: 'amore-a-paris',
    title: 'Séance engagement à Paris au crépuscule',
    category: 'Amore',
    date: '5 novembre 2024',
    excerpt: 'Sophie et Thomas, amoureux de la Ville Lumière, ont choisi les quais de Seine pour leur séance couple. Une heure suspendue entre chien et loup.',
    src: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=700&auto=format&fit=crop',
    featured: false,
  },
  {
    slug: 'mariage-editorial',
    title: "Editorial — Le blanc et l'ardoise",
    category: 'Ispirazione',
    date: '18 septembre 2024',
    excerpt: "Un projet éditorial imaginé avec une styliste et une fleuriste autour du contraste entre le blanc immaculé et la pierre brute d'une abbaye.",
    src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=900&auto=format&fit=crop',
    featured: false,
  },
  {
    slug: 'cote-azur-lumiere',
    title: "La lumière de la Côte d'Azur",
    category: 'Il Giorno',
    date: '2 juillet 2024',
    excerpt: "Emilia et Marco avaient tout prévu dans les moindres détails. Mais c'est la lumière du soir sur la Méditerranée qui a tout sublimé.",
    src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=900&auto=format&fit=crop',
    featured: false,
  },
];

const journalLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.lamartinastudio.com' },
        { '@type': 'ListItem', position: 2, name: 'Journal', item: 'https://www.lamartinastudio.com/journal' },
      ],
    },
    {
      '@type': 'Blog',
      name: 'Journal — Maison La Martina',
      description: 'Reportages complets et histoires de mariages par Alessio Lamartina, photographe de mariage haut de gamme.',
      url: 'https://www.lamartinastudio.com/journal',
      author: {
        '@type': 'Person',
        name: 'Alessio Lamartina',
        url: 'https://www.lamartinastudio.com/a-propos',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Maison La Martina',
        url: 'https://www.lamartinastudio.com',
      },
    },
  ],
};

export default function Journal() {
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <>
      <Script
        id='json-ld-journal'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(journalLd) }}
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
            color: '#e01515',
            display: 'block',
            marginBottom: '1rem',
          }}
        >
          Reportages & Inspirations
        </span>
        <h1
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            marginBottom: '1.2rem',
          }}
        >
          Journal
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.92rem',
            color: '#3d3d3d',
            letterSpacing: '0.025em',
            maxWidth: '460px',
            margin: '0 auto',
          }}
        >
          Histoires de couples, éditoriaux et inspirations pour les amoureux de la belle photographie.
        </p>
      </section>

      {/* Article à la une */}
      <section style={{ background: '#F8F5F2', padding: '2rem 0 5rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 3rem' }}>
          <Link
            href={`/journal/${featured.slug}`}
            className='grid-featured-article group'
          >
            <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden', borderRadius: '4px' }}>
              <Image
                src={featured.src}
                alt={featured.title}
                fill
                className='object-cover transition-transform duration-700 group-hover:scale-105'
              />
            </div>
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.62rem',
                  fontWeight: 500,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: '#e01515',
                  display: 'block',
                  marginBottom: '0.5rem',
                }}
              >
                {featured.category}
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)',
                  marginBottom: '1.2rem',
                  lineHeight: 1.2,
                }}
              >
                {featured.title}
              </h2>
              <p style={{ fontSize: '0.88rem', color: '#3d3d3d', letterSpacing: '0.025em', lineHeight: 1.9, marginBottom: '1.5rem' }}>
                {featured.excerpt}
              </p>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.72rem',
                  fontWeight: 500,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: '#1A1A1A',
                  borderBottom: '1px solid #1A1A1A',
                  paddingBottom: '2px',
                }}
                className='group-hover:text-[#e01515] group-hover:border-[#e01515] transition-colors duration-200'
              >
                Lire le reportage
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Séparateur */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 3rem' }}>
        <div style={{ borderTop: '1px solid #e8e4e0' }} />
      </div>

      {/* Grille articles */}
      <section style={{ background: '#F8F5F2', padding: '5rem 0 7rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 3rem' }}>
          <div className='grid-articles'>
            {rest.map((article) => (
              <Link
                key={article.slug}
                href={`/journal/${article.slug}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
                className='group'
              >
                <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden', borderRadius: '4px', marginBottom: '1.5rem' }}>
                  <Image
                    src={article.src}
                    alt={article.title}
                    fill
                    className='object-cover transition-transform duration-700 group-hover:scale-105'
                  />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.6rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.62rem',
                      fontWeight: 500,
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: '#e01515',
                    }}
                  >
                    {article.category}
                  </span>
                  <span style={{ fontSize: '0.72rem', color: '#9a9590', letterSpacing: '0.05em' }}>
                    {article.date}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
                    marginBottom: '0.8rem',
                    lineHeight: 1.2,
                  }}
                >
                  {article.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: '#3d3d3d', letterSpacing: '0.025em', lineHeight: 1.8 }}>
                  {article.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
