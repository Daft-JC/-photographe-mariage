import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: '#1A1A1A', color: '#F8F5F2', padding: '5rem 0 2rem' }}>
      <div
        className='grid-footer px-site'
        style={{ maxWidth: '1400px', margin: '0 auto' }}
      >
        <div>
          <Link href='/' style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', display: 'block', marginBottom: '1.2rem' }}>
            Lamartina <span style={{ color: '#be2828' }}>Studio</span>
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
        className='px-site'
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          paddingTop: '2rem',
          paddingBottom: 0,
          borderTop: '1px solid rgba(255,255,255,0.08)',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}
      >
        <span style={{ fontSize: '0.78rem', color: '#9a9590' }}>© 2025 Lamartina Studio — Photographe de Mariage</span>
        <span style={{ fontSize: '0.78rem', color: '#9a9590' }}>
          Réalisé avec <span style={{ color: '#be2828' }}>♥</span> &nbsp;·&nbsp;{' '}
          <a href='#' className='hover:text-[#F8F5F2] transition-colors'>Mentions légales</a>
        </span>
      </div>
    </footer>
  );
}
