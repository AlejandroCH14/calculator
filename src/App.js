import React from "react";
import { render } from "react-dom";
import DisplayButtons from "./DisplayButtons";
import OutputScreen from "./OutputScreen";
import ClearButton from "./ClearButton";
import "./style.css";
import * as math from "mathjs";

class App extends React.Component {
  state = { output: "" };

  onNumberClick = symbolId => {
    if (symbolId !== "clear" && symbolId !== "=") {
      const newOutput = this.state.output;
      this.setState({ output: newOutput.concat(symbolId) });
    } else if (symbolId == "=") {
      this.setState({ output: math.evaluate(this.state.output).toString() });
    } else if (symbolId == "clear") {
      this.setState({ output: "" });
    }
  };

  render() {
    return (
      <div className="app">
        <div className="calc-frame">
          <div className="output">
            <OutputScreen output={this.state.output} />
          </div>
          <div className="bottom">
            <DisplayButtons onClick={this.onNumberClick} />
            <ClearButton onClick={this.onNumberClick} />
          </div>
          <div></div>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
