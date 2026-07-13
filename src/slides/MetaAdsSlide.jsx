import { useEffect, useRef, useState } from 'react'

const OBJECTIVES = [
  { icon: '🎯', title: 'Leads Directos', desc: 'Formulario instantáneo dentro de Instagram/Facebook, sin salir de la app. Ideal para presupuestos rápidos.' },
  { icon: '🔁', title: 'Remarketing', desc: 'Impactamos a quien visitó la web o interactuó con el perfil pero todavía no contrató.' },
  { icon: '🧬', title: 'Audiencias Lookalike', desc: 'Meta encuentra nuevos clientes con el mismo perfil que los mejores clientes actuales de Briya.' },
  { icon: '🖼️', title: 'Creatividades Antes/Después', desc: 'El formato con mejor rendimiento en anuncios del sector exterior cleaning.' },
]

export default function MetaAdsSlide() {
  const sectionRef = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(false)
          setTimeout(() => setInView(true), 80)
        } else {
          setInView(false)
        }
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="section section--cream"
      id="meta-ads"
      style={{ overflow: 'hidden', padding: '3.5rem 2vw 1.5rem' }}
    >
      <div className="container" style={{ maxWidth: '1250px' }}>

        {/* Header */}
        <div style={{ marginBottom: '1.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
            <p className="section-label" style={{ color: 'var(--color-muted)', marginBottom: 0 }}>08 — Meta Ads</p>
            <img src="/meta-logo.png" alt="Meta" style={{ height: '20px', width: 'auto', objectFit: 'contain' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <h2 className="section-title reveal" style={{ color: 'var(--color-dark)', lineHeight: 1.05, fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}>
              Instagram + Facebook,<br />
              <span style={{ color: 'var(--color-green)' }}>anuncios que convierten.</span>
            </h2>
            <p style={{ fontSize: '0.82rem', color: 'var(--color-muted)', maxWidth: '380px', lineHeight: 1.55 }}>
              El contenido orgánico construye confianza; los anuncios en Meta aceleran el alcance y generan leads directos mientras esa audiencia crece.
            </p>
          </div>
        </div>

        {/* Objectives — 4 columns */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.85rem', marginBottom: '1.25rem' }}>
          {OBJECTIVES.map((o, i) => (
            <div
              key={i}
              style={{
                background: 'white',
                border: '1px solid rgba(6,26,63,0.09)',
                borderRadius: '12px',
                padding: '1.2rem 1.1rem',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.97)',
                transition: `all 0.55s cubic-bezier(0.22,1,0.36,1) ${0.08 * i}s`,
              }}
            >
              <div style={{ fontSize: '1.4rem', marginBottom: '0.4rem' }}>{o.icon}</div>
              <div style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--color-dark)', textTransform: 'uppercase', letterSpacing: '0.02em', lineHeight: 1.2, marginBottom: '0.45rem' }}>
                {o.title}
              </div>
              <p style={{ fontSize: '0.72rem', color: 'var(--color-muted)', lineHeight: 1.5 }}>{o.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
