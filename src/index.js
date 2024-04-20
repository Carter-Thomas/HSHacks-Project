import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap-icons/font/bootstrap-icons.css";
import { getTutors } from "./Database";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import App from "./App";
import StudentView from "./pages/StudentView";

getTutors();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
