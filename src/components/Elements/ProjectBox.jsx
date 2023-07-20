import React from "react";
import './ProjectBox.css'

function ProjectBox({ img, title, text, action }) {
  return (
    <div className="wrapper" style={{ marginTop: "30px" }}>
      <button
        className="imgBtn animate pointer"
        onClick={action ? () => action() : null}
      >
        <img className="radius8" src={img} alt="project" />
      </button>
      <h3 className="font20 extraBold">{title}</h3>
      <p className="font13" style={{ color: "black" }}>
        {text}
      </p>
    </div>
  );
}

export default ProjectBox;
