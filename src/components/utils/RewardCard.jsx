import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useData } from "../../context/DataContext";

const RewardCard = (reward) => {
  const { activeUser = {} } = useData();
  const personActive =
    (activeUser?.creators_subscribed || []).find(
      (el) => el.creatorId === reward?.creators?.name
    ) || {};
  return (
    <div className="container py-3">
      <div className="row">
        <div className="col-lg-2">
          <div className="position-relative">
            <img
              src={reward.image?.[0]?.src}
              alt={reward.name}
              className="w-100 objfit shadow-sm rounded-5"
            />
            {!((personActive.points_owned || 0) >= reward.price) ? (
              <div className="d-flex justify-content-center align-items-center mt-3">
                <div
                  className="progress w-100 rounded-pill overflow-hidden"
                  style={{ height: "15px" }}
                >
                  <div
                    className="progress-bar rounded-pill custom"
                    role="progressbar"
                    style={{
                      width: `${
                        ((personActive.points_owned || 0) / reward.price) * 100
                      }%`,
                    }}
                    aria-valuenow={personActive.points_owned || 0}
                    aria-valuemin="0"
                    aria-valuemax={reward.price}
                  ></div>
                </div>
                <div className="ms-2">
                  {(
                    ((personActive.points_owned || 0) / reward.price) *
                    100
                  ).toFixed(1)}
                  %
                </div>
              </div>
            ) : (
              <div className="tick">
                <AiFillCheckCircle />
              </div>
            )}
          </div>
        </div>
        <div className="col-lg-9 d-flex justify-content-center align-items-center">
          <div className="px-4 w-100">
            <h3 className="mb-3">
              {reward.name} ({reward.price} points){" "}
            </h3>
            <div className="mb-2">{reward.description}</div>
            <div className="text-end">
              {!reward.details && (
                <Link
                  to={"/reward/" + reward.id}
                  className="btn fw-bold btn-outline-dark mx-2 px-5 rounded-pill"
                >
                  View
                </Link>
              )}
              {reward.export ? (
                <>
                  <Link
                    to={"/export_rewards/" + reward.id}
                    className="btn fw-bold text-white btn-dark mx-2 px-5 rounded-pill"
                  >
                    Export
                  </Link>
                  {reward.redeem && (
                    <Link
                      to={"/redeem_rewards/" + reward.id}
                      className="btn fw-bold text-white btn-primary custom mx-2 px-5 rounded-pill"
                    >
                      Redeem
                    </Link>
                  )}
                </>
              ) : (personActive.points_owned || 0) >= reward.price ? (
                <>
                  <Link
                    to={"/redeem_rewards/" + reward.id}
                    className="btn fw-bold btn-primary custom mx-2 px-5 rounded-pill"
                  >
                    Redeem
                  </Link>

                  {!reward.redeem && (
                    <Link
                      to={"/export_rewards/" + reward.id}
                      className="btn fw-bold text-white btn-dark mx-2 px-5 rounded-pill"
                    >
                      Export
                    </Link>
                  )}
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardCard;
