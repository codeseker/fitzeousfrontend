import React from "react";
import testimonialImage1 from "../../images/home-5/testimonial-img.jpg";
import testimonialImage2 from "../../images/home-5/testimonial-img2.jpg";

export default function Testimonial() {
  return (
    <div>
      <section className="testimonial_area_two">
        <div className="container">
          <div className="row">
            <div className="col-sm-7">
              <div className="about_content">
                <h2>Our Real Testimonials</h2>
                <p className="bold">
                  Our fitness coaches can enable you to meet your wellness
                  objectives. They can turn into your instructor, your helper,
                  your mentor, and your companion.
                </p>
                <p>
                  Osed quia consequuntur magni dolores eos qui ratione
                  voluptatem sequi nesciunt. Neque porro quisquam est, qui
                  dolorem ipsum quia dolor sit amet, consectetur, adipisci sed
                  quia non numquam qui ratione voluptatem sequi nesciunt. Neque
                  porro quisquam est.
                </p>
              </div>
            </div>
            <div className="col-sm-5 testimonial_gallery">
              <div className="item">
                <img src={testimonialImage1} alt="" />
                <h5>Before</h5>
              </div>
              <div className="item">
                <img src={testimonialImage2} alt="" />
                <h5>After</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
