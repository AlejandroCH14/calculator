import React from "react";
import "./style.css";

const OutputScreen = props => {
  console.log("render displaybuttons");
  return <div className="outputScreen">{props.numberTrail}</div>;
};

export default OutputScreen;
