import React, { useEffect, useRef } from "react";
import "./skillpage.css";

const skills = [
  // Frontend
  { title: "HTML", percent: "95%", type: "Frontend" },
  { title: "CSS / SCSS", percent: "90%", type: "Frontend" },
  { title: "JavaScript / ES6+", percent: "85%", type: "Frontend" },
  { title: "React.js", percent: "75%", type: "Frontend" },
  { title: "Python", percent: "70%", type: "Frontend" },

  // Backend
  { title: "ASP.NET Core", percent: "90%", type: "Backend" },
  { title: "C#", percent: "95%", type: "Backend" },
  { title: "SQL Server", percent: "85%", type: "Backend" },
  { title: "Entity Framework", percent: "80%", type: "Backend" },
  { title: "RESTful APIs", percent: "85%", type: "Backend" },

  // Tools
  { title: "Git / GitHub", percent: "80%", type: "Tools" },
  { title: "Docker", percent: "60%", type: "Tools" },
  { title: "Unit Testing / NUnit", percent: "65%", type: "Tools" },
];

const SkillsPage = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const bars = document.querySelectorAll(".skill-fill");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            bars.forEach((bar) => {
              const finalWidth = bar.getAttribute("data-percent");
              bar.style.width = finalWidth;
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  const groupedSkills = {
    Frontend: skills.filter((s) => s.type === "Frontend"),
    Backend: skills.filter((s) => s.type === "Backend"),
    Tools: skills.filter((s) => s.type === "Tools"),
  };

  return (
    <div className="skills-page" ref={sectionRef}>
      <h1>My Skills</h1>
      <div className="skills-groups">
        {Object.keys(groupedSkills).map((group, i) => (
          <div key={i} className={`skill-group skill-${group}`}>
            <h2>{group}</h2>
            {groupedSkills[group].map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-item-header">
                  <h3>{skill.title}</h3>
                  <span>{skill.percent}</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-fill"
                    data-percent={skill.percent}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
