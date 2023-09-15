import React, { useEffect, useState } from "react";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import BlogItem from "./BlogItem";

export default function Blog() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [tagParam, setTagParam] = useState("wellness");

  useEffect(() => {
    const tag = queryParams.get("tag");

    if (tag === null) {
      setTagParam("wellness");
    } else if (tag !== tagParam) {
      setTagParam(tag);
    }
  }, [location, queryParams, tagParam]);

  useEffect(() => {
    console.log(tagParam);
  }, [tagParam]);
  return (
    <div>
      <div className="banner_area">
        <h2>Blog</h2>
        <a href="#">
          Home <span> Blog</span>
        </a>
      </div>

      <section className="blog_area">
        <div className="container">
          <div className="row blog_inner">
            <div className="col-lg-9 blog_lift_sidebar" id="result">
              {<BlogItem tag={tagParam} />}
            </div>

            <div className="col-lg-3 blog_right_sidebar">
              <aside className="search_widget">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Search Keywords"
                  />
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="button">
                      <i className="icon icon-Search"></i>
                    </button>
                  </span>
                </div>
              </aside>
              <aside className="r_widget categories_widget">
                <h3>Categories</h3>
                <ul id="language">
                  <li>
                    <Link to="?tag=wellness" value="wellness">
                      Wellness{" "}
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="?tag=nutritions" value="nutritions">
                      Nutritions{" "}
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="?tag=health" value="health">
                      Fitness &amp; health{" "}
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="?tag=supplements" value="diet plan">
                      Supplements{" "}
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="?tag=inspiration" value="diet plan">
                      Fitness Inspiration{" "}
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </Link>
                  </li>
                </ul>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
