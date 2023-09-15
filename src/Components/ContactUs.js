import React from "react";

export default function ContactUs() {
  return (
    <div>
      <div className="banner_area">
        <h2>Contact us</h2>
        <a href="#">
          Home <span> Contact us</span>
        </a>
      </div>
      <section className="contact_us_area">
        <div className="container">
          <div className="row contact_us_row">
            <div className="col-lg-7 getin_touch">
              <div className="left_tittle">
                <h2>Get in touch with us</h2>
              </div>
              <form
                className="row from_main"
                action="https://designarc.biz/demos/fitzeous/theme/php/contact.php"
                method="post"
                id="phpcontactform"
                novalidate="novalidate"
              >
                <div className="form-group col-lg-6">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Username"
                  />
                </div>
                <div className="form-group col-lg-6">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email address*"
                  />
                </div>
                <div className="form-group col-12">
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    placeholder="Subject*"
                  />
                </div>
                <div className="form-group col-12">
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="form-group m-0 col-12">
                  <button
                    className="find_btn btn"
                    id="js-contact-btn"
                    type="submit"
                  >
                    Send message
                  </button>
                  <div
                    id="js-contact-result"
                    data-success-msg="Form submitted successfully."
                    data-error-msg="Messages Successfully"
                  ></div>
                </div>
              </form>
            </div>
            <div className="col-lg-5 map_area">
              <div
                id="mapBox"
                className="mapBox"
                data-lat="40.701083"
                data-lon="-74.1522848"
                data-zoom="12"
                data-marker="images/map-marker.png"
                data-info="PO Box CT16122 Collins Street West, Victoria 8007, Australia."
                data-mlat="40.701083"
                data-mlon="-74.1522848"
              ></div>
            </div>
          </div>
          <div className="row meet_area">
            <div className="col-lg-4 col-md-6 meet">
              <i className="flaticon-maps-and-flags"></i>
              <h3>Meet us</h3>
              <h6>Malviya Nagar Jaipur</h6>
            </div>
            <div className="col-lg-4 col-md-6 meet">
              <i className="flaticon-smartphone-call"></i>
              <h3>Call us</h3>
              <h6>Phone : +919887153864</h6>
            </div>
            <div className="col-lg-4 col-md-6 meet">
              <i className="flaticon-note"></i>
              <h3>Email us</h3>
              <h6>info@fitzeous.com</h6>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
