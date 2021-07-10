import React, { useEffect, useState } from "react";
import creatorsJSON from "../../JSON/creators.json";
import { BsArrowRight } from "react-icons/bs";
import ProfileCard from "../utils/ProfileCard";
const Recomended = () => {
  const [creators, setCreators] = useState([]);
  useEffect(() => {
    setCreators(
      creatorsJSON
        .map(({ name, profile_image }) => ({ name, profile_image }))
        .slice(0, 6)
    );
  }, []);
  return (
    <section className="py-4">
      <div className="container">
        <h3 className="mb-4 text-center position-relative">
          Recomended Creators
          <div className="view-all h6 position-absolute">
            <a href="#" className="text-decoration-none active">
              View All <BsArrowRight />
            </a>
          </div>
        </h3>
        <div className="row">
          {creators.map((el) => (
            <ProfileCard {...el} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recomended;
