'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/ui/nav';
import Footer from '@/components/ui/footer';

const categories = ['Tous', 'Amore', 'Il Giorno', 'Dettagli', 'Ispirazione'];

const photos = [
  { src: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=900&auto=format&fit=crop', cat: 'Amore', span: 'tall' },
  { src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=1200&auto=format&fit=crop', cat: 'Il Giorno', span: 'wide' },
  { src: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=600&auto=format&fit=crop', cat: 'Dettagli', span: 'square' },
  { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop', cat: 'Ispirazione', span: 'wide' },
  { src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=700&auto=format&fit=crop', cat: 'Amore', span: 'square' },
  { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=900&auto=format&fit=crop', cat: 'Il Giorno', span: 'tall' },
  { src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=700&auto=format&fit=crop', cat: 'Dettagli', span: 'square' },
  { src: 'https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=900&auto=format&fit=crop', cat: 'Ispirazione', span: 'wide' },
  { src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1200&auto=format&fit=crop', cat: 'Il Giorno', span: 'wide' },
  { src: 'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?q=80&w=700&auto=format&fit=crop', cat: 'Amore', span: 'square' },
  { src: 'https://images.unsplash.com/photo-1570696516188-ade861b84a49?q=80&w=600&auto=format&fit=crop', cat: 'Ispirazione', span: 'tall' },
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=900&auto=format&fit=crop', cat: 'Il Giorno', span: 'square' },
];

const aspectMap: Record<string, string> = {
  tall: '3/4',
  wide: '16/9',
  square: '1/1',
};

export default function Portfolio() {
  const [active, setActive] = useState('Tous');

  const filtered = active === 'Tous' ? photos : photos.filter((p) => p.cat === active);

  return (
    <>
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
            color: '#be2828',
            display: 'block',
            marginBottom: '1rem',
          }}
        >
          Travaux
        </span>
        <h1
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            marginBottom: '1.2rem',
          }}
        >
          Portfolio
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.92rem',
            color: '#3d3d3d',
            letterSpacing: '0.025em',
            maxWidth: '480px',
            margin: '0 auto',
          }}
        >
          Une sélection de moments capturés avec émotion, lumière et sincérité.
        </p>
      </section>

      {/* Filtre catégories */}
      <section style={{ background: '#F8F5F2', paddingBottom: '1.5rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 3rem', display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.7rem',
                fontWeight: 500,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                padding: '0.6rem 1.5rem',
                border: '1px solid',
                borderColor: active === cat ? '#1A1A1A' : '#e8e4e0',
                background: active === cat ? '#1A1A1A' : 'transparent',
                color: active === cat ? '#F8F5F2' : '#1A1A1A',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Galerie */}
      <section style={{ background: '#F8F5F2', padding: '3rem 0 7rem' }}>
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 3rem',
            columns: '3',
            columnGap: '1rem',
          }}
          className='columns-1 sm:columns-2 lg:columns-3'
        >
          {filtered.map((photo, i) => (
            <div
              key={`${photo.src}-${i}`}
              style={{
                breakInside: 'avoid',
                marginBottom: '1rem',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '3px',
              }}
              className='group cursor-pointer'
            >
              <div style={{ position: 'relative', aspectRatio: aspectMap[photo.span] }}>
                <Image
                  src={photo.src}
                  alt={photo.cat}
                  fill
                  className='object-cover transition-transform duration-700 group-hover:scale-105'
                />
                <div
                  className='absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-all duration-500 flex flex-col items-start justify-end p-5'
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      color: '#F8F5F2',
                      fontSize: '1.1rem',
                      fontStyle: 'italic',
                    }}
                    className='opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                  >
                    {photo.cat}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Contact */}
      <section style={{ background: '#1A1A1A', padding: '5rem 3rem', textAlign: 'center' }}>
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.68rem',
            fontWeight: 500,
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: '#be2828',
            display: 'block',
            marginBottom: '1rem',
          }}
        >
          Travaillons ensemble
        </span>
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.8rem, 3vw, 3rem)',
            color: '#F8F5F2',
            marginBottom: '1.5rem',
          }}
        >
          Votre mariage mérite<br /><em>d'être immortalisé</em>
        </h2>
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
            marginTop: '0.5rem',
          }}
          className='hover:bg-white hover:text-[#1A1A1A] transition-all duration-300'
        >
          Me contacter
        </Link>
      </section>

      <Footer />
    </>
  );
}
