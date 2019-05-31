import React from "react";
import ReactDOM from "react-dom";

import "react-reflex/styles.css";
import { ReflexContainer, ReflexElement, ReflexSplitter } from "react-reflex";

import "./styles.css";

class App extends React.Component {
  handleResize = ({ domElement, component }) => {
    console.log(domElement);
    debugger;
    setTimeout(() => (domElement.style.width = "10px"));
  };
  render() {
    return (
      <ReflexContainer style={{ height: "100vh" }} orientation="vertical">
        <ReflexElement className="left-pane" minSize="0">
          <div className="pane-content">
            <label>Left Pane (resizable)</label>
          </div>
        </ReflexElement>

        <ReflexSplitter
          propagate={true}
          style={{
            backgroundColor: "#ccdff2",
            textAlign: "center",
            width: "15px"
          }}
        >
          <div className="splitter">o o o</div>
        </ReflexSplitter>

        <ReflexElement
          className="right-pane"
          minSize="0"
          onStopResize={this.handleResize}
        >
          <div className="pane-content">
            <div style={{ display: "flex" }}>
              <label>
                Right Pane (resizable)
                <br />
                <br />
                minSize = 200px
                <br />
                maxSize = 800px
              </label>
            </div>
          </div>
        </ReflexElement>
      </ReflexContainer>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
