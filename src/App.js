import React from "react";
import { render } from "react-dom";
import DisplayButtons from "./DisplayButtons";
import OutputScreen from "./OutputScreen";
import "./style.css";

class App extends React.Component {
  state = { numberTrail: [] };

  onNumberClick = symbolId => {
    if (isNaN(symbolId) && symbolId !== ".") {
      console.log("call appropriate function");
    } else {
      const newNumberTrail = this.state.numberTrail;
      newNumberTrail.push(symbolId);
      this.setState({ numberTrail: newNumberTrail });
    }
  };

  render() {
    return (
      <div className="app">
        <div className="calc-frame">
          <div className="output">
            <OutputScreen numberTrail={this.state.numberTrail} />
          </div>
          <div className="bottom">
            <DisplayButtons
              onClick={this.onNumberClick}
              numberTrail={this.state.numberTrail}
            />
          </div>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
