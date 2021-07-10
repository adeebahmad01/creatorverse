import React from "react";
import presale from "../../JSON/presale.json";
import { TextField } from "@material-ui/core";
const PresaleSale = () => {
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
            <h1 className="active fw-bold">
              ${presale.price_per_fraction.toFixed(2)}
            </h1>
          </div>
          <div className="col-lg-5">
            <h6>Unit Sold</h6>
            <h1 className="active fw-bold">
              {presale.fractions_sold.toLocaleString()}/
              {presale.fraction_for_sale.toLocaleString()}
            </h1>
            <div className="progress rounded-pill" style={{ height: "20px" }}>
              <div
                className="progress-bar rounded-pill custom"
                role="progressbar"
                style={{
                  width: `${
                    (presale.fractions_sold / presale.fraction_for_sale) * 100
                  }%`,
                }}
                aria-valuenow={presale.fractions_sold}
                aria-valuemin="0"
                aria-valuemax={presale.fraction_for_sale}
              ></div>
            </div>
          </div>
        </div>
        <div className="row">
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
                inputProps={{ className: `p-3` }}
                className="form-control overflow-hidden border rounded-pill"
              />
              <button className="btn btn-primary ms-3 rounded-pill custom px-5">
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresaleSale;
