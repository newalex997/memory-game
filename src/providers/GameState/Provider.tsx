import { ReactNode, useState } from "react";
import { GAME_STEPS, GameState, PLAYER_TYPES } from "./gameState.types";
import { GameStateContext } from "./Context";

const initialState = {
  playerOne: "",
  playerTwo: "",
  difficulty: 6,
  activePlayer: PLAYER_TYPES.FIRST,
  step: GAME_STEPS.ENROLL,
};

export const GameStateProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<GameState>(initialState);

  return (
    <GameStateContext.Provider value={[state, setState]}>
      {children}
    </GameStateContext.Provider>
  );
};
