import React from "react";
import { BsArrowRight } from "react-icons/bs";
import ProfileCard from "../utils/ProfileCard";
import { useData } from "../../context/DataContext";
const Recomended = () => {
  const { creators } = useData();
  return (
    <section className="py-4">
      <div className="container">
        <h3 className="mb-4 text-center position-relative">
          Recommended Creators
          <div className="view-all h6 position-absolute">
            <a href="#" className="text-decoration-none active">
              View All <BsArrowRight />
            </a>
          </div>
        </h3>
        <div className="row">
          {creators.slice(0, 6).map((el) => (
            <ProfileCard {...el} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recomended;
