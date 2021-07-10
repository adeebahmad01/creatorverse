import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import creatorsJSON from "../../JSON/creators.json";
const Creator = () => {
  return (
    <div className="py-5">
      <div className="container">
        <Slider arrows={false} dots={true}>
          {creatorsJSON.slice(0, 5).map((el) => (
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/FJjLXEDWKMg"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-4">
                      <img
                        src="https://images.unsplash.com/photo-1551179939-b839002d0a18?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                        alt="Person"
                        className="rounded-5 shadow-sm w-100"
                      />
                    </div>
                    <div className="col-8">
                      <h2>{el.name}</h2>
                      <p>{el.bio}</p>
                      <Link
                        to="/presale"
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
