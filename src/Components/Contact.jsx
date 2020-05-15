import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass,faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'


export default function Contact() {
    return(
        <div className="contact" id="contact">
            <div className="header-title">Contact Us</div>
            <div className="contact-card-container">
                <a target="_blank" href="http://maps.google.com/?q=Empire State Building, New York, NY 10001">
                <div className="contact-card">
                    <FontAwesomeIcon icon={faCompass} size= '2x'/>
                    <div>Our Address</div>
                    <div>Empire State Building, New York, NY 10001</div>
                </div>
                </a>
                <a href="tel:[13472928240]">
                <div className="contact-card">
                    <FontAwesomeIcon icon={faPhone} size= '2x'/>
                    <div>Call Us</div>
                    <div>(347) 292-8240</div>
                </div>
                </a>

                <a href="mailto:contact@sorommatechnologies.com">
                <div className="contact-card">
                    <FontAwesomeIcon icon={faEnvelope} size= '2x'/>
                    <div>Email Us</div>
                    <div>contact@sorommatechnologies.com</div>
                </div>
                </a>
            </div>
            <div>Office Hours</div>
            <div>Monday through Friday</div>
            <div>9am - 5pm</div>

        </div>
    )
}