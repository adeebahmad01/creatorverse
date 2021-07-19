import React, { useState } from "react";
import ReactApexCharts from "react-apexcharts";
import { useData } from "../../context/DataContext";

const Graph = () => {
  const { activeUser } = useData();
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
  // multiply all prices: number and fractions_owned: number owned in activeUser.creators_subscribed = [] by reduce method
  const total = activeUser.creators_subscribed.reduce((acc, curr) => {
    const price = curr.price;
    const fractions_owned = curr.fractions_owned;
    console.log({ price, fractions_owned });
    const price_fractions_owned = price * fractions_owned;
    return acc + price_fractions_owned;
  }, 0);
  console.log(total);
  return (
    <div>
      <div className="container">
        <div className="fw-bold">
          <h1 className="active fw-bold">${total.toLocaleString()}</h1>
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
