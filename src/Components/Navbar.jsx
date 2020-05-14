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

                <div className="nav-title"><Link
                    className="nav-title"
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >Home</Link></div>

                <div className="nav-title"><Link
                    className="nav-title"
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >About</Link></div>

                <div className="nav-title"><Link
                    className="nav-title"
                    activeClass="active"
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >Services</Link></div>


                <div className="nav-title"><Link
                    className="nav-title"
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-20}
                    duration={500}
                >Contact</Link></div>

            </div>

        </div>
    )
}