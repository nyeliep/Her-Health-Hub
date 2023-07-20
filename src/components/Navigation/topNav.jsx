import React, { useState } from "react";
import { Link } from "react-scroll";
import { Link as Anc } from "react-router-dom";
import Sidebar from "./sidebar";
import Backdrop from "../Elements/Backdrop";
import HamburgerMenu from "../../assets/svg/BurgerIcon";

export default function TopNavbar() {
  const [sidebarOpen, toggleSidebar] = useState(false);
  // const navigate = useNavigate();

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <nav
        style={{
          width: "100%",
          position: "fixed",
          top: 0,
          backgroundColor: "#ffffff",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          zIndex: 999,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "80px",
            padding: "0 20px",
            maxWidth: "100%",
            margin: "0 250px",
          }}
        >
          <Anc className="pointer flexNullCenter" smooth={true} to={"/"}>
            <h1 style={{ marginLeft: "3px", fontSize: "20px", fontWeight: "bold" }}>
              Her<span style={{ color: "#ff6b6b" }}>Health</span>Hub
            </h1>
          </Anc>
          <button
            style={{
              outline: "none",
              border: "0px",
              backgroundColor: "transparent",
              height: "100%",
              padding: "0 15px",
              display: "none",
            }}
            onClick={() => toggleSidebar(!sidebarOpen)}
          >
            <HamburgerMenu />
          </button>
          <ul style={{ display: "flex" }}>
            <li style={{ display: "flex", listStyle: "none", margin: 0, padding: 0 }}>
              <Anc style={{ padding: "10px 15px", color: "black" }} to="/">
                Home
              </Anc>
            </li>
            <li style={{ display: "flex", listStyle: "none", margin: 0, padding: 0 }}>
              <Link
                activeclassName="active"
                style={{ padding: "10px 15px", color: "black" }}
                to="projects"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Services
              </Link>
            </li>
            <li style={{ display: "flex", listStyle: "none", margin: 0, padding: 0 }}>
              <Anc style={{ padding: "10px 15px", color: "black" }} to="/track">
                Trackers
              </Anc>
            </li>
            <li style={{ display: "flex", listStyle: "none", margin: 0, padding: 0 }}>
              <Anc style={{ padding: "10px 15px", color: "black" }} to="/blog">
                Blogs
              </Anc>
            </li>
            <li style={{ display: "flex", listStyle: "none", margin: 0, padding: 0 }}>
              <Link
                activeclassName="active"
                style={{ padding: "10px 15px", color: "black" }}
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Contact
              </Link>
            </li>
          </ul>
          <ul style={{ display: "flex", color: "#fff" }}>
            <li style={{ listStyle: "none", color: "#fff", margin: 0, padding: 0 }}>
              <Link
                to="/login"
                style={{
                  padding: "10px 30px 10px 0",
                  color: "white",
                  textDecoration: "none",
                  backgroundColor: "#ff6b6b",
                  borderRadius: "4px",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
              >
                Log in
              </Link>
            </li>
            <li style={{ listStyle: "none", color: "#fff", margin: 0, padding: 0 }}>
              <Link
                to="/signup"
                style={{
                  padding: "10px 30px 10px 0",
                  color: "white",
                  textDecoration: "none",
                  backgroundColor: "#ff6b6b",
                  borderRadius: "4px",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
