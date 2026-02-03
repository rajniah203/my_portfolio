import React from "react";
import Typewriter from "typewriter-effect";
import { introdata } from "../../content_option";
import "./Home.css";

function Home() {
  return (
    <section className="cyber-hero" id="home">
      {/* Background Effects */}
      <div className="grid-overlay"></div>
      <div className="light-beams"></div>

      <div className="hero-wrapper">
        <div className="hero-main-content">
          {/* LEFT */}
          <div className="hero-left">
            <span className="system-text"></span>

            <h1 className="glitch-title" data-text={introdata.title}>
              {introdata.title}
            </h1>

            <div className="role-container">
              <span className="bracket">[</span>
              <Typewriter
                options={{
                  strings: [
                    introdata.animated.first,
                    introdata.animated.second,
                    introdata.animated.third,
                  ],
                  autoStart: true,
                  loop: true,
                  wrapperClassName: "role-text",
                }}
              />
              <span className="bracket">]</span>
            </div>

            <p className="hero-description">{introdata.description}</p>

            <div className="action-hub">
              <button className="btn-cyber primary">EXPLORE PROJECTS</button>
              <button className="btn-cyber outline">GET IN TOUCH</button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hero-right">
            <div className="image-portal">
              <div className="portal-ring ring-1"></div>
              <div className="portal-ring ring-2"></div>

              <div className="main-image-frame">
                <img src={introdata.images[0]} alt="Rajnish Kumar" />
                <div className="scan-line"></div>
              </div>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="hero-stats-bar">
          <div className="stat-item">
            <span className="stat-value">20+</span>
            <span className="stat-label">PROJECTS DONE</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-value">1+</span>
            <span className="stat-label">YEARS EXP</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-value">ANY</span>
            <span className="stat-label">TIMEZONE</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
