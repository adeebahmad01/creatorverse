import React from "react";
import rewards from "../../JSON/rewards.json";
const Reward = () => {
  return (
    <div>
      <div className="container px-4 py-2 custom rounded-5">
        <div className="row">
          <div className="col-lg-5 d-flex justify-content-center align-items-center">
            <iframe
              width="100%"
              className="rounded-3"
              height="315"
              src="https://www.youtube.com/embed/FJjLXEDWKMg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="col-lg-7">
            <div className="row">
              {rewards.slice(0, 8).map((el) => (
                <div className="col-6 py-3 text-white">
                  <h5 className="fw-bold">{el.name}</h5>
                  <h6 className="text-truncate fw-light">{el.description}</h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reward;
