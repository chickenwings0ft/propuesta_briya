import { useEffect, useRef, useState } from 'react'

export default function InstagramAdSlide() {
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
      className="section section--light"
      id="instagram-ad"
      style={{ padding: '3.5rem 2vw 1.5rem', overflow: 'hidden' }}
    >
      <div className="container" style={{ maxWidth: '1300px' }}>
        <div className="two-col" style={{ gap: '3.5rem', alignItems: 'center' }}>

          {/* LEFT: explanation */}
          <div className="reveal-stagger">
            <p className="section-label">2. SEM (Google, Facebook e Instagram)</p>
            <h2 className="section-title" style={{ marginBottom: '1.25rem', lineHeight: 1.1 }}>
              Y así se ve<br />
              en Instagram.
            </h2>
            <p className="section-body" style={{ marginBottom: '1.75rem', fontWeight: 500, fontSize: '0.95rem', lineHeight: 1.6 }}>
              El mismo trabajo de Briya, convertido en un anuncio patrocinado. Foto real del antes/después, un texto pensado para SEO y un botón de contacto directo: todo lo necesario para convertir a quien lo ve en un cliente.
            </p>

            <div style={{ background: 'rgba(2,132,199,0.07)', border: '1px solid rgba(2,132,199,0.2)', borderRadius: '10px', padding: '0.9rem 1.1rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '1.2rem', lineHeight: 1 }}>📸</span>
              <div>
                <div style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0284c7', marginBottom: '0.25rem' }}>Antes/Después real</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-dark)', lineHeight: 1.5, opacity: 0.85 }}>
                  Cada trabajo terminado se convierte en un anuncio. Es el formato con más conversión del sector: se ve, se entiende y genera confianza al instante.
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: simulated Instagram sponsored post */}
          <div className="reveal-stagger" style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              width: '100%',
              maxWidth: '380px',
              background: 'white',
              border: '1px solid rgba(6,26,63,0.12)',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 16px 40px rgba(6,26,63,0.14)',
              fontFamily: 'Helvetica, Arial, sans-serif',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.65s cubic-bezier(0.22,1,0.36,1) 0.15s'
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

              {/* Real photo */}
              <div style={{ width: '100%', aspectRatio: '1 / 1', overflow: 'hidden', background: '#061a3f' }}>
                <img
                  src="/instagram-post-solar.png"
                  alt="Briya — Solar panel before/after cleaning"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* CTA bar */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.6rem 0.85rem', background: '#f0f2f5' }}>
                <div style={{ lineHeight: 1.2 }}>
                  <div style={{ fontSize: '0.6rem', color: '#65676b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>briyaclean.com.au</div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#050505' }}>Solar Panel &amp; Roof Cleaning — Gold Coast</div>
                </div>
                <button style={{ background: '#0668E1', border: 'none', borderRadius: '6px', padding: '0.45rem 0.85rem', fontSize: '0.68rem', fontWeight: 700, color: '#fff', cursor: 'pointer', flexShrink: 0, letterSpacing: '0.02em' }}>
                  CONTACT NOW
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

              {/* Likes + SEO-optimized caption */}
              <div style={{ padding: '0.3rem 0.85rem 0.9rem' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#050505', marginBottom: '0.3rem' }}>{liked ? '317' : '316'} likes</div>
                <div style={{ fontSize: '0.72rem', color: '#050505', lineHeight: 1.5 }}>
                  <strong>briyaclean</strong> Before &amp; after: solar panel and roof cleaning in Gold Coast, QLD ☀️🧼 Dirty panels lose efficiency — ours came back spotless and performing like new. We safely clean solar panels, roofs and gutters across Gold Coast, Brisbane &amp; Northern NSW. Book your free quote today. <span style={{ color: '#00376b' }}>#SolarPanelCleaning #GoldCoast #RoofCleaning #ExteriorCleaning #SoftWash</span>
                </div>
                <div style={{ fontSize: '0.68rem', color: '#65676b', marginTop: '0.4rem' }}>View all 18 comments</div>
                <div style={{ fontSize: '0.6rem', color: '#65676b', marginTop: '0.3rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>1 day ago</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
