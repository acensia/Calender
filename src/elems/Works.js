import TextTransition, { presets } from "react-text-transition";
import React from "react";
import "./elems.css";

let today = new Date();
let [month, week] = dateParser(today);

////////////////////////////////////////

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function dateParser(d) {
  let month = d.getMonth() + 1;
  let date = d.getDate();
  let day = d.getDay();
  let week = parseInt((date - day + 5) / 7) + 1;
  return [month, week];
}
///////////////////////////////////////////////

function List() {
  let arr = ["mem1", "mem2"];
  let arr2 = ["Say Hi", "Say Bon jour"];

  return (
    <div className="list">
      <ul>
        {arr.map((name, idx) => {
          return (
            <div className="work">
              <text key={idx}>{name}</text>
              <div className="workBox">{arr2[idx]}</div>
              <div className="workSelect">
                <button></button>
                <button></button>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

////////////////////////////////

function Week() {
  const [month_, setMonth] = React.useState(month);
  const [week_, setWeek] = React.useState(week);
  const [block, setblock] = React.useState(false);

  function clicked(e) {
    if (block != true) {
      setblock(true);
      if (e.target.innerText === "◁") {
        today.setDate(today.getDate() - 7);
      } else {
        today.setDate(today.getDate() + 7);
      }
      [month, week] = dateParser(today);
      setMonth(month);
      setWeek(week);
      e.target.parentNode.childNodes.forEach((com) => {
        if (com.tagName != "BUTTON") com.style.height = "1.5vw";
      });
      setTimeout(() => {
        setblock(false);
      }, 250);
    }
  }
  return (
    <div className="dateSwipe">
      <button onClick={clicked} disabled={block}>
        ◁
      </button>
      <TextTransition
        springConfig={presets.wobbly}
        style={{
          height: "1vw",
        }}>
        {month_}
      </TextTransition>
      <text>월</text>
      <TextTransition springConfig={presets.wobbly}>{week_}</TextTransition>
      <text>주차</text>
      <button onClick={clicked} disabled={block}>
        ▷
      </button>
    </div>
  );
}

function Works() {
  return (
    <div className="Work">
      <Week />
      <List />
    </div>
  );
}
export default Works;
