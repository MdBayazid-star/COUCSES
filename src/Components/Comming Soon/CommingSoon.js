import React from "react";
import { Link } from "react-router-dom";
import "./CommingSoon.css";

const CommingSoon = () => {
  return (
    <div className="CommingSoon">
      <div className="container">
        <div className="row py-5">
          <div className="col-lg-6 my-auto">
            <h3 className="text-light">Our Website Is</h3>
            <h1 className="text-light">Comming Soon</h1>
          </div>
          <div className="col-lg-6">
            <div className="card border-0 bg-lightGreen rounded-3">
              <div>
                <h4 className="text-center my-5 c-green">News Letter</h4>
                <div className="d-flex flex-column align-items-center">
                  <div class="form-floating mb-3 come">
                    <input
                      type="email"
                      class="form-control w-75"
                      id="floatingInput"
                      placeholder="Name"
                    />
                    <label for="floatingInput">Name</label>
                  </div>
                  <div class="form-floating come">
                    <input
                      type="text"
                      class="form-control w-75 mb-5"
                      placeholder="name@example.com"
                      id="floatingPassword"
                    />
                    <label for="floatingPassword px-auto">Email address</label>
                  </div>
                  <div className="mb-5">
                    <Link to="*">
                      <button className="btn btn-b">Subscribe</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommingSoon;
