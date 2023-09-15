import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer className="footer_area">
        <div className="container">
          <div className="row footer_row">
            <div className="col-lg-3 col-md-6 fooer_logo">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
              <p>
                Empowering individuals to achieve their fitness goals through
                reliable information, workout plans, healthy recipes, and expert
                tips.
              </p>
              <ul className="social_icon">
                <li>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin-square"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-skype"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 quick quick_strat">
              <h4>Quick Links</h4>
              <ul className="quick_links">
                <li>
                  <Link to="/aboutUs">- About Us</Link>
                </li>
                <li>
                  <Link to="/blog">- Blogs</Link>
                </li>
                <li>
                  <Link to="#">- Services</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 quick">
              <h4>Our Services</h4>
              <ul className="quick_links">
                <li>
                  <Link to="/balanceBody">- Balance Body &amp; Mind</Link>
                </li>
                <li>
                  <Link to="/nutritionPlan">- Nutrition Plan</Link>
                </li>
                <li>
                  <Link to="/fitnessPerformance">
                    - Fitness &amp; Performance
                  </Link>
                </li>
                <li>
                  <Link to="/weightlossProgram">- Weight Loss Program</Link>
                </li>
                <li>
                  <Link to="/cardioExercise">- Cardio Excercise</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 quick">
              <h4>Get in Touch</h4>
              <address>
                <span>
                  <i className="fa fa-map-marker"></i>Poornima Institute of
                  Engineering and technology
                </span>
                <a href="#">
                  <i className="fa fa-phone"></i>+ 01865 524 8503{" "}
                </a>
                <a href="#">
                  <i className="fa fa-envelope-o"></i>support@gmail.com
                </a>
              </address>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
