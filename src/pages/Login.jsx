import { useState, useContext } from "react";
import { login } from "../Database";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import Navbar from "../components/Navbar";
import "./styles/Login.scss";

const Login = () => {
  const [accountType, setAccountType] = useState(null);

  const navigate = useNavigate();

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const inputs = [
    {
      name: "username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special characters.",
      label: "Username",
      type: "text",
      required: true,
    },
    {
      name: "email",
      errorMessage: "Invaild email.",
      label: "Email",
      type: "email",
      required: true,
    },
    {
      name: "password",
      errorMessage: "Password must be at least 6 characters.",
      label: "Password",
      type: "password",
      pattern: "^.{6,}$",
      required: true,
    },
  ];

  const handleAccountType = (type) => {
    setAccountType(type);
  };

  const onChange = (e) => {
    const { name, value } = e.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const username = values.username;
    const email = values.email;
    const password = values.password;

    try {
      // login(email, password);

      if (accountType === "tutor") {
        navigate("/tutor-view");
      } else {
        navigate("/student-view");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main>
      <Navbar />
      <section>
        <h1>Login</h1>
        <p>Welcome! Are you a tutor or student?</p>
        <button
          onClick={() => handleAccountType("tutor")}
          className={`${accountType === "tutor" ? "selected" : ""}`}
        >
          Tutor
        </button>
        <button
          onClick={() => handleAccountType("student")}
          className={`${accountType === "student" ? "selected" : ""}`}
        >
          Student
        </button>
      </section>
      {accountType === "tutor" && (
        <section className="form-inputs">
          <h2>Tutor</h2>
          {inputs.map((input, index) => (
            <FormInput key={index} {...input} onChange={onChange} />
          ))}
          <button className="signup-button" onClick={handleLogin}>
            Login
          </button>
          <p className="login-link">
            Don't have an account?{" "}
            <button onClick={() => navigate("/signup")}>Sign Up</button>
          </p>
        </section>
      )}
      {accountType === "student" && (
        <section className="form-inputs">
          <h2>Student</h2>
          {inputs.map((input, index) => (
            <FormInput key={index} {...input} onChange={onChange} />
          ))}
          <button className="signup-button" onClick={handleLogin}>
            Login
          </button>
          <p className="login-link">
            Don't have an account?{" "}
            <button onClick={() => navigate("/signup")}>Sign Up</button>
          </p>
        </section>
      )}
    </main>
  );
};

export default Login;
