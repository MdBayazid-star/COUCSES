import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer pt-5 pb-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 my-auto">
              <Link className="navbar-brand text-light" to="/home">
                <span>DEV</span> Skills<span>...</span>
              </Link>
              <h3 className="mt-3">Do You Need Help With Anything?</h3>
              <p className="w-75 foot fs-6 text">
                Receive updates, hot deals, tutorials, discounts sent straignt
                in your inbox every month
              </p>
              <div className="input-group mb-3 w-75">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email Address"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <NavLink to="/commingSoon">
                  <span
                    className="input-group-text btn btn-b"
                    id="basic-addon2"
                  >
                    Subscribe
                  </span>
                </NavLink>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-4 footerLink">
                  <h4>LAYOUTS</h4>
                  <li>Home Page</li>
                  <li>About Page</li>
                  <li>Service Page</li>
                  <li>Contact Page</li>
                  <li>Single Blog</li>
                </div>
                <div className="col-lg-4 footerLink">
                  <h4>ALL SECTIONS</h4>
                  <li>Headers</li>
                  <li>Attractive</li>
                  <li>Testimonials</li>
                  <li>Videos</li>
                  <li>Footers</li>
                </div>
                <div className="col-lg-4 footerLink">
                  <h4>COMPANY</h4>
                  <li>About</li>
                  <li>Blog</li>
                  <li>Pricing</li>
                  <li>Affiliate</li>
                  <li>Login</li>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footerText">
          <p className="text-center mt-5">
            © 2021 DEVSkill. Designd By Md Bayazid.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
