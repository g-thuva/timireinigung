import React from "react";

const FooterSection = () => {

  return (
    <footer className="site-footer" id="footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <div className="brand-row">
            <img
              className="brand-logo"
              src="../public/assets/images/WhiteLogo-footer-.png"
              alt="Timireinigung logo"
            />
            <span className="brand-name">Timireinigung</span>
          </div>
          <p className="brand-blurb">
            Stay updated with our latest cleaning tips, service updates, and helpful articles on maintaining a spotless home.
          </p>
        </div>

        <div className="footer-col" role="group" aria-labelledby="footer-company">
          <h4 id="footer-company" className="col-title">Company</h4>
          <ul className="footer-links">
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#gallery">Gallery</a></li>
          </ul>
        </div>

        <div className="footer-col" role="group" aria-labelledby="footer-knowmore">
          <h4 id="footer-knowmore" className="col-title">Know More</h4>
          <ul className="footer-links">
            <li><a href="#support">Support</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms &amp; conditions</a></li>
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="footer-divider"></div>
      </div>

      <div className="container footer-bottom">
        <p>{new Date().getFullYear()} “<strong>Timireinigung</strong>” All Rights Received</p>
      </div>
    </footer>
  );
};

export default FooterSection;
