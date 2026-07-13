export default function SemChannelsSlide() {
  return (
    <section className="section section--light" id="sem-channels" style={{ padding: '3.5rem 2vw 1.5rem' }}>
      <div className="container" style={{ maxWidth: '1250px' }}>

        <div className="reveal-stagger" style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <p className="section-label">2. SEM</p>
          <h2 className="section-title" style={{ marginBottom: '0.75rem', lineHeight: 1.05, fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}>
            Dos motores publicitarios,<br />
            <span style={{ color: 'var(--color-green)' }}>una sola estrategia.</span>
          </h2>
          <p className="section-body" style={{ maxWidth: '680px', margin: '0 auto', fontSize: '0.9rem', lineHeight: 1.55 }}>
            Gestionamos <strong>Google Ads</strong> y <strong>Meta Ads</strong> de forma conjunta: uno captura a quien ya busca el servicio, el otro genera demanda en Instagram y Facebook.
          </p>
        </div>

        <div className="reveal-stagger" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>

          {/* Google Ads card */}
          <div style={{ background: 'white', border: '1px solid rgba(6,26,63,0.09)', borderRadius: '14px', padding: '1.6rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg,#4285f4,#ea4335,#fbbc04,#34a853)' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <img src="/google-logo.png" alt="Google" style={{ height: '26px', width: 'auto', objectFit: 'contain' }} />
              <span style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-dark)' }}>Ads</span>
            </div>
            <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4285f4', marginBottom: '0.75rem' }}>
              Captura de demanda activa
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--color-muted)', lineHeight: 1.55, marginBottom: '1.1rem' }}>
              Aparecemos justo cuando alguien busca el servicio con intención de contratar. Solo se paga por clic.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '1.1rem' }}>
              {[
                'Campañas Search con keywords de alta intención',
                'Extensiones de llamada y formulario de presupuesto',
                'Remarketing a quien visitó la web sin convertir',
              ].map((t, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#4285f4', flexShrink: 0, marginTop: '7px' }} />
                  <span style={{ fontSize: '0.78rem', color: 'var(--color-dark)', lineHeight: 1.45, opacity: 0.85 }}>{t}</span>
                </div>
              ))}
            </div>
            <div style={{ background: '#f0f5ff', border: '1px solid rgba(66,133,244,0.15)', borderRadius: '8px', padding: '0.65rem 0.85rem' }}>
              <div style={{ fontSize: '0.55rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6b889e', marginBottom: '0.2rem' }}>KPI principal</div>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#1a56db' }}>Coste por presupuesto solicitado</div>
            </div>
          </div>

          {/* Meta Ads card */}
          <div style={{ background: 'white', border: '1px solid rgba(6,26,63,0.09)', borderRadius: '14px', padding: '1.6rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg,#0668E1,#E1306C)' }} />
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', height: '26px' }}>
              <img src="/meta-logo.png" alt="Meta" style={{ height: '40px', width: 'auto', objectFit: 'contain', marginLeft: '-8px' }} />
            </div>
            <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0668E1', marginBottom: '0.75rem' }}>
              Generación de demanda (Instagram + Facebook)
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--color-muted)', lineHeight: 1.55, marginBottom: '1.1rem' }}>
              Impactamos a quien aún no sabe que necesita el servicio, y reimpactamos a quien ya mostró interés.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '1.1rem' }}>
              {[
                'Anuncios en Feed, Stories y Reels',
                'Segmentación geográfica: Gold Coast, Brisbane y NSW',
                'Audiencias Lookalike de los mejores clientes actuales',
              ].map((t, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#0668E1', flexShrink: 0, marginTop: '7px' }} />
                  <span style={{ fontSize: '0.78rem', color: 'var(--color-dark)', lineHeight: 1.45, opacity: 0.85 }}>{t}</span>
                </div>
              ))}
            </div>
            <div style={{ background: '#eef4ff', border: '1px solid rgba(6,102,225,0.15)', borderRadius: '8px', padding: '0.65rem 0.85rem' }}>
              <div style={{ fontSize: '0.55rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6b889e', marginBottom: '0.2rem' }}>KPI principal</div>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0668E1' }}>Coste por lead (formulario instantáneo)</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
