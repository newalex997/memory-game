import { createContext } from "react";
import { GAME_STEPS, GameContext, PLAYER_TYPES } from "./gameState.types";

export const GameStateContext = createContext<GameContext>([
  {
    playerOne: "",
    playerTwo: "",
    difficulty: 6,
    step: GAME_STEPS.ENROLL,
    activePlayer: PLAYER_TYPES.FIRST,
  },
  () => {},
]);
