import React from "react";
import { useNavigate } from "react-router-dom";
import './BlogBox'

export default function BlogBox({ tag, title, text, action, author, id }) {
  const navigate = useNavigate();
  return (
    <button
      className="wrapperBtn animate pointer"
      onClick={() => navigate(`/blog/${id}`)}
    >
      <div className="wrapper whiteBg radius8 shadow">
        <h3 className="font20 extraBold">{title}</h3>
        <p className="font13" style={{ padding: "30px 0" }}>
          {text}
        </p>
        <p className="font13 extraBold">{author}</p>
        <div className="flex">
          <p className="tag coralBg radius6 font13 extraBold">{tag}</p>
        </div>
      </div>
    </button>
  );
}
