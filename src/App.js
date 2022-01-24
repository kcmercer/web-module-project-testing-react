import React, { useState } from "react";

import Display from "./components/Display";
import Episode from './components/Episode';
import Show from './components/Show';

import "./App.css";

const providedExample = {
  id: 1,
  image: '',
  name: 'This is a test name',
  season: 1,
  number: 1,
  summary: 'This is a test summary',
  runtime: 1
}

const exampleData = {
  name: 'This is a test show',
  summary: 'This is a test summary',
  seasons: [
      {id: 1, name: 'Season 1', episodes: []},
      {id: 2, name: 'Season 2', episodes: []},
      {id: 3, name: 'Season 3', episodes: []},
  ]
}

export default function App() {
  const displayFunc = (data)=> {
    console.log(data);
  }

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Integration Testing Challenge</a>
      </nav>
      <div className="App">
        <Display displayFun={displayFunc}/>
      </div>
    </div>
  );
}