import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

//Importing components
import Whatiscovid from "./Components/Covid-19/Whatiscovid";
import Symptoms from "./Components/Symptoms/Symptoms";
import About from "./Components/About/About";
import Prevention from "./Components/Prevention/Prevention";
import Header from "./Components/Header/Header";
import Fetch from "./Components/Fetch/Fetch";
import Home from "./Components/HomePage/Home";
import Footer from "./Components/Footer/Footer";

export const DataContext = React.createContext();

function App() {
  //initializing state values
  const [city, setCity] = useState([]);
  const [cityId, setCityId] = useState(13);
  const [dateFrom, setDateFrom] = useState("2022-05-01");
  const [dateTo, setDateTo] = useState("2022-05-25");
  const [tableData, setTableData] = useState([]);

  return (
    <Router>
      <DataContext.Provider
        value={{
          cityId,
          setCityId,
          city,
          setCity,
          dateFrom,
          setDateFrom,
          dateTo,
          setDateTo,
          tableData,
          setTableData,
        }}
      >
        <div className="App">
          <Header />
          <Fetch />
          {/* //Switching for routes */}
          <Switch>
            <Route exact path="/Home">
              <Home />
              <Footer />
            </Route>

            <Route exact path="/">
              <Home />
              <Footer />
            </Route>

            <Route exact path="/About">
              <About />
              <Footer />
            </Route>

            <Route exact path="/Prevention">
              <Prevention />
              <Footer />
            </Route>

            <Route exact path="/Symptoms">
              <Symptoms />
              <Footer />
            </Route>

            <Route exact path="/Covid-19">
              <Whatiscovid />
              <Footer />
            </Route>
            <Redirect to="/Home" />
          </Switch>
        </div>
      </DataContext.Provider>
    </Router>
  );
}

export default App;
