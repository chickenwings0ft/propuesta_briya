import { useEffect, useRef, useState } from 'react'

export default function AuditSlide() {
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

  const boxStyle = {
    background: 'rgba(255,255,255,0.02)',
    border: '1px solid rgba(255,255,255,0.04)',
    borderRadius: '12px',
    padding: '2.5rem 1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    position: 'relative',
    overflow: 'hidden'
  }

  const listStyle = {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem',
    fontSize: '0.82rem',
    color: '#a1a1aa',
    lineHeight: 1.4
  }

  // Consistent color for FASE markers instead of the "arcoiris" 
  const faseColor = '#71717a' // subtle grey

  return (
    <section 
      ref={sectionRef} 
      className="section section--dark" 
      id="audit"
      style={{ overflow: 'hidden' }}
    >
      <div className="container" style={{ maxWidth: '1200px' }}>
        <p className="section-label reveal">Fase 1 — Punto de partida</p>
        <h2 className="section-title reveal" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', lineHeight: 1.1 }}>
          Auditoría Inicial.
        </h2>
        <p className="section-body reveal" style={{ marginTop: '1.5rem', maxWidth: '600px', fontSize: '1.05rem' }}>
          Antes de empezar, revisamos a fondo cómo está hoy la presencia digital de Briya: la web, Google y las redes sociales. Así sabemos exactamente qué funciona, qué falla y qué arreglar primero.
        </p>

        {/* Global Progress Line (Red to Yellow to Green) */}
        <div style={{ marginTop: '3.5rem', marginBottom: '1.5rem' }}>
          <div style={{
            width: '100%',
            height: '4px',
            background: 'linear-gradient(90deg, #ef4444 0%, #facc15 50%, #22c55e 100%)',
            borderRadius: '4px',
            transform: inView ? 'scaleX(1)' : 'scaleX(0)',
            transformOrigin: 'left',
            transition: 'transform 1.8s cubic-bezier(0.22, 1, 0.36, 1) 0.1s'
          }} />
        </div>

        <div className="audit-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '1.5rem' 
        }}>
          
          {/* Card 1: Indexación */}
          <div className="reveal" style={{...boxStyle, transform: inView ? 'translateY(0)' : 'translateY(30px)', opacity: inView ? 1 : 0, transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.2s'}}>
            <div style={{ fontSize: '0.75rem', color: faseColor, fontWeight: 700, letterSpacing: '0.1em', marginBottom: '0.2rem' }}>FASE 01</div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--color-floral)', letterSpacing: '0.01em', marginBottom: '0.5rem' }}>La web en Google</h3>
            <ul style={listStyle}>
              <li style={{display: 'flex', gap: '8px'}}><span style={{color: 'var(--color-floral)'}}>✓</span> ¿Aparecen todas las páginas de la web en Google?</li>
              <li style={{display: 'flex', gap: '8px'}}><span style={{color: 'var(--color-floral)'}}>✓</span> Buscamos enlaces rotos y páginas que dan error</li>
              <li style={{display: 'flex', gap: '8px'}}><span style={{color: 'var(--color-floral)'}}>✓</span> Comprobamos que Google entiende de qué va cada página</li>
              <li style={{display: 'flex', gap: '8px'}}><span style={{color: 'var(--color-floral)'}}>✓</span> Revisamos que la web sea segura (candado 🔒)</li>
            </ul>
          </div>

          {/* Card 2: Core Web Vitals */}
          <div className="reveal" style={{...boxStyle, transform: inView ? 'translateY(0)' : 'translateY(30px)', opacity: inView ? 1 : 0, transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.3s'}}>
            <div style={{ fontSize: '0.75rem', color: faseColor, fontWeight: 700, letterSpacing: '0.1em', marginBottom: '0.2rem' }}>FASE 02</div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--color-floral)', letterSpacing: '0.01em', marginBottom: '0.5rem' }}>Velocidad y Móvil</h3>
            <ul style={listStyle}>
              <li style={{display: 'flex', gap: '8px'}}><span style={{color: 'var(--color-floral)'}}>✓</span> ¿Carga rápido? Nadie espera más de 3 segundos</li>
              <li style={{display: 'flex', gap: '8px'}}><span style={{color: 'var(--color-floral)'}}>✓</span> ¿Se ve bien y es cómoda desde el móvil?</li>
              <li style={{display: 'flex', gap: '8px'}}><span style={{color: 'var(--color-floral)'}}>✓</span> ¿Es fácil navegar sin que nada salte o se mueva?</li>
              <li style={{display: 'flex', gap: '8px'}}><span style={{color: 'var(--color-floral)'}}>✓</span> ¿El botón de pedir presupuesto está siempre a mano?</li>
            </ul>
          </div>

          {/* Card 3: Arquitectura */}
          <div className="reveal" style={{...boxStyle, transform: inView ? 'translateY(0)' : 'translateY(30px)', opacity: inView ? 1 : 0, transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.4s'}}>
            <div style={{ fontSize: '0.75rem', color: faseColor, fontWeight: 700, letterSpacing: '0.1em', marginBottom: '0.2rem' }}>FASE 03</div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--color-floral)', letterSpacing: '0.01em', marginBottom: '0.5rem' }}>Presencia Local</h3>
            <ul style={listStyle}>
              <li style={{display: 'flex', gap: '8px'}}><span style={{color: 'var(--color-floral)'}}>✓</span> Cómo aparece Briya en Google Maps frente a la competencia</li>
              <li style={{display: 'flex', gap: '8px'}}><span style={{color: 'var(--color-floral)'}}>✓</span> Estado de la ficha de Google: fotos, horarios y reseñas</li>
              <li style={{display: 'flex', gap: '8px'}}><span style={{color: 'var(--color-floral)'}}>✓</span> Datos de contacto correctos en todos los directorios</li>
              <li style={{display: 'flex', gap: '8px'}}><span style={{color: 'var(--color-floral)'}}>✓</span> Qué busca la gente en la zona y con qué palabras</li>
            </ul>
          </div>

          {/* Card 4: Seguridad y Autoridad */}
          <div className="reveal" style={{...boxStyle, transform: inView ? 'translateY(0)' : 'translateY(30px)', opacity: inView ? 1 : 0, transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.5s'}}>
            <div style={{ fontSize: '0.75rem', color: faseColor, fontWeight: 700, letterSpacing: '0.1em', marginBottom: '0.2rem' }}>FASE 04</div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--color-floral)', letterSpacing: '0.01em', marginBottom: '0.5rem' }}>Redes Sociales</h3>
            <ul style={listStyle}>
              <li style={{display: 'flex', gap: '8px'}}><span style={{color: 'var(--color-floral)'}}>✓</span> Estado de los perfiles de Instagram y Facebook</li>
              <li style={{display: 'flex', gap: '8px'}}><span style={{color: 'var(--color-floral)'}}>✓</span> Frecuencia y calidad de las publicaciones actuales</li>
              <li style={{display: 'flex', gap: '8px'}}><span style={{color: 'var(--color-floral)'}}>✓</span> Imagen de marca: ¿se reconoce a Briya de un vistazo?</li>
              <li style={{display: 'flex', gap: '8px'}}><span style={{color: 'var(--color-floral)'}}>✓</span> Respuesta a comentarios, mensajes y reseñas</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
