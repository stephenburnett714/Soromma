import React from "react";
import AOS from "aos";

export default function Contact() {
  AOS.init({
    offset: 100,
    duration: 600,
  });
  return (
    <div className="contact" id="contact">
      <div className="header-title">Contact Us</div>

      <div className="contact-card-container" data-aos="fade-up">
        <div className="contact-card" data-aos="fade-up">
          <i class="far fa-building contact-card-image fa-2x"></i>
          <div className="text-font">Office Hours</div>
          <div className="text-font">Monday through Friday</div>
          <div className="text-font">8:00am - 6:00pm</div>
        </div>

        <a
          rel="noopener noreferrer"
          target="_blank"
          href="http://maps.google.com/?q=105 Lock Street Suite 203Newark, New Jersey 07103"
        >
          <div className="contact-card" data-aos="fade-up">
            <i class="fas fa-map-marker-alt contact-card-image fa-2x"></i>
            <div className="text-font">Our Address</div>
            <div>
              <div className="text-font">105 Lock Street Suite 203</div>
              <div className="text-font">Newark, New Jersey 07103</div>
            </div>
          </div>
        </a>
        <a href="tel:[13472928240]">
          <div className="contact-card" data-aos="fade-up">
            <i class="fas fa-phone contact-card-image fa-2x"></i>
            <div className="text-font">Call Us</div>
            <div className="text-font">(347) 292-8240</div>
          </div>
        </a>

        <a href="mailto:contact@sorommatechnologies.com">
          <div className="contact-card" data-aos="fade-up">
            <i class="fas fa-envelope contact-card-image fa-2x"></i>
            <div className="text-font">Email Us</div>
            <div className="text-font">Contact@sorommatechnologies.com</div>
          </div>
        </a>
      </div>
    </div>
  );
}
