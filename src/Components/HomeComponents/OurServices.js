import React from "react";
import { Link } from "react-router-dom";

export default function OurServices() {
  return (
    <div>
      <section className="service_area_two">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="left_tittle">
                <h2>Our Services</h2>
                <h4>We provide one stops solution regarding your health</h4>
                <p>
                  We offer workout plans, healthy recipes, expert tips, news,
                  and reliable information to support individuals in achieving
                  their fitness goals.
                </p>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row service_row">
                <div className="col-md-6 body_mind">
                  <div className="media">
                    <i className="flaticon-running" />
                    <div className="media-body">
                      <h4>Balance Body mind</h4>
                      <p>
                        A balance body mind program is designed to help
                        individuals achieve optimal health.
                      </p>
                      <Link to="/balanceBody">Read more</Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 body_mind">
                  <div className="media">
                    <i className="flaticon-nutrition" />
                    <div className="media-body">
                      <h4>Nutrition Plan</h4>
                      <p>
                        A nutrition plan for a balanced body and mind program
                        should be tailored to the individual's needs.
                      </p>
                      <Link to="/nutritionPlan">Read more</Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 body_mind">
                  <div className="media">
                    <i className="flaticon-gym" />
                    <div className="media-body">
                      <h4>Fitness &amp; Performance</h4>
                      <p>
                        Improved Physical Health: Regular exercise can improve
                        cardiovascular health.
                      </p>
                      <Link to="/fitnessPerformance">Read more</Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 body_mind">
                  <div className="media">
                    <i className="flaticon-runner" />
                    <div className="media-body">
                      <h4>Routein Programe</h4>
                      <p>
                        Improved Physical Health: Regular exercise can improve
                        cardiovascular health.
                      </p>
                      <Link to="/routeinProgram">Read more</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="fitness_course_area">
        <div class="container">
          <div class="fitness_course_row">
            <h2>6 months Fitness Course</h2>
            <p>
              Start working on your body today, and with our individual fitness
              program, already in 90 days you will see a totally different girl
              in the mirror.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
