import TextTransition, { presets } from "react-text-transition";
import React, { useState } from "react";
import { useEffect, useRef } from "react";
import "./elems.css";
import ReactModal from "react-modal";
import WorkModal from "./WorkModal";

let today = new Date();
let [month, week] = dateParser(today);

let arr = ["mem1", "mem2"];
let arr2 = ["Say Hi", "Say Bon jour"];
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
////////////////////////////////////////
function SingleWork({ name, idx, openModal }) {
  function _openModal() {
    openModal(name, idx);
  }
  return (
    <div className="work">
      <div className="memName">{name}</div>
      <div className="workBox" onDoubleClick={_openModal}>
        {arr2[idx]}
      </div>
      <div className="workSelect">
        <button className="workSelector"></button>
        <button className="workSelector"></button>
      </div>
    </div>
  );
}

///////////////////////////////////////////////

function List() {
  const [mems, setMems] = useState([]);
  const lists = useRef();

  // setMems(arr);
  // function addMem() {
  //   // lists.
  // }

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const props = {
    mem: "",
    work: "",
    idx: 0,
  };
  const [prop, setProp] = React.useState(props);
  function openModal(name, idx) {
    setProp({
      mem: name,
      work: arr2[idx],
      idx: idx,
    });
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="list">
      <ul ref={lists}>
        {arr.map((name, idx) => {
          return <SingleWork name={name} idx={idx} openModal={openModal} />;
        })}
        <WorkModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          afterOpenModal={afterOpenModal}
          props={prop}
        />
        <div className="work">
          <div className="memName addMem">+</div>
        </div>
      </ul>
    </div>
  );
}

////////////////////////////////

function Week() {
  const [month_, setMonth] = React.useState(month);
  const [week_, setWeek] = React.useState(week);
  const [block, setblock] = React.useState(false);
  const Texts = useRef();

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
      Texts.current.childNodes.forEach((com) => {
        com.style.height = "1.5vw";
        console.log("clicked");
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
      <div className="dateSwipe dateShow" ref={Texts}>
        <TextTransition
          delay={250}
          springConfig={presets.wobbly}
          style={{
            height: "1vw",
          }}
          className="monNo">
          {month_}
        </TextTransition>
        <text className="monTx">월</text>
        <TextTransition
          springConfig={presets.wobbly}
          delay={250}
          style={{
            height: "1vw",
          }}
          className="weekNo">
          {week_}
        </TextTransition>
        <text className="weekTx">주차</text>
      </div>
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
      {/* <div
        class="tt-plugin-event"
        data-title="asd"
        data-style="button_count"
        data-start-at="20230528T190000+0900"
        data-end-at="20230528T200000+0900"
        data-all-day="false"
        data-note="asd">
        but
      </div>
      <script
        src="https://plugins.timetreeapp.com/sdk_v1.js"
        async
        defer></script> */}
    </div>
  );
}
export default Works;
