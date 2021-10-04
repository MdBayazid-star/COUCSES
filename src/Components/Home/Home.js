import React, { useEffect, useState } from "react";
import "./Home.css";
import homeImg from "./../../Images/Learning-bro.png";
import Cart from "../cart/Cart";
import { Link } from "react-router-dom";

const Home = () => {
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    fetch("./Fakedb.json")
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, []);
  carts.splice(4);
  return (
    <div className="Home">
      <div className="bg-light">
        <div className="container">
          <div className="row py-5 ">
            <div className="col-lg-6 my-auto">
              <span>LISTEN TO OUR NEW ANTHEM</span>
              <h1 className="mb-4 mt-2">
                Find The Most <span className="c-green">Exciting</span> <br />{" "}
                Online Cources
              </h1>
              <p className="text-gray">
                Educational technology (commonly abbreviated as EduTech, or
                EdTech) is the combined use of computer hardware, software, and
                educational theory and practice to facilitate learning
              </p>
              <div className="input-group mb-4">
                <div className="search">
                  <label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search Your Corces"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <i className="fas fa-search"></i>
                  </label>
                </div>

                <Link to="/commingSoon">
                  <span
                    className="input-group-text btn btn-b"
                    id="basic-addon2"
                  >
                    Search
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <img className="img-fluid" src={homeImg} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center container">
        <div className="row row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-around align-items-center p-4 bg-light border round shadow homeBottom">
          <div className="d-flex flex-column text-center col-lg-2 col-md-12 col-12">
            <h3 className="rate">4.7</h3>
            <div className="reatings">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p className="">3,272 Rating</p>
          </div>
          <div className="d-flex homeBt align-items-center text-start col-lg-2 col-md-6 col-12">
            <i className="fas fa-layer-group"></i>
            <h5>
              Best Online <br /> Tutoring
            </h5>
          </div>
          <div className="d-flex  homeBt align-items-center text-start homebt2  col-lg-2 col-md-6 col-12">
            <i className="fas fa-business-time"></i>
            <h5>
              Fully Lifetime <br /> Access
            </h5>
          </div>
          <div className="d-flex  homeBt align-items-center text-start homebt3  col-lg-2 col-md-6 col-12">
            <i className="fas fa-user-shield"></i>
            <h5>
              800k+ Enrolled <br /> Students
            </h5>
          </div>
          <div className="d-flex  homeBt align-items-center text-start homebt4  col-lg-2 col-md-6 col-12">
            <i className="fas fa-journal-whills"></i>
            <h5>
              200+ Cources <br /> Available
            </h5>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h1 className="text-center mt-5 mb-3">
            Explore Featured <span className="c-green">Cources</span>
          </h1>
          <p className="text-center mx-auto w-50 mb-5 text-gray">
            A massive open online course (MOOC /muːk/) is an online course aimed
            at unlimited participation and open access via the Web.[1] In
            addition to traditional course materials, such as filmed lectures,
            readings, and problem sets, many MOOCs provide interactive courses
            with user forums or social media discussions to support community
            interactions among students, professors, and teaching assistants.
          </p>
        </div>
        {/* Cart Section Start */}
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {carts.map((cart) => (
              <Cart cart={cart} key={cart.key}></Cart>
            ))}
          </div>
          <div className="text-center mt-3 mb-5">
            <Link to="/services">
              <button className="btn btn-b btn-d">
                See More &nbsp; <i className="fas fa-arrow-right"></i>
              </button>
            </Link>
          </div>
        </div>
        {/* Cart Section End */}
      </div>
      {/* Featured Section Start */}
      <div className="Featured bg-light py-5 mt-5">
        <div className="contents">
          <h2 className="text-center">
            Explore Featured <span className="c-green">Categories</span>
          </h2>
          <p className="text-center w-50 mx-auto text-gray">
            such as filmed lectures, readings, and problem sets, many MOOCs
            provide interactive courses with user forums or social media
            discussions to support community interactions among students,
            professors, and teaching assistants.
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="smCart d-flex justify-content-center align-items-center flex-column shadow py-5 mt-5 rounded-3">
                <div className="mb-3">
                  <span>
                    <i class="fas fa-code fs p-3"></i>
                  </span>
                </div>
                <h4>Development</h4>
                <p className="c-yellow">22 Lectures</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="smCart d-flex justify-content-center align-items-center flex-column shadow py-5 mt-5 rounded-3">
                <div className="mb-3">
                  <span>
                    <i class="fas fa-window-restore fs p-3"></i>
                  </span>
                </div>
                <h4>Wev Desingning</h4>
                <p className="c-yellow">21 Lectures</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="smCart d-flex justify-content-center align-items-center flex-column shadow py-5 mt-5 rounded-3">
                <div className="mb-3">
                  <span>
                    <i class="fas fa-leaf fs p-3"></i>
                  </span>
                </div>
                <h4>Life Style</h4>
                <p className="c-yellow">20 Lectures</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="smCart d-flex justify-content-center align-items-center flex-column shadow py-5 mt-5 rounded-3">
                <div className="mb-3">
                  <span>
                    <i class="fas fa-heartbeat  fs p-3"></i>
                  </span>
                </div>
                <h4>Health & Fitness</h4>
                <p className="c-yellow">19 Lectures</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="smCart d-flex justify-content-center align-items-center flex-column shadow py-5 mt-5 mb-5 rounded-3">
                <div className="mb-3">
                  <span>
                    <i class="fas fa-landmark  fs p-3"></i>
                  </span>
                </div>
                <h4>Gov. Exams</h4>
                <p className="c-yellow">23 Lectures</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="smCart d-flex justify-content-center align-items-center flex-column shadow py-5 mt-5 mb-5 rounded-3">
                <div className="mb-3">
                  <span>
                    <i class="fas fa-photo-video  fs p-3"></i>
                  </span>
                </div>
                <h4>Photo Gallery</h4>
                <p className="c-yellow">25 Lectures</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="smCart d-flex justify-content-center align-items-center flex-column shadow py-5 mt-5 mb-5 rounded-3">
                <div className="mb-3">
                  <span>
                    <i class="fas fa-stamp  fs p-3"></i>
                  </span>
                </div>
                <h4>Finanice & Accounting</h4>
                <p className="c-yellow">24 Lectures</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="smCart d-flex justify-content-center align-items-center flex-column shadow py-5 mt-5 mb-5 rounded-3">
                <div className="mb-3">
                  <span>
                    <i class="fas fa-school  fs p-3"></i>
                  </span>
                </div>
                <h4>Office Productivity</h4>
                <p className="c-yellow">22 Lectures</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Featured Section End */}
    </div>
  );
};

export default Home;
