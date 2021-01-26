import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

const Ul = styled.ul`
  /* list-style: none;
  display: flex;
  flex-flow: row wrap; */

  /* div {
    padding: 18px 10px;
  } */

  @media (min-width: 950px) {
    display: none;
  }

  @media (max-width: 950.1px) {
    display: flex;

    flex-flow: column nowrap;
    background-color: white;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding-top: 12vh;
    padding-bottom: 12vh;
    transition: transform 0.3s ease-in-out;
    align-content: space-around;
  font-size: 2rem;
  list-style: none;
  align-items: center;
  }
  a {
    
  }
`;

export default function NavMenu(props) {
  return (
    <Ul open={props.open}>
      
      {/* <div className="nav-menu-items"> */}
        <div className="nav-menu-padding">
      <Link
        open={props.open}
        setOpen={props.setOpen}
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        onClick={() => props.setOpen(!props.open)}
        className="header-font"
      >
        Home
      </Link>
      </div>

<div className="nav-menu-padding">
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
        onClick={() => props.setOpen(!props.open)}
        className="header-font"
      >
        About
      </Link>
      </div>

<div className="nav-menu-padding">
      <Link
        activeClass="active"
        to="solutions"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
        onClick={() => props.setOpen(!props.open)}
        className="header-font"
      >
        Solutions
      </Link>
      </div>

<div className="nav-menu-padding">
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
        onClick={() => props.setOpen(!props.open)}
        className="header-font"
      >
        Contact
      </Link>
      {/* </div> */}
      </div>
    </Ul>
  );
}
