'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/ui/nav';
import Footer from '@/components/ui/footer';

const categories = ['Tous', 'Amore', 'Il Giorno', 'Dettagli', 'Ispirazione'];

const photos = [
  // Amore
  { src: '/portfolio/amore/DSC01882.jpg',   cat: 'Amore',      span: 'tall'   },
  { src: '/portfolio/amore/DSC01920.jpg',   cat: 'Amore',      span: 'wide'   },
  { src: '/portfolio/amore/DSC05240.jpg',   cat: 'Amore',      span: 'tall'   },
  { src: '/portfolio/amore/DSC01855.jpg',   cat: 'Amore',      span: 'tall'   },
  { src: '/portfolio/amore/DSC05323.jpg',   cat: 'Amore',      span: 'tall'   },
  { src: '/portfolio/amore/DSC01259.jpg',   cat: 'Amore',      span: 'wide'   },
  { src: '/portfolio/amore/DSC01973.jpg',   cat: 'Amore',      span: 'wide'   },
  { src: '/portfolio/amore/DSC05335.jpg',   cat: 'Amore',      span: 'tall'   },
  { src: '/portfolio/amore/DSC05340.jpg',   cat: 'Amore',      span: 'wide'   },
  { src: '/portfolio/amore/DSC05385.jpg',   cat: 'Amore',      span: 'tall'   },
  // Il Giorno
  { src: '/portfolio/il-giorno/DSC01327.jpg', cat: 'Il Giorno', span: 'wide'  },
  { src: '/portfolio/il-giorno/DSC01941.jpg', cat: 'Il Giorno', span: 'tall'  },
  { src: '/portfolio/il-giorno/DSC02032.jpg', cat: 'Il Giorno', span: 'wide'  },
  { src: '/portfolio/il-giorno/DSC01757.jpg', cat: 'Il Giorno', span: 'square'},
  // Dettagli
  { src: '/portfolio/dettagli/DSC00123.jpg',   cat: 'Dettagli', span: 'wide'  },
  { src: '/portfolio/dettagli/DSC00142.jpg',   cat: 'Dettagli', span: 'wide'  },
  { src: '/portfolio/dettagli/DSC00290-2.jpg', cat: 'Dettagli', span: 'tall'  },
  { src: '/portfolio/dettagli/DSC01944.jpg',   cat: 'Dettagli', span: 'wide'  },
  { src: '/portfolio/dettagli/DSC05328.jpg',   cat: 'Dettagli', span: 'tall'  },
  { src: '/portfolio/dettagli/DSC05361.jpg',   cat: 'Dettagli', span: 'wide'  },
  // Ispirazione
  { src: '/portfolio/ispirazione/DSC00797.jpg', cat: 'Ispirazione', span: 'tall' },
  { src: '/portfolio/ispirazione/DSC00793.jpg', cat: 'Ispirazione', span: 'tall' },
  { src: '/portfolio/ispirazione/DSC01902.jpg', cat: 'Ispirazione', span: 'tall' },
  { src: '/portfolio/ispirazione/DSC01927.jpg', cat: 'Ispirazione', span: 'wide' },
  { src: '/portfolio/ispirazione/DSC02096.jpg', cat: 'Ispirazione', span: 'tall' },
  { src: '/portfolio/ispirazione/DSC00792.jpg', cat: 'Ispirazione', span: 'tall' },
  { src: '/portfolio/ispirazione/DSC01982.jpg', cat: 'Ispirazione', span: 'wide' },
  { src: '/portfolio/ispirazione/DSC02085.jpg', cat: 'Ispirazione', span: 'tall' },
  { src: '/portfolio/ispirazione/DSC01954.jpg', cat: 'Ispirazione', span: 'tall' },
  { src: '/portfolio/ispirazione/DSC00393.jpg', cat: 'Ispirazione', span: 'wide' },
  { src: '/portfolio/ispirazione/DSC05384.jpg', cat: 'Ispirazione', span: 'wide' },
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
            color: '#cc0000',
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

      {/* Section Vidéos */}
      <section style={{ background: '#F8F5F2', padding: '0 0 7rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 3rem' }}>

          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#cc0000', display: 'block', marginBottom: '1rem' }}>
              Films
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}>
              Teasers <em style={{ color: '#cc0000', fontStyle: 'normal' }}>cinématiques</em>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              { src: '/videos/teaser-nasser-oceane-web.mp4', title: 'Nasser & Océane' },
              { src: '/videos/teaser-naissa-greg-web.mp4',   title: 'Naïssa & Greg'   },
              { src: '/videos/teaser-hania-sami-web.mp4',    title: 'Hania & Sami'    },
            ].map((video) => (
              <div key={video.src} style={{ position: 'relative', borderRadius: '4px', overflow: 'hidden', background: '#1A1A1A' }}>
                <video
                  controls
                  playsInline
                  preload='metadata'
                  style={{ width: '100%', display: 'block', aspectRatio: '16/9', objectFit: 'cover' }}
                >
                  <source src={video.src} type='video/mp4' />
                </video>
                <div style={{ padding: '1.2rem 1.5rem', background: '#1A1A1A' }}>
                  <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', color: '#F8F5F2', fontStyle: 'italic' }}>
                    {video.title}
                  </p>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#9a9590' }}>
                    Teaser cinématique
                  </span>
                </div>
              </div>
            ))}
          </div>
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
            color: '#cc0000',
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
