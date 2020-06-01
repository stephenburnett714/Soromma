import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row wrap;

  li {
    padding: 18px 10px;
    font-size: xx-large;
  }

  @media (min-width: 950px) {
    display: none;
  }

  @media (max-width: 950.1px) {
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
    transition: transform 0.3s ease-in-out;
  }
`;

export default function NavMenu(props) {
  return (
    <Ul open={props.open}>
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
      >
        <li>Home</li>
      </Link>

      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        onClick={() => props.setOpen(!props.open)}
      >
        <li>About</li>
      </Link>

      <Link
        activeClass="active"
        to="solutions"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        onClick={() => props.setOpen(!props.open)}
      >
        <li>Solutions</li>
      </Link>

      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        onClick={() => props.setOpen(!props.open)}
      >
        <li>Contact</li>
      </Link>
    </Ul>
  );
}
