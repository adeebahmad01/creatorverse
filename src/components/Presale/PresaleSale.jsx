import React, { useEffect, useRef, useState } from "react";
import { TextField } from "@material-ui/core";
import { db } from "../../config/Firebase";
import { useData } from "../../context/DataContext";
import { useHandling } from "../../context/HandleContext";

const PresaleSale = ({ presale, creator }) => {
  const ref = useRef(null);
  const { activeUser } = useData();
  const { setError } = useHandling();
  const [timeLeft, setTimeLeft] = useState({});
  const times = ["hours", "minutes", "seconds"];
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
          price: +creator?.fraction_presale_price?.split("$")?.[0],
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
      batch.update(db.collection("presales").doc(presale.id), { points_sold });
      batch.update(db.collection("investors").doc(activeUser.id), investorData);
      await batch.commit();
      ref.current.value = "";
    } catch (err) {
      setError(err);
    }
  };
  useEffect(() => {
    const updateTime = () => {
      const timer = new Date(presale.end_time || Date.now()).getTime();
      const now = Date.now();
      const remainingTime = timer - now;
      const prevSeconds = Math.floor(remainingTime / 1000);
      const prevMinutes = Math.floor(prevSeconds / 60);
      const seconds = prevSeconds % 60;
      const hours = Math.floor(prevMinutes / 60);
      const minutes = prevMinutes % 60;
      if (hours >= 0 && minutes >= 0 && seconds >= 0)
        setTimeLeft({ seconds, minutes, hours });
    };
    const myInterval = setInterval(updateTime, 1000);
    return () => clearInterval(myInterval);
  }, [presale.end_time]);
  const activePresale =
    activeUser.creators_subscribed.find((points) => {
      return points.creatorId === presale.creators?.name;
    }) || {};
  return (
    <>
      <div className="py-5">
        <h1 className="mb-5 active">Presale</h1>
        <div className="container">
          <div className="row mb-3">
            <div className="col-7">
              <h6>Sale Ends In</h6>
              <h1 style={{ "--primary": "#c44d16" }} className="active fw-bold">
                {times
                  .map((el) =>
                    timeLeft[el] > 9
                      ? timeLeft[el]
                      : timeLeft[el]
                      ? "0" + timeLeft[el]
                      : "00"
                  )
                  .join(":")}
                <img
                  src="https://forum.bubble.io/uploads/default/original/3X/b/c/bcaa47ad6c458b27fdda1af74a286cbd6117f7c7.gif"
                  alt="Loader"
                  width={60}
                />
              </h1>
            </div>
            <div className="col-5">
              <h6>Price Per Unit</h6>
              <h1 className="active fw-bold">
                ${+creator?.fraction_presale_price?.split("$")?.[0]}
              </h1>
            </div>
            <div className="col-6">
              <h6>Unit Sold</h6>
              <h1 className="active fw-bold">
                {(+presale.points_sold)?.toLocaleString()}/
                {(+presale.total_points)?.toLocaleString()}
              </h1>
              <div className="progress rounded-pill" style={{ height: "20px" }}>
                <div
                  className="progress-bar rounded-pill custom"
                  role="progressbar"
                  style={{
                    width: `${
                      (presale.points_sold / presale.total_points) * 100
                    }%`,
                  }}
                  aria-valuenow={presale.points_sold}
                  aria-valuemin="0"
                  aria-valuemax={presale.total_points}
                ></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h6>Points You Own</h6>
              <h1 className="active fw-bold">
                {(+activePresale.points_owned || 0)?.toLocaleString()}
              </h1>
            </div>
            <div className="col-12">
              <h6>Buy Points</h6>
              <form onSubmit={handleSubmit} className="d-flex">
                <TextField
                  type="text"
                  inputRef={ref}
                  variant="standard"
                  placeholder="# of points"
                  inputProps={{ className: `p-3` }}
                  className="form-control overflow-hidden border rounded-pill"
                />
                <button className="btn btn-primary ms-3 rounded-pill custom px-5">
                  Buy
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PresaleSale;
