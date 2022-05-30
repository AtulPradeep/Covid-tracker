import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";

//Importing components
import Covid from "./Components/Covid-19/Covid";
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
  const routerArr = ["Home", "Symptoms", "Prevention", "About", "Covid-19"];
  const routerComp = [
    <Home />,
    <Symptoms />,
    <Prevention />,
    <About />,
    <Covid />,
  ];
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
          <Switch>
            {routerArr.map((item, index) => {
              return (
                <Route key={index} exact path={`/${item}`}>
                  {routerComp[index]}
                </Route>
              );
            })}
            <Redirect to="/Home" />
          </Switch>
          <Footer />
        </div>
      </DataContext.Provider>
    </Router>
  );
}

export default App;
