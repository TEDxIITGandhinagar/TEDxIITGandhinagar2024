import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  const [currentSelection, setCurrentSelection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 1000);

  const handleNavLinkClick = (selectedLink) => {
    setCurrentSelection(selectedLink);
    closeMobileMenu();
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    // Close mobile menu on route change
    closeMobileMenu();
  }, [location.pathname]);

  useEffect(() => {
    // Function to update state based on window width
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1000);
    }

    // Add event listener on mount
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className={`navbar ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <div className="logo-container">
          <NavLink to="/">
            <img src="TEDxIITGN.png" alt="TEDx Logo" />
          </NavLink>
        </div>
        {/* Hamburger menu icon */}
        {isMobileView && (
          <div className="hamburger-menu" >
            <button className="barbutt" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        )}

        {/* Navigation links */}
        <div className={`nav-links ${isMobileMenuOpen ? 'mobile-menu' : ''}`}>
          <NavLink to="/" onClick={() => handleNavLinkClick("home")}>HOME</NavLink>
          <Link
            activeClass="active"
            to="about-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => handleNavLinkClick("about")}
          >
            ABOUT
          </Link>
          <NavLink to="/speakers" onClick={() => handleNavLinkClick("speakers")}>SPEAKERS</NavLink>
          <NavLink to="/talks" onClick={() => handleNavLinkClick("talks")}>TALKS</NavLink>
          <NavLink to="/team" onClick={() => handleNavLinkClick("team")}>TEAM</NavLink>
          <NavLink to="/schedule" onClick={() => handleNavLinkClick("schedule")}>SCHEDULE</NavLink>
          <NavLink to="/tickets" onClick={() => handleNavLinkClick("tickets")}>GET TICKETS</NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;