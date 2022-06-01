import React, { useContext, useEffect, useState } from "react";
import "./Table.css";
import ReactTable from "react-table-6";
import { CSVLink } from "react-csv";

import { DataContext } from "../../ContextAPI/DataContext";

const Table = () => {
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

  //Generating table and details on button click
  const handlechangedate = () => {
    if (
      (selectedDateTo && selectedDate) !== null &&
      selectedDateTo > selectedDate
    ) {
      setDateFrom(selectedDate);
      setDateTo(selectedDateTo);
    } else {
      alert("Please enter valid date range");
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
            onChange={(e) => setSelectedDate(e.target.value)}
          />
          <input
            type="date"
            className="inputto"
            onChange={(e) => setSelectedDateTo(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary btn-sm requestbutton"
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
        >
          Download as CSV
        </CSVLink>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Table;
