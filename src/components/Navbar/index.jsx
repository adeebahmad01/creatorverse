import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/logo.png";

const Navbar = () => {
  return (
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
              <NavLink
                className="nav-link disabled"
                to="/search"
                exact
                activeClassName="active"
              >
                Search
              </NavLink>
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
          <form className="d-flex">
            <img
              src="https://images.unsplash.com/photo-1551179939-b839002d0a18?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              alt="Person"
              width="40"
              className="rounded-3"
            />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
