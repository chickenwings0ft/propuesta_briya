const PROFILES = [
  {
    platform: 'Instagram',
    handle: '@briyaclean',
    color: '#E1306C',
    icon: '📷',
    stat: '1,842 followers',
    focus: 'Before/after posts, Reels & Stories that show real results.',
  },
  {
    platform: 'Facebook',
    handle: 'Briya Clean',
    color: '#1877F2',
    icon: '👥',
    stat: '1,120 followers',
    focus: 'Local community, reviews and targeted ads for homeowners.',
  },
  {
    platform: 'LinkedIn',
    handle: 'Briya Clean',
    color: '#0A66C2',
    icon: '💼',
    stat: '340 followers',
    focus: 'B2B credibility for strata managers and property companies.',
  },
]

export default function IntroSocialSlide() {
  return (
    <section className="section section--light" id="social-fundamentals">
      <div className="container" style={{ maxWidth: '1400px' }}>
        <div className="two-col" style={{ gap: '4rem', alignItems: 'center' }}>

          <div className="reveal-stagger">
            <p className="section-label">3. REDES SOCIALES</p>
            <h2 className="section-title" style={{ marginBottom: '1.5rem', lineHeight: 1.1 }}>
              ¿Por qué las redes?
            </h2>
            <p className="section-body" style={{ marginBottom: '2.5rem', fontWeight: 500, fontSize: '0.95rem', lineHeight: 1.6 }}>
              Antes de contratar, el cliente australiano mira el Instagram y el Facebook de la empresa. Un perfil activo, con trabajos reales y respuestas rápidas, es la prueba social que convierte una visita en un presupuesto. Las redes también alimentan al SEO y al SEM: más marca, más búsquedas, mejores anuncios.
            </p>

            <p className="section-body" style={{ marginBottom: '1.25rem', paddingLeft: '1.5rem', borderLeft: '3px solid #E1306C', fontSize: '1.05rem', lineHeight: 1.6 }}>
              <strong style={{ fontSize: '1.2rem', display: 'block', marginBottom: '0.4rem', color: '#E1306C' }}>RRSS (Contenido + Comunidad)</strong>
              Publicaciones constantes con identidad de marca, gestión de comentarios y reseñas, y anuncios de Meta integrados. Cada trabajo terminado se convierte en contenido que vende el siguiente.
            </p>
          </div>

          <div className="reveal-stagger" style={{ flex: 1, padding: '0.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {PROFILES.map((p, i) => (
              <div key={i} style={{ background: 'white', borderRadius: '12px', padding: '1.1rem 1.4rem', boxShadow: '0 4px 12px rgba(6,26,63,0.08)', border: '1px solid rgba(6,26,63,0.09)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '4px', background: p.color }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#061a3f', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '6px', flexShrink: 0, border: `2px solid ${p.color}` }}>
                    <img src="/logo-original.png" alt="Briya" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--color-dark)' }}>{p.handle}</span>
                      <span style={{ fontSize: '0.6rem', fontWeight: 700, color: p.color, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{p.icon} {p.platform}</span>
                    </div>
                    <div style={{ fontSize: '0.68rem', color: 'var(--color-muted)', marginTop: '2px' }}>{p.stat}</div>
                  </div>
                </div>
                <p style={{ fontSize: '0.75rem', color: 'var(--color-muted)', lineHeight: 1.5, margin: '0.7rem 0 0' }}>
                  {p.focus}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
