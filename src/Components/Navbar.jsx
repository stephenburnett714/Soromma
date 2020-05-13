import React from 'react'
import { Link } from "react-scroll";
import sorroma from '../Images/Soromma.png'


export default function Navbar() {

    return (
        <div className="nav-bar" id="navbar">

            <div className="nav-bar-logo-container">
                <img className="nav-bar-logo" src={sorroma} alt="logo" />
            </div>

            <div className="nav-title-container">

                <div><Link
                    className="nav-title"
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >Home</Link></div>

                <div><Link
                    className="nav-title"
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >About</Link></div>

                <div><Link
                    className="nav-title"
                    activeClass="active"
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >Services</Link></div>

                <div><Link
                    className="nav-title"
                    activeClass="active"
                    to="testimonials"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >Testimonials</Link></div>

                <div><Link
                    className="nav-title"
                    activeClass="active"
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >Portfolio</Link></div>

                <div><Link
                    className="nav-title"
                    activeClass="active"
                    to="team"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >Team</Link></div>

                <div><Link
                    className="nav-title"
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >Contact</Link></div>

            </div>

        </div>
    )
}