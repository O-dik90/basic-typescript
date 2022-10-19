import React, { useContext, useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
// import { myContext } from "./myContext";
import { UserContext } from ".";
import { MyApp } from "./MyApp";

function App() {
  //useState
  const [state, setState] = useState("Code");
  const handleClick = () => {
    setState("React Typescript");
  };
  //useEffect
  useEffect(() => {
    console.log("useEffect run");
    console.log(state);
  }, [state]);
  // useRef
  // belum full understanding, maksud dari mereferensikannya
  const Input = useRef(null);

  const Click = () => {
    console.log(Input);
    console.log(Input.current);
  };
  const myValue = useContext(UserContext);
  return (
    // <></> berarti sebuah fragment untuk membungkus sebuah tag html
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Create Todo List</p>
          <p>{state}</p>
          <button onClick={handleClick}>State</button>
          <button onClick={() => setState("Code")}>Diff State</button>

          <br />
          <input ref={Input} type="text" />
          <button onClick={Click}>Focus the input</button>
          <p>{myValue.title}</p>
        </header>
        <MyApp />
      </div>
    </>
  );
}

export default App;
