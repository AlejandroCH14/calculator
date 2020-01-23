import React, { useState } from "react";
import { render } from "react-dom";
import DisplayButtons from "./DisplayButtons";
//import "./style.css";
const x = 4;
const App = () => {
  return (
    <div className="calc-frame">
      <div className="bottom">
        <DisplayButtons />
      </div>
    </div>
  );
};

render(<App />, document.getElementById("root"));
