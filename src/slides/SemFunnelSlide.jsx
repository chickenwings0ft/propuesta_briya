const FUNNEL = [
  { stage: 'Awareness', channel: 'Meta Ads', desc: 'Descubren Briya mientras navegan Instagram o Facebook', icon: '👀', color: '#0668E1' },
  { stage: 'Consideración', channel: 'Meta Ads', desc: 'Retargeting a quien visitó la web o interactuó sin convertir', icon: '🔁', color: '#0668E1' },
  { stage: 'Intención', channel: 'Google Ads', desc: 'Buscan activamente "pressure washing gold coast"', icon: '🔍', color: '#4285f4' },
  { stage: 'Conversión', channel: 'Ambos', desc: 'Presupuesto solicitado por formulario o llamada', icon: '✅', color: '#0284c7' },
]

export default function SemFunnelSlide() {
  return (
    <section className="section section--light" id="sem-funnel" style={{ padding: '3.5rem 2vw 1.5rem' }}>
      <div className="container" style={{ maxWidth: '1250px' }}>

        <div className="reveal-stagger" style={{ marginBottom: '2.25rem', textAlign: 'center' }}>
          <p className="section-label">2. SEM (Google, Facebook e Instagram)</p>
          <h2 className="section-title" style={{ marginBottom: '0.75rem', lineHeight: 1.05, fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}>
            El recorrido completo<br />
            <span style={{ color: 'var(--color-green)' }}>del cliente.</span>
          </h2>
          <p className="section-body" style={{ maxWidth: '680px', margin: '0 auto', fontSize: '0.9rem', lineHeight: 1.55 }}>
            Cada plataforma actúa en una fase distinta: Meta Ads siembra la marca, Google Ads recoge la búsqueda. Juntas cubren desde el primer contacto hasta el presupuesto.
          </p>
        </div>

        <div className="reveal-stagger funnel-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
          {FUNNEL.map((f, i) => (
            <div key={i} style={{ position: 'relative' }}>
              <div style={{ background: 'var(--color-dark)', borderRadius: '14px', padding: '1.5rem 1.25rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '1.6rem', marginBottom: '0.75rem' }}>{f.icon}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.5rem' }}>
                  <div style={{ width: 7, height: 7, borderRadius: '50%', background: f.color }} />
                  <span style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: f.color === '#0284c7' ? '#38bdf8' : f.color === '#0668E1' ? '#7ab3ff' : '#8ab4f8' }}>{f.channel}</span>
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#f4f8fb', marginBottom: '0.5rem' }}>{f.stage}</div>
                <div style={{ fontSize: '0.78rem', color: '#a1b1bd', lineHeight: 1.5 }}>{f.desc}</div>
              </div>
              {i < FUNNEL.length - 1 && (
                <div className="funnel-arrow" style={{ position: 'absolute', right: '-0.75rem', top: '50%', transform: 'translateY(-50%)', zIndex: 2, fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-muted)' }}>›</div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
