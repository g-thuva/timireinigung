import React from 'react';
// Import gallery images
import img01 from '../../public/assets/Images/Gallery-IMG01.png';
import img02 from '../../public/assets/Images/Gallery-IMG02.png';
import img03 from '../../public/assets/Images/Gallery-IMG03.png';
import img04 from '../../public/assets/Images/Gallery-IMG04.png';
import img05 from '../../public/assets/Images/Gallery-IMG05.png';
import img06 from '../../public/assets/Images/Gallery-IMG06.png';

const GallerySection = () => {

  return (
    <section id="gallery" className="gallery">
      <div className="container g-head">
        <div className="g-eyebrow">
          <i className="far fa-images" aria-hidden="true"></i>
          <span>Gallery</span>
        </div>
        <h2 className="g-title">Captured From Our Side</h2>
        <p className="g-subtitle">Real moments from our journeys — drivers, customers, and the road between.</p>
      </div>
      <div className="g-row g-row--rtl">
        <div className="g-track">
          <figure className="g-item">
            <img src={img01} alt="Team member in company van" loading="lazy" />
          </figure>
          <figure className="g-item">
            <img src={img02} alt="Floor polishing machine" loading="lazy" />
          </figure>
          <figure className="g-item">
            <img src={img03} alt="Construction dust cleaning" loading="lazy" />
          </figure>
        </div>
      </div>
      <div className="g-row g-row--ltr">
        <div className="g-track">
          <figure className="g-item">
            <img src={img04} alt="Garden maintenance" loading="lazy" />
          </figure>
          <figure className="g-item">
            <img src={img05} alt="Kitchen and tiles cleaning" loading="lazy" />
          </figure>
          <figure className="g-item">
            <img src={img06} alt="Company fleet near job site" loading="lazy" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
