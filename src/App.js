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
      <Home />
      <About />
      <SkillsPage />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
