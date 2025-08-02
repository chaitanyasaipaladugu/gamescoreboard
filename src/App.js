import React from "react";
import AddPlayer from "./components/AddPlayer";
import Scoreboard from "./components/Scoreboard";
import Controls from "./components/reset";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1 className="app-title">Game Scoreboard</h1>
        <p className="app-subtitle">Track scores with style</p>
      </header>
      <AddPlayer />
      <Scoreboard />
      <Controls />
    </div>
  );
}
