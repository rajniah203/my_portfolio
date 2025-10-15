import React from "react";
import "./Home.css";
import { introdata } from "../../content_option";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        {/* Text Section */}
        <div className="home-text">
          <h1>{introdata.title}</h1>
          <h2>
            <Typewriter
              options={{
                strings: [
                  introdata.animated.first,
                  introdata.animated.second,
                  introdata.animated.third,
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 10,
              }}
            />
          </h2>
          <p>{introdata.description}</p>
          <div className="home-buttons">
            <Link to="/portfolio" className="btn btn-primary">
              View Portfolio
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Contact Me
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="home-image">
          <img src={introdata.your_img_url} alt="Rajnish Kumar" />
        </div>
      </div>
    </div>
  );
}

export default Home;
