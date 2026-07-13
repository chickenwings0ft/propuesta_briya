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

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
          <div>
            <p className="section-label" style={{ color: 'var(--color-muted)', marginBottom: '0.4rem' }}>11 — Instagram</p>
            <h2 className="section-title reveal" style={{ color: 'var(--color-dark)', lineHeight: 1.05, fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}>
              El mismo perfil,<br />
              <span style={{ color: 'var(--color-green)' }}>otra energía.</span>
            </h2>
          </div>
          <p style={{ fontSize: '0.82rem', color: 'var(--color-muted)', maxWidth: '400px', lineHeight: 1.55 }}>
            Simulación del Instagram de Briya: la misma cuenta con una publicación actual —oscura y sin identidad— frente a una publicación gestionada: luminosa, con marca y con llamada a la acción.
          </p>
        </div>

        {/* IG panel */}
        <div style={{
          background: 'white',
          border: '1px solid rgba(6,26,63,0.1)',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 12px 32px rgba(6,26,63,0.08)',
          fontFamily: 'Helvetica, Arial, sans-serif',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(24px)',
          transition: 'all 0.6s cubic-bezier(0.22,1,0.36,1) 0.15s'
        }}>

          {/* Profile strip */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.7rem 1.1rem', borderBottom: '1px solid rgba(6,26,63,0.08)' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#061a3f', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '5px', flexShrink: 0, border: '2px solid #E1306C' }}>
              <img src="/logo-original.png" alt="Briya" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <div style={{ flex: 1, lineHeight: 1.3 }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#050505' }}>briyaclean</div>
              <div style={{ fontSize: '0.65rem', color: '#65676b' }}>Exterior Cleaning · Gold Coast, QLD</div>
            </div>
            <div style={{ display: 'flex', gap: '1.25rem', fontSize: '0.7rem', color: '#050505', textAlign: 'center' }}>
              <div><strong style={{ display: 'block', fontSize: '0.8rem' }}>127</strong>posts</div>
              <div><strong style={{ display: 'block', fontSize: '0.8rem' }}>1,842</strong>followers</div>
              <div><strong style={{ display: 'block', fontSize: '0.8rem' }}>312</strong>following</div>
            </div>
          </div>

          {/* Two posts side by side */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>

            {/* ── POST 1: dark & ugly ── */}
            <div style={{ borderRight: '1px solid rgba(6,26,63,0.08)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '0.6rem', left: '0.6rem', zIndex: 5, background: '#fee2e2', color: '#b91c1c', fontSize: '0.58rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '3px 8px', borderRadius: '20px', border: '1px solid rgba(185,28,28,0.2)' }}>
                ❌ Publicación actual
              </div>

              {/* Post header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.55rem 0.85rem', marginTop: '1.6rem' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#061a3f', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '4px', flexShrink: 0 }}>
                  <img src="/logo-original.png" alt="Briya" style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'grayscale(0.8) brightness(0.8)' }} />
                </div>
                <div style={{ flex: 1, lineHeight: 1.2 }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#050505' }}>briyaclean</div>
                </div>
                <span style={{ color: '#65676b', fontWeight: 700, letterSpacing: '2px', fontSize: '0.8rem' }}>···</span>
              </div>

              {/* Dark ugly image */}
              <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3', background: 'linear-gradient(155deg,#3a3a35 0%,#26261f 45%,#15150f 100%)', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(100deg, rgba(0,0,0,0.25) 0 8px, transparent 8px 18px)' }} />
                {/* dark blurry house silhouette */}
                <svg viewBox="0 0 200 90" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '55%', opacity: 0.85, filter: 'blur(0.6px)' }} preserveAspectRatio="none">
                  <path d="M0 90 L0 50 L55 50 L75 22 L95 50 L200 50 L200 90 Z" fill="#0c0c09" />
                  <rect x="30" y="60" width="16" height="14" fill="#1e1e16" />
                  <rect x="120" y="60" width="16" height="14" fill="#1e1e16" />
                </svg>
                <span style={{ position: 'absolute', top: '10px', right: '10px', color: 'rgba(255,255,255,0.35)', fontSize: '0.55rem', letterSpacing: '0.05em' }}>📷 low light · no edit</span>
              </div>

              {/* Actions + caption */}
              <div style={{ padding: '0.5rem 0.85rem 0.9rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.35rem', fontSize: '1rem', opacity: 0.75 }}>
                  <span>♡</span><span>💬</span><span>↗</span><span style={{ marginLeft: 'auto' }}>🔖</span>
                </div>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#050505', marginBottom: '0.25rem' }}>9 likes</div>
                <div style={{ fontSize: '0.7rem', color: '#050505', lineHeight: 1.45 }}>
                  <strong>briyaclean</strong> roof job done today
                </div>
                <div style={{ fontSize: '0.6rem', color: '#65676b', marginTop: '0.3rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>3 weeks ago</div>
              </div>
            </div>

            {/* ── POST 2: bright & branded ── */}
            <div style={{ position: 'relative', background: '#fffefb' }}>
              <div style={{ position: 'absolute', top: '0.6rem', left: '0.6rem', zIndex: 5, background: '#dcfce7', color: '#15803d', fontSize: '0.58rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '3px 8px', borderRadius: '20px', border: '1px solid rgba(21,128,61,0.2)' }}>
                ✅ Publicación gestionada
              </div>

              {/* Post header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.55rem 0.85rem', marginTop: '1.6rem' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#061a3f', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '4px', flexShrink: 0 }}>
                  <img src="/logo-original.png" alt="Briya" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <div style={{ flex: 1, lineHeight: 1.2 }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#050505' }}>briyaclean</div>
                  <div style={{ fontSize: '0.6rem', color: '#65676b' }}>Sponsored · Gold Coast, QLD</div>
                </div>
                <span style={{ color: '#65676b', fontWeight: 700, letterSpacing: '2px', fontSize: '0.8rem' }}>···</span>
              </div>

              {/* Bright before/after image */}
              <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3', display: 'flex', overflow: 'hidden' }}>
                <div style={{ flex: 1, position: 'relative', background: 'linear-gradient(160deg,#8a8a80 0%,#5d5d55 55%,#45453a 100%)', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(115deg, rgba(0,0,0,0.12) 0 6px, transparent 6px 14px)' }} />
                  <span style={{ position: 'absolute', top: '10px', left: '10px', background: 'rgba(0,0,0,0.55)', color: '#fff', fontSize: '0.52rem', fontWeight: 800, letterSpacing: '0.1em', padding: '3px 8px', borderRadius: '4px', textTransform: 'uppercase' }}>Before</span>
                </div>
                <div style={{ flex: 1, position: 'relative', background: 'linear-gradient(160deg,#eaf6ff 0%,#bfe3ff 50%,#7cc4f5 100%)', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: '12px', right: '38px', width: '22px', height: '22px', borderRadius: '50%', background: 'radial-gradient(circle,#fff7d6 30%, rgba(255,247,214,0) 70%)' }} />
                  <span style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(2,132,199,0.85)', color: '#fff', fontSize: '0.52rem', fontWeight: 800, letterSpacing: '0.1em', padding: '3px 8px', borderRadius: '4px', textTransform: 'uppercase' }}>After</span>
                </div>
                {/* Slider divider */}
                <div style={{ position: 'absolute', top: 0, bottom: 0, left: '50%', width: '3px', background: '#fff', transform: 'translateX(-50%)', boxShadow: '0 0 6px rgba(0,0,0,0.3)' }} />
                <div style={{ position: 'absolute', top: '42%', left: '50%', transform: 'translate(-50%,-50%)', width: '26px', height: '26px', borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', color: '#061a3f', boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>⇔</div>
                {/* Clean white house */}
                <svg viewBox="0 0 200 90" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '55%' }} preserveAspectRatio="none">
                  <path d="M0 90 L0 50 L55 50 L75 22 L95 50 L200 50 L200 90 Z" fill="#061a3f" opacity="0.5" />
                  <path d="M100 90 L100 52 L140 52 L155 30 L170 52 L200 52 L200 90 Z" fill="#f8fbff" opacity="0.9" />
                  <rect x="150" y="62" width="12" height="12" fill="#9fd0f2" />
                </svg>
                {/* Brand watermark */}
                <div style={{ position: 'absolute', bottom: '8px', right: '8px', background: 'rgba(255,255,255,0.9)', borderRadius: '6px', padding: '2px 6px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <img src="/logo-original.png" alt="Briya" style={{ height: '14px', width: 'auto', objectFit: 'contain' }} />
                  <span style={{ fontSize: '0.5rem', fontWeight: 800, color: '#061a3f', letterSpacing: '0.05em' }}>BRIYA</span>
                </div>
              </div>

              {/* CTA bar */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 0.85rem', background: '#f0f6ff', borderTop: '1px solid rgba(6,102,225,0.1)', borderBottom: '1px solid rgba(6,102,225,0.1)' }}>
                <div style={{ lineHeight: 1.2 }}>
                  <div style={{ fontSize: '0.55rem', color: '#65676b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>briyaclean.com.au</div>
                  <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#050505' }}>Free Instant Quote — Soft-Wash Specialists</div>
                </div>
                <button style={{ background: '#0668E1', border: 'none', borderRadius: '6px', padding: '0.35rem 0.7rem', fontSize: '0.65rem', fontWeight: 700, color: '#fff', cursor: 'pointer', flexShrink: 0 }}>
                  Learn More
                </button>
              </div>

              {/* Actions + caption */}
              <div style={{ padding: '0.5rem 0.85rem 0.9rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.35rem', fontSize: '1rem' }}>
                  <span
                    onClick={() => setLiked(!liked)}
                    style={{ cursor: 'pointer', color: liked ? '#ed4956' : '#050505', transition: 'transform 0.2s ease, color 0.2s ease', transform: liked ? 'scale(1.2)' : 'scale(1)', display: 'inline-block' }}
                  >
                    {liked ? '♥' : '♡'}
                  </span>
                  <span>💬</span><span>↗</span><span style={{ marginLeft: 'auto' }}>🔖</span>
                </div>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#050505', marginBottom: '0.25rem' }}>{liked ? '483' : '482'} likes</div>
                <div style={{ fontSize: '0.7rem', color: '#050505', lineHeight: 1.45 }}>
                  <strong>briyaclean</strong> Your roof called — it wants a soft-wash ✨ Mould, dirt &amp; stains gone in one visit. <span style={{ color: '#00376b' }}>#SoftWash #GoldCoast #ExteriorCleaning</span>
                </div>
                <div style={{ fontSize: '0.6rem', color: '#65676b', marginTop: '0.3rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>2 hours ago</div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom comparison notes */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '0.9rem' }}>
          <div style={{ fontSize: '0.72rem', color: 'var(--color-muted)', lineHeight: 1.5, opacity: inView ? 1 : 0, transition: 'opacity 0.6s ease 0.5s' }}>
            Foto oscura, sin edición ni marca, texto plano y sin hashtags: <strong style={{ color: '#b91c1c' }}>9 likes y cero leads</strong>.
          </div>
          <div style={{ fontSize: '0.72rem', color: 'var(--color-muted)', lineHeight: 1.5, opacity: inView ? 1 : 0, transition: 'opacity 0.6s ease 0.6s' }}>
            Luz, color de marca, antes/después y CTA con enlace directo al presupuesto: <strong style={{ color: '#15803d' }}>alcance 18.2K · CTR 2.4% · coste por lead €4.80</strong>.
          </div>
        </div>

      </div>
    </section>
  )
}
