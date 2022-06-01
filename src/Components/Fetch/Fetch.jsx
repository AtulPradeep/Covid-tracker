import React from "react";
import Axios from "axios";
import { useEffect, useContext } from "react";

import { DataContext } from "../../ContextAPI/DataContext";

function Fetch() {
  //Data contexts
  const { cityId, setCity, dateFrom, dateTo, setTableData } =
    useContext(DataContext);
  // Fetching the API with dateto and from

  const getarticle = async () => {
    const data = [];

    const res = await Axios.get(
      `https://api.corona-karlsruhe.info/v1/city_infections?cityId=${cityId}&from=${dateFrom}&until=${dateTo}`
    ).catch((err) => alert("Bad request Error 404"));
    res?.data.cityInfections.forEach((item) =>
      data.push({
        date: item.date,
        totalCases: item.totalCases,
        activeCases: item.activeCases,
        recovered: item.totalCases - item.activeCases,
      })
    );
    setTableData(data);
  };
  useEffect(() => {
    getarticle();
  }, [dateTo, dateFrom, cityId]);

  //Fetching latest infection data

  const getTotal = async () => {
    const response = await Axios.get(
      `https://api.corona-karlsruhe.info/v1/latest_infections`
    ).catch((err) => alert("Bad request Error 404"));

    setCity(response.data.latestInfections);
  };
  useEffect(() => {
    getTotal();
  }, []);

  return <></>;
}

export default Fetch;
