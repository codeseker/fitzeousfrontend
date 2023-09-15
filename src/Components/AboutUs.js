import React from "react";
import image1 from "../images/best-fitness.jpg";
import imageCheck from "../images/check.png";
import imageMission from "../images/misssion.jpg";

export default function AboutUs() {
  return (
    <div>
      <div className="banner_area">
        <h2>About us</h2>
        <a href="#">
          Home <span>&gt; About us</span>
        </a>
      </div>
    
      <section className="best_fitness_area">
        <div className="container">
          <div className="row best_fitness_row">
            <div className="col-lg-4">
              <div className="fitness_img">
                <img src={image1} alt="" />
              </div>
            </div>
            <div className="col-lg-8 fitness_content">
              <div className="left_tittle p-0">
                <h2>Join with best fitness coach</h2>
                <p>
                  Our website can help you meet your fitness goals. This can
                  become your teacher, your motivator, your coach and your
                  friend.
                </p>
              </div>
              <ul className="fitness_list">
                <li>
                  <img src={imageCheck} alt="" />
                  Teach you to exercise using proper form to prevent injury
                </li>
                <li>
                  <img src={imageCheck} alt="" />
                  Add diversity to your workout to get over a weight-loss
                  plateau
                </li>
                <li>
                  <img src={imageCheck} alt="" />
                  Boost athletic performance with sport-specific training
                </li>
                <li>
                  <img src={imageCheck} alt="" />
                  Give you the accountability and motivation to get to the gym
                </li>
                <li>
                  <img src={imageCheck} alt="" />
                  Encourage you to try new fitness challenges and drive your
                  health forward
                </li>
              </ul>
            </div>
            <div className="col-md-6 misssion_content">
              <div className="left_tittle">
                <h2>Our misssion</h2>
              </div>
              <p>
                Our mission at the health and fitness website is to inspire and
                empower individuals to live a healthy and active lifestyle. We
                strive to provide reliable and evidence-based information on
                fitness, nutrition, and overall health to help people make
                informed choices.
              </p>
              <p>
                We aim to create a supportive community where individuals can
                share their experiences, challenges, and successes in their
                fitness journey. Our goal is to make fitness accessible to
                everyone, regardless of their fitness level, age, or background.
              </p>
              <p>
                We believe that a healthy lifestyle is not just about physical
                fitness, but also about mental and emotional well-being.
                Therefore, we also provide resources and tips on stress
                management, self-care, and mindfulness.
              </p>
            </div>
            <div className="col-md-6 misssion_img">
              <img src={imageMission} alt="" />
            </div>
          </div>
        </div>
      </section>
    
      <section className="chooseus_area">
        <div className="container-fulid">
          <div className="row chooseus_row m-0">
            <div className="col-md-5 choose_img">
              <h2>Why Choose Us</h2>
            </div>
            <div className="col-md-7 choose_content">
              <div className="media">
                <i className="flaticon-runner" />
                <div className="media-body">
                  <a href="#">Workout routines</a>
                  <p>
                    Our website provide workout routines using our
                    MindFullMuscle website.
                  </p>
                </div>
              </div>
              <div className="media">
                <i className="flaticon-handshake" />
                <div className="media-body">
                  <a href="#">Support &amp; Motivation</a>
                  <p>
                    Our website provides inspiration blogs that can push you to
                    do more.
                  </p>
                </div>
              </div>
              <div className="media">
                <i className="flaticon-nutrition" />
                <div className="media-body">
                  <a href="#">Healthy nutrition</a>
                  <p>
                    Our website provides nutritions blogs that can help you to
                    gain some knowledge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     
      <section className="fitness_course_area">
        <div className="container">
          <div className="fitness_course_row">
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
