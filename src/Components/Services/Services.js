import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../cart/Cart";

const Services = () => {
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    fetch("./Fakedb.json")
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, []);
  return (
    <div className="services">
      <h1 className="text-center mt-5">
        Courses With <span className="c-green">Full Width</span>
      </h1>
      <p className="mx-auto text-center w-50 text-gray">
        MOOCs are a widely researched development in distance education,[2]
        first introduced in 2008,[3] that emerged as a popular mode of learning
        in 2012.
      </p>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {carts.map((cart) => (
            <Cart cart={cart} key={cart.key}></Cart>
          ))}
        </div>
        <div className="my-5 text-center">
          <Link to="/commingSoon">
            <button className="btn btn-b btn-d">Coming Soon</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
