import React from "react";
import { useState, useContext, useEffect } from "react";
import "./HomePage.css";
import "react-table-6/react-table.css";
import Graph from "../Graph/Graph";
import Table from "../Table/Table";

import { DataContext } from "../../App";

function Home() {
  const { city, setCityId } = useContext(DataContext);

  const [totalCases, setTotalCases] = useState(0);
  const [activeCases, setActiveCases] = useState(0);
  const [cityname, setCityName] = useState("");

  const handlechange = (e) => {
    setTotalCases(city[e].totalCases);
    setActiveCases(city[e].activeCases);
    setCityName(city[e].cityName);
    setCityId(city[e].cityId);
  };

  useEffect(() => {
    if (city[12] !== undefined && totalCases === 0) {
      handlechange(12);
    }
  }, [city]);

  return (
    <div className="hometracker">
      <div className="card-container">
        <div className="card" styles="width: 18rem;">
          <div className="card-body">
            <h6 className="card-title">City : {cityname}</h6>

            <div className="cardw">
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Choose City
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  {city.map((item, index) => {
                    return (
                      <li key={index}>
                        <button
                          className="dropdown-item"
                          value={item.cityName}
                          onClick={() => handlechange(index)}
                        >
                          {item.cityName}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="spinners">
              <div
                className="spinner-grow spinner-grow-sm live"
                role="status"
              ></div>
              <p>Live</p>
            </div>
          </div>
        </div>
        <div className="card" id="totalcard" styles="width: 18rem;">
          <div className="card-body">
            <h3 className="card-title">{totalCases}</h3>
            <h4 className="card-text" id="total">
              Total
            </h4>
          </div>
        </div>

        <div className="card" id="deathcard" styles="width: 18rem;">
          <div className="card-body">
            <h3 className="card-title">{activeCases}</h3>
            <h4 className="card-text" id="active">
              Active
            </h4>
          </div>
        </div>

        <div className="card" id="recoveredcard" styles="width: 18rem;">
          <div className="card-body">
            <h3 className="card-title">{totalCases - activeCases}</h3>
            <h4 className="card-text" id="recovered">
              Inactive
            </h4>
          </div>
        </div>
      </div>
      <div className="info-container">
        <Graph />

        <Table cityName={cityname} />
      </div>
    </div>
  );
}

export default Home;
