import React from "react";

import Navbar from "../components/Navbar";
import "./styles/Landing.scss";

function Landing() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="LandingHeader">
        <h1 className="landing-title">D214TutorConnect</h1>
      </div>
      <div className="App-main">
        <h2>Find a Peer Tutor</h2>
      </div>
      <p>Get connected with tutors who can help you succeed!</p>
      <p>Get Started By Signing Up!</p>
    </div>
  );
}

export default Landing;
