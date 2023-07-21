import React from "react";
import { Link } from "react-scroll";
// Assets
import { BsFillArrowUpCircleFill } from 'react-icons/bs';

export default function Footer() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  const footerStyles = {
    width: "100%",
    backgroundColor: "black",
    color: "black"
  };


  const innerWrapperStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "30px 0",
    color: "black",
    '@media (max-width: 550px)': {
      flexDirection: 'column',
    }
  };

  const linkStyles = {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    textDecoration: "none",
  };

  const logoStyles = {
    marginLeft: "15px",
    fontSize: "20px",
    fontWeight: "700",
    color: "black",
  };

  const pStyles = {
    color: "black",
    fontSize: "15px",
  };

  const yearStyles = {
    cursor: "pointer",
    color: "crimson",
    fontSize: "15px",
  };

  const arrowUpStyles = {
    color: "black",
    fontSize: "30px",
  };

  return (
    <div style={footerStyles}>
      <div className="darkBg">
        <div className="container"  style={{color: "black"}}>
          <div style={innerWrapperStyles}>
            <Link className="flexCenter animate pointer" to="home" smooth={true} offset={-80} style={linkStyles}>
              <img src="" alt="" />
              <h1  className="font" style={logoStyles}>
                Her<span style={{ color: "#ff6b6b" }}>Health</span>Hub
              </h1>
            </Link>
            <p style={pStyles}>
              © {getCurrentYear()} - <span style={yearStyles}>HerHealthHub</span> All Right Reserved
            </p>
            <Link className="whiteColor animate pointer font13" to="home" smooth={true} offset={-80} style={linkStyles}>
              <BsFillArrowUpCircleFill size={30} style={arrowUpStyles} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
