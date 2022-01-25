import React, { useState } from "react";

import Display from "./components/Display";

import "./App.css";

export default function App() {
  const displayFunc = (data)=> {
    console.log("API CALL DATA HERE", data)
  }
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Integration Testing Challenge</a>
      </nav>
      <div className="App">
        <Display displayFunc={displayFunc}/>
      </div>
    </div>
  );
}