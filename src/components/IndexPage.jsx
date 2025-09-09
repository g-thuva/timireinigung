import React from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import TestimonialsSection from './TestimonialsSection';
import GallerySection from './GallerySection';
import HoursSection from './HoursSection';
import ContactSection from './ContactSection';
import FooterSection from './FooterSection';
import '../assets/css/styles.css';

const IndexPage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <GallerySection />
      <HoursSection />
      <ContactSection />
      <FooterSection />
    </>
  );
};

export default IndexPage;
