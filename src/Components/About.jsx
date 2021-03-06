import React from "react";
import AOS from "aos";
import aboutImg from "../Images/about-side-image.jpg";

export default function About() {
  AOS.init({
    offset: 100,
    duration: 600,
  });
  return (
    <div className="about" id="about">
      <div className="header-title"> About Us</div>
      <div className="about-container">
        <div className="about-image-container">
          <div className="img-wrapper" data-aos="fade-right">
            <img class="about-image" src={aboutImg} alt="About" />
          </div>
        </div>
        <div className="about-text-container">
          <div className="about-category"></div>
          <div className="about-text">
            Our name and logo are derived from the Adinkra symbol Nsoromma which
            means guardianship and protector.
          </div>
          <div className="about-category"></div>
          <div className="about-text">
            Soromma Technologies provides Guardian IT Solutions to secure
            information and technology assets. Through our suite of solutions,
            we provide the peace of mind to managers and executives who engage
            us to protect their most important and valued information and
            technology assets.
          </div>
          <div className="about-category"></div>
          <div className="about-text">
            We are a minority-owned technology consulting firm with a primary
            focus of providing Guardian IT Solutions to our small business,
            corporate and public sector clients.
          </div>

          <div className="about-category"></div>
          <div className="about-text"></div>
        </div>
      </div>
    </div>
  );
}
