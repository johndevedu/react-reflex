import React from "react";
import ReactDOM from "react-dom";

import "react-reflex/styles.css";
import {
  ReflexContainer,
  ReflexElement,
  ReflexSplitter,
  ReflexHandle
} from "react-reflex";

import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <ReflexContainer style={{ height: "100vh" }} orientation="vertical">
        <ReflexElement className="left-pane">
          <div className="pane-content">
            <label>Left Pane (resizable)</label>
          </div>
        </ReflexElement>

        <ReflexSplitter
          style={{
            backgroundColor: "#ccdff2",
            textAlign: "center",
            width: "15px"
          }}
        >
          <div class="splitter">o o o</div>
        </ReflexSplitter>

        <ReflexElement className="right-pane" minSize="200" maxSize="800">
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
