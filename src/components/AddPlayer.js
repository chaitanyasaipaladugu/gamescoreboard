import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPlayer } from "../redux/scoreSlice";

export default function AddPlayer() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleAddPlayer = () => {
    if (name.trim()) {
      dispatch(addPlayer(name));
      setName("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddPlayer();
    }
  };

  return (
    <div className="add-player-section">
      <div className="add-player-form">
        <input
          type="text"
          className="player-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter player name"
        />
        <button className="add-player-btn" onClick={handleAddPlayer}>
          Add Player
        </button>
      </div>
    </div>
  );
}
