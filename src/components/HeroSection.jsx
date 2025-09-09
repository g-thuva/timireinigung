import React from 'react';
// Image paths in public directory
const logo = '/assets/Images/LogoPng.png';
const waterDrop = '/assets/Images/water-drop.png';
const heroImage = '/assets/Images/HeroSection-IMG02.png';

const HeroSection = () => {
  return (
    <section id="home" className="hero">
      <nav aria-label="Primary">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <ul className="nav-links">
          <li><a href="#home" className="active" aria-current="page">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#gallery">Gallery</a></li>
        </ul>

        <a href="#contact" className="contact-link-btn">
          <span>Contact Us</span>
          <i className="fas fa-phone" aria-hidden="true"></i>
        </a>

        
      </nav>

      <div className="hero-content">
        <div className="hero-text">
          <div className="we-give">
            <img src={waterDrop} alt="Water Drop Icon" className="water-drop-icon" />
            <span>We Give</span>
          </div>
          <h1>
            Expert <span className="highlight">Cleaning</span> Services, You Can Trust
          </h1>
          <p>We provide specialized and efficient cleaning solutions tailored to homes, offices, and commercial spaces.</p>

          <div className="cta-buttons">
            <button className="appointment-btn">Get an Appointment</button>
            <a className="services-btn" href="#services">Explore Services</a>
          </div>
        </div>

        <div className="hero-image">
          <img src={heroImage} alt="Cleaning Service" />
          <div className="tags">
            <span className="tag" id="tag1">
              <i className="fas fa-home"></i> Apartment Cleaning
            </span>
            <span className="tag" id="tag2">
              <i className="fas fa-utensils"></i> Restaurant Cleaning
            </span>
            <span className="tag" id="tag3">
              <i className="fas fa-trash-alt"></i> Waste Disposal
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
