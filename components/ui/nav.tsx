'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/services', label: 'Services' },
  { href: '/journal', label: 'Journal' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        className='fixed top-0 left-0 right-0 z-50 transition-all duration-500'
        style={{
          background: (scrolled || !isHome) ? 'rgba(248,245,242,0.96)' : 'transparent',
          backdropFilter: (scrolled || !isHome) ? 'blur(12px)' : 'none',
          borderBottom: (scrolled || !isHome) ? '1px solid #e8e4e0' : '1px solid transparent',
        }}
      >
        <div
          className='flex items-center justify-between px-8 md:px-12'
          style={{ height: '80px', maxWidth: '1400px', margin: '0 auto' }}
        >
          {/* Logo */}
          <Link
            href='/'
            className='text-lg tracking-[0.08em]'
            style={{
              fontFamily: 'var(--font-heading)',
              color: (scrolled || !isHome) ? '#1A1A1A' : '#F8F5F2',
              fontWeight: 400,
            }}
          >
            <span style={{ fontFamily: 'var(--font-heading)', color: '#cc0000' }}>Maison</span>{' '}<span style={{ fontFamily: 'Peristiwa, serif' }}>La Martina</span>
          </Link>

          {/* Desktop links */}
          <ul className='hidden md:flex items-center gap-10'>
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className='text-xs tracking-[0.22em] uppercase font-light transition-colors duration-200 hover:opacity-60'
                  style={{
                    fontFamily: 'var(--font-heading)',
                    color: (scrolled || !isHome) ? '#1A1A1A' : '#F8F5F2',
                  }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link
            href='/contact'
            className='hidden md:inline-block text-xs tracking-[0.22em] uppercase px-6 py-3 border transition-all duration-300'
            style={{
              fontFamily: 'var(--font-heading)',
              color: (scrolled || !isHome) ? '#1A1A1A' : '#F8F5F2',
              borderColor: (scrolled || !isHome) ? '#1A1A1A' : 'rgba(255,255,255,0.55)',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = (scrolled || !isHome) ? '#1A1A1A' : '#fff';
              el.style.color = (scrolled || !isHome) ? '#F8F5F2' : '#1A1A1A';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = 'transparent';
              el.style.color = (scrolled || !isHome) ? '#1A1A1A' : '#F8F5F2';
            }}
          >
            Me contacter
          </Link>

          {/* Mobile toggle */}
          <button
            className='md:hidden flex flex-col gap-1.5 p-2'
            onClick={() => setMobileOpen(true)}
            aria-label='Menu'
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className='block w-6 h-px'
                style={{ background: (scrolled || !isHome) ? '#1A1A1A' : '#F8F5F2' }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className='fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8'
          style={{ background: '#F8F5F2' }}
        >
          <button
            className='absolute top-6 right-8 text-sm tracking-widest uppercase'
            style={{ fontFamily: 'var(--font-body)', color: '#1A1A1A' }}
            onClick={() => setMobileOpen(false)}
          >
            ✕ Fermer
          </button>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className='text-3xl font-light'
              style={{ fontFamily: 'var(--font-heading)', color: '#1A1A1A' }}
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href='/contact'
            className='mt-4 text-xs tracking-[0.22em] uppercase px-8 py-3 border'
            style={{
              fontFamily: 'var(--font-body)',
              color: '#1A1A1A',
              borderColor: '#1A1A1A',
            }}
            onClick={() => setMobileOpen(false)}
          >
            Me contacter
          </Link>
        </div>
      )}
    </>
  );
}
