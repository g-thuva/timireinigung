import React from 'react';

const ServicesSection = () => {

  return (
    <section id="services" className="services-section">
      <div className="container services-head">
        <div className="s-eyebrow">
          <i className="fas fa-brush" aria-hidden="true"></i>
          <span>OUR SERVICES</span>
        </div>
        <h2 className="s-title">We Always Provide The<br />Best Service</h2>
        <p className="s-lead">We offer a wide range of cleaning and maintenance services of all kinds. We are happy to provide professional advice.</p>
        <a href="#services" className="s-cta">
          Explore All
          <span className="s-cta__ico"><i className="fas fa-arrow-up-right"></i></span>
        </a>
      </div>

      <div className="services-cards" aria-label="Service cards">
        {/* Service 1 */}
        <div className="service-card">
          <div className="service-card-image">
            <img src="../public/assets/images/Service-IMG01.png" alt="Home Cleaning" />
          </div>
          <div className="service-card-content">
            <h3>Home Cleaning</h3>
            <p>While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services.</p>
            <a href="#contact" className="book-now-btn">
              Book Now
              <span className="btn-corner-ico"><i className="fas fa-external-link-alt" aria-hidden="true"></i></span>
            </a>
          </div>
        </div>

        {/* Service 2 */}
        <div className="service-card">
          <div className="service-card-image">
            <img src="../public/assets/images/Service-IMG02.png" alt="Office Cleaning" />
          </div>
          <div className="service-card-content">
            <h3>Office Cleaning</h3>
            <p>While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services.</p>
            <a href="#contact" className="book-now-btn">
              Book Now
              <span className="btn-corner-ico"><i className="fas fa-external-link-alt" aria-hidden="true"></i></span>
            </a>
          </div>
        </div>

        {/* Service 3 */}
        <div className="service-card">
          <div className="service-card-image">
            <img src="../public/assets/images/Service-IMG03.png" alt="Waste Disposal" />
          </div>
          <div className="service-card-content">
            <h3>Waste Disposal</h3>
            <p>While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services.</p>
            <a href="#contact" className="book-now-btn">
              Book Now
              <span className="btn-corner-ico"><i className="fas fa-external-link-alt" aria-hidden="true"></i></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
