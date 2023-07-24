// import React, { useState, useEffect } from "react";


// function TrackResults({ startPeriodDate, daysLast, cycleCount }) {
//   const [initialMonth, setInitialMonth] = useState(startPeriodDate);
//   const [menses, setMenses] = useState([
//     startPeriodDate.clone(),
//     startPeriodDate.clone().add(daysLast, "days"),
//   ]);

//   const [isMobile] = useState(window.innerWidth < 800);

//   useEffect(() => {
//     setMenses([
//       startPeriodDate.clone(),
//       startPeriodDate.clone().add(daysLast, "days"),
//     ]);
//     setInitialMonth(null);
//     setTimeout(() => setInitialMonth(startPeriodDate.clone()), 300);
//   }, [startPeriodDate, daysLast]);

//   const check = (momentDate) => {
//     return (
//       momentDate.isBetween(
//         menses[0].clone().subtract(1, "days"),
//         menses[1].clone()
//       ) ||
//       momentDate.isBetween(
//         menses[0].clone().add(cycleCount, "days").subtract(1, "days"),
//         menses[1].clone().add(cycleCount, "days")
//       ) ||
//       momentDate.isBetween(
//         menses[0]
//           .clone()
//           .add(cycleCount * 2, "days")
//           .subtract(1, "days"),
//         menses[1].clone().add(cycleCount * 2, "days")
//       ) ||
//       momentDate.isBetween(
//         menses[0]
//           .clone()
//           .add(cycleCount * 3, "days")
//           .subtract(1, "days"),
//         menses[1].clone().add(cycleCount * 3, "days")
//       )
//     );
//   };

//   const checkHighlight = (momentDate) => {
//     return (
//       momentDate.isBetween(
//         menses[0].clone().subtract(1, "days"),
//         menses[1].clone().subtract(1, "days")
//       ) ||
//       momentDate.isBetween(
//         menses[0].clone().add(cycleCount, "days").subtract(1, "days"),
//         menses[1].clone().add(cycleCount, "days").subtract(1, "days")
//       ) ||
//       momentDate.isBetween(
//         menses[0]
//           .clone()
//           .add(cycleCount * 2, "days")
//           .subtract(1, "days"),
//         menses[1]
//           .clone()
//           .add(cycleCount * 2, "days")
//           .subtract(1, "days")
//       ) ||
//       momentDate.isBetween(
//         menses[0]
//           .clone()
//           .add(cycleCount * 3, "days")
//           .subtract(1, "days"),
//         menses[1]
//           .clone()
//           .add(cycleCount * 3, "days")
//           .subtract(1, "days")
//       )
//     );
//   };

//   return (
//     <div>
//       <div>
//         <input
//           type="text"
//           value={startPeriodDate.format("YYYY-MM-DD")}
//           readOnly
//         />
//       </div>
//       <div>
//         <h6>How many days did it last?</h6>
//         <button onClick={() => handleDaysLast(true)}>-</button>
//         <span>{daysLast}</span>
//         <button onClick={() => handleDaysLast(false)}>+</button>
//       </div>
//       <div>
//         <h6>Duration of menstrual cycle?</h6>
//         <button onClick={() => handleMenstrualCycle(true)}>-</button>
//         <span>{cycleCount}</span>
//         <button onClick={() => handleMenstrualCycle(false)}>+</button>
//       </div>
//       <div>
//         {!doReveal ? (
//           <button onClick={() => setDoReveal(true)}>Track Now</button>
//         ) : (
//           <a href="#Results">
//             <button>Look below</button>
//           </a>
//         )}
//       </div>
//       {doReveal && (
//         <div>
//           <a href="/track">Back</a>
//           <h5>Menstruation estimation for the next 3 months</h5>
//         </div>
//       )}
//       <div>
//         {doReveal && (
//           <input
//             type="text"
//             value={startPeriodDate.format("YYYY-MM-DD")}
//             readOnly
//           />
//         )}
//       </div>
//       <div>
//         <h6>Please note that this is only an estimation of your menstrual cycle.</h6>
//       </div>
//     </div>
//   );
// }

// export default TrackResults;
import React, { useState, useEffect } from "react";
import "./tracker.css";

function TrackResults({ startPeriodDate, daysLast, cycleCount, doReveal }) {
  const [focusedInput, setFocusedInput] = useState("START_DATE");
  const [initialMonth, setInitialMonth] = useState(new Date(startPeriodDate));
  const [menses, setMenses] = useState([
    new Date(startPeriodDate),
    new Date(startPeriodDate.getTime() + daysLast * 24 * 60 * 60 * 1000),
  ]);

  const [isMobile] = useState(window.innerWidth < 800);

  useEffect(() => {
    setMenses([
      new Date(startPeriodDate),
      new Date(startPeriodDate.getTime() + daysLast * 24 * 60 * 60 * 1000),
    ]);
    setInitialMonth(null);
    setTimeout(() => setInitialMonth(new Date(startPeriodDate)), 300);
  }, [startPeriodDate, daysLast]);

  const check = (date) => {
    return (
      date >= menses[0] &&
      date <= menses[1] &&
      date >= menses[0] &&
      date <= menses[1] &&
      date >= menses[0] &&
      date <= menses[1] &&
      date >= menses[0] &&
      date <= menses[1]
    );
  };

  const checkHighlight = (date) => {
    return (
      date >= menses[0] &&
      date <= menses[1] &&
      date >= menses[0] &&
      date <= menses[1] &&
      date >= menses[0] &&
      date <= menses[1] &&
      date >= menses[0] &&
      date <= menses[1]
    );
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={startPeriodDate.format("YYYY-MM-DD")}
          readOnly
        />
      </div>
      <div>
        <h6>How many days did it last?</h6>
        <button /* onClick={() => handleDaysLast(true)} */>-</button>
        <span>{daysLast}</span>
        <button /* onClick={() => handleDaysLast(false)} */>+</button>
      </div>
      <div>
        <h6>Duration of menstrual cycle?</h6>
        <button /* onClick={() => handleMenstrualCycle(true)} */>-</button>
        <span>{cycleCount}</span>
        <button /* onClick={() => handleMenstrualCycle(false)} */>+</button>
      </div>
      <div>
        {!doReveal ? (
          <button /* onClick={() => setDoReveal(true)} */>Track Now</button>
        ) : (
          <a href="#Results">
            <button>Look below</button>
          </a>
        )}
      </div>
      {doReveal && (
        <div>
          <a href="/track">Back</a>
          <h5>Menstruation estimation for the next 3 months</h5>
        </div>
      )}
      <div>
        {doReveal && (
          <input
            type="text"
            value={startPeriodDate.format("YYYY-MM-DD")}
            readOnly
          />
        )}
      </div>
      <div>
        <h6>Please note that this is only an estimation of your menstrual cycle.</h6>
      </div>
    </div>
  );
}

export default TrackResults;



