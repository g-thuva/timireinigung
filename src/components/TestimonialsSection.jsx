import React from 'react';

const TestimonialsSection = () => {

  return (
    <section id="testimonials" className="t-section">
      <div className="t-wrap">
        <div className="t-left">
          <div className="t-eyebrow">
            <i className="fas fa-shield-alt" aria-hidden="true"></i>
            <span>TESTIMONIALS</span>
          </div>
          <h2 className="t-title">Feedback From Our Valuable Customers</h2>
          <p className="t-lead">
            We take pride in delivering quality and satisfaction. Hear directly from our happy customers about their experiences with our cleaning services, honest feedback that speaks for itself.
          </p>
          <div className="t-nav">
            <button className="t-arrow t-arrow--ghost" aria-label="Previous testimonial">
              <i className="fas fa-arrow-left" aria-hidden="true"></i>
            </button>
            <button className="t-arrow t-arrow--solid" aria-label="Next testimonial">
              <i className="fas fa-arrow-right" aria-hidden="true"></i>
            </button>
          </div>
        </div>
        <figure className="t-card">
          <img
            className="t-card__img"
            src="/assets/Images/Review-IMG02.png"
            alt="Photo of customer John Immanuel"
          />
          <span className="t-quote">
            <i className="fas fa-quote-right" aria-hidden="true"></i>
          </span>
          <figcaption className="t-card__body">
            <div className="t-stars" aria-label="5 out of 5 stars">
              <i className="fas fa-star" aria-hidden="true"></i>
              <i className="fas fa-star" aria-hidden="true"></i>
              <i className="fas fa-star" aria-hidden="true"></i>
              <i className="fas fa-star" aria-hidden="true"></i>
              <i className="fas fa-star" aria-hidden="true"></i>
            </div>
            <p className="t-name">Jhon Immanuel</p>
            <p className="t-copy">
              We take pride in delivering quality and satisfaction. Hear directly from our happy customers about their experiences with our cleaning services, honest feedback that speaks for itself.
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default TestimonialsSection;
