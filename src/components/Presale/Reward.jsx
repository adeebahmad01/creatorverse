import React, { useState } from "react";
import ReactPlayer from "react-player";
const Pg = (el) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="col-12 py-2 my-2 rounded-5 border-2 border colored-border ">
      <h5 className="fw-bold">{el.name}</h5>
      <div>
        <h6 className={`${!open ? "text-truncate " : ""}fw-light`}>
          {el.description}
        </h6>
        <a
          href="#pg"
          onClick={(e) => {
            e.preventDefault();
            setOpen(!open);
          }}
        >
          {open ? "Read less" : "Read more"}
        </a>
      </div>
    </div>
  );
};
const Reward = ({
  youtube_link,
  rewards,
  handleSubmit: handleSecretSubmit,
}) => {
  return (
    <div className="my-3">
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex p-3 rounded-5 justify-content-center align-items-center">
            <div className="p-3 w-100 rounded-5 border border-2 colored-border">
              <ReactPlayer className="objfit" url={youtube_link} />
            </div>
          </div>
          <div className="col-12">
            <div className="row">
              <h3 className="active">Exclusive Rewards</h3>
              {rewards.length ? (
                rewards.slice(0, 8).map((el) => <Pg key={el.id} {...el} />)
              ) : (
                <div className="col-12">No rewards</div>
              )}
            </div>
          </div>
          <div className="col-12">
            <div className="container">
              <div className="text-end">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSecretSubmit(e);
                  }}
                  action=""
                >
                  <button className="btn bg-white border-white btn-light text-white">
                    Convert to Presale
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reward;
