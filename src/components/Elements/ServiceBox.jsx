import React from "react";
import { MdScreenShare, MdTrackChanges, MdVolunteerActivism } from 'react-icons/md';
import {  FaBlogger} from 'react-icons/fa';
import { BsFillPatchExclamationFill } from 'react-icons/bs';
import './ServiceBox.css'

export default function ServiceBox({ icon, title, subtitle }) {
  let getIcon;

  switch (icon) {
    case "roller":
      getIcon = <FaBlogger size={50} color={"#E52F8A"} />;
      break;
    case "monitor":
      getIcon = <MdTrackChanges size={50} color={"#E52F8A"} />;
      break;
    case "browser":
      getIcon = <BsFillPatchExclamationFill size={50} color={"#E52F8A"} />;
      break;
    case "printer":
      getIcon = <MdVolunteerActivism size={50} color={"#E52F8A"} />;
      break;
    default:
      getIcon = <MdScreenShare size={50} color={"#E52F8A"} />;
      break;
  }

  return (
    <div className="wrapper flex flexColumn">
      <div className="iconStyle">{getIcon}</div>
      <h2 className="titleStyle font20 extraBold">{title}</h2>
      <p className="subtitleStyle font13">{subtitle}</p>
    </div>
  );
}
