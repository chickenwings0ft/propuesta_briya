import { useEffect } from 'react'

export default function ClosingSlide() {
  const pillars = [
    { num: '01', label: 'Auditoría & Setup' },
    { num: '02', label: 'SEO Local GBP' },
    { num: '03', label: 'Analítica GA4' },
    { num: '04', label: 'Contenidos On-Page' },
    { num: '05', label: 'Optimización IA' },
    { num: '06', label: 'Landings de Conversión' },
  ]

  return (
    <section className="section section--green" id="closing">
      <div className="container" style={{ textAlign: 'center' }}>
        <img
          src="./logo-original.png"
          alt="Briya"
          className="closing__logo reveal"
          style={{ display: 'block', margin: '0 auto 3rem', height: '70px', objectFit: 'contain', opacity: 0.95 }}
        />

        <p className="section-label reveal" style={{ color: 'rgba(13,31,45,0.65)', marginBottom: '1rem' }}>
          Resumen de la propuesta
        </p>

        <h2 className="section-title reveal" style={{ color: 'var(--color-dark)' }}>
          Resultados reales.
        </h2>

        <p style={{ color: 'rgba(13,31,45,0.7)', fontSize: '0.9rem', maxWidth: '480px', margin: '0 auto 3.5rem', lineHeight: '1.7' }} className="reveal">
          Todo trabajado de forma continua, medida y transparente. 
          Sin sorpresas, con informes mensuales avanzados y objetivos de captación claros.
        </p>

        <div className="reveal-stagger" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '4rem' }}>
          {pillars.map((p) => (
            <div key={p.num} style={{
              border: '1px solid rgba(13,31,45,0.25)',
              borderRadius: '10px',
              padding: '1.25rem 2rem',
              minWidth: '120px',
              transition: 'all 0.3s ease',
              background: 'transparent',
              cursor: 'default',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(2,132,199,0.06)'
              e.currentTarget.style.transform = 'translateY(-4px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.transform = 'translateY(0)'
            }}>
              <div style={{ fontSize: '0.6rem', color: 'rgba(13,31,45,0.6)', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>{p.num}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-dark)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{p.label}</div>
            </div>
          ))}
        </div>

        <div className="reveal" style={{
          border: '1px solid rgba(13,31,45,0.25)',
          borderRadius: '12px',
          padding: '2rem',
          maxWidth: '500px',
          margin: '0 auto',
          background: 'rgba(255,255,255,0.6)',
        }}>
          <p style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(13,31,45,0.6)', marginBottom: '0.75rem' }}>
            Contacto
          </p>
          <p style={{ color: 'var(--color-dark)', fontSize: '1.1rem', fontWeight: 700 }}>briyaclean.com</p>
          <p style={{ color: 'rgba(13,31,45,0.6)', fontSize: '0.85rem', marginTop: '0.25rem' }}>Gold Coast · Australia</p>
        </div>
      </div>
    </section>
  )
}
