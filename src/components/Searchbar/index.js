import React from "react";
import styled from "styled-components";
import img from "../../images/starsbg.png";
import { AiOutlineSearch } from "react-icons/ai";
export const SearchWrapper = styled.div`
  background-image: url(${img});
  background-position: center;
  background-size: contain;
`;
const SearchBar = () => {
  return (
    <SearchWrapper className="py-5">
      <div className="container" style={{ maxWidth: 768 }}>
        <div className="d-flex">
          <div className="w-100">
            <div className="input-group overflow-hidden rounded-pill">
              <div className="input-group-text bg-white border-0">
                <AiOutlineSearch width={20} />
              </div>
              <input
                className="form-control border-0 shadow-none p-2"
                type="search"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="ps-3">
            <button className="btn btn-primary custom rounded-pill px-4">
              Search
            </button>
          </div>
        </div>
      </div>
    </SearchWrapper>
  );
};

export default SearchBar;
