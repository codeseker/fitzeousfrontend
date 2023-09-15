import React from "react";

export default function Faq() {
  return (
    <div>
      <div className="banner_area">
        <h2>Faq</h2>
        <a href="#">
          Home <span>Faq</span>
        </a>
      </div>
      <section className="frequently_asked_questions">
        <div className="container">
          <div className="left_tittle">
            <h2>Frequently Asked Questions</h2>
            <p>
              Discover you question from underneath or present your inquiry
              fromt the submit box.
            </p>
          </div>
          <div className="input-group search_answer">
            <input
              type="text"
              className="form-control"
              placeholder="Search Your Answer"
            />
            <span className="input-group-btn">
              <button className="btn btn-secondary" type="button">
                <i className="fa fa-search"></i>
              </button>
            </span>
          </div>
          <div className="row frequently_questions_row">
            <div
              id="questions_aq"
              className="col-md-6 questions_ans"
              data-children=".item"
            >
              <div className="item">
                <a
                  data-toggle="collapse"
                  data-parent="#questions_aq"
                  href="#accordion1"
                  className="collapsed"
                >
                  What is benefit for coach in health?
                </a>
                <div id="accordion1" className="collapse" role="tabpanel">
                  <p>
                    Coaching can improve patient adherence, lifestyle
                    modification, and overall health outcomes through
                    personalized support and guidance.
                  </p>
                </div>
              </div>
              <div className="item">
                <a
                  data-toggle="collapse"
                  data-parent="#questions_aq"
                  href="#accordion2"
                  className="collapsed"
                >
                  Is our fitness coaches can enable you to meet <br /> your
                  wellness objectives?
                </a>
                <div id="accordion2" className="collapse show" role="tabpanel">
                  <p>
                    Yes, fitness coaches can help you achieve your fitness goals
                    by providing personalized guidance, motivation, and
                    accountability.
                  </p>
                </div>
              </div>
              <div className="item">
                <a
                  data-toggle="collapse"
                  data-parent="#questions_aq"
                  href="#accordion3"
                  className="collapsed"
                >
                  How I get good health with nutrients?
                </a>
                <div id="accordion3" className="collapse" role="tabpanel">
                  <p>
                    To achieve good health with nutrients, eat a balanced diet
                    with a variety of fruits, vegetables, whole grains, lean
                    proteins, and healthy fats.
                  </p>
                </div>
              </div>
              <div className="item">
                <a
                  data-toggle="collapse"
                  data-parent="#questions_aq"
                  href="#accordion4"
                  className="collapsed"
                >
                  Can I do planning for fitness with you?
                </a>
                <div id="accordion4" className="collapse" role="tabpanel">
                  <p>
                    Yes, I can help you plan your fitness goals with
                    personalized workouts, nutrition tips, and accountability.
                    Let's get started today!
                  </p>
                </div>
              </div>
            </div>
            <div
              id="questions_aq2"
              className="col-md-6 questions_ans"
              data-children=".item"
            >
              <div className="item">
                <a
                  data-toggle="collapse"
                  data-parent="#questions_aq2"
                  href="#accordion5"
                  className="collapsed"
                >
                  Is the information on this website reliable?
                </a>
                <div id="accordion5" className="collapse" role="tabpanel">
                  <p>
                    The website strives to provide accurate and evidence-based
                    information, but users should always consult with their
                    healthcare providers.
                  </p>
                </div>
              </div>
              <div className="item">
                <a
                  data-toggle="collapse"
                  data-parent="#questions_aq2"
                  href="#accordion6"
                  className="collapsed"
                >
                  Is there a fee to use this website?
                </a>
                <div id="accordion6" className="collapse" role="tabpanel">
                  <p>
                    It depends on the website. Some health websites may require
                    a subscription or charge for premium content, while others
                    are free to access.
                  </p>
                </div>
              </div>
              <div className="item">
                <a
                  data-toggle="collapse"
                  data-parent="#questions_aq2"
                  href="#accordion7"
                  className="collapsed"
                >
                  What should I do if I have concerns about the content on this
                  website?
                </a>
                <div id="accordion7" className="collapse" role="tabpanel">
                  <p>
                    Users can contact the website administrators or seek a
                    second opinion from a healthcare professional if they have
                    concerns about the content on the website.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
