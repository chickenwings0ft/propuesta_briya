import { useEffect, useRef, useState } from 'react'

const OBJECTIVES = [
  { icon: '🎯', title: 'Leads Directos', desc: 'Formulario instantáneo dentro de Instagram/Facebook, sin salir de la app. Ideal para presupuestos rápidos.' },
  { icon: '🔁', title: 'Remarketing', desc: 'Impactamos a quien visitó la web o interactuó con el perfil pero todavía no contrató.' },
  { icon: '🧬', title: 'Audiencias Lookalike', desc: 'Meta encuentra nuevos clientes con el mismo perfil que los mejores clientes actuales de Briya.' },
  { icon: '🖼️', title: 'Creatividades Antes/Después', desc: 'El formato con mejor rendimiento en anuncios del sector exterior cleaning.' },
]

const PLACEMENTS = [
  { platform: 'Instagram', format: 'Feed + Reels', objective: 'Alcance de marca / Leads', color: '#E1306C' },
  { platform: 'Facebook', format: 'Feed + Marketplace', objective: 'Comunidad local / Leads', color: '#1877F2' },
  { platform: 'Instagram + Facebook', format: 'Stories', objective: 'Retargeting rápido', color: '#0668E1' },
]

export default function MetaAdsSlide() {
  const sectionRef = useRef(null)
  const [inView, setInView] = useState(false)
  const [liked, setLiked] = useState(false)

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

  return (
    <section
      ref={sectionRef}
      className="section section--cream"
      id="meta-ads"
      style={{ overflow: 'hidden', padding: '3.5rem 2vw 1.5rem' }}
    >
      <div className="container" style={{ maxWidth: '1300px' }}>

        {/* Header */}
        <div style={{ marginBottom: '1.75rem' }}>
          <p className="section-label" style={{ color: 'var(--color-muted)', marginBottom: '0.4rem' }}>10 — Meta Ads</p>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <h2 className="section-title reveal" style={{ color: 'var(--color-dark)', lineHeight: 1.05, fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}>
              Instagram + Facebook,<br />
              <span style={{ color: 'var(--color-green)' }}>anuncios que convierten.</span>
            </h2>
            <p style={{ fontSize: '0.82rem', color: 'var(--color-muted)', maxWidth: '380px', lineHeight: 1.55 }}>
              El contenido orgánico construye confianza; los anuncios en Meta aceleran el alcance y generan leads directos mientras esa audiencia crece.
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '1.5rem', alignItems: 'start' }}>

          {/* LEFT: Objectives + Placements */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              {OBJECTIVES.map((o, i) => (
                <div
                  key={i}
                  style={{
                    background: 'white',
                    border: '1px solid rgba(6,26,63,0.09)',
                    borderRadius: '12px',
                    padding: '1.1rem',
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.97)',
                    transition: `all 0.55s cubic-bezier(0.22,1,0.36,1) ${0.08 * i}s`,
                  }}
                >
                  <div style={{ fontSize: '1.3rem', marginBottom: '0.35rem' }}>{o.icon}</div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--color-dark)', textTransform: 'uppercase', letterSpacing: '0.02em', lineHeight: 1.2, marginBottom: '0.4rem' }}>
                    {o.title}
                  </div>
                  <p style={{ fontSize: '0.68rem', color: 'var(--color-muted)', lineHeight: 1.45 }}>{o.desc}</p>
                </div>
              ))}
            </div>

            {/* Placement table */}
            <div style={{
              background: 'var(--color-dark)',
              borderRadius: '12px',
              overflow: 'hidden',
              opacity: inView ? 1 : 0,
              transition: 'opacity 0.6s ease 0.4s'
            }}>
              <div style={{ padding: '0.9rem 1.1rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#6b889e' }}>
                  Ubicaciones de campaña
                </div>
              </div>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.7rem' }}>
                <tbody>
                  {PLACEMENTS.map((p, i) => (
                    <tr key={i} style={{ borderTop: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.06)' }}>
                      <td style={{ padding: '0.6rem 1.1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <div style={{ width: 6, height: 6, borderRadius: '50%', background: p.color, flexShrink: 0 }} />
                          <span style={{ color: '#f4f8fb', fontWeight: 600 }}>{p.platform}</span>
                        </div>
                      </td>
                      <td style={{ padding: '0.6rem 0.5rem', color: '#a1b1bd' }}>{p.format}</td>
                      <td style={{ padding: '0.6rem 1.1rem', color: '#38bdf8', fontWeight: 600, textAlign: 'right' }}>{p.objective}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Highlight bar */}
            <div style={{
              background: 'white',
              border: '1px solid rgba(6,102,225,0.15)',
              borderLeft: '4px solid #0668E1',
              borderRadius: '10px',
              padding: '1rem 1.1rem',
              opacity: inView ? 1 : 0,
              transition: 'opacity 0.6s ease 0.55s'
            }}>
              <div style={{ fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-dark)', marginBottom: '0.3rem' }}>
                Por qué funciona en este sector
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-muted)', lineHeight: 1.5 }}>
                El antes/después es el creativo con mayor CTR en limpieza de exteriores: es visual, inmediato y demuestra el resultado sin necesidad de texto.
              </div>
            </div>

          </div>

          {/* RIGHT: Simulated sponsored feed post */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem' }}>

            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.4rem',
              opacity: inView ? 1 : 0,
              transition: 'opacity 0.6s ease 0.2s'
            }}>
              <img src="/meta-logo.png" alt="Meta" style={{ height: '16px', width: 'auto', objectFit: 'contain' }} />
              <span style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-muted)' }}>
                Simulación · Meta Ads Manager
              </span>
            </div>

            {/* Phone-style ad card */}
            <div style={{
              width: '100%',
              maxWidth: '340px',
              background: 'white',
              border: '1px solid rgba(6,26,63,0.12)',
              borderRadius: '14px',
              overflow: 'hidden',
              boxShadow: '0 12px 32px rgba(6,26,63,0.12)',
              fontFamily: 'Helvetica, Arial, sans-serif',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.65s cubic-bezier(0.22,1,0.36,1) 0.3s'
            }}>

              {/* Post header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.7rem 0.85rem' }}>
                <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: '#061a3f', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '5px', flexShrink: 0 }}>
                  <img src="/logo-original.png" alt="Briya" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <div style={{ flex: 1, lineHeight: 1.25 }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#050505' }}>briyaclean</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.65rem', color: '#65676b' }}>
                    <span>Sponsored</span>
                    <span>·</span>
                    <span>Gold Coast, QLD</span>
                  </div>
                </div>
                <span style={{ color: '#65676b', fontWeight: 700, letterSpacing: '2px' }}>···</span>
              </div>

              {/* Ad image: before/after CSS illustration */}
              <div style={{ position: 'relative', width: '100%', aspectRatio: '1 / 1', display: 'flex' }}>
                <div style={{ flex: 1, position: 'relative', background: 'linear-gradient(160deg,#7a7a72 0%,#4d4d47 55%,#39392f 100%)', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(115deg, rgba(0,0,0,0.12) 0 6px, transparent 6px 14px)' }} />
                  <span style={{ position: 'absolute', top: '10px', left: '10px', background: 'rgba(0,0,0,0.55)', color: '#fff', fontSize: '0.55rem', fontWeight: 800, letterSpacing: '0.1em', padding: '3px 8px', borderRadius: '4px', textTransform: 'uppercase' }}>Before</span>
                </div>
                <div style={{ flex: 1, position: 'relative', background: 'linear-gradient(160deg,#eaf4ff 0%,#cfe6fb 55%,#9fd0f2 100%)', overflow: 'hidden' }}>
                  <span style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(6,26,63,0.75)', color: '#fff', fontSize: '0.55rem', fontWeight: 800, letterSpacing: '0.1em', padding: '3px 8px', borderRadius: '4px', textTransform: 'uppercase' }}>After</span>
                </div>
                {/* Slider handle divider */}
                <div style={{ position: 'absolute', top: 0, bottom: 0, left: '50%', width: '3px', background: '#fff', transform: 'translateX(-50%)', boxShadow: '0 0 6px rgba(0,0,0,0.3)' }} />
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '28px', height: '28px', borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', color: '#061a3f', boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>⇔</div>
                {/* Roofline silhouette */}
                <svg viewBox="0 0 200 60" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '38%', opacity: 0.9 }} preserveAspectRatio="none">
                  <path d="M0 60 L0 34 L45 34 L60 14 L75 34 L200 34 L200 60 Z" fill="#061a3f" opacity="0.55" />
                </svg>
              </div>

              {/* CTA bar */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.6rem 0.85rem', background: '#f0f2f5' }}>
                <div style={{ lineHeight: 1.2 }}>
                  <div style={{ fontSize: '0.6rem', color: '#65676b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>briyaclean.com.au</div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#050505' }}>Free Instant Quote — Soft-Wash Specialists</div>
                </div>
                <button style={{ background: '#e4e6eb', border: 'none', borderRadius: '6px', padding: '0.4rem 0.7rem', fontSize: '0.68rem', fontWeight: 700, color: '#050505', cursor: 'pointer', flexShrink: 0 }}>
                  Learn More
                </button>
              </div>

              {/* Action icons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', padding: '0.55rem 0.85rem 0.2rem' }}>
                <span
                  onClick={() => setLiked(!liked)}
                  style={{ fontSize: '1.1rem', cursor: 'pointer', color: liked ? '#ed4956' : '#050505', transition: 'transform 0.2s ease, color 0.2s ease', transform: liked ? 'scale(1.15)' : 'scale(1)', display: 'inline-block' }}
                >
                  {liked ? '♥' : '♡'}
                </span>
                <span style={{ fontSize: '1rem' }}>💬</span>
                <span style={{ fontSize: '1rem' }}>↗</span>
                <span style={{ fontSize: '1rem', marginLeft: 'auto' }}>🔖</span>
              </div>

              {/* Likes + caption */}
              <div style={{ padding: '0.3rem 0.85rem 0.9rem' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#050505', marginBottom: '0.3rem' }}>{liked ? '483' : '482'} likes</div>
                <div style={{ fontSize: '0.72rem', color: '#050505', lineHeight: 1.5 }}>
                  <strong>briyaclean</strong> Your roof called — it wants a soft-wash. ✨ Safe, eco-friendly exterior cleaning that removes mould, dirt &amp; stains in one visit. Free quote below 👇 <span style={{ color: '#00376b' }}>#SoftWash #GoldCoast #ExteriorCleaning</span>
                </div>
                <div style={{ fontSize: '0.68rem', color: '#65676b', marginTop: '0.4rem' }}>View all 24 comments</div>
                <div style={{ fontSize: '0.6rem', color: '#65676b', marginTop: '0.3rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>2 hours ago</div>
              </div>
            </div>

            {/* Simulated ad stats */}
            <div style={{
              width: '100%', maxWidth: '340px',
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem',
              opacity: inView ? 1 : 0,
              transition: 'opacity 0.6s ease 0.6s'
            }}>
              {[
                { label: 'Alcance', value: '18.2K' },
                { label: 'CTR', value: '2.4%' },
                { label: 'Coste/Lead', value: '€4.80' },
              ].map((s, i) => (
                <div key={i} style={{ background: 'var(--color-dark)', borderRadius: '8px', padding: '0.6rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#f4f8fb' }}>{s.value}</div>
                  <div style={{ fontSize: '0.52rem', color: '#6b889e', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '0.15rem' }}>{s.label}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
