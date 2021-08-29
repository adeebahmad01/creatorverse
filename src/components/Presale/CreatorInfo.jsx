import React from "react";
import { BsArrowRight } from "react-icons/bs";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiOutlineInstagram,
} from "react-icons/ai";
import { Link } from "react-router-dom";
const CreatorInfo = ({ creator, presale, isProfile = false }) => {
  const renderUrl = () => {
    let name;
    if (presale.id) {
      if (typeof presale.isPostsale === "boolean") {
        if (presale.isPostsale) {
          name = "postsale";
        } else {
          name = "presale";
        }
      } else if (new Date(presale.end_time).getTime() < Date.now())
        name = "postsale";
    } else {
      name = "presale";
    }
    return `/${name}${presale?.id ? "/" + presale?.id : ""}`;
  };
  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="my-2 col-3">
              <img
                className="w-100 shadow-sm rounded-5 objfit"
                src={creator.profile_image?.[0]?.src}
                alt={creator.name}
              />
            </div>
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
                to={renderUrl()}
                className="btn text-white btn-primary me-3 px-5 py-2 rounded-pill"
              >
                <span className="h6 me-2">Buy</span>
                <BsArrowRight style={{ width: "1.5rem", height: "1.5rem" }} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorInfo;
