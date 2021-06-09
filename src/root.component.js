import React from "react";
import logo from "./logo.svg";
import "./root.css";

export default function Root(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>MFE React App is running</p>
      </header>
    </div>
  );
}
