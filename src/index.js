import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap-icons/font/bootstrap-icons.css";
import { getTutors } from "./Database";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

getTutors();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
