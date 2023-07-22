import React, { useState } from "react";
import "./tracker.css"; // Assuming you have a separate CSS file for styling.

function Tracker() {
  const [userData, setUserData] = useState(null);
  const [bloodLevel, setBloodLevel] = useState(null);
  const [mood, setMood] = useState(null);
  const [pain, setPain] = useState(null);

  return (
    <>
      <div className="tracker-box">
        <div className="container-md">
          <div className="grid-container">
            <div className="grid-item">
              <div className="box-my">
                <h3 className="title" style={{ color: "#9867C5" }}>
                  Tracking Your Cycle
                </h3>
                <p className="body-text">
                  Thanks to modern technology, you can now know exactly when to throw
                  extra pads in your schoolbag or handbag. Simply key your info into
                  our period cycle tracker to see when you might be feeling PMS, and
                  when you can expect your period. Now you can stay prepared - fuss
                  free!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-lg">
          {/* Assuming you have a separate component for TrackPeriod */}
          <TrackPeriod />
        </div>
      </div>
    </>
  );
}

export default Tracker;
