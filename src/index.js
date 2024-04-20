import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap-icons/font/bootstrap-icons.css";
import { getTutors } from "./Database";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import TutorView from "./TutorView";
import NewPosting from "./NewPosting";

getTutors();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <NewPosting />
    {/* <Signup /> */}
  </BrowserRouter>
);
