import { createSlice } from "@reduxjs/toolkit";

const scoreSlice = createSlice({
  name: "score",
  initialState: {
    players: [],
  },
  reducers: {
    addPlayer: (state, action) => {
      state.players.push({ name: action.payload, score: 0 });
    },
    increaseScore: (state, action) => {
      state.players[action.payload].score += 1;
    },
    decreaseScore: (state, action) => {
      state.players[action.payload].score -= 1;
    },
    resetScore: (state, action) => {
      // If action.payload is provided, reset specific player
      if (action.payload !== undefined) {
        state.players[action.payload].score = 0;
      } else {
        // If no payload, reset all players
        state.players.forEach((player) => {
          player.score = 0;
        });
      }
    },
  },
});

export const { addPlayer, increaseScore, decreaseScore, resetScore } =
  scoreSlice.actions;
export default scoreSlice.reducer;
