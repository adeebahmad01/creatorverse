import React from "react";
import Slider from "react-slick";

const Slides = () => {
  return (
    <div className="py-5">
      <div className="container">
        <Slider
          arrows={true}
          infinite={false}
          dots={false}
          slidesToShow={3}
          slidesToScroll={1}
          className="px-3"
        >
          <div className="px-3">
            <img
              src="https://images.unsplash.com/photo-1529539795054-3c162aab037a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              alt="About"
              className="w-100 rounded-5"
            />
          </div>
          <div className="px-3">
            <img
              src="https://images.unsplash.com/photo-1529539795054-3c162aab037a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              alt="About"
              className="w-100 rounded-5"
            />
          </div>
          <div className="px-3">
            <img
              src="https://images.unsplash.com/photo-1529539795054-3c162aab037a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              alt="About"
              className="w-100 rounded-5"
            />
          </div>
          <div className="px-3">
            <img
              src="https://images.unsplash.com/photo-1529539795054-3c162aab037a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              alt="About"
              className="w-100 rounded-5"
            />
          </div>
          <div className="px-3">
            <img
              src="https://images.unsplash.com/photo-1529539795054-3c162aab037a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              alt="About"
              className="w-100 rounded-5"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Slides;
