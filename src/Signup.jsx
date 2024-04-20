import { useState } from "react";

import FormInput from "./Components/FormInput";
import "./Signup.scss";

const Signup = () => {
  const [accountType, setAccountType] = useState(null);

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      name: "username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special characters.",
      label: "Username",
      type: "text",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      name: "email",
      errorMessage: "Invaild email.",
      label: "Email",
      type: "email",
      pattern: "^[w-.]+@([w-]+.)+[w-]{2,4}$",
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
    {
      name: "confirmPassword",
      errorMessage: "Passwords do not match.",
      label: "Confirm Password",
      type: "password",
      pattern: values.password,
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const username = values.username;
    const email = values.email;
    const password = values.password;

    try {
      // TODO: Add signup logic with firebase
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main>
      <section>
        <h1>Signup</h1>
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
          <button className="signup-button">Signup</button>
          <p className="login-link">
            Already have an account? <span>Login</span>
          </p>
        </section>
      )}
      {accountType === "student" && (
        <section className="form-inputs">
          <h2>Student</h2>
          {inputs.map((input, index) => (
            <FormInput key={index} {...input} onChange={onChange} />
          ))}
          <button className="signup-button">Signup</button>
          <p className="login-link">
            Already have an account? <span>Login</span>
          </p>
        </section>
      )}
    </main>
  );
};

export default Signup;
