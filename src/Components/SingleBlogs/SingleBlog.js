import React from "react";
import "./../Blog/Blog.css";

const SingleBlog = (props) => {
  const { job, title, details, view, data, img } = props.cart;
  console.log(props.cart);
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="carts bg-light  shadow roundeds">
        <div className="cartImgs">
          <img className="img-fluid blogImg" src={img} alt="" />
        </div>
        <div className="cartContent p-3">
          <div className="my-3">
            <span className="subThree">{job}</span>
          </div>
          <p className="fw-bold">{title}</p>
          <p className="pText mb-3">{details}</p>
          <hr />
          <div className="d-flex justify-content-evenly align-items-center">
            <div>
              <p>
                <i class="far fa-eye icons"></i> {view}
              </p>
            </div>
            {/* <button className="btn btn-b">See More</button> */}
            <div>
              <p>
                <i class="fas fa-clock icons iconTwo"></i> {data}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
