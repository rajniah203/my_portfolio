import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";

const sections = ["home", "about", "skills", "projects", "contact"];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [progress, setProgress] = useState(0);

  const navRef = useRef(null);
  const indicatorRef = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      const max =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      // Progress bar (safe)
      setProgress(max > 0 ? (current / max) * 100 : 0);

      // Floating navbar trigger
      setIsScrolled(current > 50);

      // Scroll spy
      const spyPosition = current + 160;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;

        if (
          spyPosition >= el.offsetTop &&
          spyPosition < el.offsetTop + el.offsetHeight
        ) {
          setActive(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!navRef.current || !indicatorRef.current) return;

    const updateIndicator = () => {
      const activeEl = navRef.current.querySelector(
        `.nav-item[data-target="${active}"]`
      );

      if (!activeEl) {
        indicatorRef.current.style.opacity = "0";
        return;
      }

      indicatorRef.current.style.opacity = "1";
      indicatorRef.current.style.transform = `translateX(${activeEl.offsetLeft}px)`;
      indicatorRef.current.style.width = `${activeEl.offsetWidth}px`;
    };

    updateIndicator();
    requestAnimationFrame(updateIndicator);
    window.addEventListener("resize", updateIndicator);

    return () => window.removeEventListener("resize", updateIndicator);
  }, [active, isOpen]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Progress Bar */}
      <div className="scroll-progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <nav className={`navbar ${isScrolled ? "floating" : ""}`}>
        <div className="nav-container" ref={navRef}>
          {/* LOGO */}
          <div className="logo" onClick={() => scrollToSection("home")}>
            Rajnish<span className="dot"></span>
          </div>

          {/* MENU */}
          <div className={`nav-menu ${isOpen ? "open" : ""}`}>
            <div ref={indicatorRef} className="nav-indicator-glow" />

            {sections.map((sec) => (
              <div
                key={sec}
                data-target={sec}
                className={`nav-item ${active === sec ? "active" : ""}`}
                onClick={() => scrollToSection(sec)}
              >
                {sec}
              </div>
            ))}
          </div>

          {/* HAMBURGER */}
          <div
            className={`hamburger ${isOpen ? "active" : ""}`}
            onClick={() => setIsOpen((p) => !p)}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
