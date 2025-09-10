import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const services = [
  { title: 'Apartment cleaning', description: 'Thorough cleaning of living spaces, kitchens, bathrooms, and common areas.', icon: 'fa-home' },
  { title: 'Disposals', description: 'Responsible collection and disposal of household and commercial waste.', icon: 'fa-dumpster' },
  { title: 'Industrial cleaning', description: 'Heavy-duty cleaning for industrial sites with safety-focused procedures.', icon: 'fa-industry' },
  { title: 'Building cleaning', description: 'Exterior and interior building cleaning to maintain a pristine appearance.', icon: 'fa-building' },
  { title: 'High-pressure cleaning', description: 'Power washing for stubborn dirt on facades, pavements, and outdoor areas.', icon: 'fa-water' },
  { title: 'Maintenance cleaning', description: 'Scheduled recurring cleaning to keep spaces consistently spotless.', icon: 'fa-sync-alt' },
  { title: 'Moving cleaning', description: 'End-of-lease deep cleaning to meet handover requirements and inspections.', icon: 'fa-truck-loading' },
  { title: 'Window cleaning', description: 'Streak-free cleaning for windows, frames, and glass surfaces.', icon: 'fa-window-restore' },
  { title: 'Carpet cleaning', description: 'Deep extraction and stain treatment for carpets and rugs.', icon: 'fa-rug' },
  { title: 'Construction cleaning', description: 'Post-construction cleanup removing dust, debris, and residues.', icon: 'fa-hard-hat' },
  { title: 'Office cleaning', description: 'Professional cleaning for offices, meeting rooms, and reception areas.', icon: 'fa-briefcase' },
  { title: 'Property maintenance', description: 'Upkeep services for common areas and building infrastructure.', icon: 'fa-tools' },
  { title: 'Garden maintenance', description: 'Lawn care, trimming, and general garden upkeep for tidy outdoor spaces.', icon: 'fa-leaf' },
  { title: 'Catering cleaning', description: 'Hygienic cleaning for kitchens and food-service areas to meet standards.', icon: 'fa-utensils' },
];

const ServicesPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="services-nav" style={{ position: 'sticky', top: 0, zIndex: 10, background: '#ffffffcc', backdropFilter: 'saturate(120%) blur(6px)' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0' }}>
          <button onClick={() => navigate(-1)} className="services-btn" style={{ border: '2px solid #20ade5', background: 'transparent', color: '#20ade5', borderRadius: 12, height: 40, padding: '0 14px', fontWeight: 700, cursor: 'pointer' }}>
            ← Back
          </button>
          <ul className="nav-links" style={{ display: 'flex', listStyle: 'none', gap: 18, margin: 0, padding: 0 }}>
            <li><Link to="/" style={{ textDecoration: 'none', color: '#0f172a', fontWeight: 600 }}>Home</Link></li>
            <li><Link to="/services" style={{ textDecoration: 'none', color: '#20ade5', fontWeight: 700 }}>Services</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero header */}
      <header className="container" style={{ padding: '56px 0 28px' }}>
        <div className="s-eyebrow">
          <i className="fas fa-list" aria-hidden="true"></i>
          <span>Our Services</span>
        </div>
        <h1 className="s-title" style={{ marginTop: 8 }}>Expert Cleaning & Maintenance Solutions</h1>
        <p className="s-lead" style={{ margin: 0 }}>Reliable, detail‑oriented, and tailored to homes, offices, and commercial spaces.</p>
      </header>

      {/* Benefits strip */}
      <section className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: 12, marginBottom: 18 }}>
        <div style={{ background: '#e6f7ff', border: '1px solid #cdeefd', borderRadius: 10, padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
          <i className="fas fa-check-circle" style={{ color: '#159ed2' }}></i>
          <span style={{ fontWeight: 700, color: '#0f172a' }}>Trusted professionals</span>
        </div>
        <div style={{ background: '#e6f7ff', border: '1px solid #cdeefd', borderRadius: 10, padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
          <i className="fas fa-broom" style={{ color: '#159ed2' }}></i>
          <span style={{ fontWeight: 700, color: '#0f172a' }}>Tailored to your needs</span>
        </div>
        <div style={{ background: '#e6f7ff', border: '1px solid #cdeefd', borderRadius: 10, padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
          <i className="fas fa-clock" style={{ color: '#159ed2' }}></i>
          <span style={{ fontWeight: 700, color: '#0f172a' }}>Flexible scheduling</span>
        </div>
      </section>

      {/* Services grid */}
      <main className="services-page container" style={{ padding: '10px 0 60px' }}>
        <section className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '18px' }}>
          {services.map((svc) => (
            <article
              key={svc.title}
              className="service-tile"
              style={{
                background: '#fff',
                border: '1px solid #e7ebf0',
                borderRadius: 16,
                padding: '18px 18px',
                boxShadow: '0 10px 30px rgba(15,23,42,.06)',
                transition: 'transform .15s ease, box-shadow .2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 18px 42px rgba(15,23,42,.12)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 10px 30px rgba(15,23,42,.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                <span style={{ display: 'inline-grid', placeItems: 'center', width: 36, height: 36, borderRadius: 10, background: '#e7f6fd', color: '#159ed2' }}>
                  <i className={`fas ${svc.icon}`} aria-hidden="true"></i>
                </span>
                <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{svc.title}</h3>
              </div>
              <p style={{ margin: 0, color: '#556070', fontSize: '.95rem', lineHeight: 1.6 }}>{svc.description}</p>
            </article>
          ))}
        </section>

        {/* CTA panel */}
        <section className="container" style={{ marginTop: 36 }}>
          <div style={{
            background: 'linear-gradient(135deg, #20ade5, #159ed2)',
            borderRadius: 16,
            padding: '20px 18px',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 14,
            boxShadow: '0 18px 48px rgba(32,173,229,.25)'
          }}>
            <div>
              <h3 style={{ margin: 0, fontWeight: 800 }}>Need a tailored cleaning plan?</h3>
              <p style={{ margin: '6px 0 0', opacity: .95 }}>Tell us about your space and schedule. We’ll respond quickly.</p>
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <a href="tel:+49792507626" className="btn btn--ghost" style={{ background: 'transparent', borderColor: 'rgba(255,255,255,.85)', color: '#fff' }}>
                <i className="fas fa-phone" style={{ marginRight: 8 }}></i> Call Now
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ServicesPage;