import React from "react";
import Divider from "@material-ui/core/Divider";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { TextField } from "@material-ui/core";

const Export = () => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg py-3">
            <Divider className="bg-dark" />
          </div>
          <div className="col-lg-4 text-center">
            <h3>Export</h3>
            <h6>In Partership with Open Seas</h6>
          </div>
          <div className="col-lg py-3">
            <Divider className="bg-dark" />
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-lg-5">
            <h6>Quantity</h6>
            <div className="d-flex">
              <TextField
                type="text"
                variant="standard"
                placeholder="# of fractions"
                inputProps={{ className: `px-3 py-2` }}
                className="form-control overflow-hidden border rounded-pill"
              />
            </div>
          </div>
          <div className="col-lg-7">
            <h6>Price Per Item</h6>
            <div className="d-flex flex-nowrap input-group">
              <select
                type="text"
                placeholder="# of fractions"
                className="form-select w-auto px-4 py-1"
                style={{ backgroundColor: `#ccc` }}
                value=""
              >
                <option value="" disabled>
                  ETH
                </option>
              </select>
              <TextField
                type="text"
                variant="standard"
                placeholder="# of fractions"
                inputProps={{ className: `px-3 py-2` }}
                defaultValue="35"
                className="form-control overflow-hidden border w-75"
              />
            </div>
          </div>
        </div>
        <div className="row mt-3 py-5">
          <div className="col-lg-5">
            <h5>
              Fees{" "}
              <span className="active">
                <AiOutlineInfoCircle />
              </span>
            </h5>
            <div className="active">
              <div className="d-flex justify-content-between align-items-center">
                <div>Open Seas Fee</div>
                <Divider className="w-50 active_bg" />
                <span>22.50$</span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div>Revenue Fee</div>
                <Divider className="w-50 active_bg" />
                <span>10%</span>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="d-flex justify-content-between align-items-center">
              <h5>Total Earnings</h5>
              <Divider className="w-50 active_bg" />
              <span>
                <SiEthereum />
                10 ETH
              </span>
            </div>
            <h1 className="text-end active mb-4">80,124$</h1>
            <div className="text-end">
              <button className="btn fw-bold btn-dark mx-2 px-5 rounded-pill">
                Export
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Export;
