import React from "react";
import timeImage from '../../public/assets/Images/time.png';

const HoursSection = () => {

  return (
    <section id="hours" className="hours">
      <div className="hours__inner container">
        <div className="hours__art" aria-hidden="true">
          <img src={timeImage} alt="" width="720" height="720" />
        </div>

        <div className="hours__content">
          <div className="hours__eyebrow">
            <i className="far fa-clock" aria-hidden="true"></i>
            <span>Opening Hours</span>
          </div>
          <h2 className="hours__title">Offering Timely Services</h2>
          <p className="hours__lead">Check our available time slots and contact us for immediate cleaning services</p>

          <div className="hours-card" role="group" aria-label="Opening hours">
            <div className="hours-col">
              <h3>Monday - Friday</h3>
              <div className="slot">
                <span className="bar" aria-hidden="true"></span>
                <span className="time">07:00 AM – 12:00 PM</span>
              </div>
              <div className="slot">
                <span className="bar" aria-hidden="true"></span>
                <span className="time">01:00 PM – 07:00 PM</span>
              </div>
            </div>
            <div className="hours-col">
              <h3>Saturday - Sunday</h3>
              <div className="slot">
                <span className="bar" aria-hidden="true"></span>
                <span className="time">08:00 AM – 12:00 PM</span>
              </div>
              <div className="slot">
                <span className="bar" aria-hidden="true"></span>
                <span className="time">01:00 PM – 05:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HoursSection;
