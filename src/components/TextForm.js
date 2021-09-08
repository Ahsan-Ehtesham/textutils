import React, { useState } from "react";
import PropTypes from "prop-types";

const TextForm = (props) => {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };
  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };
  const handleCamClick = () => {
    let newText = function camalize(str) {
      return str
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, function (match, chr) {
          return chr.toUpperCase();
        });
    };
    setText(newText);
    props.showAlert("Converted to Camelcase", "success");
  };
  const handleSnakeClick = () => {
    let newText = (str) =>
      str &&
      str
        .match(
          /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
        )
        .map((x) => x.toLowerCase())
        .join("_");
    setText(newText);
    props.showAlert("Converted to Snakecase", "success");
  };

  const handleCopy = () => {
    let newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Text Copied", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed", "success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  let noOfWords = text.length > 0 ? text.trim().split(" ").length : 0;
  return (
    <div style={{ color: props.mode === "light" ? "#24292e" : "white" }}>
      <div>
        <h1 className="text-center text-uppercase mb-3 display-5">
          {props.heading}
        </h1>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="12"
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#24292e",
            color: props.mode === "light" ? "black" : "white",
          }}
        ></textarea>
      </div>
      <button
        type="button"
        className="btn btn-primary mt-3 me-2"
        onClick={handleUpClick}
      >
        Uppercase
      </button>
      <button
        type="button"
        className="btn btn-primary mt-3 me-2"
        onClick={handleLowerClick}
      >
        Lowercase
      </button>
      <button
        type="button"
        className="btn btn-primary mt-3 me-2"
        onClick={handleCamClick}
      >
        Camel case
      </button>
      <button
        type="button"
        className="btn btn-primary mt-3 me-2"
        onClick={handleSnakeClick}
      >
        Snake case
      </button>
      <button
        type="button"
        className="btn btn-primary mt-3 me-2"
        onClick={handleCopy}
      >
        Copy
      </button>
      <button
        type="button"
        className="btn btn-primary mt-3 me-2"
        onClick={handleExtraSpaces}
      >
        Remove Extra Spaces
      </button>
      <button
        type="button"
        className="btn btn-primary mt-3"
        onClick={handleClearClick}
      >
        Clear Text
      </button>
      <div className="my-3">
        <h2 className="display-6">Text Summary</h2>
        <p className="lead">
          {noOfWords} words and {text.length} characters
        </p>
        <p className="lead">{noOfWords * 0.008} Minutes to read</p>
        <h2 className="display-6">Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default TextForm;

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};

TextForm.defaultProps = {
  heading: "Enter the text to analyze below",
};
