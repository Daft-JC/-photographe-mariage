'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Nav from '@/components/ui/nav';
import Footer from '@/components/ui/footer';
import {
  motion, AnimatePresence,
  useMotionValue, useTransform, useSpring,
  animate,
} from 'framer-motion';

/* ══════════════════════════════════════
   HOOK — position souris relative à un élément
══════════════════════════════════════ */
function useMouseRelative(ref: React.RefObject<HTMLElement | null>) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handler = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      x.set((e.clientX - rect.left) / rect.width - 0.5);
      y.set((e.clientY - rect.top) / rect.height - 0.5);
    };
    const reset = () => { x.set(0); y.set(0); };
    el.addEventListener('mousemove', handler);
    el.addEventListener('mouseleave', reset);
    return () => { el.removeEventListener('mousemove', handler); el.removeEventListener('mouseleave', reset); };
  }, [ref, x, y]);

  return { x, y };
}

/* ══════════════════════════════════════
   COMPOSANT — Révélation mot par mot
══════════════════════════════════════ */
function WordReveal({ text, delay = 0, style }: { text: string; delay?: number; style?: React.CSSProperties }) {
  const words = text.split(' ');
  return (
    <span style={style}>
      {words.map((word, i) => (
        <span key={i} style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom' }}>
          <motion.span
            style={{ display: 'inline-block' }}
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{ duration: 0.75, delay: delay + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}

/* ══════════════════════════════════════
   COMPOSANT — Champ de formulaire animé
══════════════════════════════════════ */
function AnimatedField({
  id, label, type = 'text', placeholder, required, value, onChange, delay,
}: {
  id: string; label: string; type?: string; placeholder?: string;
  required?: boolean; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  delay: number;
}) {
  const [focused, setFocused] = useState(false);
  const hasValue = value.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ position: 'relative', paddingTop: '1.2rem' }}
    >
      {/* Label flottant */}
      <motion.label
        htmlFor={id}
        animate={{
          y: focused || hasValue ? 0 : 20,
          fontSize: focused || hasValue ? '0.55rem' : '0.82rem',
          color: focused ? '#cc0000' : '#9a9590',
          letterSpacing: focused || hasValue ? '0.25em' : '0.05em',
        }}
        transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          fontFamily: 'var(--font-body)',
          fontWeight: 500,
          textTransform: 'uppercase',
          pointerEvents: 'none',
          transformOrigin: 'left top',
        }}
      >
        {label}
      </motion.label>

      <input
        id={id} name={id} type={type}
        required={required} value={value} onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: '100%', background: 'transparent', border: 'none',
          borderBottom: '1px solid #d4cfc9',
          padding: '0.6rem 0', marginTop: '0.4rem',
          fontFamily: 'var(--font-body)', fontSize: '0.88rem',
          color: '#1A1A1A', outline: 'none',
        }}
      />
      {/* Ligne rouge animée */}
      <motion.div
        animate={{ scaleX: focused ? 1 : 0, opacity: focused ? 1 : 0 }}
        initial={{ scaleX: 0, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          height: '1.5px', background: '#cc0000', transformOrigin: 'left',
        }}
      />
    </motion.div>
  );
}

/* ══════════════════════════════════════
   COMPOSANT — Textarea animée
══════════════════════════════════════ */
function AnimatedTextarea({
  id, label, placeholder, required, value, onChange, delay,
}: {
  id: string; label: string; placeholder?: string; required?: boolean;
  value: string; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  delay: number;
}) {
  const [focused, setFocused] = useState(false);
  const hasValue = value.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ position: 'relative', paddingTop: '1.2rem' }}
    >
      <motion.label
        htmlFor={id}
        animate={{
          y: focused || hasValue ? 0 : 20,
          fontSize: focused || hasValue ? '0.55rem' : '0.82rem',
          color: focused ? '#cc0000' : '#9a9590',
          letterSpacing: focused || hasValue ? '0.25em' : '0.05em',
        }}
        transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          position: 'absolute', top: 0, left: 0,
          fontFamily: 'var(--font-body)', fontWeight: 500,
          textTransform: 'uppercase', pointerEvents: 'none',
        }}
      >
        {label}
      </motion.label>

      <textarea
        id={id} name={id} required={required} rows={4}
        value={value} onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: '100%', background: 'transparent', border: 'none',
          borderBottom: '1px solid #d4cfc9',
          padding: '0.6rem 0', marginTop: '0.4rem',
          fontFamily: 'var(--font-body)', fontSize: '0.88rem',
          color: '#1A1A1A', outline: 'none', resize: 'none',
        }}
      />
      <motion.div
        animate={{ scaleX: focused ? 1 : 0, opacity: focused ? 1 : 0 }}
        initial={{ scaleX: 0, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          height: '1.5px', background: '#cc0000', transformOrigin: 'left',
        }}
      />
    </motion.div>
  );
}

/* ══════════════════════════════════════
   COMPOSANT — Bouton magnétique
══════════════════════════════════════ */
function MagneticButton({ children, loading, onClick }: {
  children: React.ReactNode; loading: boolean; onClick?: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const btnX = useMotionValue(0);
  const btnY = useMotionValue(0);
  const springX = useSpring(btnX, { stiffness: 200, damping: 20 });
  const springY = useSpring(btnY, { stiffness: 200, damping: 20 });
  const [hovered, setHovered] = useState(false);

  const handleMove = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    btnX.set((e.clientX - cx) * 0.35);
    btnY.set((e.clientY - cy) * 0.35);
  }, [btnX, btnY]);

  const handleLeave = useCallback(() => {
    btnX.set(0);
    btnY.set(0);
    setHovered(false);
  }, [btnX, btnY]);

  return (
    <motion.button
      ref={ref}
      type='submit'
      disabled={loading}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleLeave}
      onTapStart={() => { btnX.set(0); btnY.set(0); }}
      whileTap={{ scale: 0.95 }}
      style={{
        x: springX, y: springY,
        position: 'relative', overflow: 'hidden',
        fontFamily: 'var(--font-heading)', fontSize: '0.72rem',
        letterSpacing: '0.22em', textTransform: 'uppercase',
        padding: '1.1rem 2.8rem',
        border: '1px solid #1A1A1A',
        background: 'transparent',
        color: hovered && !loading ? '#F8F5F2' : '#1A1A1A',
        cursor: loading ? 'default' : 'pointer',
        transition: 'color 0.3s',
        marginTop: '0.5rem',
        display: 'inline-block',
      }}
    >
      <motion.span
        animate={{ scaleX: hovered && !loading ? 1 : 0 }}
        initial={{ scaleX: 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          position: 'absolute', inset: 0, background: '#1A1A1A',
          transformOrigin: 'left', zIndex: 0,
        }}
      />
      <span style={{ position: 'relative', zIndex: 1 }}>
        {loading ? (
          <motion.span animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 1, repeat: Infinity }}>
            Envoi en cours…
          </motion.span>
        ) : children}
      </span>
    </motion.button>
  );
}

/* ══════════════════════════════════════
   COMPOSANT — Particules succès
══════════════════════════════════════ */
function SuccessParticles() {
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    x: Math.random() * 300 - 150,
    y: -(Math.random() * 200 + 80),
    rotate: Math.random() * 360,
    scale: Math.random() * 0.6 + 0.4,
    color: i % 3 === 0 ? '#cc0000' : i % 3 === 1 ? '#1A1A1A' : '#d4cfc9',
    delay: Math.random() * 0.4,
  }));

  return (
    <div style={{ position: 'absolute', top: '50%', left: '50%', pointerEvents: 'none', zIndex: 0 }}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ x: 0, y: 0, opacity: 1, scale: 0, rotate: 0 }}
          animate={{ x: p.x, y: p.y, opacity: 0, scale: p.scale, rotate: p.rotate }}
          transition={{ duration: 1.2, delay: p.delay, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'absolute',
            width: p.id % 2 === 0 ? '6px' : '4px',
            height: p.id % 2 === 0 ? '6px' : '14px',
            borderRadius: p.id % 2 === 0 ? '50%' : '2px',
            background: p.color,
          }}
        />
      ))}
    </div>
  );
}

/* ══════════════════════════════════════
   PAGE PRINCIPALE
══════════════════════════════════════ */
type FormState = {
  prenom: string; nom: string; email: string;
  date: string; lieu: string; message: string;
};
const empty: FormState = { prenom: '', nom: '', email: '', date: '', lieu: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState<FormState>(empty);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [curtainDone, setCurtainDone] = useState(false);

  const imageRef = useRef<HTMLDivElement>(null);
  const { x: mouseX, y: mouseY } = useMouseRelative(imageRef as React.RefObject<HTMLElement>);

  const rotateY = useTransform(mouseX, [-0.5, 0.5], [8, -8]);
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [-6, 6]);
  const springRotY = useSpring(rotateY, { stiffness: 80, damping: 20 });
  const springRotX = useSpring(rotateX, { stiffness: 80, damping: 20 });

  /* spotlight */
  const spotX = useMotionValue(50);
  const spotY = useMotionValue(50);
  const springSpotX = useSpring(spotX, { stiffness: 120, damping: 25 });
  const springSpotY = useSpring(spotY, { stiffness: 120, damping: 25 });
  const spotBg = useTransform(
    [springSpotX, springSpotY],
    ([sx, sy]: number[]) =>
      `radial-gradient(circle 280px at ${sx}% ${sy}%, rgba(255,255,255,0.12) 0%, rgba(10,8,6,0) 70%)`
  );

  const handleMouseMoveSpot = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    spotX.set(((e.clientX - rect.left) / rect.width) * 100);
    spotY.set(((e.clientY - rect.top) / rect.height) * 100);
  };

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

      {/* ── Rideau d'ouverture ── */}
      <AnimatePresence>
        {!curtainDone && (
          <>
            <motion.div
              key='curtain-top'
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
              onAnimationComplete={() => setCurtainDone(true)}
              style={{
                position: 'fixed', top: 0, left: 0, right: 0, height: '50vh',
                background: '#1A1A1A', zIndex: 200, transformOrigin: 'top',
              }}
            />
            <motion.div
              key='curtain-bottom'
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
              style={{
                position: 'fixed', bottom: 0, left: 0, right: 0, height: '50vh',
                background: '#1A1A1A', zIndex: 200, transformOrigin: 'bottom',
              }}
            />
          </>
        )}
      </AnimatePresence>

      <div
        style={{ minHeight: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr' }}
        className='contact-grid'
      >

        {/* ══════════════════════════════
            COLONNE GAUCHE — Image 3D
        ══════════════════════════════ */}
        <motion.div
          ref={imageRef}
          onMouseMove={handleMouseMoveSpot}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{
            position: 'relative', minHeight: '100vh',
            display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
            overflow: 'hidden', perspective: '1200px',
          }}
        >
          {/* Image avec tilt 3D */}
          <motion.div
            style={{
              position: 'absolute', inset: 0,
              rotateY: springRotY, rotateX: springRotX,
              transformStyle: 'preserve-3d',
            }}
          >
            <motion.div
              initial={{ scale: 1.15 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1], delay: 0.6 }}
              style={{ position: 'absolute', inset: '-5%' }}
            >
              <Image
                src='https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop'
                alt='Mariage élégant'
                fill className='object-cover' priority
              />
            </motion.div>
          </motion.div>

          {/* Gradient sombre */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,8,6,0.9) 0%, rgba(10,8,6,0.25) 55%, transparent 100%)' }} />

          {/* Spotlight suivant le curseur */}
          <motion.div style={{ position: 'absolute', inset: 0, background: spotBg, zIndex: 1 }} />

          {/* Texte */}
          <div style={{ position: 'relative', zIndex: 10, padding: '3rem 3.5rem' }}>
            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.8rem, 4vw, 4rem)',
              color: '#F8F5F2', lineHeight: 1.1, marginBottom: '1.2rem',
              textTransform: 'uppercase',
            }}>
              <WordReveal text='Parlons de' delay={1.1} />
              <br />
              <WordReveal text='votre mariage' delay={1.25} />
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              style={{
                fontFamily: 'var(--font-body)', fontSize: '0.88rem',
                color: 'rgba(248,245,242,0.75)', lineHeight: 1.8,
                maxWidth: '340px', marginBottom: '2.5rem',
              }}
            >
              Chaque histoire mérite d'être racontée avec soin.<br />
              Partagez votre projet — je vous réponds sous 48 h.
            </motion.p>

            {/* Infos contact */}
            <div style={{
              display: 'flex', flexDirection: 'column', gap: '1.2rem',
              borderTop: '1px solid rgba(248,245,242,0.15)', paddingTop: '2rem',
            }}>
              {[
                { label: 'Email', value: 'alessio200225@gmail.com', href: 'mailto:alessio200225@gmail.com' },
                { label: 'Téléphone', value: '06 52 43 32 21', href: 'tel:+33652433221' },
                { label: 'Instagram', value: '@maisonlamartina', href: 'https://www.instagram.com/maisonlamartina?igsh=a3FsbDduenlvcnNo' },
              ].map((info, i) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.7 + i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem' }}
                >
                  <span style={{
                    fontFamily: 'var(--font-body)', fontSize: '0.58rem',
                    letterSpacing: '0.25em', textTransform: 'uppercase',
                    color: 'rgba(248,245,242,0.45)', minWidth: '70px',
                  }}>
                    {info.label}
                  </span>
                  <motion.a
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    whileHover={{ color: '#ffffff', x: 6 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      fontFamily: 'var(--font-body)', fontSize: '0.82rem',
                      color: 'rgba(248,245,242,0.85)', textDecoration: 'none',
                    }}
                  >
                    {info.value}
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ══════════════════════════════
            COLONNE DROITE — Formulaire
        ══════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background: '#F8F5F2', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            padding: '6rem 4rem', minHeight: '100vh',
          }}
        >
          <div style={{ width: '100%', maxWidth: '480px' }}>

            <AnimatePresence mode='wait'>
              {sent ? (

                /* ══════ SUCCÈS ══════ */
                <motion.div
                  key='success'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ textAlign: 'center', position: 'relative' }}
                >
                  <SuccessParticles />

                  <motion.div
                    initial={{ scale: 0, rotate: -30 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
                    style={{ position: 'relative', zIndex: 1 }}
                  >
                    <span style={{
                      fontFamily: 'Peristiwa, serif', fontSize: '5rem',
                      color: '#cc0000', display: 'block', marginBottom: '1.5rem',
                      lineHeight: 1,
                    }}>
                      ♥
                    </span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    style={{ position: 'relative', zIndex: 1 }}
                  >
                    <h2 style={{
                      fontFamily: 'var(--font-heading)', fontSize: '2.5rem',
                      color: '#1A1A1A', marginBottom: '1rem', textTransform: 'uppercase',
                    }}>
                      Message envoyé
                    </h2>
                    <p style={{
                      fontFamily: 'var(--font-body)', fontSize: '0.88rem',
                      color: '#9a9590', lineHeight: 1.9,
                    }}>
                      Merci pour votre confiance.<br />
                      Je vous répondrai dans les 48 heures.
                    </p>
                  </motion.div>

                  {/* Ligne décorative animée */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.9, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      width: '60px', height: '1px', background: '#cc0000',
                      margin: '2rem auto 0', transformOrigin: 'left',
                    }}
                  />
                </motion.div>

              ) : (

                /* ══════ FORMULAIRE ══════ */
                <motion.div key='form' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>

                  {/* En-tête */}
                  <div style={{ marginBottom: '3rem', overflow: 'hidden' }}>
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.0, duration: 0.6 }}
                      style={{
                        fontFamily: 'var(--font-body)', fontSize: '0.6rem',
                        letterSpacing: '0.28em', textTransform: 'uppercase',
                        color: '#cc0000', display: 'block', marginBottom: '0.8rem',
                      }}
                    >
                      Votre projet
                    </motion.span>

                    <div style={{ overflow: 'hidden' }}>
                      <motion.h2
                        initial={{ y: '100%' }}
                        animate={{ y: '0%' }}
                        transition={{ delay: 1.1, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)',
                          color: '#1A1A1A', lineHeight: 1.15, textTransform: 'uppercase',
                        }}
                      >
                        Faisons connaissance
                      </motion.h2>
                    </div>

                    {/* Ligne décorative */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 1.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      style={{
                        height: '1px', background: '#cc0000',
                        marginTop: '1.2rem', transformOrigin: 'left',
                      }}
                    />
                  </div>

                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                    {/* Prénom + Nom */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                      <AnimatedField
                        id='prenom' label='Prénom' placeholder='Marie'
                        required value={form.prenom} onChange={handleChange} delay={1.3}
                      />
                      <AnimatedField
                        id='nom' label='Nom' placeholder='Dupont'
                        required value={form.nom} onChange={handleChange} delay={1.4}
                      />
                    </div>

                    <AnimatedField
                      id='email' label='Email' type='email'
                      placeholder='marie@exemple.com'
                      required value={form.email} onChange={handleChange} delay={1.5}
                    />

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                      <AnimatedField
                        id='date' label='Date du mariage' type='date'
                        value={form.date} onChange={handleChange} delay={1.6}
                      />
                      <AnimatedField
                        id='lieu' label='Lieu'
                        placeholder="Paris, Côte d'Azur…"
                        value={form.lieu} onChange={handleChange} delay={1.7}
                      />
                    </div>

                    <AnimatedTextarea
                      id='message' label='Votre message'
                      placeholder='Parlez-moi de vous, de votre histoire, de ce que vous souhaitez garder de ce jour…'
                      required value={form.message} onChange={handleChange} delay={1.8}
                    />

                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.9, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className='contact-btn-wrap'
                    >
                      <MagneticButton loading={loading}>
                        Envoyer le message
                      </MagneticButton>
                    </motion.div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .contact-grid > div:first-child { min-height: max(520px, 85vh) !important; }
          .contact-btn-wrap { display: flex !important; justify-content: center !important; }
        }
      `}</style>

      <Footer />
    </>
  );
}
