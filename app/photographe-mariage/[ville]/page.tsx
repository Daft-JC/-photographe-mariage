import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Nav from '@/components/ui/nav';
import Footer from '@/components/ui/footer';
import { VILLES } from '@/lib/villes';
import { SITE_URL, SITE_NAME, PHONE, PHONE_INTL, OG_IMAGE } from '@/lib/site';

type Props = { params: Promise<{ ville: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return VILLES.map((v) => ({ ville: v.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ville } = await params;
  const v = VILLES.find((x) => x.slug === ville);
  if (!v) return {};
  const url = `${SITE_URL}/photographe-mariage/${v.slug}`;
  return {
    title: v.metaTitle,
    description: v.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: `${v.metaTitle} | ${SITE_NAME}`,
      description: v.metaDescription,
      url,
      type: 'website',
      locale: 'fr_FR',
      siteName: SITE_NAME,
      images: [{ url: `${SITE_URL}${v.photos[0].src}`, alt: v.photos[0].alt }, OG_IMAGE],
    },
  };
}

const label: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: '0.68rem',
  fontWeight: 500,
  letterSpacing: '0.28em',
  textTransform: 'uppercase',
  color: '#cc0000',
  display: 'block',
  marginBottom: '1rem',
};
const h2: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: 'clamp(1.8rem,3.5vw,2.8rem)',
  marginBottom: '1.5rem',
  lineHeight: 1.2,
};
const text: React.CSSProperties = {
  fontSize: '0.92rem',
  color: '#3d3d3d',
  letterSpacing: '0.025em',
  lineHeight: 1.9,
};
const button: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: '0.72rem',
  fontWeight: 500,
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  padding: '0.95rem 2.5rem',
  border: '1px solid #1A1A1A',
  color: '#1A1A1A',
  display: 'inline-block',
};

const FORMULES = [
  { nom: 'Eternità', prix: '1 400 €', detail: '300 photos retouchées + teaser vidéo' },
  { nom: 'Il Giorno', prix: '1 700 €', detail: '350 photos + film de 20 à 45 min + teaser' },
  { nom: 'Per Sempre', prix: '1 800 €', detail: '400 photos + film + vidéo longue + teaser' },
];

export default async function VillePage({ params }: Props) {
  const { ville } = await params;
  const v = VILLES.find((x) => x.slug === ville);
  if (!v) notFound();
  const url = `${SITE_URL}/photographe-mariage/${v.slug}`;
  const autres = VILLES.filter((x) => x.slug !== v.slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: `Photographe et vidéaste de mariage — ${v.nom}`,
        serviceType: 'Photographie et vidéo de mariage',
        url,
        description: v.metaDescription,
        provider: { '@id': `${SITE_URL}/#business` },
        areaServed: { '@type': v.slug === 'provence' ? 'AdministrativeArea' : 'City', name: v.nom },
        offers: FORMULES.map((f) => ({
          '@type': 'Offer',
          name: f.nom,
          description: f.detail,
          price: f.prix.replace(/\D/g, ''),
          priceCurrency: 'EUR',
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: `Photographe mariage ${v.nom}`, item: url },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: v.faq.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />

      {/* Hero */}
      <section style={{ paddingTop: '160px', paddingBottom: '4rem', background: '#F8F5F2', textAlign: 'center' }}>
        <div className='px-site' style={{ maxWidth: '820px', margin: '0 auto' }}>
          <span style={label}>Photo & vidéo de mariage</span>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.2rem,5vw,4rem)', lineHeight: 1.1, marginBottom: '1.8rem' }}>
            {v.h1}
          </h1>
          <p style={{ ...text, maxWidth: '640px', margin: '0 auto 2.5rem' }}>{v.intro}</p>
          <Link href='/contact' style={button} className='hover:bg-[#1A1A1A] hover:text-[#F8F5F2] transition-all duration-300'>
            Vérifier mes disponibilités
          </Link>
        </div>
      </section>

      {/* Photos */}
      <section style={{ background: '#F8F5F2', paddingBottom: '5rem' }}>
        <div
          className='px-site'
          style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}
        >
          {v.photos.map((p, i) => (
            <div key={p.src} style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', borderRadius: '4px' }}>
              <Image src={p.src} alt={p.alt} fill className='object-cover' sizes='(max-width: 768px) 100vw, 33vw' priority={i === 0} />
            </div>
          ))}
        </div>
      </section>

      {/* Lieux */}
      <section style={{ background: '#ffffff', padding: '6rem 0' }}>
        <div className='px-site' style={{ maxWidth: '900px', margin: '0 auto' }}>
          <span style={label}>Lieux & lumière</span>
          <h2 style={h2}>{v.lieuxTitre}</h2>
          <ul style={{ ...text, paddingLeft: '1.2rem', listStyle: 'disc', marginBottom: '2rem' }}>
            {v.lieux.map((l) => (
              <li key={l} style={{ marginBottom: '0.6rem' }}>{l}</li>
            ))}
          </ul>
          <p style={text}>{v.conseil}</p>
        </div>
      </section>

      {/* Approche */}
      <section style={{ background: '#F8F5F2', padding: '6rem 0' }}>
        <div className='px-site' style={{ maxWidth: '900px', margin: '0 auto' }}>
          <span style={label}>Mon approche</span>
          <h2 style={h2}>Un reportage naturel, en photo et en vidéo</h2>
          <p style={{ ...text, marginBottom: '1.2rem' }}>
            Mon approche est documentaire et intime : je ne mets pas en scène, j&apos;observe, j&apos;anticipe et je
            capture. Je suis présent des préparatifs jusqu&apos;à la pièce montée, de manière discrète, pour que vous
            puissiez profiter pleinement de votre journée.
          </p>
          <p style={text}>
            Chaque formule réunit photo et vidéo. Les photos retouchées sont livrées sous 2 à 4 semaines, les vidéos
            sous 2 à 3 mois.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '3rem' }}>
            {FORMULES.map((f) => (
              <div key={f.nom} style={{ background: '#ffffff', padding: '2rem', borderTop: '2px solid #cc0000' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', marginBottom: '0.4rem' }}>{f.nom}</h3>
                <p style={{ fontSize: '1.1rem', color: '#1A1A1A', marginBottom: '0.6rem' }}>{f.prix}</p>
                <p style={{ fontSize: '0.82rem', color: '#6b6560', lineHeight: 1.7 }}>{f.detail}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.78rem', color: '#9a9590', marginTop: '1rem' }}>
            Frais de déplacement en supplément.{' '}
            <Link href='/services' style={{ color: '#1A1A1A', textDecoration: 'underline' }}>Détail des formules</Link>
            {' · '}
            <Link href='/portfolio' style={{ color: '#1A1A1A', textDecoration: 'underline' }}>Voir le portfolio</Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#ffffff', padding: '6rem 0' }}>
        <div className='px-site' style={{ maxWidth: '900px', margin: '0 auto' }}>
          <span style={label}>Questions fréquentes</span>
          <h2 style={h2}>Vos questions</h2>
          {v.faq.map((f) => (
            <div key={f.q} style={{ borderTop: '1px solid #e8e4e0', padding: '1.5rem 0' }}>
              <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', fontWeight: 500, marginBottom: '0.6rem' }}>{f.q}</h3>
              <p style={text}>{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA + maillage */}
      <section style={{ background: '#F8F5F2', padding: '6rem 0', textAlign: 'center' }}>
        <div className='px-site' style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={h2}>Votre mariage à {v.nom}</h2>
          <p style={{ ...text, marginBottom: '2.5rem' }}>
            Parlez-moi de votre projet : date, lieu, envies. Je vous réponds rapidement avec mes disponibilités.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '4rem' }}>
            <Link href='/contact' style={button} className='hover:bg-[#1A1A1A] hover:text-[#F8F5F2] transition-all duration-300'>
              Me contacter
            </Link>
            <a href={`tel:${PHONE_INTL}`} style={button} className='hover:bg-[#1A1A1A] hover:text-[#F8F5F2] transition-all duration-300'>
              {PHONE}
            </a>
          </div>
          <span style={label}>Je photographie aussi</span>
          <ul style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {autres.map((a) => (
              <li key={a.slug}>
                <Link href={`/photographe-mariage/${a.slug}`} style={{ fontSize: '0.85rem', color: '#1A1A1A', textDecoration: 'underline' }}>
                  Photographe mariage {a.nom}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
}
