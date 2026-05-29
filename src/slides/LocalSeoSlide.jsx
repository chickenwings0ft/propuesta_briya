import { useState } from 'react'

export default function LocalSeoSlide() {
  return (
    <section className="section section--green" id="diagnostico">
      <div className="container" style={{ maxWidth: '1400px' }}>
        <p className="section-label">01 — Diagnóstico</p>
        
        <div className="two-col two-col--60-40" style={{ alignItems: 'center', gap: '4rem' }}>
          <div>
            <h2 className="section-title reveal" style={{ marginBottom: '1.5rem', color: 'var(--color-dark)' }}>
              SEO Local
            </h2>
            <p className="section-body reveal" style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--color-dark)', marginBottom: '2.5rem' }}>
              Optimizar Google Business Profile<br/>
              + Apple Maps<br/>
              + Bing Places<br/>
              + Directorios Locales.
            </p>

            <div className="highlight-bar reveal" style={{ marginBottom: '2.5rem', background: 'rgba(255, 255, 255, 0.4)' }}>
              <div className="highlight-bar__accent" style={{ background: 'var(--color-dark)' }}></div>
              <div className="highlight-bar__content">
                <div className="highlight-bar__title" style={{ color: 'var(--color-dark)' }}>Oportunidad Real</div>
                <div className="highlight-bar__text" style={{ color: 'var(--color-dark)' }}>
                  Las búsquedas geolocalizadas como "lavado a presion madrid" o "limpieza fachadas chalets" tienen intención de contratación inmediata. Briya debe acaparar el "Local 3-Pack" para capturar llamadas directas.
                </div>
              </div>
            </div>

            <div className="reveal-stagger">
              <div className="step">
                <div className="step__num" style={{ background: 'var(--color-dark)', color: 'var(--color-cream)' }}>01</div>
                <div className="step__content">
                  <h3 className="step__title" style={{ color: 'var(--color-dark)' }}>Optimizar Ficha GBP</h3>
                  <p className="step__body" style={{ color: 'rgba(13, 31, 45, 0.8)' }}>Categorías principales correctas ("Servicios de limpieza", "Lavado a presión"), fotos antes/después geolocalizadas y ofertas activas.</p>
                </div>
              </div>
              <div className="step">
                <div className="step__num" style={{ background: 'var(--color-dark)', color: 'var(--color-cream)' }}>02</div>
                <div className="step__content">
                  <h3 className="step__title" style={{ color: 'var(--color-dark)' }}>Estrategia Activa de Reseñas</h3>
                  <p className="step__body" style={{ color: 'rgba(13, 31, 45, 0.8)' }}>Generación automatizada de enlaces cortos de opinión tras completar la limpieza y respuestas ricas en palabras clave geográficas.</p>
                </div>
              </div>
              <div className="step">
                <div className="step__num" style={{ background: 'var(--color-dark)', color: 'var(--color-cream)' }}>03</div>
                <div className="step__content">
                  <h3 className="step__title" style={{ color: 'var(--color-dark)' }}>Consistencia NAP (Citas)</h3>
                  <p className="step__body" style={{ color: 'rgba(13, 31, 45, 0.8)' }}>Asegurar que Nombre, Dirección y Teléfono sean idénticos en Yelp, Habitissimo y Páginas Amarillas para ganar autoridad ante el algoritmo de Google.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal">
            {/* Google Business Profile Mockup Card */}
            <div style={{
              background: '#ffffff',
              borderRadius: '12px',
              border: '1px solid #e0e0e0',
              boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
              padding: '1.5rem',
              fontFamily: 'arial, sans-serif',
              color: '#202124',
              textAlign: 'left',
              width: '100%',
              maxWidth: '430px',
              margin: '0 auto'
            }}>
              {/* Header */}
              <h4 style={{ margin: '0 0 0.25rem', fontSize: '1.25rem', color: '#202124', fontWeight: 'normal', textTransform: 'none', letterSpacing: 'normal' }}>
                Briya Clean | Lavado a Presión y Limpieza de Fachadas
              </h4>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: '#5f6368', marginBottom: '0.8rem' }}>
                <span style={{ color: '#f57c00', fontWeight: 'bold' }}>4.9</span>
                <span style={{ color: '#fbbc05', letterSpacing: '1px' }}>★★★★★</span>
                <span style={{ color: '#1a0dab', cursor: 'pointer' }}>84 reseñas</span>
              </div>

              <div style={{ fontSize: '0.85rem', color: '#5f6368', borderBottom: '1px solid #ececec', paddingBottom: '0.8rem', marginBottom: '0.8rem' }}>
                Empresa de limpieza exterior · Madrid
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', justifyContent: 'space-around', borderBottom: '1px solid #ececec', paddingBottom: '0.8rem', marginBottom: '0.8rem' }}>
                <div style={{ textAlign: 'center', cursor: 'pointer' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid #dfe1e5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1a73e8', margin: '0 auto 0.25rem', fontSize: '1.1rem' }}>🌐</div>
                  <span style={{ fontSize: '0.75rem', color: '#1a73e8' }}>Sitio web</span>
                </div>
                <div style={{ textAlign: 'center', cursor: 'pointer' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid #dfe1e5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1a73e8', margin: '0 auto 0.25rem', fontSize: '1.1rem' }}>🗺️</div>
                  <span style={{ fontSize: '0.75rem', color: '#1a73e8' }}>Indicaciones</span>
                </div>
                <div style={{ textAlign: 'center', cursor: 'pointer' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid #dfe1e5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1a73e8', margin: '0 auto 0.25rem', fontSize: '1.1rem' }}>📞</div>
                  <span style={{ fontSize: '0.75rem', color: '#1a73e8' }}>Llamar</span>
                </div>
              </div>

              {/* Contact / Location Info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem', borderBottom: '1px solid #ececec', paddingBottom: '0.8rem', marginBottom: '0.8rem' }}>
                <div style={{ display: 'flex', gap: '0.6rem' }}>
                  <span>📍</span>
                  <span>Madrid y suburbanas (Pozuelo, Las Rozas, Majadahonda)</span>
                </div>
                <div style={{ display: 'flex', gap: '0.6rem' }}>
                  <span>🕒</span>
                  <span><strong style={{ color: '#188038' }}>Abierto ahora</strong> · Cierra a las 20:00</span>
                </div>
                <div style={{ display: 'flex', gap: '0.6rem' }}>
                  <span>📞</span>
                  <span>611 22 33 44</span>
                </div>
                <div style={{ display: 'flex', gap: '0.6rem' }}>
                  <span>🏷️</span>
                  <span>Ofrece presupuestos online gratuitos</span>
                </div>
              </div>

              {/* Reviews Highlight */}
              <div>
                <h5 style={{ margin: '0 0 0.5rem', fontSize: '0.85rem', fontWeight: 'bold', color: '#202124', textTransform: 'none', letterSpacing: 'normal' }}>Reseñas destacadas</h5>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <div style={{ background: '#f8f9fa', padding: '0.6rem', borderRadius: '6px', fontSize: '0.78rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.2rem' }}>
                      <strong style={{ color: '#333' }}>María G.</strong>
                      <span style={{ color: '#fbbc05' }}>★★★★★</span>
                    </div>
                    <span style={{ color: '#5f6368', fontStyle: 'italic' }}>
                      "Limpiaron la fachada de piedra y el tejado de nuestro chalet. El resultado es alucinante y protegieron perfectamente mis arbustos y macetas."
                    </span>
                  </div>
                  <div style={{ background: '#f8f9fa', padding: '0.6rem', borderRadius: '6px', fontSize: '0.78rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.2rem' }}>
                      <strong style={{ color: '#333' }}>Javier M.</strong>
                      <span style={{ color: '#fbbc05' }}>★★★★★</span>
                    </div>
                    <span style={{ color: '#5f6368', fontStyle: 'italic' }}>
                      "Muy profesionales. Eliminaron todo el moho y manchas negras con soft-washing. Un trato impecable."
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
