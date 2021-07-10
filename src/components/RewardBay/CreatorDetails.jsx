import React, { useState } from "react";
import ReactApexCharts from "react-apexcharts";
import { Link } from "react-router-dom";
const CreatorDetails = () => {
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
        <div className="row py-4">
          <div className="col-lg-4">
            <h2>Creator Name</h2>
          </div>
          <div className="col-lg-8">
            <div className="d-flex fw-bold align-items-center justify-content-between">
              <h3 className="active">$2,345</h3>
              <span>
                <span className="text-success">+2.21$(+4.56%)</span> Today
              </span>
              <span>
                <span className="text-success">+2.21$(+4.56%)</span> After Hours
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <h5>Fractions You Own</h5>
            <h1 className="active fw-bold">9</h1>
          </div>
          <div className="col-lg-8">
            <ReactApexCharts
              options={state.options}
              series={state.series}
              type="line"
              height={350}
            />
            <div className="text-end">
              <Link
                to="/postsale"
                className="btn text-white btn-primary me-3 px-5 py-2 rounded-pill"
              >
                <span className="h6">Buy</span>
              </Link>
              <Link
                to="/postsale"
                className="btn text-white btn-dark px-5 py-2 rounded-pill"
              >
                <span className="h6">Sell</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorDetails;
