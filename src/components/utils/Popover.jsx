import Popover from "@material-ui/core/Popover";
import React, { useState } from "react";
import ReactApexCharts from "react-apexcharts";
import { Link } from "react-router-dom";
export default function HoverableTableRow({ i = 0 }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [random] = useState(Math.floor(Math.random() * 6) + 1);
  const [state] = useState({
    series: [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    options: {
      chart: {
        height: 200,
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
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "mouse-over-popover" : undefined;

  return (
    <tr
      align="center"
      onMouseEnter={handlePopoverOpen}
      onMouseLeave={handlePopoverClose}
      style={{ fontWeight: `500`, verticalAlign: `middle` }}
    >
      <td align="left">
        <img
          width={70}
          className="rounded-5 shadow-sm d-inline-block my-2 me-2"
          src="https://images.unsplash.com/photo-1551179939-b839002d0a18?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
          alt=""
        />
        Creator Name
        <Popover
          id={id}
          disableScrollLock
          disableRestoreFocus
          open={open}
          anchorEl={anchorEl}
          onClose={handlePopoverClose}
          anchorOrigin={{
            vertical: "center",
            horizontal: "center",
          }}
          sx={{
            pointerEvents: "none",
          }}
          PaperProps={{
            style: { pointerEvents: "auto", maxWidth: 500, width: `100%` },
            className: "rounded-5 border p-3",
          }}
          transformOrigin={{
            vertical: "center",
            horizontal: "center",
          }}
        >
          <div>
            <div className="d-flex w-100 justify-content-between align-items-center">
              <h5 className="active">$2,345</h5>
              <span className=" f-sm d-inline-block ms-2">
                <span className="text-success">+2.21$(+4.56%)</span> Today
              </span>
              <span className=" f-sm d-inline-block ms-2">
                <span className="text-success">+2.21$(+4.56%)</span> After Hours
              </span>
            </div>
            <div className="graph my-2">
              <ReactApexCharts
                options={state.options}
                series={state.series}
                type="line"
                height={200}
              />
            </div>
            <div className="text-end">
              <Link
                to="/postsale"
                className="btn text-white btn-primary me-3 px-5 py-2 rounded-pill"
              >
                <span className="h6">Buy</span>
              </Link>
              <Link
                to="/postsale"
                className="btn text-white btn-dark px-5 py-2 rounded-pill"
              >
                <span className="h6">Sell</span>
              </Link>
            </div>
          </div>
        </Popover>
      </td>
      <td>800</td>
      <td>80.00$</td>
      <td>8,000.00$</td>
      <td
        className={
          random === i ? "text-success" : random + 1 === i ? "text-danger" : ""
        }
      >
        4.95%
      </td>
      <td
        className={
          random === i ? "text-success" : random + 1 === i ? "text-danger" : ""
        }
      >
        9.95%
      </td>
    </tr>
  );
}
