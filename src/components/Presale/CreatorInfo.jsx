import React from "react";
import { BsArrowRight } from "react-icons/bs";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiOutlineInstagram,
} from "react-icons/ai";
import { Link } from "react-router-dom";
const CreatorInfo = ({ creator, presale, isProfile = false }) => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 px-5">
            <img
              className="w-100 shadow-sm rounded-5 objfit"
              src={creator.profile_image?.[0]?.src}
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
            {!isProfile ? (
              <Link
                to={"/profile" + (creator.id ? "/" + creator.id : "")}
                className="btn text-white btn-primary px-4 py-2 rounded-pill"
              >
                <span className="h6 me-2">See Profile</span>
                <BsArrowRight style={{ width: "1.5rem", height: "1.5rem" }} />
              </Link>
            ) : (
              <Link
                to={`/${
                  // if presale's end_time is past then return postsale else presale
                  new Date(presale.end_time).getTime() < Date.now() &&
                  presale?.id
                    ? "postsale"
                    : "presale"
                }${presale?.id ? "/" + presale?.id : ""}`}
                className="btn text-white btn-primary me-3 px-5 py-2 rounded-pill"
              >
                <span className="h6">
                  Buy{" "}
                  {new Date(presale.end_time).getTime() < Date.now() &&
                  presale?.id
                    ? "postsale"
                    : "presale"}
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorInfo;
