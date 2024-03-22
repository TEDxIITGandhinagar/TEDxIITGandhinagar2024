import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Link, scroller } from 'react-scroll';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  const [currentSelection, setCurrentSelection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 1000);
  const navigate = useNavigate();

  const handleNavLinkClick = (section) => {
    setCurrentSelection(section);

    if (section === "about") {
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo("about-section", {
          duration: 500,
          delay: 0,
          smooth: 'easeInOutQuart',
          offset: -70, // Scrolls to element + 70 pixels to the top
        });
      }, 200); // delay to ensure the home page is rendered before scrolling
    }
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
          <button className="barbutt" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        )}

        {/* Navigation links */}
        <div className={`nav-links ${isMobileMenuOpen ? 'mobile-menu' : ''}`}>
          <NavLink to="/" onClick={() => handleNavLinkClick("home")}>HOME</NavLink>
          <Link onClick={() => handleNavLinkClick("about")}>ABOUT</Link>
          <NavLink to="/speakers" onClick={() => handleNavLinkClick("speakers")}>SPEAKERS</NavLink>
          <NavLink to="/talks" onClick={() => handleNavLinkClick("talks")}>TALKS</NavLink>
          <NavLink to="/team" onClick={() => handleNavLinkClick("team")}>TEAM</NavLink>
          <NavLink to="/schedule" onClick={() => handleNavLinkClick("schedule")}>SCHEDULE</NavLink>
          <NavLink to="/tickets" style={isMobileMenuOpen ? { paddingBottom: '1rem' } : {}} onClick={() => handleNavLinkClick("tickets")}>GET TICKETS</NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;