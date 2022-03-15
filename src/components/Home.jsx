import React from "react";
import NavBar from "./NavBar";
import intro from "../images/illustration-intro.png";

function Home() {
  return (
    <div className="home">
      <NavBar />
      <div className="hero-image">
        <img src={intro} alt="intro" />
        <div className="hero">
          <div className="hero-text">
            All files in one secure location, <br /> accessible anywhere.
          </div>
          <div className="hero-description">
            Fylo stores all your most important files in one secure location,
            Access them wherever you need, share and collaborate with friends
            and family, and co-workers.
          </div>
        </div>
        <div className="cta-btn">Get Started</div>
      </div>
    </div>
  );
}

export default Home;
