import React from 'react';
import aboutImage from '../../public/assets/Images/AboutUsSection-IMG.png';

const AboutSection = () => {
  return (
    <section id="about" className="about-us">
      <div className="about-us-content">
        <div className="about-image">
          <img 
            src={aboutImage} 
            alt="Professional Cleaning Service" 
          />
        </div>
        <div className="about-content">
          <div className="about-header">
            <i className="fas fa-star about-icon"></i>
            <span>About Us</span>
          </div>
          <h2>Your Trusted Cleaning Partner From Beringen!</h2>
          <p>We are your reliable partner in Beringen for all types of cleaning. We have over 20 years of professional experience and can provide you with professional advice in all areas of cleaning. From apartment cleaning for a move, to building and maintenance cleaning, to office cleaning and garden maintenance, we offer everything.</p>
          <p>We work with above-average cleanliness and attach great importance to the quality of our work. To achieve the perfect result for you, we tailor our services to your individual needs and wishes.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
