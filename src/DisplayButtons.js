import React from "react";
import "./style.css";
const DisplayButtons = props => {
  const firstRow = [7, 8, 9, "/"];
  const secondRow = [4, 5, 6, "*"];
  const thirdRow = [1, 2, 3, "+"];
  const fourthRow = [".", 0, "=", "-"];

  const isLastItem = (item, row) => {
    return item == row[row.length - 1] ? false : true;
  };

  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>
              {firstRow.map(symbolId =>
                isLastItem(symbolId, firstRow) ? (
                  <button
                    key={symbolId}
                    className="grayButton"
                    onClick={() => props.addNumber(props.numberTrail, symbolId)}
                  >
                    {symbolId}
                  </button>
                ) : (
                  <button key={symbolId} className="orangeButton">
                    {symbolId}
                  </button>
                )
              )}
            </td>
          </tr>
          <tr>
            <td>
              {secondRow.map(symbolId =>
                isLastItem(symbolId, secondRow) ? (
                  <button
                    key={symbolId}
                    className="grayButton"
                    onClick={() => props.addNumber(props.numberTrail, symbolId)}
                  >
                    {symbolId}
                  </button>
                ) : (
                  <button key={symbolId} className="orangeButton">
                    {symbolId}
                  </button>
                )
              )}
            </td>
          </tr>
          <tr>
            <td>
              {thirdRow.map(symbolId =>
                isLastItem(symbolId, thirdRow) ? (
                  <button
                    key={symbolId}
                    className="grayButton"
                    onClick={() => props.addNumber(props.numberTrail, symbolId)}
                  >
                    {symbolId}
                  </button>
                ) : (
                  <button key={symbolId} className="orangeButton">
                    {symbolId}
                  </button>
                )
              )}
            </td>
          </tr>
          <tr>
            <td>
              {fourthRow.map(symbolId =>
                isLastItem(symbolId, fourthRow) ? (
                  <button
                    key={symbolId}
                    className="grayButton"
                    onClick={() => props.addNumber(props.numberTrail, symbolId)}
                  >
                    {symbolId}
                  </button>
                ) : (
                  <button key={symbolId} className="orangeButton">
                    {symbolId}
                  </button>
                )
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default DisplayButtons;
