import React from "react";
import "./style.css";
const DisplayButtons = props => {
  const firstRow = [7, 8, 9, "/"];
  const secondRow = [4, 5, 6, "*"];
  const thirdRow = [1, 2, 3, "+"];
  const fourthRow = [".", 0, "=", "-"];

  const isLastItem = (item, row) => {
    return item == row[row.length - 1] ? true : false;
  };

  return (
    <>
      <table>
        <tr>
          {firstRow.map(numberId => (
            <button key={numberId} className="grayButton">
              {numberId}
            </button>
          ))}
        </tr>
        <tr>
          {secondRow.map(numberId => (
            <button key={numberId} className="grayButton">
              {numberId}
            </button>
          ))}
        </tr>
        <tr>
          {thirdRow.map(numberId => (
            <button key={numberId} className="grayButton">
              {numberId}
            </button>
          ))}
        </tr>
        <tr>
          {fourthRow.map(numberId => (
            <button key={numberId} className="grayButton">
              {numberId}
            </button>
          ))}
        </tr>
      </table>
    </>
  );
};

export default DisplayButtons;
