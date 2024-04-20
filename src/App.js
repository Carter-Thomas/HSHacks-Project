import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.scss";
import Button from "react-bootstrap/Button";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";

function LandingPage() {
  const navigate = useNavigate();
  function handleLoginClick() {
    navigate("/login");
  }

  function handleSignupClick() {
    navigate("/signup");
  }

  return (
    <div className="App">
      <div className="LandingHeader">
        <h1>D214TutorConnect</h1>
      </div>
      <header></header>
      <div className="App-main">
        <h2>Find a Peer Tutor</h2>
        <nav>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Button onClick={handleLoginClick}>Login</Button>
                  <Button onClick={handleSignupClick}>Signup</Button>
                </>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </nav>
      </div>
      <p>Get connected with tutors who can help you succeed!</p>
    </div>
  );
}

export default LandingPage;
