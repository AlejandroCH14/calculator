import React, { useState } from "react";
import { render } from "react-dom";
import DisplayButtons from "./DisplayButtons";
import OutputScreen from "./OutputScreen";
import useCalculatorState from "./useCalculatorState";
import "./style.css";

const App = () => {
  const { numberTrail, setCalculatorState } = useCalculatorState();
  console.log(Array.isArray(numberTrail));

  return (
    <div className="app">
      <div className="calc-frame">
        <div className="output">
          <OutputScreen />
        </div>
        <div className="bottom">
          <DisplayButtons
            addNumber={setCalculatorState}
            numberTrail={numberTrail}
          />
        </div>
      </div>
    </div>
  );
};

render(<App />, document.getElementById("root"));
