export default function HeroSlide() {
  return (
    <section className="hero">
      <div className="hero__bg-text">MKT</div>

      <div className="hero-enter" style={{ position: 'relative', zIndex: 10, marginBottom: '1.5rem' }}>
        <span className="badge badge--dark" style={{ letterSpacing: '0.15em', padding: '0.5rem 1rem' }}>Estrategia de Marketing Digital 2026</span>
      </div>

      <img
        src="./logo-original.png"
        alt="Briya"
        className="hero__logo hero-enter"
        style={{ opacity: 1, maxHeight: '90px', width: 'auto', objectFit: 'contain' }}
      />

      <h2 className="hero__pretitle hero-enter" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.4rem)', letterSpacing: '0.08em', color: 'var(--color-green) !important', fontWeight: 800, margin: '1rem 0 1.5rem', textTransform: 'uppercase' }}>
        EXTERIOR CLEANING YOU CAN TRUST
      </h2>

      <p className="hero__sub hero-enter" style={{ maxWidth: '650px' }}>
        Plan de acción 2026 centrado en liderar el mercado de limpieza de exteriores en Australia — principalmente Gold Coast (Queensland) y New South Wales.
      </p>

      <div className="hero-enter" style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
        {[
          { name: 'SEO', color: '#0284c7' },
          { name: 'SEM', color: '#eab308' },
          { name: 'REDES SOCIALES', color: '#E1306C' },
        ].map((s, i, arr) => (
          <span key={s.name} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <span style={{
              fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.12em',
              color: 'var(--color-dark)', border: `2px solid ${s.color}`,
              borderRadius: '20px', padding: '0.35rem 0.9rem', background: 'rgba(255,255,255,0.6)'
            }}>{s.name}</span>
            {i < arr.length - 1 && <span style={{ color: 'var(--color-muted)', fontWeight: 700 }}>+</span>}
          </span>
        ))}
      </div>

      <div className="hero__scroll hero-enter" style={{ marginTop: '2.5rem' }}>
        <div className="hero__scroll-line"></div>
        <span>Scroll para explorar</span>
      </div>
    </section>
  )
}
