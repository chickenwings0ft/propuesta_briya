import { useRef } from 'react'

export default function PricingSlide() {
  const containerRef = useRef(null)

  return (
    <section 
      ref={containerRef}
      className="section" 
      id="pricing-roots"
      style={{ 
        position: 'relative', 
        overflow: 'hidden', 
        padding: 0,
        background: 'var(--color-dark)',
        color: 'var(--color-cream)'
      }}
    >
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
          padding: '2rem'
        }}
      >
        <span className="reveal" style={{ fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-floral)', marginBottom: '1.5rem' }}>
          Propuesta Comercial
        </span>
        <h2 className="reveal" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '2.5rem', textAlign: 'center', lineHeight: 1.1 }}>
          El momento <br/>de estar arriba.
        </h2>

        {/* Pricing Table Concept - Briya Standard */}
        <div className="reveal" style={{ 
          background: 'rgba(254, 254, 255, 0.03)', 
          border: '1px solid rgba(2, 132, 199, 0.15)', 
          padding: '3rem', 
          borderRadius: '16px',
          width: '100%',
          maxWidth: '520px',
          textAlign: 'center',
          boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
        }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-floral)' }}>Briya Standard</div>
          <div style={{ fontSize: '0.85rem', color: '#a1a1aa', marginBottom: '2rem' }}>Dominación Local + Énfasis IA + Optimización Maps & Directorios</div>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(2, 132, 199, 0.15)' }}>
             <div>
                <div style={{ fontSize: '0.75rem', color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>Puesta en marcha</div>
                <div style={{ fontSize: '2rem', fontWeight: 600 }}>€ 1.000</div>
              </div>
              <div style={{ width: '1px', background: 'rgba(2, 132, 199, 0.15)' }} />
              <div>
                <div style={{ fontSize: '0.75rem', color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>Mantenimiento</div>
                <div style={{ fontSize: '2rem', fontWeight: 600 }}>€ 350<span style={{ fontSize: '1rem', fontWeight: 400, color: '#a1a1aa' }}>/m</span></div>
              </div>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left', fontSize: '0.9rem', color: '#ececec', margin: '0 1.5rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}><div style={{width: 6, height: 6, borderRadius: '50%', background: 'var(--color-floral)', flexShrink: 0}} /> Auditoría Inicial y Setup Técnico Semántico</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}><div style={{width: 6, height: 6, borderRadius: '50%', background: 'var(--color-floral)', flexShrink: 0}} /> Arquitectura Web: 6 Landings locales y 2 al mes</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}><div style={{width: 6, height: 6, borderRadius: '50%', background: 'var(--color-floral)', flexShrink: 0}} /> Gestión y Optimización semanal de Google Business Profile</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}><div style={{width: 6, height: 6, borderRadius: '50%', background: 'var(--color-floral)', flexShrink: 0}} /> Soporte técnico "All-in" para cualquier cambio de la web</div>
          </div>
        </div>

      </div>
    </section>
  )
}
