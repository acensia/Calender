import React, { useState } from "react";
import "./App.css";
import Works from "./Members/Works";
import Log from "./timetree_connect/Log.tsx";

function App() {
  const [logged, setLogged] = useState(true);
  const handleLog = (bool) => {
    setLogged(!bool);
  };
  const [full, checkFull] = useState(document.fullscreenElement !== null);

  return (
    <div className="App">
      <header className="Header">Header</header>
      <div className="MainThree">
        <div className="Container">
          <div className="LeftSection">
            <div className="RectangleBox">
              <Works />
            </div>
          </div>
          <div className="MiddleSection">
            <div className="RectangleBox">
              {logged ? (
                <Log logged={handleLog} />
              ) : (
                <div>
                  {window.innerWidth}, {window.innerHeight} <br />
                  {full ? "It's full" : "It's not full"} <br />
                  {document.fullscreenElement}
                </div>
              )}
            </div>
          </div>
          <div className="RightSection">
            <div className="RectangleBox">Right Section</div>
          </div>
        </div>
      </div>
      <div className="Under"></div>
    </div>
  );
}

export default App;
