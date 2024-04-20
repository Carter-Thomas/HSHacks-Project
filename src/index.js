import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Signup from "./Signup";
<<<<<<< HEAD
import "bootstrap-icons/font/bootstrap-icons.css";
=======
import { getTutors } from "./Database";
getTutors();
>>>>>>> f76c47a79220f22f86da9415462a1ee8b1162c85

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Signup />
  </React.StrictMode>
);
