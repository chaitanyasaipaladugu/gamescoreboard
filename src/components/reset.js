import React from "react";
import { useDispatch } from "react-redux";
import { resetScore } from "../redux/scoreSlice";

export default function Controls() {
  const dispatch = useDispatch();
  return (
    <div className="reset-controls">
      <button className="reset-all-btn" onClick={() => dispatch(resetScore())}>
        Reset All Scores
      </button>
    </div>
  );
}
