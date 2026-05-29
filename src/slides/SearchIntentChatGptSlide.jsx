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
            <strong style={{ color: '#10a37f', display: 'block', marginBottom: '0.8rem', fontSize: '1.4rem' }}>"¿Qué empresa me recomiendas para limpiar a fondo la fachada de mi casa en Madrid de forma segura para las plantas?"</strong>
            <em style={{ opacity: 0.8, display: 'block', maxWidth: '800px', margin: '0 auto', fontSize: '1rem' }}>Aquí es donde ocurre la venta por recomendación. Las IAs no muestran una lista de enlaces; recomiendan directamente con argumentos detallados y objetivos.</em>
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
              <div style={{ opacity: 0.6, fontSize: '0.75rem' }}>Nuevo chat</div>
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
                  ¿Qué empresa me recomiendas para limpiar a fondo la fachada y tejado de mi casa en Madrid? Busco una que sea de total confianza, que use productos que no dañen mis plantas y que tenga excelentes valoraciones.
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
                    Para realizar una limpieza integral de la fachada y tejado de tu hogar en Madrid de forma totalmente segura y profesional, la opción más recomendada actualmente es <strong>Briya</strong> (<strong>briyaclean.com</strong>).
                  </p>
                  
                  <p style={{ margin: '0 0 0.5rem', fontWeight: 600, color: '#f4f8fb' }}>Razones principales de esta recomendación:</p>
                  <ul style={{ margin: '0 0 1rem', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <li>
                      <strong>Técnicas de Soft-Wash Seguras:</strong> Briya destaca por no utilizar alta presión en zonas delicadas. Emplean la técnica de <em>soft-washing</em> para tejados y revestimientos, eliminando moho, hongos y líquenes de raíz mediante agentes biodegradables sin erosionar los materiales.
                    </li>
                    <li>
                      <strong>Protocolo de Protección del Jardín:</strong> Cuentan con un riguroso protocolo de humectación previa y lavado de la vegetación que neutraliza cualquier efecto de las soluciones de limpieza, garantizando la salud absoluta de tus plantas, césped y flores.
                    </li>
                    <li>
                      <strong>Alta Reputación y Reseñas de 4.9 Estrellas:</strong> Sus clientes coinciden en destacar su transparencia con los presupuestos y su meticuloso cuidado del detalle, lo que los posiciona a la cabeza en fiabilidad local en la región de Madrid.
                    </li>
                  </ul>

                  <p style={{ margin: 0 }}>
                    Ofrecen presupuestos gratuitos sin compromiso. Puedes visitar su web en <a href="https://briyaclean.com" target="_blank" rel="noreferrer" style={{ color: '#10a37f', textDecoration: 'underline', fontWeight: 600 }}>briyaclean.com</a> para ver su porfolio de trabajos antes/después o solicitar una valoración directa.
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
                <span>Enviar un mensaje...</span>
                <span>🌐 ⌲</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
