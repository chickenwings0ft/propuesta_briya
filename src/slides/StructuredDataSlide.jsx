export default function StructuredDataSlide() {
  return (
    <section className="section section--dark" id="structured-data">
      <div className="container">
        <div className="two-col--40-60 two-col" style={{ alignItems: 'center' }}>
          <div>
            <p className="section-label reveal">03 — Datos Estructurados</p>
            <h2 className="section-title reveal">
              Habla el<br />
              idioma de<br />
              Google.
            </h2>
            <p className="section-body reveal">
              Los datos estructurados son un lenguaje invisible que le dice a Google 
              exactamente qué eres, dónde estás, tus valoraciones y qué servicios ofreces.
            </p>

            <div className="highlight-bar reveal" style={{ marginTop: '2rem' }}>
              <div className="highlight-bar__accent"></div>
              <div className="highlight-bar__content">
                <div className="highlight-bar__title">Rich Snippets</div>
                <div className="highlight-bar__text">
                  Resultados enriquecidos en Google: estrellas de valoración, servicios concretos 
                  y preguntas frecuentes visibles de inmediato en el buscador.
                </div>
              </div>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <div className="badge badge--green" style={{ marginBottom: '0.5rem', marginRight: '0.5rem' }}>ProfessionalService Schema</div>
              <div className="badge badge--outline" style={{ marginBottom: '0.5rem', marginRight: '0.5rem' }}>LocalBusiness</div>
              <div className="badge badge--outline" style={{ marginBottom: '0.5rem', marginRight: '0.5rem' }}>FAQPage</div>
              <div className="badge badge--outline" style={{ marginBottom: '0.5rem' }}>Review</div>
            </div>
          </div>

          <div className="reveal">
            <p className="label" style={{ marginBottom: '1rem' }}>Cómo apareces hoy</p>
            <div className="snippet-preview" style={{ marginBottom: '1.5rem', opacity: 0.6, filter: 'grayscale(0.4)' }}>
              <div className="snippet-preview__url">briyaclean.com.au</div>
              <div className="snippet-preview__title">Briya Clean — Cleaning</div>
              <div className="snippet-preview__desc">Exterior cleaning services in Gold Coast.</div>
            </div>

            <p className="label" style={{ marginBottom: '1rem', color: 'var(--color-cream)' }}>Tras optimización web</p>
            <div className="snippet-preview">
              <div className="snippet-preview__url">briyaclean.com.au › gold-coast</div>
              <div className="snippet-preview__title">Briya — Trusted Exterior Cleaning in Gold Coast</div>
              <div className="snippet-preview__stars">★★★★★ 4.9 · 84 reviews</div>
              <div className="snippet-preview__extra">Open now · Services · Gold Coast, QLD</div>
              <div className="snippet-preview__desc">Specialists in facade and roof cleaning with safe Soft-Wash technique and pressure washing. Restore your home's beauty while protecting your garden.</div>
            </div>

            <p className="label" style={{ marginTop: '1.5rem', marginBottom: '0.75rem' }}>JSON-LD que implementamos</p>
            <div className="code-block">
              <span className="comment">{'// Script de marcado en el <head>'}</span><br/>
              {'{'}<br/>
              &nbsp;&nbsp;<span className="key">"@context"</span>: <span className="val">"https://schema.org"</span>,<br/>
              &nbsp;&nbsp;<span className="key">"@type"</span>: <span className="val">"ProfessionalService"</span>,<br/>
              &nbsp;&nbsp;<span className="key">"name"</span>: <span className="val">"Briya Clean"</span>,<br/>
              &nbsp;&nbsp;<span className="key">"areaServed"</span>: <span className="val">"Gold Coast, QLD"</span>,<br/>
              &nbsp;&nbsp;<span className="key">"priceRange"</span>: <span className="val">"$$"</span>,<br/>
              &nbsp;&nbsp;<span className="key">"aggregateRating"</span>: {'{'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="key">"ratingValue"</span>: <span className="val">"4.9"</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="key">"reviewCount"</span>: <span className="val">"84"</span><br/>
              &nbsp;&nbsp;{'}'}<br/>
              {'}'}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
