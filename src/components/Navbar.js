import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  const [currentSelection, setCurrentSelection] = useState("");

  const handleNavLinkClick = (selectedLink,) => {
    if (currentSelection === selectedLink) {
      setCurrentSelection("");
    } else {
      setCurrentSelection(selectedLink);
      if (selectedLink === "about") {
        const aboutSection = document.getElementById("about-section");
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <>
      <div className="navbar">
        <div className="logo-container">
          <img src="logotedx.svg" alt="TEDx Logo" />
        </div>
        <div className="nav-links">
          <NavLink to="/" onClick={(e) => handleNavLinkClick("home", e)} className={currentSelection === "home" ? "" : ""} >HOME</NavLink>
          <NavLink to="/about" className={currentSelection === "about" ? "active" : ""} onClick={(e) => handleNavLinkClick("about", e)}>ABOUT</NavLink>
          <NavLink to="/speakers" className={currentSelection === "speakers" ? "active" : ""} onClick={(e) => handleNavLinkClick("speakers", e)}>SPEAKERS</NavLink>
          <NavLink to="/talks" className={currentSelection === "talks" ? "active" : ""} onClick={(e) => handleNavLinkClick("talks", e)}>TALKS</NavLink>
          <NavLink to="/team" className={currentSelection === "team" ? "active" : ""} onClick={(e) => handleNavLinkClick("team", e)}>TEAM</NavLink>
          <NavLink to="/schedule" className={currentSelection === "schedule" ? "active" : ""} onClick={(e) => handleNavLinkClick("schedule", e)}>SCHEDULE</NavLink>
          <NavLink to="/tickets" className={currentSelection === "tickets" ? "active" : ""} onClick={(e) => handleNavLinkClick("tickets", e)}>GET TICKETS</NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;
