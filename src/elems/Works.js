import TextTransition, { presets } from "react-text-transition";
import React from "react";
import "./elems.css";

let today = new Date();
let [month, week] = dateParser(today);

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function dateParser(d) {
  let month = d.getMonth() + 1;
  let date = d.getDate();
  let day = d.getDay();
  let week = parseInt((date - day + 1) / 7) + 1;
  return [month, week];
}

function Works() {
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
      e.target.parentNode.childNodes.forEach((com)=>{
        if(com)com.style.height = "1.5vw";
      })
      setTimeout(() => {
        setblock(false);
      }, 250);
    }
  }
  return (
    <div className="work">
      <div className="dateSwipe">
        <button onClick={clicked} disabled={block}>
          ◁
        </button>
        <TextTransition springConfig={presets.wobbly}
        style={{
          height: "1vw"
        }}>{month_}</TextTransition>
        <text>월</text>
        <TextTransition springConfig={presets.wobbly}>{week_}</TextTransition>
        <text>주차</text>
        <button onClick={clicked} disabled={block}>
          ▷
        </button>
      </div>
    </div>
  );
}

export default Works;
