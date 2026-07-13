import { useEffect, useRef, useState } from 'react'

export default function InstagramFeedSlide() {
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
      id="instagram-feed"
      style={{ overflow: 'hidden', padding: '3.5rem 2vw 1rem' }}
    >
      <div className="container" style={{ maxWidth: '1250px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: '2.25rem', alignItems: 'center' }}>

          {/* LEFT: explanation */}
          <div>
            <p className="section-label" style={{ color: 'var(--color-muted)', marginBottom: '0.4rem' }}>09 — Instagram</p>
            <h2 className="section-title reveal" style={{ color: 'var(--color-dark)', lineHeight: 1.05, fontSize: 'clamp(1.8rem, 3.2vw, 2.7rem)', marginBottom: '1rem' }}>
              El mismo perfil,<br />
              <span style={{ color: 'var(--color-green)' }}>otra energía.</span>
            </h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-muted)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Simulación del Instagram de Briya: la misma cuenta con una publicación actual frente a una publicación gestionada con marca, luz y llamada a la acción.
            </p>

            <div style={{ background: 'rgba(185,28,28,0.05)', border: '1px solid rgba(185,28,28,0.2)', borderRadius: '10px', padding: '0.85rem 1rem', marginBottom: '0.75rem', opacity: inView ? 1 : 0, transition: 'opacity 0.6s ease 0.3s' }}>
              <div style={{ fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#b91c1c', marginBottom: '0.25rem' }}>❌ Publicación actual</div>
              <div style={{ fontSize: '0.76rem', color: 'var(--color-dark)', lineHeight: 1.5, opacity: 0.85 }}>
                Foto oscura, sin edición ni marca, texto plano y sin hashtags: <strong>9 likes y cero leads</strong>.
              </div>
            </div>

            <div style={{ background: 'rgba(21,128,61,0.05)', border: '1px solid rgba(21,128,61,0.2)', borderRadius: '10px', padding: '0.85rem 1rem', opacity: inView ? 1 : 0, transition: 'opacity 0.6s ease 0.45s' }}>
              <div style={{ fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#15803d', marginBottom: '0.25rem' }}>✅ Publicación gestionada</div>
              <div style={{ fontSize: '0.76rem', color: 'var(--color-dark)', lineHeight: 1.5, opacity: 0.85 }}>
                Luz, color de marca, antes/después y CTA directo al presupuesto: <strong>alcance 18.2K · CTR 2.4% · coste por lead €4.80</strong>.
              </div>
            </div>
          </div>

          {/* RIGHT: IG panel */}
          <div style={{
            background: 'white',
            border: '1px solid rgba(6,26,63,0.1)',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 12px 32px rgba(6,26,63,0.1)',
            fontFamily: 'Helvetica, Arial, sans-serif',
            maxWidth: '660px',
            justifySelf: 'end',
            width: '100%',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(24px)',
            transition: 'all 0.6s cubic-bezier(0.22,1,0.36,1) 0.15s'
          }}>

            {/* Profile strip */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', padding: '0.65rem 1rem', borderBottom: '1px solid rgba(6,26,63,0.08)' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#061a3f', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '5px', flexShrink: 0, border: '2px solid #E1306C' }}>
                <img src="/logo-original.png" alt="Briya" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ flex: 1, lineHeight: 1.3 }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#050505' }}>briyaclean</div>
                <div style={{ fontSize: '0.62rem', color: '#65676b' }}>Exterior Cleaning · Gold Coast, QLD</div>
              </div>
              <div style={{ display: 'flex', gap: '1.1rem', fontSize: '0.62rem', color: '#050505', textAlign: 'center' }}>
                <div><strong style={{ display: 'block', fontSize: '0.75rem' }}>127</strong>posts</div>
                <div><strong style={{ display: 'block', fontSize: '0.75rem' }}>1,842</strong>followers</div>
                <div><strong style={{ display: 'block', fontSize: '0.75rem' }}>312</strong>following</div>
              </div>
            </div>

            {/* Two posts side by side */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>

              {/* ── POST 1: dark & ugly ── */}
              <div style={{ borderRight: '1px solid rgba(6,26,63,0.08)' }}>
                {/* Post header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', padding: '0.45rem 0.75rem' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#061a3f', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '3px', flexShrink: 0 }}>
                    <img src="/logo-original.png" alt="Briya" style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'grayscale(0.8) brightness(0.8)' }} />
                  </div>
                  <div style={{ flex: 1, fontSize: '0.68rem', fontWeight: 700, color: '#050505' }}>briyaclean</div>
                  <span style={{ color: '#65676b', fontWeight: 700, letterSpacing: '2px', fontSize: '0.75rem' }}>···</span>
                </div>

                {/* Dark ugly image */}
                <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3', background: 'linear-gradient(155deg,#3a3a35 0%,#26261f 45%,#15150f 100%)', overflow: 'hidden' }}>
                  <span style={{ position: 'absolute', top: '8px', left: '8px', zIndex: 5, background: '#fee2e2', color: '#b91c1c', fontSize: '0.52rem', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '2px 7px', borderRadius: '20px' }}>❌ Hoy</span>
                  <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(100deg, rgba(0,0,0,0.25) 0 8px, transparent 8px 18px)' }} />
                  <svg viewBox="0 0 200 90" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '55%', opacity: 0.85, filter: 'blur(0.6px)' }} preserveAspectRatio="none">
                    <path d="M0 90 L0 50 L55 50 L75 22 L95 50 L200 50 L200 90 Z" fill="#0c0c09" />
                    <rect x="30" y="60" width="16" height="14" fill="#1e1e16" />
                    <rect x="120" y="60" width="16" height="14" fill="#1e1e16" />
                  </svg>
                  <span style={{ position: 'absolute', bottom: '8px', right: '8px', color: 'rgba(255,255,255,0.35)', fontSize: '0.5rem', letterSpacing: '0.05em' }}>📷 low light · no edit</span>
                </div>

                {/* Actions + caption */}
                <div style={{ padding: '0.45rem 0.75rem 0.7rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '0.3rem', fontSize: '0.9rem', opacity: 0.75 }}>
                    <span>♡</span><span>💬</span><span>↗</span><span style={{ marginLeft: 'auto' }}>🔖</span>
                  </div>
                  <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#050505', marginBottom: '0.2rem' }}>9 likes</div>
                  <div style={{ fontSize: '0.65rem', color: '#050505', lineHeight: 1.4 }}>
                    <strong>briyaclean</strong> roof job done today
                  </div>
                  <div style={{ fontSize: '0.55rem', color: '#65676b', marginTop: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>3 weeks ago</div>
                </div>
              </div>

              {/* ── POST 2: bright & branded ── */}
              <div style={{ background: '#fffefb' }}>
                {/* Post header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', padding: '0.45rem 0.75rem' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#061a3f', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '3px', flexShrink: 0 }}>
                    <img src="/logo-original.png" alt="Briya" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                  <div style={{ flex: 1, lineHeight: 1.2 }}>
                    <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#050505' }}>briyaclean</div>
                    <div style={{ fontSize: '0.55rem', color: '#65676b' }}>Sponsored</div>
                  </div>
                  <span style={{ color: '#65676b', fontWeight: 700, letterSpacing: '2px', fontSize: '0.75rem' }}>···</span>
                </div>

                {/* Bright before/after image */}
                <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3', display: 'flex', overflow: 'hidden' }}>
                  <span style={{ position: 'absolute', top: '8px', left: '8px', zIndex: 6, background: '#dcfce7', color: '#15803d', fontSize: '0.52rem', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '2px 7px', borderRadius: '20px' }}>✅ Propuesta</span>
                  <div style={{ flex: 1, position: 'relative', background: 'linear-gradient(160deg,#8a8a80 0%,#5d5d55 55%,#45453a 100%)', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(115deg, rgba(0,0,0,0.12) 0 6px, transparent 6px 14px)' }} />
                    <span style={{ position: 'absolute', bottom: '8px', left: '8px', background: 'rgba(0,0,0,0.55)', color: '#fff', fontSize: '0.5rem', fontWeight: 800, letterSpacing: '0.1em', padding: '2px 7px', borderRadius: '4px', textTransform: 'uppercase' }}>Before</span>
                  </div>
                  <div style={{ flex: 1, position: 'relative', background: 'linear-gradient(160deg,#eaf6ff 0%,#bfe3ff 50%,#7cc4f5 100%)', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: '12px', right: '32px', width: '20px', height: '20px', borderRadius: '50%', background: 'radial-gradient(circle,#fff7d6 30%, rgba(255,247,214,0) 70%)' }} />
                    <span style={{ position: 'absolute', bottom: '8px', right: '8px', background: 'rgba(2,132,199,0.85)', color: '#fff', fontSize: '0.5rem', fontWeight: 800, letterSpacing: '0.1em', padding: '2px 7px', borderRadius: '4px', textTransform: 'uppercase' }}>After</span>
                  </div>
                  <div style={{ position: 'absolute', top: 0, bottom: 0, left: '50%', width: '3px', background: '#fff', transform: 'translateX(-50%)', boxShadow: '0 0 6px rgba(0,0,0,0.3)' }} />
                  <div style={{ position: 'absolute', top: '45%', left: '50%', transform: 'translate(-50%,-50%)', width: '24px', height: '24px', borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem', color: '#061a3f', boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>⇔</div>
                  <svg viewBox="0 0 200 90" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '50%' }} preserveAspectRatio="none">
                    <path d="M0 90 L0 50 L55 50 L75 22 L95 50 L200 50 L200 90 Z" fill="#061a3f" opacity="0.5" />
                    <path d="M100 90 L100 52 L140 52 L155 30 L170 52 L200 52 L200 90 Z" fill="#f8fbff" opacity="0.9" />
                    <rect x="150" y="62" width="12" height="12" fill="#9fd0f2" />
                  </svg>
                </div>

                {/* CTA bar */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.4rem', padding: '0.4rem 0.75rem', background: '#f0f6ff', borderTop: '1px solid rgba(6,102,225,0.1)', borderBottom: '1px solid rgba(6,102,225,0.1)' }}>
                  <div style={{ lineHeight: 1.25, minWidth: 0 }}>
                    <div style={{ fontSize: '0.5rem', color: '#65676b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>briyaclean.com.au</div>
                    <div style={{ fontSize: '0.6rem', fontWeight: 700, color: '#050505', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Free Instant Quote</div>
                  </div>
                  <button style={{ background: '#0668E1', border: 'none', borderRadius: '6px', padding: '0.3rem 0.6rem', fontSize: '0.6rem', fontWeight: 700, color: '#fff', cursor: 'pointer', flexShrink: 0 }}>
                    Learn More
                  </button>
                </div>

                {/* Actions + caption */}
                <div style={{ padding: '0.45rem 0.75rem 0.7rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '0.3rem', fontSize: '0.9rem' }}>
                    <span
                      onClick={() => setLiked(!liked)}
                      style={{ cursor: 'pointer', color: liked ? '#ed4956' : '#050505', transition: 'transform 0.2s ease, color 0.2s ease', transform: liked ? 'scale(1.2)' : 'scale(1)', display: 'inline-block' }}
                    >
                      {liked ? '♥' : '♡'}
                    </span>
                    <span>💬</span><span>↗</span><span style={{ marginLeft: 'auto' }}>🔖</span>
                  </div>
                  <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#050505', marginBottom: '0.2rem' }}>{liked ? '483' : '482'} likes</div>
                  <div style={{ fontSize: '0.65rem', color: '#050505', lineHeight: 1.4 }}>
                    <strong>briyaclean</strong> Your roof called — it wants a soft-wash ✨ <span style={{ color: '#00376b' }}>#SoftWash #GoldCoast</span>
                  </div>
                  <div style={{ fontSize: '0.55rem', color: '#65676b', marginTop: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>2 hours ago</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
