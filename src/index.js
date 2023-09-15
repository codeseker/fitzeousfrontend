import React from "react";
import ReactDOM from "react-dom/client";

import "./css/font-awesome.min.css";
import "./vendors/stroke-icon/style.css";
import "./vendors/flat-icon/flaticon.css";
import "./vendors/revolution/css/settings.css";
import "./vendors/revolution/css/layers.css";
import "./vendors/revolution/css/navigation.css";
import "./vendors/animate-css/animate.css";
import "./vendors/magnify-popup/magnific-popup.css";
import "./vendors/owl-carousel/owl.carousel.min.css";
import "./vendors/lightbox/simpleLightbox.css";
import "./css/style.css";
import "./css/responsive.css";
import "./css/bootstrap.min.css";
import "../src/Components/logic"

import { BrowserRouter } from "react-router-dom";

import App from "./App";
import reportWebVitals from "./reportWebVitals";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    
      <App />
    
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
