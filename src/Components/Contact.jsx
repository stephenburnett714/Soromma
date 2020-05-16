import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass,faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'


export default function Contact() {
    return(
        <div className="contact" id="contact">

        
            <div className="header-title">Contact Us</div>
                        <div className="contact-header">Office Hours</div>
            <div className="days-open">Monday through Friday</div>
            <div className="Office-time">9:00am - 5:00pm</div>
            <div className="contact-card-container">
                <a rel="noopener noreferrer" target="_blank" href="http://maps.google.com/?q=Empire State Building, New York, NY 10001">
                <div className="contact-card">
                    <FontAwesomeIcon icon={faCompass} size= '2x'/>
                    <div className="contact-header">Our Address</div>
                    <div>Empire State Building, New York, NY 10001</div>
                </div>
                </a>
                <a href="tel:[13472928240]">
                <div className="contact-card">
                    <FontAwesomeIcon icon={faPhone} size= '2x'/>
                    <div className="contact-header">Call Us</div>
                    <div>(347) 292-8240</div>
                </div>
                </a>

                <a href="mailto:contact@sorommatechnologies.com">
                <div className="contact-card">
                    <FontAwesomeIcon icon={faEnvelope} size= '2x'/>
                    <div className="contact-header">Email Us</div>
                    <div>contact@sorommatechnologies.com</div>
                </div>
                </a>
            </div>

        </div>
    )
}