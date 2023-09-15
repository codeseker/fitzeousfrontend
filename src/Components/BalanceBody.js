import React from "react";

import nutrition1 from "../images/nutrition-1.jpg";
import nutrition5 from "../images/nutrition-5.jpg";
import leftSideBar from "../images/nutrition-left-sidebar.jpg";
import { Link } from "react-router-dom";

export default function BalanceBody() {
  return (
    <div>
      <div>
        <div className="banner_area">
          <h2>Balance body &amp; mind</h2>
          <a href="#">
            Home <span>&gt; Services &gt; Balance body &amp; mind</span>
          </a>
        </div>
        <section className="nutrition_plan_area">
          <div className="container">
            <div className="row nutrition_plan_inner">
              <div className="col-lg-9 nutrition_right_sidebar float-md-right">
                <div className="row m0">
                  <div className="nutrition_img">
                    <img className="img-fluid" src={nutrition1} alt="" />
                  </div>
                  <div className="col-12 program_details">
                    <h2>Program Details</h2>
                    <p>
                      A balance body mind program is designed to help
                      individuals achieve optimal health and well-being by
                      addressing the needs of the body, mind, and spirit. This
                      holistic approach recognizes that good health is not just
                      the absence of disease, but a state of complete physical,
                      mental, and emotional well-being. A balance body mind
                      program typically includes activities that promote
                      mindfulness, such as meditation, breathing exercises, and
                      yoga.
                    </p>
                    <p>
                      It also focuses on promoting healthy eating habits,
                      physical activity, and stress management techniques. By
                      combining these different elements, individuals can
                      develop the skills and knowledge needed to achieve a
                      greater sense of balance and harmony in their lives. The
                      ultimate goal of a balance body mind program is to help
                      individuals achieve optimal health and well-being by
                      providing them with the tools and resources needed to live
                      a more balanced and fulfilling life.
                    </p>
                  </div>
                  <div className="col-md-7 benefit_nutritions_content">
                    <h3>Benefit of Training</h3>
                    <p>
                      Expound the actual teachings of the great explorer of the
                      truth, the master-builder of human happiness. No one
                      rejects, dislikes, or avoids pleasure itself,
                    </p>
                    <ul className="benefit_list">
                      <li>Mental clarity</li>
                      <li>Reduced stress and anxiety</li>
                      <li>Better sleep</li>
                      <li>mproved physical health</li>
                    </ul>
                  </div>
                  <div className="col-md-5 benefit_nutritions_img text-right">
                    <img className="img-fluid" src={nutrition5} alt="" />
                  </div>
                  <div className="col-12 nutrition_strategies">
                    <div className="row media_row m-0">
                      <div className="media b_g col-md-6">
                        <i className="flaticon-nutrition" />
                        <div className="media-left">
                          <h4>Nutrition Strategies</h4>
                          <p>
                            Leverage agile frameworks to provide a robust
                            synopsis for high level over-views. Iterative
                            approaches.
                          </p>
                        </div>
                      </div>
                      <div className="media col-md-6">
                        <i className="flaticon-users" />
                        <div className="media-left">
                          <h4>One to One Training</h4>
                          <p>
                            Leverage agile frameworks to provide a robust
                            synopsis for high level over-views. Iterative
                            approaches.
                          </p>
                        </div>
                      </div>
                      <div className="media col-md-6">
                        <i className="flaticon-chat" />
                        <div className="media-left">
                          <h4>Regular Consultations</h4>
                          <p>
                            Leverage agile frameworks to provide a robust
                            synopsis for high level over-views. Iterative
                            approaches.
                          </p>
                        </div>
                      </div>
                      <div className="media b_g col-md-6">
                        <i className="flaticon-video-player" />
                        <div className="media-left">
                          <h4>Video Training Pack</h4>
                          <p>
                            Leverage agile frameworks to provide a robust
                            synopsis for high level over-views. Iterative
                            approaches.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 nutrition_left_sidebar float-md-right">
                <ul className="plan_menu">
                  <li>
                    <Link to="/balanceBody" className="active">
                      Balance Body Mind
                    </Link>
                  </li>
                  <li>
                    <Link to="/nutritionPlan">Nutrition Plan</Link>
                  </li>
                  <li>
                    <Link to="/fitnessPerformance">
                      Fitness &amp; Performance
                    </Link>
                  </li>
                  <li>
                    <Link to="/routeinProgram">Routein Program</Link>
                  </li>
                  <li>
                    <Link to="/weightlossProgram">Weight Loss Program</Link>
                  </li>
                  <li>
                    <Link to="/cardioExercise">Cardio Exercise</Link>
                  </li>
                </ul>
                <Link to="/gallery">
                  <img src={leftSideBar} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
