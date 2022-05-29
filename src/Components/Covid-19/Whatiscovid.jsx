import React from "react";
import "./Covid.css";
import { covid } from "../../Assets/Covids";

function Whatiscovid() {
  return (
    <div>
      <h3 className="header-covid">What is Covid-19?</h3>
      <div className="whatiscovid">
        <p ClassName="text-covid">{covid}</p>

        <div className="embed-responsive embed-responsive-21by9 frame">
          <iframe
            className="embed-responsive-item"
            src="https://www.youtube.com/embed/D9tTi-CDjDU?rel=0"
            allowfullscreen
            width={440}
            height={300}
          ></iframe>
        </div>
      </div>
      <a
        className=" navigation-link"
        href="https://www.who.int/health-topics/coronavirus#tab=tab_1"
      >
        Visit WHO website for more informations{" "}
      </a>
    </div>
  );
}

export default Whatiscovid;
