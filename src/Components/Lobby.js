import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Lobby = () => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const navigate = useNavigate();

  const handleSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      navigate(`/room/${room}`);
    },
    [username, room, navigate]
  );

  return (
    <div>
      <div className="banner_area">
        <h2>Consultant</h2>
        <a href="#">
          Home <span> Meet your Consultant</span>
        </a>
      </div>
      <section className="contact_us_area">
        <div className="container">
          <div className="row contact_us_row">
            <div className="col-lg-7 getin_touch">
              <div className="left_tittle">
                <h2>Get in touch with your consultant</h2>
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
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="username"
                  />
                </div>
                <div className="form-group col-lg-6">
                  <input
                    type="text"
                    className="form-control"
                    id="room"
                    name="room"
                    value={room}
                    onChange={(e) => setRoom(e.target.value)}
                    placeholder="Enter room Code"
                  />
                </div>

                <div className="form-group m-0 col-12">
                  <button
                    className="find_btn btn"
                    id="js-contact-btn"
                    onClick={handleSubmitForm}
                    type="submit"
                  >
                    Connect
                  </button>
                  <div
                    id="js-contact-result"
                    data-success-msg="Form submitted successfully."
                    data-error-msg="Messages Successfully"
                  ></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lobby;
