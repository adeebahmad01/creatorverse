import React, { useState } from "react";
import ReactApexCharts from "react-apexcharts";
import { useData } from "../../context/DataContext";

const Graph = () => {
  const { creators, activeUser, presales } = useData();
  const [name, setName] = useState("presale");

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
  const checkPresaleOrPostSale = (presale) => {
    if (presale?.id) {
      if (typeof presale.isPostsale === "boolean") {
        if (presale.isPostsale) {
          return "postsale";
        } else {
          return "presale";
        }
      } else if (new Date(presale.end_time).getTime() < Date.now())
        return "postsale";
      else return "presale";
    } else {
      return "presale";
    }
  };
  // multiply all prices: number and points_owned: number owned in activeUser.creators_subscribed = [] by reduce method
  const total = activeUser.creators_subscribed.reduce((acc, curr) => {
    const creator =
      creators.find((creator) => creator.id === curr?.creatorId) || {};
    const presale =
      presales.find((presale) => presale.creators.name === creator.id) || {};
    const name = checkPresaleOrPostSale(presale);
    console.log({ creator, presale, name });
    const price = creator?.[`fraction_${name}_price`]?.split("$")?.[0];
    const points_owned = curr.points_owned;
    console.log({ price, points_owned });
    const price_points_owned = price * points_owned;
    return acc + price_points_owned;
  }, 0);
  console.log(total);
  return (
    <div>
      <div className="container">
        <div className="fw-bold">
          <h1 className="active fw-bold">${total.toLocaleString()}</h1>
          <p>
            <span className="text-success">+$2.21(+4.56%)</span> Today
          </p>
          <div>
            <span className="text-success">+$2.21(+4.56%)</span> After Hours
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
