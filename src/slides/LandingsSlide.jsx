export default function LandingsSlide() {
  const cases = [
    { icon: '🏠', service: 'Limpieza de fachadas', url: '/house-washing-gold-coast' },
    { icon: '🏘️', service: 'Limpieza de tejados', url: '/soft-wash-roof-cleaning' },
    { icon: '🍂', service: 'Limpieza de canaletas', url: '/gutter-cleaning-gold-coast' },
    { icon: '💦', service: 'Lavado a presión', url: '/pressure-washing-brisbane' },
  ]

  return (
    <section className="section section--cream" id="landings">
      <div className="container">
        <p className="section-label reveal" style={{ color: 'var(--color-muted)' }}>06 — Landings</p>
        <h2 className="section-title reveal" style={{ color: 'var(--color-dark)' }}>
          Una página para<br />
          cada búsqueda.
        </h2>
        <p className="section-body reveal" style={{ fontSize: '0.95rem', lineHeight: 1.65 }}>
          Creamos una página específica para cada servicio y cada zona. Quien busca "gutter cleaning gold coast" aterriza en una página que habla <strong>exactamente</strong> de eso, con un botón claro para pedir presupuesto.
        </p>

        <div className="card-grid card-grid--2 reveal-stagger" style={{ marginTop: '2.5rem' }}>
          {cases.map((c, i) => (
            <div key={i} className="card card--cream" style={{ display: 'flex', alignItems: 'center', gap: '1.1rem', padding: '1.25rem 1.5rem' }}>
              <span style={{ fontSize: '1.8rem' }}>{c.icon}</span>
              <div style={{ minWidth: 0 }}>
                <div className="card__title" style={{ color: 'var(--color-dark)', fontSize: '0.9rem', marginBottom: '0.35rem' }}>
                  {c.service}
                </div>
                <div style={{ fontSize: '0.72rem', fontFamily: 'Courier New, monospace', color: 'var(--color-green)', background: '#e8f2f8', border: '1px solid rgba(2,132,199,0.1)', borderRadius: '6px', padding: '0.35rem 0.6rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  briyaclean.com.au<span style={{ color: 'var(--color-dark)' }}>{c.url}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="highlight-bar reveal" style={{ marginTop: '2.5rem', background: 'white', border: '1px solid rgba(2, 132, 199, 0.15)' }}>
          <div className="highlight-bar__accent" style={{ background: 'var(--color-dark)' }}></div>
          <div className="highlight-bar__content">
            <div className="highlight-bar__title" style={{ color: 'var(--color-dark)' }}>10 landings en total</div>
            <div className="highlight-bar__text">
              Cada visita llega a la página exacta de lo que busca y pide presupuesto en un clic.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
