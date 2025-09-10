import React, { useEffect, useRef, useState } from 'react';

const reviews = [
  { author: 'Michael Cline', when: 'a year ago', rating: 5, text: 'An excellent and reliable service was provided at a very fair price. The final cleaning of the apartment was carried out without any complications and to my satisfaction. I am a very happy customer and would use the company again.' },
  { author: 'Mike Nater', when: '10 months ago', rating: 5, text: 'I am very satisfied with the Timi cleaning service! The limescale in my shower is gone! The staff were super friendly and professional. Totally uncomplicated and quick, I can only recommend it!' },
  { author: 'Björn Sirius Leemann', when: 'a year ago', rating: 5, text: 'Very reliable and helpful. I have used the services of Timi Reinigung GmbH several times and have always been completely satisfied! I highly recommend them.' },
  { author: 'Christian Christian', when: 'a year ago', rating: 5, text: 'Timi Cleaning is one of the best cleaning companies in the Schaffhausen region! I highly recommend it. Confident and reliable! All the workers are very nice. Top company 👍🏼👍🏼' },
  { author: 'Frank', when: 'a year ago', rating: 5, text: 'Timi cleaned the louvered roof on our terrace. The work was very clean and efficient, and we were extremely satisfied. We can happily recommend the company.' },
  { author: 'Silvia', when: 'a year ago', rating: 5, text: 'I highly recommend Timi Cleaning. They cleaned my windows and shutters in a short time and simply "tip-top." Professional, friendly, and efficient = SUPER I highly recommend Timi Cleaning. Thank you very much.' },
  { author: 'Lukas Weber', when: '3 years ago', rating: 5, text: 'Timi Cleaning was commissioned to carry out the construction cleaning at our single-family home. Their professionalism is evident, first and foremost, in the fact that the owner personally inspected the situation on site, and based on this, a quote was prepared. The work included the full range of services: construction cleaning, fitted wardrobes, kitchen, windows, bathrooms, wooden floors, and utility room. All work was completed to our complete satisfaction, and no damage was caused. The price/performance ratio was very fair; they work with professionals.' },
];

const Stars = ({ rating = 5 }) => (
  <div className="t-stars" aria-label={`${rating} out of 5 stars`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <i key={i} className={`fas fa-star${i < rating ? '' : ' is-off'}`} aria-hidden="true"></i>
    ))}
  </div>
);

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);
  const intervalRef = useRef(null);

  const next = () => setActive((i) => (i + 1) % reviews.length);
  const prev = () => setActive((i) => (i - 1 + reviews.length) % reviews.length);

  useEffect(() => {
    intervalRef.current = setInterval(next, 6000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const onUserNavigate = (dir) => {
    if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = setInterval(next, 6000); }
    dir === 'next' ? next() : prev();
  };

  const rev = reviews[active];

  return (
    <section id="testimonials" className="t-section">
      <div className="t-decor" aria-hidden="true">
        <i className="fas fa-quote-right t-quote-bg"></i>
      </div>

      <div className="t-wrap" style={{ position: 'relative' }}>
        <header className="t-center-header">
          <div className="t-eyebrow">
            <i className="fas fa-shield-alt" aria-hidden="true"></i>
            <span>TESTIMONIALS</span>
          </div>
          <h2 className="t-title">What Our Customers Say</h2>
          <p className="t-lead">One review at a time — focused, clear, and image‑free.</p>
        </header>

        <div className="t-carousel">
          <figure key={`${rev.author}-${active}`} className="t-card--single">
            <Stars rating={rev.rating} />
            <p className="t-name" style={{ margin: '10px 0 6px', fontWeight: 800 }}>{rev.author}</p>
            <p className="t-copy" style={{ margin: 0, color: '#556070', lineHeight: 1.6 }}>{rev.text}</p>
            <p style={{ margin: '10px 0 0', fontSize: '.92rem', color: '#8a93a0' }}>{rev.when}</p>
            <span className="t-quote" style={{ position: 'absolute', top: 14, right: 16, color: '#cdeefd' }}>
              <i className="fas fa-quote-right" aria-hidden="true"></i>
            </span>
          </figure>
        </div>

        <div className="t-controls">
          <button className="t-arrow t-arrow--ghost" aria-label="Previous" onClick={() => onUserNavigate('prev')}>
            <i className="fas fa-arrow-left" aria-hidden="true"></i>
          </button>
          <div className="t-dots" aria-label="Pagination">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => { setActive(i); if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = setInterval(next, 6000); } }}
                aria-label={`Go to review ${i + 1}`}
                className={`t-dot${i === active ? ' is-active' : ''}`}
              />
            ))}
          </div>
          <button className="t-arrow t-arrow--solid" aria-label="Next" onClick={() => onUserNavigate('next')}>
            <i className="fas fa-arrow-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
