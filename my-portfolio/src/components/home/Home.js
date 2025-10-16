import React from "react";
import Typewriter from "typewriter-effect";
import { introdata } from "../../content_option";
import "./Home.css";

function Home() {
  return (
    <section className="home-container" id="home">
      <div className="home-content">
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
              }}
            />
          </h2>
          <p>{introdata.description}</p>
        </div>
        <div className="home-image">
          <img src={introdata.images[0]} alt="Rajnish Kumar" />
        </div>
      </div>
    </section>
  );
}

export default Home;
