import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div>
      <section class="call_action_area">
        <div class="container">
          <div class="call_content">
            <h2>You Want To Join Us</h2>
            <p>
              Start working on your body today, and with our individual fitness
              program, already in 90 days you will see a totally different girl
              in the mirror.
            </p>
            <Link to="/contact" class="call_btn">
              Contact us now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
