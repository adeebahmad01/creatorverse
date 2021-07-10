import React from "react";
import creator from "../../JSON/creator.json";
import { BsArrowRight } from "react-icons/bs";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiOutlineInstagram,
} from "react-icons/ai";
import { Link } from "react-router-dom";
const CreatorInfo = () => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 px-5">
            <img
              className="w-100 rounded-5"
              src={creator.profile_image}
              alt={creator.name}
            />
          </div>
          <div className="col-lg-9">
            <h3 className="mb-3">
              {creator.name}
              <a
                href={creator.facebook}
                className="d-inline-block text-dark mx-2"
              >
                <AiFillFacebook />
              </a>
              <a
                href={creator.instagram}
                className="d-inline-block text-dark mx-2"
              >
                <AiOutlineInstagram />
              </a>
              <a
                href={creator.twitter}
                className="d-inline-block text-dark mx-2"
              >
                <AiFillTwitterSquare />
              </a>
            </h3>
            <p>{creator.bio}</p>
            <Link
              to="/presale"
              className="btn text-white btn-primary px-4 py-2 rounded-pill"
            >
              <span className="h6 me-2">See Profile</span>
              <BsArrowRight style={{ width: "1.5rem", height: "1.5rem" }} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorInfo;
