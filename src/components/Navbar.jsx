import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="nav-container">
      {/* Nav Name */}
      <div className="nav-name">
        Ma<span>a</span>z
      </div>

      {/* Desktop Nav Links */}
      <ul className="nav-links desktop">
        <li>
          <a href="#about" className="nav-link">
            About
          </a>
        </li>
        <li>
          <a href="#skills" className="nav-link">
            Skills
          </a>
        </li>
        <li>
          <a href="#education" className="nav-link">
            Education
          </a>
        </li>
        <li>
          <a href="#experience" className="nav-link">
            Experience
          </a>
        </li>
        <li>
          <a href="#certification" className="nav-link">
            Certifications
          </a>
        </li>
      </ul>

      {/* Hamburger Icon for Mobile */}
      <div className="hamburger-icon" onClick={toggleMobileMenu}>
        &#9776; {/* Hamburger icon */}
      </div>

      {/* Mobile Nav Links */}
      <div className={`mobile-nav ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="cross-icon" onClick={toggleMobileMenu}>
          &#10005; {/* Cross icon */}
        </div>
        <ul className="nav-links mobile">
          <li>
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="nav-link">
              Skills
            </a>
          </li>
          <li>
            <a href="#education" className="nav-link">
              Education
            </a>
          </li>
          <li>
            <a href="#experience" className="nav-link">
              Experience
            </a>
          </li>
          <li>
            <a href="#certification" className="nav-link">
              Certifications
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
