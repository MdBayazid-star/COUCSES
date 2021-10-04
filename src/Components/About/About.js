import React from "react";
import aboutImg from "./../../Images/3026238.jpg";
import aboutImgTwo from "./../../Images/2953982.jpg";
import "./About.css";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      <div className="text-center">
        <div className="bg-light py-5">
          <h1 className="">Who Are We?</h1>
          <p className="w-50 md-w-75 mx-auto text-gray">
            Educational technology (commonly abbreviated as EduTech, or EdTech)
            is the combined use of computer hardware, software, and educational
            theory and practice to facilitate learning.[1] When referred to with
            its abbreviation, EdTech, it is often referring to the industry of
            companies that create educational technology.
          </p>
        </div>
      </div>
      <div>
        <div className="container">
          <div className="row my-5">
            <div className="col-lg-6 my-auto">
              <span className="c-green">About Us</span>
              <h2>What We Do & Our Aim</h2>
              <p className="text-gray">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique
              </p>
              <div className="my-4">
                <span>
                  <i className="fas fa-check"></i>
                </span>
                <span>Full Lifetime Access</span>
              </div>
              <div className="my-3">
                <span>
                  <i className="fas fa-check"></i>
                </span>
                <span>20+ Downloadable Resources</span>
              </div>
              <div className="my-3">
                <span>
                  <i className="fas fa-check"></i>
                </span>
                <span>Certificate Of Completion</span>
              </div>
              <div className="my-3">
                <span>
                  <i className="fas fa-check"></i>
                </span>
                <span>Free Trial 7 Days</span>
              </div>
              <Link to="/commingSoon">
                <button className="btn btn-b">Enroled Courses</button>
              </Link>
            </div>
            <div className="col-lg-6">
              <img className="img-fluid" src={aboutImg} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div>
              <img src={aboutImgTwo} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-lg-6 my-auto">
            <div>
              <div className="d-flex">
                <div className="num d-flex justify-content-center align-items-center me-4">
                  <span className=" fs-3 rounded-circle ">1</span>
                </div>
                <div>
                  <h4>Create Account</h4>
                  <p className="text-gray">
                    Oluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa.
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <div className="num d-flex justify-content-center align-items-center me-4">
                  <span className=" fs-3 rounded-circle ">2</span>
                </div>
                <div>
                  <h4>Join Membership</h4>
                  <p className="text-gray">
                    Error sit voluptatem actium doloremque laudantium, totam rem
                    aperiam, eaque ipsa.
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <div className="num d-flex justify-content-center align-items-center me-4">
                  <span className=" fs-3 rounded-circle ">3</span>
                </div>
                <div>
                  <h4>Start Learning</h4>
                  <p className="text-gray">
                    Error sit voluptatem actium doloremque laudantium, totam rem
                    aperiam, eaque ipsa.
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <div className="num d-flex justify-content-center align-items-center me-4">
                  <span className=" fs-3 rounded-circle ">4</span>
                </div>
                <div>
                  <h4>Start Learning</h4>
                  <p className="text-gray">
                    Error sit voluptatem actium doloremque laudantium, totam rem
                    aperiam, eaque ipsa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
