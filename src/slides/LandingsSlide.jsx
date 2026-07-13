export default function LandingsSlide() {
  const cases = [
    {
      keyword: 'Limpieza de fachadas en chalets',
      type: 'Landing Local',
      volume: '1.6K',
      dificultad: 'Media',
      proposed: '/house-washing-gold-coast',
      color: 'var(--color-green)',
    },
    {
      keyword: 'Limpieza de tejados con soft-wash',
      type: 'Landing Servicio',
      volume: '880',
      dificultad: 'Baja',
      proposed: '/soft-wash-roof-cleaning',
      color: 'var(--color-green)',
    },
    {
      keyword: 'Limpieza de canaletas y bajantes',
      type: 'Landing Servicio',
      volume: '1.4K',
      dificultad: 'Baja',
      proposed: '/gutter-cleaning-gold-coast',
      color: 'var(--color-green-light)',
    },
    {
      keyword: 'Lavado a presión de suelos y piedra',
      type: 'Landing Local',
      volume: '1.2K',
      dificultad: 'Baja',
      proposed: '/pressure-washing-brisbane',
      color: 'var(--color-green-light)',
    },
  ]

  return (
    <section className="section section--cream" id="landings">
      <div className="container">
        <p className="section-label reveal" style={{ color: 'var(--color-muted)' }}>06 — Landings & Casos</p>
        <h2 className="section-title reveal" style={{ color: 'var(--color-dark)' }}>
          Páginas que<br />
          posicionan.
        </h2>
        <p className="section-body reveal">
          Creamos páginas de aterrizaje específicas para las búsquedas más
          rentables. Cada landing tiene un objetivo claro: aparecer arriba en búsquedas locales y convertir visitas en contactos comerciales directos.
        </p>

        <div className="card-grid card-grid--2 reveal-stagger" style={{ marginTop: '3rem' }}>
          {cases.map((c, i) => (
            <div key={i} className="card card--cream" style={{ position: 'relative', overflow: 'hidden' }}>
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                background: c.color,
              }}></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <span className="badge badge--dark">{c.type}</span>
                <span style={{ fontSize: '0.7rem', color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Vol. {c.volume}/mes</span>
              </div>
              <div className="card__title" style={{ color: 'var(--color-dark)', fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                {c.keyword}
              </div>
              <div className="code-block" style={{ marginTop: '1rem', fontSize: '0.72rem', background: '#e8f2f8', border: '1px solid rgba(2,132,199,0.1)', color: 'var(--color-green)' }}>
                briyaclean.com.au<span style={{ color: 'var(--color-dark)' }}>{c.proposed}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.85rem', alignItems: 'center' }}>
                <span className="label">Dificultad: {c.dificultad}</span>
                <span style={{ fontSize: '0.65rem', color: 'var(--color-green)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>→ Planificada</span>
              </div>
            </div>
          ))}
        </div>

        <div className="highlight-bar reveal" style={{ marginTop: '2.5rem', background: 'white', border: '1px solid rgba(2, 132, 199, 0.15)' }}>
          <div className="highlight-bar__accent" style={{ background: 'var(--color-dark)' }}></div>
          <div className="highlight-bar__content">
            <div className="highlight-bar__title" style={{ color: 'var(--color-dark)' }}>Estrategia de conversión local</div>
            <div className="highlight-bar__text">
              Creación de 10 Landing Pages optimizadas para servicios de limpieza de exteriores enfocados a viviendas en Gold Coast, Brisbane y New South Wales, garantizando un embudo que convierte el tráfico orgánico e IA en solicitudes de presupuesto directas.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
