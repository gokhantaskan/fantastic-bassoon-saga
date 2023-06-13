import "./App.css";

import React from "react";
import { useDispatch, useSelector } from "react-redux";

import logo from "./logo.svg";
import { selectSelectedBgColor } from "./store/globalSlice/globalSelector";
import {
  BG_COLORS,
  GlobalActions,
  useGlobalSlice,
} from "./store/globalSlice/globalSlice";

function App() {
  useGlobalSlice();

  const bgColor = useSelector(selectSelectedBgColor);
  const dispatch = useDispatch();
  const changeBgColor = () => {
    dispatch(GlobalActions.changeBgColor());
  };

  return (
    <div className="App">
      <header
        className="App-header"
        style={{
          backgroundColor: BG_COLORS[bgColor].toLowerCase(),
        }}
      >
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={changeBgColor}>Change background color</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
