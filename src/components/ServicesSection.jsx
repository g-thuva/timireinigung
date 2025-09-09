import React from 'react';
// Import service images
import serviceImg1 from '../../public/assets/Images/Service-IMG01.png';
import serviceImg2 from '../../public/assets/Images/Service-IMG02.png';
import serviceImg3 from '../../public/assets/Images/Service-IMG03.png';

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
            <img src={serviceImg1} alt="Home Cleaning" />
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
            <img src={serviceImg2} alt="Office Cleaning" />
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
            <img src={serviceImg3} alt="Window Cleaning" />
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
