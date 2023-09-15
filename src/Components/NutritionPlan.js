import React from "react";
import nutritionImage1 from "../images/nutrition-2.jpg";
import nutritionImage2 from "../images/nutrition-3.jpg";
import nutritionImage3 from "../images/nutrition-4.jpg";
import nutritionImage4 from "../images/nutrition-left-sidebar.jpg";
import { Link } from "react-router-dom";

export default function NutritionPlan() {
  return (
    <div>
      {/* Banner Area */}
      <div className="banner_area">
        <h2>Nutrition Plan</h2>
        <a href="#">
          Home <span> Nutrition Plan</span>
        </a>
      </div>
      {/* End Banner Area */}

      {/* Nutrition Plan Area */}
      <section className="nutrition_plan_area">
        <div className="container">
          <div className="row nutrition_plan_inner nutrition_plan_main">
            <div className="col-lg-9 nutrition_right_sidebar float-md-right">
              <div className="row plan_main_row">
                <div className="col-md nutrition_img">
                  <img src={nutritionImage1} alt="" />
                </div>
                <div className="col-md nutrition_img">
                  <img src={nutritionImage2} alt="" />
                </div>
                <div className="col-12 program_details">
                  <h2>Program Details</h2>
                  <p>
                    A nutrition plan for a balanced body and mind program should
                    be tailored to the individual's needs and goals. The plan
                    should focus on providing adequate nutrients to support
                    physical and mental health, while also supporting any
                    specific health concerns or dietary restrictions.
                  </p>
                  <p>
                    The plan should include a variety of whole foods, such as
                    fruits, vegetables, whole grains, lean proteins, and healthy
                    fats. It should also incorporate a balance of
                    macronutrients, with a focus on high-quality sources of
                    carbohydrates, proteins, and fats. The plan should be
                    designed to provide sustained energy throughout the day and
                    support exercise and physical activity.
                  </p>
                  <p>
                    In addition to whole foods, the plan should also incorporate
                    supplements as needed. For example, if the individual is not
                    able to consume adequate amounts of certain nutrients
                    through their diet, a supplement may be recommended. This
                    could include vitamins, minerals, or other nutrients such as
                    omega-3 fatty acids.
                  </p>
                  <p>
                    It is also important to consider the timing and frequency of
                    meals. The plan should include regular meals and snacks to
                    support steady energy levels and prevent overeating.
                    Additionally, the timing of meals should be planned around
                    exercise and physical activity to ensure adequate fuel for
                    the body.
                  </p>
                </div>
                <div className="col benefit_nutritions_img">
                  <img src={nutritionImage3} alt="" />
                </div>
                <div className="col benefit_nutritions_content">
                  <h3>Benefit of Nutritions</h3>
                  <p>
                    Nutrition plays a crucial role in maintaining a balanced
                    body and mind. A well-balanced nutrition plan can provide
                    several benefits, including:
                  </p>
                  <ul className="benefit_list">
                    <li>Increased energy</li>
                    <li>Improved physical health</li>
                    <li>Reduced risk of chronic diseases</li>
                    <li>Improved digestion</li>
                    <li>Improved athletic performance</li>
                  </ul>
                </div>
                <div className="col-12 nutrition_strategies">
                  <div className="row media_row m-0">
                    <div className="media b_g col-md-6">
                      <i className="flaticon-nutrition"></i>
                      <div className="media-left">
                        <h4>Nutrition Strategies</h4>
                        <p>
                          Leverage agile frameworks to provide a robust synopsis
                          for high-level overviews. Iterative approaches.
                        </p>
                      </div>
                    </div>
                    <div className="media col-md-6">
                      <i className="flaticon-users"></i>
                      <div className="media-left">
                        <h4>One to One Training</h4>
                        <p>
                          Leverage agile frameworks to provide a robust synopsis
                          for high-level overviews. Iterative approaches.
                        </p>
                      </div>
                    </div>
                    <div className="media col-md-6">
                      <i className="flaticon-chat"></i>
                      <div className="media-left">
                        <h4>Regular Consultations</h4>
                        <p>
                          Leverage agile frameworks to provide a robust synopsis
                          for high-level overviews. Iterative approaches.
                        </p>
                      </div>
                    </div>
                    <div className="media b_g col-md-6">
                      <i className="flaticon-video-player"></i>
                      <div className="media-left">
                        <h4>Video Training Pack</h4>
                        <p>
                          Leverage agile frameworks to provide a robust synopsis
                          for high-level overviews. Iterative approaches.
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
                <img src={nutritionImage4} alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
