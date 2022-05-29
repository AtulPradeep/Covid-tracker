import React from "react";
import "./About.css";
import { about } from "../../Assets/Covids";

function About() {
  return (
    <div>
      <div
        className="card bg-light mb-3 about-container"
        styles="max-width: 18rem;"
      >
        <div className="card-body">
          <h5 className="card-title">About </h5>
          <p className="card-texts">{about}</p>
        </div>
      </div>
    </div>
  );
}

export default About;
