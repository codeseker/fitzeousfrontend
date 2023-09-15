import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";

import Footer from "./Footer";
import HomePage from "./HomePage";
import AboutUs from "./AboutUs";
import BalanceBody from "./BalanceBody";
import NutritionPlan from "./NutritionPlan";
import FitnessPerformance from "./FitnessPerformance";
import RoutineProgram from "./RoutineProgram";
import WeightLoss from "./WeightLoss";
import CardioExercise from "./CardioExercise";
import Gallery from "./Gallery";
import Testimonial from "./Testimonial";
import Faq from "./Faq";
import Blog from "./Blog";
import ContactUs from "./ContactUs";
import BlogDetails from "./BlogDetails";
import Lobby from "./Lobby";

export default function Main() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/balanceBody" element={<BalanceBody />} />
        <Route path="/nutritionPlan" element={<NutritionPlan />} />
        <Route path="/fitnessPerformance" element={<FitnessPerformance />} />
        <Route path="/routeinProgram" element={<RoutineProgram />} />
        <Route path="/weightlossProgram" element={<WeightLoss />} />
        <Route path="/cardioExercise" element={<CardioExercise />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/testimonials" element={<Testimonial />} />
        <Route path="/faq" element={<Faq />} />

        <Route path="/blog/*" element={<Blog />} />
        <Route path="/blogDetails/*" element={<BlogDetails />} />

        <Route path="/contact" element={<ContactUs />} />
        <Route path="/lobby" element={<Lobby />} />
      </Routes>
      <Footer />
    </div>
  );
}
