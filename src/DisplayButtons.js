import React from "react";
import "./style.css";
const DisplayButtons = props => {
  const numberButtons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const operatorButtons = ["/", "*", "+", "-", "="];

  return (
    <>
      <div>
        {numberButtons.map(numberId => (
          <button key={numberId} className="numberButton">
            {numberId}
          </button>
        ))}
      </div>
      <div>
        {operatorButtons.map(operatorId => (
          <button key={operatorId} className="operatorButton">
            {operatorId}
          </button>
        ))}
      </div>
    </>
  );
};

export default DisplayButtons;
