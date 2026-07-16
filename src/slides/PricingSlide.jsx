const PACKS = [
  {
    name: 'Posicionamiento Web',
    sub: 'SEO + SEM',
    price: '1.350',
    color: '#38bdf8',
    items: [
      'SEO local + gestión completa de la ficha de Google',
      'Landings por servicio y zona',
      'Optimización para IAs (ChatGPT)',
      'Gestión de Google Ads y Meta Ads',
      'Informe mensual de resultados',
    ],
  },
  {
    name: 'Redes Sociales',
    sub: 'Instagram + Facebook',
    price: '990',
    color: '#E1306C',
    items: [
      'Calendario de contenido mensual',
      'Publicaciones con identidad de marca',
      'Reels, historias y antes/después',
      'Gestión de comunidad y reseñas',
      'Informe mensual de resultados',
    ],
  },
]

export default function PricingSlide() {
  return (
    <section
      className="section"
      id="pricing-briya"
      style={{
        position: 'relative',
        padding: 0,
        background: 'var(--color-dark)',
        color: 'var(--color-cream)'
      }}
    >
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem 2rem 3rem'
        }}
      >
        <span className="reveal" style={{ fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-floral)', marginBottom: '1rem' }}>
          Propuesta Comercial
        </span>
        <h2 className="reveal" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, marginBottom: '2rem', textAlign: 'center', lineHeight: 1.1 }}>
          El momento <br/>de estar arriba.
        </h2>

        {/* Two packs */}
        <div className="reveal pricing-packs-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', width: '100%', maxWidth: '820px' }}>
          {PACKS.map((pack, i) => (
            <div key={i} style={{
              background: 'rgba(254, 254, 255, 0.03)',
              border: '1px solid rgba(2, 132, 199, 0.2)',
              borderRadius: '16px',
              padding: '1.75rem 1.9rem',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: pack.color }} />

              <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-floral)', marginBottom: '0.2rem' }}>{pack.name}</div>
              <div style={{ fontSize: '0.72rem', color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.1rem' }}>{pack.sub}</div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem', marginBottom: '1.25rem', paddingBottom: '1.1rem', borderBottom: '1px solid rgba(2, 132, 199, 0.15)' }}>
                <span style={{ fontSize: '2.2rem', fontWeight: 800, lineHeight: 1 }}>A$ {pack.price}</span>
                <span style={{ fontSize: '0.85rem', color: '#a1a1aa' }}>/mes</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {pack.items.map((t, j) => (
                  <div key={j} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                    <div style={{ width: 5, height: 5, borderRadius: '50%', background: pack.color, flexShrink: 0, marginTop: '7px' }} />
                    <span style={{ fontSize: '0.78rem', color: '#d4d4d8', lineHeight: 1.45 }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Combined offer */}
        <div className="reveal" style={{
          marginTop: '1.25rem',
          width: '100%',
          maxWidth: '820px',
          background: 'linear-gradient(90deg, rgba(2,132,199,0.15), rgba(56,189,248,0.08))',
          border: '1px solid rgba(56,189,248,0.35)',
          borderRadius: '14px',
          padding: '1.1rem 1.75rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div>
            <div style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-floral)', marginBottom: '0.25rem' }}>
              Estrategia completa — los dos servicios
            </div>
            <div style={{ fontSize: '0.78rem', color: '#a1a1aa' }}>
              Posicionamiento Web + Redes Sociales trabajando como un solo sistema
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <span style={{ fontSize: '0.95rem', color: '#71717a', textDecoration: 'line-through', marginRight: '0.6rem' }}>A$ 2.340</span>
            <span style={{ fontSize: '1.9rem', fontWeight: 800, whiteSpace: 'nowrap' }}>A$ 2.200<span style={{ fontSize: '0.9rem', fontWeight: 400, color: '#a1a1aa' }}>/mes</span></span>
          </div>
        </div>

        <div className="reveal" style={{ marginTop: '1rem', fontSize: '0.68rem', color: '#71717a', textAlign: 'center' }}>
          Precios en dólares australianos (AUD) · Incluye soporte "all-in" para cualquier cambio en la web · * Inversión publicitaria en Google/Meta Ads no incluida
        </div>

      </div>
    </section>
  )
}
