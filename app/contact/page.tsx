'use client';

import { useState } from 'react';
import Image from 'next/image';
import Nav from '@/components/ui/nav';
import Footer from '@/components/ui/footer';

type FormState = {
  prenom: string;
  nom: string;
  email: string;
  date: string;
  lieu: string;
  message: string;
};

const empty: FormState = { prenom: '', nom: '', email: '', date: '', lieu: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState<FormState>(empty);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
    setForm(empty);
  };

  return (
    <>
      <Nav />

      <div style={{ minHeight: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr' }} className='contact-grid'>

        {/* ── Colonne gauche : photo + infos ── */}
        <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <Image
            src='https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop'
            alt='Mariage élégant'
            fill
            className='object-cover'
            priority
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,8,6,0.85) 0%, rgba(10,8,6,0.3) 60%, transparent 100%)' }} />

          <div style={{ position: 'relative', zIndex: 10, padding: '3rem 3.5rem', color: '#F8F5F2' }}>
            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.6rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: '#be2828',
                display: 'block',
                marginBottom: '0.8rem',
              }}>
                Maison La Martina
              </span>
              <h1 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.8rem, 4vw, 4rem)',
                color: '#F8F5F2',
                lineHeight: 1.1,
                marginBottom: '1.2rem',
                textTransform: 'uppercase',
              }}>
                Parlons de<br />votre mariage
              </h1>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.88rem',
                color: 'rgba(248,245,242,0.75)',
                lineHeight: 1.8,
                maxWidth: '340px',
              }}>
                Chaque histoire mérite d'être racontée avec soin. Partagez votre projet — je vous réponds sous 48 h.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', borderTop: '1px solid rgba(248,245,242,0.15)', paddingTop: '2rem' }}>
              {[
                { label: 'Email', value: 'hello@lamartinastudio.com', href: 'mailto:hello@lamartinastudio.com' },
                { label: 'Téléphone', value: '+33 6 00 00 00 00', href: 'tel:+33600000000' },
                { label: 'Instagram', value: '@maisonlamartina', href: '#' },
              ].map((info) => (
                <div key={info.label} style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem' }}>
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.58rem',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    color: 'rgba(248,245,242,0.45)',
                    minWidth: '70px',
                  }}>
                    {info.label}
                  </span>
                  <a href={info.href} style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.82rem',
                    color: 'rgba(248,245,242,0.85)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  className='hover:text-white'>
                    {info.value}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Colonne droite : formulaire ── */}
        <div style={{
          background: '#F8F5F2',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '6rem 4rem',
          minHeight: '100vh',
        }}>
          <div style={{ width: '100%', maxWidth: '480px' }}>

            {sent ? (
              <div style={{ textAlign: 'center' }}>
                <span style={{
                  fontFamily: 'Peristiwa, serif',
                  fontSize: '3rem',
                  color: '#be2828',
                  display: 'block',
                  marginBottom: '1.5rem',
                }}>
                  ♥
                </span>
                <h2 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2.5rem',
                  color: '#1A1A1A',
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                }}>
                  Message envoyé
                </h2>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.88rem',
                  color: '#9a9590',
                  lineHeight: 1.9,
                }}>
                  Merci pour votre confiance.<br />Je vous répondrai dans les 48 heures.
                </p>
              </div>
            ) : (
              <>
                <div style={{ marginBottom: '3rem' }}>
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.6rem',
                    letterSpacing: '0.28em',
                    textTransform: 'uppercase',
                    color: '#be2828',
                    display: 'block',
                    marginBottom: '0.8rem',
                  }}>
                    Votre projet
                  </span>
                  <h2 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)',
                    color: '#1A1A1A',
                    lineHeight: 1.15,
                    textTransform: 'uppercase',
                  }}>
                    Faisons connaissance
                  </h2>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2.2rem' }}>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    {[
                      { id: 'prenom', label: 'Prénom', placeholder: 'Marie', type: 'text', required: true },
                      { id: 'nom', label: 'Nom', placeholder: 'Dupont', type: 'text', required: true },
                    ].map(({ id, label, placeholder, type, required }) => (
                      <div key={id}>
                        <label htmlFor={id} style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.58rem',
                          fontWeight: 500,
                          letterSpacing: '0.25em',
                          textTransform: 'uppercase',
                          color: '#9a9590',
                          display: 'block',
                          marginBottom: '0.5rem',
                        }}>
                          {label}
                        </label>
                        <input
                          id={id} name={id} type={type} required={required}
                          value={form[id as keyof FormState]}
                          onChange={handleChange}
                          placeholder={placeholder}
                          style={{
                            width: '100%',
                            background: 'transparent',
                            border: 'none',
                            borderBottom: '1px solid #d4cfc9',
                            padding: '0.7rem 0',
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.88rem',
                            color: '#1A1A1A',
                            outline: 'none',
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label htmlFor='email' style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.58rem',
                      fontWeight: 500,
                      letterSpacing: '0.25em',
                      textTransform: 'uppercase',
                      color: '#9a9590',
                      display: 'block',
                      marginBottom: '0.5rem',
                    }}>
                      Email
                    </label>
                    <input
                      id='email' name='email' type='email' required
                      value={form.email} onChange={handleChange}
                      placeholder='marie@exemple.com'
                      style={{
                        width: '100%',
                        background: 'transparent',
                        border: 'none',
                        borderBottom: '1px solid #d4cfc9',
                        padding: '0.7rem 0',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.88rem',
                        color: '#1A1A1A',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    <div>
                      <label htmlFor='date' style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.58rem',
                        fontWeight: 500,
                        letterSpacing: '0.25em',
                        textTransform: 'uppercase',
                        color: '#9a9590',
                        display: 'block',
                        marginBottom: '0.5rem',
                      }}>
                        Date du mariage
                      </label>
                      <input
                        id='date' name='date' type='date'
                        value={form.date} onChange={handleChange}
                        style={{
                          width: '100%',
                          background: 'transparent',
                          border: 'none',
                          borderBottom: '1px solid #d4cfc9',
                          padding: '0.7rem 0',
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.88rem',
                          color: '#1A1A1A',
                          outline: 'none',
                        }}
                      />
                    </div>
                    <div>
                      <label htmlFor='lieu' style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.58rem',
                        fontWeight: 500,
                        letterSpacing: '0.25em',
                        textTransform: 'uppercase',
                        color: '#9a9590',
                        display: 'block',
                        marginBottom: '0.5rem',
                      }}>
                        Lieu
                      </label>
                      <input
                        id='lieu' name='lieu' type='text'
                        value={form.lieu} onChange={handleChange}
                        placeholder="Paris, Côte d'Azur…"
                        style={{
                          width: '100%',
                          background: 'transparent',
                          border: 'none',
                          borderBottom: '1px solid #d4cfc9',
                          padding: '0.7rem 0',
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.88rem',
                          color: '#1A1A1A',
                          outline: 'none',
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor='message' style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.58rem',
                      fontWeight: 500,
                      letterSpacing: '0.25em',
                      textTransform: 'uppercase',
                      color: '#9a9590',
                      display: 'block',
                      marginBottom: '0.5rem',
                    }}>
                      Votre message
                    </label>
                    <textarea
                      id='message' name='message' required rows={4}
                      value={form.message} onChange={handleChange}
                      placeholder='Parlez-moi de vous, de votre histoire, de ce que vous souhaitez garder de ce jour…'
                      style={{
                        width: '100%',
                        background: 'transparent',
                        border: 'none',
                        borderBottom: '1px solid #d4cfc9',
                        padding: '0.7rem 0',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.88rem',
                        color: '#1A1A1A',
                        outline: 'none',
                        resize: 'none',
                      }}
                    />
                  </div>

                  <button
                    type='submit'
                    disabled={loading}
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.72rem',
                      letterSpacing: '0.22em',
                      textTransform: 'uppercase',
                      padding: '1.1rem 2.8rem',
                      border: '1px solid #1A1A1A',
                      background: loading ? '#1A1A1A' : 'transparent',
                      color: loading ? '#F8F5F2' : '#1A1A1A',
                      cursor: loading ? 'default' : 'pointer',
                      transition: 'all 0.3s',
                      alignSelf: 'flex-start',
                      marginTop: '0.5rem',
                    }}
                    className={loading ? '' : 'hover:bg-[#1A1A1A] hover:text-[#F8F5F2]'}
                  >
                    {loading ? 'Envoi en cours…' : 'Envoyer le message'}
                  </button>

                </form>
              </>
            )}
          </div>
        </div>
      </div>

      {/* CSS mobile */}
      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .contact-grid > div:first-child {
            min-height: 50vh !important;
          }
        }
      `}</style>

      <Footer />
    </>
  );
}
