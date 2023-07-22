import React, { useState } from "react";
import "./tracker.css";
import TrackResults from "./results";

function TrackPeriod2() {
  const [date, setDate] = useState(new Date()); // current time
  const [count, setCount] = useState(5);
  const [cycleCount, setCycleCount] = useState(28);
  const [doReveal, setDoReveal] = useState(false);

  const handleDaysLast = (isMinus) => {
    if (isMinus) {
      if (count > 1) {
        setCount(count - 1);
      } else {
        setCount(10);
      }
    } else {
      if (count >= 10) {
        setCount(1);
      } else {
        setCount(count + 1);
      }
    }
  };

  const handleMenstrualCycle = (isMinus) => {
    if (isMinus) {
      if (cycleCount > 18) {
        setCycleCount(cycleCount - 1);
      } else {
        setCycleCount(40);
      }
    } else {
      if (cycleCount >= 40) {
        setCycleCount(18);
      } else {
        setCycleCount(cycleCount + 1);
      }
    }
  };

  return (
    <>
      {/* ... Toaster component and other content ... */}
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="tracker-box">
          {!doReveal && (
            <div
              className="tracker-container"
              style={{
                backgroundColor: "#E8DEFF",
                textAlign: "center",
                borderRadius: "15px",
                padding: "10px",
              }}
            >
              <div className="tracker-item">
                <h6>When did your last period start?</h6>
                {/* Replace SingleDatePicker with a regular input */}
                <input
                  type="date"
                  value={date.toISOString().slice(0, 10)}
                  onChange={(e) => setDate(new Date(e.target.value))}
                  min={new Date().toISOString().slice(0, 10)}
                  max={new Date(new Date().setMonth(new Date().getMonth() + 3)).toISOString().slice(0, 10)}
                />
              </div>

              <div className="tracker-item">
                <h6>How many days did it last?</h6>
                <div className="tracker-buttons">
                  <button onClick={() => handleDaysLast(true)}>-</button>
                  <div className="days-count">{count}</div>
                  <button onClick={() => handleDaysLast(false)}>+</button>
                </div>
              </div>

              <div className="tracker-item">
                <h6>Duration of menstrual cycle?</h6>
                <div className="tracker-buttons">
                  <button onClick={() => handleMenstrualCycle(true)}>-</button>
                  <div className="days-count">{cycleCount}</div>
                  <button onClick={() => handleMenstrualCycle(false)}>+</button>
                </div>
              </div>

              <div className="tracker-item">
                {!doReveal ? (
                  <button className="track-button" onClick={() => setDoReveal(true)}>
                    Track Now
                  </button>
                ) : (
                  <a href="#Results">
                    <button className="track-button">Look below</button>
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Rest of the content for the results */}
          {doReveal && (
            <div>
                <div>
              <button
                className="track-button"
                onClick={() => setDoReveal(false)}
                style={{ marginTop: "10px" }}
              >
                Back to Tracker
              </button>
            </div>
              <TrackResults startPeriodDate={date} daysLast={count} cycleCount={cycleCount} />
            </div>
            
          )}
        </div>
      </div>
    </>
  );
}

export default TrackPeriod2;
