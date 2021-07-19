import Popover from "@material-ui/core/Popover";
import React, { useState, useEffect } from "react";
import ReactApexCharts from "react-apexcharts";
import { Link } from "react-router-dom";
import { useData } from "../../context/DataContext";
export default function HoverableTableRow({
  creatorId,
  market_value,
  day_gain,
  gain,
  fractions_owned,
  price,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const { creators = [], presales } = useData();
  const [creator, setCreator] = useState({});
  useEffect(() => {
    if (creatorId) {
      setCreator(creators.find((creator) => creator.id === creatorId));
    }
  }, [creatorId, creators]);
  const presale = presales.find(
    (presale) => presale.creators.name === creator.id
  );
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
        <div
          className="my-2 me-2"
          style={{ width: "70px", display: `inline-block` }}
        >
          <img
            className="rounded-5 w-100 objfit shadow-sm d-inline-block"
            src={creator.profile_image?.[0].src}
            alt={creator.name}
          />
        </div>
        {creator.name}
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
              <h5 className="active">
                ${(fractions_owned * price).toLocaleString()}
              </h5>
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
                to={"/postsale/" + presale?.id}
                className="btn text-white btn-primary me-3 px-5 py-2 rounded-pill"
              >
                <span className="h6">Buy</span>
              </Link>
              <Link
                to={"/postsale/" + presale?.id}
                className="btn text-white btn-dark px-5 py-2 rounded-pill"
              >
                <span className="h6">Sell</span>
              </Link>
            </div>
          </div>
        </Popover>
      </td>
      <td>{fractions_owned}</td>
      <td>{(fractions_owned * price).toLocaleString()}</td>
      <td>{(market_value || 0).toFixed(2)}</td>
      <td>{(day_gain || 0).toFixed(2)}</td>
      <td>{(gain || 0).toFixed(2)}</td>
    </tr>
  );
}
