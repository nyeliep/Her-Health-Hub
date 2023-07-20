import React from "react";
import Button from "../Buttons/button";
import { Link } from "react-router-dom";
import './header.css'

export default function Header() {
  return (
    <div id="home" className="container">
      <div className="header-container">
        <div className="content-container">
          <div className="text-container">
            <h1 className="title">We Care, we nurture</h1>
            <p className="description">
              Her Health Hub is the sanctuary where women's wellness takes center stage. It's a sacred space where self-care, education, and empowerment intertwine, nurturing every aspect of a woman's health journey. Within its vibrant community, women find solace, support, and the strength to thrive. Her Health Hub is a beacon of holistic healing, illuminating the path towards physical, mental, and emotional well-being. It's a place where women's health blossoms, radiating vitality and resilience, inspiring us all to prioritize ourselves and embrace the beauty of our unique journeys.
            </p>
            <div className="quote-container">
              <div>
                <p className="quote-text">
                  <em>“Communities and countries and ultimately the world are only as strong as the health of their women.”</em>
                </p>
                <p className="quote-author">Michelle Obama</p>
              </div>
            </div>
            <Button>
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      
        <div className="left-column">
          <img
            className="radius8"
            src={process.env.PUBLIC_URL + "/media/Women day-bro.png"} // Replace with the path to your video file
            alt="Women Day"
          />
        </div>
      </div>
    </div>
  );
}
