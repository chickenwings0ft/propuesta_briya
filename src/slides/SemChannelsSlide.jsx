export default function SemChannelsSlide() {
  return (
    <section className="section section--light" id="sem-channels" style={{ padding: '3.5rem 2vw 1.5rem' }}>
      <div className="container" style={{ maxWidth: '1250px' }}>

        <div className="reveal-stagger" style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <p className="section-label">2. SEM (Google, Facebook e Instagram)</p>
          <h2 className="section-title" style={{ marginBottom: '0.75rem', lineHeight: 1.05, fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}>
            Google Ads y<br />
            <span style={{ color: 'var(--color-green)' }}>Meta Ads.</span>
          </h2>
          <p className="section-body" style={{ maxWidth: '680px', margin: '0 auto', fontSize: '0.9rem', lineHeight: 1.55 }}>
            El SEM se puede gestionar en dos fases donde se encuentra nuestro público: <strong>Google Ads</strong> y <strong>Meta Ads</strong> (Facebook e Instagram).
          </p>
        </div>

        <div className="reveal-stagger" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>

          {/* Google Ads card */}
          <div style={{ background: 'white', border: '1px solid rgba(6,26,63,0.09)', borderRadius: '14px', padding: '1.6rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg,#4285f4,#ea4335,#fbbc04,#34a853)' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
              <img src="/google-logo.png" alt="Google" style={{ height: '26px', width: 'auto', objectFit: 'contain' }} />
              <span style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-dark)' }}>ADS</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-muted)', lineHeight: 1.55, marginBottom: '1.1rem' }}>
              Ideal para captar búsquedas de Google que busquen empresas de exterior cleaning en Gold Coast.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                'Estudio de mercado e intenciones de búsqueda en Google',
                'Medición de la interacción del usuario',
                'Generación de clientes desde el mes 1',
              ].map((t, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#4285f4', flexShrink: 0, marginTop: '7px' }} />
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-dark)', lineHeight: 1.45, opacity: 0.85 }}>{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Meta Ads card */}
          <div style={{ background: 'white', border: '1px solid rgba(6,26,63,0.09)', borderRadius: '14px', padding: '1.6rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg,#0668E1,#E1306C)' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem', height: '26px' }}>
              <img src="/meta-logo.png" alt="Meta" style={{ height: '40px', width: 'auto', objectFit: 'contain', marginLeft: '-8px' }} />
              <span style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-dark)', marginLeft: '-6px' }}>ADS</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-muted)', lineHeight: 1.55, marginBottom: '1.1rem' }}>
              Campañas en Facebook e Instagram a modo Reels, Publicaciones e Historias con el objetivo de conseguir clientes o puntos de contacto con las publicaciones de la cuenta.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                'Estudio de mercado para segmentación correcta',
                'Medición y aprendizaje para encontrar lo que mejor funciona',
                'Generación de leads rápidos y posibles clientes',
              ].map((t, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#0668E1', flexShrink: 0, marginTop: '7px' }} />
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-dark)', lineHeight: 1.45, opacity: 0.85 }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
