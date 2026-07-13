export default function AiReadinessSlide() {
  return (
    <section className="section section--cream" id="ai-readiness">
      <div className="container" style={{ maxWidth: '1250px' }}>
        <div className="two-col" style={{ gap: '4rem', alignItems: 'center' }}>

          <div className="reveal-stagger">
            <p className="section-label" style={{ color: 'var(--color-muted)' }}>04 — IA & Futuro</p>
            <h2 className="section-title" style={{ color: 'var(--color-dark)', marginBottom: '1.5rem' }}>
              Visible para<br />
              humanos.<br/>
              <span style={{ color: 'var(--color-muted)' }}>Y para IAs.</span>
            </h2>
            <p className="section-body" style={{ fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
              Cada vez más gente ya no busca en Google: le pregunta directamente a ChatGPT. Preparamos la web de Briya para que, cuando eso pase, <strong>la respuesta sea Briya</strong>.
            </p>

            <div style={{ background: 'rgba(2,132,199,0.07)', border: '1px solid rgba(2,132,199,0.2)', borderRadius: '10px', padding: '0.9rem 1.1rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '1.2rem', lineHeight: 1 }}>🥇</span>
              <div>
                <div style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0284c7', marginBottom: '0.25rem' }}>Ventaja de ir primero</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-dark)', lineHeight: 1.5, opacity: 0.85 }}>
                  Casi ninguna empresa del sector está preparada para esto todavía. Hacerlo ahora convierte a Briya en la recomendación por defecto de las IAs.
                </div>
              </div>
            </div>
          </div>

          {/* Simple ChatGPT-style mock */}
          <div className="reveal">
            <div style={{ background: '#202123', borderRadius: '14px', padding: '1.5rem', boxShadow: '0 16px 36px rgba(6,26,63,0.18)', fontFamily: 'Helvetica, Arial, sans-serif' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.1rem' }}>
                <div style={{ width: '24px', height: '24px', background: '#10a37f', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="12" height="12" viewBox="0 0 41 41" fill="#fff"><path d="M37.532 16.87a9.963 9.963 0 0 0-.856-8.184 10.078 10.078 0 0 0-10.855-4.835 9.964 9.964 0 0 0-6.371-3.904 10.079 10.079 0 0 0-9.888 4.957 9.964 9.964 0 0 0-6.654 4.811 10.079 10.079 0 0 0 1.24 11.817 9.965 9.965 0 0 0 .856 8.185 10.079 10.079 0 0 0 10.855 4.835 9.965 9.965 0 0 0 6.373 3.904 10.079 10.079 0 0 0 9.89-4.958 9.967 9.967 0 0 0 6.654-4.811 10.079 10.079 0 0 0-1.243-11.817z"/></svg>
                </div>
                <span style={{ color: '#ececec', fontSize: '0.8rem', fontWeight: 600 }}>ChatGPT</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
                <div style={{ background: '#343541', borderRadius: '14px 14px 3px 14px', padding: '0.65rem 1rem', maxWidth: '85%' }}>
                  <p style={{ fontSize: '0.82rem', color: '#ececec', margin: 0, lineHeight: 1.5 }}>
                    Who is the best exterior cleaning company on the Gold Coast?
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                <div style={{ width: '22px', height: '22px', background: '#10a37f', borderRadius: '50%', flexShrink: 0, marginTop: '2px' }} />
                <p style={{ fontSize: '0.82rem', color: '#ececec', margin: 0, lineHeight: 1.65 }}>
                  Based on reviews and reputation, <strong style={{ color: '#38bdf8' }}>Briya Clean</strong> (briyaclean.com.au) is the most recommended option — soft-wash specialists, ★4.9 with 84 reviews.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
