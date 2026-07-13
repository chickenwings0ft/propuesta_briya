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
      style={{ padding: '3rem 2vw', overflow: 'hidden' }}
    >
      <div className="container" style={{ maxWidth: '1100px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: '2.5rem', flexWrap: 'wrap' }}>

          {/* ── FEED POST ── */}
          <div style={{
            width: '340px',
            background: 'white',
            border: '1px solid rgba(6,26,63,0.12)',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 16px 40px rgba(6,26,63,0.14)',
            fontFamily: 'Helvetica, Arial, sans-serif',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.65s cubic-bezier(0.22,1,0.36,1) 0.1s'
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
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#050505' }}>Solar Panel &amp; Roof Cleaning</div>
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

            <div style={{ padding: '0.3rem 0.85rem 0.9rem' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#050505' }}>{liked ? '317' : '316'} likes</div>
            </div>
          </div>

          {/* ── REEL ── */}
          <div style={{
            width: '220px',
            aspectRatio: '9 / 16',
            borderRadius: '20px',
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 16px 40px rgba(6,26,63,0.18)',
            fontFamily: 'Helvetica, Arial, sans-serif',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.65s cubic-bezier(0.22,1,0.36,1) 0.25s'
          }}>
            <img
              src="/instagram-post-solar.png"
              alt="Briya — Solar panel before/after cleaning reel"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
            {/* Top scrim */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '30%', background: 'linear-gradient(180deg, rgba(0,0,0,0.55), transparent)' }} />
            {/* Bottom scrim */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '55%', background: 'linear-gradient(0deg, rgba(0,0,0,0.75), transparent)' }} />

            {/* Header */}
            <div style={{ position: 'absolute', top: '0.6rem', left: '0.7rem', right: '0.7rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#061a3f', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '3px', flexShrink: 0, border: '1.5px solid #fff' }}>
                <img src="/logo-original.png" alt="Briya" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <span style={{ fontSize: '0.62rem', fontWeight: 700, color: '#fff' }}>briyaclean</span>
              <span style={{ fontSize: '0.5rem', color: 'rgba(255,255,255,0.75)', marginLeft: '0.2rem' }}>Sponsored</span>
            </div>

            {/* Right side icons */}
            <div style={{ position: 'absolute', right: '0.5rem', bottom: '3.6rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
              <span
                onClick={() => setLiked(!liked)}
                style={{ fontSize: '1.15rem', cursor: 'pointer', color: liked ? '#ed4956' : '#fff', transform: liked ? 'scale(1.15)' : 'scale(1)', transition: 'transform 0.2s ease, color 0.2s ease' }}
              >
                {liked ? '♥' : '♡'}
              </span>
              <span style={{ fontSize: '1.05rem', color: '#fff' }}>💬</span>
              <span style={{ fontSize: '1.05rem', color: '#fff' }}>↗</span>
            </div>

            {/* CTA overlay */}
            <div style={{ position: 'absolute', bottom: '0.8rem', left: '0.7rem', right: '0.7rem' }}>
              <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#fff', lineHeight: 1.35, marginBottom: '0.5rem', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
                Solar panels back to spotless ☀️🧼
              </div>
              <button style={{ width: '100%', background: '#0668E1', border: 'none', borderRadius: '6px', padding: '0.45rem 0.6rem', fontSize: '0.6rem', fontWeight: 700, color: '#fff', cursor: 'pointer', letterSpacing: '0.03em' }}>
                CONTACT NOW
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
