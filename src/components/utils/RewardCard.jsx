import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import creator from "../../JSON/creator.json";

const RewardCard = (reward) => {
  return (
    <div className="container py-3">
      <div className="row">
        <div className="col-lg-2">
          <div className="position-relative">
            <img
              src={reward.image}
              alt={reward.name}
              className="w-100 rounded-5"
            />
            <div className="tick">
              <AiFillCheckCircle />
            </div>
          </div>
        </div>
        <div className="col-lg-9 d-flex justify-content-center align-items-center">
          <div className="px-4">
            <h3 className="mb-3">{reward.name}</h3>
            <div className="mb-2">{reward.description}</div>
            <div className="text-end">
              {!reward.details && (
                <button className="btn fw-bold btn-outline-dark mx-2 px-5 rounded-pill">
                  View
                </button>
              )}
              {reward.export ? (
                <>
                  <button className="btn fw-bold btn-dark mx-2 px-5 rounded-pill">
                    Export
                  </button>
                  {reward.radeem && (
                    <button className="btn fw-bold btn-primary custom mx-2 px-5 rounded-pill">
                      Radeem
                    </button>
                  )}
                </>
              ) : (
                creator.id === reward.creator_id && (
                  <>
                    <button className="btn fw-bold btn-primary custom mx-2 px-5 rounded-pill">
                      Radeem
                    </button>

                    {!reward.radeem && (
                      <button className="btn fw-bold btn-dark mx-2 px-5 rounded-pill">
                        Sell
                      </button>
                    )}
                  </>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardCard;
