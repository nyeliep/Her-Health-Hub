import React from "react";
import './Backdrop';

const Backdrop = ({ toggleSidebar }) => {
  return <div className="wrapper darkbg" onClick={() => toggleSidebar(false)} />;
};

export default Backdrop;
