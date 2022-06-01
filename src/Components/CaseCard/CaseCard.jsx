import React from "react";
import { useState, useContext, useEffect } from "react";
import "./CaseCard.css";
import "react-table/react-table.css";

import { DataContext } from "../../ContextAPI/DataContext";

function Showbar() {
  const { city, setCityId, cityName, setCityName } = useContext(DataContext);

  const [totalCases, setTotalCases] = useState(0);
  const [activeCases, setActiveCases] = useState(0);

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
    <div className="parent-container">
      <div className="card-container">
        {/* card for choosing city and displaying live */}

        <div className="card city-select" styles="width: 18rem;">
          <div className="spinners-text">
            <div className="spinner-grow spinner-grow" role="status"></div>
            <p>Live</p>
          </div>

          {/* //Dropdown for selecting cities */}

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
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
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

        {/* card for displaying totalcases */}

        <div className="card" id="totalcard" styles="width: 18rem;">
          <div className="card-body">
            <h3 className="card-title">{totalCases}</h3>
            <h4 className="card-text" id="total">
              Total
            </h4>
          </div>
        </div>

        {/* card for displaying activecases */}

        <div className="card" id="deathcard" styles="width: 18rem;">
          <div className="card-body">
            <h3 className="card-title">{activeCases}</h3>
            <h4 className="card-text" id="active">
              Active
            </h4>
          </div>
        </div>

        {/* card for displaying inactivecases */}

        <div className="card" id="recoveredcard" styles="width: 18rem;">
          <div className="card-body">
            <h3 className="card-title">{totalCases - activeCases}</h3>
            <h4 className="card-text" id="recovered">
              Inactive
            </h4>
          </div>
        </div>
      </div>{" "}
      {/* end of card container */}
      {/* displaying selected city name */}
      <div className="city-title">
        <h6 className="card-title-show-city">City : {cityName}</h6>
      </div>
    </div>
  );
}

export default Showbar;