import React, { useState, useRef } from "react";
import ReactApexCharts from "react-apexcharts";
import { TextField } from "@material-ui/core";
import { useData } from "../../context/DataContext";
// import useParams react-router-dom
import { useParams } from "react-router-dom";
import { db } from "../../config/Firebase";
// import useHandling from "../../context/Handling";
import { useHandling } from "../../context/HandleContext";
const Summary = ({ handleSubmit: handleSecretSubmit }) => {
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
  const activePresale =
    activeUser.creators_subscribed.find((points) => {
      return points.creatorId === presale.creators?.name;
    }) || {};
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const batch = db.batch();
      if (+ref.current.value < 0) {
        throw new Error("Value Cannot be Negative");
      }
      const points_sold = +presale.points_sold + +ref.current.value;
      if (points_sold > presale.total_points) {
        throw new Error("Sale cannot be completed.");
      }

      // check if user id is already in activeUser.creators_subscribed = []
      const presence = activeUser.creators_subscribed.findIndex((points) => {
        return points.creatorId === presale.creators?.name;
      });
      if (presence !== -1) {
        activeUser.creators_subscribed[presence].points_owned +=
          +ref.current.value;
      } else {
        activeUser.creators_subscribed.push({
          creatorId: presale.creators?.name,
          price: presale.price.split("$")[0],
          points_owned: +ref.current.value,
          market_value: 0,
          day_gain: 0,
          gain: 0,
        });
      }

      const investorData = {
        ...activeUser,
        points_owned: (+activeUser.points_owned || 0) + +ref.current.value,
      };

      batch.update(db.collection("presales").doc(presale.id), {
        points_sold,
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
  const personActive =
    activeUser.creators_subscribed.find((points) => {
      return points.creatorId === presale.creators?.name;
    }) || {};
  const handleSubmit2 = async (event) => {
    event.preventDefault();
    try {
      const batch = db.batch();
      if (+ref2.current.value < 0) {
        throw new Error("Value Cannot be Negative");
      }
      const points_owned =
        (+activeUser.points_owned || 0) - +ref2.current.value;
      const points_sold = +presale.points_sold - +ref2.current.value;
      if (points_owned < 0) {
        throw new Error("Sale cannot be completed.");
      }

      // check if user id is already in activeUser.creators_subscribed = []
      const presence = activeUser.creators_subscribed.findIndex((points) => {
        return points.creatorId === presale.creators?.name;
      });
      if (presence !== -1) {
        activeUser.creators_subscribed[presence].points_owned -=
          +ref2.current.value;
      } else {
        throw new Error("Sale Doesn.t exist.");
      }

      const investorData = {
        ...activeUser,
        points_owned,
      };

      batch.update(db.collection("presales").doc(presale.id), {
        points_sold,
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
    <div className="my-3 pt-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 d-flex justify-content-center flex-column align-items-center">
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
            <div className="d-flex w-100 text-end flex-column p-2 justify-content-between">
              <span className="fw-bold d-inline-block mb-3">
                Price Per Point
              </span>
              <h1 className="active">
                {(personActive.price || 0).toLocaleString()}$
              </h1>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="tabs">
              <a href="#top" className="mx-3 tab_btn active">
                Summary
              </a>
              <a href="#top" className="mx-3 tab_btn">
                News
              </a>
              <a href="#top" className="mx-3 tab_btn">
                Fundamentals
              </a>
              <a href="#top" className="mx-3 tab_btn">
                Calendar
              </a>
              <a href="#top" className="mx-3 tab_btn">
                Analysis
              </a>
              <a href="#top" className="mx-3 tab_btn">
                Peer Comparison
              </a>
            </div>
            <div className="fw-bold pt-4">
              <h3 className="active fw-bold">
                $
                {(
                  personActive.points_owned * personActive.price || 0
                ).toLocaleString()}
              </h3>
              <div>
                <span className="text-success">+2.21$(+4.56%)</span> Today
              </div>
              <div>
                <span className="text-success">+2.21$(+4.56%)</span> After Hours
              </div>
            </div>
            <ReactApexCharts
              options={state.options}
              series={state.series}
              type="line"
              height={350}
            />
          </div>
        </div>
        <hr />
        <div className="row pt-4">
          <div className="col-lg-4">
            <h6>Points You Own</h6>
            <h1 className="active fw-bold">
              {(+activePresale.points_owned || 0)?.toLocaleString()}
            </h1>
          </div>
          <div className="col-lg-5">
            <h6>Buy Points</h6>
            <form onSubmit={handleSubmit} className="d-flex">
              <TextField
                type="text"
                variant="standard"
                inputRef={ref}
                placeholder="# of points"
                inputProps={{ className: `px-3 py-2` }}
                className="form-control overflow-hidden border rounded-pill"
              />
              <button className="btn btn-primary ms-3 rounded-pill custom px-5">
                Buy
              </button>
            </form>
          </div>
          <div className="col-lg-3">
            <form onSubmit={handleSecretSubmit} action="">
              <button className="btn bg-white border-white btn-light text-white">
                Convert to Presale
              </button>
            </form>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-4"></div>
          <div className="col-lg-8">
            <h6>Sell points</h6>
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
