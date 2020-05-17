import React from 'react'
import AOS from 'aos';


export default function Services() {
    AOS.init({
        offset:200,
        duration:600})
    return (
        <div className="services" id="services">
            <div className="header-title"> Services</div>
            <div className="service-card-container">

                <div className="service-card" data-aos="fade-up">
                    <span style={{ color: '#FFFFFF' }}>
                        <i class="fas fa-laptop circle-icon fa-3x"></i>
                    </span>
                    <div className="service-card-title">Cabling and Networking</div>
                    <div className=""></div>
                </div>

                <div className="service-card" data-aos="fade-up">
                    <span style={{ color: '#FFFFFF' }}>
                        <i class="fas fa-network-wired circle-icon fa-3x"></i>
                    </span>
                    <div className="service-card-title">Consulting</div>
                    <div className="">
                    <ul></ul>
                    </div>
                </div>

                {/* <div className="service-card">
                    <span style={{ color: '#FFFFFF' }}>
                        <i class="fas fa-tools circle-icon fa-3x"></i>
                    </span>
                    <div className="service-card-title">Service</div>
                    <div className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quis blanditiis at magni eius. Doloremque velit fugit ab beatae doloribus harum! Dolorum hic ipsam dolore quaerat labore accusamus magni distinctio.</div>
                </div> */}

                <div className="service-card" data-aos="fade-up">
                    <span style={{ color: '#FFFFFF' }}>
                        <i class="fas fa-user-friends circle-icon fa-3x"></i>
                    </span>
                    <div className="service-card-title">IT Staffing - Manpower Resource</div>
                    <div className=""></div>
                </div>

                <div className="service-card" data-aos="fade-up">
                    <span style={{ color: '#FFFFFF' }}>
                        <i class="fas fa-fingerprint circle-icon fa-3x"></i>
                    </span>
                    <div className="service-card-title">Cybersecurity</div>
                    <div className="">
                    <ul>
                    <li>Online Awareness Training</li>
                    <li>Audits</li>
                    </ul>
                    </div>
                </div>



            </div>
        </div>
    )
}