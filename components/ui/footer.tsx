import Link from 'next/link';
import { EMAIL, PHONE, PHONE_INTL, INSTAGRAM } from '@/lib/site';
import { VILLES } from '@/lib/villes';

const h4: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: '0.68rem',
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  color: '#9a9590',
  marginBottom: '1.5rem',
};
const item: React.CSSProperties = { fontSize: '0.85rem', color: '#9a9590' };

export default function Footer() {
  return (
    <footer style={{ background: '#1A1A1A', color: '#F8F5F2', padding: '5rem 0 2rem' }}>
      <div
        className='grid-footer px-site'
        style={{ maxWidth: '1400px', margin: '0 auto' }}
      >
        <div>
          <Link href='/' style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', display: 'block', marginBottom: '1.2rem' }}>
            <span style={{ fontFamily: 'var(--font-heading)' }}>Maison</span>{' '}<span style={{ fontFamily: 'Peristiwa, serif', color: '#cc0000' }}>La Martina</span>
          </Link>
          <p style={{ fontSize: '0.85rem', color: '#9a9590', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            Photographe et vidéaste de mariage basé à Martigues, en Provence. Mariages à Marseille, Aix-en-Provence,
            en France, en Italie et partout en Europe.
          </p>
          <a
            href={INSTAGRAM}
            target='_blank'
            rel='noopener noreferrer'
            style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: '#9a9590', transition: 'color 0.2s' }}
            className='hover:text-[#F8F5F2]'
          >
            Instagram
          </a>
        </div>
        <div>
          <h4 style={h4}>Navigation</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            {[['/', 'Accueil'], ['/portfolio', 'Portfolio'], ['/a-propos', 'À propos'], ['/services', 'Services & tarifs'], ['/contact', 'Contact']].map(([href, label]) => (
              <li key={href}><Link href={href} style={item} className='hover:text-[#F8F5F2] transition-colors'>{label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 style={h4}>Mariages</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            {VILLES.map((v) => (
              <li key={v.slug}>
                <Link href={`/photographe-mariage/${v.slug}`} style={item} className='hover:text-[#F8F5F2] transition-colors'>
                  Photographe mariage {v.nom}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 style={h4}>Contact</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            {[[`mailto:${EMAIL}`, EMAIL], [`tel:${PHONE_INTL}`, PHONE], ['/contact', 'Disponibilités & devis']].map(([href, label]) => (
              <li key={label}><a href={href} style={item} className='hover:text-[#F8F5F2] transition-colors'>{label}</a></li>
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
        <span style={{ fontSize: '0.78rem', color: '#9a9590' }}>© {new Date().getFullYear()} Maison La Martina — Photographe de mariage en Provence</span>
        <span style={{ fontSize: '0.78rem', color: '#9a9590' }}>
          Réalisé avec <span style={{ color: '#cc0000' }}>♥</span> &nbsp;·&nbsp;{' '}
          <a href='/mentions-legales' className='hover:text-[#F8F5F2] transition-colors'>Mentions légales</a>
        </span>
      </div>
    </footer>
  );
}
