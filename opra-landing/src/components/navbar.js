import React, { useState, useEffect, useRef } from 'react';
import '../styles/navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setMenuOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      if (isMenuOpen && navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      // Attach event listeners when the menu is open
      window.addEventListener('scroll', handleScroll);
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      // Clean up event listeners when the menu is closed
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Clean up on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className={isMenuOpen ? 'nav-links mobile-open' : 'nav-links'}>
        <li><a href="#courses">Courses</a></li>
        <li><a href="#blogs">Blogs</a></li>
        <li><a href="#scholarships">Scholarships</a></li>
        <li><a href="#events">Events</a></li>
      </ul>
      <div className="contact-btn">
        <a href="#contact">Contact</a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className={isMenuOpen ? 'bar open' : 'bar'}></span>
        <span className={isMenuOpen ? 'bar open' : 'bar'}></span>
        <span className={isMenuOpen ? 'bar open' : 'bar'}></span>
      </div>
    </nav>
  );
};

export default Navbar;
