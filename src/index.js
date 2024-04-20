import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Signup from "./Signup";
import LandingPage from "./App";
import "bootstrap-icons/font/bootstrap-icons.css";
import { getTutors } from "./Database";
import { BrowserRouter } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import TutorView from "./TutorView";

getTutors();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <LandingPage />
    {/* <Signup /> */}
  </BrowserRouter>
);
