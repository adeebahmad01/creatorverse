import React from "react";

const Profiles = () => {
  return (
    <div>
      <div className="container">
        <div className="tabs mx-auto d-flex py-3 mb-3 justify-content-center align-items-center">
          <a href="#" className="mx-2 tab_btn active">
            Youtube
          </a>
          <a href="#" className="mx-2 tab_btn">
            Twitter
          </a>
          <a href="#" className="mx-2 tab_btn">
            Instagram
          </a>
          <a href="#" className="mx-2 tab_btn">
            Tiktok
          </a>
        </div>
        <div className="row mb-3">
          <div className="col-lg">
            <h6>Uploads</h6>
            <h1 className="active fw-bold">908</h1>
          </div>
          <div className="col-lg">
            <h6>Subscribers</h6>
            <h1 className="active fw-bold">20.4M</h1>
          </div>
          <div className="col-lg-5">
            <h6>Video Views</h6>
            <h1 className="active fw-bold">1.4B</h1>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg">
            <h6>Country </h6>
            <h1 className="active fw-bold">US</h1>
          </div>
          <div className="col-lg">
            <h6>Channel Type</h6>
            <h1 className="active fw-bold">Public</h1>
          </div>
          <div className="col-lg-5">
            <h6>User Created</h6>
            <h1 className="active fw-bold">Sept 19, 2013</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
