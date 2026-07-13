export default function IntroSemSlide() {
  return (
    <section className="section section--light" id="sem-fundamentals">
      <div className="container" style={{ maxWidth: '1400px' }}>
        <div className="two-col" style={{ gap: '4rem', alignItems: 'center' }}>
          
          <div className="reveal-stagger">
            <p className="section-label">2. SEM</p>
            <h2 className="section-title" style={{ marginBottom: '1.5rem', lineHeight: 1.1 }}>
              ¿Qué es el SEM?
            </h2>
            <p className="section-body" style={{ marginBottom: '2.5rem', fontWeight: 500, fontSize: '0.95rem', lineHeight: 1.6 }}>
              <strong>“SEM”</strong> es aparecer en Google de forma inmediata pagando por anuncios. Permite posicionar BRIYA justo en el momento en que alguien busca un servicio de limpieza de exteriores con intención real de contratar. No hay que esperar meses: la visibilidad es garantizada desde el primer día de campaña.
            </p>
            
            <p className="section-body" style={{ marginBottom: '1.25rem', paddingLeft: '1.5rem', borderLeft: '3px solid #0284c7', fontSize: '1.05rem', lineHeight: 1.6 }}>
              <strong style={{ fontSize: '1.2rem', display: 'block', marginBottom: '0.4rem', color: '#0284c7' }}>SEM (Pago por Clic)</strong>
              Resultados obtenidos pagando por aparecer en los primeros puestos de Google. Solo se paga cuando alguien hace clic en el anuncio. Ideal para captar clientes de forma inmediata, controlar el presupuesto al detalle y activar campañas en momentos clave.
            </p>

            <div style={{ background: 'rgba(234,179,8,0.08)', border: '1px solid rgba(234,179,8,0.3)', borderRadius: '10px', padding: '0.9rem 1.1rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start', marginBottom: '0.85rem' }}>
              <span style={{ fontSize: '1.2rem', lineHeight: 1 }}>⚡</span>
              <div>
                <div style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#b45309', marginBottom: '0.25rem' }}>Inmediato — pero solo mientras pagas</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-dark)', lineHeight: 1.5, opacity: 0.85 }}>
                  Si pagas, apareces <strong>hoy mismo</strong> en los primeros puestos. Si dejas de pagar, <strong>dejas de aparecer</strong>: el SEM no construye posicionamiento propio, lo alquila.
                </div>
              </div>
            </div>

            <div style={{ background: 'rgba(2,132,199,0.07)', border: '1px solid rgba(2,132,199,0.2)', borderRadius: '10px', padding: '0.9rem 1.1rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '1.2rem', lineHeight: 1 }}>🔄</span>
              <div>
                <div style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0284c7', marginBottom: '0.25rem' }}>El juego SEO + SEM</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-dark)', lineHeight: 1.5, opacity: 0.85 }}>
                  El SEM se activa <strong>al principio</strong> para captar leads desde el día 1, mientras el SEO va construyendo el posicionamiento de la marca. Con el tiempo el SEO toma el relevo y la dependencia del pago <strong>baja</strong>.
                </div>
              </div>
            </div>
          </div>
 
          <div className="reveal-stagger" style={{ flex: 1, padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {/* ── Card 1: SEM Result ── */}
            <div style={{ background: '#202124', borderRadius: '12px', padding: '1.25rem 1.5rem', boxShadow: '0 4px 12px rgba(0,0,0,0.2)', fontFamily: 'arial, sans-serif', border: '1px solid #3c4043', position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <span style={{ fontWeight: 800, color: '#e8eaed', fontSize: '1.1rem', letterSpacing: '0.5px' }}>Sponsored</span> 
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.6rem' }}>
                <div style={{ width: '28px', height: '28px', background: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '4px' }}>
                  <img src="/logo-original.png" alt="Briya" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.875rem', color: '#e8eaed', fontWeight: '400', letterSpacing: '0.1px', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    Briya Clean
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#9aa0a6', marginTop: '1px' }}>https://briyaclean.com.au</span>
                </div>
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#8ab4f8', fontWeight: '400', marginBottom: '0.4rem', cursor: 'pointer', lineHeight: 1.3 }}>
                Briya — Pressure Washing &amp; Soft-Wash Specialists
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#bdc1c6', lineHeight: 1.58 }}>
                SAFE AND EFFECTIVE SOFT-WASH FOR YOUR HOME. WE REMOVE MOULD, DIRT AND STAINS INSTANTLY. GET A FREE ONLINE QUOTE TODAY.
              </p>
            </div>
          </div>
 
        </div>
      </div>
    </section>
  )
}
