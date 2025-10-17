import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("ovhidden");
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" }); // Smooth scroll
      setIsOpen(false);
      document.body.classList.remove("ovhidden");
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-logo" onClick={() => scrollToSection("home")}>
        Rajnish Kumar
      </div>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <span onClick={() => scrollToSection("home")}>Home</span>
        <span onClick={() => scrollToSection("about")}>About</span>
        <span onClick={() => scrollToSection("skillpage")}>Skill</span>
        <span onClick={() => scrollToSection("project")}>Projects</span>
        <span onClick={() => scrollToSection("contact")}>Contact</span>
      </div>

      <div className="menu-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
