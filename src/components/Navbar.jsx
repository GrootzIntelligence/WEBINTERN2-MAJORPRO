import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isNavVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
    setNavVisible(!isNavVisible);
  };

  const scrollToSection = (id, event) => {  // {{ edit_1 }}
    event.preventDefault();  // Prevent default anchor behavior
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${isNavVisible ? 'h-nav-resp' : ''}`}>
      <div className="logo">
        <img src="logo.jpg" alt="logo" />
      </div>
      <ul className={`nav-list ${isNavVisible ? 'v-class-resp' : ''}`}>
        <li><a href="#Home" onClick={(e) => scrollToSection('Home', e)}>Home</a></li> 
        <li><a href="#About" onClick={(e) => scrollToSection('About', e)}>About</a></li> 
        <li><a href="#Services" onClick={(e) => scrollToSection('Body_AboutUs', e)}>Services</a></li> 
        <li><a href="#ContactUs" onClick={(e) => scrollToSection('ContactUs', e)}>Contact Us</a></li>
      </ul>
      <div className="burger" onClick={toggleNav}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default Navbar;
