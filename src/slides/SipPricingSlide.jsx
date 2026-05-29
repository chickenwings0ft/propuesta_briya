import { useRef, useState } from 'react'

export default function SipPricingSlide() {
  const containerRef = useRef(null)

  return (
    <section 
      ref={containerRef}
      className="section" 
      id="pricing-sip"
      style={{ 
        position: 'relative', 
        overflow: 'hidden', 
        padding: 0,
        background: '#f4f8fb',
        color: '#0d1f2d',
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif'
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
        <span className="reveal" style={{ fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-green)', marginBottom: '1.5rem', fontWeight: 600 }}>
          Propuesta Comercial Premium
        </span>
        <img 
          src="./logo-original.png" 
          alt="Briya" 
          className="reveal"
          style={{ width: '180px', marginBottom: '2.5rem', objectFit: 'contain' }}
        />

        {/* Pricing Table Concept - Briya Premium */}
        <div className="reveal" style={{ 
          background: '#ffffff', 
          border: '1px solid rgba(2, 132, 199, 0.15)', 
          padding: '3rem', 
          borderRadius: '16px',
          width: '100%',
          maxWidth: '520px',
          textAlign: 'center',
          boxShadow: '0 15px 40px rgba(13,31,45,0.08)'
        }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', color: '#0284c7' }}>Briya Premium</div>
          <div style={{ fontSize: '0.85rem', color: '#6b889e', marginBottom: '2rem' }}>Doble Cobertura (Servicios + Municipios Clave) + SEO IA + GA4 Custom</div>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid #e9ecef' }}>
             <div>
                <div style={{ fontSize: '0.75rem', color: '#6b889e', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem', fontWeight: 600 }}>Puesta en marcha</div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#0d1f2d' }}>€ 1.400</div>
              </div>
              <div style={{ width: '1px', background: '#e9ecef' }} />
              <div>
                <div style={{ fontSize: '0.75rem', color: '#6b889e', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem', fontWeight: 600 }}>Mantenimiento</div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#0d1f2d' }}>€ 500<span style={{ fontSize: '1rem', fontWeight: 500, color: '#6b889e' }}>/m</span></div>
              </div>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left', fontSize: '0.9rem', color: '#0d1f2d', margin: '0 1.5rem', fontWeight: 500 }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}><div style={{width: 6, height: 6, borderRadius: '50%', background: '#0284c7', flexShrink: 0}} /> Auditoría Avanzada de indexación y marcado semántico</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}><div style={{width: 6, height: 6, borderRadius: '50%', background: '#0284c7', flexShrink: 0}} /> Arquitectura Completa: 10 Landings de inicio y 4 al mes</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}><div style={{width: 6, height: 6, borderRadius: '50%', background: '#0284c7', flexShrink: 0}} /> Gestión GBP Premium (fotos antes/después geolocalizadas)</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}><div style={{width: 6, height: 6, borderRadius: '50%', background: '#0284c7', flexShrink: 0}} /> Dashboard Analítico (GA4) en tiempo real y soporte prioritario</div>
          </div>
        </div>

      </div>
    </section>
  )
}
