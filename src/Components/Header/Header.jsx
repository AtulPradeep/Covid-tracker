import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ionos from "../../Assets/ionos.png";

function Header() {
  // Creating array for mapping navigation menu
  const navigation = ["Home", "Covid-19", "Symptoms", "Prevention", "About"];
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          {/* // Creating logo */}
          {/* <img
            src={ionos}
            className="me-2"
            height="40"
            alt="IONOS LOGO"
            loading="lazy"
          /> */}
          <Link className="navbar-brand" to="/Home">
            Covid Tracker
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            {/* mapping throigh and displaying  items in navigation bar */}

            <ul className="navbar-nav">
              {navigation.map((item, index) => {
                return (
                  <li key={index} className="nav-item">
                    <Link
                      className="btn btn-link"
                      id="navbutton"
                      to={`/${item}`}
                    >
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
