import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaArrowUp,
} from "react-icons/fa";
import "./footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      {/* Keeping your original floating bubbles */}
      <div className="footer-bubbles">
        {[...Array(12)].map((_, i) => (
          <span key={i}></span>
        ))}
      </div>

      <div className="footer-content-wrapper">
        <div className="footer-top-section">
          <div className="footer-brand">
            <h3>Rajnish Kumar</h3>
            <p>Crafting digital solutions with passion and precision.</p>
          </div>

          <div className="footer-nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-action">
            <button
              className="scroll-top-btn"
              onClick={scrollToTop}
              aria-label="Scroll to top"
            >
              <FaArrowUp />
            </button>
          </div>
        </div>

        <div className="footer-divider-line"></div>

        <div className="footer-bottom-section">
          <p className="copyright-text">
            © Rajnish {new Date().getFullYear()} All rights reserved.
          </p>

          <div className="footer-social-icons">
            <a
              href="https://github.com/rajniah203"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/rajnish-kumar-0b376118b"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/rajnishkumar"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.facebook.com/share/19X9sKt5qK/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/mr_rajnish_kushwaha_18/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://youtube.com/@life_carton"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
