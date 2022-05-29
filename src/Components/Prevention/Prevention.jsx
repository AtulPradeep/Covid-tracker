import React from "react";
import { prevention } from "../../Assets/Covids";

function Prevention() {
  return (
    <div>
      <div>
        <h3 className="header-covid">How to prevent Covid-19?</h3>
        <div className="whatiscovid">
          <p ClassName="text-covid">{prevention}</p>

          <div className="embed-responsive embed-responsive-21by9 frame">
            <iframe
              className="embed-responsive-item"
              src=" https://www.youtube.com/embed/oqFn6AHoJZQ?rel=0"
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
    </div>
  );
}

export default Prevention;
