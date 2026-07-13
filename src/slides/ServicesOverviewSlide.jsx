const SERVICES = [
  {
    num: '01',
    name: 'SEO',
    tagline: 'Posicionamiento Orgánico',
    desc: 'Aparecer arriba en Google y en las respuestas de las IAs cuando alguien busca limpieza de exteriores en Gold Coast, Brisbane o NSW.',
    items: ['SEO local y Google Business Profile', 'Landings por servicio y zona', 'Optimización para ChatGPT e IAs'],
    result: 'Clientes recurrentes a largo plazo',
    color: '#0284c7',
    bg: 'rgba(2,132,199,0.06)',
  },
  {
    num: '02',
    name: 'SEM',
    tagline: 'Publicidad de Pago (Google, Facebook e Instagram)',
    desc: 'Campañas gestionadas en Google Ads y Meta Ads para captar presupuestos desde el primer día, mientras el SEO madura.',
    items: ['Google Ads: búsqueda de alta intención', 'Meta Ads: Instagram + Facebook', 'Optimización semanal del presupuesto'],
    result: 'Leads inmediatos y medibles',
    color: '#eab308',
    bg: 'rgba(234,179,8,0.07)',
  },
  {
    num: '03',
    name: 'RRSS',
    tagline: 'Redes Sociales',
    desc: 'Contenido constante y con marca en Instagram, Facebook y LinkedIn que convierte cada trabajo terminado en confianza y nuevos clientes.',
    items: ['Calendario mensual de publicaciones', 'Identidad visual unificada', 'Gestión de comunidad y reseñas'],
    result: 'Marca reconocible y con autoridad',
    color: '#E1306C',
    bg: 'rgba(225,48,108,0.06)',
  },
]

export default function ServicesOverviewSlide() {
  return (
    <section className="section section--light" id="services-overview" style={{ padding: '3.5rem 2vw 1.5rem' }}>
      <div className="container" style={{ maxWidth: '1250px' }}>

        <div className="reveal-stagger" style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <p className="section-label">La Propuesta</p>
          <h2 className="section-title" style={{ marginBottom: '0.75rem', lineHeight: 1.05, fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}>
            Una estrategia,<br />
            <span style={{ color: 'var(--color-green)' }}>tres motores.</span>
          </h2>
          <p className="section-body" style={{ maxWidth: '680px', margin: '0 auto', fontSize: '0.9rem', lineHeight: 1.55 }}>
            SEO, SEM y Redes Sociales trabajando como un solo sistema: cada uno cubre una fase distinta del cliente y se refuerzan entre sí.
          </p>
        </div>

        <div className="reveal-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.1rem' }}>
          {SERVICES.map((s, i) => (
            <div key={i} style={{ background: 'white', border: '1px solid rgba(6,26,63,0.09)', borderRadius: '16px', padding: '1.6rem 1.4rem', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: s.color }} />

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.6rem', marginBottom: '0.2rem' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 800, color: s.color, letterSpacing: '0.1em' }}>{s.num}</span>
                <span style={{ fontSize: '1.7rem', fontWeight: 900, letterSpacing: '-0.03em', color: 'var(--color-dark)', textTransform: 'uppercase' }}>{s.name}</span>
              </div>
              <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: s.color, marginBottom: '0.85rem' }}>
                {s.tagline}
              </div>

              <p style={{ fontSize: '0.78rem', color: 'var(--color-muted)', lineHeight: 1.55, marginBottom: '1rem' }}>
                {s.desc}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.1rem' }}>
                {s.items.map((t, j) => (
                  <div key={j} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                    <div style={{ width: 5, height: 5, borderRadius: '50%', background: s.color, flexShrink: 0, marginTop: '7px' }} />
                    <span style={{ fontSize: '0.74rem', color: 'var(--color-dark)', lineHeight: 1.45, opacity: 0.85 }}>{t}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 'auto', background: s.bg, border: `1px solid ${s.color}25`, borderRadius: '8px', padding: '0.65rem 0.85rem' }}>
                <div style={{ fontSize: '0.55rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6b889e', marginBottom: '0.2rem' }}>Resultado</div>
                <div style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--color-dark)' }}>{s.result}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.78rem', color: 'var(--color-muted)' }}>
          SEO construye la base · SEM acelera los resultados · RRSS multiplica la confianza
        </div>

      </div>
    </section>
  )
}
