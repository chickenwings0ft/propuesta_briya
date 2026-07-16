import { useEffect, useRef, useState } from 'react'

export default function AnalyticsSlide() {
  const sectionRef = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        } else {
          setInView(false)
        }
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Simulated SVG path for GA4 Traffic (Bar chart-like heights)
  const ga4Bars = [40, 55, 45, 70, 65, 85, 80, 100, 120, 110, 130, 150]

  const panelStyle = {
    background: '#ffffff',
    borderRadius: '16px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
    border: '1px solid rgba(0,0,0,0.04)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  }

  const headerStyle = {
    padding: '1.2rem 1.5rem',
    borderBottom: '1px solid #f1f3f4',
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',
  }

  const kpiGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '1px',
    background: '#f1f3f4',
    borderBottom: '1px solid #f1f3f4'
  }

  const kpiBox = {
    background: '#fff',
    padding: '1.2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem'
  }

  return (
    <section 
      ref={sectionRef} 
      className="section section--cream" 
      id="analytics"
      style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', padding: '4rem 0' }}
    >
      <div className="container" style={{ maxWidth: '1400px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <p className="section-label reveal" style={{ color: 'var(--color-muted)' }}>02 — Medición</p>
          <h2 className="section-title reveal" style={{ color: 'var(--color-dark)', marginBottom: '0.5rem', fontSize: 'clamp(3rem, 5vw, 4rem)' }}>
            Medición = Resultados
          </h2>
          <p className="reveal" style={{ fontSize: '0.9rem', color: 'var(--color-muted)', fontWeight: 600, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
            * Se entregará <strong style={{color: 'var(--color-dark)'}}>INFORME DE RESULTADOS</strong> mensual
          </p>
        </div>

        <div className="analytics-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '2.5rem', 
          flex: 1,
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
        }}>
          
          {/* GA4 DASHBOARD MOCK */}
          <div className="reveal" style={{...panelStyle, transform: inView ? 'translateY(0)' : 'translateY(40px)', opacity: inView ? 1 : 0, transition: 'all 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.1s'}}>
            <div style={headerStyle}>
              <img src="./logo-ga4.png" alt="GA4" style={{ height: '28px', objectFit: 'contain' }} />
              <span style={{ fontSize: '1.1rem', fontWeight: 500, color: '#5f6368', letterSpacing: '-0.3px' }}>Google Analytics 4</span>
            </div>
            
            <div className="kpi-grid" style={kpiGrid}>
              <div style={kpiBox}>
                <span style={{ fontSize: '0.75rem', color: '#5f6368', fontWeight: 500 }}>Usuarios</span>
                <span style={{ fontSize: '1.6rem', color: '#202124', fontWeight: 400 }}>14.8K</span>
                <span style={{ fontSize: '0.7rem', color: '#137333', fontWeight: 500 }}>↑ 24.5%</span>
              </div>
              <div style={kpiBox}>
                <span style={{ fontSize: '0.75rem', color: '#5f6368', fontWeight: 500 }}>Usuarios nuevos</span>
                <span style={{ fontSize: '1.6rem', color: '#202124', fontWeight: 400 }}>12.1K</span>
                <span style={{ fontSize: '0.7rem', color: '#137333', fontWeight: 500 }}>↑ 18.2%</span>
              </div>
              <div style={kpiBox}>
                <span style={{ fontSize: '0.75rem', color: '#5f6368', fontWeight: 500 }}>Tiempo de interacc.</span>
                <span style={{ fontSize: '1.6rem', color: '#202124', fontWeight: 400 }}>1m 42s</span>
                <span style={{ fontSize: '0.7rem', color: '#137333', fontWeight: 500 }}>↑ 12.0%</span>
              </div>
              <div style={kpiBox}>
                <span style={{ fontSize: '0.75rem', color: '#5f6368', fontWeight: 500 }}>Conversiones</span>
                <span style={{ fontSize: '1.6rem', color: '#202124', fontWeight: 400 }}>842</span>
                <span style={{ fontSize: '0.7rem', color: '#137333', fontWeight: 500 }}>↑ 45.8%</span>
              </div>
            </div>

            <div style={{ padding: '2rem 1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '0.85rem', color: '#3c4043', fontWeight: 500, marginBottom: '1.5rem' }}>Tráfico de usuarios por mes</span>
              <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '4px', height: '100%', minHeight: '160px' }}>
                {ga4Bars.map((h, i) => (
                  <div key={i} style={{ 
                    flex: 1, 
                    background: '#e8f0fe',
                    borderRadius: '4px 4px 0 0', 
                    height: '100%',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'flex-end'
                  }}>
                    <div style={{
                      width: '100%',
                      background: '#1a73e8',
                      borderRadius: '4px 4px 0 0',
                      height: inView ? `${(h/150)*100}%` : '0%',
                      transition: `height 1s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.3 + (i*0.05)}s`
                    }} />
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.8rem', color: '#80868b', fontSize: '0.65rem' }}>
                <span>Ene</span><span>Feb</span><span>Mar</span><span>Abr</span><span>May</span><span>Jun</span>
                <span>Jul</span><span>Ago</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dic</span>
              </div>
            </div>
          </div>

          {/* META BUSINESS SUITE MOCK */}
          <div className="reveal" style={{...panelStyle, transform: inView ? 'translateY(0)' : 'translateY(40px)', opacity: inView ? 1 : 0, transition: 'all 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.3s'}}>
            <div style={headerStyle}>
              <img src="/meta-logo.png" alt="Meta" style={{ height: '26px', objectFit: 'contain' }} />
              <span style={{ fontSize: '1.1rem', fontWeight: 500, color: '#5f6368', letterSpacing: '-0.3px' }}>Meta Business Suite</span>
              <span style={{ marginLeft: 'auto', fontSize: '0.65rem', fontWeight: 700, color: '#15803d', background: 'rgba(34,197,94,0.1)', padding: '3px 10px', borderRadius: '20px', letterSpacing: '0.05em' }}>3 ACTIVE ADS</span>
            </div>

            <div className="kpi-grid" style={kpiGrid}>
              <div style={{...kpiBox, borderTop: '4px solid #0668E1'}}>
                <span style={{ fontSize: '0.75rem', color: '#5f6368', fontWeight: 500 }}>Impressions</span>
                <span style={{ fontSize: '1.6rem', color: '#0668E1', fontWeight: 500 }}>86.4K</span>
                <span style={{ fontSize: '0.7rem', color: '#137333', fontWeight: 500 }}>↑ 31.2%</span>
              </div>
              <div style={{...kpiBox, borderTop: '4px solid #E1306C'}}>
                <span style={{ fontSize: '0.75rem', color: '#5f6368', fontWeight: 500 }}>Clicks</span>
                <span style={{ fontSize: '1.6rem', color: '#E1306C', fontWeight: 500 }}>2,140</span>
                <span style={{ fontSize: '0.7rem', color: '#137333', fontWeight: 500 }}>↑ 22.7%</span>
              </div>
              <div style={kpiBox}>
                <span style={{ fontSize: '0.75rem', color: '#5f6368', fontWeight: 500 }}>Cost per Click</span>
                <span style={{ fontSize: '1.6rem', color: '#202124', fontWeight: 400 }}>A$0.62</span>
                <span style={{ fontSize: '0.7rem', color: '#137333', fontWeight: 500 }}>↓ 9.4%</span>
              </div>
              <div style={kpiBox}>
                <span style={{ fontSize: '0.75rem', color: '#5f6368', fontWeight: 500 }}>Cost per Lead</span>
                <span style={{ fontSize: '1.6rem', color: '#202124', fontWeight: 400 }}>A$4.80</span>
                <span style={{ fontSize: '0.7rem', color: '#137333', fontWeight: 500 }}>↓ 12.1%</span>
              </div>
            </div>

            <div style={{ padding: '1.25rem 1.5rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <span style={{ fontSize: '0.85rem', color: '#3c4043', fontWeight: 500 }}>Sponsored posts · Last 30 days</span>

              {[
                { name: 'Before/After — Feed Post', grad: 'linear-gradient(135deg,#5d5d55,#7cc4f5)', conv: 24, perf: '+18%' },
                { name: 'Soft-Wash Process — Reel', grad: 'linear-gradient(135deg,#0668E1,#38bdf8)', conv: 17, perf: '+32%' },
                { name: 'Free Quote — Story', grad: 'linear-gradient(135deg,#E1306C,#f5af19)', conv: 9, perf: '+11%' },
              ].map((c, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: '0.8rem',
                  border: '1px solid #f1f3f4', borderRadius: '10px', padding: '0.6rem 0.8rem',
                  opacity: inView ? 1 : 0, transform: inView ? 'translateX(0)' : 'translateX(20px)',
                  transition: `all 0.5s cubic-bezier(0.22,1,0.36,1) ${0.4 + i * 0.12}s`
                }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: c.grad, flexShrink: 0 }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#202124', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.name}</div>
                    <div style={{ fontSize: '0.65rem', color: '#5f6368' }}>Sponsored · Active</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#202124' }}>{c.conv} conversions</div>
                    <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#137333' }}>📈 Performance {c.perf}</div>
                  </div>
                </div>
              ))}

              {/* Audience targeting */}
              <div style={{ marginTop: 'auto', paddingTop: '0.75rem', borderTop: '1px solid #f1f3f4' }}>
                <span style={{ fontSize: '0.7rem', color: '#5f6368', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '0.5rem' }}>Audience targeting</span>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {['27+ years', 'Men', 'Gold Coast', 'Homeowners'].map((t, i) => (
                    <span key={i} style={{ fontSize: '0.7rem', fontWeight: 600, color: '#0668E1', background: 'rgba(6,102,225,0.08)', border: '1px solid rgba(6,102,225,0.2)', borderRadius: '20px', padding: '3px 11px' }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
