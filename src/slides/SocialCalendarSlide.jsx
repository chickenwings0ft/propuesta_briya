import { useEffect, useRef, useState } from 'react'

const POSTS = [
  { day: 'LUN', date: '02', platform: 'IG', type: 'Foto', content: 'Antes/Después fachada', color: '#E1306C', icon: '📸' },
  { day: 'MAR', date: '03', platform: 'FB', type: 'Vídeo', content: 'Proceso soft-wash tejado', color: '#1877F2', icon: '🎬' },
  { day: 'MIÉ', date: '04', platform: 'IG', type: 'Story', content: 'Testimonio cliente', color: '#E1306C', icon: '💬' },
  { day: 'JUE', date: '05', platform: 'LI', type: 'Post', content: 'Artículo: Mantenimiento preventivo', color: '#0A66C2', icon: '📝' },
  { day: 'VIE', date: '06', platform: 'IG', type: 'Reel', content: 'Resultado increíble en chalet', color: '#E1306C', icon: '🎥' },
  { day: 'SÁB', date: '07', platform: 'FB', type: 'Foto', content: 'Trabajo del fin de semana', color: '#1877F2', icon: '🏡' },
  { day: 'LUN', date: '09', platform: 'IG', type: 'Carrusel', content: '5 señales que tu fachada necesita limpieza', color: '#E1306C', icon: '🖼️' },
  { day: 'MIÉ', date: '11', platform: 'LI', type: 'Post', content: 'Caso de éxito: Residencial en Brisbane', color: '#0A66C2', icon: '🏆' },
  { day: 'VIE', date: '13', platform: 'IG', type: 'Story', content: 'Presupuesto gratis → Enlace bio', color: '#E1306C', icon: '💰' },
  { day: 'LUN', date: '16', platform: 'FB', type: 'Vídeo', content: 'Limpieza canaletas, paso a paso', color: '#1877F2', icon: '🔧' },
  { day: 'MIÉ', date: '18', platform: 'IG', type: 'Reel', content: 'Time-lapse trabajo completo', color: '#E1306C', icon: '⏱️' },
  { day: 'VIE', date: '20', platform: 'LI', type: 'Post', content: 'Por qué el soft-wash protege tu propiedad', color: '#0A66C2', icon: '🛡️' },
]

const PLATFORMS = [
  { name: 'Instagram', handle: '@briyaclean', color: '#E1306C', posts: 4, reach: '12.4K' },
  { name: 'Facebook', handle: 'Briya Clean', color: '#1877F2', posts: 3, reach: '8.1K' },
  { name: 'LinkedIn', handle: 'Briya Clean', color: '#0A66C2', posts: 3, reach: '3.2K' },
]

export default function SocialCalendarSlide() {
  const sectionRef = useRef(null)
  const [inView, setInView] = useState(false)
  const [activePost, setActivePost] = useState(null)

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
      { threshold: 0.35 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="section section--cream"
      id="social-calendar"
      style={{ overflow: 'hidden', padding: '3.5rem 2vw 1.5rem' }}
    >
      <div className="container" style={{ maxWidth: '1300px' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <p className="section-label" style={{ color: 'var(--color-muted)', marginBottom: '0.4rem' }}>07 — Redes Sociales</p>
            <h2 className="section-title reveal" style={{ color: 'var(--color-dark)', lineHeight: 1.05, fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}>
              Calendario<br />
              <span style={{ color: 'var(--color-green)' }}>Programado.</span>
            </h2>
          </div>

          {/* Platform Pills */}
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
            {PLATFORMS.map((p) => (
              <div key={p.name} style={{
                background: p.color + '15',
                border: `1px solid ${p.color}40`,
                borderRadius: '20px',
                padding: '0.4rem 0.9rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: p.color, flexShrink: 0 }} />
                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--color-dark)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{p.name}</span>
                <span style={{ fontSize: '0.65rem', color: 'var(--color-muted)' }}>{p.posts} posts/sem</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: '1.5rem', alignItems: 'start' }}>

          {/* Calendar Grid */}
          <div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '0.6rem',
            }}>
              {POSTS.map((post, i) => (
                <div
                  key={i}
                  onClick={() => setActivePost(activePost === i ? null : i)}
                  style={{
                    background: activePost === i ? post.color + '20' : 'white',
                    border: `1px solid ${activePost === i ? post.color + '60' : 'rgba(6,26,63,0.1)'}`,
                    borderRadius: '10px',
                    padding: '0.75rem',
                    cursor: 'pointer',
                    transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
                    transitionDelay: `${0.06 * i}s`,
                    boxShadow: activePost === i ? `0 8px 24px ${post.color}25` : '0 2px 8px rgba(6,26,63,0.05)',
                  }}
                >
                  {/* Top row */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <div>
                      <div style={{ fontSize: '0.55rem', fontWeight: 700, color: 'var(--color-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{post.day}</div>
                      <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-dark)', lineHeight: 1 }}>{post.date}</div>
                    </div>
                    <div style={{
                      background: post.color,
                      color: '#fff',
                      fontSize: '0.55rem',
                      fontWeight: 700,
                      padding: '2px 6px',
                      borderRadius: '4px',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase'
                    }}>
                      {post.platform}
                    </div>
                  </div>

                  {/* Post info */}
                  <div style={{ fontSize: '1.2rem', marginBottom: '0.35rem' }}>{post.icon}</div>
                  <div style={{ fontSize: '0.6rem', fontWeight: 700, color: post.color, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.2rem' }}>{post.type}</div>
                  <div style={{ fontSize: '0.65rem', color: 'var(--color-dark)', lineHeight: 1.3, fontWeight: 500, opacity: 0.85 }}>{post.content}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

            {/* Frequency card */}
            <div style={{ background: 'var(--color-dark)', borderRadius: '12px', padding: '1.25rem', opacity: inView ? 1 : 0, transition: 'opacity 0.6s ease 0.4s' }}>
              <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#6b889e', marginBottom: '0.75rem' }}>Frecuencia Semanal</div>
              {PLATFORMS.map((p) => (
                <div key={p.name} style={{ marginBottom: '0.85rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#a1b1bd', marginBottom: '0.35rem', fontWeight: 500 }}>
                    <span>{p.name}</span>
                    <span style={{ color: p.color, fontWeight: 700 }}>{p.posts}×/sem</span>
                  </div>
                  <div style={{ height: '4px', background: 'rgba(255,255,255,0.06)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{
                      height: '100%',
                      background: p.color,
                      borderRadius: '4px',
                      width: inView ? `${(p.posts / 5) * 100}%` : '0%',
                      transition: 'width 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.6s'
                    }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Reach card */}
            <div style={{ background: 'white', border: '1px solid rgba(6,26,63,0.1)', borderRadius: '12px', padding: '1.25rem', opacity: inView ? 1 : 0, transition: 'opacity 0.6s ease 0.55s' }}>
              <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: '0.75rem' }}>Alcance Estimado/Sem</div>
              {PLATFORMS.map((p) => (
                <div key={p.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: p.color }} />
                    <span style={{ fontSize: '0.72rem', color: 'var(--color-dark)', fontWeight: 500 }}>{p.name}</span>
                  </div>
                  <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--color-dark)' }}>{p.reach}</span>
                </div>
              ))}
              <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(6,26,63,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-muted)' }}>Total</span>
                <span style={{ fontSize: '1.1rem', fontWeight: 900, color: 'var(--color-dark)' }}>23.7K</span>
              </div>
            </div>

            {/* Highlight */}
            <div style={{
              background: 'var(--color-green)',
              borderRadius: '12px',
              padding: '1.1rem',
              opacity: inView ? 1 : 0,
              transition: 'opacity 0.6s ease 0.7s'
            }}>
              <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '0.35rem' }}>Objetivo</div>
              <div style={{ fontSize: '0.8rem', color: '#fff', lineHeight: 1.45, fontWeight: 500 }}>
                Contenido constante y estratégico, no esporádico. Publicamos en los días y horarios de mayor engagement de tu audiencia.
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
