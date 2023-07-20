import React from "react";

export default function Button({ title, action, border }) {
  const buttonStyle = {
    border: border ? "1px solid #E52F8A" : "1px solid #E52F8A",
    backgroundColor: border ? "transparent" : "#E52F8A",
    width: "100%",
    padding: "15px",
    outline: "none",
    color: border ? "#707070" : "#fff",
    cursor: "pointer",
  };

  const handleButtonClick = () => {
    if (action) {
      action();
    }
  };

  return (
    <button
      className="animate pointer radius8"
      style={buttonStyle}
      onClick={handleButtonClick}
    >
      {title}
    </button>
  );
}
