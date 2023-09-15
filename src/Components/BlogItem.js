import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

export default function BlogItem(props) {
  const [blogs, setBlogs] = useState([]);
  const [tagParam, setTagParam] = useState(props.tag);
  const [prevTag, setPrevTag] = useState(null);

  const [loading, setLoading] = useState(true);

  const fetchBlogs = async (tag) => {
    setLoading(true);

    console.log("fetcing");
    const response = await fetch(
      "https://fitzeous.onrender.com/api/v1/health/searchByTag",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "auth-token": localStorage.getItem('token'),
        },
        body: JSON.stringify({
          tag,
        }),
      }
    );
    const result = await response.json();
    setLoading(false);
    return result;
  };

  useEffect(() => {
    if (props.tag !== prevTag) {
      setTagParam(props.tag);
      setPrevTag(props.tag);
    }
  }, [props.tag, prevTag]);

  useEffect(() => {
    const getBlogs = async () => {
      const result = await fetchBlogs(tagParam);
      setBlogs(result);
    };

    getBlogs();
  }, [tagParam]);

  useEffect(() => {
    console.log(blogs);
  }, [blogs]);
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {loading === true ? (
        <ClipLoader loading={loading} color="#000" />
      ) : (
        blogs.map((element) => {
          return (
            <div className="blog_items" key={element._id}>
              <a
                href="blog-details.html?id=${element._id}"
                className="blog_img"
              >
                <img src={element.image} alt="" />
              </a>
              <div className="breadcrumb_date">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    By : <a href="#">Admin</a>
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
                {element.title}
              </a>
              <p>
                {element.content.length > 350
                  ? element.content.slice(0, 350)
                  : element.content}
                ...
              </p>
              <Link
                to={`/blogDetails?id=${element._id}`}
                className="find_btn"
              >
                Read more
              </Link>
            </div>
          );
        })
      )}
    </div>
  );
}
