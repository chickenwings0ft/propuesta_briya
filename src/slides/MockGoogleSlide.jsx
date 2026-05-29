export default function MockGoogleSlide() {
  return (
    <section className="section" style={{ background: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column', color: '#202124', fontFamily: 'arial, sans-serif' }} id="mockup-serp">
      
      {/* Fake Google Header */}
      <header className="reveal" style={{ padding: '1.5rem 2rem', borderBottom: '1px solid #dfe1e5', display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <div style={{ fontSize: '1.8rem', fontWeight: 800, letterSpacing: '-1px', color: '#4285f4' }}>
          G<span style={{ color: '#ea4335' }}>o</span><span style={{ color: '#fbbc04' }}>o</span>g<span style={{ color: '#34a853' }}>l</span><span style={{ color: '#ea4335' }}>e</span>
        </div>
        <div style={{ flex: 1, maxWidth: '690px', background: '#fff', border: '1px solid #dfe1e5', borderRadius: '24px', padding: '0.8rem 1.5rem', display: 'flex', alignItems: 'center', boxShadow: '0 1px 6px rgba(32,33,36,0.28)' }}>
          <span style={{ color: '#202124', fontSize: '1.1rem', flex: 1 }}>exterior cleaning gold coast</span>
          <div style={{ display: 'flex', gap: '1rem', color: '#4285f4' }}>
            <span style={{ fontSize: '1.2rem', cursor: 'pointer' }}>✖</span>
            <span style={{ borderLeft: '1px solid #dfe1e5', paddingLeft: '1rem', cursor: 'pointer' }}>🔍</span>
          </div>
        </div>
      </header>

      {/* Search Results Body */}
      <div className="container reveal" style={{ maxWidth: '1400px', margin: '0 auto', flex: 1, padding: '2rem 1rem' }}>
        
        {/* Results Stats */}
        <p style={{ color: '#70757a', fontSize: '0.85rem', marginBottom: '2rem' }}>Cerca de 620.000 resultados (0,28 segundos)</p>

        <div style={{ maxWidth: '650px' }}>

          {/* AI Overview Module */}
          <div className="reveal-stagger" style={{
            borderRadius: '12px', padding: '2px',
            background: 'linear-gradient(135deg, #fff 0%, #f0f7ff 100%)',
            marginBottom: '40px', boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
            position: 'relative', overflow: 'hidden'
          }}>
            <div style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(240,244,249,0.5) 100%)',
              borderRadius: '12px', padding: '20px'
            }}>
              <div style={{
                display: 'flex', alignItems: 'center', fontFamily: '"Google Sans", arial, sans-serif',
                fontWeight: 500, fontSize: '15px', color: '#1f1f1f', marginBottom: '12px'
              }}>
                <svg className="sparkle-icon" viewBox="0 0 24 24" width="24" height="24" style={{ marginRight: '10px' }}>
                  <path fill="#4285f4" d="M19 8l-1-2.2-2.2-1 2.2-1L19 1.6l1 2.2 2.2 1-2.2 1L19 8zm-8 10l-2.4-5.6L3 10l5.6-2.4L11 2l2.4 5.6L19 10l-5.6 2.4L11 18zm8 6l-1-2.2-2.2-1 2.2-1L19 17.6l1 2.2 2.2 1-2.2 1L19 24z"/>
                </svg>
                AI Overview
              </div>
              <p style={{ fontSize: '16px', lineHeight: 1.6, color: '#3c4043', marginBottom: '16px', margin: 0 }}>
                For exterior cleaning in the Gold Coast, professionals typically offer services such as soft-wash roof cleaning, pressure washing for driveways, and gentle facade washing. Popular choices highlight eco-friendly products and protection of surrounding gardens.
              </p>
              <ul style={{ margin: '16px 0 0 0', paddingLeft: '20px', fontSize: '16px', lineHeight: 1.6, color: '#3c4043' }}>
                <li style={{ marginBottom: '8px' }}><strong>Briya Clean:</strong> Highly rated for soft-washing and pressure cleaning.</li>
                <li style={{ marginBottom: '8px' }}><strong>Local Providers:</strong> Average cost ranges from $150 to $450 depending on house size.</li>
              </ul>
              
              <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
                <button style={{
                  background: '#f1f3f4', border: 'none', borderRadius: '100px', padding: '10px 24px',
                  fontSize: '14px', fontWeight: 500, color: '#1f1f1f', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', gap: '8px', width: '100%', justifyContent: 'space-between'
                }}>
                  Show more
                  <span style={{
                    width: '8px', height: '8px', border: 'solid #5f6368', borderWidth: '0 2px 2px 0',
                    display: 'inline-block', padding: '3px', transform: 'rotate(45deg)', marginBottom: '4px'
                  }}></span>
                </button>
              </div>
            </div>
          </div>
          

          {/* 1. SEM Result (Native Style) */}
          <div className="reveal-stagger" style={{ marginBottom: '2.5rem', position: 'relative' }}>
            <div style={{ position: 'absolute', left: '-55px', top: '2px', background: '#eab308', color: '#fff', padding: '3px 6px', borderRadius: '4px', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '1px' }}>SEM</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <span style={{ fontWeight: 800, color: '#202124', fontSize: '1.1rem', letterSpacing: '0.5px' }}>Sponsored</span> 
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.5rem' }}>
              <div style={{ width: '28px', height: '28px', background: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '4px', border: '1px solid #eee' }}>
                <img src="/logo-original.png" alt="Briya" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ lineHeight: 1.2 }}>
                <p style={{ fontSize: '0.85rem', color: '#202124', margin: 0 }}>Briya Clean</p>
                <p style={{ fontSize: '0.8rem', color: '#4d5156', margin: 0 }}>https://briyaclean.com.au</p>
              </div>
            </div>
            <h3 style={{ fontSize: '1.25rem', color: '#1a0dab', fontWeight: 400, marginBottom: '0.4rem', textDecoration: 'none' }}>
              Briya — Pressure Washing &amp; Soft-Wash Specialists
            </h3>
            <p style={{ fontSize: '0.875rem', color: '#4d5156', lineHeight: 1.58, marginTop: '0.3rem' }}>
              SAFE AND EFFECTIVE SOFT-WASH FOR YOUR HOME. WE REMOVE MOULD, DIRT AND STAINS INSTANTLY. GET A FREE ONLINE QUOTE TODAY.
            </p>
          </div>

          {/* 2. SEO Rich Snippet Result (Native Style) */}
          <div className="reveal-stagger" style={{ marginBottom: '2.5rem', position: 'relative' }}>
            <div style={{ position: 'absolute', left: '-55px', top: '2px', background: '#0284c7', color: '#fff', padding: '3px 6px', borderRadius: '4px', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '1px' }}>SEO</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.5rem' }}>
              <div style={{ width: '28px', height: '28px', background: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '4px', border: '1px solid #eee' }}>
                <img src="/logo-original.png" alt="Briya" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ lineHeight: 1.2 }}>
                <p style={{ fontSize: '0.85rem', color: '#202124', margin: 0 }}>Briya Clean</p>
                <p style={{ fontSize: '0.8rem', color: '#4d5156', margin: 0 }}>https://briyaclean.com.au <span style={{ color: '#5f6368' }}>› gold-coast</span></p>
              </div>
            </div>
            <h3 style={{ fontSize: '1.25rem', color: '#1a0dab', fontWeight: 400, marginBottom: '0.3rem', textDecoration: 'none' }}>
              Briya — Trusted Exterior Cleaning in Gold Coast
            </h3>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#4d5156', marginBottom: '0.5rem' }}>
              <span style={{ color: '#fbbc04', letterSpacing: '2px', fontSize: '1rem' }}>★★★★★</span>
              <span style={{ fontWeight: 'bold' }}>4.9</span>
              <span>· 84 reviews</span>
            </div>
            
            <p style={{ fontSize: '0.875rem', color: '#70757a', marginBottom: '0.5rem' }}>
              <span style={{ color: '#188038', fontWeight: 'bold' }}>Open now</span> · Exterior Cleaning · Gold Coast, QLD
            </p>
            
            <p style={{ fontSize: '0.875rem', color: '#4d5156', lineHeight: 1.58 }}>
              Specialists in soft-wash roof and house washing, pressure cleaning and exterior restoration across Gold Coast, QLD. Eco-friendly. Free quote.
            </p>
          </div>

          {/* 3. Directory Generic (Hipages) */}
          <div className="reveal-stagger" style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.5rem' }}>
              <div style={{ width: '28px', height: '28px', background: '#ff7300', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#fff', fontSize: '0.8rem' }}>
                H
              </div>
              <div style={{ lineHeight: 1.2 }}>
                <p style={{ fontSize: '0.85rem', color: '#202124', margin: 0 }}>hipages</p>
                <p style={{ fontSize: '0.8rem', color: '#4d5156', margin: 0 }}>https://hipages.com.au <span style={{ color: '#5f6368' }}>› quotes › exterior-cleaning</span></p>
              </div>
            </div>
            <h3 style={{ fontSize: '1.25rem', color: '#1a0dab', fontWeight: 400, marginBottom: '0.3rem', textDecoration: 'none' }}>
              Top 10 Best Exterior Cleaning Companies in Gold Coast
            </h3>
            
            <p style={{ fontSize: '0.875rem', color: '#4d5156', lineHeight: 1.58 }}>
              Compare free quotes for house and roof exterior cleaning in Gold Coast. Verified local businesses with real customer reviews.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
