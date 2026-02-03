import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import "./ThemeToggle.css";

function ThemeToggle() {
  const [theme, setTheme] = useState("light");
  const [animate, setAnimate] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setAnimate(true);
    document.documentElement.setAttribute("data-theme", newTheme);

    setTimeout(() => setAnimate(false), 400);
  };

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      className={`theme-toggle ${animate ? "animate" : ""}`}
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <span className="tooltip">
        {theme === "light" ? "Dark mode" : "Light mode"}
      </span>

      {theme === "light" ? <FaMoon /> : <FaSun />}
    </button>
  );
}

export default ThemeToggle;
