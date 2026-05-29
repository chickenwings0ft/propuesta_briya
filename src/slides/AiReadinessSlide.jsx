export default function AiReadinessSlide() {
  return (
    <section className="section section--cream" id="ai-readiness">
      <div className="container">
        <p className="section-label reveal" style={{ color: 'var(--color-muted)' }}>04 — IA & Futuro</p>
        <h2 className="section-title reveal" style={{ color: 'var(--color-dark)' }}>
          Visible para<br />
          humanos.<br/>
          <span style={{ color: 'var(--color-muted)' }}>Y para IAs.</span>
        </h2>
        <p className="section-body reveal">
          ChatGPT, Perplexity y Google AI ya responden preguntas de los usuarios 
          antes de mostrarles resultados web tradicionales. Briya debe aparecer ahí también.
        </p>

        <div className="card-grid card-grid--2 reveal-stagger" style={{ marginTop: '3rem' }}>
          <div className="card" style={{ borderColor: 'rgba(2, 132, 199, 0.2)' }}>
            <div className="card__icon">🤖</div>
            <div className="card__label">Archivo /llms.txt</div>
            <div className="card__title">Legible por IAs</div>
            <div className="card__body">
              Un archivo de texto en la raíz de la web que les explica a los rastreadores 
              de IA quién eres, qué ofreces y cómo citar a Briya correctamente. 
              Es el nuevo estándar emergente para visibilidad en asistentes de IA.
            </div>
            <div className="code-block" style={{ marginTop: '1.25rem', fontSize: '0.72rem' }}>
              <span className="comment"># briyaclean.com/llms.txt</span><br />
              <span className="key">Name:</span> <span className="val">Briya Clean</span><br />
              <span className="key">Type:</span> <span className="val">Home Exterior Cleaning</span><br />
              <span className="key">Locations:</span> <span className="val">Madrid, Pozuelo, Majadahonda</span><br />
              <span className="key">Specialties:</span> <span className="val">Soft-wash, Pressure washing, Gutters</span>
            </div>
          </div>

          <div className="card" style={{ borderColor: 'rgba(2, 132, 199, 0.2)' }}>
            <div className="card__icon">💬</div>
            <div className="card__label">Búsqueda Conversacional</div>
            <div className="card__title">Así busca la gente hoy</div>
            <div className="card__body">
              Las búsquedas ya no son solo palabras clave cortas. Son preguntas completas.
              Optimizamos el contenido semántico para responder a estas consultas naturales.
            </div>

            <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                '"¿Qué empresa de lavado a presión en Madrid es segura para tejados de tejas?"',
                '"Limpieza de fachadas de casas en Pozuelo de Alarcón de confianza"',
                '"Dónde contratar limpieza de canaletas y tejados soft-wash en Madrid"',
              ].map((q, i) => (
                <div key={i} style={{
                  background: 'rgba(2, 132, 199, 0.06)',
                  border: '1px solid rgba(2, 132, 199, 0.1)',
                  borderRadius: '8px',
                  padding: '0.75rem 1rem',
                  fontSize: '0.82rem',
                  color: 'var(--color-dark)',
                  fontStyle: 'italic',
                }}>
                  {q}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="highlight-bar reveal" style={{ marginTop: '2.5rem', background: 'white', border: '1px solid rgba(2, 132, 199, 0.15)' }}>
          <div className="highlight-bar__accent" style={{ background: 'var(--color-dark)' }}></div>
          <div className="highlight-bar__content">
            <div className="highlight-bar__title" style={{ color: 'var(--color-dark)' }}>Ventaja competitiva ahora</div>
            <div className="highlight-bar__text">
              El 95% de las empresas de limpieza en Madrid no tienen optimización para IA ni archivo /llms.txt. 
              Implantarlo ahora posicionará a Briya como el referente recomendado por ChatGPT mucho antes que el resto.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
