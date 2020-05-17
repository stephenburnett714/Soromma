import React from 'react'
import AOS from 'aos';
import aboutImg from '../Images/about-side-image.jpg'

export default function About() {
    AOS.init({
        offset:100,
        duration:600})
    return (
        <div className="about" id="about">
            <div className="header-title"> About Us</div>
            <div className="about-container">
                <div className="about-image-container">
                    <div className="img-wrapper" data-aos="fade-up">
                        <img class="about-image" src={aboutImg} alt="About" />
                    </div>
                </div>
                <div className="about-text-container">
                    <div className="about-category"></div>
                    <div className="about-text">Soromma Technologies provides Guardian IT Solutions to secure information technology assets of our clients.
                     </div>

                    <div className="about-category"></div>
                    <div className="about-text">Soromma Technologies is a minority-owned technology firm that focuses on providing Guardian IT Solutions to our small business, corporate and public sector clients.
                    </div>

                    <div className="about-category"></div>
                    <div className="about-text">
                    </div>
                </div>
            </div>
        </div>
    )
}