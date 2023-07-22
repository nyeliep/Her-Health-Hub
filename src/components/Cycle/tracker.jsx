import React, { useState } from "react";
import "./tracker.css";
import TrackResults from "./results";
import Footer from "../Sections/footer";

import { toast, Toaster } from "react-hot-toast";

function TrackPeriod() {
  const [date, setDate] = useState(""); // current time
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

  const check = (selectedDate) => {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    return (
      selectedDate < currentDate || selectedDate > currentDate.setDate(currentDate.getDate() + 3)
    );
  };

  // const generatePDF = () => {
  //   // ...
  //   toast.success("PDF Generated");
  // };

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#FA4C86",
            color: "#fff",
          },
          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "#FA4C86",
              secondary: "black",
            },
          },
        }}
      />
      <TopNavbar />
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
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  min={moment().subtract(1, "M").format("YYYY-MM-DD")}
                  max={moment().add(3, "M").format("YYYY-MM-DD")}
                />
              </div>

              <div className="tracker-item">
                <h6>How many days did it last?</h6>
                <div className="tracker-buttons">
                  <button onClick={() => handleDaysLast(true)}><RemoveIcon /></button>
                  <div className="days-count">{count}</div>
                  <button onClick={() => handleDaysLast(false)}><AddIcon /></button>
                </div>
              </div>

              <div className="tracker-item">
                <h6>Duration of menstrual cycle?</h6>
                <div className="tracker-buttons">
                  <button onClick={() => handleMenstrualCycle(true)}><RemoveIcon /></button>
                  <div className="days-count">{cycleCount}</div>
                  <button onClick={() => handleMenstrualCycle(false)}><AddIcon /></button>
                </div>
              </div>

              <div className="tracker-item">
                {!doReveal ? (
                  <button
                    className="track-button"
                    onClick={() => setDoReveal(true)}
                  >
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
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TrackPeriod;
