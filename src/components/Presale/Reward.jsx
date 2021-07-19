import React from "react";
const Reward = ({ youtube_link, rewards }) => {
  return (
    <div>
      <div className="container px-4 py-2 custom rounded-5">
        <div className="row">
          <div className="col-lg-5 d-flex justify-content-center align-items-center">
            <iframe
              width="100%"
              className="rounded-3"
              height="315"
              src={youtube_link}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
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
