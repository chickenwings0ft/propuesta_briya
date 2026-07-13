import { useEffect, useRef, useState } from 'react'

const BRAND_PILLARS = [
  {
    num: '01',
    icon: '🎨',
    title: 'Identidad Visual Unificada',
    desc: 'Paleta de colores, tipografías y estilo fotográfico coherente en todas las plataformas.',
    items: ['Pack de plantillas Canva/Adobe', 'Guía de estilo fotográfico', 'Filtros y tonos consistentes'],
    color: '#E1306C',
  },
  {
    num: '02',
    icon: '🗣️',
    title: 'Tono de Voz Definido',
    desc: 'Comunicación cercana, profesional y de confianza. La voz de Briya siempre transmite fiabilidad.',
    items: ['Vocabulario técnico simplificado', 'Respuestas tipo a comentarios', 'Mensajes directos estandarizados'],
    color: '#1877F2',
  },
  {
    num: '03',
    icon: '📸',
    title: 'Contenido Antes/Después',
    desc: 'El formato más compartido del sector. Cada trabajo documentado es marketing orgánico natural.',
    items: ['Protocolo de fotos en cada servicio', 'Edición con branding integrado', 'Geolocalización en publicaciones'],
    color: '#0A66C2',
  },
  {
    num: '04',
    icon: '💬',
    title: 'Gestión de Reputación',
    desc: 'Respuesta a reseñas y comentarios en 24h. La rapidez y calidad de respuesta construye confianza.',
    items: ['Monitoreo diario de menciones', 'Respuestas personalizadas a reseñas', 'Protocolo ante comentarios negativos'],
    color: '#0284c7',
  },
]

const NETWORKS = [
  { name: 'Instagram', icon: '📷', focus: 'Visuales Antes/Después + Reels proceso', audience: 'Propietarios 30–55', kpi: 'Leads directos', active: true },
  { name: 'Facebook', icon: '👥', focus: 'Comunidad local + Anuncios segmentados', audience: 'Familias 35–60', kpi: 'Alcance local', active: true },
  { name: 'LinkedIn', icon: '💼', focus: 'Credibilidad B2B + Casos de éxito', audience: 'Administradores fincas', kpi: 'Contratos empresa', active: true },
  { name: 'Google Business', icon: '📍', focus: 'Fotos semanales + Posts de servicios', audience: 'Búsquedas locales', kpi: 'Llamadas directas', active: true },
  { name: 'TikTok', icon: '🎵', focus: 'Time-lapses virales + Tendencias', audience: 'Gen Z propietarios', kpi: 'Alcance viral', active: false },
  { name: 'YouTube', icon: '🎬', focus: 'Tutoriales y guías de mantenimiento', audience: 'Todos los perfiles', kpi: 'Autoridad SEO', active: false },
]

const CONSISTENCY_ITEMS = [
  { label: 'Logo y colores', value: 100 },
  { label: 'Tono de comunicación', value: 92 },
  { label: 'Frecuencia de publicación', value: 85 },
  { label: 'Respuesta a comentarios', value: 78 },
]

export default function SocialBrandingSlide() {
  const sectionRef = useRef(null)
  const [inView, setInView] = useState(false)
  const [activeNetwork, setActiveNetwork] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(false)
          setTimeout(() => setInView(true), 80)
        } else {
          setInView(false)
        }
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const net = NETWORKS[activeNetwork]

  return (
    <section
      ref={sectionRef}
      className="section section--cream"
      id="social-branding"
      style={{ overflow: 'hidden', padding: '3.5rem 2vw 1.5rem' }}
    >
      <div className="container" style={{ maxWidth: '1300px' }}>

        {/* Header */}
        <div style={{ marginBottom: '1.75rem' }}>
          <p className="section-label" style={{ color: 'var(--color-muted)', marginBottom: '0.4rem' }}>09 — Imagen de Marca</p>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <h2 className="section-title reveal" style={{ color: 'var(--color-dark)', lineHeight: 1.05, fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}>
              Una marca.<br />
              <span style={{ color: 'var(--color-green)' }}>Todas las redes.</span>
            </h2>
            <p style={{ fontSize: '0.82rem', color: 'var(--color-muted)', maxWidth: '380px', lineHeight: 1.55 }}>
              La imagen de Briya debe ser inmediatamente reconocible en cualquier plataforma. Coherencia visual y verbal que convierte seguidores en clientes.
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '1.5rem', alignItems: 'start' }}>

          {/* LEFT: Brand Pillars */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            {BRAND_PILLARS.map((pillar, i) => (
              <div
                key={i}
                style={{
                  background: 'white',
                  border: `1px solid rgba(6,26,63,0.09)`,
                  borderRadius: '12px',
                  padding: '1.1rem',
                  position: 'relative',
                  overflow: 'hidden',
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.97)',
                  transition: `all 0.55s cubic-bezier(0.22,1,0.36,1) ${0.08 * i}s`,
                }}
              >
                {/* Color accent bar */}
                <div style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0,
                  height: '3px',
                  background: pillar.color,
                }} />

                {/* Number */}
                <div style={{ fontSize: '0.55rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: pillar.color, marginBottom: '0.5rem', marginTop: '0.25rem' }}>
                  {pillar.num}
                </div>

                {/* Icon + Title */}
                <div style={{ fontSize: '1.3rem', marginBottom: '0.3rem' }}>{pillar.icon}</div>
                <div style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--color-dark)', textTransform: 'uppercase', letterSpacing: '0.02em', lineHeight: 1.2, marginBottom: '0.5rem' }}>
                  {pillar.title}
                </div>

                {/* Description */}
                <p style={{ fontSize: '0.68rem', color: 'var(--color-muted)', lineHeight: 1.45, marginBottom: '0.75rem' }}>
                  {pillar.desc}
                </p>

                {/* Items list */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  {pillar.items.map((item, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div style={{ width: 5, height: 5, borderRadius: '50%', background: pillar.color, flexShrink: 0 }} />
                      <span style={{ fontSize: '0.62rem', color: 'var(--color-dark)', lineHeight: 1.3, opacity: 0.8 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: Network Selector + Consistency */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

            {/* Network Tabs */}
            <div style={{
              background: 'white',
              border: '1px solid rgba(6,26,63,0.09)',
              borderRadius: '12px',
              overflow: 'hidden',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(30px)',
              transition: 'all 0.65s cubic-bezier(0.22,1,0.36,1) 0.2s'
            }}>
              {/* Tabs */}
              <div style={{ display: 'flex', borderBottom: '1px solid rgba(6,26,63,0.08)', overflowX: 'auto' }}>
                {NETWORKS.map((n, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveNetwork(i)}
                    style={{
                      flex: 1,
                      padding: '0.7rem 0.5rem',
                      border: 'none',
                      borderBottom: activeNetwork === i ? '2px solid var(--color-green)' : '2px solid transparent',
                      background: 'transparent',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '0.2rem',
                      transition: 'background 0.2s ease',
                      opacity: n.active ? 1 : 0.45,
                    }}
                  >
                    <span style={{ fontSize: '1rem' }}>{n.icon}</span>
                    <span style={{ fontSize: '0.52rem', fontWeight: 700, color: activeNetwork === i ? 'var(--color-green)' : 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      {n.name.split(' ')[0]}
                    </span>
                  </button>
                ))}
              </div>

              {/* Network detail */}
              <div style={{ padding: '1.1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '1.5rem' }}>{net.icon}</span>
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--color-dark)', textTransform: 'uppercase' }}>{net.name}</div>
                    {!net.active && (
                      <span style={{ fontSize: '0.55rem', fontWeight: 700, background: 'rgba(234,179,8,0.1)', color: '#b45309', padding: '1px 6px', borderRadius: '4px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                        Próxima fase
                      </span>
                    )}
                    {net.active && (
                      <span style={{ fontSize: '0.55rem', fontWeight: 700, background: 'rgba(34,197,94,0.1)', color: '#15803d', padding: '1px 6px', borderRadius: '4px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                        Activa
                      </span>
                    )}
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem', fontSize: '0.7rem' }}>
                  <div style={{ background: '#f8fafd', borderRadius: '8px', padding: '0.7rem' }}>
                    <div style={{ color: 'var(--color-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.55rem', marginBottom: '0.3rem' }}>Contenido</div>
                    <div style={{ color: 'var(--color-dark)', fontWeight: 600, lineHeight: 1.35 }}>{net.focus}</div>
                  </div>
                  <div style={{ background: '#f8fafd', borderRadius: '8px', padding: '0.7rem' }}>
                    <div style={{ color: 'var(--color-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.55rem', marginBottom: '0.3rem' }}>Audiencia</div>
                    <div style={{ color: 'var(--color-dark)', fontWeight: 600, lineHeight: 1.35 }}>{net.audience}</div>
                  </div>
                  <div style={{ background: '#f0f9ff', border: '1px solid rgba(2,132,199,0.12)', borderRadius: '8px', padding: '0.7rem', gridColumn: '1/-1' }}>
                    <div style={{ color: 'var(--color-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.55rem', marginBottom: '0.3rem' }}>KPI Principal</div>
                    <div style={{ color: 'var(--color-green)', fontWeight: 800, fontSize: '0.82rem' }}>{net.kpi}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Brand Consistency Scores */}
            <div style={{
              background: 'var(--color-dark)',
              borderRadius: '12px',
              padding: '1.25rem',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(30px)',
              transition: 'all 0.65s cubic-bezier(0.22,1,0.36,1) 0.35s'
            }}>
              <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#6b889e', marginBottom: '1rem' }}>
                Coherencia de Marca — Objetivo
              </div>
              {CONSISTENCY_ITEMS.map((item, i) => (
                <div key={i} style={{ marginBottom: '0.85rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
                    <span style={{ fontSize: '0.72rem', color: '#a1b1bd', fontWeight: 500 }}>{item.label}</span>
                    <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#38bdf8' }}>{item.value}%</span>
                  </div>
                  <div style={{ height: '4px', background: 'rgba(255,255,255,0.06)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{
                      height: '100%',
                      background: 'linear-gradient(90deg, #0284c7, #38bdf8)',
                      borderRadius: '4px',
                      width: inView ? `${item.value}%` : '0%',
                      transition: `width 1.4s cubic-bezier(0.22,1,0.36,1) ${0.45 + 0.12 * i}s`
                    }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Highlight bar */}
            <div style={{
              background: 'white',
              border: '1px solid rgba(2,132,199,0.15)',
              borderLeft: '4px solid var(--color-green)',
              borderRadius: '10px',
              padding: '1rem 1.1rem',
              opacity: inView ? 1 : 0,
              transition: 'opacity 0.6s ease 0.55s'
            }}>
              <div style={{ fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-dark)', marginBottom: '0.3rem' }}>
                Ventaja diferencial
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-muted)', lineHeight: 1.5 }}>
                La mayoría de empresas de limpieza en Gold Coast publican de forma inconsistente. Una marca visual y comunicativamente sólida genera hasta <strong style={{ color: 'var(--color-dark)' }}>3× más confianza</strong> y convierte más rápido.
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
