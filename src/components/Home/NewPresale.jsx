import React from "react";
import { BsArrowRight } from "react-icons/bs";
import ProfileCard from "../utils/ProfileCard";
import { useData } from "../../context/DataContext";
const Presale = () => {
  const { creators } = useData();

  return (
    <section className="py-4">
      <div className="container">
        <h3 className="mb-4 text-center position-relative">
          New Presale
          <div className="view-all h6 position-absolute">
            <a href="#" className="text-decoration-none active">
              View All <BsArrowRight />
            </a>
          </div>
        </h3>
        <div className="row">
          {creators
            .filter((creator) => creator.type?.name?.includes("new"))
            .slice(0, 6)
            .map((el) => (
              <ProfileCard {...el} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Presale;
