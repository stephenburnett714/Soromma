import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass,faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'


export default function Contact() {
    return(
        <div className="contact" id="contact">
            <div className="header-title">Contact Us</div>
            <div className="contact-card-container">
                <div className="contact-card">
                    <FontAwesomeIcon icon={faCompass} size= '2x'/>
                    <div>Our Address</div>
                    <div>101 Broadway, New York, NY</div>
                </div>

                <div className="contact-card">
                    <FontAwesomeIcon icon={faPhone} size= '2x'/>
                    <div>Call Us</div>
                    <div>(555) 555-555</div>
                </div>
                <div className="contact-card">
                    <FontAwesomeIcon icon={faEnvelope} size= '2x'/>
                    <div>Email Us</div>
                    <div>something@some.com</div>
                </div>
            </div>
            <div>Office Hours</div>
            <div>Monday through Friday</div>
            <div>9am - 5pm</div>

        </div>
    )
}