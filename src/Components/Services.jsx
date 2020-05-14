import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop, faWifi, faTools, faPhone } from '@fortawesome/free-solid-svg-icons'

export default function Services() {

    return(
        <div className="services" id="services">
            <div className="header-title"> Services</div>
            <div className="service-card-container">

            <div className="service-card">
            <FontAwesomeIcon icon={faLaptop} size = '3x'/>
                <div className="service-card-title">Service</div>
                <div className= "">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quis blanditiis at magni eius. Doloremque velit fugit ab beatae doloribus harum! Dolorum hic ipsam dolore quaerat labore accusamus magni distinctio.</div>
            </div>

            <div className="service-card">
            <FontAwesomeIcon icon={faWifi} size = '3x'/>
                <div className="service-card-title">Service</div>
                <div className= "">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quis blanditiis at magni eius. Doloremque velit fugit ab beatae doloribus harum! Dolorum hic ipsam dolore quaerat labore accusamus magni distinctio.</div>
            </div>

            <div className="service-card">
            <FontAwesomeIcon icon={faTools} size = '3x'/>
                <div className="service-card-title">Service</div>
                <div className= "">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quis blanditiis at magni eius. Doloremque velit fugit ab beatae doloribus harum! Dolorum hic ipsam dolore quaerat labore accusamus magni distinctio.</div>
            </div>

            <div className="service-card">
            <FontAwesomeIcon icon={faPhone} size = '3x'/>
                <div className="service-card-title">Service</div>
                <div className= "">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quis blanditiis at magni eius. Doloremque velit fugit ab beatae doloribus harum! Dolorum hic ipsam dolore quaerat labore accusamus magni distinctio.</div>
            </div>

            <div className="service-card">
            <FontAwesomeIcon icon={faPhone} size = '3x'/>
                <div className="service-card-title">Service</div>
                <div className= "">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quis blanditiis at magni eius. Doloremque velit fugit ab beatae doloribus harum! Dolorum hic ipsam dolore quaerat labore accusamus magni distinctio.</div>
            </div>



            </div>
        </div>
    )
}