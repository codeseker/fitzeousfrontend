import React from 'react'
import cardioImage1 from '../images/nutrition-6.jpg';
import cardioImage2 from '../images/nutrition-7.jpg';
import cardioImage3 from '../images/nutrition-8.jpg';
import { Link } from 'react-router-dom';

import nutritionLeftSidebarImage from "../images/nutrition-left-sidebar.jpg";

export default function CardioExercise() {
  return (
    <div>
      <div className="banner_area">
            <h2>Cardio Exercise</h2>
            <a href="#">Home <span> Cardio Exercise</span></a>
        </div>
        <section className="nutrition_plan_area">
            <div className="container">
                <div className="row nutrition_plan_inner">
                    <div className="col-lg-9 nutrition_right_sidebar float-md-right">
                        <div className="nutrition_inner">
                            <div className="row">
                                <div className="col-md nutrition_img">
                                    <img src={cardioImage1} alt=""/> 
                                </div>
                                <div className="col-md nutrition_img">
                                    <img src={cardioImage2} alt=""/> 
                                </div>
                                <div className="col-12 program_details">
                                    <h2>Cardio Exercise</h2>
                                    <p>Cardio exercises, also known as cardiovascular exercises, are activities that increase your heart rate and breathing rate, resulting in improved cardiovascular health and endurance. Here are some examples of cardio exercises:</p>
                                </div> 
                                <div className="col benefit_nutritions_img"><img src={cardioImage3} alt=""/></div>
                                <div className="col benefit_nutritions_content">
                                    <h3>Cardio Exercises: </h3>
                                    <ul className="benefit_list">
                                        <li>Running or jogging</li>
                                        <li>Cycling</li>
                                        <li>Swimming</li>
                                        <li>HIIT (High-Intensity Interval Training)</li>
                                        <li>Walking</li>
                                    </ul>
                                </div>
                                <div className="col-12 nutrition_strategies">
                                   <div className="row media_row m-0">
                                        <div className="media b_g col-md-6">
                                           <i className="flaticon-nutrition"></i>
                                            <div className="media-left">
                                                <h4>Nutrition Strategies</h4>
                                                <p>Leverage agile frameworks to provide a robust synopsis for high level over-views. Iterative approaches.</p>
                                            </div>
                                        </div>
                                        <div className="media col-md-6">
                                           <i className="flaticon-users"></i>
                                            <div className="media-left">
                                                <h4>One to One Training</h4>
                                                <p>Leverage agile frameworks to provide a robust synopsis for high level over-views. Iterative approaches.</p>
                                            </div>
                                        </div>
                                        <div className="media col-md-6"> 
                                           <i className="flaticon-chat"></i>
                                            <div className="media-left">
                                                <h4>Regular Consultations</h4>
                                                <p>Leverage agile frameworks to provide a robust synopsis for high level over-views. Iterative approaches.</p>
                                            </div>
                                        </div>
                                        <div className="media b_g col-md-6"> 
                                           <i className="flaticon-video-player"></i>
                                            <div className="media-left">
                                                <h4>Video Training Pack</h4>
                                                <p>Leverage agile frameworks to provide a robust synopsis for high level over-views. Iterative approaches.</p>
                                            </div>
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
                        <a href="gallery.html"><img src={nutritionLeftSidebarImage} alt=""/></a>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
