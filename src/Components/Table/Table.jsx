import React, { useContext, useEffect, useState } from "react";
import "./Table.css";
import ReactTable from "react-table-6";
import { CSVLink } from "react-csv";

import { DataContext } from "../../ContextAPI/DataContext";

const Table = () => {
  //Getting current date
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + "-" + mm + "-" + dd;

  //Context values
  const { tableData, setDateFrom, setDateTo, cityName } =
    useContext(DataContext);

  // initializing the state variables

  const [filename, setFileName] = useState("default.csv");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDateTo, setSelectedDateTo] = useState(null);

  const columns = [
    { Header: "Date", accessor: "date" },
    { Header: "Total Cases", accessor: "totalCases" },
    { Header: "Active Cases", accessor: "activeCases" },
    { Header: "Recovered", accessor: "recovered" },
  ];

  //Generating table and details on button click also checking all possible error conditions
  const handlechangedate = () => {
    if (selectedDateTo < selectedDate) {
      alert("Incorrect format , please select a valid date");
    } else if (selectedDate > today) {
      alert("Selected date is in future!");
    } else if (selectedDateTo && selectedDate) {
      setDateFrom(selectedDate);
      setDateTo(selectedDateTo);
    } else {
      alert("Please select a From and to dates");
    }
  };
  // Setting intial value
  useEffect(() => {
    setFileName(`${cityName}.csv`);
  }, [cityName]);

  return (
    <div className="table-container">
      <div className="date">
        <div className="date-main">
          <h4>Choose the dates to generate customised results </h4>
          {/* date input from and to */}
          <input
            type="date"
            className="input-from"
            onChange={(e) => setSelectedDate(e.target.value)}
          />
          <input
            type="date"
            className="input-to"
            onChange={(e) => setSelectedDateTo(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary btn-sm requestbutton"
          id="generate-button"
          onClick={handlechangedate}
        >
          Generate
        </button>
      </div>

      {/* // React table to show items. */}
      <ReactTable
        data={tableData}
        columns={columns}
        style={{ textAlign: "center" }}
        pageSize={8}
      />

      {tableData !== undefined ? (
        <CSVLink
          className="btn btn-primary generate"
          data={tableData}
          filename={filename}
          id="export-button"
        >
          Export as CSV
        </CSVLink>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Table;
