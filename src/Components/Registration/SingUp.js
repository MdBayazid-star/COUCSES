import React from "react";
import singupimg from "./../../Images/banner-2 (1).jpg";

const SingUp = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="mx-auto my-5 pb-5 shadow-lg w-50 pt-3 rounded">
            <div className="singupIng text-center ">
              <img
                src={singupimg}
                className="img-fluid position-relative"
                alt=""
              />
              <div className="position-absolute Imgicon">
                <i className="fas fa-user fs-1 p-3 rounded-circle bg-light c-green"></i>
              </div>
            </div>
            <div className="mt-5">
              <form>
                <div className="mb-3">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea"
                    ></textarea>
                    <label htmlFor="floatingTextarea">Fast Name</label>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea"
                    ></textarea>
                    <label htmlFor="floatingTextarea">Last Name</label>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="form-floating">
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label htmlFor="floatingInput">Email address</label>
                    </div>
                  </div>
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <div className="form-floating">
                    <div className="form-floating">
                      <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                      />
                      <label htmlFor="floatingPassword">Password</label>
                    </div>
                  </div>
                </div>
                <div className="text-center mb-3">
                  <button
                    type="submit"
                    className="btn bg-green text-light w-75"
                  >
                    Sign Up
                  </button>
                </div>
                <div>
                  <h6 className="text-center mb-3 text-gray mb-4">
                    Or Login with Social Info
                  </h6>
                </div>
                <div className="d-flex mb-5 justify-content-evenly w-75 mx-auto">
                  <div>
                    <button className="btn bg-light-gray text-primary shadow">
                      <i className="fab fa-facebook-f text-primary"></i>{" "}
                      Facebook
                    </button>
                  </div>
                  <div>
                    <button className="btn bg-light-gray text-danger shadow">
                      <i className="fab fa-google text-danger"></i> Google
                    </button>
                  </div>
                  <div>
                    <button className="btn bg-light-gray c-gray shadow">
                      <i className="fab fa-github"></i> Github
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
