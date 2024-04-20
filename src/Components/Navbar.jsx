import { useEffect, useState } from "react";
import "../styles/Navbar.scss";
import logoTransparent from "../assets/logoTransparent.png";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  });
  return (
    <header>
      <nav
        className={`d-flex justify-content-between p-3 ${
          scroll ? "sticky" : ""
        }`}
      >
        <img src={logoTransparent} alt="logo" />
        <div className="d-flex gap-5">
          <a href="#about-section">About</a>
          <a href="#services-section">Login</a>
          <a href="#contact-section">Contact</a>
          <button className="contact">
            <i className="bi bi-telephone-fill mr-3"></i> 312-444-1423
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;