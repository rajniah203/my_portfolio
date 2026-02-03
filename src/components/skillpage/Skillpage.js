import React, { useEffect, useRef } from "react";
import "./skillpage.css";
import { FaCode, FaServer, FaTools } from "react-icons/fa";

const SkillsPage = () => {
  const barRefs = useRef([]);

  /* ===============================
     MOUSE SPOTLIGHT
  ================================ */
  const handleMouseMove = (e) => {
    document.querySelectorAll(".skill-card").forEach(card => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
      card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    });
  };

  /* ===============================
     PROGRESS ANIMATION
  ================================ */
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.width =
              entry.target.getAttribute("data-percent");
          }
        });
      },
      { threshold: 0.3 }
    );

    barRefs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const skillGroups = [
    {
      title: "Frontend",
      icon: <FaCode />,
      tags: ["React", "Next.js", "Tailwind", "TypeScript"],
      skills: [
        { name: "HTML / CSS", level: "95%" },
        { name: "JavaScript", level: "85%" },
        { name: "React.js", level: "75%" },
      ],
    },
    {
      title: "Backend",
      icon: <FaServer />,
      tags: ["C#", ".NET Core", "SQL Server", "APIs"],
      skills: [
        { name: "C# / ASP.NET", level: "90%" },
        { name: "SQL Server", level: "85%" },
      ],
    },
    {
      title: "Tools",
      icon: <FaTools />,
      tags: ["Docker", "Git", "Azure", "NUnit"],
      skills: [
        { name: "Git / GitHub", level: "80%" },
        { name: "Docker", level: "60%" },
      ],
    },
  ];

  return (
    <section className="pro-skills" id="skills" onMouseMove={handleMouseMove}>
      <div className="ambient-light" />

      <div className="container">
        <header className="pro-header">
          <span className="eyebrow">Expertise</span>
          <h2 className="title">
            Technical <span>Stack</span>
          </h2>
          <p>Crafting robust solutions with modern technologies.</p>
        </header>

        <div className="bento-grid">
          {skillGroups.map((group, gIdx) => (
            <div key={group.title} className="skill-card">
              <div className="card-border" />
              <div className="card-content">
                <div className="icon-box">{group.icon}</div>
                <h3>{group.title}</h3>

                <div className="tag-cloud">
                  {group.tags.map(tag => (
                    <span key={tag} className="mini-tag">{tag}</span>
                  ))}
                </div>

                <div className="meter-list">
                  {group.skills.map((skill, sIdx) => (
                    <div key={skill.name} className="meter-wrapper">
                      <div className="meter-label">
                        <span>{skill.name}</span>
                        <span>{skill.level}</span>
                      </div>

                      <div className="meter-track">
                        <div
                          className="meter-fill"
                          data-percent={skill.level}
                          ref={el =>
                            (barRefs.current[gIdx * 10 + sIdx] = el)
                          }
                        >
                          <div className="meter-glow" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
