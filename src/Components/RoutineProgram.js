import React from "react";
import nutritionImage11 from "../images/nutrition-11.jpg";
import nutritionImage12 from "../images/nutrition-12.jpg";
import nutritionImage13 from "../images/nutrition-13.jpg";
import nutritionLeftSidebarImage from "../images/nutrition-left-sidebar.jpg";
import { Link } from "react-router-dom";

export default function RoutineProgram() {
  return (
    <div>
      {/* Banner Area */}
      <div className="banner_area">
        <h2>Routein Program</h2>
        <a href="#">
          Home <span> Routein Program</span>
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
                  <img src={nutritionImage11} alt="" />
                </div>
                <div className="col-md nutrition_img">
                  <img src={nutritionImage12} alt="" />
                </div>
                <div className="col-12 program_details">
                  <h2>Program Details</h2>
                  <p>
                    A fitness routine program typically includes a combination
                    of exercises designed to improve cardiovascular health,
                    strength, flexibility, and overall fitness. The program may
                    be tailored to the individual's fitness level, goals, and
                    time constraints.
                  </p>
                  <p>
                    A typical fitness routine may include activities such as
                    running, cycling, swimming, or walking, to improve
                    cardiovascular fitness. Strength training exercises such as
                    weight lifting, push-ups, and squats can be used to build
                    muscle mass and improve strength. Stretching exercises like
                    yoga or Pilates can help improve flexibility and reduce the
                    risk of injury.
                  </p>
                  <p>
                    It's important to incorporate a variety of exercises into
                    your fitness routine, as well as gradually increasing the
                    intensity or difficulty of the workouts over time. This will
                    help prevent plateaus and keep the body challenged.
                  </p>
                  <p>
                    The frequency of the workouts can vary depending on your
                    goals and availability, but a general guideline is to aim
                    for at least 30 minutes of moderate to intense exercise five
                    days a week. However, even small amounts of physical
                    activity can provide health benefits.
                  </p>
                  <p>
                    Before beginning a fitness routine, it's important to
                    consult with a healthcare professional to ensure it's safe
                    for you to participate. Additionally, it's important to
                    listen to your body and make adjustments as needed to
                    prevent injury and ensure long-term success.
                  </p>
                </div>
                <div className="col benefit_nutritions_img">
                  <img src={nutritionImage13} alt="" />
                </div>
                <div className="col benefit_nutritions_content">
                  <h3>Routine Program</h3>
                  <p>
                    Here's a sample routine program for the benefit of nutrition
                  </p>
                  <ul className="benefit_list">
                    <li>
                      Breakfast:
                      <ul className="noBulletPoint">
                        <li>Oatmeal with nuts, fruits, and milk</li>
                      </ul>
                    </li>
                    <li>
                      Mid-morning snack:
                      <ul className="noBulletPoint">
                        <li>Greek yogurt with honey and berries</li>
                      </ul>
                    </li>
                    <li>
                      Lunch:
                      <ul className="noBulletPoint">
                        <li>Grilled chicken breast with mixed vegetables</li>
                        <li>Brown rice or quinoa</li>
                        <li>Water or unsweetened iced tea</li>
                      </ul>
                    </li>
                    <li>
                      Mid-afternoon snack:
                      <ul className="noBulletPoint">
                        <li>Fresh fruit salad with low-fat cottage cheese</li>
                      </ul>
                    </li>
                    <li>
                      Dinner:
                      <ul className="noBulletPoint">
                        <li>Grilled salmon with asparagus and sweet potato</li>
                        <li>
                          Salad with mixed greens and vinaigrette dressing
                        </li>
                        <li>Water or unsweetened iced tea</li>
                      </ul>
                    </li>
                    <li>
                      Bedtime snack (optional):
                      <ul className="noBulletPoint">
                        <li>
                          Low-fat milk or a small serving of plain popcorn
                        </li>
                      </ul>
                    </li>
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
                          for high level over-views. Iterative approaches.
                        </p>
                      </div>
                    </div>
                    <div className="media col-md-6">
                      <i className="flaticon-users"></i>
                      <div className="media-left">
                        <h4>One to One Training</h4>
                        <p>
                          Leverage agile frameworks to provide a robust synopsis
                          for high level over-views. Iterative approaches.
                        </p>
                      </div>
                    </div>
                    <div className="media col-md-6">
                      <i className="flaticon-chat"></i>
                      <div className="media-left">
                        <h4>Regular Consultations</h4>
                        <p>
                          Leverage agile frameworks to provide a robust synopsis
                          for high level over-views. Iterative approaches.
                        </p>
                      </div>
                    </div>
                    <div className="media b_g col-md-6">
                      <i className="flaticon-video-player"></i>
                      <div className="media-left">
                        <h4>Video Training Pack</h4>
                        <p>
                          Leverage agile frameworks to provide a robust synopsis
                          for high level over-views. Iterative approaches.
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
                <img src={nutritionLeftSidebarImage} alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* End Nutrition Plan Area */}
    </div>
  );
}
