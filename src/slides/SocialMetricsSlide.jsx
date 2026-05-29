import { useEffect, useRef, useState } from 'react'

const METRICS = [
  { label: 'Alcance orgánico', value: 28400, suffix: '', display: '28.4K', delta: '+34%', color: '#E1306C', trend: [30,42,38,55,60,71,85,90,88,100] },
  { label: 'Impresiones totales', value: 94000, suffix: '', display: '94K', delta: '+67%', color: '#1877F2', trend: [25,30,28,40,52,58,70,80,90,100] },
  { label: 'Engagement Rate', value: 4.8, suffix: '%', display: '4.8%', delta: '+1.2pp', color: '#0A66C2', trend: [45,50,55,48,62,68,72,78,82,100] },
  { label: 'Conversiones (leads)', value: 47, suffix: '', display: '47', delta: '+112%', color: '#10a37f', trend: [10,18,22,30,35,42,50,65,80,100] },
]

const INSIGHTS = [
  { icon: '🕗', label: 'Mejor horario', value: 'Mar–Jue 19:00–21:00', sub: 'Pico de engagement en Instagram' },
  { icon: '🎬', label: 'Formato estrella', value: 'Reels', sub: '+3.2× más alcance que fotos estáticas' },
  { icon: '🔑', label: 'Palabra ganadora', value: '#SoftWash', sub: '38K búsquedas mensuales en IG' },
  { icon: '📍', label: 'Geolocalización', value: 'Madrid Centro', sub: '62% del tráfico orgánico local' },
]

const TREND_ACTIONS = [
  { trend: 'Reels before/after', aplicacion: 'Aumentar frecuencia a 3×/sem', impacto: 'Alto' },
  { trend: 'Estética limpia + minimalista', aplicacion: 'Nuevo pack visual Q3 2026', impacto: 'Alto' },
  { trend: 'Contenido educativo corto', aplicacion: 'Serie "¿Lo sabías?" mensual', impacto: 'Medio' },
  { trend: 'Colaboraciones locales', aplicacion: 'Micro-influencers Madrid zona norte', impacto: 'Alto' },
]

function MiniSparkline({ data, color, inView, delay = 0 }) {
  const w = 120, h = 40
  const max = Math.max(...data)
  const min = Math.min(...data)
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w
    const y = h - ((v - min) / (max - min)) * h
    return `${x},${y}`
  }).join(' ')

  return (
    <svg width={w} height={h} style={{ overflow: 'visible', display: 'block' }}>
      <polyline
        points={pts}
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={300}
        strokeDashoffset={inView ? 0 : 300}
        style={{ transition: `stroke-dashoffset 1.6s cubic-bezier(0.22,1,0.36,1) ${delay}s` }}
      />
      {/* Last dot */}
      <circle
        cx={(data.length - 1) / (data.length - 1) * w}
        cy={h - ((data[data.length - 1] - min) / (max - min)) * h}
        r="4"
        fill={color}
        style={{ opacity: inView ? 1 : 0, transition: `opacity 0.4s ease ${delay + 0.8}s` }}
      />
    </svg>
  )
}

export default function SocialMetricsSlide() {
  const sectionRef = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(false)
          setTimeout(() => setInView(true), 100)
        } else {
          setInView(false)
        }
      },
      { threshold: 0.35 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="section section--dark"
      id="social-metrics"
      style={{ overflow: 'hidden', padding: '3.5rem 2vw 1.5rem', background: 'var(--color-dark) !important' }}
    >
      {/* Force dark theme for this slide */}
      <style>{`
        #social-metrics { background: #061a3f !important; color: #f4f8fb !important; }
        #social-metrics .section-title { color: #f4f8fb !important; }
        #social-metrics .section-label { color: #6b889e !important; opacity: 1 !important; }
        #social-metrics .section-body { color: #a1b1bd !important; opacity: 1 !important; }
      `}</style>

      <div className="container" style={{ maxWidth: '1300px' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '1.75rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <p className="section-label" style={{ marginBottom: '0.4rem' }}>08 — Métricas & Tendencias</p>
            <h2 className="section-title" style={{ color: '#f4f8fb !important', lineHeight: 1.05, fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}>
              Datos que guían<br />
              <span style={{ color: 'var(--color-green-light)' }}>decisiones.</span>
            </h2>
          </div>
          <p style={{ fontSize: '0.82rem', color: '#6b889e', maxWidth: '340px', lineHeight: 1.55 }}>
            Cada acción en redes sociales se mide. Analizamos tendencias en tiempo real para optimizar la estrategia y maximizar el retorno.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>

          {/* LEFT: KPI Metrics */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {METRICS.map((m, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '12px',
                  padding: '1.1rem 1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateX(0)' : 'translateX(-30px)',
                  transition: `all 0.6s cubic-bezier(0.22,1,0.36,1) ${0.1 * i}s`,
                }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6b889e', marginBottom: '0.25rem' }}>
                    {m.label}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.6rem' }}>
                    <span style={{ fontSize: '1.7rem', fontWeight: 900, letterSpacing: '-0.04em', color: '#f4f8fb', lineHeight: 1 }}>
                      {m.display}
                    </span>
                    <span style={{
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      color: '#22c55e',
                      background: 'rgba(34,197,94,0.1)',
                      padding: '2px 8px',
                      borderRadius: '20px'
                    }}>
                      {m.delta}
                    </span>
                  </div>
                </div>
                <MiniSparkline data={m.trend} color={m.color} inView={inView} delay={0.15 * i} />
              </div>
            ))}
          </div>

          {/* RIGHT: Insights + Trend Actions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

            {/* Best Insights */}
            <div style={{
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '12px',
              padding: '1.25rem',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(30px)',
              transition: 'all 0.65s cubic-bezier(0.22,1,0.36,1) 0.2s'
            }}>
              <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#6b889e', marginBottom: '1rem' }}>
                Insights Clave del Período
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                {INSIGHTS.map((ins, i) => (
                  <div key={i} style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    borderRadius: '8px',
                    padding: '0.75rem',
                  }}>
                    <div style={{ fontSize: '1.25rem', marginBottom: '0.35rem' }}>{ins.icon}</div>
                    <div style={{ fontSize: '0.55rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6b889e', marginBottom: '0.2rem' }}>{ins.label}</div>
                    <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#f4f8fb', marginBottom: '0.2rem' }}>{ins.value}</div>
                    <div style={{ fontSize: '0.62rem', color: '#6b889e', lineHeight: 1.3 }}>{ins.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trend → Action Table */}
            <div style={{
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '12px',
              overflow: 'hidden',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(30px)',
              transition: 'all 0.65s cubic-bezier(0.22,1,0.36,1) 0.35s'
            }}>
              <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#6b889e' }}>
                  Tendencias → Plan de Acción
                </div>
              </div>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.72rem' }}>
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.02)' }}>
                    <th style={{ padding: '0.6rem 1rem', color: '#6b889e', fontWeight: 600, textAlign: 'left', fontSize: '0.6rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Tendencia detectada</th>
                    <th style={{ padding: '0.6rem 1rem', color: '#6b889e', fontWeight: 600, textAlign: 'left', fontSize: '0.6rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Aplicación</th>
                    <th style={{ padding: '0.6rem 0.75rem', color: '#6b889e', fontWeight: 600, textAlign: 'center', fontSize: '0.6rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Impacto</th>
                  </tr>
                </thead>
                <tbody>
                  {TREND_ACTIONS.map((row, i) => (
                    <tr key={i} style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                      <td style={{ padding: '0.6rem 1rem', color: '#38bdf8', fontWeight: 600 }}>{row.trend}</td>
                      <td style={{ padding: '0.6rem 1rem', color: '#a1b1bd' }}>{row.aplicacion}</td>
                      <td style={{ padding: '0.6rem 0.75rem', textAlign: 'center' }}>
                        <span style={{
                          fontSize: '0.58rem',
                          fontWeight: 700,
                          padding: '2px 8px',
                          borderRadius: '20px',
                          background: row.impacto === 'Alto' ? 'rgba(34,197,94,0.15)' : 'rgba(234,179,8,0.15)',
                          color: row.impacto === 'Alto' ? '#22c55e' : '#eab308',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase'
                        }}>
                          {row.impacto}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
