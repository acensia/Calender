import React, { useState } from "react";
import "./App.css";
import Works from "./Members/Works";
import Log from "./timetree_connect/Log.tsx";

function App() {
  const [logged, setLogged] = useState(true);
  const handleLog = (bool) => {
    setLogged(!bool);
  };
  if (logged) return <Log logged={handleLog} />;
  else
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
