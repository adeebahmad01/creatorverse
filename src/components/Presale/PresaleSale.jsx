import React, { useRef } from "react";
import { TextField } from "@material-ui/core";
import { db } from "../../config/Firebase";
import { useData } from "./../../context/DataContext";
import { useHandling } from "./../../context/HandleContext";

const PresaleSale = ({ presale }) => {
  const ref = useRef(null);
  const { activeUser } = useData();
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
  return (
    <div className="py-5">
      <div className="container">
        <div className="row mb-3">
          <div className="col-lg">
            <h6>Sale Ends In</h6>
            <h1 className="active fw-bold">32: 45: 45</h1>
          </div>
          <div className="col-lg">
            <h6>Price Per Unit</h6>
            <h1 className="active fw-bold">{presale.price}</h1>
          </div>
          <div className="col-lg-5">
            <h6>Unit Sold</h6>
            <h1 className="active fw-bold">
              {(+presale.fractions_sold)?.toLocaleString()}/
              {(+presale.total_fractions)?.toLocaleString()}
            </h1>
            <div className="progress rounded-pill" style={{ height: "20px" }}>
              <div
                className="progress-bar rounded-pill custom"
                role="progressbar"
                style={{
                  width: `${
                    (presale.fractions_sold / presale.total_fractions) * 100
                  }%`,
                }}
                aria-valuenow={presale.fractions_sold}
                aria-valuemin="0"
                aria-valuemax={presale.total_fractions}
              ></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <h6>Fractions You Own</h6>
            <h1 className="active fw-bold">
              {(
                +presale.total_fractions - +presale.fractions_sold
              )?.toLocaleString()}
            </h1>
          </div>
          <div className="col-lg-5">
            <h6>Buy Fractions</h6>
            <form onSubmit={handleSubmit} className="d-flex">
              <TextField
                type="text"
                inputRef={ref}
                variant="standard"
                placeholder="# of fractions"
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
  );
};

export default PresaleSale;
