import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Signup from "./Signup";
import "bootstrap-icons/font/bootstrap-icons.css";
import { getTutors } from "./Database";
getTutors();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Signup />
  </React.StrictMode>
);
