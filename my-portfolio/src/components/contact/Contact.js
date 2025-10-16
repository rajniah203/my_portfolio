import React, { useState } from "react";
import "./contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="contact-section">
      <h2>Contact Me</h2>

      {/* ✅ Direct FormSubmit method */}
      <form
        className="contact-form"
        action="https://formsubmit.co/rajnish5454kumar@gmail.com"
        method="POST"
      >
        {/* FormSubmit hidden settings */}
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_next"
          value="https://yourwebsite.com/thankyou" // Change to your site URL or thank-you page
        />

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" className="send-btn">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
