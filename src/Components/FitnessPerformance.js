import React from 'react'
import nutritionImage1 from "../images/nutrition-9.jpg";
import nutritionImage2 from "../images/nutrition-10.jpg";
import nutritionImage3 from "../images/nutrition-left-sidebar.jpg";
import { Link } from 'react-router-dom';

export default function FitnessPerformance() {
  return (
    <div>
        {/* Banner Area */}
        <div className="banner_area">
          <h2>Fitness & Performance</h2>
          <a href="#">
            Home <span> Fitness & Performance</span>
          </a>
        </div>
        {/* End Banner Area */}

        {/* Nutrition Plan Area */}
        <section className="nutrition_plan_area">
          <div className="container">
            <div className="row nutrition_plan_inner nutrition2">
              <div className="col-lg-9 nutrition_right_sidebar float-md-right">
                <div className="row nutrition_row">
                  <div className="col nutrition_img">
                    <img className="img-fluid" src={nutritionImage1} alt="" />
                  </div>
                  <div className="col-12 program_details">
                    <h2>Program Details</h2>
                    <p>
                      Improved Physical Health: Regular exercise can improve
                      cardiovascular health, increase muscle strength and
                      endurance, improve flexibility, and reduce the risk of
                      chronic diseases such as heart disease, diabetes, and
                      obesity.
                    </p>
                    <p>
                      Bring to the table win-win survival strategies to ensure
                      proactive domination. At the end of the day, going
                      forward, a new normal that has evolved from generation X
                      is on the runway heading towards a streamlined cloud
                      solution. User-generated content in real-time will have
                      multiple touchpoints for offshoring. Capitalize on low
                      hanging fruit to identify a ballpark value-added activity
                      to beta test.
                    </p>
                  </div>
                  <div className="col benefit_nutritions_content">
                    <h3>Benefit of Training</h3>
                    <p>
                      Expound the actual teachings of the great explorer of the
                      truth, the master-builder of human happiness. No one
                      rejects, dislikes, or avoids pleasure itself,
                    </p>
                    <ul className="benefit_list">
                      <li>Mental Health</li>
                      <li>Increased Energy and Stamina</li>
                      <li>Weight Management</li>
                      <li>Improved Quality of Life</li>
                    </ul>
                  </div>
                  <div className="col benefit_nutritions_img text-right">
                    <img src={nutritionImage2} alt="" />
                  </div>
                  <div className="col-12 nutrition_strategies">
                    <div className="row media_row m-0">
                      <div className="media b_g col-md-6">
                        <i className="flaticon-nutrition"></i>
                        <div className="media-left">
                          <h4>Nutrition Strategies</h4>
                          <p>
                            Leverage agile frameworks to provide a robust
                            synopsis for high-level overviews. Iterative
                            approaches.
                          </p>
                        </div>
                      </div>
                      <div className="media col-md-6">
                        <i className="flaticon-users"></i>
                        <div className="media-left">
                          <h4>One to One Training</h4>
                          <p>
                            Leverage agile frameworks to provide a robust
                            synopsis for high-level overviews. Iterative
                            approaches.
                          </p>
                        </div>
                      </div>
                      <div className="media col-md-6">
                        <i className="flaticon-chat"></i>
                        <div className="media-left">
                          <h4>Regular Consultations</h4>
                          <p>
                            Leverage agile frameworks to provide a robust
                            synopsis for high-level overviews. Iterative
                            approaches.
                          </p>
                        </div>
                      </div>
                      <div className="media b_g col-md-6">
                        <i className="flaticon-video-player"></i>
                        <div className="media-left">
                          <h4>Video Training Pack</h4>
                          <p>
                            Leverage agile frameworks to provide a robust
                            synopsis for high-level overviews. Iterative
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
                <a href="gallery.html">
                  <img src={nutritionImage3} alt="" />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* End Nutrition Plan Area */}
      </div>
  )
}
