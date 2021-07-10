import React, { useState } from "react";
import ReactApexCharts from "react-apexcharts";
import presale from "../../JSON/presale.json";
import { TextField } from "@material-ui/core";

const Summary = () => {
  const [state] = useState({
    series: [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      grid: {
        row: {
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: ["1D", "1W", "1M", "3M", "1Y", "All"],
      },
      yaxis: {
        opposite: true,
      },
    },
  });
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 d-flex justify-content-center align-items-center">
            <div className="rounded-5 custom w-100 p-3">
              <div className="d-flex text-white p-2 justify-content-between">
                <span className="fw-bold">Days Range</span>
                <span>131-133</span>
              </div>
              <div className="d-flex text-white p-2 justify-content-between">
                <span className="fw-bold">Avg. Vol(10 days)</span>
                <span>91.6M</span>
              </div>
              <div className="d-flex text-white p-2 justify-content-between">
                <span className="fw-bold">Market Cap</span>
                <span>2.2T</span>
              </div>
              <div className="d-flex text-white p-2 justify-content-between">
                <span className="fw-bold">Shares Outstanding</span>
                <span>16.8B</span>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="tabs">
              <a href="#" className="mx-2 tab_btn active">
                Summary
              </a>
              <a href="#" className="mx-2 tab_btn">
                News
              </a>
              <a href="#" className="mx-2 tab_btn">
                Fundamentals
              </a>
              <a href="#" className="mx-2 tab_btn">
                Calendar
              </a>
              <a href="#" className="mx-2 tab_btn">
                Analysis
              </a>
              <a href="#" className="mx-2 tab_btn">
                Peer Comparison
              </a>
            </div>
            <ReactApexCharts
              options={state.options}
              series={state.series}
              type="line"
              height={350}
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-4">
            <h6>Fractions You Own</h6>
            <h1 className="active fw-bold">
              {presale.fraction_for_sale.toLocaleString()}
            </h1>
          </div>
          <div className="col-lg-5">
            <h6>Buy Fractions</h6>
            <div className="d-flex">
              <TextField
                type="text"
                variant="standard"
                placeholder="# of fractions"
                inputProps={{ className: `px-3 py-2` }}
                className="form-control overflow-hidden border rounded-pill"
              />
              <button className="btn btn-primary ms-3 rounded-pill custom px-5">
                Buy
              </button>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-lg-4"></div>
          <div className="col-lg-8">
            <h6>Sell Fractions</h6>
            <div className="d-flex">
              <select
                type="text"
                className="form-select rounded-pill me-2 px-3 py-1"
                value=""
              >
                <option value="" disabled>
                  Limit Order
                </option>
              </select>
              <TextField
                type="text"
                variant="standard"
                placeholder="# of Units"
                inputProps={{ className: `px-3 py-2` }}
                className="form-control overflow-hidden border rounded-pill"
              />
              <button className="btn btn-dark rounded-pill px-5">Sell</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
