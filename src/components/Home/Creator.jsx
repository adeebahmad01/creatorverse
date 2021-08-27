import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useData } from "../../context/DataContext";
import ReactPlayer from "react-player";
const Creator = () => {
  const { creators = [], presales = [] } = useData();
  return (
    <div className="py-5">
      <div className="container">
        <Slider arrows={false} dots={true}>
          {creators
            .filter((el) => {
              const presale =
                presales.find((presale) => presale.creators?.name === el.id) ||
                {};
              if (typeof presale.isPostsale === "boolean")
                return !presale.isPostsale;
              if (new Date(presale.end_time).getTime() > Date.now())
                return false;
              return true;
            })
            .map((el) => {
              const presale = presales.find(
                (presale) => presale.creators?.name === el.id
              );
              return presale ? (
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6">
                      <ReactPlayer url={el.youtube_link} className="objfit" />
                    </div>
                    <div className="col-lg-6">
                      <div className="row">
                        <div className="col-4">
                          <img
                            src={el.profile_image?.[0]?.src}
                            alt="Person"
                            className="rounded-5 objfit shadow-sm w-100"
                          />
                        </div>
                        <div className="col-8">
                          <h2>{el.name}</h2>
                          <p>{el.bio}</p>
                          <Link
                            to={`/presale${
                              presale?.id ? "/" + presale?.id : ""
                            }`}
                            className="btn text-white btn-primary px-4 py-2 rounded-pill"
                          >
                            <span className="h6 me-2">Buy Presale</span>
                            <BsArrowRight
                              style={{ width: "1.5rem", height: "1.5rem" }}
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : undefined;
            })}
        </Slider>
      </div>
    </div>
  );
};

export default Creator;
