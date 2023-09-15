import React from "react";
import slide1 from "../../images/homeSlider/slider-6.jpg";
import slide2 from "../../images/homeSlider/slider-8.jpg";
import slide3 from "../../images/homeSlider/slider-7.jpg";
import image1 from "../../images/home-5/promo.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function SliderSection() {
  return (
    <div>
      <Carousel infiniteLoop autoPlay>
        <div>
          <img src={slide1} />
        </div>
        <div>
          <img src={slide2} />
        </div>
        <div>
          <img src={slide3} />
        </div>
      </Carousel>
      <section class="about_me_area">
            <div class="about_me_left">
                <div class="about_content">
                    <h2>About Us</h2>
                    <p class="bold">Our fitness coaches can enable you to meet your well- ness objectives. They can turn into your instructor, your helper, your mentor and your companion. </p>
                    <p>Our health and fitness website provides reliable information and resources to help individuals achieve their fitness goals and live a healthy lifestyle. We offer workout plans, healthy recipes, expert tips, and news in health and fitness to support people of all levels.</p>
                    <a href="/about.html" class="get_btn">Know more about us</a>
                </div>
            </div>
            <div class="about_me_right">
                <img src={image1} alt=""/>
            </div>
        </section>
    </div>
  );
}
