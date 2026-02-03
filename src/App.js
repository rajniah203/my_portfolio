import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import SkillsPage from "./components/skillpage/Skillpage";
import Project from "./components/project/Project";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ThemeToggle from "./components/themeToggle/ThemeToggle";

function App() {
  return (
    <>
      <ThemeToggle />
      <Navbar />

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <SkillsPage />
      </section>

      <section id="projects">
        <Project />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
}

export default App;
