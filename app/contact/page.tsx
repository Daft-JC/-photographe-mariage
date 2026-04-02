'use client';

import { useState } from 'react';
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
    // Simulation envoi — à connecter à un service email (Resend, Nodemailer, etc.)
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
    setForm(empty);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid #e8e4e0',
    padding: '0.8rem 0',
    fontFamily: 'var(--font-body)',
    fontSize: '0.88rem',
    color: '#1A1A1A',
    outline: 'none',
    letterSpacing: '0.025em',
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: 'var(--font-body)',
    fontSize: '0.62rem',
    fontWeight: 500,
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: '#9a9590',
    display: 'block',
    marginBottom: '0.3rem',
  };

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
          Écrivez-moi
        </span>
        <h1
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            marginBottom: '1.2rem',
          }}
        >
          Contact
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.92rem',
            color: '#3d3d3d',
            letterSpacing: '0.025em',
            maxWidth: '460px',
            margin: '0 auto',
          }}
        >
          Racontez-moi votre projet. Je vous répondrai dans les 48 heures.
        </p>
      </section>

      {/* Formulaire + infos */}
      <section style={{ background: '#F8F5F2', padding: '2rem 0 7rem' }}>
        <div
          className='grid-contact-layout px-site'
          style={{ maxWidth: '1200px', margin: '0 auto' }}
        >
          {/* Infos */}
          <div style={{ paddingTop: '0.5rem' }}>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                marginBottom: '2rem',
                lineHeight: 1.2,
              }}
            >
              Commençons<br /><em>par faire connaissance</em>
            </h2>
            <p style={{ fontSize: '0.88rem', color: '#3d3d3d', letterSpacing: '0.025em', lineHeight: 1.9, marginBottom: '3rem' }}>
              Je lis chaque message avec attention. Si vos dates sont disponibles, je vous proposerai un échange téléphonique ou vidéo pour en apprendre davantage sur vous et votre projet.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { label: 'Email', value: 'hello@lamartinastudio.com', href: 'mailto:hello@lamartinastudio.com' },
                { label: 'Téléphone', value: '+33 6 00 00 00 00', href: 'tel:+33600000000' },
                { label: 'Instagram', value: '@lamartinastudio', href: '#' },
              ].map((info) => (
                <div key={info.label}>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.62rem', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#9a9590', display: 'block', marginBottom: '0.3rem' }}>
                    {info.label}
                  </span>
                  <a
                    href={info.href}
                    style={{ fontSize: '0.88rem', color: '#1A1A1A', letterSpacing: '0.025em', textDecoration: 'none' }}
                    className='hover:text-[#be2828] transition-colors'
                  >
                    {info.value}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Formulaire */}
          <div>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
                <span style={{ color: '#be2828', fontSize: '2rem', display: 'block', marginBottom: '1.5rem' }}>♥</span>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontStyle: 'italic', marginBottom: '1rem' }}>
                  Message envoyé
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#3d3d3d', letterSpacing: '0.025em', lineHeight: 1.9 }}>
                  Merci pour votre message. Je vous répondrai dans les 48 heures.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {/* Prénom + Nom */}
                <div
                  style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}
                  className='grid-cols-1 sm:grid-cols-2'
                >
                  <div>
                    <label htmlFor='prenom' style={labelStyle}>Prénom</label>
                    <input id='prenom' name='prenom' type='text' required value={form.prenom} onChange={handleChange} style={inputStyle} placeholder='Marie' />
                  </div>
                  <div>
                    <label htmlFor='nom' style={labelStyle}>Nom</label>
                    <input id='nom' name='nom' type='text' required value={form.nom} onChange={handleChange} style={inputStyle} placeholder='Dupont' />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor='email' style={labelStyle}>Email</label>
                  <input id='email' name='email' type='email' required value={form.email} onChange={handleChange} style={inputStyle} placeholder='marie@exemple.com' />
                </div>

                {/* Date + Lieu */}
                <div
                  style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}
                  className='grid-cols-1 sm:grid-cols-2'
                >
                  <div>
                    <label htmlFor='date' style={labelStyle}>Date du mariage</label>
                    <input id='date' name='date' type='date' value={form.date} onChange={handleChange} style={inputStyle} />
                  </div>
                  <div>
                    <label htmlFor='lieu' style={labelStyle}>Lieu</label>
                    <input id='lieu' name='lieu' type='text' value={form.lieu} onChange={handleChange} style={inputStyle} placeholder="Paris, Côte d'Azur…" />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor='message' style={labelStyle}>Message</label>
                  <textarea
                    id='message'
                    name='message'
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    style={{ ...inputStyle, resize: 'none', borderBottom: '1px solid #e8e4e0' }}
                    placeholder='Parlez-moi de vous, de votre mariage, de ce que vous recherchez…'
                  />
                </div>

                <button
                  type='submit'
                  disabled={loading}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.72rem',
                    fontWeight: 500,
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    padding: '1rem 2.5rem',
                    border: '1px solid #1A1A1A',
                    background: loading ? '#1A1A1A' : 'transparent',
                    color: loading ? '#F8F5F2' : '#1A1A1A',
                    cursor: loading ? 'default' : 'pointer',
                    transition: 'all 0.3s',
                    alignSelf: 'flex-start',
                  }}
                  className={loading ? '' : 'hover:bg-[#1A1A1A] hover:text-[#F8F5F2]'}
                >
                  {loading ? 'Envoi en cours…' : 'Envoyer le message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
