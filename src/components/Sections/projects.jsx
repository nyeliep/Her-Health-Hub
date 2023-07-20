import React from "react";
import { Link } from "react-router-dom";
import ProjectBox from "../Elements/ProjectBox";
import './projects.css'

export default function Projects() {
  return (
    <div className="wrapper" id="projects">
      <div className="whiteBg">
        <div className="container">
          <div className="HeaderInfo">
            <h1 className="font40 extraBold">Your Health, Our Priority</h1>
            <p className="font13">
              Period days are never easy. So here's our simple Healthcare to make them less worse
              <br />
              Share your location and get to the nearest doctor's clinic.
            </p>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
              <Link to={"/appointment"}>
                <ProjectBox
                  img="/media/Gynecology consultation-cuate.png"
                  title="Get Gynaecologist's care"
                  text="Take an appointment from the nearest gynaecologist"
                />
              </Link>
            </div>
            <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
              <Link to={"/"}>
                <ProjectBox
                  img="https://img.freepik.com/free-vector/feminine-hygiene-products_23-2148658416.jpg?w=740&t=st=1673"
                  title="Get PILLs and PADs"
                  text="Get to the nearest medical store for pills or pads"
                />
              </Link>
            </div>
            <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
              <Link to={"/track"}>
                <ProjectBox
                  img="/media/Menstrual calendar-bro.png"
                  title="Period Tracker"
                  text="Get complete details of your period cycles, mood swings, diet chart, and sleep cycle"
                />
              </Link>
            </div>
            <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
              <Link to={"/signup"}>
                <ProjectBox
                  img="/media/Mental health-amico.png"
                  title="Mood Tracker"
                  text="Get complete details of your period cycles, mood swings, diet chart, and sleep cycle"
                />
              </Link>
             </div> 
          </div>
        </div>
      </div>
    </div>
  );
}
