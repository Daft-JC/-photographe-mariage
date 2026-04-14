import type { Metadata } from 'next';
import Script from 'next/script';
import Nav from '@/components/ui/nav';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';
import Image from 'next/image';
import Link from 'next/link';
import { PortfolioGallery } from '@/components/ui/portfolio-gallery';

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
    src: '/portfolio/ispirazione/DSC00797.jpg',
    label: 'Ispirazione',
    aspect: 'tall',
  },
  {
    src: '/portfolio/amore/DSC01920.jpg',
    label: 'Amore',
    aspect: 'wide',
  },
  {
    src: '/portfolio/dettagli/DSC00123.jpg',
    label: 'Dettagli',
    aspect: 'square',
  },
  {
    src: '/portfolio/amore/DSC01882.jpg',
    label: 'Amore',
    aspect: 'square',
  },
];

const instaPhotos = [
  '/portfolio/amore/DSC05335.jpg',
  '/portfolio/ispirazione/DSC00393.jpg',
  '/portfolio/dettagli/DSC05328.jpg',
  '/portfolio/amore/DSC05385.jpg',
  '/portfolio/ispirazione/DSC01982.jpg',
  '/portfolio/il-giorno/DSC01757.jpg',
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
        mediaVideoSrc='/hero-web.mp4'
        bgImageSrc='/bg-hero.jpg'
        title='Maison La Martina'
        subtitle='Photographe & vidéaste de mariage'
        scrollToExpand='Faites défiler'
      >

        {/* ── PORTFOLIO APERÇU ── */}
        <PortfolioGallery />

        {/* ── À PROPOS TEASER ── */}
        <section style={{ background: '#F8F5F2', padding: '5rem 0' }}>
          <div
            className='grid-2col-about px-site'
            style={{ maxWidth: '1400px', margin: '0 auto' }}
          >
            <div style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden', borderRadius: '4px' }}>
              <Image
                src='/alessio.jpg'
                alt='Alessio La Martina, photographe'
                fill
                className='object-cover object-center'
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
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.8rem',
                  fontStyle: 'italic',
                  color: '#1A1A1A',
                  display: 'block',
                  marginBottom: '2rem',
                }}
              >
                Alessio La Martina
              </span>
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
                }}
                className='hover:bg-[#1A1A1A] hover:text-[#F8F5F2] transition-all duration-300'
              >
                Mon univers
              </Link>
            </div>
          </div>
        </section>

        {/* ── CITATION ── */}
        <section style={{ background: '#F8F5F2', padding: '5rem 3rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            <div style={{ width: '1px', height: '50px', background: '#cc0000', margin: '0 auto 2.5rem' }} />
            <p
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.4rem,3vw,2.2rem)',
                color: '#1A1A1A',
                fontStyle: 'italic',
                lineHeight: 1.5,
                marginBottom: '1.5rem',
              }}
            >
              « Photographier, c'est choisir. C'est regarder le monde avec des yeux nouveaux. »
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
              Gianni Berengo Gardin
            </span>
            <div style={{ width: '1px', height: '50px', background: '#cc0000', margin: '2.5rem auto 0' }} />
          </div>
        </section>

        {/* ── TÉMOIGNAGES ── */}
        <section style={{ background: '#ffffff', padding: '6rem 0' }}>
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
                    background: '#F8F5F2',
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
              href='https://www.instagram.com/maisonlamartina/'
              target='_blank'
              rel='noopener noreferrer'
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
              @maisonlamartina
            </a>
          </div>
          <div className='grid-instagram px-site'>
            {instaPhotos.map((src, i) => (
              <a key={i} href='https://www.instagram.com/maisonlamartina/' target='_blank' rel='noopener noreferrer' style={{ position: 'relative', aspectRatio: '1/1', overflow: 'hidden', display: 'block' }} className='group cursor-pointer'>
                <Image src={src} alt='' fill className='object-cover transition-transform duration-500 group-hover:scale-110' />
                <div className='absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center'>
                  <svg className='opacity-0 group-hover:opacity-100 transition-opacity duration-300' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' strokeWidth='1.5'><rect x='2' y='2' width='20' height='20' rx='5'/><circle cx='12' cy='12' r='5'/></svg>
                </div>
              </a>
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
                <span style={{ fontFamily: 'var(--font-heading)' }}>Maison</span>{' '}<span style={{ fontFamily: 'Peristiwa, serif', color: '#cc0000' }}>La Martina</span>
              </Link>
              <p style={{ fontSize: '0.85rem', color: '#9a9590', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Photographe de mariage spécialisé dans tous types de mariages en France, Italie et partout en Europe.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                {[
                  { name: 'Instagram', href: 'https://www.instagram.com/maisonlamartina/' },
                  { name: 'Pinterest', href: '#' },
                  { name: 'Facebook', href: '#' },
                ].map(({ name, href }) => (
                  <a
                    key={name}
                    href={href}
                    target={href !== '#' ? '_blank' : undefined}
                    rel={href !== '#' ? 'noopener noreferrer' : undefined}
                    style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: '#9a9590', transition: 'color 0.2s' }}
                    className='hover:text-[#F8F5F2]'
                  >
                    {name}
                  </a>
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
                {[['mailto:contact@maisonlamartina.com', 'contact@maisonlamartina.com'], ['tel:+33652433221', '06 52 43 32 21'], ['/contact', 'Disponibilités'], ['/contact', 'Devis']].map(([href, label]) => (
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
