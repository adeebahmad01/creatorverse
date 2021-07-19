import React, { useState, useRef } from "react";
import ReactApexCharts from "react-apexcharts";
import { TextField } from "@material-ui/core";
import { useData } from "../../context/DataContext";
// import useParams react-router-dom
import { useParams } from "react-router-dom";
import { db } from "../../config/Firebase";
// import useHandling from "../../context/Handling";
import { useHandling } from "../../context/HandleContext";
const Summary = () => {
  const { id } = useParams();
  const { activeUser, presales } = useData();
  const presale = presales.find((presale) => presale.id === id) || {};
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
  const ref = useRef(null);
  const ref2 = useRef(null);
  const { setError } = useHandling();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const batch = db.batch();
      if (+ref.current.value < 0) {
        throw new Error("Value Cannot be Negative");
      }
      const fractions_sold = +presale.fractions_sold + +ref.current.value;
      if (fractions_sold > presale.total_fractions) {
        throw new Error("Sale cannot be completed.");
      }

      // check if user id is already in activeUser.creators_subscribed = []
      const presence = activeUser.creators_subscribed.findIndex((fractions) => {
        return fractions.creatorId === presale.creators?.name;
      });
      if (presence !== -1) {
        activeUser.creators_subscribed[presence].fractions_owned +=
          +ref.current.value;
      } else {
        activeUser.creators_subscribed.push({
          creatorId: presale.creators?.name,
          price: presale.price.split("$")[0],
          fractions_owned: +ref.current.value,
          market_value: 0,
          day_gain: 0,
          gain: 0,
        });
      }

      const investorData = {
        ...activeUser,
        fractions_owned:
          (+activeUser.fractions_owned || 0) + +ref.current.value,
      };

      batch.update(db.collection("presales").doc(presale.id), {
        fractions_sold,
      });
      batch.set(db.collection("investors").doc(activeUser.id), investorData, {
        merge: true,
      });
      await batch.commit();
      ref.current.value = "";
    } catch (err) {
      setError(err);
    }
  };
  const handleSubmit2 = async (event) => {
    event.preventDefault();
    try {
      const batch = db.batch();
      if (+ref2.current.value < 0) {
        throw new Error("Value Cannot be Negative");
      }
      const fractions_owned =
        (+activeUser.fractions_owned || 0) - +ref2.current.value;
      const fractions_sold = +presale.fractions_sold - +ref2.current.value;
      if (fractions_owned < 0) {
        throw new Error("Sale cannot be completed.");
      }

      // check if user id is already in activeUser.creators_subscribed = []
      const presence = activeUser.creators_subscribed.findIndex((fractions) => {
        return fractions.creatorId === presale.creators?.name;
      });
      if (presence !== -1) {
        activeUser.creators_subscribed[presence].fractions_owned -=
          +ref2.current.value;
      } else {
        throw new Error("Sale Doesn.t exist.");
      }

      const investorData = {
        ...activeUser,
        fractions_owned,
      };

      batch.update(db.collection("presales").doc(presale.id), {
        fractions_sold,
      });
      batch.set(db.collection("investors").doc(activeUser.id), investorData, {
        merge: true,
      });
      await batch.commit();
      ref2.current.value = "";
    } catch (err) {
      setError(err);
    }
  };
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
              <a href="#top" className="mx-2 tab_btn active">
                Summary
              </a>
              <a href="#top" className="mx-2 tab_btn">
                News
              </a>
              <a href="#top" className="mx-2 tab_btn">
                Fundamentals
              </a>
              <a href="#top" className="mx-2 tab_btn">
                Calendar
              </a>
              <a href="#top" className="mx-2 tab_btn">
                Analysis
              </a>
              <a href="#top" className="mx-2 tab_btn">
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
              {(
                +presale.total_fractions - +presale.fractions_sold
              ).toLocaleString()}
            </h1>
          </div>
          <div className="col-lg-5">
            <h6>Buy Fractions</h6>
            <form onSubmit={handleSubmit} className="d-flex">
              <TextField
                type="text"
                variant="standard"
                inputRef={ref}
                placeholder="# of fractions"
                inputProps={{ className: `px-3 py-2` }}
                className="form-control overflow-hidden border rounded-pill"
              />
              <button className="btn btn-primary ms-3 rounded-pill custom px-5">
                Buy
              </button>
            </form>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-lg-4"></div>
          <div className="col-lg-8">
            <h6>Sell Fractions</h6>
            <form onSubmit={handleSubmit2} className="d-flex">
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
                inputRef={ref2}
                variant="standard"
                placeholder="# of Units"
                inputProps={{ className: `px-3 py-2` }}
                className="form-control overflow-hidden border rounded-pill"
              />
              <button className="btn btn-dark rounded-pill px-5">Sell</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
