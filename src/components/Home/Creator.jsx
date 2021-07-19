import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import creatorsJSON from "../../JSON/creators.json";
import { useData } from "../../context/DataContext";
const Creator = () => {
  const { creators = [], presales = [] } = useData();
  return (
    <div className="py-5">
      <div className="container">
        <Slider arrows={false} dots={true}>
          {creators.slice(0, 5).map((el) => (
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <iframe
                    width="100%"
                    height="315"
                    src={el.youtube_link}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
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
                          presales.find(
                            (presale) => presale.creators?.name === el.id
                          )?.id
                            ? "/" +
                              presales.find(
                                (presale) => presale.creators?.name === el.id
                              )?.id
                            : ""
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
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Creator;
