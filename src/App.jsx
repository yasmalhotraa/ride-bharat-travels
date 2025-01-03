import React from "react";
import { Routes, Route } from "react-router-dom";  // No need for BrowserRouter here
import HomePage from "./components/custom/HomePage";
import GetInTouch from "./components/Pages/ContactPage";
import DelhiDarshan from "./components/TourPlans/DelhiDarshan";
import AgraTour from "./components/TourPlans/AgraTour";
import AboutPage from "./components/Pages/AboutUsPage";
import TourPage from "./components/Pages/TourPage";
import "./components/Styling/App.css"; // Import the CSS file

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/delhi-darshan" element={<DelhiDarshan />} />
        <Route path="/agra-tour" element={<AgraTour />} />
        <Route path="/contact" element={<GetInTouch />} />
        <Route path="/about-page" element={<AboutPage />} />
        <Route path="/tour-page" element={<TourPage />} />
      </Routes>
    </>
  );
}

export default App;
