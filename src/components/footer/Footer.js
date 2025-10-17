import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      {/* Floating bubbles */}
      <div className="footer-bubbles">
        {[...Array(12)].map((_, i) => (
          <span key={i}></span>
        ))}
      </div>

      <div className="footer-container">
        <h3>Rajnish Kumar</h3>
        <p>© {new Date().getFullYear()} All rights reserved.</p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-socials">
          <a
            href="https://github.com/rajniah203"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/rajnish-kumar-0b376118b"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://twitter.com/rajnishkumar"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.facebook.com/share/19X9sKt5qK/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.instagram.com/mr_rajnish_kushwaha_18/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://youtube.com/@life_carton?si=A8WkGxmJLdfLCcl0"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
