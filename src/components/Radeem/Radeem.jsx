import React from "react";
import { Divider, TextField } from "@material-ui/core";
import { TimePicker } from "@material-ui/lab";
import DatePicking from "../utils/DatePicking";

const Radeem = () => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="row mb-4 align-items-center">
          <div className="col-lg py-3">
            <Divider className="bg-dark" />
          </div>
          <div className="col-lg-4 text-center">
            <h3>Radeem</h3>
          </div>
          <div className="col-lg py-3">
            <Divider className="bg-dark" />
          </div>
        </div>
        <div className="py-3 row">
          <div className="col-12">
            <b>When Would you like to enjoy this experience?</b>
          </div>
          <div className="col-lg-6 my-2">
            <DatePicking />
          </div>
          <div className="col-lg-6 my-2">
            <DatePicking Picker={TimePicker} />
          </div>
        </div>
        <div className="py-3 row">
          <div className="col-12">
            <b>Best Way to contact you.</b>
          </div>
          <div className="col-lg-6 my-2">
            <TextField
              type="text"
              variant="standard"
              placeholder="First Name"
              inputProps={{ className: `px-3 py-2` }}
              className="form-control overflow-hidden border rounded-pill"
            />
          </div>
          <div className="col-lg-6 my-2">
            <TextField
              type="text"
              variant="standard"
              placeholder="Last Name"
              inputProps={{ className: `px-3 py-2` }}
              className="form-control overflow-hidden border rounded-pill"
            />
          </div>
          <div className="col-lg-6 my-2">
            <TextField
              type="text"
              variant="standard"
              placeholder="Phone Number"
              inputProps={{ className: `px-3 py-2` }}
              className="form-control overflow-hidden border rounded-pill"
            />
          </div>
          <div className="col-lg-6 my-2">
            <TextField
              type="text"
              variant="standard"
              placeholder="Email"
              inputProps={{ className: `px-3 py-2` }}
              className="form-control overflow-hidden border rounded-pill"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Radeem;
