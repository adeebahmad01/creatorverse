import React from "react";
import Slider from "react-slick";
import { Divider } from "@material-ui/core";
import { useData } from "../../context/DataContext";
const Creators = ({ setActive, active }) => {
  const { activeUser, creators = [] } = useData();
  const showSlides = () =>
    activeUser.creators_subscribed.map((el, i) => {
      const creator = creators.find((c) => c.id === el.creatorId) || {};
      return (
        <div key={el.creatorId} onClick={() => setActive(i)}>
          <div
            className="px-3 transition"
            style={{ transform: `scale(${active === i ? 1.2 : 1})` }}
          >
            <img
              src={creator.profile_image?.[0]?.src}
              className="rounded-5 objfit shadow-sm w-100"
            />
          </div>
        </div>
      );
    });
  return (
    <div>
      <div className="container custom_track">
        <Slider
          slidesToShow={7}
          className=""
          infinite={false}
          slidesToScroll={1}
        >
          {showSlides()}
        </Slider>
        <Divider className="bg-secondary" />
      </div>
    </div>
  );
};

export default Creators;
