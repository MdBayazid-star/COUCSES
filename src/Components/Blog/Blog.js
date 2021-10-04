import React, { useEffect, useState } from "react";
import SingleBlog from "../SingleBlogs/SingleBlog";
import "./Blog.css";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("./News.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      <div className="blogs">
        <div className="container">
          <div className="row my-5">
            <div className="col-lg-12 text-center my-5 py-5 text-light">
              <h3>Latest News & Articles</h3>
              <p>
                Get the latest World News: international news, features and
                analysis from Africa, the Asia-Pacific, Europe, Latin America,
                the Middle East, South Asia
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
          {blogs.map((blog) => (
            <SingleBlog cart={blog} key={blog.key}></SingleBlog>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
