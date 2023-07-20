import React from "react";
import { Link } from "react-scroll";
import { Link as Anc } from "react-router-dom";
import CloseIcon from "../../assets/svg/CloseIcon";


export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  return (
    <nav
      style={{
        width: "400px",
        height: "100vh",
        position: "fixed",
        top: 0,
        padding: "0 30px",
        right: sidebarOpen ? "0px" : "-400px",
        zIndex: 9999,
      }}
      className={`animate ${sidebarOpen ? "darkBg" : ""}`}
    >
      <div style={{ padding: "20px 0" }} className="flexSpaceCenter">
        <div className="flexNullCenter">
          <h1 className="whiteColor font20" style={{ marginLeft: "15px" }}></h1>
        </div>
        <button
          style={{
            border: "none",
            outline: "none",
            backgroundColor: "transparent",
            padding: "10px",
          }}
          onClick={() => toggleSidebar(!sidebarOpen)}
          className="animate pointer"
        >
          <CloseIcon />
        </button>
      </div>

      <ul style={{ padding: "40px" }} className="flexNullCenter flexColumn">
        <li style={{ margin: "20px 0" }} className="semiBold font15 pointer">
          <Anc
            onClick={() => toggleSidebar(!sidebarOpen)}
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="/"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Home
          </Anc>
        </li>
        <li style={{ margin: "20px 0" }} className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeclassName="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="services"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Services
          </Link>
        </li>
        <li style={{ margin: "20px 0" }} className="semiBold font15 pointer">
          <Anc
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeclassName="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="/track"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Trackers
          </Anc>
        </li>
        <li style={{ margin: "20px 0" }} className="semiBold font15 pointer">
          <Anc
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeclassName="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="/blog"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Blogs
          </Anc>
        </li>
        <li style={{ margin: "20px 0" }} className="semiBold font15 pointer flexCenter">
          <Anc
            to={"/appointment"}
            className="radius8 lightBg"
            style={{ padding: "10px 15px" }}
          >
            Book Appointment
          </Anc>
        </li>
        <li style={{ margin: "20px 0" }} className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeclassName="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="contact"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Contact
          </Link>
        </li>
      </ul>
      <ul style={{ padding: "40px" }} className="flexSpaceCenter">
        <li style={{ margin: "20px 0" }} className="semiBold font15 pointer">
          <Anc to="/" style={{ padding: "10px 30px 10px 0" }} className="whiteColor">
            Log in
          </Anc>
        </li>
      </ul>
    </nav>
  );
}



