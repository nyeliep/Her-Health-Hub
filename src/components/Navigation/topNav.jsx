import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll"; // Rename the import to "ScrollLink"
import { Link as RouterLink } from "react-router-dom"; // Rename the import to "RouterLink"
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
          <RouterLink
            className="pointer flexNullCenter"
            smooth={true}
            to={"/"}
          >
            <h1
              style={{
                marginLeft: "3px",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Her<span style={{ color: "#ff6b6b" }}>Health</span>Hub
            </h1>
          </RouterLink>
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
            <li
              style={{
                display: "flex",
                listStyle: "none",
                margin: 0,
                padding: 0,
              }}
            >
              <RouterLink
                style={{ padding: "10px 15px", color: "black" }}
                to="/"
              >
                Home
              </RouterLink>
            </li>
            <li
              style={{
                display: "flex",
                listStyle: "none",
                margin: 0,
                padding: 0,
              }}
            >
              <ScrollLink
                activeclassName="active"
                style={{ padding: "10px 15px", color: "black" }}
                to="projects"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Services
              </ScrollLink>
            </li>
            <li style={{ display: "flex", listStyle: "none", margin: 0, padding: 0 }}>
              <RouterLink style={{ padding: "10px 15px", color: "black" }} to="/track">
                Trackers
              </RouterLink>
            </li>
            <li style={{ display: "flex", listStyle: "none", margin: 0, padding: 0 }}>
              <RouterLink style={{ padding: "10px 15px", color: "black" }} to="/blog">
                Blogs
              </RouterLink>
            </li>
            <li style={{ display: "flex", listStyle: "none", margin: 0, padding: 0 }}>
              <ScrollLink
                activeclassName="active"
                style={{ padding: "10px 15px", color: "black" }}
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Contact
              </ScrollLink>
            </li>
          </ul>

          <ul style={{ display: "flex", color: "#fff" }}>
            <li style={{ listStyle: "none", color: "#fff", margin: 0 }}>
              <RouterLink
                to="/login"
                style={{
                  padding: "10px 30px 10px 0",
                  color: "white",
                  textAlign: "center",
                  textDecoration: "none",
                  backgroundColor: "#ff6b6b",
                  margin: "10px",
                  borderRadius: "4px",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
              >
                Log in
              </RouterLink>
            </li>
            <li style={{ listStyle: "none", color: "#fff", margin: 0, padding: 0 }}>
              <RouterLink
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
              </RouterLink>
            </li>
          </ul>
        </div>
      </nav>
      {/* Rest of the content */}
    </>
  );
}





