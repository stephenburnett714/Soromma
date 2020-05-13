import React from 'react'
import sorroma from '../Images/Soromma.png'

export default function Navbar() {

    return (
        <div className="nav-bar">

            <div className="nav-bar-logo-container">
                <img className="nav-bar-logo" src={sorroma} alt="logo" />
            </div>

            <div className="nav-title-container">
                <div className="nav-title">Home</div>
                <div className="nav-title">About</div>
                <div className="nav-title">Services</div>
                <div className="nav-title">Testimonials</div>
                <div className="nav-title">Portfolio</div>
                <div className="nav-title">Team</div>
                <div className="nav-title">Contact</div>
            </div>

        </div>
    )
}