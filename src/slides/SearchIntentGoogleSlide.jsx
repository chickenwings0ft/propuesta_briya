export default function SearchIntentGoogleSlide() {
  return (
    <section className="section section--cream" id="search-intent-google">
      <div className="container" style={{ maxWidth: '1400px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '2rem', width: '100%' }}>
          <h2 className="section-title" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
            <span className="badge" style={{ background: 'var(--color-dark)', color: 'var(--color-cream)', fontSize: '1.2rem', padding: '8px 16px' }}>Google</span>
            Búsqueda Tradicional
          </h2>
          <p className="card__body" style={{ fontSize: '1.25rem', maxWidth: '900px', margin: '0 auto', color: 'var(--color-dark)' }}>
            <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.4rem' }}>"¿Dónde encontrar una empresa de lavado a presión fiable en Madrid?"</strong>
            <em style={{ color: 'var(--color-muted)' }}>Aquí el usuario busca opiniones, valoraciones en Google Maps, fotos de trabajos "Antes y Después", servicios ofrecidos y precios estimados.</em>
          </p>
        </div>

        <div className="reveal" style={{ width: '100%', maxWidth: '950px' }}>
          {/* Mock Browser Window */}
          <div style={{
            background: '#ffffff',
            borderRadius: '12px',
            border: '1px solid #dfe1e5',
            boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
            overflow: 'hidden',
            fontFamily: 'arial, sans-serif',
            color: '#202124',
            textAlign: 'left'
          }}>
            {/* Browser Header Bar */}
            <div style={{
              background: '#f1f3f4',
              padding: '0.75rem 1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              borderBottom: '1px solid #dfe1e5'
            }}>
              <div style={{ display: 'flex', gap: '0.4rem' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
              </div>
              <div style={{
                background: '#ffffff',
                borderRadius: '16px',
                padding: '0.3rem 1.25rem',
                fontSize: '0.8rem',
                color: '#5f6368',
                flex: 1,
                border: '1px solid #dfe1e5',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                🔒 https://www.google.com/search?q=limpieza+fachadas+madrid
              </div>
            </div>

            {/* Google Results Content */}
            <div style={{ padding: '1.5rem' }}>
              {/* Local Pack (Google Maps) Header */}
              <div style={{ borderBottom: '1px solid #dfe1e5', paddingBottom: '0.75rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.75rem', color: '#70757a', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Resultados locales para Madrid</span>
                <h4 style={{ margin: '0.25rem 0 0', fontSize: '1.2rem', fontWeight: 400 }}>Negocios cerca de ti</h4>
              </div>

              {/* Local Map Vector Block */}
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                {/* Left Side: Map List */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {/* Briya - Map Item 1 */}
                  <div style={{
                    border: '2px solid rgba(2, 132, 199, 0.3)',
                    borderRadius: '8px',
                    padding: '0.85rem',
                    background: 'rgba(2, 132, 199, 0.03)',
                    position: 'relative'
                  }}>
                    <span style={{
                      position: 'absolute',
                      right: '0.85rem',
                      top: '0.85rem',
                      background: 'var(--color-green)',
                      color: '#fff',
                      fontSize: '0.65rem',
                      fontWeight: 800,
                      padding: '2px 6px',
                      borderRadius: '4px'
                    }}>RECOMENDADO</span>
                    <h5 style={{ margin: '0 0 0.25rem', fontSize: '0.95rem', color: '#1a0dab', fontWeight: 600 }}>Briya (Briya Clean)</h5>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: '#4d5156', margin: '0.25rem 0' }}>
                      <span style={{ color: '#4285f4', fontWeight: 'bold' }}>4.9</span>
                      <span style={{ color: '#fbbc05' }}>★★★★★</span>
                      <span>(84)</span>
                      <span>· Lavado a presión</span>
                    </div>
                    <p style={{ margin: 0, fontSize: '0.8rem', color: '#4d5156' }}>📍 Madrid · 611 22 33 44</p>
                    <p style={{ margin: '0.25rem 0 0', fontSize: '0.78rem', color: '#188038', fontWeight: 600 }}>Abierto · Cierra a las 20:00</p>
                  </div>

                  {/* Competitor - Map Item 2 */}
                  <div style={{ border: '1px solid #dfe1e5', borderRadius: '8px', padding: '0.85rem' }}>
                    <h5 style={{ margin: '0 0 0.25rem', fontSize: '0.95rem', color: '#202124', fontWeight: 500 }}>Limpiezas Express Madrid</h5>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: '#4d5156', margin: '0.25rem 0' }}>
                      <span style={{ fontWeight: 'bold' }}>4.4</span>
                      <span style={{ color: '#fbbc05' }}>★★★★☆</span>
                      <span>(31)</span>
                      <span>· Limpieza general</span>
                    </div>
                    <p style={{ margin: 0, fontSize: '0.8rem', color: '#4d5156' }}>📍 Alcobendas · 912 34 56 78</p>
                    <p style={{ margin: '0.25rem 0 0', fontSize: '0.78rem', color: '#188038' }}>Abierto · Cierra a las 19:00</p>
                  </div>

                  {/* Competitor - Map Item 3 */}
                  <div style={{ border: '1px solid #dfe1e5', borderRadius: '8px', padding: '0.85rem' }}>
                    <h5 style={{ margin: '0 0 0.25rem', fontSize: '0.95rem', color: '#202124', fontWeight: 500 }}>Multiservicios Hércules</h5>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: '#4d5156', margin: '0.25rem 0' }}>
                      <span style={{ fontWeight: 'bold' }}>4.1</span>
                      <span style={{ color: '#fbbc05' }}>★★★★☆</span>
                      <span>(12)</span>
                      <span>· Servicios integrales</span>
                    </div>
                    <p style={{ margin: 0, fontSize: '0.8rem', color: '#4d5156' }}>📍 Madrid centro · 913 21 09 87</p>
                    <p style={{ margin: '0.25rem 0 0', fontSize: '0.78rem', color: '#d93025' }}>Cerrado · Abre mañana 09:00</p>
                  </div>
                </div>

                {/* Right Side: Visual Map Mock */}
                <div style={{
                  width: '380px',
                  background: '#f8f9fa',
                  borderRadius: '8px',
                  border: '1px solid #dfe1e5',
                  overflow: 'hidden',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '350px'
                }}>
                  {/* Pure CSS Map Representation */}
                  <div style={{ position: 'absolute', inset: 0, opacity: 0.6, background: 'radial-gradient(circle at 50% 50%, transparent 20%, #ececec 21%, #ececec 22%, transparent 23%), linear-gradient(0deg, transparent 49%, #eaeaea 50%, #eaeaea 51%, transparent 52%), linear-gradient(90deg, transparent 49%, #eaeaea 50%, #eaeaea 51%, transparent 52%)', backgroundSize: '40px 40px, 120px 120px, 120px 120px' }} />
                  {/* Rivers / Parks */}
                  <div style={{ position: 'absolute', width: '100%', height: '35px', background: '#e3f2fd', top: '150px', transform: 'rotate(-15deg)', opacity: 0.8 }} />
                  <div style={{ position: 'absolute', width: '90px', height: '90px', borderRadius: '50%', background: '#e8f5e9', top: '40px', left: '30px', opacity: 0.7 }} />
                  {/* Pins */}
                  {/* Pin Briya */}
                  <div style={{ position: 'absolute', top: '120px', left: '190px', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 10 }}>
                    <div style={{ background: '#0284c7', color: '#fff', fontSize: '0.65rem', fontWeight: 'bold', padding: '2px 6px', borderRadius: '4px', whiteSpace: 'nowrap', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>Briya Clean</div>
                    <div style={{ width: '0', height: '0', borderLeft: '4px solid transparent', borderRight: '4px solid transparent', borderTop: '6px solid #0284c7' }} />
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ea4335', border: '2px solid #fff', marginTop: '-2px', boxShadow: '0 2px 4px rgba(0,0,0,0.3)' }} />
                  </div>
                  {/* Pin Comp 2 */}
                  <div style={{ position: 'absolute', top: '60px', left: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#70757a', border: '1.5px solid #fff', boxShadow: '0 2px 4px rgba(0,0,0,0.3)' }} />
                  </div>
                  {/* Pin Comp 3 */}
                  <div style={{ position: 'absolute', top: '240px', left: '260px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#70757a', border: '1.5px solid #fff', boxShadow: '0 2px 4px rgba(0,0,0,0.3)' }} />
                  </div>

                  <span style={{ fontSize: '0.8rem', color: '#70757a', zIndex: 2, background: 'rgba(255,255,255,0.9)', padding: '0.4rem 0.8rem', borderRadius: '16px', border: '1px solid #dfe1e5', fontWeight: 500 }}>Google Maps Mockup</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
