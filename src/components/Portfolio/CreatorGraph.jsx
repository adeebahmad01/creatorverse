import React from "react";

const CreatorGraph = () => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {[1, 2, 3, 4].map((el, i) => {
              return (
                <div className="row my-3">
                  <div className="col-lg-4">
                    <img
                      src="https://images.unsplash.com/photo-1529539795054-3c162aab037a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                      alt="Alt"
                      className="w-100 rounded-3"
                    />
                  </div>
                  <div className="col-lg-8">
                    <h3>Meeting With Joe</h3>
                    <div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Optio iure vitae distinctio asperiores consequatur, eius
                      autem assumenda voluptatibus officia placeat, ipsa
                      obcaecati quaerat cumque fuga praesentium alias ea impedit
                      at.
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-lg-4">
            <div className="h-100 border p-2">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 2, 3, 4].map((el, i, arr) => (
                <div className="d-flex py-2 justify-content-between align-items-center">
                  <h5>Creator {el}</h5>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={46.028}
                    height={12.388}
                    viewBox="0 0 46.028 12.388"
                  >
                    <path
                      data-name="Path 3"
                      d="M.164 11.916l13.235-4.611 7.757 2.305L35.41 7.305 45.75.416"
                      fill="none"
                      stroke={
                        Math.floor(Math.random() * arr.length) + 1 === i
                          ? "#30bb38"
                          : "#f00"
                      }
                      strokeMiterlimit={10}
                      strokeWidth={1}
                    />
                  </svg>
                  ${(Math.random() * 20 + 1).toFixed(2)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorGraph;
