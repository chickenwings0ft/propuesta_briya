export default function OptimizationSlide() {
  const KWS = [
    { kw: 'pressure washing gold coast', vol: '1.6K', cpc: 'A$2.10', kd: 35, kdColor: '#4ade80', pos: '#11', ai: 'Alta' },
    { kw: 'house washing brisbane', vol: '1.2K', cpc: 'A$1.80', kd: 28, kdColor: '#4ade80', pos: '#8', ai: 'Muy Alta' },
    { kw: 'roof cleaning gold coast', vol: '880', cpc: 'A$2.40', kd: 41, kdColor: '#facc15', pos: '#15', ai: 'Alta' },
    { kw: 'gutter cleaning cost', vol: '1.4K', cpc: 'A$1.20', kd: 48, kdColor: '#facc15', pos: '>50', ai: 'Media' },
    { kw: 'driveway pressure cleaning near me', vol: '590', cpc: 'A$2.80', kd: 18, kdColor: '#4ade80', pos: '-', ai: 'Muy Alta' },
    { kw: 'soft wash house cleaning', vol: '720', cpc: 'A$1.95', kd: 30, kdColor: '#4ade80', pos: '#24', ai: 'Alta' },
    { kw: 'soft washing australia', vol: '320', cpc: 'A$1.50', kd: 14, kdColor: '#4ade80', pos: '#19', ai: 'Muy Alta' },
    { kw: 'remove mould from exterior walls', vol: '2.1K', cpc: 'A$1.10', kd: 52, kdColor: '#facc15', pos: '#45', ai: 'Media' },
  ]

  return (
    <section className="section section--dark" id="optimization" style={{ overflow: 'hidden' }}>
      <div className="container" style={{ maxWidth: '1200px' }}>
        <p className="section-label reveal">05 — Investigación Estratégica</p>
        <div className="opt-layout" style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
          
          {/* Header Column */}
          <div className="opt-header-col" style={{ flex: '0 0 35%' }}>
            <h2 className="section-title reveal" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1 }}>
              No es saber,<br />
              <span style={{ color: 'var(--color-muted)' }}>es investigar.</span>
            </h2>
            <p className="section-body reveal" style={{ marginTop: '1.5rem', fontSize: '1.05rem', paddingRight: '1rem' }}>
              Para cada landing o acción que tomamos, analizamos en profundidad qué buscan y cómo lo hacen tus clientes ideales. Con datos reales de búsqueda, podemos orientar tus contenidos a las consultas más rentables y menos competidas del mercado.
            </p>
            <div className="reveal" style={{ marginTop: '2.5rem', opacity: 0.8 }}>
              <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#71717a', display: 'block', marginBottom: '1rem' }}>Powered Data by</span>
              <img src="./semrush-lockup-rgb.png" alt="Semrush" style={{ height: '54px', filter: 'grayscale(100%) brightness(2)' }} />
            </div>
          </div>

          {/* Table Column */}
          <div className="opt-table-col" style={{ flex: '1', minWidth: 0 }}>
            <div className="reveal" style={{ 
              background: '#111110', 
              borderRadius: '12px', 
              border: '1px solid rgba(255,255,255,0.08)',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
            }}>
              {/* Table Header UI */}
              <div style={{ 
                padding: '1rem 1.5rem', 
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                background: 'rgba(255,255,255,0.02)'
              }}>
                <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ef4444' }} />
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#f59e0b' }} />
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#22c55e' }} />
                </div>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#a1a1aa', letterSpacing: '0.05em' }}>
                  KEYWORD EXPLORER — BRIYA CLEAN
                </div>
              </div>

              {/* Table Content */}
              <div style={{ padding: '0 1rem 1rem' }}>
                <table className="kw-table" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.82rem' }}>
                  <thead>
                    <tr>
                      <th style={{ padding: '1.2rem 0.5rem 0.8rem', color: '#71717a', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>Palabra Clave</th>
                      <th style={{ padding: '1.2rem 0.5rem 0.8rem', color: '#71717a', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>Volumen</th>
                      <th style={{ padding: '1.2rem 0.5rem 0.8rem', color: '#71717a', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>KD %</th>
                      <th style={{ padding: '1.2rem 0.5rem 0.8rem', color: '#71717a', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>CPC</th>
                      <th style={{ padding: '1.2rem 0.5rem 0.8rem', color: '#71717a', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>Posición</th>
                      <th style={{ padding: '1.2rem 0.5rem 0.8rem', color: '#71717a', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>Mención IA</th>
                    </tr>
                  </thead>
                  <tbody>
                    {KWS.map((k, i) => (
                      <tr key={i} style={{ transition: 'background 0.2s', borderBottom: i !== KWS.length - 1 ? '1px solid rgba(255,255,255,0.03)' : 'none' }}>
                        <td style={{ padding: '0.8rem 0.5rem', color: '#e4e4e7', fontWeight: 500 }}>{k.kw}</td>
                        <td data-label="Volumen" style={{ padding: '0.8rem 0.5rem', color: '#a1a1aa' }}>{k.vol}</td>
                        <td data-label="KD %" style={{ padding: '0.8rem 0.5rem' }}>
                          <span style={{ 
                            display: 'inline-block',
                            width: '24px', height: '24px', 
                            lineHeight: '24px', textAlign: 'center', 
                            borderRadius: '50%', 
                            background: k.kdColor + '20', 
                            color: k.kdColor,
                            fontSize: '0.7rem',
                            fontWeight: 700
                          }}>{k.kd}</span>
                        </td>
                        <td data-label="CPC" style={{ padding: '0.8rem 0.5rem', color: '#a1a1aa' }}>{k.cpc}</td>
                        <td data-label="Posición" style={{ padding: '0.8rem 0.5rem', color: k.pos === '#8' || k.pos === '#11' || k.pos === '#15' ? 'var(--color-floral)' : '#a1a1aa', fontWeight: k.pos.includes('8') ? 700 : 400 }}>{k.pos}</td>
                        <td data-label="Mención IA" style={{ padding: '0.8rem 0.5rem', color: k.ai === 'Muy Alta' || k.ai === 'Alta' ? '#e4e4e7' : '#71717a', fontWeight: k.ai.includes('Alta') ? 600 : 400 }}>{k.ai}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
