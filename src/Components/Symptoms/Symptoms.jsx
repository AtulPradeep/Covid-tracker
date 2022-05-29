import React from "react";
import { symptoms, symptoms_continue } from "../../Assets/Covids";
import "./Symptoms.css";

function Symptoms() {
  const symptoms_list = [
    "Fever or chills",
    "Cough",
    "Shortness of breath",
    "Fatigue or body aches",
    "Muscle or body aches",
    "Headache",
  ];
  return (
    <div>
      <h3 className="header-symptoms">Watch for Symptoms</h3>
      <p className="text-covid">{symptoms}</p>
      {symptoms_list.map((item, index) => {
        return (
          <ul className="list-group symptoms-list">
            <li key={index} className="list-symptoms-item">
              {item}
            </li>
          </ul>
        );
      })}
      <p className="symptoms-conclusion">{symptoms_continue}</p>
    </div>
  );
}

export default Symptoms;
