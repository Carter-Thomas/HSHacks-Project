import { useState } from "react";
import { addPosting } from "../Database";
import { useNavigate } from "react-router-dom";

import FormInput from "../components/FormInput";
import "./styles/NewPosting.scss";

function NewPosting() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    title: "",
    name: "",
    description: "",
  });

  const inputs = [
    {
      name: "title",
      errorMessage: "Title is required.",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "name",
      errorMessage: "Name is required.",
      label: "Name",
      type: "text",
      required: true,
    },
    {
      name: "description",
      errorMessage: "Description is required.",
      label: "Description",
      type: "text",
      required: true,
    },
  ];

  const onChange = (e) => {
    const { name, value } = e.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handlePost = (e) => {
    e.preventDefault();

    addPosting(values);
    navigate("/student-view");
  };

  return (
    <div className="new-posting-container">
      <h1>Create New Posting</h1>
      <section className="form-inputs">
        {inputs.map((input, index) => (
          <FormInput key={index} {...input} onChange={onChange} />
        ))}
        <button className="signup-button" onClick={handlePost}>
          Post
        </button>
      </section>
    </div>
  );
}

export default NewPosting;
