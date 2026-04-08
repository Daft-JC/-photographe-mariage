import type { Metadata } from 'next';
import Script from 'next/script';
import Nav from '@/components/ui/nav';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';
import Image from 'next/image';
import Link from 'next/link';

const SITE_URL = 'https://www.lamartinastudio.com';

export const metadata: Metadata = {
  alternates: { canonical: SITE_URL },
  openGraph: {
    url: SITE_URL,
    title: 'Maison La Martina — Photographe de Mariage France & Italie',
    description:
      'Alessio La Martina, photographe de mariage haut de gamme en France, Italie et Europe. Reportages élégants, émotionnels et intemporels en Provence, Côte d\'Azur, Toscane, Paris, Monaco.',
  },
};

const portfolioItems = [
  {
    src: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=800&auto=format&fit=crop',
    label: 'Amore',
    aspect: 'tall',
  },
  {
    src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=900&auto=format&fit=crop',
    label: 'Il Giorno',
    aspect: 'wide',
  },
  {
    src: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=600&auto=format&fit=crop',
    label: 'Dettagli',
    aspect: 'square',
  },
  {
    src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop',
    label: 'Ispirazione',
    aspect: 'wide',
  },
];

const instaPhotos = [
  'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?q=80&w=400&auto=format&fit=crop',
];

const homeFaqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Où travaillez-vous en tant que photographe de mariage ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Je travaille principalement en France (Provence, Côte d\'Azur, Paris, Lyon, Bordeaux) et en Italie (Toscane, Rome, Florence, Côte Amalfitaine, Lac de Côme). Je suis également disponible pour des mariages destination partout en Europe : Espagne, Grèce, Portugal, Monaco, Suisse et ailleurs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps à l\'avance faut-il réserver un photographe de mariage ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Je recommande de réserver idéalement 12 à 18 mois avant votre mariage, surtout pour les dates de printemps et d\'été très demandées. N\'hésitez pas à me contacter même si votre mariage est dans moins d\'un an — des dates restent parfois disponibles.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quel est votre style de photographie de mariage ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mon approche est naturelle, documentaire et élégante. Je privilégie la lumière naturelle, les émotions authentiques et les moments spontanés. Mon esthétique est fine art : des images lumineuses, intemporelles, qui ressemblent à de véritables peintures.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien de photos recevons-nous après le mariage ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pour une journée complète, vous recevrez entre 400 et 700 images soigneusement sélectionnées et retouchées, livrées en haute résolution dans une galerie privée en ligne. La livraison se fait sous 6 à 8 semaines.',
      },
    },
    {
      '@type': 'Question',
      name: 'Proposez-vous des séances engagement avant le mariage ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, je propose des séances engagement (séance photo de couple avant le mariage). C\'est une excellente façon de faire connaissance et de vous mettre à l\'aise devant l\'objectif avant le grand jour. Ces séances peuvent avoir lieu en Provence, en Italie ou dans le lieu de votre choix.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vous déplacez-vous pour des mariages hors de France ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolument. Je suis un photographe de mariage destination et je voyage régulièrement en Italie, en Espagne, en Grèce, au Portugal, en Suisse et dans toute l\'Europe. Les frais de déplacement sont calculés en fonction de la destination.',
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <Script
        id='json-ld-home-faq'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqLd) }}
        strategy='beforeInteractive'
      />
      <Nav />
      <ScrollExpandMedia
        mediaSrc='/DSC02024.jpg'
        bgVideoSrc='https://assets.mixkit.co/videos/40591/40591-1080.mp4'
        title='Maison La Martina'
        subtitle='Photographe & vidéaste de mariage'
        scrollToExpand='Faites défiler'
      >

        {/* ── PORTFOLIO APERÇU ── */}
        <section style={{ background: '#F8F5F2', padding: '5rem 0' }}>
          <div className='px-site' style={{ maxWidth: '1400px', margin: '0 auto' }}>
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
                Portfolio
              </span>
              <h2
                style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem,4vw,3.5rem)', marginBottom: '1.2rem' }}
              >
                Chaque mariage,<br />une histoire <em style={{ fontFamily: 'var(--font-heading)', color: '#cc0000', fontStyle: 'normal', textTransform: 'none' }}>unique</em>
              </h2>
              <p style={{ fontSize: '0.92rem', color: '#3d3d3d', letterSpacing: '0.025em', maxWidth: '520px', margin: '0 auto' }}>
                Des instants volés, des regards complices, des émotions sincères.<br />
                Je capture ce que les mots ne peuvent pas dire.
              </p>
            </div>

            {/* Grid */}
            <div className='grid-home-portfolio'>
              {/* Image 1 — tall left */}
              <Link
                href='/portfolio'
                style={{ gridColumn: '1 / 5', gridRow: '1 / 3', position: 'relative', overflow: 'hidden', borderRadius: '4px', display: 'block', aspectRatio: '3/4' }}
                className='group'
              >
                <Image src={portfolioItems[0].src} alt={portfolioItems[0].label} fill className='object-cover transition-transform duration-700 group-hover:scale-105' />
                <div className='absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-end p-6'>
                  <span style={{ fontFamily: 'var(--font-heading)', color: '#F8F5F2', fontSize: '1.5rem', fontStyle: 'italic', opacity: 0 }} className='group-hover:opacity-100 transition-opacity duration-300'>{portfolioItems[0].label}</span>
                </div>
              </Link>

              {/* Image 2 — top right wide */}
              <Link
                href='/portfolio'
                style={{ gridColumn: '5 / 13', gridRow: '1 / 2', position: 'relative', overflow: 'hidden', borderRadius: '4px', display: 'block', aspectRatio: '16/9' }}
                className='group'
              >
                <Image src={portfolioItems[1].src} alt={portfolioItems[1].label} fill className='object-cover transition-transform duration-700 group-hover:scale-105' />
                <div className='absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-end p-6'>
                  <span style={{ fontFamily: 'var(--font-heading)', color: '#F8F5F2', fontSize: '1.5rem', fontStyle: 'italic', opacity: 0 }} className='group-hover:opacity-100 transition-opacity duration-300'>{portfolioItems[1].label}</span>
                </div>
              </Link>

              {/* Image 3 — square */}
              <Link
                href='/portfolio'
                style={{ gridColumn: '5 / 9', gridRow: '2 / 3', position: 'relative', overflow: 'hidden', borderRadius: '4px', display: 'block', aspectRatio: '1/1' }}
                className='group'
              >
                <Image src={portfolioItems[2].src} alt={portfolioItems[2].label} fill className='object-cover transition-transform duration-700 group-hover:scale-105' />
                <div className='absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-end p-6'>
                  <span style={{ fontFamily: 'var(--font-heading)', color: '#F8F5F2', fontSize: '1.5rem', fontStyle: 'italic', opacity: 0 }} className='group-hover:opacity-100 transition-opacity duration-300'>{portfolioItems[2].label}</span>
                </div>
              </Link>

              {/* Image 4 — bottom right */}
              <Link
                href='/portfolio'
                style={{ gridColumn: '9 / 13', gridRow: '2 / 3', position: 'relative', overflow: 'hidden', borderRadius: '4px', display: 'block', aspectRatio: '1/1' }}
                className='group'
              >
                <Image src={portfolioItems[3].src} alt={portfolioItems[3].label} fill className='object-cover transition-transform duration-700 group-hover:scale-105' />
                <div className='absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-end p-6'>
                  <span style={{ fontFamily: 'var(--font-heading)', color: '#F8F5F2', fontSize: '1.5rem', fontStyle: 'italic', opacity: 0 }} className='group-hover:opacity-100 transition-opacity duration-300'>{portfolioItems[3].label}</span>
                </div>
              </Link>
            </div>

            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <Link
                href='/portfolio'
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
                  transition: 'all 0.4s ease',
                }}
                className='hover:bg-[#1A1A1A] hover:text-[#F8F5F2]'
              >
                Voir tout le portfolio
              </Link>
            </div>
          </div>
        </section>

        {/* ── À PROPOS TEASER ── */}
        <section style={{ background: '#F8F5F2', padding: '5rem 0' }}>
          <div
            className='grid-2col-about px-site'
            style={{ maxWidth: '1400px', margin: '0 auto' }}
          >
            <div style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden', borderRadius: '4px' }}>
              <Image
                src='https://images.unsplash.com/photo-1570696516188-ade861b84a49?q=80&w=700&auto=format&fit=crop'
                alt='Alessio La Martina, photographe'
                fill
                className='object-cover'
              />
            </div>
            <div>
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
                À propos
              </span>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem,3.5vw,3rem)', marginBottom: '1.5rem' }}>
                Je crois que la beauté<br /><em>est dans l'instant vrai</em>
              </h2>
              <p style={{ fontSize: '0.92rem', color: '#3d3d3d', letterSpacing: '0.025em', marginBottom: '1.2rem' }}>
                Je suis Alessio La Martina. Ce qui a tout déclenché, c'est une année passée en Australie — une année où j'ai pu consacrer entièrement mon temps à la photographie, et où j'ai compris que c'était ma voie.
              </p>
              <p style={{ fontSize: '0.92rem', color: '#3d3d3d', letterSpacing: '0.025em', marginBottom: '2.5rem' }}>
                De retour en Europe, c'est la photographie de mariage qui m'a touché au cœur. La lumière du jour J, l'émotion brute, la beauté des moments qui ne se répètent jamais — c'est là que j'ai trouvé mon langage.
              </p>
              <Link
                href='/a-propos'
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
                  marginBottom: '2rem',
                }}
                className='hover:bg-[#1A1A1A] hover:text-[#F8F5F2] transition-all duration-300'
              >
                Mon univers
              </Link>
              <br />
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.8rem',
                  fontStyle: 'italic',
                  color: '#1A1A1A',
                  display: 'block',
                  marginTop: '0.5rem',
                }}
              >
                Alessio La Martina
              </span>
            </div>
          </div>
        </section>

        {/* ── CITATION ── */}
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
              fontSize: 'clamp(1.4rem,3vw,2.2rem)',
              color: '#F8F5F2',
              fontStyle: 'italic',
              lineHeight: 1.5,
              maxWidth: '700px',
              margin: '0 auto 1rem',
            }}
          >
            « La photographie est la seule langue<br />qui puisse être comprise partout dans le monde. »
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
            Bruno Barbey
          </span>
        </section>

        {/* ── TÉMOIGNAGES ── */}
        <section style={{ background: '#F8F5F2', padding: '6rem 0' }}>
          <div className='px-site' style={{ maxWidth: '1400px', margin: '0 auto' }}>
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
                Ce qu'ils en disent
              </span>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem,3.5vw,3rem)' }}>
                Des mots qui touchent le <em style={{ color: '#cc0000', fontStyle: 'normal' }}>cœur</em>
              </h2>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2.5rem',
              }}
            >
              {[
                {
                  quote: "Alessio a su capter exactement ce que nous voulions — des émotions brutes, des regards vrais. On a pleuré en découvrant les photos. Un travail d'une sensibilité rare.",
                  name: 'Sophie & Maxime',
                  detail: 'Mariage à Martigues · Septembre 2025',
                },
                {
                  quote: "Une discrétion absolue le jour J, et des images qui racontent notre histoire comme un film. Chaque photo est une peinture. Nous recommandons Alessio les yeux fermés.",
                  name: 'Camille & Julien',
                  detail: 'Mariage à Marseille · Octobre 2025',
                },
                {
                  quote: "Depuis nos fiançailles jusqu'au lendemain du mariage, Alessio nous a accompagnés avec une élégance et une générosité incroyables. Les photos sont au-delà de nos espérances.",
                  name: 'Lucie & Thomas',
                  detail: 'Mariage à Aix-en-Provence · Janvier 2026',
                },
              ].map(({ quote, name, detail }) => (
                <div
                  key={name}
                  style={{
                    background: '#fff',
                    padding: '3rem 2.5rem',
                    borderTop: '2px solid #cc0000',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem',
                      color: '#1A1A1A',
                      lineHeight: 1.9,
                      marginBottom: '2rem',
                      fontWeight: 300,
                    }}
                  >
                    « {quote} »
                  </p>
                  <div>
                    <span
                      style={{
                        fontFamily: 'Peristiwa, serif',
                        fontSize: '1rem',
                        color: '#cc0000',
                        display: 'block',
                        marginBottom: '0.25rem',
                      }}
                    >
                      {name}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.68rem',
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        color: '#9a9590',
                      }}
                    >
                      {detail}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ position: 'relative', minHeight: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
          <Image
            src='https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1920&auto=format&fit=crop'
            alt='Votre mariage'
            fill
            className='object-cover'
          />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(26,26,26,0.6)' }} />
          <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 2rem' }}>
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
              Votre mariage
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2rem,4vw,3.5rem)',
                color: '#F8F5F2',
                marginBottom: '1.5rem',
              }}
            >
              Racontons votre<br /><em>plus belle histoire</em>
            </h2>
            <p style={{ fontSize: '0.92rem', color: 'rgba(248,245,242,0.8)', letterSpacing: '0.025em', marginBottom: '2.5rem', maxWidth: '480px', margin: '0 auto 2.5rem' }}>
              Disponibilités limitées. Je n'accepte qu'un nombre restreint de mariages chaque année pour vous offrir une attention pleine et entière.
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
                border: '1px solid rgba(255,255,255,0.55)',
                color: '#F8F5F2',
                display: 'inline-block',
              }}
              className='hover:bg-white hover:text-[#1A1A1A] transition-all duration-300'
            >
              Vérifier mes disponibilités
            </Link>
          </div>
        </section>

        {/* ── INSTAGRAM ── */}
        <section style={{ background: '#F8F5F2', padding: '5rem 0' }}>
          <div className='px-site' style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center', marginBottom: '3rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.68rem',
                fontWeight: 500,
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: '#cc0000',
                display: 'block',
                marginBottom: '0.8rem',
              }}
            >
              Suivez l'aventure
            </span>
            <a
              href='#'
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.8rem',
                letterSpacing: '0.1em',
                color: '#1A1A1A',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5'><rect x='2' y='2' width='20' height='20' rx='5'/><circle cx='12' cy='12' r='5'/><circle cx='17.5' cy='6.5' r='1.5' fill='currentColor' stroke='none'/></svg>
              @lamartinastudio
            </a>
          </div>
          <div className='grid-instagram px-site'>
            {instaPhotos.map((src, i) => (
              <div key={i} style={{ position: 'relative', aspectRatio: '1/1', overflow: 'hidden' }} className='group cursor-pointer'>
                <Image src={src} alt='' fill className='object-cover transition-transform duration-500 group-hover:scale-110' />
                <div className='absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center'>
                  <svg className='opacity-0 group-hover:opacity-100 transition-opacity duration-300' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' strokeWidth='1.5'><rect x='2' y='2' width='20' height='20' rx='5'/><circle cx='12' cy='12' r='5'/></svg>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer style={{ background: '#1A1A1A', color: '#F8F5F2', padding: '5rem 0 2rem' }}>
          <div
            style={{
              maxWidth: '1400px',
              margin: '0 auto',
              padding: '0 3rem',
              display: 'grid',
              gridTemplateColumns: '2fr 1fr 1fr 1fr',
              gap: '3rem',
              marginBottom: '3rem',
            }}
            className='grid-cols-1 md:grid-cols-4'
          >
            <div>
              <Link href='/' style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', display: 'block', marginBottom: '1.2rem' }}>
                <span style={{ fontFamily: 'var(--font-heading)', color: '#cc0000' }}>Maison</span>{' '}<span style={{ fontFamily: 'Peristiwa, serif' }}>La Martina</span>
              </Link>
              <p style={{ fontSize: '0.85rem', color: '#9a9590', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Photographe de mariage haut de gamme, spécialisé dans les mariages élégants et intimistes en France, Italie et partout en Europe.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                {['Instagram', 'Pinterest', 'Facebook'].map((s) => (
                  <a key={s} href='#' style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: '#9a9590', transition: 'color 0.2s' }} className='hover:text-[#F8F5F2]'>{s}</a>
                ))}
              </div>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#9a9590', marginBottom: '1.5rem' }}>Navigation</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {[['/', 'Accueil'], ['/portfolio', 'Portfolio'], ['/a-propos', 'À propos'], ['/services', 'Services'], ['/journal', 'Journal'], ['/contact', 'Contact']].map(([href, label]) => (
                  <li key={href}><Link href={href} style={{ fontSize: '0.85rem', color: '#9a9590' }} className='hover:text-[#F8F5F2] transition-colors'>{label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#9a9590', marginBottom: '1.5rem' }}>Portfolio</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {['Amore', 'Il Giorno', 'Dettagli', 'Ispirazione'].map((l) => (
                  <li key={l}><Link href='/portfolio' style={{ fontSize: '0.85rem', color: '#9a9590' }} className='hover:text-[#F8F5F2] transition-colors'>{l}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#9a9590', marginBottom: '1.5rem' }}>Contact</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {[['mailto:hello@lamartinastudio.com', 'hello@lamartinastudio.com'], ['tel:+33600000000', '+33 6 00 00 00 00'], ['/contact', 'Disponibilités'], ['/contact', 'Devis']].map(([href, label]) => (
                  <li key={label}><a href={href} style={{ fontSize: '0.85rem', color: '#9a9590' }} className='hover:text-[#F8F5F2] transition-colors'>{label}</a></li>
                ))}
              </ul>
            </div>
          </div>
          <div
            style={{
              maxWidth: '1400px',
              margin: '0 auto',
              padding: '2rem 3rem 0',
              borderTop: '1px solid rgba(255,255,255,0.08)',
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '0.5rem',
            }}
          >
            <span style={{ fontSize: '0.78rem', color: '#9a9590' }}>© 2024 Maison La Martina — Photographe de Mariage</span>
            <span style={{ fontSize: '0.78rem', color: '#9a9590' }}>
              Réalisé avec <span style={{ color: '#cc0000' }}>♥</span> &nbsp;·&nbsp;{' '}
              <a href='/mentions-legales' className='hover:text-[#F8F5F2] transition-colors'>Mentions légales</a>
            </span>
          </div>
        </footer>

      </ScrollExpandMedia>
    </>
  );
}
