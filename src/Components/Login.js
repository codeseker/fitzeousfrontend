import React, { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Welcome back");
  const [errorStyle, setErrorStyle] = useState({});
  const [divStyle, setDivStyle] = useState({
    display: "flex",
    alignItems: "center",
  });

  const navigate = useNavigate();

  const handleSubmitForm = useCallback(
    async (e) => {
      e.preventDefault();

      setLoading(true);
      setDivStyle({
        display: "flex",
        justifyContent: "center",
      });
      const response = await fetch(
        "https://fitzeous.onrender.com/api/v1/auth/login",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const result = await response.json();
      setLoading(false);
      setDivStyle({});
      if (result.success === false) {
        const msg = result.error;
        if (msg === "Please provide proper email") {
          setErrorMessage(msg);
        } else {
          setErrorMessage(msg);
        }
        setErrorStyle({
          color: "red",
        });
      } else {
        localStorage.setItem("token", result.token);
        navigate("/");
      }
    },
    [email, password, navigate]
  );

  return (
    <div>
      <div className="banner_area">
        <h2>Login</h2>
        <a href="#">
          <span> Welcome back! We missed you.</span>
        </a>
      </div>
      <section className="contact_us_area">
        <div className="container">
          <div
            className="row contact_us_row"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div className="col-lg-7 getin_touch">
              <div className="left_tittle">
                <h2 style={errorStyle}>{errorMessage}</h2>
              </div>
              <form
                className="row from_main"
                action="https://designarc.biz/demos/fitzeous/theme/php/contact.php"
                method="post"
                id="phpcontactform"
                novalidate="novalidate"
              >
                <div className="form-group col-lg-6">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address*"
                  />
                </div>
                <div className="form-group col-lg-6">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password*"
                  />
                </div>

                <div className="form-group m-0 col-12" style={divStyle}>
                  {loading === true ? (
                    <ClipLoader loading={loading} color="#000" size={60} />
                  ) : (
                    <button
                      className="find_btn btn"
                      id="js-contact-btn"
                      onClick={handleSubmitForm}
                      type="submit"
                    >
                      Login
                    </button>
                  )}

                  <Link
                    to="/signup"
                    style={{
                      marginLeft: "5%",
                      color: "#9ac339",
                      fontSize: "1.5rem",
                      border: "0",
                      lineHeight: "52px",
                      width: "215px",
                    }}
                  >
                    Not a Member?{" "}
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
