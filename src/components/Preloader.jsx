import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function Preloader({ onFinish }) {
  const [complete, setComplete] = useState(false)
  const containerRef = useRef(null)
  const logoRef = useRef(null)

  useEffect(() => {
    // Logo entrance on mount
    gsap.fromTo(logoRef.current,
      { scale: 0.9, opacity: 0 },
      { opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out' }
    )

    // Single transition: slide the whole navy panel up into the header
    const tl = gsap.timeline({
      paused: true,
      onComplete: () => {
        setComplete(true)
        if (onFinish) onFinish()
      }
    })

    tl.to(containerRef.current, {
      yPercent: -100,
      duration: 1.2,
      ease: 'power4.inOut'
    })

    const handleScroll = (e) => {
      // Ignorar scroll hacia arriba o teclas irrelevantes
      if (e.type === 'wheel' && e.deltaY <= 0) return;
      if (e.type === 'keydown' && !['ArrowDown', 'ArrowRight', ' ', 'Enter'].includes(e.key)) return;

      tl.play();
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('keydown', handleScroll);
    };

    window.addEventListener('wheel', handleScroll);
    window.addEventListener('keydown', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('keydown', handleScroll);
      tl.kill();
    };
  }, [])

  if (complete) return null

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#061a3f', // Navy — same tone as the header
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      <img
        ref={logoRef}
        src="./logo-principal.png"
        alt="Briya"
        style={{ width: '220px', objectFit: 'contain' }}
      />
    </div>
  )
}
