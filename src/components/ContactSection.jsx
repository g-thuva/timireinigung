import React from "react";
import contactImage from '/assets/Images/ContactUs-IMG.png';

const ContactSection = () => {

  return (
    <section id="contact" className="contact">
      <div className="container contact__head">
        <div className="eyebrow">
          <i className="far fa-user-circle" aria-hidden="true"></i>
          <span>Contact Us</span>
        </div>
        <h2 className="contact__title">Get In Touch</h2>
        <p className="contact__lead">Got a mess? Let us know! Choose a time from our schedule and we’ll be there for a quick and clean fix.</p>

        <div className="chips">
          <div className="chip">
            <span className="chip__icon"><i className="fas fa-phone"></i></span>
            <div className="chip__text">
              <span className="chip__label">Phone</span>
              <span className="chip__value">+49 79 250 76 26</span>
            </div>
          </div>
          <div className="chip">
            <span className="chip__icon"><i className="far fa-envelope"></i></span>
            <div className="chip__text">
              <span className="chip__label">E-Mail</span>
              <span className="chip__value">timireinigung@bluewin.ch</span>
            </div>
          </div>
          <div className="chip">
            <span className="chip__icon"><i className="fas fa-map-marker-alt"></i></span>
            <div className="chip__text">
              <span className="chip__label">Address</span>
              <span className="chip__value">Timi Cleaning GmbH, Benzeweg 53A 8222 Beringen</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container contact__body">
        <div className="contact__image">
          <img 
            src={contactImage} 
            alt="Contact us illustration" 
          />
        </div>

        <form className="contact__form" action="#" method="post" noValidate>
          <div className="field">
            <label htmlFor="c-name">Name</label>
            <input id="c-name" name="name" type="text" placeholder="name" />
          </div>
          <div className="field-row">
            <div className="field">
              <label htmlFor="c-email">Email Address</label>
              <input id="c-email" name="email" type="email" placeholder="email address" />
            </div>
            <div className="field">
              <label htmlFor="c-phone">Phone Number</label>
              <input id="c-phone" name="phone" type="tel" placeholder="phone number" />
            </div>
          </div>
          <div className="field">
            <label htmlFor="c-message">Message</label>
            <textarea id="c-message" name="message" rows="7" placeholder="Add your message..."></textarea>
          </div>
          <div className="form-actions">
            <button type="reset" className="btn btn--ghost">Reset Details</button>
            <button type="submit" className="btn btn--primary">Send Now</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
