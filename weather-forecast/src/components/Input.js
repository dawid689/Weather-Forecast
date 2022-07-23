import React from "react";
import "./Input.css";
import { FiSearch } from "react-icons/fi";

function Input() {
  return (
    <form className="input">
      <input
        className="input_value"
        type={"text"}
        placeholder="Please enter location"
      />
      <span className="input_icon">
        <FiSearch />
      </span>
    </form>
  );
}

export default Input;
