import React, { useEffect, useState, useCallback } from "react";
import logo1 from "../images/home-5/logo-3.png";
import logo2 from "../images/logo-2.png";

import { Link, useNavigate } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();

  const [logout, setLogout] = useState("Login");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      setLogout("Logout");
    }
  }, [logout]);
  return (
    <header className="main_menu_area_five">
      <div className="header_logo_area_two">
        <div className="container">
          <div className="float-lg-left">
            <a className="logo" href="#">
              <img src={logo1} alt="logo" />
            </a>
          </div>
        </div>
      </div>
      <div className="menu_inner_area_four affix-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="#">
              <img src={logo2} alt="logo" />
            </a>
            <button
              className="navbar-toggler toggler-two"
              type="button"
              data-toggle="collapse"
              data-target="#navbar_supported"
              aria-controls="navbar_supported"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span />
              <span />
              <span />
              <span />
            </button>
            <div className="collapse navbar-collapse" id="navbar_supported">
              <ul className="navbar-nav menu mr-auto">
                <li>
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/aboutus"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    About Us
                  </Link>
                </li>
                <li className="dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/services"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </Link>
                  <ul className="dropdown-menu services_d">
                    <li>
                      <Link to="/balanceBody">Balance body mind</Link>
                    </li>
                    <li>
                      <Link to="/nutritionPlan">Nutrition Plan</Link>
                    </li>
                    <li>
                      <Link to="fitnessPerformance">
                        Fitness &amp; Performance
                      </Link>
                    </li>
                    <li>
                      <Link to="/routeinProgram">Routein Programe</Link>
                    </li>
                    <li>
                      <Link to="/weightlossProgram">Weight loss Programe</Link>
                    </li>
                    <li>
                      <Link to="/cardioExercise">Cardio Exercise</Link>
                    </li>
                    <li>
                      <Link to="/lobby">1-1 Consultation</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/gallery"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Gallery
                  </Link>
                </li>
                <li className="dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pages
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/testimonials">Testimonials</Link>
                    </li>
                    <li>
                      <Link to="/faq">FAQ</Link>
                    </li>
                  </ul>
                </li>
                <li >
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/blog"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="nav-link " to="/contact">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link end_menu"
                    id="login"
                    to="/login"
                    onClick={handleLogout}
                  >
                    {logout}
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
