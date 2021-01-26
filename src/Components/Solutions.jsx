import React from "react";
import AOS from "aos";

export default function Services() {
  AOS.init({
    offset: 200,
    duration: 600,
  });
  return (
    <div className="services" id="solutions">
      <div className="header-title">Solutions</div>
      <div className="service-card-container">
        <div className="service-card" data-aos="fade-up">
          <span style={{ color: "#FFFFFF" }}>
            <i class="fas fa-network-wired circle-icon fa-3x"></i>
          </span>
          <div className="header-font font-24 p-2">Cabling and Networking</div>
          <div className="text-font text-left">
            We are experts at designing, installing and supporting wireless and
            wired networks and camera systems that are fast, secure and
            reliable.
          </div>
        </div>

        <div className="service-card" data-aos="fade-up">
          <span style={{ color: "#FFFFFF" }}>
            <i class="fas fa-shield-alt circle-icon fa-3x"></i>
          </span>
          <div className="header-font font-24 p-2">IT Consulting Services</div>
          <div className="text-font text-left">
            Our team of consultants proactively design, manage and implement IT
            Solutions while mitigating risks to assets and data. Areas of focus
            for our Guardian IT Solutions™ include:
          </div>
          <ul className="text-font text-left">
            <div><li>Cloud Services</li></div>
            <div><li>Managed Services</li></div>
            <div><li>Cybersecurity</li></div>
          </ul>
        </div>

        <div className="service-card" data-aos="fade-up">
          <span style={{ color: "#FFFFFF" }}>
            <i class="fas fa-user-friends circle-icon fa-3x"></i>
          </span>
          <div className="header-font font-24 p-2">IT Staffing</div>
          <div className="text-font text-left">
            With over 20 years experience in staffing of technical personnel,
            Soromma is able to source industry-tested professionals in a wide
            array of technical disciplines on a temporary or permanent basis to
            complement your existing internal IT staff.
          </div>
        </div>
      </div>
    </div>
  );
}
