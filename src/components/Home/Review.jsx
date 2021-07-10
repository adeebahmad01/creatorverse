import React from "react";
import { SearchWrapper } from "../Searchbar";
import { BsArrowRight } from "react-icons/bs";

const Review = () => {
  return (
    <SearchWrapper className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 px-4">
            <img
              className="rounded-pill w-100"
              src="https://images.unsplash.com/photo-1551179939-b839002d0a18?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              alt="Creator"
            />
          </div>
          <div className="col-lg-9 px-4">
            <p className="text-white blockquote">
              <em>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
                aperiam fuga impedit neque repudiandae, ratione blanditiis
                accusamus nihil doloribus officiis accusantium officia
                laboriosam iusto minima assumenda reiciendis atque, earum
                corrupti!
              </em>
            </p>
            <div className="btn btn-light active rounded-pill py-2 px-4">
              <span>Learn More</span>
              <BsArrowRight />
            </div>
          </div>
        </div>
      </div>
    </SearchWrapper>
  );
};

export default Review;
