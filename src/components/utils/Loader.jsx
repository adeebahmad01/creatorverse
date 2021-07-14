import React from "react";

const Loader = () => {
  return (
    <div style={{ zIndex: 10000 }} className="loader_wrapper">
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
