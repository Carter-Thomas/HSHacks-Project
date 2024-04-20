import { useEffect, useState } from "react";
import "./styles/Navbar.scss";
import logoTransparent from "../assets/D214Logo.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  });

  return (
    <header>
      <nav
        className={`d-flex p-3 ${scroll ? "sticky" : ""} justify-space-between`}
      >
        <img src={logoTransparent} alt="logo" onClick={()=>navigate("/")}/>
        <div className="button-group">
          <button onClick={() => navigate("/signup")}>Signup</button>
          <button onClick={() => navigate("/login")}>Login</button>
          <button className="contact">
            <i className="bi bi-telephone-fill mr-3"></i> 312-444-1423
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
