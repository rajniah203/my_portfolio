import React, { useState } from "react";
import { FaPaperPlane, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section className="contact-pro" id="contact">
      <div className="contact-blur-effect"></div>

      <div className="contact-container">
        <div className="contact-grid">
          {/* LEFT */}
          <div className="contact-info">
            <span className="contact-badge">Available for Hire</span>

            <h2 className="contact-title">
              Let’s build something <span>extraordinary</span>.
            </h2>

            <p className="contact-text">
              Have a question or a project in mind? Drop me a message and I’ll
              get back to you within 24 hours.
            </p>

            <div className="social-links">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="contact-form-card">
            <form
              action="https://formsubmit.co/rajnish5454kumar@gmail.com"
              method="POST"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div className="input-group">
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder=" "
                />
                <label>Full Name</label>
              </div>

              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder=" "
                />
                <label>Email Address</label>
              </div>

              <div className="input-group">
                <textarea
                  name="message"
                  rows="3"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder=" "
                />
                <label>Your Message</label>
              </div>

              <button type="submit" className="pro-send-btn">
                <span>Send Message</span>
                <FaPaperPlane className="plane-icon" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
