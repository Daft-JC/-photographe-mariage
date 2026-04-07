import Nav from '@/components/ui/nav';
import Footer from '@/components/ui/footer';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: '3.5rem' }}>
    <h2
      style={{
        fontFamily: 'var(--font-heading)',
        fontSize: '1.4rem',
        fontStyle: 'italic',
        marginBottom: '1.2rem',
        paddingBottom: '0.8rem',
        borderBottom: '1px solid #e8e4e0',
      }}
    >
      {title}
    </h2>
    <div
      style={{
        fontSize: '0.9rem',
        color: '#3d3d3d',
        lineHeight: 1.9,
        letterSpacing: '0.02em',
      }}
    >
      {children}
    </div>
  </div>
);

export default function MentionsLegales() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section
        style={{
          paddingTop: '160px',
          paddingBottom: '4rem',
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
          Informations légales
        </span>
        <h1
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
          }}
        >
          Mentions légales
        </h1>
      </section>

      {/* Contenu */}
      <section style={{ background: '#F8F5F2', padding: '3rem 0 7rem' }}>
        <div
          className='px-site'
          style={{ maxWidth: '800px', margin: '0 auto' }}
        >

          <Section title="1. Éditeur du site">
            <p><strong>Raison sociale :</strong> Lamartina Studio</p>
            <p><strong>Nom :</strong> Alessio Lamartina</p>
            <p><strong>Statut :</strong> [Auto-entrepreneur / SASU / EURL — à compléter]</p>
            <p><strong>SIRET :</strong> [XXX XXX XXX XXXXX — à compléter]</p>
            <p><strong>Adresse :</strong> [Votre adresse — à compléter], Martigues, France</p>
            <p><strong>Email :</strong> hello@lamartinastudio.com</p>
            <p><strong>Téléphone :</strong> +33 6 00 00 00 00</p>
          </Section>

          <Section title="2. Directeur de la publication">
            <p>Alessio Lamartina, en qualité de responsable du site lamartinastudio.com.</p>
          </Section>

          <Section title="3. Hébergement">
            <p>Ce site est hébergé par :</p>
            <p><strong>Vercel Inc.</strong><br />
            340 Pine Street, Suite 701<br />
            San Francisco, CA 94104 — États-Unis<br />
            <a href="https://vercel.com" style={{ color: '#1A1A1A' }}>vercel.com</a></p>
          </Section>

          <Section title="4. Propriété intellectuelle">
            <p>
              L'ensemble du contenu de ce site — photographies, textes, logo, mise en page — est la propriété exclusive
              d'Alessio Lamartina et est protégé par les lois françaises et internationales relatives au droit d'auteur
              et à la propriété intellectuelle.
            </p>
            <p style={{ marginTop: '0.8rem' }}>
              Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments
              de ce site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation préalable et
              écrite d'Alessio Lamartina.
            </p>
          </Section>

          <Section title="5. Données personnelles">
            <p>
              Les informations recueillies via le formulaire de contact (prénom, nom, email, date de mariage, lieu,
              message) sont collectées uniquement dans le but de répondre à vos demandes. Elles ne sont ni cédées,
              ni vendues à des tiers.
            </p>
            <p style={{ marginTop: '0.8rem' }}>
              Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés,
              vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ce droit,
              contactez-nous à : <strong>hello@lamartinastudio.com</strong>
            </p>
          </Section>

          <Section title="6. Cookies">
            <p>
              Ce site n'utilise pas de cookies à des fins publicitaires ou de traçage. Des cookies techniques
              strictement nécessaires au bon fonctionnement du site peuvent être déposés sur votre terminal lors
              de votre navigation.
            </p>
          </Section>

          <Section title="7. Liens hypertextes">
            <p>
              Le site peut contenir des liens vers des sites tiers. Lamartina Studio ne saurait être tenu responsable
              du contenu de ces sites ni des pratiques de confidentialité de leurs éditeurs.
            </p>
          </Section>

          <Section title="8. Limitation de responsabilité">
            <p>
              Lamartina Studio s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site.
              Toutefois, Alessio Lamartina ne peut garantir l'exhaustivité ni l'absence d'erreur des informations publiées
              et ne pourra être tenu responsable de tout dommage résultant de l'utilisation de ce site.
            </p>
          </Section>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              color: '#9a9590',
              letterSpacing: '0.1em',
              marginTop: '4rem',
            }}
          >
            Dernière mise à jour : avril 2025
          </p>

        </div>
      </section>

      <Footer />
    </>
  );
}
