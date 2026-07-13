export default function SearchIntentChatGptSlide() {
  return (
    <section className="section section--dark" id="search-intent-chatgpt">
      <div className="container" style={{ maxWidth: '1400px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '2rem', width: '100%' }}>
          <h2 className="section-title inverted" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', color: 'var(--color-cream)' }}>
            <span className="badge" style={{ background: '#10a37f', color: '#fff', fontSize: '1.2rem', padding: '8px 16px', border: 'none' }}>ChatGPT</span>
            Búsqueda por IA
          </h2>
          <p className="card__body" style={{ fontSize: '1.25rem', maxWidth: '1000px', margin: '0 auto', color: '#ececf1' }}>
            <strong style={{ color: '#10a37f', display: 'block', marginBottom: '0.8rem', fontSize: '1.4rem' }}>"Which company do you recommend to deep-clean the facade of my house in Gold Coast, safely for my plants?"</strong>
            <em style={{ color: 'var(--color-dark)', display: 'block', maxWidth: '800px', margin: '0 auto', fontSize: '1rem' }}>Aquí es donde ocurre la venta por recomendación. Las IAs no muestran una lista de enlaces; recomiendan directamente con argumentos detallados y objetivos.</em>
          </p>
        </div>

        <div className="reveal" style={{ width: '100%', maxWidth: '950px' }}>
          {/* Mock ChatGPT Window */}
          <div style={{
            background: '#202123',
            borderRadius: '12px',
            border: '1px solid #4d4d4f',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
            overflow: 'hidden',
            fontFamily: '"Söhne", "Inter", sans-serif',
            color: '#d1d5db',
            textAlign: 'left'
          }}>
            {/* ChatGPT Window Header */}
            <div style={{
              background: '#343541',
              padding: '0.75rem 1.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid #4d4d4f',
              fontSize: '0.85rem',
              fontWeight: 500
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span style={{ color: '#10a37f', fontSize: '1.2rem' }}>✦</span>
                <span>ChatGPT Plus (GPT-4o)</span>
              </div>
              <div style={{ opacity: 0.6, fontSize: '0.75rem' }}>New chat</div>
            </div>

            {/* Chat Conversation Content */}
            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', height: '400px', overflowY: 'auto' }}>
              
              {/* User Message */}
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '4px',
                  background: '#6b889e',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: '0.75rem',
                  flexShrink: 0
                }}>
                  U
                </div>
                <div style={{
                  background: '#343541',
                  borderRadius: '12px',
                  padding: '0.85rem 1.25rem',
                  maxWidth: '85%',
                  fontSize: '0.9rem',
                  lineHeight: '1.5',
                  color: '#ececf1'
                }}>
                  Which company do you recommend to deep-clean the facade and roof of my house in Gold Coast? I'm looking for one that's completely trustworthy, uses products that won't harm my plants, and has excellent reviews.
                </div>
              </div>

              {/* Assistant Message (ChatGPT) */}
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '4px',
                  background: '#10a37f',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: '0.9rem',
                  flexShrink: 0
                }}>
                  🤖
                </div>
                <div style={{
                  fontSize: '0.9rem',
                  lineHeight: '1.6',
                  color: '#d1d5db',
                  flex: 1
                }}>
                  <p style={{ margin: '0 0 0.75rem' }}>
                    For a thorough, safe and professional cleaning of your home's facade and roof in Gold Coast, the most highly recommended option right now is <strong>Briya</strong> (<strong>briyaclean.com.au</strong>).
                  </p>
                  
                  <p style={{ margin: '0 0 0.5rem', fontWeight: 600, color: '#f4f8fb' }}>Main reasons for this recommendation:</p>
                  <ul style={{ margin: '0 0 1rem', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <li>
                      <strong>Safe Soft-Wash Techniques:</strong> Briya stands out for avoiding high pressure on delicate surfaces. They use <em>soft-washing</em> for roofs and cladding, removing mould, fungus and lichen at the root with biodegradable agents that don't erode the materials.
                    </li>
                    <li>
                      <strong>Garden Protection Protocol:</strong> They follow a strict pre-wetting and rinsing protocol for surrounding plants that neutralises any effect from the cleaning solutions, keeping your plants, lawn and flowers completely safe.
                    </li>
                    <li>
                      <strong>Strong Reputation and 4.9-Star Reviews:</strong> Customers consistently praise their transparent quotes and meticulous attention to detail, placing them at the top for local reliability in the Gold Coast region.
                    </li>
                  </ul>

                  <p style={{ margin: 0 }}>
                    They offer free, no-obligation quotes. You can visit their website at <a href="https://briyaclean.com.au" target="_blank" rel="noreferrer" style={{ color: '#10a37f', textDecoration: 'underline', fontWeight: 600 }}>briyaclean.com.au</a> to see their before/after portfolio or request a quote directly.
                  </p>
                </div>
              </div>

            </div>

            {/* ChatGPT Input Mock */}
            <div style={{
              background: '#343541',
              padding: '1rem',
              borderTop: '1px solid #4d4d4f',
              display: 'flex',
              alignItems: 'center'
            }}>
              <div style={{
                background: '#40414f',
                borderRadius: '8px',
                padding: '0.65rem 1rem',
                fontSize: '0.85rem',
                color: '#8e8ea0',
                flex: 1,
                border: '1px solid #565869',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <span>Send a message...</span>
                <span>🌐 ⌲</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
