import React, { useState } from "react";
import styled from "styled-components";
import img from "../../images/starsbg.png";
import { AiOutlineSearch } from "react-icons/ai";
import { useData } from "../../context/DataContext";
import { Autocomplete } from "@material-ui/core";
import { Link } from "react-router-dom";
export const SearchWrapper = styled.div`
  background-image: url(${img});
  background-position: center;
  background-size: contain;
`;
const SearchBar = () => {
  const { creators } = useData();
  return (
    <SearchWrapper className="py-5">
      <div className="container" style={{ maxWidth: 768 }}>
        <div className="d-flex">
          <div className="w-100 position-relative">
            <div
              style={{ flexWrap: `nowrap` }}
              className="input-group overflow-hidden rounded-pill"
            >
              <div className="input-group-text bg-white border-0">
                <AiOutlineSearch width={20} />
              </div>
              <Autocomplete
                id="custom-input-demo"
                options={creators}
                className="w-100 rounded-0"
                getOptionLabel={(option) => option.name}
                renderOption={(e, option) => (
                  <Link {...e} to={`/profile/${option.id}`}>
                    {option.name}
                  </Link>
                )}
                renderInput={(params) => (
                  <div ref={params.InputProps.ref}>
                    <input
                      type="text"
                      placeholder="Search"
                      {...params.inputProps}
                      className="form-control border-0 shadow-none p-2"
                    />
                  </div>
                )}
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
