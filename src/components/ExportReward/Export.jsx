import React, { useEffect, useState } from "react";
import Divider from "@material-ui/core/Divider";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { TextField } from "@material-ui/core";

const Export = () => {
  const [price, setPrice] = useState(0);
  const [total, setTotal] = useState(0);
  const [fees, setFees] = useState({
    openSeasFee: 0,
    platformFee: 0,
  });
  useEffect(() => {
    // fetch current price of bitcoin in usd
    fetch("https://api.coinbase.com/v2/prices/ETH-USD/spot")
      .then((response) => response.json())
      .then((data) => {
        setPrice(+data.data.amount);
      });
  }, []);
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
          <div className="col-lg-7">
            <h6>Price Per Item</h6>
            <div className="d-flex flex-nowrap input-group">
              <select
                type="text"
                className="form-select w-auto px-4 py-1"
                style={{ backgroundColor: `#ccc` }}
                defaultValue="ETH"
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="ETH">ETH ({price}$)</option>
              </select>
              <TextField
                type="text"
                variant="standard"
                placeholder="Coins"
                onChange={(e) => {
                  const totalPrice = +e.target.value * +price;
                  const openSeasFee = +totalPrice * 0.025;
                  const platformFee = +totalPrice * 0.1;
                  setFees({
                    openSeasFee,
                    platformFee,
                  });
                  const total = +totalPrice - openSeasFee - platformFee;
                  setTotal(total);
                }}
                inputProps={{ className: `px-3 py-2` }}
                style={{ width: `60%` }}
                className="form-control overflow-hidden border"
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
                <div>Openseas Fee</div>
                <Divider className="w-50 active_bg" />
                <span>2.50%(${fees.openSeasFee.toFixed(2)})</span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div>Platform Fee</div>
                <Divider className="w-50 active_bg" />
                <span>10%(${fees.platformFee.toFixed(2)})</span>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="d-flex justify-content-between align-items-center">
              <h5>Total Earnings</h5>
              <Divider className="w-50 active_bg" />
              <span>
                <SiEthereum />
              </span>
            </div>
            <h1 className="text-end active mb-4">
              ${(+total.toFixed(2)).toLocaleString()}
            </h1>
          </div>
          <div className="col-12 py-3">
            <h2>Disclaimer</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
              fugiat harum. Maxime dolorum aliquid ratione. Dolore consequatur
              eveniet cumque, nam exercitationem earum vel culpa asperiores
              deserunt fuga quos, dignissimos eum?
            </p>
          </div>
          <div className="col-12">
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
