import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import user from "../images/blog/comment.jpg";

export default function BlogDetails() {
  const [blog, setBlog] = useState(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [idParam, setIdParam] = useState("");
  const [loading, setLoading] = useState(true);
  const [comment, setComment] = useState([]);

  const fetchBlog = async (id) => {
    setLoading(true);
    const response = await fetch(
      `https://fitzeous.onrender.com/api/v1/health/getSingleBlog?id=${id}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      }
    );
    const result = await response.json();
    setComment(result[0].comment);
    setLoading(false);
    return result;
  };

  useEffect(() => {
    const id = queryParams.get("id");

    if (id !== idParam) {
      setIdParam(id);
    }
  }, [location, queryParams, idParam]);

  useEffect(() => {
    const getBlog = async () => {
      if (idParam) {
        const result = await fetchBlog(idParam);
        setBlog(result);
      }
    };

    getBlog();
  }, [idParam]);

  useEffect(() => {
    console.log(blog);

    console.log(comment);
  }, [blog]);
  return (
    <div>
      <div className="banner_area">
        <h2>Blog</h2>
        <a href="#">
          Home &gt; Blog <span>&gt; Blog Dteails</span>
        </a>
      </div>

      <section className="blog_area blog_details">
        <div className="container">
          <div className="row blog_inner">
            <div className="col-lg-9 blog_lift_sidebar">
              {/* Blog items */}
              {loading === true ? (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <ClipLoader loading={loading} color="#000" />
                </div>
              ) : (
                <div>
                  <div className="blog_items" id="blog">
                    <Link
                      to="blog-details.html?id=${element._id}"
                      className="blog_img"
                    >
                      <img src={blog[0].image} alt="" />
                    </Link>
                    <div className="breadcrumb_date">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          By: <a href="#">Admin</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="#">fitness, wellness</a>
                        </li>
                      </ol>
                    </div>
                    <a
                      href="blog-details.html?id=${element._id}"
                      className="blog_tittle"
                    >
                      {blog[0].title}
                    </a>
                    <p>{blog[0].content}</p>
                  </div>
                  <div className="comments_area">
                    <div className="left_tittle">
                      <h2>Comments {comment.length}</h2>
                    </div>
                    <div className="media">
                      <img src={user} alt="" />
                      {comment.map((element) => {
                        return (
                          <div className="media-body" key={element._id}>
                            <a href="#" className="author_name">
                              {element.name}
                            </a>
                            <p>{element.message}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              <h2 id="commentsCount" />
              <div className="comments_area" id="getComments"></div>
              <div className="leave_comment">
                <div className="left_tittle">
                  <h2>Leave a comment</h2>
                </div>
                <form
                  className="row from_main"
                  action="https://designarc.biz/demos/fitzeous/theme/php/contact.php"
                  method="post"
                  id="phpcontactform"
                  noValidate="novalidate"
                >
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Email address"
                    />
                  </div>
                  <div className="form-group col-12">
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      placeholder="Write message"
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-group col-12">
                    <button
                      className="find_btn btn"
                      id="addComment"
                      type="submit"
                    >
                      Submit Now
                    </button>
                    <div
                      id="js-contact-result"
                      data-success-msg="Form submitted successfully."
                      data-error-msg="Messages Successfully"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
