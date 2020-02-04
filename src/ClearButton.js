import React from "react";
import "./style.css";

const ClearButton = props => {
  return (
    <>
      <button className="clearButton" onClick={() => props.onClick("clear")}>
        Clear
      </button>
    </>
  );
};

export default ClearButton;
