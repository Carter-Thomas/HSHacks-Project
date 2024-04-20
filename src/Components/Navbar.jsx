import { useEffect, useState } from "react";
import "../App.scss";
import "../Styles/Navbar.scss";
import logoTransparent from "../Assets/D214Logo.png";
import { Routes, Route, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Login from '../Login.jsx';
import Signup from "../Signup";

function Navbar() {
  const navigate = useNavigate();

  function handleNewPageClick() {
    navigate('/login');
  }

  function handleSignUpPageClick() {
    navigate('/signup');
  }  
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  });

  return (
    <header>
      <nav className={`d-flex p-3 ${scroll ? "sticky" : ""} justify-space-between`}>
        <img src={logoTransparent} alt="logo" />
        <div className="button-group">
        <div>
          <Routes>
            <Route path="/" element={<Button onClick={handleNewPageClick}>Login</Button>} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Routes>
            <Route path="/" element={<Button onClick={handleSignUpPageClick}>Sign Up</Button>} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          </div>
          {/* <button className="contact">
            <i className="bi bi-telephone-fill mr-3"></i> 312-444-1423
          </button> */}
        </div>
          
      </nav>
    </header>
  );
};

export default Navbar;
