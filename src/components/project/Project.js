import React from "react";
import "./project.css";

const projectList = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with React and CSS.",
    image: process.env.PUBLIC_URL + "/portfolio_pic.png",
    link: "https://rajniah203.github.io/my_portfolio",
  },
  {
    title: ".NET Web App",
    description: "A web application built with .NET Core and SQL Server.",
    image: process.env.PUBLIC_URL + "/project2.jpg",
    link: "#",
  },
  {
    title: "E-Commerce App",
    description: "Full-stack e-commerce platform with .NET backend.",
    image: process.env.PUBLIC_URL + "/Mahesham_pic .png",
    link: "https://dev.mahesham.com/",
  },
];

function Project() {
  return (
    <section className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-container">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
