import React from "react";
import './navbar.css';
import Aimg0 from '../../asserts/images/Aimg0.png';
import { Link } from 'react-scroll';
import { FaRegMessage } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={Aimg0} alt="logo" className="logo" />
      <div className="desktopMenu">
        <Link to="home" smooth={true} duration={500} className="menuLink">Home</Link>
        <Link to="about" smooth={true} duration={500} className="menuLink">About</Link>
        <Link to="portfolio" smooth={true} duration={500} className="menuLink">Portfolio</Link>
        <Link to="contact" smooth={true} duration={500} className="menuLink">Contact</Link>
      </div>
      <button className="desktopMenuButton">
        <FaRegMessage className="desktopMenuIcon" />
        Contact Me
      </button>
    </nav>
  );
}

export default Navbar;
