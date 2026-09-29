import type { Metadata } from 'next';
import Nav from '@/components/ui/nav';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';
import Image from 'next/image';
import Link from 'next/link';
import { PortfolioGallery } from '@/components/ui/portfolio-gallery';
import Footer from '@/components/ui/footer';
import { SITE_URL } from '@/lib/site';
import { VILLES } from '@/lib/villes';

export const metadata: Metadata = {
  alternates: { canonical: SITE_URL },
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

// Source unique : affichée dans la page ET déclarée à Google.
// Les chiffres doivent rester alignés avec app/services/page.tsx.
const FAQ = [
  {
    q: 'Où travaillez-vous en tant que photographe de mariage ?',
    a: "Je suis basé à Martigues et je photographie principalement des mariages en Provence : Marseille, Aix-en-Provence, Martigues, la Côte Bleue, les Alpilles ou le Luberon. Je me déplace aussi partout en France, en Italie et en Europe.",
  },
  {
    q: 'Proposez-vous la photo et la vidéo ?',
    a: "Oui, je suis photographe et vidéaste : toutes mes formules réunissent photo et vidéo, du teaser de 2 minutes au film du mariage et à la vidéo longue de la journée.",
  },
  {
    q: 'Quels sont vos tarifs ?',
    a: "Trois formules : Eternità à 1 400 €, Il Giorno à 1 700 € et Per Sempre à 1 800 €, des préparatifs jusqu'à la pièce montée. Les frais de déplacement sont en supplément.",
  },
  {
    q: 'Combien de photos recevons-nous, et quand ?',
    a: 'Entre 300 et 400 photos retouchées en haute définition selon la formule. Les photos sont livrées sous 2 à 4 semaines, les vidéos sous 2 à 3 mois.',
  },
  {
    q: 'Quel est votre style ?',
    a: "Une approche documentaire et intime : je ne mets pas en scène, j'observe, j'anticipe et je capture. Je privilégie la lumière naturelle et les émotions vraies.",
  },
];

const homeFaqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqLd) }}
      />
      <Nav />
      <ScrollExpandMedia
        mediaSrc='/DSC02024.jpg'
        mediaVideoSrc='/hero-web.mp4'
        bgImageSrc='/bg-hero.jpg'
        title='Maison La Martina'
        subtitle='Photographe & vidéaste de mariage en Provence'
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
            src='/portfolio/amore/DSC01259.jpg'
            alt='Mariés souriants devant un escalier en pierre, photo en noir et blanc'
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
                <Image src={src} alt='Photo de mariage publiée sur Instagram — Maison La Martina' fill className='object-cover transition-transform duration-500 group-hover:scale-110' />
                <div className='absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center'>
                  <svg className='opacity-0 group-hover:opacity-100 transition-opacity duration-300' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' strokeWidth='1.5'><rect x='2' y='2' width='20' height='20' rx='5'/><circle cx='12' cy='12' r='5'/></svg>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ background: '#ffffff', padding: '6rem 0' }}>
          <div className='px-site' style={{ maxWidth: '900px', margin: '0 auto' }}>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#cc0000', display: 'block', marginBottom: '1rem' }}>
              Questions fréquentes
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem,3.5vw,3rem)', marginBottom: '2rem' }}>
              Photographe de mariage en Provence : vos questions
            </h2>
            {FAQ.map((f) => (
              <div key={f.q} style={{ borderTop: '1px solid #e8e4e0', padding: '1.5rem 0' }}>
                <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', fontWeight: 500, marginBottom: '0.6rem' }}>{f.q}</h3>
                <p style={{ fontSize: '0.92rem', color: '#3d3d3d', lineHeight: 1.9 }}>{f.a}</p>
              </div>
            ))}
            <p style={{ fontSize: '0.85rem', color: '#3d3d3d', marginTop: '2rem' }}>
              Je photographie votre mariage à{' '}
              {VILLES.map((v, i) => (
                <span key={v.slug}>
                  <Link href={`/photographe-mariage/${v.slug}`} style={{ textDecoration: 'underline' }}>{v.nom}</Link>
                  {i < VILLES.length - 1 ? ', ' : '.'}
                </span>
              ))}
            </p>
          </div>
        </section>

        <Footer />

      </ScrollExpandMedia>
    </>
  );
}
