const PILLARS = [
  {
    name: 'SEO',
    color: '#38bdf8',
    items: ['SEO local + Google Business', 'Landings por zona y servicio', 'Optimización para IAs'],
  },
  {
    name: 'SEM',
    color: '#eab308',
    items: ['Gestión de Google Ads', 'Gestión de Meta Ads (IG + FB)', 'Optimización semanal'],
  },
  {
    name: 'RRSS',
    color: '#E1306C',
    items: ['Calendario de contenido', 'Identidad visual de marca', 'Comunidad y reseñas'],
  },
]

export default function PricingSlide() {
  return (
    <section
      className="section"
      id="pricing-briya"
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: 0,
        background: 'var(--color-dark)',
        color: 'var(--color-cream)'
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
          padding: '2rem'
        }}
      >
        <span className="reveal" style={{ fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-floral)', marginBottom: '1rem' }}>
          Propuesta Comercial
        </span>
        <h2 className="reveal" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', fontWeight: 800, marginBottom: '2rem', textAlign: 'center', lineHeight: 1.1 }}>
          El momento <br/>de estar arriba.
        </h2>

        {/* Pricing card */}
        <div className="reveal" style={{
          background: 'rgba(254, 254, 255, 0.03)',
          border: '1px solid rgba(2, 132, 199, 0.2)',
          borderRadius: '18px',
          width: '100%',
          maxWidth: '780px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
          overflow: 'hidden'
        }}>

          {/* Header: plan + price */}
          <div style={{ padding: '2rem 2.5rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', borderBottom: '1px solid rgba(2, 132, 199, 0.15)' }}>
            <div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-floral)', marginBottom: '0.3rem' }}>Estrategia Digital Completa</div>
              <div style={{ fontSize: '0.82rem', color: '#a1a1aa' }}>SEO + SEM + Redes Sociales gestionados como un solo sistema</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.7rem', color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>Mensualidad</div>
              <div style={{ fontSize: '2.6rem', fontWeight: 800, lineHeight: 1, whiteSpace: 'nowrap' }}>
                A$ 2.300<span style={{ fontSize: '1rem', fontWeight: 400, color: '#a1a1aa' }}>/mes</span>
              </div>
              <div style={{ fontSize: '0.68rem', color: '#a1a1aa', marginTop: '0.3rem' }}>AUD · todo incluido</div>
            </div>
          </div>

          {/* Three pillars */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0 }}>
            {PILLARS.map((p, i) => (
              <div key={i} style={{ padding: '1.4rem 1.5rem', borderRight: i < PILLARS.length - 1 ? '1px solid rgba(2, 132, 199, 0.12)' : 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: p.color }} />
                  <span style={{ fontSize: '0.95rem', fontWeight: 800, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{p.name}</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                  {p.items.map((t, j) => (
                    <div key={j} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                      <div style={{ width: 4, height: 4, borderRadius: '50%', background: p.color, flexShrink: 0, marginTop: '7px', opacity: 0.8 }} />
                      <span style={{ fontSize: '0.75rem', color: '#d4d4d8', lineHeight: 1.45 }}>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div style={{ padding: '1rem 2.5rem 1.4rem', borderTop: '1px solid rgba(2, 132, 199, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
            <div style={{ fontSize: '0.72rem', color: '#a1a1aa', lineHeight: 1.5 }}>
              Incluye soporte técnico "all-in" para cualquier cambio en la web · Informe mensual de resultados
            </div>
            <div style={{ fontSize: '0.68rem', color: '#71717a' }}>
              * Inversión publicitaria en Google/Meta Ads no incluida
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
