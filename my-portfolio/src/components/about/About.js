import React, { useEffect, useRef, useState } from "react";
import { FaDownload } from "react-icons/fa";
import { introdata } from "../../content_option";
import "./about.css";

function About() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Resume_final.pdf"; // Access resume from public folder
    link.download = "Rajnish_Kumar_Resume.pdf";
    link.click();
  };

  return (
    <section
      className={`about-section ${isVisible ? "visible" : ""}`}
      id="about"
      ref={sectionRef}
    >
      <div className="about-container">
        {/* Image */}
        <div className="about-image">
          <img src={introdata.images[1]} alt="Rajnish Kumar" />
        </div>

        {/* Text */}
        <div className="about-text">
          <h2>About Me</h2>
          <span className="highlight">
            I’m Rajnish Kumar — Software Engineer & .NET Specialist
          </span>
          <p>
            I’m a passionate <strong>.NET developer</strong> specializing in the
            latest
            <strong> .NET 7 / .NET Core technologies</strong>, building
            high-performance, scalable, and visually engaging web applications.
            I excel in C#, ASP.NET Core, Blazor, and SQL Server, transforming
            innovative ideas into robust, efficient solutions.
          </p>
          <p>
            I focus on writing clean, maintainable code while leveraging modern
            software architecture and best practices to deliver scalable,
            secure, and user-focused applications.
          </p>

          {/* Buttons */}
          <div className="about-buttons">
            <button
              onClick={handleDownload}
              className="px-6 py-3 bg-white text-black hover:bg-slate-200 transition-colors font-semibold cursor-pointer flex justify-center items-center gap-2 rounded-full"
            >
              <FaDownload /> Download Resume
            </button>
            <a href="#contact" className="hire-btn">
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
