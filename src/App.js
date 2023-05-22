import React from "react";
import "./App.css";
import Works from "./elems/Works";

function App() {
  return (
    <div className="App">
      <header className="Header">Header</header>
      <div className="Container">
        <div className="LeftSection">
          <div className="RectangleBox">
            <Works />
          </div>
        </div>
        <div className="MiddleSection">
          <div className="RectangleBox">Mid Section</div>
        </div>
        <div className="RightSection">
          <div className="RectangleBox">Right Section</div>
        </div>
      </div>
    </div>
  );
}

export default App;
