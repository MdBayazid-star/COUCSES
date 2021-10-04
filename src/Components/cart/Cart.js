import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = (props) => {
  const { courseImg, name, sub, subTwo, time, usear, view, price, teacher } =
    props.cart;
  return (
    <div className="col-lg-6 col-md-12 carts my-4">
      <div className="cart shadow d-flex">
        <div className="me-3 col-lg-4">
          <img src={courseImg} className="img-fluid cartImg" alt="" />
        </div>
        <div className="col-lg-7">
          <div className="d-flex mt-1">
            <span className="subtwo me-4">{sub}</span>
            <span className="sub">{subTwo}</span>
          </div>
          <p className="mt-3 mb-3 cartname">{name}</p>
          <p className="mb-3">
            by: <span className="c-red">{teacher}</span>
          </p>
          <div className="d-flex details mb-0">
            <p className="me-5">
              <i class="fas fa-video me-1 c-green"></i>
              <span>{time}</span>
            </p>
            <p className="me-5">
              <i class="fas fa-user me-1 c-green"></i>
              <span>{usear}</span>
            </p>
            <p className="">
              <i class="far fa-eye me-1 c-green"></i>
              <span>{view}</span>
            </p>
          </div>
          <div className="d-flex align-items-center">
            <p className="me-5  my-auto">
              $ <span className="c-green fs-4 fw-bold">{price}</span>
            </p>
            <Link to="/commingSoon">
              <button className="btn btn-b ms-5 fw-light">Enroll Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
