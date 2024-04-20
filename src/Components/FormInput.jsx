import PropTypes from "prop-types";
import { useState } from "react";

import "./FormInput.scss";

const FormInput = ({
  label,
  onChange,
  type,
  name,
  errorMessage,
  pattern,
  ...inputProps
}) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="form-input">
      <label>{label}</label>
      <input
        {...inputProps}
        name={name}
        type={type}
        pattern={pattern}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
  pattern: PropTypes.string.isRequired,
};

export default FormInput;
