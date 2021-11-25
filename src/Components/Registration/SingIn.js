import React from "react";
import { Link } from "react-router-dom";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  signOut,
} from "firebase/auth";
import firebaseInit from "../../Firebase/Firebas.init";
import { useState } from "react";

firebaseInit();
const GoogleProvider = new GoogleAuthProvider();

const SingIn = () => {
  const auth = getAuth();
  const handleGoogleLogIn = () => {
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  const gitHubProvider = new GithubAuthProvider();
  const handleGitHUbLogIn = () => {
    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  //   const regestation = (e) => {
  //     e.preventDefault();
  //   };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const regestation = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password must at least be 6 carecters long");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div>
      <div className="container">
        <div className="row py-5 my-5">
          <div className="mx-auto my-5 pb-5 shadow-lg w-50 pt-3 rounded">
            <div className="mt-5">
              <h3 className="text-center c-green mb-4">Login Your Account</h3>
              <form onSubmit={regestation}>
                <div className="mb-3">
                  <div className="form-floating">
                    <div className="form-floating mb-3 w-75 mx-auto">
                      <input
                        required
                        onBlur={handleEmail}
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label htmlFor="floatingInput">Email address</label>
                    </div>
                  </div>
                  <div id="emailHelp" className="form-text  w-75 mx-auto">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <div className="form-floating">
                    <div className="form-floating  w-75 mx-auto">
                      <input
                        required
                        onBlur={handlePassword}
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                      />
                      <label htmlFor="floatingPassword">Password</label>
                      <p className="text-danger mt-2">{error}</p>
                    </div>
                  </div>
                </div>
                <div className="text-center mb-3">
                  <button
                    type="submit"
                    className="btn bg-green text-light w-75"
                    // onBlur={handleLogIn}
                  >
                    Log In
                  </button>
                </div>
                <div>
                  <h6 className="text-center mb-3 text-gray mb-4">
                    Or Login with Social Info
                  </h6>
                </div>
                <div className="d-flex mb-5 justify-content-evenly w-75 mx-auto">
                  <div>
                    <button
                      type="submit"
                      className="btn bg-light-gray text-primary shadow"
                    >
                      <i className="fab fa-facebook-f text-primary"></i>{" "}
                      Facebook
                    </button>
                  </div>
                  <div>
                    <button
                      className="btn bg-light-gray text-danger shadow"
                      onClick={handleGoogleLogIn}
                    >
                      <i className="fab fa-google text-danger"></i> Google
                    </button>
                  </div>
                  <div>
                    <button
                      className="btn bg-light-gray c-gray shadow"
                      onClick={handleGitHUbLogIn}
                    >
                      <i className="fab fa-github"></i> Github
                    </button>
                  </div>
                </div>
                <hr />
                <div className="d-flex  justify-content-between px-5">
                  <p>
                    Don't have account?
                    <Link to="/singup">
                      <span className="c-green btn btn-link ps-0">SignUp</span>
                    </Link>
                  </p>
                  <p className="text-danger btn btn-link">Forget Password</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingIn;
