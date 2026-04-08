import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/ui/nav';
import Footer from '@/components/ui/footer';

import type { Metadata } from 'next';

const SITE_URL = 'https://www.lamartinastudio.com';

export const metadata: Metadata = {
  title: 'À propos — Alessio La Martina, Photographe de Mariage',
  description:
    "Découvrez l'univers d'Alessio La Martina, photographe de mariage haut de gamme basé en Provence. Son histoire, sa vision artistique et sa philosophie du reportage photo de mariage en France, Italie et Europe.",
  keywords: [
    'Alessio La Martina photographe',
    'à propos photographe mariage',
    'photographe mariage Provence biographie',
    'photographe franco-italien mariage',
    'histoire photographe mariage',
    'vision photographe mariage',
    'style photographe mariage',
    'photographe mariage artistique Provence',
    'who is Alessio La Martina',
    'about wedding photographer France',
    'Maison La Martina à propos',
    'photographe mariage naturel émotionnel',
    'reportage mariage discret',
    'photographe mariage sensible',
  ],
  alternates: {
    canonical: `${SITE_URL}/a-propos`,
  },
  openGraph: {
    title: 'À propos — Alessio La Martina, Photographe de Mariage',
    description:
      "Découvrez l'univers d'Alessio La Martina, photographe de mariage haut de gamme en Provence, France, Italie et Europe.",
    url: `${SITE_URL}/a-propos`,
    type: 'profile',
    images: [
      {
        url: `${SITE_URL}/og-apropos.jpg`,
        width: 1200,
        height: 630,
        alt: 'Alessio La Martina — Photographe de Mariage',
      },
    ],
  },
};

const aproposLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.lamartinastudio.com' },
        { '@type': 'ListItem', position: 2, name: 'À propos', item: 'https://www.lamartinastudio.com/a-propos' },
      ],
    },
    {
      '@type': 'ProfilePage',
      mainEntity: {
        '@type': 'Person',
        name: 'Alessio La Martina',
        givenName: 'Alessio',
        familyName: 'Lamartina',
        jobTitle: 'Photographe de Mariage',
        description:
          'Photographe de mariage haut de gamme basé en Provence, spécialisé dans les reportages élégants et émotionnels en France, Italie et Europe.',
        url: 'https://www.lamartinastudio.com/a-propos',
        image: 'https://www.lamartinastudio.com/alessio-lamartina.jpg',
        knowsLanguage: ['fr', 'it', 'en'],
        nationality: { '@type': 'Country', name: 'Italy' },
        sameAs: [
          'https://www.instagram.com/lamartinastudio',
          'https://www.pinterest.fr/lamartinastudio',
        ],
        worksFor: {
          '@type': 'LocalBusiness',
          name: 'Maison La Martina',
          url: 'https://www.lamartinastudio.com',
        },
      },
    },
  ],
};

export default function APropos() {
  return (
    <>
      <Script
        id='json-ld-apropos'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aproposLd) }}
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
          L'artiste
        </span>
        <h1
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            marginBottom: '1.2rem',
          }}
        >
          À propos
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
          Photographe de mariage basé en France, opérant entre Paris, l'Italie et toute l'Europe.
        </p>
      </section>

      {/* Intro — portrait + texte */}
      <section style={{ background: '#F8F5F2', padding: '2rem 0 7rem' }}>
        <div
          className='grid-2col-intro px-site'
          style={{ maxWidth: '1400px', margin: '0 auto' }}
        >
          <div style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden', borderRadius: '4px' }}>
            <Image
              src='https://images.unsplash.com/photo-1570696516188-ade861b84a49?q=80&w=800&auto=format&fit=crop'
              alt='Alessio La Martina, photographe'
              fill
              className='object-cover'
            />
          </div>
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
                marginBottom: '2rem',
                lineHeight: 1.2,
              }}
            >
              Tout a commencé<br /><em>par un voyage</em>
            </h2>
            <p style={{ fontSize: '0.92rem', color: '#3d3d3d', letterSpacing: '0.025em', marginBottom: '1.2rem', lineHeight: 1.9 }}>
              Je suis Alessio La Martina. Ce qui a tout déclenché, c'est une année passée en Australie — une année où j'ai pu consacrer entièrement mon temps à la photographie, et où j'ai compris que c'était ma voie.
            </p>
            <p style={{ fontSize: '0.92rem', color: '#3d3d3d', letterSpacing: '0.025em', marginBottom: '1.2rem', lineHeight: 1.9 }}>
              De retour en Europe, c'est la photographie de mariage qui m'a touché au cœur. La lumière du jour J, l'émotion brute, la beauté des moments qui ne se répètent jamais — c'est là que j'ai trouvé mon langage.
            </p>
            <p style={{ fontSize: '0.92rem', color: '#3d3d3d', letterSpacing: '0.025em', lineHeight: 1.9 }}>
              Mon approche est documentaire et intime. Je ne mets pas en scène — j'observe, j'anticipe, je capture. Chaque couple me confie l'une des journées les plus importantes de leur vie, et cette confiance, je la prends très au sérieux.
            </p>
          </div>
        </div>
      </section>

      {/* Citation */}
      <section
        style={{
          background: '#1A1A1A',
          padding: '7rem 3rem',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
            color: '#F8F5F2',
            fontStyle: 'italic',
            lineHeight: 1.5,
            maxWidth: '700px',
            margin: '0 auto 1.2rem',
          }}
        >
          « Je ne capture pas des photos.<br />Je préserve des émotions. »
        </p>
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.72rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#9a9590',
          }}
        >
          Alessio La Martina
        </span>
      </section>

      {/* Vision & approche */}
      <section style={{ background: '#F8F5F2', padding: '7rem 0' }}>
        <div className='px-site' style={{ maxWidth: '1400px', margin: '0 auto' }}>
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
              Ma philosophie
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
              }}
            >
              Une approche <em>artistique et humaine</em>
            </h2>
          </div>

          <div className='grid-philosophy'>
            {[
              {
                num: '01',
                title: 'L\'authenticité',
                text: 'Je privilégie les instants vrais. Pas de pose forcée, pas de sourires artificiels. La beauté est dans la spontanéité.',
              },
              {
                num: '02',
                title: 'La lumière',
                text: 'Chaque image naît d\'une relation avec la lumière — naturelle, dorée, rasante. Je façonne mes compositions autour d\'elle.',
              },
              {
                num: '03',
                title: 'L\'émotion',
                text: 'Un regard échangé, une larme retenue, un fou-rire complice. Ce sont ces instants que je traque et que je garde pour toujours.',
              },
            ].map((item) => (
              <div key={item.num}>
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '3rem',
                    color: '#e8e4e0',
                    display: 'block',
                    marginBottom: '1rem',
                    fontStyle: 'italic',
                  }}
                >
                  {item.num}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.4rem',
                    marginBottom: '0.8rem',
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#3d3d3d', letterSpacing: '0.025em', lineHeight: 1.9 }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo panoramique + texte */}
      <section style={{ background: '#F8F5F2', padding: '0 0 7rem' }}>
        <div style={{ position: 'relative', height: '55vh', overflow: 'hidden', marginBottom: '5rem' }}>
          <Image
            src='https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=1920&auto=format&fit=crop'
            alt='Mariage en Italie'
            fill
            className='object-cover'
          />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(26,26,26,0.3)' }} />
        </div>
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0 3rem',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
              marginBottom: '1.5rem',
            }}
          >
            France · Italie · <em>Europe</em>
          </h2>
          <p style={{ fontSize: '0.92rem', color: '#3d3d3d', letterSpacing: '0.025em', lineHeight: 1.9, marginBottom: '1rem' }}>
            Je travaille principalement en France et en Italie, deux pays dont j'aime profondément la culture, la lumière et l'art de vivre. Mais je me déplace partout en Europe pour immortaliser les mariages qui me touchent.
          </p>
          <p style={{ fontSize: '0.92rem', color: '#3d3d3d', letterSpacing: '0.025em', lineHeight: 1.9 }}>
            Chaque destination est une nouvelle lumière, un nouveau contexte — une nouvelle façon de raconter votre histoire.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#F8F5F2', padding: '0 3rem 7rem', textAlign: 'center' }}>
        <Link
          href='/contact'
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.72rem',
            fontWeight: 500,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            padding: '0.95rem 2.5rem',
            border: '1px solid #1A1A1A',
            color: '#1A1A1A',
            display: 'inline-block',
          }}
          className='hover:bg-[#1A1A1A] hover:text-[#F8F5F2] transition-all duration-300'
        >
          Travailler avec moi
        </Link>
      </section>

      <Footer />
    </>
  );
}
