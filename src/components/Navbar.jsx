import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isNavVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
    setNavVisible(!isNavVisible);
  };

  return (
    <nav className={`navbar ${isNavVisible ? 'h-nav-resp' : ''}`}>
      <div className="logo">
        <img src="logo.jpg" alt="logo" />
      </div>
      <ul className={`nav-list ${isNavVisible ? 'v-class-resp' : ''}`}>
        <li><a href="#Home">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Services">Services</a></li>
        <li><a href="#ContactUs">Contact Us</a></li>
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
