import React, { useState } from "react";
import "./styles.css";
import budday1  from "./budday1.svg";
import budday2 from "./budday2.svg";

export default function App() {
  var [display, setDisplay] = useState("");
  var [consume, setConsume] = useState("");
  var [source, setSource] = useState("");
  var [lucky, setLucky] = useState("");
  var inputText = "";
  var sum = 0;
  var inputLucky = ";";

  function changeHandler(event) {
    var inputText = event.target.value;
    var a = inputText;
    var array = [];

    for (a; a > 0; ) {
      var b = a % 10;
      array.push(b);
      a = a - b;
      a = a / 10;

      console.log(array);
    }

    for (var i = 0; i < array.length; i = i + 1) {
      sum = sum + array[i];
    }
    setDisplay(sum);
  }

  function clickHandler() {
    var sumOfArray = display;
    var luckyNo = lucky;

    if (display % luckyNo == 0) {
      setConsume("Your birthday is a super special birthday!");
    } else {
      setConsume("Your birthday is not super special ");
    }
  }

  function luckyNumberInput(event) {
    inputLucky = event.target.value;
    setLucky(inputLucky);
  }

  return (
    <div className="App">
      <nav className="navigation">
        <h1>Birthday Special</h1>
      </nav>

      <header>
      <img alt="try again" style={{ padding: "0.5rem", width: "20%"  }} src={budday1} />
      <budday1/>
        <img alt="not uploading" style={{ padding: "0.5rem", width: "20%" }} src={budday2} />
      </header>
      
      <div>
        <h4>Input Your Birthday</h4>
        <div>(in ddmmyyyy format)</div>
        <input onChange={changeHandler} className="birthday"></input>
      </div>

      <div>
        <h4>Input your lucky number</h4>
        <input onChange={luckyNumberInput} className="luckyNumber"></input>
      </div>

      <button onClick={clickHandler} style={{ margin: "1rem" }}>
        Check
      </button>

      <div>
        <h2>{consume}</h2>
      </div>

      <footer className="footer"></footer>
    </div>
  );
}
