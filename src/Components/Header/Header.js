import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="shadow">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/home">
              <span>DEV</span> Skills<span>...</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeStyle={{
                      color: "#03b97c",
                    }}
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeStyle={{
                      color: "#03b97c",
                    }}
                    to="/services"
                  >
                    Courses
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeStyle={{
                      color: "#03b97c",
                    }}
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    activeStyle={{
                      color: "#03b97c",
                    }}
                    className="nav-link"
                    to="/blog"
                  >
                    Blog
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeStyle={{
                      color: "#03b97c",
                    }}
                    className="nav-link"
                    to="/contact"
                  >
                    Contact Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeStyle={{
                      color: "#03b97c",
                    }}
                    className="nav-link"
                    to="/unknown3"
                  >
                    Donation
                  </NavLink>
                </li>
              </ul>
              <div className="d-flex">
                <Link to="commingSoon">
                  <button
                    className="btn btn-outline-success btn-bl mx-2"
                    type="submit"
                  >
                    <i className="fas fa-sign-in-alt"></i> Sing In
                  </button>
                </Link>
                <Link to="/commingSoon">
                  <button
                    className="btn btn-outline-success btn-b mx-2"
                    type="submit"
                  >
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
