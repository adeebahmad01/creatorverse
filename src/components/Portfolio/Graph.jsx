import React, { useState } from "react";
import ReactApexCharts from "react-apexcharts";

const Graph = () => {
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
        <div className="fw-bold">
          <h1 className="active fw-bold">$2,345.00</h1>
          <p>
            <span className="text-success">+2.21$(+4.56%)</span> Today
          </p>
          <div>
            <span className="text-success">+2.21$(+4.56%)</span> After Hours
          </div>
        </div>
        <div className="graph">
          <ReactApexCharts
            options={state.options}
            series={state.series}
            type="line"
            height={450}
          />
        </div>
      </div>
    </div>
  );
};

export default Graph;
