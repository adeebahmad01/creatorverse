import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import { useData } from "./../../context/DataContext";
import Menu from "@material-ui/core/Menu";
import { MenuItem } from "@material-ui/core";
import SearchBar from "../Searchbar";
import { Collapse } from "@material-ui/core";
const Navbar = ({ isHome }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchOpen, setOpen] = useState(false);
  const { activeUser, setActiveUser, investors, setactiveIndex } = useData();
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="position-relative">
      <nav className="navbar navbar-expand-lg py-3 navbar-light bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img
              className="w-100"
              style={{ maxWidth: 300 }}
              src={logo}
              alt="Logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item px-3">
                <NavLink
                  className="nav-link"
                  to="/"
                  exact
                  activeClassName="active"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item px-3">
                <button
                  className={`nav-link btn${searchOpen ? " active" : ""}`}
                  onClick={() => setOpen(!searchOpen)}
                  activeClassName="active"
                >
                  Search
                </button>
              </li>
              <li className="nav-item px-3">
                <NavLink
                  className="nav-link"
                  to="/portfolio"
                  exact
                  activeClassName="active"
                >
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item px-3">
                <NavLink
                  className="nav-link"
                  to="/rewardbay"
                  exact
                  activeClassName="active"
                >
                  Reward Bay
                </NavLink>
              </li>
            </ul>
            <div className="d-flex">
              <div style={{ width: 40, cursor: `pointer` }}>
                <img
                  src={activeUser?.profile_image?.[0].src}
                  alt="Person"
                  onClick={handleClick}
                  className="rounded-3 w-100 shadow-sm objfit"
                />
              </div>
              <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
              >
                {investors.map((person, index) => (
                  <MenuItem
                    className={
                      activeUser === person ? "text-white bg-secondary" : ""
                    }
                    onClick={() => {
                      handleClose();
                      setactiveIndex(index);
                      setActiveUser(person);
                    }}
                  >
                    {person.name}
                  </MenuItem>
                ))}
              </Menu>
            </div>
          </div>
        </div>
      </nav>
      <Collapse in={searchOpen && !isHome}>
        <SearchBar />
      </Collapse>
    </div>
  );
};

export default Navbar;
