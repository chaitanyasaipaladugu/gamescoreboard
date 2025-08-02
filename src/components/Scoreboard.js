import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseScore, decreaseScore } from "../redux/scoreSlice";

export default function Scoreboard() {
  const players = useSelector((state) => state.score.players);
  const dispatch = useDispatch();

  const highest = Math.max(...players.map((p) => p.score), 0);

  return (
    <div className="scoreboard-container">
      {players.map((player, index) => (
        <div
          key={index}
          className={`player-card ${
            player.score === highest && highest > 0 ? "leader" : ""
          }`}
        >
          <h3 className="player-name">{player.name}</h3>
          <div className="score-display">
            <div className="score-label">Score</div>
            <div className="score-value">{player.score}</div>
          </div>
          <div className="score-controls">
            <button
              className="score-btn increase-btn"
              onClick={() => dispatch(increaseScore(index))}
            >
              +
            </button>
            <button
              className="score-btn decrease-btn"
              onClick={() => dispatch(decreaseScore(index))}
            >
              -
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
