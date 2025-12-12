import React, { useState } from 'react';
import './NavBar.css';
import Logo from '../../../public/logo1.jpg';
import { Link } from 'react-scroll';
import { FiMenu, FiX, FiMessageSquare } from 'react-icons/fi';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>

        {/* Hamburger for mobile */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>

        {/* Desktop Menu */}
        <div className="desktop">
          <Link to="Intro" smooth duration={500} className="desktopMenuListItem">
            Home
          </Link>

          <Link to="About" smooth duration={500} className="desktopMenuListItem">
            About
          </Link>

          <Link to="Project" smooth duration={500} className="desktopMenuListItem">
            Projects
          </Link>

          <Link to="Certificate" smooth duration={500} className="desktopMenuListItem">
            Certification
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className={`mobileMenu ${menuOpen ? 'active' : ''}`}>
          <Link to="Intro" smooth duration={500} className="desktopMenuListItem" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link to="About" smooth duration={500} className="desktopMenuListItem" onClick={() => setMenuOpen(false)}>
            About
          </Link>

          <Link to="Project" smooth duration={500} className="desktopMenuListItem" onClick={() => setMenuOpen(false)}>
            Projects
          </Link>

          <Link to="Certificate" smooth duration={500} className="desktopMenuListItem" onClick={() => setMenuOpen(false)}>
            Certification
          </Link>

          {/* Mobile Contact Link */}
          <Link to="contact" smooth duration={500} className="desktopMenuListItem" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>

        {/* Contact Button → Scroll directly */}
        <Link to="contact" smooth duration={500} className="desktopMenuBtn">
          <FiMessageSquare />
          Contact Me
        </Link>
      </nav>
    </>
  );
}

export default NavBar;
