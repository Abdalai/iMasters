import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import { FaBars, FaTimes } from "react-icons/fa";


// Navigation links
const navLinks = [
  { to: "/", textContent: "Home" },
  { to: "/about", textContent: "About us" },
  { to: "/why-apple", textContent: "Why Apple" },
  { to: "/FAQ", textContent: "FAQ" },
];

export default function Header() {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  // Toggles the mobile menu
  function toggleMenu() {
    setMobileMenuActive((prevState) => !prevState);
  }

  return (
    <header className="page-header" role="banner">
      <div className="header-container top-bar">
        <Link to="/" className="logo" onClick={() => window.scrollTo({ top: 0 })}>
          <img src="/images/imasters-logo.jpeg" alt="brand logotype" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className="desktop-link">
              {link.textContent}
            </Link>
          ))}
        </nav>

        {/* Hamburger Menu and Mobile Navigation */}
        <div className="mobile-menu">
          <img src="/images/Apple_Tech_Partner_Logo_2ln_Blk_CI_050725.svg" alt="Apple Tech Partner Logo" className="apple-partner-logo" />
          <HamburgerMenu active={mobileMenuActive} onClick={toggleMenu} />
          <div className={`mobile-menu-2 ${mobileMenuActive ? "active" : ""}`} role="navigation">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} onClick={toggleMenu} className="mobile-link">
                {link.textContent}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

// Hamburger Menu Component
function HamburgerMenu({ onClick, active }) {
  return (
    <button
      className="hamburger nav-btn"
      aria-label="Menu"
      aria-expanded={active ? "true" : "false"}
      onClick={onClick}
    >
      {active ? <FaTimes size={24} /> : <FaBars size={24} />}
    </button>
  );
}

