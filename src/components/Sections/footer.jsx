import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import './footer.css'

export default function Footer() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  return (
    
      <div className="darkBg">
        <div className="container">
          <div className="innerWrapper flexSpaceCenter" style={{ padding: "30px 0" }}>
            <ScrollLink className="flexCenter animate pointer" to="home" smooth={true} offset={-80}>
              <h1 className="font15 extraBold whiteColor" style={{ marginLeft: "15px", fontSize: "20px" }}>
                Her<span style={{ color: "#ff6b6b" }}>Health</span>Hub
              </h1>
            </ScrollLink>
            <p className="whiteColor font15">
              © {getCurrentYear()} - <span className="purpleColor font15" style={{ cursor: "pointer" , color: "black"}}>Her<span  style={{ color: "#ff6b6b" }}>Health</span>Hub</span> All Right Reserved
            </p>

            <ScrollLink className="whiteColor animate pointer font13" to="home" smooth={true} offset={-80}>
              <BsFillArrowUpCircleFill size={30} color={"white"} />
            </ScrollLink>
          </div>
        </div>
      </div>
  
  );
}
