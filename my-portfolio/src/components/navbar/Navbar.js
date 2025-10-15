import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Rajnish</div>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link to="/portfolio" onClick={() => setIsOpen(false)}>
          Projects
        </Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>
          Contact
        </Link>
      </div>
      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
