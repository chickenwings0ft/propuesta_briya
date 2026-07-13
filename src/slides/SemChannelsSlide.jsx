const FUNNEL = [
  { stage: 'Awareness', channel: 'Meta Ads', desc: 'Descubren Briya mientras navegan Instagram o Facebook', color: '#0668E1' },
  { stage: 'Consideración', channel: 'Meta Ads', desc: 'Retargeting a quien vio la web o interactuó sin convertir', color: '#0668E1' },
  { stage: 'Intención', channel: 'Google Ads', desc: 'Buscan activamente "pressure washing gold coast"', color: '#4285f4' },
  { stage: 'Conversión', channel: 'Ambos', desc: 'Presupuesto solicitado por formulario o llamada', color: '#0284c7' },
]

export default function SemChannelsSlide() {
  return (
    <section className="section section--light" id="sem-channels" style={{ padding: '3.5rem 2vw 1.5rem' }}>
      <div className="container" style={{ maxWidth: '1350px' }}>

        <div className="reveal-stagger" style={{ marginBottom: '2rem' }}>
          <p className="section-label">2. SEM</p>
          <h2 className="section-title" style={{ marginBottom: '1rem', lineHeight: 1.05, fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}>
            Dos motores publicitarios,<br />
            <span style={{ color: 'var(--color-green)' }}>una sola estrategia.</span>
          </h2>
          <p className="section-body" style={{ maxWidth: '760px', fontSize: '0.92rem', lineHeight: 1.6 }}>
            El SEM no se limita a Google. Gestionamos de forma conjunta <strong>Google Ads</strong> (motor de búsqueda) y <strong>Meta Ads</strong> (Instagram + Facebook) para cubrir todo el recorrido del cliente: desde que descubre que necesita el servicio hasta el momento exacto en que busca a quién contratar.
          </p>
        </div>

        <div className="reveal-stagger" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.5rem' }}>

          {/* Google Ads card */}
          <div style={{ background: 'white', border: '1px solid rgba(6,26,63,0.09)', borderRadius: '14px', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg,#4285f4,#ea4335,#fbbc04,#34a853)' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem' }}>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.5px' }}>
                G<span style={{ color: '#ea4335' }}>o</span><span style={{ color: '#fbbc04' }}>o</span>g<span style={{ color: '#34a853' }}>l</span><span style={{ color: '#ea4335' }}>e</span>
              </span>
              <span style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-dark)' }}>Ads</span>
            </div>
            <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4285f4', marginBottom: '0.75rem' }}>
              Captura de demanda activa
            </div>
            <p style={{ fontSize: '0.78rem', color: 'var(--color-muted)', lineHeight: 1.55, marginBottom: '1.1rem' }}>
              Aparecemos justo cuando alguien busca el servicio con intención real de contratar. Solo se paga por clic.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.1rem' }}>
              {[
                'Campañas Search con keywords de alta intención ("pressure washing near me")',
                'Extensiones de llamada, ubicación y formulario de presupuesto',
                'Remarketing a quien visitó la web sin convertir',
                'Performance Max: Búsqueda, Maps, Display y YouTube a la vez',
              ].map((t, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#4285f4', flexShrink: 0, marginTop: '6px' }} />
                  <span style={{ fontSize: '0.72rem', color: 'var(--color-dark)', lineHeight: 1.45, opacity: 0.85 }}>{t}</span>
                </div>
              ))}
            </div>
            <div style={{ background: '#f0f5ff', border: '1px solid rgba(66,133,244,0.15)', borderRadius: '8px', padding: '0.65rem 0.85rem' }}>
              <div style={{ fontSize: '0.55rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6b889e', marginBottom: '0.2rem' }}>KPI principal</div>
              <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#1a56db' }}>Coste por presupuesto solicitado</div>
            </div>
          </div>

          {/* Meta Ads card */}
          <div style={{ background: 'white', border: '1px solid rgba(6,26,63,0.09)', borderRadius: '14px', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg,#0668E1,#E1306C)' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem' }}>
              <img src="/meta-logo.png" alt="Meta" style={{ height: '22px', width: 'auto', objectFit: 'contain' }} />
            </div>
            <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0668E1', marginBottom: '0.75rem' }}>
              Generación de demanda (Instagram + Facebook)
            </div>
            <p style={{ fontSize: '0.78rem', color: 'var(--color-muted)', lineHeight: 1.55, marginBottom: '1.1rem' }}>
              Impactamos a quien todavía no sabe que necesita el servicio, y volvemos a impactar a quien ya mostró interés.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.1rem' }}>
              {[
                'Anuncios en Feed, Stories y Reels de Instagram y Facebook',
                'Segmentación por intereses, radio geográfico (Gold Coast) y comportamiento',
                'Audiencias Lookalike a partir de los mejores clientes actuales',
                'Remarketing a visitantes web y a quien interactuó con el perfil',
              ].map((t, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#0668E1', flexShrink: 0, marginTop: '6px' }} />
                  <span style={{ fontSize: '0.72rem', color: 'var(--color-dark)', lineHeight: 1.45, opacity: 0.85 }}>{t}</span>
                </div>
              ))}
            </div>
            <div style={{ background: '#eef4ff', border: '1px solid rgba(6,102,225,0.15)', borderRadius: '8px', padding: '0.65rem 0.85rem' }}>
              <div style={{ fontSize: '0.55rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6b889e', marginBottom: '0.2rem' }}>KPI principal</div>
              <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#0668E1' }}>Coste por lead (formulario instantáneo)</div>
            </div>
          </div>
        </div>

        {/* Funnel */}
        <div className="reveal-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.6rem' }}>
          {FUNNEL.map((f, i) => (
            <div key={i} style={{ position: 'relative' }}>
              <div style={{ background: 'var(--color-dark)', borderRadius: '10px', padding: '0.9rem 1rem', height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.4rem' }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: f.color }} />
                  <span style={{ fontSize: '0.55rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: f.color }}>{f.channel}</span>
                </div>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#f4f8fb', marginBottom: '0.3rem' }}>{f.stage}</div>
                <div style={{ fontSize: '0.65rem', color: '#a1b1bd', lineHeight: 1.4 }}>{f.desc}</div>
              </div>
              {i < FUNNEL.length - 1 && (
                <div style={{ position: 'absolute', right: '-0.45rem', top: '50%', transform: 'translateY(-50%)', zIndex: 2, fontSize: '0.9rem', color: 'var(--color-muted)' }}>›</div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
