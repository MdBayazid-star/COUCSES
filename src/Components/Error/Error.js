import React from "react";
import { Link } from "react-router-dom";
import errorImg from "./../../Images/404.png";

const Error = () => {
  return (
    <div>
      <div className="text-center">
        <img className="my-5 img-fluid" src={errorImg} alt="" />
        <p className="my-5 fs-3 text-secondary">
          This error most often occurs when there is no floppy disk (or a bad
          disk) in the disk <br /> drive and the system tries to perform tasks
          involving this disk.
        </p>
        <Link to="/home">
          <button className="btn btn-b mb-5 btn-d">
            <i className="fas fa-arrow-left"></i> Bake To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
