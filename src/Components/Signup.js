import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Welcome");
  const [errorStyle, setErrorStyle] = useState({});
  const [divStyle, setDivStyle] = useState({});

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordMatch(e.target.value === confirmPass);
  };

  const handleConfirmPassChange = (e) => {
    setConfirmPass(e.target.value);
    setPasswordMatch(e.target.value === password);
  };

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
        "https://fitzeous.onrender.com/api/v1/auth/register",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            username: userName,
            email,
            password,
            fullName,
          }),
        }
      );

      const result = await response.json();
      setLoading(false);
      setDivStyle({});
      if (result.success === false) {
        const msg = result.error;
        setErrorMessage(msg);
        setErrorStyle({
          color: "red",
        });
      } else {
        localStorage.setItem("token", result.token);
        navigate("/");
      }
    },
    [email, password, userName, fullName, navigate]
  );

  return (
    <div>
      <div className="banner_area">
        <h2>Signup</h2>
        <a href="#">
          <span> We Welcome you!</span>
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
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Username*"
                  />
                </div>
                <div className="form-group col-lg-6">
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    name="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Full Name*"
                  />
                </div>
                <div className="form-group col-lg-6">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Password*"
                  />
                </div>
                <div className="form-group col-lg-6">
                  <input
                    type="password"
                    className={`form-control ${
                      passwordMatch ? "" : "is-invalid"
                    }`}
                    id="cpassword"
                    name="cpassword"
                    value={confirmPass}
                    onChange={handleConfirmPassChange}
                    placeholder="Confirm Password*"
                  />
                  {!passwordMatch && (
                    <div className="invalid-feedback">
                      Passwords do not match.
                    </div>
                  )}
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
                      Signup
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
